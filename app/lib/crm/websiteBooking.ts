import type { LeadInput } from "./leads";
import { websiteBookingEndpoint, websiteSiteKey } from "../websiteMarketing";

/** Mirror an existing appointment into Rodeo Marketing's Website bookings queue. */
export async function sendWebsiteBooking(lead: LeadInput, origin: string): Promise<void> {
  const attribution = lead.attribution ?? {};

  try {
    const response = await fetch(websiteBookingEndpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain", Origin: origin },
      signal: AbortSignal.timeout(3500),
      body: JSON.stringify({
        k: websiteSiteKey,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        service: lead.services?.length ? lead.services.join(", ") : lead.service,
        date: lead.preferredDate,
        time: lead.preferredTime,
        vehicle: lead.carModel,
        message: lead.message,
        page: lead.pagePath,
        u: Object.fromEntries(
          Object.entries({
            utm_source: attribution.utmSource,
            utm_medium: attribution.utmMedium,
            utm_campaign: attribution.utmCampaign,
            utm_content: attribution.utmContent,
            utm_term: attribution.utmTerm,
          }).filter(([, value]) => typeof value === "string" && value.length > 0)
        ),
      }),
    });

    const result = (await response.json()) as { ok?: boolean; id?: string };
    if (!response.ok || !result.ok || !result.id) {
      console.error("[website-booking] CRM intake did not confirm delivery", { status: response.status });
    }
  } catch (error) {
    // A failed mirror cannot fail an appointment already saved on the website.
    // The intake has no idempotency key, so an uncertain result is never retried.
    console.error("[website-booking] CRM intake request failed", {
      error: error instanceof Error ? error.name : "UnknownError",
    });
  }
}
