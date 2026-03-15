import type { Metadata } from "next";
import PayLaterClient from "@/app/components/PayLater/PayLaterClient";
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
    titleEN: "PayLater for PPF, Tint and Detailing",
    titleAR: "PayLater لخدمات PPF والتظليل والتفصيل",
    descEN:
      "Book premium PPF, nano-ceramic tint, ceramic coating, and detailing in Doha with flexible PayLater installments.",
    descAR:
      "احجز خدمات PPF الفاخرة وتظليل النانو سيراميك والطلاء السيراميكي والتفصيل في الدوحة مع دفعات ميسرة عبر PayLater.",
    ogImagePath: "/paylater.avif",
  });
}

export default function PayLaterPage() {
  return <PayLaterClient asPage={true} headingLevel={1} />;
}
