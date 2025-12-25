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
    const applyLang = (lang: string) => {
      const html = document.documentElement;

      html.lang = lang;
      html.classList.remove("rtl", "ltr");
      html.classList.add(lang === "ar" ? "rtl" : "ltr");
    };

    applyLang(i18n.language);
    i18n.on("languageChanged", applyLang);

    return () => {
      i18n.off("languageChanged", applyLang);
    };
  }, []);


  return (
    <html>
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
