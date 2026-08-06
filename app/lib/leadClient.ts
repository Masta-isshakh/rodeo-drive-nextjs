"use client";

// Client helper that every lead form uses to reach /api/lead.
// Automatically attaches the visitor's marketing attribution so the CRM
// records which ad, campaign, or search produced the lead.

import { getAttribution } from "./attribution";

export type SubmitLeadArgs = {
  channel: "booking" | "contact" | "whatsapp" | "call" | "quote";
  name: string;
  phone: string;
  email?: string;
  service?: string;
  services?: string[];
  carModel?: string;
  vehicleMake?: string;
  vehiclePlate?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  language?: string;
  pagePath?: string;
};

export type SubmitLeadResult = {
  ok: boolean;
  leadCode?: string | null;
  crm?: { delivered: boolean; reason: string | null };
  error?: string;
};

function buildBody(args: SubmitLeadArgs) {
  return JSON.stringify({
    ...args,
    pagePath: args.pagePath ?? (typeof window !== "undefined" ? window.location.pathname : undefined),
    attribution: getAttribution(),
    website_url: "", // honeypot stays empty for real users
  });
}

/**
 * Submit a lead and wait for the result. Use for in-page forms where the
 * visitor stays on the site and expects a confirmation.
 */
export async function submitLead(args: SubmitLeadArgs): Promise<SubmitLeadResult> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: buildBody(args),
    });
    const json = (await res.json()) as SubmitLeadResult;
    return json;
  } catch (e: any) {
    return { ok: false, error: String(e?.message || e) };
  }
}

/**
 * Submit a lead when the visitor is about to leave the page — for example a
 * form that hands off to WhatsApp. `keepalive` lets the request complete
 * after navigation, so the lead is captured even if the customer never
 * actually sends the WhatsApp message.
 */
export function submitLeadKeepalive(args: SubmitLeadArgs): void {
  try {
    void fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: buildBody(args),
      keepalive: true,
    }).catch(() => {
      /* best-effort: the WhatsApp hand-off must not be blocked */
    });
  } catch {
    /* ignore */
  }
}
