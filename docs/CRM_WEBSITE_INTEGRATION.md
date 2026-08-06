# Website → CRM Integration

How leads from `rodeodrive.qa` reach the Rodeo CRM, and the prompt to give the
CRM project so it can consume and report on them.

---

## 1. Architecture

```
Visitor lands on rodeodrive.qa  (maybe from a Google Ad, Instagram, or search)
        │
        │  AttributionTracker stores utm_*, gclid, fbclid, referrer,
        │  landing page, session id  →  localStorage (sticky for the visit)
        ▼
Visitor submits a form (booking / SPF WhatsApp / quote)
        │
        │  leadClient.ts attaches the stored attribution
        ▼
POST /api/lead                        (Next.js SSR route, runs on Amplify)
        │
        ├──► SigV4-signed GraphQL  ──►  CRM AppSync  ──►  SalesLead  ✅ primary
        │      (IAM auth, no API key, no shared secret)
        │
        └──► SES notification email                          (secondary)
```

**Both downstream steps are best-effort.** If the CRM or SMTP is down, the
visitor still gets a success response and the failure is logged loudly in
Amplify CloudWatch. Losing a lead is worse than a delayed sync.

### Why IAM and not an API key

The CRM's AppSync API already exposes `AWS_IAM` as an additional auth provider,
so no change was needed in the CRM repo. The website's Amplify compute role
signs the request directly.

---

## 2. What was provisioned in AWS

| Resource | Value |
| --- | --- |
| CRM AppSync API (main) | `joc4j3setzf47huyftpowbyex4` |
| CRM GraphQL endpoint | `https://2n24wt744zcg3nem2q2x4fy7im.appsync-api.ap-south-1.amazonaws.com/graphql` |
| Website Amplify app | `deiuo8tj0f4x6` (WEB_COMPUTE / Next.js SSR) |
| Compute role | `arn:aws:iam::115246381405:role/RodeoWebsiteCrmIngestRole` |
| Inline policy | `CrmCreateSalesLeadOnly` |
| Region | `ap-south-1` |

The role grants **exactly one action**:

```
appsync:GraphQL on .../types/Mutation/fields/createSalesLead
```

Verified by IAM policy simulation:

| Operation | Result |
| --- | --- |
| `createSalesLead` | **allowed** |
| `deleteSalesLead` | implicitDeny |
| `listSalesLeads` | implicitDeny |
| `listCustomers` | implicitDeny |

The website can create leads and nothing else. It cannot read customer data,
list existing leads, or delete anything — so a website compromise cannot leak
the CRM database.

### Environment variables (set on the Amplify app)

| Key | Value | Purpose |
| --- | --- | --- |
| `CRM_APPSYNC_ENDPOINT` | *(endpoint above)* | Where to send leads |
| `CRM_AWS_REGION` | `ap-south-1` | SigV4 signing region |
| `CRM_LEAD_SOURCE` | `Website` | `SalesLead.source` |
| `CRM_LEAD_STATUS` | `New` | `SalesLead.status` — **align with your pipeline's first stage** |
| `CRM_LEAD_CREATED_BY` | `rodeodrive.qa` | `SalesLead.createdBy` |
| `CRM_LEAD_CODE_PREFIX` | `WEB` | Lead code prefix |

> **Check `CRM_LEAD_STATUS` and `CRM_LEAD_SOURCE`.** If the CRM pipeline's first
> column is called something other than `New`, website leads will land outside
> the board. Change the env var — no code deploy needed.

---

## 3. The data contract

Each website lead becomes one `SalesLead` row:

| SalesLead field | Filled with |
| --- | --- |
| `leadCode` | `WEB-YYMMDD-XXXXXX` (unique, crypto-random suffix) |
| `customerName` | Name from the form |
| `mobile` | Phone normalized to E.164 (`+974…`) for WhatsApp dedupe |
| `email` | Email if provided |
| `service` | Selected service(s), comma-joined |
| `vehicleModel` | Car model |
| `source` | `Website` |
| `sourceDetail` | Human-readable provenance, e.g. `Booking Form · google / cpc · ppf-doha · /en/services/full-protection-ppf` |
| `status` | `New` |
| `createdBy` | `rodeodrive.qa` |
| `activityJson` | Full JSON payload — see below |

### `activityJson` shape

```jsonc
{
  "capturedAt": "2026-08-06T10:15:30.000Z",
  "leadCode": "WEB-260806-ACE6B2",
  "channel": "booking",            // booking | contact | whatsapp | call | quote
  "channelLabel": "Booking Form",
  "website": "rodeodrive.qa",
  "language": "ar",
  "pagePath": "/ar/services/full-protection-ppf",
  "message": "Need full body PPF for a G63",
  "preferredDate": "2026-08-12",
  "preferredTime": "04:00 PM",
  "servicesSelected": ["Full Body PPF", "Ceramic Coating"],
  "attribution": {
    "utmSource": "google",
    "utmMedium": "cpc",
    "utmCampaign": "ppf-doha",
    "utmTerm": "حماية سيارات في الدوحة",
    "gclid": "Cj0KCQ...",
    "fbclid": null,
    "referrer": "https://www.google.com/",
    "landingPage": "/ar/services/full-protection-ppf?utm_source=google",
    "firstSeenAt": "2026-08-06T09:58:11.000Z",
    "sessionId": "0b1f...",
    "visitCount": 3,
    "device": "mobile",
    "screen": "390x844"
  }
}
```

