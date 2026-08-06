// Unified lead intake for rodeodrive.qa.
//
// Every lead surface on the site posts here: booking form, contact form,
// quote request, and high-intent taps on WhatsApp / call buttons. The handler
// writes the lead into the CRM (SalesLead) and sends a notification email.
//
// CRM delivery and email are both best-effort: the visitor always gets a
// success response as long as we captured a usable name and phone, because
// losing a lead to a downstream outage is worse than a delayed sync.

import { NextResponse } from "next/server";
import { submitLeadToCrm, type LeadChannel, type LeadInput } from "@/app/lib/crm/leads";
import { escapeHtml, sendNotification } from "@/app/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_CHANNELS: LeadChannel[] = ["booking", "contact", "whatsapp", "call", "quote"];

// --- Lightweight abuse control --------------------------------------------
// Serverless instances are short-lived so this is a speed bump for floods,
// not a hard guarantee. It costs nothing and stops naive bot spam.

const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 500) {
    // Bound memory on long-lived instances.
    Array.from(hits.keys()).forEach((key) => {
      const times = hits.get(key) ?? [];
      if (!times.some((t: number) => now - t < RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    });
  }
  return recent.length > RATE_LIMIT_MAX;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

// --- Notification body -----------------------------------------------------

function buildEmail(lead: LeadInput, leadCode: string, crmOk: boolean) {
  const a = lead.attribution ?? {};
  const rows: Array<[string, string]> = [
    ["Lead Code", leadCode],
    ["Channel", lead.channel],
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "-"],
    ["Service", lead.services?.length ? lead.services.join(", ") : lead.service || "-"],
    ["Vehicle", lead.carModel || "-"],
    ["Preferred Date", lead.preferredDate || "-"],
    ["Preferred Time", lead.preferredTime || "-"],
    ["Page", lead.pagePath || "-"],
    ["Language", lead.language || "-"],
    ["Campaign", [a.utmSource, a.utmMedium, a.utmCampaign].filter(Boolean).join(" / ") || "direct"],
    ["Referrer", a.referrer || "-"],
    ["Landing Page", a.landingPage || "-"],
    ["CRM", crmOk ? "Synced" : "NOT synced — add manually"],
  ];

  const text = [
    `New website lead — ${lead.channel}`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    lead.message || "-",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6">
      <h2 style="margin:0 0 12px">New Website Lead — ${escapeHtml(lead.channel)}</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="border-bottom:1px solid #eee"><b>${escapeHtml(k)}</b></td>` +
              `<td style="border-bottom:1px solid #eee">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:16px 0 8px">Message</h3>
      <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:8px">
        ${escapeHtml(lead.message || "-")}
      </div>
    </div>
  `;

  return { text, html };
}

// --- Handler ---------------------------------------------------------------

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;

    // Honeypot: real users never fill a hidden field.
    if (str(body.website_url)) {
      return NextResponse.json({ ok: true, leadCode: null, ignored: true });
    }

    const ip = clientIp(req);
    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const channelRaw = str(body.channel) as LeadChannel;
    const channel: LeadChannel = VALID_CHANNELS.includes(channelRaw) ? channelRaw : "contact";

    const lead: LeadInput = {
      channel,
      name: str(body.name),
      phone: str(body.phone),
      email: str(body.email),
      service: str(body.service),
      services: Array.isArray(body.services) ? (body.services as unknown[]).map(str).filter(Boolean) : undefined,
      carModel: str(body.carModel),
      vehicleMake: str(body.vehicleMake),
      vehiclePlate: str(body.vehiclePlate),
      message: str(body.message),
      preferredDate: str(body.preferredDate) || str(body.date),
      preferredTime: str(body.preferredTime) || str(body.time),
      language: str(body.language),
      pagePath: str(body.pagePath),
      attribution: (body.attribution as LeadInput["attribution"]) ?? undefined,
    };

    if (!lead.name || !lead.phone) {
      return NextResponse.json(
        { ok: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const crm = await submitLeadToCrm(lead);

    if (!crm.delivered) {
      // Loud on the server so a broken CRM link is visible in Amplify logs
      // rather than silently dropping revenue.
      console.error("[lead] CRM delivery failed", {
        leadCode: crm.leadCode,
        channel: lead.channel,
        reason: crm.reason,
      });
    }

    const { text, html } = buildEmail(lead, crm.leadCode, crm.delivered);
    const mail = await sendNotification({
      subject: `New Lead — ${lead.channel} — ${lead.name}${crm.delivered ? "" : " [CRM SYNC FAILED]"}`,
      text,
      html,
      replyTo: lead.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) ? lead.email : undefined,
    });

    return NextResponse.json({
      ok: true,
      leadCode: crm.leadCode,
      crm: { delivered: crm.delivered, reason: crm.reason ?? null },
      email: { sent: mail.sent },
    });
  } catch (e: any) {
    console.error("[lead] handler error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Failed to submit lead." },
      { status: 500 }
    );
  }
}
