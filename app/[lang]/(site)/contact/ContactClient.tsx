// app/[lang]/contact/ContactClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./contact.module.css";
import Book from "../book/Book";
import { useI18n } from "@/app/lib/i18n";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

type Lang = "en" | "ar";

type InfoItem = {
  icon: any;
  title: string;
  details: string[];
  href?: string;
  target?: "_blank" | "_self";
  rel?: string;
};

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

// ✅ convert western digits to Arabic-Indic digits for display (keeps hrefs unchanged)
const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"] as const;
function toArabicIndic(input: string) {
  return input.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
}

// ✅ detect phone-like strings (works with 0-9 and Arabic-Indic ٠-٩)
function isPhoneLike(s: string) {
  const v = String(s || "").trim();
  // allows +, spaces, hyphens, parentheses, and digits (latin + arabic-indic)
  return /^[+()\s\-0-9٠-٩]{7,}$/.test(v) && /[0-9٠-٩]/.test(v);
}

// ✅ make number direction correct inside RTL layouts (prevents + and digits flipping)
function NumberBidi({
  children,
  forceLtr,
}: {
  children: string;
  forceLtr: boolean;
}) {
  if (!forceLtr) return <>{children}</>;
  return (
    <bdi style={{ direction: "ltr", unicodeBidi: "plaintext", display: "inline-block" }}>
      {children}
    </bdi>
  );
}

const ContactMotion = dynamic(() => import("./ContactMotion"), {
  ssr: false,
  loading: () => null,
});

