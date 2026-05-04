// app/api/sendContactEmail/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
// (optionnel mais utile) force l'exécution dynamique côté Next
export const dynamic = "force-dynamic";

type ContactPayload = {
  name: string;
  email?: string;
  phone: string;
  carModel: string;
  service: string;
  date?: string;
  time?: string;
  message?: string;
};

function safe(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// --- Transporter "global" avec pool: plus stable en serverless ---
const host = process.env.SES_SMTP_HOST;
const port = Number(process.env.SES_SMTP_PORT || "587");
const user = process.env.SES_SMTP_USER;
const pass = process.env.SES_SMTP_PASS;

const transporter =
  host && user && pass
    ? nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },

        // IMPORTANT: stabilité
        pool: true,
        maxConnections: 1,
        maxMessages: 50,

        // timeouts (évite "ça reste bloqué")
        connectionTimeout: 15_000,
        greetingTimeout: 15_000,
        socketTimeout: 20_000,

        // TLS propre
        tls: {
          servername: host,
          minVersion: "TLSv1.2",
        },
      })
    : null;

async function sendWithRetry(mail: nodemailer.SendMailOptions, retries = 1) {
  let lastErr: any = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      if (!transporter) throw new Error("SMTP transporter not configured");
      const info = await transporter.sendMail(mail);
      return info; // succès
    } catch (e: any) {
      lastErr = e;

      // Retry seulement sur erreurs réseau/temporaires
      const msg = String(e?.message || "");
      const code = String(e?.code || "");
      const shouldRetry =
        code === "ETIMEDOUT" ||
        code === "ECONNRESET" ||
        code === "EPIPE" ||
        code === "ENOTFOUND" ||
        msg.toLowerCase().includes("timeout") ||
        msg.toLowerCase().includes("connection") ||
        msg.toLowerCase().includes("greeting");

      if (!shouldRetry || attempt === retries) break;

      // petite attente avant retry
      await new Promise((r) => setTimeout(r, 700 * (attempt + 1)));
    }
  }

  throw lastErr;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: safe(body.name),
      email: safe(body.email) || "",
      phone: safe(body.phone),
      carModel: safe(body.carModel),
      service: safe(body.service),
      date: safe(body.date) || "",
      time: safe(body.time) || "",
      message: safe(body.message) || "",
    };

    if (!payload.name || !payload.phone || !payload.carModel || !payload.service) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const from = process.env.SES_FROM; // ex: "Rodeo Drive <info@rodeodrive.qa>" OU votre email vérifié
    const to = process.env.SES_TO;

    if (!host || !user || !pass || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "SES SMTP is not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const subject = `New Contact Request — ${payload.service} — ${payload.name}`;

    const text = [
      `New message from website contact form`,
      ``,
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email || "-"}`,
      `Car Model: ${payload.carModel}`,
      `Service: ${payload.service}`,
      `Preferred Date: ${payload.date || "-"}`,
      `Preferred Time: ${payload.time || "-"}`,
      ``,
      `Message:`,
      `${payload.message || "-"}`,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">New Contact Request</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><b>Name</b></td><td>${escapeHtml(payload.name)}</td></tr>
          <tr><td><b>Phone</b></td><td>${escapeHtml(payload.phone)}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(payload.email || "-")}</td></tr>
          <tr><td><b>Car Model</b></td><td>${escapeHtml(payload.carModel)}</td></tr>
          <tr><td><b>Service</b></td><td>${escapeHtml(payload.service)}</td></tr>
          <tr><td><b>Preferred Date</b></td><td>${escapeHtml(payload.date || "-")}</td></tr>
          <tr><td><b>Preferred Time</b></td><td>${escapeHtml(payload.time || "-")}</td></tr>
        </table>
        <h3 style="margin:16px 0 8px">Message</h3>
        <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:8px">
          ${escapeHtml(payload.message || "-")}
        </div>
      </div>
    `;

    // IMPORTANT: replyTo uniquement si email valide
    const replyTo =
      payload.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
        ? payload.email
        : undefined;

    const info = await sendWithRetry(
      {
        from,
        to,
        subject,
        text,
        html,
        replyTo,
      },
      1 // 1 retry
    );

    // Log utile pour Vercel logs
    console.log("SES sendMail ok:", {
      messageId: info?.messageId,
      accepted: info?.accepted,
      rejected: info?.rejected,
      response: info?.response,
    });

    return NextResponse.json({ ok: true, messageId: info?.messageId || null });
  } catch (e: any) {
    console.error("sendContactEmail error:", e);
    return NextResponse.json(
      {
        ok: false,
        error: e?.message || "Failed to send email.",
        code: e?.code || null,
      },
      { status: 500 }
    );
  }
}
