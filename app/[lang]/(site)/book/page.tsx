// app/[lang]/book/page.tsx
import type { Metadata } from "next";
import BookApp from "./Book";
import { buildPageMetadata, type Lang } from "@/app/seo";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/book",
    titleEN: "Book Appointment",
    titleAR: "احجز موعدًا",
    descEN:
      "Book an appointment with Rodeo Drive Doha for PPF, ceramic coating, detailing, tint and paint correction. Premium results with expert care.",
    descAR:
      "احجز موعدًا مع روديو درايف الدوحة لخدمات PPF وطلاء السيراميك والتفصيل والتظليل وتصحيح الطلاء. نتائج فاخرة بعناية احترافية.",
    keywordsEN: [
      "book car detailing Doha",
      "PPF appointment Doha",
      "ceramic coating booking Qatar",
      "tint booking Doha",
      "paint correction appointment Doha",
    ],
    keywordsAR: [
      "حجز تفصيل سيارات الدوحة",
      "موعد PPF الدوحة",
      "حجز طلاء سيراميك قطر",
      "حجز تظليل الدوحة",
      "موعد تصحيح الطلاء الدوحة",
    ],
    ogImagePath: "/og/book.jpg",
  });
}

export default function Book() {
  return <BookApp />;
}
