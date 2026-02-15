// app/[lang]/contact/page.tsx
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { buildPageMetadata, type Lang } from "@/app/seo";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/contact",
    titleEN: "Contact & Book",
    titleAR: "تواصل واحجز",
    descEN:
      "Contact Rodeo Drive Doha to book PPF, detailing, ceramic coating, tint, or windshield protection. Fast response via WhatsApp.",
    descAR:
      "تواصل مع روديو درايف الدوحة لحجز PPF أو التفصيل أو السيراميك أو التظليل أو حماية الزجاج. رد سريع عبر واتساب.",
    ogImagePath: "/logo.avif",
  });
}

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  return <ContactClient initialLang={lang} />;
}
