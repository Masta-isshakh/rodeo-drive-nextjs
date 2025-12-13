"use client";
import { useEffect } from "react";
import "./globals.css";
import "./app.css";
import Header from "./Header";
import i18n from "./i18n";
import "./auth-theme.css";
import '@aws-amplify/ui-react/styles.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Définir la langue et la direction du document pour SEO et RTL
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, []);

  return (
    <html lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <head>
                <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-dym6Q7X8..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>
          {i18n.language === "ar"
            ? "روديو درايف — خدمات السيارات"
            : "Rodeo Drive | Car Services"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "خدمات صيانة السيارات الاحترافية في الدوحة"
              : "Expert car maintenance and services in Doha"
          }
        />
        <meta property="og:title" content={i18n.language === "ar" ? "روديو درايف — خدمات السيارات" : "Rodeo Drive | Car Services"} />
        <meta
          property="og:description"
          content={
            i18n.language === "ar"
              ? "خدمات صيانة السيارات الاحترافية في الدوحة"
              : "Expert car maintenance and services in Doha"
          }
        />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
