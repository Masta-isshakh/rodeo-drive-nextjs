import type { Metadata } from "next";

export type Lang = "en" | "ar";

const SITE_URL = "https://www.rodeodrive.me";

const BRAND = {
  en: "Rodeo Drive Doha",
  ar: "روديو درايف الدوحة",
};

function pageTitle(lang: Lang, page: string) {
  return lang === "ar" ? `${page} | ${BRAND.ar}` : `${page} | ${BRAND.en}`;
}

function normalizePath(path: string) {
  // path is usually "/services" or "" for home
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function alternates(lang: Lang, path: string) {
  const p = normalizePath(path);
  const suffix = p === "" ? "" : p;

  return {
    canonical: `/${lang}${suffix}`,
    languages: {
      "en-QA": `/en${suffix}`,
      "ar-QA": `/ar${suffix}`,
      "x-default": `/en${suffix}`,
    },
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
  path: string; // "/services" or "" (home)
  titleEN: string;
  titleAR: string;
  descEN: string;
  descAR: string;
  keywordsEN?: string[];
  keywordsAR?: string[];
  ogImagePath?: string; // "/og/services.jpg"
}): Metadata {
  const { lang } = opts;

  const path = normalizePath(opts.path);
  const suffix = path === "" ? "" : path;

  const title = lang === "ar" ? opts.titleAR : opts.titleEN;
  const description = lang === "ar" ? opts.descAR : opts.descEN;

  const keywords = lang === "ar" ? opts.keywordsAR ?? [] : opts.keywordsEN ?? [];
  const og = opts.ogImagePath ?? "/logo.avif";

  return {
    metadataBase: new URL(SITE_URL),

    title: pageTitle(lang, title),
    description,
    keywords,

    alternates: alternates(lang, suffix),

    openGraph: {
      type: "website",
      siteName: lang === "ar" ? BRAND.ar : BRAND.en,
      title: pageTitle(lang, title),
      description,
      url: `${SITE_URL}/${lang}${suffix}`,
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
