"use client";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type MetaPixelParams = Record<string, unknown>;

export type MetaPixelContext = {
  language?: string;
  pagePath?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// ---------------------------------------------------------------------------
// Schema validation (dev-only)
// Required on every non-PageView event.
// See TRACKING_SCHEMA.md for the full field reference.
// ---------------------------------------------------------------------------

const REQUIRED_SCHEMA_KEYS: ReadonlyArray<string> = [
  "source_section",
  "cta_variant",
  "intent_type",
];

// Keys required only when intent_type === "contact"
const CONTACT_REQUIRED_KEYS: ReadonlyArray<string> = ["contact_channel"];

function validateSchema(eventName: string, params: MetaPixelParams): void {
  if (process.env.NODE_ENV !== "development") return;
  if (eventName === "PageView") return;

  const missing = REQUIRED_SCHEMA_KEYS.filter((k) => !(k in params));
  if (missing.length) {
    console.warn(
      `[MetaPixel] "${eventName}" is missing required schema keys: ${missing.join(", ")}.\n` +
        `See app/lib/TRACKING_SCHEMA.md for the full field reference.`
    );
  }

  if (params.intent_type === "contact") {
    const missingContact = CONTACT_REQUIRED_KEYS.filter((k) => !(k in params));
    if (missingContact.length) {
      console.warn(
        `[MetaPixel] "${eventName}" with intent_type "contact" is missing: ${missingContact.join(", ")}.`
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function canTrack() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

function normalizeLanguage(input?: string) {
  if (!input) return undefined;
  return input.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function currentPathWithQuery() {
  if (typeof window === "undefined") return undefined;
  const query = window.location.search || "";
  return `${window.location.pathname}${query}`;
}

function buildEventParams(params?: MetaPixelParams, context?: MetaPixelContext): MetaPixelParams {
  const merged: MetaPixelParams = { ...(params ?? {}) };

  const language =
    normalizeLanguage(context?.language) ||
    normalizeLanguage(typeof document !== "undefined" ? document.documentElement.lang : undefined);
  const pagePath = context?.pagePath || currentPathWithQuery();
  const pageUrl = typeof window !== "undefined" ? window.location.href : undefined;

  if (language) merged.language = language;
  if (pagePath) merged.page_path = pagePath;
  if (pageUrl) merged.page_url = pageUrl;

  return merged;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function trackMetaEvent(
  eventName: string,
  params?: MetaPixelParams,
  context?: MetaPixelContext
) {
  if (!canTrack()) return;

  const eventParams = buildEventParams(params, context);

  validateSchema(eventName, eventParams);

  if (Object.keys(eventParams).length > 0) {
    window.fbq!("track", eventName, eventParams);
    return;
  }

  window.fbq!("track", eventName);
}

export function trackLead(params?: MetaPixelParams, context?: MetaPixelContext) {
  trackMetaEvent("Lead", params, context);
}

export function trackContact(params?: MetaPixelParams, context?: MetaPixelContext) {
  trackMetaEvent("Contact", params, context);
}

export function trackCompleteRegistration(
  params?: MetaPixelParams,
  context?: MetaPixelContext
) {
  trackMetaEvent("CompleteRegistration", params, context);
}
