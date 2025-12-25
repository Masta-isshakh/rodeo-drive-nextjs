"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import "./app.css";
import Header from "./Header";
import i18n from "./i18n";
import "./auth-theme.css";
import '@aws-amplify/ui-react/styles.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  
    const [progress, setProgress] = useState(0);
      const [, forceUpdate] = useState(0);


  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  useEffect(() => {
    const updateDir = (lang: string) => {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.body.className = lang === "ar" ? "rtl" : "ltr";
      forceUpdate(v => v + 1); // force re-render propre
    };

    updateDir(i18n.language);

    i18n.on("languageChanged", updateDir);

    return () => {
      i18n.off("languageChanged", updateDir);
    };
  }, [])

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
                <div className="scroll-progress" style={{ width: `${progress}%` }} />

        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
