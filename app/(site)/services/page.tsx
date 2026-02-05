// app/[lang]/services/page.tsx
import type { Metadata } from "next";
import React from "react";
import ServicesClient from "./ServicesClient";
import { buildPageMetadata, type Lang } from "../../seo";

export type PackageKey = "vip" | "standard" | "premium";

export type ServiceGroupBase = {
  slug: string;
  routeSlug: string;
  imageSrc: string;
  title?: string;
  description?: string;
};

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/services",
    titleEN: "Services – PPF, Ceramic Coating, Tint & Detailing",
    titleAR: "الخدمات – PPF، طلاء سيراميك، تظليل وتفصيل",
    descEN:
      "Explore Rodeo Drive Doha services: full-body PPF, nano-ceramic tint, detailing & coating, paint repair, smart repair, premium wash, and windshield protection—built for Qatar’s sun and roads.",
    descAR:
      "استكشف خدمات روديو درايف الدوحة: PPF كامل، تظليل نانو سيراميك، تفصيل وطلاءات حماية، إصلاح طلاء، إصلاحات ذكية، غسيل فاخر، وخدمات الزجاج الأمامي—مناسبة لأجواء قطر.",
    keywordsEN: [
      "PPF Doha",
      "paint protection film Qatar",
      "ceramic coating Doha",
      "nano ceramic tint Doha",
      "paint correction Doha",
      "car detailing Doha",
      "smart repair Doha",
      "Color PPF Doha",
      "windshield protection Doha",
    ],
    keywordsAR: [
      "PPF الدوحة",
      "فيلم حماية الطلاء قطر",
      "طلاء سيراميك الدوحة",
      "تظليل نانو سيراميك الدوحة",
      "تصحيح الطلاء الدوحة",
      "تفصيل سيارات الدوحة",
      "إصلاحات ذكية الدوحة",
      "Color PPF قطر",
      "حماية الزجاج الأمامي الدوحة",
    ],
    ogImagePath: "/og/services.jpg",
  });
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const initialLang: Lang = params.lang === "ar" ? "ar" : "en";

  const packages: PackageKey[] = ["vip", "standard", "premium"];

  const serviceGroups: ServiceGroupBase[] = [
    { slug: "full-protection-ppf", routeSlug: "full-protection-ppf", imageSrc: "/ppf-icon.avif" },
    { slug: "window-solar-film", routeSlug: "window-solar-film", imageSrc: "/SolarWindowTint-icon.avif" },
    { slug: "detailing-coating", routeSlug: "detailing-coating", imageSrc: "/Exteriordetailing-icon.avif" },
    { slug: "paint-repair-services", routeSlug: "paint-repair-services", imageSrc: "/paintessdentrepair-icon.avif" },
    { slug: "car-wash-services", routeSlug: "car-wash-services", imageSrc: "/carwash-icon.avif" },
    { slug: "windshield-services", routeSlug: "windshield-services", imageSrc: "/windsheild-icon.avif" },
  ];

  return (
    <ServicesClient
      initialLang={initialLang}
      packages={packages}
      serviceGroups={serviceGroups}
    />
  );
}
