// app/[lang]/services/page.tsx
import React from "react";
import ServicesClient from "./ServicesClient";

export type Lang = "en" | "ar";
export type PackageKey = "vip" | "standard" | "premium";

export type ServiceGroupBase = {
  // used for proof images and local assets (your current naming)
  slug: string;

  // ✅ used for routing to /[lang]/services/[...slugs]
  // MUST match CATALOG.services[].slug
  routeSlug: string;

  imageSrc: string;

  // optional defaults (client will translate anyway)
  title?: string;
  description?: string;
};

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const initialLang: Lang = params.lang === "ar" ? "ar" : "en";

  // keep your package order
  const packages: PackageKey[] = ["vip", "standard", "premium"];

  /**
   * ✅ IMPORTANT:
   * - routeSlug must match your catalog2 Service.slug exactly
   * - slug can stay your "proof file naming" slug
   *
   * If your catalog slugs are exactly the same as these, set routeSlug = slug.
   * If not, map them here.
   */
  const serviceGroups: ServiceGroupBase[] = [
    {
      slug: "full-protection-ppf",
      routeSlug: "full-protection-ppf",
      imageSrc: "/ppf-icon.avif",
    },
    {
      slug: "window-solar-film",
      routeSlug: "window-solar-film",
      imageSrc: "/SolarWindowTint-icon.avif",
    },
    {
      slug: "detailing-coating",
      routeSlug: "detailing-coating",
      imageSrc: "/Exteriordetailing-icon.avif",
    },
    {
      slug: "paint-repair-services",
      routeSlug: "paint-repair-services",
      imageSrc: "/paintessdentrepair-icon.avif",
    },
    {
      slug: "car-wash-services",
      routeSlug: "car-wash-services",
      imageSrc: "/carwash-icon.avif",
    },
    {
      slug: "windshield-services",
      routeSlug: "windshield-services",
      imageSrc: "/windsheild-icon.avif",
    },
  ];

  return (
    <ServicesClient
      initialLang={initialLang}
      packages={packages}
      serviceGroups={serviceGroups}
    />
  );
}
