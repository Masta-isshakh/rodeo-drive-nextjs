"use client";

// Marketing attribution capture.
//
// Records how each visitor reached the site and keeps that context sticky
// across the whole visit, so a lead submitted three pages later still carries
// the ad, campaign, or search that produced it. The result is attached to
// every lead sent to the CRM.

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

const STORE_KEY = "rd_attr_v1";
const SESSION_KEY = "rd_session_v1";

const PARAM_MAP: Array<[string, keyof Attribution]> = [
  ["utm_source", "utmSource"],
  ["utm_medium", "utmMedium"],
  ["utm_campaign", "utmCampaign"],
  ["utm_term", "utmTerm"],
  ["utm_content", "utmContent"],
  ["gclid", "gclid"],
  ["fbclid", "fbclid"],
  ["msclkid", "msclkid"],
  ["ttclid", "ttclid"],
];

function isBrowser() {
  return typeof window !== "undefined";
}

function readStore(): Attribution {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function writeStore(value: Attribution) {
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(value));
  } catch {
    /* private mode / storage disabled — attribution degrades, forms still work */
  }
}

function newId() {
  try {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  } catch {
    /* fall through to the manual id below */
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function getSessionId(): string {
  if (!isBrowser()) return "";
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id = newId();
    window.sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return "";
  }
}

/** True when this page load carries any campaign marker. */
function readCampaignFromUrl(): Partial<Attribution> {
  const found: Partial<Attribution> = {};
  if (!isBrowser()) return found;

  const params = new URLSearchParams(window.location.search);
  for (const [param, key] of PARAM_MAP) {
    const value = params.get(param);
    if (value) found[key] = value.slice(0, 200) as never;
  }
  return found;
}

function describeDevice(): { device: string; screen: string } {
  if (!isBrowser()) return { device: "", screen: "" };
  const w = window.innerWidth;
  const device = w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop";
  return { device, screen: `${window.screen?.width ?? 0}x${window.screen?.height ?? 0}` };
}

/**
 * Capture attribution for the current page load and persist it.
 * Safe to call on every route change — a fresh campaign click overwrites the
 * stored campaign, otherwise the original touch is preserved.
 */
export function captureAttribution(): Attribution {
  if (!isBrowser()) return {};

  const stored = readStore();
  const campaign = readCampaignFromUrl();
  const hasNewCampaign = Object.keys(campaign).length > 0;
  const { device, screen } = describeDevice();

  const isFirstEver = !stored.firstSeenAt;

  const next: Attribution = {
    ...stored,
    // A new campaign click always wins — it is the touch that produced this visit.
    ...(hasNewCampaign ? campaign : {}),
    firstSeenAt: stored.firstSeenAt || new Date().toISOString(),
    landingPage: stored.landingPage || window.location.pathname + window.location.search,
    referrer: stored.referrer || (document.referrer ? document.referrer.slice(0, 500) : "direct"),
    sessionId: getSessionId(),
    visitCount: isFirstEver ? 1 : stored.visitCount ?? 1,
    device,
    screen,
  };

  writeStore(next);
  return next;
}

/** Bump the visit counter once per browser session. */
export function markSessionStart() {
  if (!isBrowser()) return;
  const flagKey = `${SESSION_KEY}_counted`;
  try {
    if (window.sessionStorage.getItem(flagKey)) return;
    window.sessionStorage.setItem(flagKey, "1");
    const stored = readStore();
    writeStore({ ...stored, visitCount: (stored.visitCount ?? 0) + 1 });
  } catch {
    /* storage disabled */
  }
}

/** Read the current attribution to attach to an outgoing lead. */
export function getAttribution(): Attribution {
  if (!isBrowser()) return {};
  const stored = readStore();
  if (!stored.firstSeenAt) return captureAttribution();
  const { device, screen } = describeDevice();
  return { ...stored, sessionId: getSessionId(), device, screen };
}
