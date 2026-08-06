// Server-only AWS SigV4 client for the Rodeo Drive CRM AppSync API.
//
// The CRM GraphQL API (app "CRM-Rodeo") exposes AWS_IAM as an additional
// authentication provider, so the website's SSR compute role can call it
// directly — no API key, no Cognito user, no change to the CRM repo.
//
// Credentials resolve from the standard AWS chain, which Amplify Hosting
// injects into the SSR runtime when a compute role is attached. Explicit
// CRM_AWS_* variables override it for local development.

import crypto from "node:crypto";

const SERVICE = "appsync";

export type CrmConfig = {
  endpoint: string;
  region: string;
};

type AwsCreds = {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
};

export function getCrmConfig(): CrmConfig | null {
  const endpoint = process.env.CRM_APPSYNC_ENDPOINT;
  const region = process.env.CRM_AWS_REGION || process.env.AWS_REGION || "ap-south-1";
  if (!endpoint) return null;
  return { endpoint, region };
}

function resolveCreds(): AwsCreds | null {
  const accessKeyId =
    process.env.CRM_AWS_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || "";
  const secretAccessKey =
    process.env.CRM_AWS_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || "";
  const sessionToken =
    process.env.CRM_AWS_SESSION_TOKEN || process.env.AWS_SESSION_TOKEN || undefined;

  if (!accessKeyId || !secretAccessKey) return null;
  return { accessKeyId, secretAccessKey, sessionToken };
}

// --- SigV4 primitives ------------------------------------------------------

function sha256Hex(data: string) {
  return crypto.createHash("sha256").update(data, "utf8").digest("hex");
}

function hmac(key: crypto.BinaryLike, data: string) {
  return crypto.createHmac("sha256", key).update(data, "utf8").digest();
}

function amzDates(now: Date) {
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, ""); // 20260806T101530Z
  return { amzDate, dateStamp: amzDate.slice(0, 8) };
}

/**
 * Sign a POST request to AppSync with SigV4 and return the headers to send.
 */
function signRequest(opts: {
  url: URL;
  body: string;
  region: string;
  creds: AwsCreds;
  now?: Date;
}): Record<string, string> {
  const { url, body, region, creds } = opts;
  const { amzDate, dateStamp } = amzDates(opts.now ?? new Date());

  const contentType = "application/json; charset=UTF-8";
  const host = url.host;

  // Headers included in the signature, sorted by lowercase name.
  const signed: Record<string, string> = {
    "content-type": contentType,
    host,
    "x-amz-date": amzDate,
  };
  if (creds.sessionToken) signed["x-amz-security-token"] = creds.sessionToken;

  const signedHeaderNames = Object.keys(signed).sort();
  const canonicalHeaders = signedHeaderNames.map((h) => `${h}:${signed[h]}\n`).join("");
  const signedHeadersLine = signedHeaderNames.join(";");
  const payloadHash = sha256Hex(body);

  const canonicalRequest = [
    "POST",
    url.pathname || "/",
    url.search.replace(/^\?/, ""),
    canonicalHeaders,
    signedHeadersLine,
    payloadHash,
  ].join("\n");

  const scope = `${dateStamp}/${region}/${SERVICE}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    scope,
    sha256Hex(canonicalRequest),
  ].join("\n");

  const kDate = hmac(`AWS4${creds.secretAccessKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, SERVICE);
  const kSigning = hmac(kService, "aws4_request");
  const signature = crypto.createHmac("sha256", kSigning).update(stringToSign, "utf8").digest("hex");

  const authorization =
    `AWS4-HMAC-SHA256 Credential=${creds.accessKeyId}/${scope}, ` +
    `SignedHeaders=${signedHeadersLine}, Signature=${signature}`;

  const headers: Record<string, string> = {
    "content-type": contentType,
    "x-amz-date": amzDate,
    authorization,
  };
  if (creds.sessionToken) headers["x-amz-security-token"] = creds.sessionToken;
  return headers;
}

// --- GraphQL execution -----------------------------------------------------

export type GraphQLResult<T> = {
  ok: boolean;
  data?: T;
  errors?: Array<{ message: string }>;
  /** Why the call could not even be attempted (missing config/credentials). */
  skipped?: "no-config" | "no-credentials";
};

/**
 * Execute a GraphQL operation against the CRM with IAM auth.
 * Never throws — callers treat CRM delivery as best-effort so a CRM outage
 * can never break a customer-facing form submission.
 */
export async function crmGraphQL<T = unknown>(
  query: string,
  variables: Record<string, unknown>,
  timeoutMs = 8000
): Promise<GraphQLResult<T>> {
  const config = getCrmConfig();
  if (!config) return { ok: false, skipped: "no-config" };

  const creds = resolveCreds();
  if (!creds) return { ok: false, skipped: "no-credentials" };

  const url = new URL(config.endpoint);
  const body = JSON.stringify({ query, variables });
  const headers = signRequest({ url, body, region: config.region, creds });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url.toString(), {
      method: "POST",
      headers,
      body,
      signal: controller.signal,
      cache: "no-store",
    });

    const text = await res.text();
    let json: any = null;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      return { ok: false, errors: [{ message: `Non-JSON response (${res.status}): ${text.slice(0, 300)}` }] };
    }

    if (!res.ok) {
      const message = json?.errors?.[0]?.message || json?.message || `HTTP ${res.status}`;
      return { ok: false, errors: [{ message }] };
    }
    if (json?.errors?.length) {
      return { ok: false, data: json.data, errors: json.errors };
    }
    return { ok: true, data: json?.data as T };
  } catch (e: any) {
    const message = e?.name === "AbortError" ? `CRM request timed out after ${timeoutMs}ms` : String(e?.message || e);
    return { ok: false, errors: [{ message }] };
  } finally {
    clearTimeout(timer);
  }
}
