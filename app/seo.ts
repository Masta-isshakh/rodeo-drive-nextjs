import type { Metadata } from "next";

export type Lang = "en" | "ar";

const SITE_URL = "https://www.rodeodrive.me"; // ✅ change to your domain

const BRAND = {
  en: "Rodeo Drive Doha",
  ar: "روديو درايف الدوحة",
};

function pageTitle(lang: Lang, page: string) {
  return lang === "ar"
    ? `${page} | ${BRAND.ar}`
    : `${page} | ${BRAND.en}`;
}

function alternates(path: string) {
  return {
    canonical: path, // e.g. "/services"
  } as const;
}


function ogImage(path: string) {
  return [
    {
      url: path,
      width: 1200,
      height: 630,
    },
  ];
}

export function buildPageMetadata(opts: {
  lang: Lang;
  path: string; // "/services"
  titleEN: string;
  titleAR: string;
  descEN: string;
  descAR: string;
  keywordsEN?: string[];
  keywordsAR?: string[];
  ogImagePath?: string; // "/og/services.jpg"
}): Metadata {
  const { lang, path } = opts;

  const title = lang === "ar" ? opts.titleAR : opts.titleEN;
  const description = lang === "ar" ? opts.descAR : opts.descEN;

  const keywords =
    lang === "ar"
      ? (opts.keywordsAR ?? [])
      : (opts.keywordsEN ?? []);

  const og = opts.ogImagePath ?? "/logo.avif";

  return {
    metadataBase: new URL(SITE_URL),

    title: pageTitle(lang, title),
    description,
    keywords,

    alternates: alternates(path),

    openGraph: {
      type: "website",
      siteName: lang === "ar" ? BRAND.ar : BRAND.en,
      title: pageTitle(lang, title),
      description,
      url: `/${lang}${path}`,
      locale: lang === "ar" ? "ar_QA" : "en_QA",
      alternateLocale: ["en_QA", "ar_QA"],
      images: ogImage(og),
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle(lang, title),
      description,
      images: [og],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
