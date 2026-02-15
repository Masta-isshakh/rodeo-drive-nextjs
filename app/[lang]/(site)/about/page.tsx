// app/[lang]/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { buildPageMetadata, type Lang } from "@/app/seo";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  return buildPageMetadata({
    lang,
    path: "/about",
    titleEN: "About Rodeo Drive",
    titleAR: "عن روديو درايف",
    descEN:
      "Learn about Rodeo Drive Doha—our mission, standards, and why premium PPF, detailing, and protection are done differently here.",
    descAR:
      "تعرّف على روديو درايف الدوحة—رؤيتنا ومعاييرنا ولماذا نقدم حماية وتفصيل بمعايير فاخرة تناسب أجواء قطر.",
    ogImagePath: "/logo.avif",
  });
}

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  return <AboutClient initialLang={lang} />;
}
