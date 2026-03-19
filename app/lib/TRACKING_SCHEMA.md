# Meta Pixel — Event Tracking Schema

All event calls use `trackLead`, `trackContact`, or `trackCompleteRegistration`  
from `app/lib/metaPixel.ts`. This file is the single source of truth for field names and allowed values.

---

## Auto-attached fields (never set manually)

These are appended automatically by `buildEventParams` inside `metaPixel.ts`.

| Field       | Type   | Values                     |
|-------------|--------|----------------------------|
| `language`  | string | `"en"` · `"ar"`            |
| `page_path` | string | e.g. `/en/services`        |
| `page_url`  | string | full URL including domain   |

---

## Required fields (every non-PageView event)

A dev-mode console warning is shown when any of these are missing.

| Field            | Type   | Allowed values                                                                                   |
|------------------|--------|--------------------------------------------------------------------------------------------------|
| `source_section` | string | `"booking_form"` · `"contact_page"` · `"header"` · `"header_mobile"` · `"footer"` · `"faq_page"` |
| `cta_variant`    | string | see CTA Variants table below                                                                     |
| `intent_type`    | string | `"appointment_booking"` · `"contact"`                                                            |

---

## Conditional fields

| Field             | Required when                    | Type   | Allowed values                                                 |
|-------------------|----------------------------------|--------|----------------------------------------------------------------|
| `contact_channel` | `intent_type === "contact"`      | string | `"phone"` · `"whatsapp"` · `"email"` · `"location"` · `"directions"` |

---

## Optional enrichment fields

| Field                    | Event(s)                                | Type   | Example values                        |
|--------------------------|-----------------------------------------|--------|---------------------------------------|
| `conversion_stage`       | Lead, CompleteRegistration              | string | `"lead"` · `"completed_registration"` |
| `form_status`            | Lead                                    | string | `"submitted"`                         |
| `submission_method`      | CompleteRegistration                    | string | `"website_form"`                      |
| `service_group`          | Lead, CompleteRegistration              | string | `"multi_service"` · `"unspecified"`   |
| `selected_services_count`| Lead, CompleteRegistration              | number | `0` · `1` · `2` …                    |
| `selected_services`      | Lead, CompleteRegistration              | string | `"Full Protection – PPF \| Detailing"` |
| `appointment_date`       | Lead, CompleteRegistration              | string | `"2026-04-10"` (YYYY-MM-DD)           |
| `appointment_time`       | Lead, CompleteRegistration              | string | `"10:00 AM"`                          |

---

## CTA Variants

| Value                   | Where used                          |
|-------------------------|-------------------------------------|
| `"form_submit"`         | Booking form submit button          |
| `"contact_link_click"`  | Contact info card clicks            |
| `"book_now_desktop"`    | Header desktop "Book Now" link      |
| `"book_now_mobile"`     | Header mobile "Book Now" link       |
| `"whatsapp_desktop"`    | Header desktop WhatsApp icon        |
| `"whatsapp_mobile"`     | Header mobile WhatsApp icon         |
| `"phone_link"`          | Footer phone link                   |
| `"email_link"`          | Footer email link                   |
| `"phone_cta"`           | FAQ page "Contact Us" button        |
| `"whatsapp_cta"`        | FAQ page WhatsApp button            |

---

## Event map

| Pixel event              | File                                               | Trigger                        |
|--------------------------|----------------------------------------------------|--------------------------------|
| `Lead`                   | `app/[lang]/(site)/book/Book.tsx`                  | Booking form submitted         |
| `CompleteRegistration`   | `app/[lang]/(site)/book/Book.tsx`                  | Booking created in DB          |
| `Contact`                | `app/[lang]/(site)/contact/ContactClient.tsx`      | Any contact card / CTA click   |
| `Contact`                | `app/components/Header/Header.tsx`                 | WhatsApp icon click            |
| `Lead`                   | `app/components/Header/Header.tsx`                 | Book Now click                 |
| `Contact`                | `app/components/Footer/Footer.tsx`                 | Phone / Email link click       |
| `Contact`                | `app/[lang]/(site)/faq/FaqClient.tsx`              | Phone / WhatsApp CTA click     |

---

## Adding a new event

1. Choose the correct tracker (`trackLead` / `trackContact` / `trackCompleteRegistration`).
2. Always include the three **required fields**: `source_section`, `cta_variant`, `intent_type`.
3. Add `contact_channel` if `intent_type` is `"contact"`.
4. Add a new row to the tables above.
5. Run `next dev` and check the browser console — a warning will appear if any required key is missing.
