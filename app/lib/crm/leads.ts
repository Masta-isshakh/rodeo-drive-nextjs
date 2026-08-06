// Maps website lead submissions onto the CRM's SalesLead model and delivers
// them over IAM-authenticated AppSync.
//
// Every customer-facing surface on the site (booking form, contact form,
// WhatsApp tap, call tap, quote request) funnels through submitLeadToCrm so
// that one lead shape — and one attribution record — reaches the CRM.

import crypto from "node:crypto";
import { crmGraphQL } from "./appsync";

// --- Public types ----------------------------------------------------------

export type LeadChannel = "booking" | "contact" | "whatsapp" | "call" | "quote";

/** Marketing attribution collected on the client and forwarded with the lead. */
export type Attribution = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  ttclid?: string;
  referrer?: string;
  landingPage?: string;
  firstSeenAt?: string;
  sessionId?: string;
  visitCount?: number;
  device?: string;
  screen?: string;
};

export type LeadInput = {
  channel: LeadChannel;
  name: string;
  phone: string;
  email?: string;
  /** Single service label, or use `services` for multi-select forms. */
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
  attribution?: Attribution;
};

export type LeadDeliveryResult = {
  delivered: boolean;
  leadCode: string;
  id?: string;
  reason?: string;
};

// --- Configuration ---------------------------------------------------------

// These control where the lead lands in the CRM pipeline. They are env-driven
// so the values can be aligned with the CRM's own vocabulary without a deploy.
const LEAD_SOURCE = process.env.CRM_LEAD_SOURCE || "Website";
const LEAD_STATUS = process.env.CRM_LEAD_STATUS || "New";
const LEAD_CREATED_BY = process.env.CRM_LEAD_CREATED_BY || "rodeodrive.qa";
const LEAD_ASSIGNEE = process.env.CRM_LEAD_ASSIGNEE || undefined;
const LEAD_CODE_PREFIX = process.env.CRM_LEAD_CODE_PREFIX || "WEB";

// --- Helpers ---------------------------------------------------------------

const CHANNEL_LABEL: Record<LeadChannel, string> = {
  booking: "Booking Form",
  contact: "Contact Form",
  whatsapp: "WhatsApp Click",
  call: "Call Click",
  quote: "Quote Request",
};

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

/**
 * Normalize Qatari mobile numbers to E.164 so the CRM can dedupe against
 * WhatsApp contacts, which are stored with the country code.
 */
export function normalizeQatarPhone(raw: string): string {
  const trimmed = clean(raw);
  if (!trimmed) return "";

  let digits = trimmed.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  digits = digits.replace(/\D/g, "");

  if (digits.startsWith("00974")) return `+${digits.slice(2)}`;
  if (digits.startsWith("974") && digits.length >= 11) return `+${digits}`;
  if (digits.length === 8) return `+974${digits}`; // local Qatari mobile
  return digits ? `+${digits}` : "";
}

function generateLeadCode(): string {
  const now = new Date();
  const y = String(now.getUTCFullYear()).slice(2);
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const rand = crypto.randomBytes(3).toString("hex").toUpperCase(); // 6 chars
  return `${LEAD_CODE_PREFIX}-${y}${m}${d}-${rand}`;
}

function resolveService(input: LeadInput): string {
  if (input.services?.length) return input.services.join(", ");
  return clean(input.service);
}

/**
 * A short, human-readable provenance string. This is what a salesperson sees
 * in the CRM list view, so it leads with the channel and the paid-traffic
 * campaign when there is one.
 */
function buildSourceDetail(input: LeadInput): string {
  const a = input.attribution ?? {};
  const parts: string[] = [CHANNEL_LABEL[input.channel] ?? input.channel];

  if (a.utmSource || a.utmMedium) {
    parts.push([a.utmSource || "direct", a.utmMedium || "none"].join(" / "));
  } else if (a.gclid) {
    parts.push("google / cpc");
  } else if (a.fbclid) {
    parts.push("meta / paid");
  } else if (a.referrer) {
    try {
      parts.push(new URL(a.referrer).hostname.replace(/^www\./, ""));
    } catch {
      /* referrer not a valid URL — skip it */
    }
  }

  if (a.utmCampaign) parts.push(a.utmCampaign);
  if (input.pagePath) parts.push(input.pagePath);

  return parts.filter(Boolean).join(" · ").slice(0, 500);
}

/**
 * Everything that does not have a dedicated SalesLead column goes here, so no
 * detail the customer gave us is lost.
 */
function buildActivityJson(input: LeadInput, leadCode: string): string {
  const payload = {
    capturedAt: new Date().toISOString(),
    leadCode,
    channel: input.channel,
    channelLabel: CHANNEL_LABEL[input.channel] ?? input.channel,
    website: "rodeodrive.qa",
    language: input.language || null,
    pagePath: input.pagePath || null,
    message: clean(input.message) || null,
    preferredDate: clean(input.preferredDate) || null,
    preferredTime: clean(input.preferredTime) || null,
    servicesSelected: input.services ?? null,
    attribution: input.attribution ?? null,
  };

  // SalesLead.activityJson is a String column; keep it bounded.
  return JSON.stringify(payload).slice(0, 20000);
}

// --- Mutation --------------------------------------------------------------

const CREATE_SALES_LEAD = /* GraphQL */ `
  mutation CreateWebsiteLead($input: CreateSalesLeadInput!) {
    createSalesLead(input: $input) {
      id
      leadCode
      customerName
      mobile
      status
      source
    }
  }
`;

/**
 * Deliver a lead to the CRM. Best-effort by design: the caller should still
 * report success to the visitor even when this returns delivered:false, and
 * the failure is logged for follow-up.
 */
export async function submitLeadToCrm(input: LeadInput): Promise<LeadDeliveryResult> {
  const leadCode = generateLeadCode();

  const customerName = clean(input.name);
  const mobile = normalizeQatarPhone(input.phone);

  if (!customerName || !mobile) {
    return { delivered: false, leadCode, reason: "Missing required name or phone" };
  }

  const variables = {
    input: {
      leadCode,
      customerName,
      mobile,
      email: clean(input.email) || undefined,
      service: resolveService(input) || undefined,
      vehicleMake: clean(input.vehicleMake) || undefined,
      vehicleModel: clean(input.carModel) || undefined,
      vehiclePlate: clean(input.vehiclePlate) || undefined,
      source: LEAD_SOURCE,
      sourceDetail: buildSourceDetail(input),
      status: LEAD_STATUS,
      createdBy: LEAD_CREATED_BY,
      assignedTo: LEAD_ASSIGNEE,
      activityJson: buildActivityJson(input, leadCode),
    },
  };

  const res = await crmGraphQL<{ createSalesLead: { id: string; leadCode: string } }>(
    CREATE_SALES_LEAD,
    variables
  );

  if (res.skipped) {
    return {
      delivered: false,
      leadCode,
      reason:
        res.skipped === "no-config"
          ? "CRM_APPSYNC_ENDPOINT is not set"
          : "No AWS credentials available to sign the CRM request",
    };
  }

  if (!res.ok) {
    return {
      delivered: false,
      leadCode,
      reason: res.errors?.map((e) => e.message).join(" | ") || "Unknown CRM error",
    };
  }

  return {
    delivered: true,
    leadCode: res.data?.createSalesLead?.leadCode || leadCode,
    id: res.data?.createSalesLead?.id,
  };
}
