import type { Metadata } from "next";
import { buildPageMetadata, type Lang } from "@/app/seo";
import SurfaceProtectionFilmClient from "./SurfaceProtectionFilmClient";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  return buildPageMetadata({
    lang,
    path: "/surface-protection-film",
    titleEN: "Surface Protection Film Doha | Gloss & Matte SPF",
    titleAR: "فيلم حماية الأسطح في الدوحة | GLOSS و MATTE SPF",
    descEN:
      "Discover Gloss and Matte Surface Protection Film in Doha. Ceramic-coated 5 mil PET technology for heat, stain, scratch, and impact resistance with premium interior aesthetics.",
    descAR:
      "اكتشف خدمة فيلم حماية الأسطح GLOSS و MATTE في الدوحة. تقنية PET بسماكة 5 ميل وطبقة سيراميك لحماية متقدمة من الحرارة والبقع والخدوش مع مظهر فاخر.",
    ogImagePath: "/photo1.avif",
  });
}

export default function SurfaceProtectionFilmPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  return <SurfaceProtectionFilmClient initialLang={lang} />;
}
