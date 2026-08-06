// Shared SES/SMTP notification mailer for lead surfaces.
//
// Kept separate from any single route so booking, contact, and quote flows
// share one pooled transporter instead of opening a connection each.

import nodemailer from "nodemailer";

const host = process.env.SES_SMTP_HOST;
const port = Number(process.env.SES_SMTP_PORT || "587");
const user = process.env.SES_SMTP_USER;
const pass = process.env.SES_SMTP_PASS;

export const mailerConfigured = Boolean(host && user && pass && process.env.SES_FROM && process.env.SES_TO);

const transporter =
  host && user && pass
    ? nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
        pool: true,
        maxConnections: 1,
        maxMessages: 50,
        connectionTimeout: 15_000,
        greetingTimeout: 15_000,
        socketTimeout: 20_000,
        tls: { servername: host, minVersion: "TLSv1.2" },
      })
    : null;

export function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Send a notification email. Never throws — email is a secondary channel now
 * that leads are persisted in the CRM, so a mail failure must not fail a form.
 */
export async function sendNotification(opts: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}): Promise<{ sent: boolean; reason?: string }> {
  if (!transporter || !mailerConfigured) {
    return { sent: false, reason: "SMTP not configured" };
  }

  try {
    await transporter.sendMail({
      from: process.env.SES_FROM,
      to: process.env.SES_TO,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
      replyTo: opts.replyTo,
    });
    return { sent: true };
  } catch (e: any) {
    return { sent: false, reason: String(e?.message || e) };
  }
}