`attribution` is the money field — it tells you which ad, keyword, or campaign
produced each paying customer.

---

## 4. Prompt for the CRM project

Paste this into the CRM repo's coding agent.

---

> **Task: build a "Website Leads" module.**
>
> Our marketing website (`rodeodrive.qa`) now writes leads directly into this
> CRM's `SalesLead` model via IAM-authenticated AppSync. No ingestion endpoint
> is needed on your side — the rows already arrive. Build the module that
> surfaces and reports on them.
>
> **How to identify website leads:** `SalesLead.source == "Website"`.
> Rich context is JSON-encoded in `SalesLead.activityJson`.
>
> **`activityJson` schema** (parse defensively — treat every field as optional,
> and never let a malformed payload break the list view):
>
> ```ts
> type WebsiteLeadActivity = {
>   capturedAt: string;              // ISO 8601
>   leadCode: string;                // "WEB-260806-ACE6B2"
>   channel: "booking" | "contact" | "whatsapp" | "call" | "quote";
>   channelLabel: string;
>   website: string;
>   language: "en" | "ar" | null;
>   pagePath: string | null;         // page the lead converted on
>   message: string | null;
>   preferredDate: string | null;
>   preferredTime: string | null;
>   servicesSelected: string[] | null;
>   attribution: {
>     utmSource?: string; utmMedium?: string; utmCampaign?: string;
>     utmTerm?: string; utmContent?: string;
>     gclid?: string; fbclid?: string; msclkid?: string; ttclid?: string;
>     referrer?: string; landingPage?: string;
>     firstSeenAt?: string; sessionId?: string; visitCount?: number;
>     device?: "mobile" | "tablet" | "desktop"; screen?: string;
>   } | null;
> };
> ```
>
> **Build these four things:**
>
> **1. Website Leads list view**
> Filter `SalesLead` to `source == "Website"`. Columns: captured time, lead
> code, customer name, mobile (click-to-WhatsApp), service, channel, campaign
> (`utmSource / utmMedium / utmCampaign`, or `direct`), landing page, status.
> Filters for channel, campaign, language, device, and date range. Default sort
> newest first.
>
> **2. Lead detail panel**
> Show the parsed `activityJson` as a readable "Journey" section: first seen,
> visit count, landing page, referrer, the page they converted on, device and
> language, plus their full message and preferred date/time. Include the raw
> JSON behind a collapsible toggle for debugging.
>
> **3. Marketing analytics dashboard**
> This is what tells the owner where to spend money. Compute from
> `SalesLead` rows where `source == "Website"`:
> - Leads over time (day / week / month), split by channel
> - **Leads by campaign** — group by `utmSource`/`utmMedium`/`utmCampaign`;
>   treat missing UTMs as `direct / organic`
> - **Leads by landing page** — which pages actually convert
> - **Leads by service** — what people ask for most
> - Language split (Arabic vs English) and device split
> - **Won-rate per campaign**: of leads from campaign X, what share reached a
>   won/closed status. Use existing `status`/`outcome` values — do not invent
>   new ones. This is the number that decides ad budget.
> - Paid vs organic: a lead is paid if `gclid`, `fbclid`, `msclkid`, `ttclid`
>   is present or `utmMedium` is one of `cpc`, `ppc`, `paid`, `paid_social`.
>
> **4. Real-time notification**
> Subscribe to `onCreateSalesLead` filtered to `source == "Website"` and raise
> an in-app toast plus a badge on the Website Leads nav item. Speed-to-lead is
> the single biggest driver of close rate for this business — the goal is for a
> salesperson to call within five minutes.
>
> **Constraints:**
> - Do not change the `SalesLead` schema or its auth rules. The website depends
>   on the current `createSalesLead` contract; breaking it silently drops leads.
> - Do not remove `AWS_IAM` from the API's authentication providers.
> - Reuse existing CRM UI components, table primitives, and chart library.
> - `activityJson` may be absent or malformed on manually-created leads —
>   render those rows without the journey section rather than erroring.

---

## 5. Deploying the website side

1. Review and merge the website changes.
2. Redeploy the `main` branch in Amplify — **required**, because the compute
   role and environment variables are only picked up by a new deployment.
3. Verify (see below).

## 6. Verification

After deploying, submit a real booking on the live site, then confirm:

- A `SalesLead` appears with `source = "Website"` and a `WEB-…` lead code.
- `sourceDetail` shows the channel and campaign.
- `activityJson` parses and contains the attribution block.

To prove attribution end-to-end, visit with a tagged URL first:

```
https://www.rodeodrive.qa/en/book?utm_source=google&utm_medium=cpc&utm_campaign=test
```

then submit the form. The campaign must appear on the resulting lead.

If a lead does not arrive, check Amplify CloudWatch logs for `[lead] CRM
delivery failed` — the `reason` field states exactly what went wrong.

> **Note on CRM automations:** this CRM has WhatsApp automation tables. If any
> automation fires on new `SalesLead` rows, a test submission may send a real
> WhatsApp message to the number used. Test with a number you control.
