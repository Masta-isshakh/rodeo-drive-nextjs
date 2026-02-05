// app/[lang]/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { cookies, headers } from "next/headers";
import { buildPageMetadata, type Lang } from "../../seo";

function detectLanguage(): Lang {
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
    path: "/about",
    titleEN: "About Rodeo Drive Doha",
    titleAR: "عن روديو درايف الدوحة",
    descEN:
      "Rodeo Drive Doha is a premium automotive care center specializing in PPF, ceramic coating, paint correction, detailing, nano-ceramic tint and luxury finishing—built for Qatar.",
    descAR:
      "روديو درايف الدوحة مركز عناية فاخر بالسيارات متخصص في PPF وطلاء السيراميك وتصحيح الطلاء والتفصيل وتظليل نانو سيراميك وتشطيبات فاخرة—مناسب لأجواء قطر.",
    keywordsEN: [
      "about Rodeo Drive Doha",
      "luxury car detailing Doha",
      "PPF specialists Doha",
      "ceramic coating experts Qatar",
      "paint correction Doha",
    ],
    keywordsAR: [
      "عن روديو درايف الدوحة",
      "تفصيل سيارات فاخر الدوحة",
      "متخصص PPF الدوحة",
      "خبراء طلاء السيراميك قطر",
      "تصحيح الطلاء الدوحة",
    ],
    ogImagePath: "/og/about.jpg",
  });
}

export default function AboutPage({ params }: { params?: { lang?: string } }) {
  const initialLang: Lang =
    params?.lang === "ar" ? "ar" : params?.lang === "en" ? "en" : detectLanguage();

  return <AboutClient initialLang={initialLang} />;
}
