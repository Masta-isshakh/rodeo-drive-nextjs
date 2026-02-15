// app/[lang]/(site)/services/[...slugs]/page.tsx
import React from "react";
import type { Metadata } from "next";

import ServiceRouteClient from "./ServiceRoute";
import { CATALOG, type Service, type Subservice } from "@/app/content/catalog2";
import { buildPageMetadata, type Lang } from "@/app/seo";

// Optional but recommended: this route is fully prebuilt
export const dynamicParams = false;

function safeSlugArray(input?: string[] | string): string[] {
  if (!input) return [];
  return Array.isArray(input) ? input : [input];
}

// ✅ Prebuild all routes for BOTH languages:
// /en/services/<serviceSlug>
// /en/services/<serviceSlug>/<subSlug>
// /ar/services/<serviceSlug>
// /ar/services/<serviceSlug>/<subSlug>
export function generateStaticParams(): Array<{ lang: Lang; slugs: string[] }> {
  const params: Array<{ lang: Lang; slugs: string[] }> = [];
  const langs: Lang[] = ["en", "ar"];

  const services = (CATALOG?.services ?? []) as Service[];

  for (const lang of langs) {
    for (const s of services) {
      if (!s?.slug) continue;

      // service page
      params.push({ lang, slugs: [s.slug] });

      // subservice pages
      const subs = (s.subservices ?? []) as Subservice[];
      for (const sub of subs) {
        if (!sub?.slug) continue;
        params.push({ lang, slugs: [s.slug, sub.slug] });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang; slugs: string[] };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const slugs = safeSlugArray(params.slugs);

  const serviceSlug = slugs[0] || "";
  const subSlug = slugs[1] || "";

  const services = (CATALOG?.services ?? []) as Service[];
  const service =
    serviceSlug ? services.find((s) => s.slug === serviceSlug) ?? null : null;

  const sub =
    service && subSlug
      ? (service.subservices ?? []).find((x) => x.slug === subSlug) ?? null
      : null;

  // ---- Titles & descriptions (supports different catalog shapes safely) ----
  const titleEN =
    (sub as any)?.title?.en ??
    (sub as any)?.nameEN ??
    (service as any)?.title?.en ??
    (service as any)?.nameEN ??
    "Services";

  const titleAR =
    (sub as any)?.title?.ar ??
    (sub as any)?.nameAR ??
    (service as any)?.title?.ar ??
    (service as any)?.nameAR ??
    "الخدمات";

  const descEN =
    (sub as any)?.subtitle?.en ??
    (sub as any)?.descEN ??
    (service as any)?.subtitle?.en ??
    (service as any)?.descEN ??
    "Explore premium automotive services by Rodeo Drive Doha.";

  const descAR =
    (sub as any)?.subtitle?.ar ??
    (sub as any)?.descAR ??
    (service as any)?.subtitle?.ar ??
    (service as any)?.descAR ??
    "استكشف خدمات السيارات الفاخرة من روديو درايف الدوحة.";

  // OG image fallback chain
  const ogImagePath =
    (sub as any)?.heroImage ??
    (sub as any)?.image ??
    (service as any)?.heroImage ??
    (service as any)?.image ??
    "/og/services.jpg";

  // This path MUST be without /en or /ar (your buildPageMetadata adds it)
  const path = `/services/${slugs.join("/")}`;

  return buildPageMetadata({
    lang,
    path,
    titleEN,
    titleAR,
    descEN,
    descAR,
    ogImagePath,
  });
}

export default function Page({
  params,
}: {
  params: { lang: Lang; slugs: string[] };
}) {
  const slugs = safeSlugArray(params.slugs);

  const serviceSlug = slugs[0];
  const subSlug = slugs[1];

  const services = (CATALOG?.services ?? []) as Service[];
  const service: Service | null =
    serviceSlug ? services.find((s) => s.slug === serviceSlug) ?? null : null;

  const sub: Subservice | null =
    service && subSlug
      ? (service.subservices ?? []).find((x) => x.slug === subSlug) ?? null
      : null;

  return <ServiceRouteClient slugs={slugs} service={service} sub={sub} />;
}
