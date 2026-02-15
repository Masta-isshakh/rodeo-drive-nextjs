import type { Metadata } from "next";
import Providers from "../Provider";
import type { Lang as SeoLang } from "../seo";
import { buildPageMetadata } from "../seo";

type Lang = "en" | "ar";

const SITE_URL = "https://www.rodeodrive.me";
const BRAND_EN = "Rodeo Drive Doha";
const BRAND_AR = "روديو درايف الدوحة";

const BUSINESS = {
  phone: "+97433202409",
  email: "info@rodeodrive.me",
  addressEN: "Doha, Qatar",
  addressAR: "الدوحة، قطر",
  geo: { lat: 25.2854, lng: 51.531 },
  instagram: "https://www.instagram.com/rodeo.drive.qtr/",
};

function jsonLdLocalBusiness(lang: Lang) {
  const name = lang === "ar" ? BRAND_AR : BRAND_EN;
  const addressLocality = lang === "ar" ? BUSINESS.addressAR : BUSINESS.addressEN;

  return {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name,
    url: SITE_URL,
    image: `${SITE_URL}/logo.avif`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressCountry: "QA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    sameAs: [BUSINESS.instagram],
    areaServed: { "@type": "City", name: "Doha" },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Protection Film (PPF)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Correction & Polishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Deep Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nano-Ceramic Window Tint" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Color PPF" } },
    ],
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

// Optional: stronger defaults for the language home pages
export async function generateMetadata({
  params,
}: {
  params: { lang: SeoLang };
}): Promise<Metadata> {
  const lang: SeoLang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "",
    titleEN: "Premium Car Care, PPF & Detailing in Doha",
    titleAR: "عناية سيارات فاخرة، PPF وتفصيل في الدوحة",
    descEN:
      "Rodeo Drive Doha delivers premium PPF, ceramic coating, detailing, nano-ceramic tint, and windshield protection—built for Qatar’s sun and roads.",
    descAR:
      "روديو درايف الدوحة يقدم PPF فاخر، طلاء سيراميك، تفصيل، تظليل نانو سيراميك، وحماية زجاج أمامي—مناسب لأجواء وطرق قطر.",
    ogImagePath: "/logo.avif",
  });
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness(lang)) }}
      />
      <Providers initialLanguage={lang}>{children}</Providers>
    </>
  );
}