export default function ContactClient({ initialLang }: { initialLang: Lang }) {
  const i18n = useI18n() as any;
  const t = i18n?.t;

  // ✅ runtime language from i18n (lang button changes this)
  const [runtimeLang, setRuntimeLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const fromI18n =
      i18n?.lang ??
      i18n?.locale ??
      i18n?.language ??
      i18n?.currentLang ??
      "";

    const fromHtml =
      typeof document !== "undefined" ? document.documentElement.lang : "";

    const guess = String(fromI18n || fromHtml || initialLang).toLowerCase();
    setRuntimeLang(guess.startsWith("ar") ? "ar" : "en");
  }, [t, i18n?.lang, i18n?.locale, i18n?.language, i18n?.dir, initialLang]);

  const lang: Lang = runtimeLang;
  const dir = lang === "ar" ? "rtl" : "ltr";

  // Support multiple dictionary shapes
  const contactT = useMemo(() => {
    return (
      (t as any)?.contact ??
      (t as any)?.contactPage ??
      (t as any)?.pages?.contact ??
      {}
    );
  }, [t]);

  const copy = useMemo(() => {
    const isAr = lang === "ar";
    const l10n = (s: string) => (isAr ? toArabicIndic(s) : s);

    return {
      heroTitle: safeText(contactT?.heroTitle, isAr ? "اتصل بنا" : "Contact"),
      heroSubtitle: safeText(
        contactT?.heroSubtitle,
        isAr ? "نحن هنا للمساعدة" : "We’re here to help"
      ),

      phone: safeText(contactT?.phone, isAr ? "الهاتف" : "Phone"),
      whatsapp: safeText(contactT?.whatsapp, isAr ? "واتساب" : "WhatsApp"),
      email: safeText(contactT?.email, isAr ? "البريد الإلكتروني" : "Email"),
      location: safeText(contactT?.location, isAr ? "الموقع" : "Location"),
      workingHours: safeText(
        contactT?.workingHours,
        isAr ? "ساعات العمل" : "Working Hours"
      ),

      hoursLine: safeText(
        contactT?.hoursLine,
        isAr
          ? "السبت - الخميس: 9 صباحاً - 9 مساءً"
          : "Saturday - Thursday: 9AM - 9PM"
      ),

      visitTitle: safeText(
        contactT?.visitTitle,
        isAr ? "قم بزيارة منشأتنا" : "Visit Our Facility"
      ),
      mapTitle: safeText(
        contactT?.mapTitle,
        isAr ? "مركز روديو درايف للعناية بالسيارات" : "Rodeo Drive Car Care Center"
      ),
      mapAddressLine1: safeText(
        contactT?.mapAddressLine1,
        isAr ? "الدوحة، قطر" : "Doha, Qatar"
      ),
      mapAddressLine2: safeText(
        contactT?.mapAddressLine2,
        isAr
          ? "البلوك 2، محل رقم SYS 066، بلوك 21، قرب دراغون مارت الساير، الدوحة"
          : "Block 2, Shop No SYS 066, Block 21, Near Dragon Mart Al Sayer, Doha"
      ),

      directions: safeText(
        contactT?.directions,
        isAr ? "احصل على الاتجاهات" : "Get Directions"
      ),

      quickTitle: safeText(
        contactT?.quickTitle,
        isAr ? "تحتاج إلى مساعدة فورية؟" : "Need Immediate Assistance?"
      ),
      quickText: safeText(
        contactT?.quickText,
        isAr
          ? "فريقنا متاح للإجابة على أسئلتك وجدولة المواعيد."
          : "Our team is available to answer your questions and schedule appointments."
      ),
      callNow: safeText(contactT?.callNow, isAr ? "اتصل الآن" : "Call Now"),

      // ✅ displayed numbers are fully translatable + localized digits for Arabic UI
      phoneNumber: l10n(safeText(contactT?.phoneNumber, "+97433202409")),
      whatsappNumber: l10n(safeText(contactT?.whatsappNumber, "+97433202409")),
    };
  }, [contactT, lang]);

  // Localize contact info cards fully (including displayed numbers)
  const contactInfo: InfoItem[] = useMemo(
    () => [
      {
        icon: Phone,
        title: copy.phone,
        details: [copy.phoneNumber],
        href: "tel:+97433202409",
        target: "_self",
      },
      {
        icon: MessageCircle,
        title: copy.whatsapp,
        details: [copy.whatsappNumber],
        href: "https://wa.me/97433202409",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: Mail,
        title: copy.email,
        details: ["info@rodeodrive.me"],
        href: "mailto:info@rodeodrive.me",
        target: "_self",
      },
      {
        icon: MapPin,
        title: copy.location,
        details: [copy.mapAddressLine1, copy.mapAddressLine2],
        href: "https://maps.app.goo.gl/w1QEpGjy7UmE9LBs9?g_st=ipc",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: Clock,
        title: copy.workingHours,
        details: [copy.hoursLine],
      },
    ],
    [copy]
  );

  // Re-run motion when language changes (text length/layout changes)
  const motionKey = `${lang}|contact`;

  // Optional: if you want link to be localized like /en/contact, /ar/contact
  const pathname = usePathname();
  const rootHref = useMemo(() => {
    const clean = (pathname || "").split("?")[0];
    const parts = clean.split("/").filter(Boolean);
    if (parts.length && (parts[0] === "en" || parts[0] === "ar")) return `/${lang}/contact`;
    return "/contact";
  }, [pathname, lang]);

  return (
    <main
      id="contact-root"
      className={styles.contactPage}
      data-contact-root
      dir={dir}
      lang={lang}
      key={lang}
    >
      {/* tiny client motion controller (GSAP lazy-loaded inside) */}
      <ContactMotion motionKey={motionKey} />

      {/* Hero */}
      <section className={styles.hero} data-contact-hero>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent} data-contact-hero-content>
          <h1 className={styles.title} data-contact-animate>
            {copy.heroTitle}
          </h1>
          <p className={styles.subtitle} data-contact-animate>
            {copy.heroSubtitle}
          </p>

          <div className={styles.heroDecoration} data-contact-animate>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className={styles.contactInfoSection} data-contact-info>
        <div className={styles.container}>
          <div className={styles.infoGrid} data-contact-cards>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;

              const CardInner = (
                <>
                  <div className={styles.infoIcon}>
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  <div className={styles.infoDetails}>
                    {info.details.map((detail, idx) => {
                      const forceLtr = lang === "ar" && isPhoneLike(detail);
                      return (
                        <p key={idx} className={styles.infoDetail}>
                          <NumberBidi forceLtr={forceLtr}>{detail}</NumberBidi>
                        </p>
                      );
                    })}
                  </div>
                </>
              );

              if (info.href) {
                return (
                  <a
                    key={index}
                    className={styles.infoCard}
                    href={info.href}
                    target={info.target}
                    rel={info.rel}
                    aria-label={info.title}
                    data-contact-card
                  >
                    {CardInner}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className={styles.infoCard}
                  aria-label={info.title}
                  data-contact-card
                >
                  {CardInner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking / Form */}
      <Book />

      {/* Map */}
      <section className={styles.mapSection} data-contact-map>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-contact-animate>
            {copy.visitTitle}
          </h2>

          <div className={styles.mapWrapper}>
            <div className={styles.mapPlaceholder} data-contact-card>
              <MapPin size={64} strokeWidth={1} />
              <h3 className={styles.mapTitle}>{copy.mapTitle}</h3>
              <p className={styles.mapAddress}>{copy.mapAddressLine2}</p>

              <a
                className={styles.directionsButton}
                href="https://maps.app.goo.gl/w1QEpGjy7UmE9LBs9?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.directions}
              </a>

              {/* Optional hidden link for consistent localized routing */}
              <a href={rootHref} style={{ display: "none" }} aria-hidden="true">
                {rootHref}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className={styles.quickContactSection} data-contact-cta>
        <div className={styles.container}>
          <div className={styles.quickContactContent} data-contact-animate>
            <h2 className={styles.quickContactTitle}>{copy.quickTitle}</h2>
            <p className={styles.quickContactText}>{copy.quickText}</p>

            <div className={styles.quickContactButtons}>
              <a className={styles.phoneButton} href="tel:+97433202409">
                <Phone size={20} />
                {copy.callNow}
              </a>

              <a
                className={styles.whatsappButtonLarge}
                href="https://wa.me/97433202409"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                {copy.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
