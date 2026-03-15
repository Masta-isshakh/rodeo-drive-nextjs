// app/[lang]/paylater/page.tsx
import type { Metadata } from "next";
import PayLaterClient from "./PayLaterClient";
import { buildPageMetadata, type Lang } from "@/app/seo";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/paylater",
    titleEN: "PayLater Available",
    titleAR: "PayLater متاح الآن",
    descEN:
      "Rodeo Drive Doha now accepts PayLater. Protect your car today with easy installment payments.",
    descAR:
      "روديو درايف الدوحة يقبل PayLater الآن. احمِ سيارتك اليوم مع دفعات ميسّرة.",
    keywordsEN: [
      "PayLater Qatar",
      "buy now pay later Doha",
      "PPF installments Doha",
      "ceramic coating installments Qatar",
      "window tint installments Doha",
      "Rodeo Drive PayLater",
    ],
    keywordsAR: [
      "PayLater قطر",
      "اشتر الآن وادفع لاحقاً الدوحة",
      "PPF أقساط الدوحة",
      "سيراميك أقساط قطر",
      "تظليل أقساط الدوحة",
      "روديو درايف PayLater",
    ],
    ogImagePath: "/logo.avif",
  });
}

export default function PayLaterPage() {
  return <PayLaterClient asPage={true} headingLevel={1} />;
}
