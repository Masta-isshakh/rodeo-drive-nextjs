import "./globals.css";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import MetaPixel from "./components/MetaPixel";

const SITE_URL = "https://www.rodeodrive.me"; // canonical domain (www)

const BRAND_EN = "Rodeo Drive Doha";
const BRAND_AR = "روديو درايف الدوحة";

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
  applicationName: BRAND_EN,
  referrer: "origin-when-cross-origin",
  creator: BRAND_EN,
  publisher: BRAND_EN,

  // Favicons / app icons
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
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

  // Prevent browser auto-translation from mixing Arabic/English
  other: {
    google: "notranslate",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const h = headers();
  const headerLang = (h.get("x-rd-lang") || "en").toLowerCase();
  const lang = headerLang.startsWith("ar") ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
