// app/[lang]/contact/page.tsx
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { cookies, headers } from "next/headers";
import { buildPageMetadata, type Lang } from "../../seo";

function detectLanguageFallback(): Lang {
  const c = cookies();
  const cookieLang =
    c.get("lang")?.value ||
    c.get("language")?.value ||
    c.get("NEXT_LOCALE")?.value;

  if (cookieLang) {
    const v = cookieLang.toLowerCase();
    if (v.startsWith("ar")) return "ar";
    if (v.startsWith("en")) return "en";
  }

  const accept = headers().get("accept-language")?.toLowerCase() || "";
  if (accept.includes("ar")) return "ar";
  return "en";
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/contact",
    titleEN: "Contact & Booking – Rodeo Drive Doha",
    titleAR: "التواصل والحجز – روديو درايف الدوحة",
    descEN:
      "Book your appointment in Doha. Contact Rodeo Drive for PPF, ceramic coating, paint correction, detailing, nano-ceramic tint, Color PPF and smart repair. Quick WhatsApp response.",
    descAR:
      "احجز موعدك في الدوحة. تواصل مع روديو درايف لخدمات PPF وطلاء السيراميك وتصحيح الطلاء والتفصيل وتظليل نانو سيراميك وColor PPF والإصلاحات الذكية. رد سريع عبر واتساب.",
    keywordsEN: [
      "book car detailing Doha",
      "contact PPF Doha",
      "ceramic coating booking Qatar",
      "WhatsApp car detailing Doha",
      "nano ceramic tint Doha booking",
      "Color PPF Doha",
      "smart repair Doha",
    ],
    keywordsAR: [
      "حجز تفصيل سيارات الدوحة",
      "تواصل حماية PPF الدوحة",
      "حجز طلاء سيراميك قطر",
      "واتساب تفصيل سيارات الدوحة",
      "حجز تظليل نانو سيراميك",
      "Color PPF قطر",
      "إصلاحات ذكية الدوحة",
    ],
    ogImagePath: "/og/contact.jpg",
  });
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const initialLang: Lang =
    params?.lang === "ar"
      ? "ar"
      : params?.lang === "en"
      ? "en"
      : detectLanguageFallback();

  return <ContactClient initialLang={initialLang} />;
}
