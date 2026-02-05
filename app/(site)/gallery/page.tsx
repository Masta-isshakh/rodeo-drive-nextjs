// app/[lang]/gallery/page.tsx
import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { cookies, headers } from "next/headers";
import { buildPageMetadata, type Lang } from "../../seo";

type VideoItem = {
  id: number;
  src: string;
  poster?: string;
};

type S3VideoItemBase = {
  id: number;
  src: string;
  poster?: string;
  key: "ppf_install" | "detailing_coating" | "ppf_protection" | "detailing_results";
  labelEn: string;
  labelAr: string;
};

type BeforeAfterBase = {
  id: number;
  before: string;
  after: string;
  key: "color_ppf" | "interior_restoration" | "ppf_installation";
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
};

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
    path: "/gallery",
    titleEN: "Gallery – Before & After, PPF & Detailing Results",
    titleAR: "المعرض – قبل وبعد ونتائج PPF والتفصيل",
    descEN:
      "Explore real transformations in Doha: PPF installation, ceramic coating, paint correction, interior deep cleaning, tint and premium finishing—photos, before/after and videos.",
    descAR:
      "استكشف تحولات حقيقية في الدوحة: تركيب PPF، طلاء سيراميك، تصحيح الطلاء، تنظيف داخلي عميق، تظليل وتشطيب فاخر—صور وفيديوهات وقبل/بعد.",
    keywordsEN: [
      "car detailing gallery Doha",
      "PPF before after Doha",
      "ceramic coating results Qatar",
      "paint correction before after Doha",
      "interior detailing before after Doha",
      "Color PPF Doha gallery",
    ],
    keywordsAR: [
      "معرض تفصيل سيارات الدوحة",
      "قبل وبعد PPF الدوحة",
      "نتائج طلاء السيراميك قطر",
      "قبل وبعد تصحيح الطلاء الدوحة",
      "قبل وبعد تنظيف داخلي",
      "معرض Color PPF قطر",
    ],
    ogImagePath: "/og/gallery.jpg",
  });
}

export default function GalleryPage({ params }: { params: { lang: string } }) {
  const initialLang: Lang =
    params?.lang === "ar"
      ? "ar"
      : params?.lang === "en"
      ? "en"
      : detectLanguageFallback();

  const videoItems: VideoItem[] = [
    {
      id: 1,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image9.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image9-poster.png",
    },
    {
      id: 2,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image8.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image8-poster.png",
    },
    {
      id: 3,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image7.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image7-poster.png",
    },
  ];

  const s3Videos: S3VideoItemBase[] = [
    {
      id: 1,
      key: "ppf_install",
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image6.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image6-poster.png",
      labelEn: "PPF Installation",
      labelAr: "تركيب PPF",
    },
    {
      id: 2,
      key: "detailing_coating",
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image5.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image5-poster.png",
      labelEn: "Detailing & Coating",
      labelAr: "تفصيل وسيراميك",
    },
    {
      id: 3,
      key: "ppf_protection",
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image4.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image4-poster.png",
      labelEn: "PPF / Protection",
      labelAr: "PPF / حماية",
    },
    {
      id: 4,
      key: "detailing_results",
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image3.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image3-poster.png",
      labelEn: "Detailing Results",
      labelAr: "نتائج التفصيل",
    },
  ];

  const beforeAfterComparisons: BeforeAfterBase[] = [
    {
      id: 1,
      key: "color_ppf",
      before: "/before.avif",
      after: "/after.avif",
      titleEn: "Color PPF Upgrade",
      titleAr: "ترقية بـ PPF الملون",
      descEn: "Full-body color film wrap",
      descAr: "تغليف كامل بفيلم ملون",
    },
    {
      id: 2,
      key: "interior_restoration",
      before: "/before1.avif",
      after: "/after1.avif",
      titleEn: "Interior Restoration",
      titleAr: "ترميم الداخلية",
      descEn: "Premium leather treatment and deep cleaning",
      descAr: "عناية جلد + تنظيف عميق",
    },
    {
      id: 3,
      key: "ppf_installation",
      before: "/before2.avif",
      after: "/after2.avif",
      titleEn: "PPF Installation",
      titleAr: "تركيب PPF",
      descEn: "Full body PPF with flawless application",
      descAr: "PPF كامل بتطبيق مثالي",
    },
  ];

  const stats = { cars: 850, ceramic: 500, protection: 300, satisfaction: 98 };

  return (
    <GalleryClient
      initialLang={initialLang}
      videoItems={videoItems}
      s3Videos={s3Videos}
      beforeAfterComparisons={beforeAfterComparisons}
      stats={stats}
    />
  );
}
