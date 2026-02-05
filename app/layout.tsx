// app/[lang]/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Providers from "./Provider";
import NoImageDownload from "./components/NoImageDownload";

type Lang = "en" | "ar";

// ✅ Replace with your real domain (already correct)
const SITE_URL = "https://www.rodeodrive.me";

// ✅ Replace these if you have different branding files
const BRAND_EN = "Rodeo Drive Doha";
const BRAND_AR = "روديو درايف الدوحة";

// ✅ Optional: replace with your exact business info (recommended)
const BUSINESS = {
  phone: "+97400000000", // <-- change
  email: "info@rodeodrive.me", // <-- change
  addressEN: "Doha, Qatar",
  addressAR: "الدوحة، قطر",
  geo: { lat: 25.2854, lng: 51.5310 }, // Doha center (replace with your exact location if you want)
  instagram: "https://www.instagram.com/rodeo.drive.qtr/",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a1929" },
    { media: "(prefers-color-scheme: light)", color: "#c4c4c4" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Good defaults (pages will override via generateMetadata())
  applicationName: BRAND_EN,
  referrer: "origin-when-cross-origin",
  creator: BRAND_EN,
  publisher: BRAND_EN,

  // Favicons / app icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },

  // Helps Google understand language versions (pages also set alternates)
  alternates: {
    languages: {
      "en-QA": "/en",
      "ar-QA": "/ar",
      "x-default": "/en",
    },
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
    areaServed: {
      "@type": "City",
      name: "Doha",
    },
    // Main services (kept generic but relevant)
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        {/* ✅ Extra SEO signal: bilingual local business schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness(lang)) }}
        />

        {/* ✅ Safety: stop auto-translation (optional, but avoids weird Arabic/English mixing) */}
        <meta name="google" content="notranslate" />
      </head>

      <body>
        <Providers>
          <NoImageDownload />
          {children}
        </Providers>
      </body>
    </html>
  );
}
