
export async function generateMetadata({
  params,
}: {
  params: { lang: Lang; slugs: string[] };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const slugs = params.slugs || [];
  const slug = slugs[0] || "services";

  const svc = serviceMap.get(slug);
  const titleEN = svc ? svc.title.en : "Services";
  const titleAR = svc ? svc.title.ar : "الخدمات";
  const descEN = svc ? svc.subtitle.en : "Explore premium automotive services by Rodeo Drive Doha.";
  const descAR = svc ? svc.subtitle.ar : "استكشف خدمات السيارات الفاخرة من روديو درايف الدوحة.";

  const path = `/services/${slugs.join("/")}`;

  return buildPageMetadata({
    lang,
    path,
    titleEN,
    titleAR,
    descEN,
    descAR,
    ogImagePath: svc?.heroImage ?? "/logo.avif",
  });
}
// app/(site)/services/[...slugs]/page.tsx
import React from "react";
import ServiceRouteClient from "./ServiceRoute";
import { CATALOG, Service, Subservice } from "@/app/content/catalog2";

// ✅ Prebuild all routes:
// /services/<serviceSlug>
// /services/<serviceSlug>/<subSlug>
export function generateStaticParams() {
  const params: { slugs: string[] }[] = [];

  for (const s of CATALOG.services as Service[]) {
    params.push({ slugs: [s.slug] });

    for (const sub of s.subservices as Subservice[]) {
      params.push({ slugs: [s.slug, sub.slug] });
    }
  }

  return params;
}

function safeSlugArray(input?: string[] | string): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input;
  return [input];
}

export default function Page({ params }: { params: { slugs?: string[] | string } }) {
  const slugs = safeSlugArray(params.slugs);
  const serviceSlug = slugs[0];
  const subSlug = slugs[1];

  const service: Service | null =
    serviceSlug ? (CATALOG.services as Service[]).find((s) => s.slug === serviceSlug) ?? null : null;

  const sub: Subservice | null =
    service && subSlug ? service.subservices.find((x) => x.slug === subSlug) ?? null : null;

  return <ServiceRouteClient slugs={slugs} service={service} sub={sub} />;
}
