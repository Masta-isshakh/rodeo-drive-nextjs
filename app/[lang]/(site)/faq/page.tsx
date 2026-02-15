// app/[lang]/faq/page.tsx
import type { Metadata } from "next";
import FAQClient from "./FaqClient";
import { buildPageMetadata, type Lang } from "@/app/seo";

type FAQCategory =
  | "all"
  | "services"
  | "pricing"
  | "booking"
  | "protection"
  | "quality";

function safeCategory(input?: string): FAQCategory {
  const allowed: FAQCategory[] = [
    "all",
    "services",
    "pricing",
    "booking",
    "protection",
    "quality",
  ];
  return allowed.includes(input as FAQCategory) ? (input as FAQCategory) : "all";
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/faq",
    titleEN: "FAQ – Car Detailing, PPF & Ceramic Coating",
    titleAR: "الأسئلة الشائعة – تفصيل السيارات وPPF وطلاء السيراميك",
    descEN:
      "Find clear answers about PPF, ceramic coating, paint correction, detailing, tint, service time, warranties, and booking at Rodeo Drive Doha.",
    descAR:
      "اعثر على إجابات واضحة حول PPF وطلاء السيراميك وتصحيح الطلاء والتفصيل والتظليل ومدة الخدمة والضمان والحجز لدى روديو درايف الدوحة.",
    keywordsEN: [
      "FAQ car detailing Doha",
      "PPF FAQ Doha",
      "ceramic coating FAQ Qatar",
      "paint correction FAQ Doha",
      "nano ceramic tint FAQ Doha",
      "warranty detailing Doha",
      "how long does ceramic coating last Qatar",
    ],
    keywordsAR: [
      "أسئلة تفصيل السيارات الدوحة",
      "أسئلة PPF الدوحة",
      "أسئلة طلاء السيراميك قطر",
      "أسئلة تصحيح الطلاء الدوحة",
      "أسئلة تظليل نانو سيراميك",
      "ضمان تفصيل السيارات",
      "مدة طلاء السيراميك قطر",
    ],
    ogImagePath: "/og/faq.jpg",
  });
}

export default function FAQPage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { category?: string };
}) {
  const initialLang: Lang = params.lang === "ar" ? "ar" : "en";
  const activeCategory = safeCategory(searchParams?.category);

  return <FAQClient initialLang={initialLang} activeCategory={activeCategory} />;
}
