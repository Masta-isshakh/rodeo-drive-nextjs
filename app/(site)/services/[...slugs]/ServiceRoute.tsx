"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import styles from "./serviceRoute.module.css";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider/BeforeAfterSlider";
import { SITE } from "@/app/config/site";
import type { Service, Subservice, Lang as CatalogLang } from "../../../content/catalog2";
import { useI18n } from "../../../lib/i18n";

const ServiceRouteMotion = dynamic(() => import("./ServiceMotion"), {
  ssr: false,
  loading: () => null,
});

type Lang = "en" | "ar";

function getText<T>(obj: Record<CatalogLang, T>, lang: CatalogLang): T {
  return obj?.[lang] ?? obj?.en;
}

export default function ServiceRouteClient({
  slugs,
  service,
  sub,
}: {
  slugs: string[];
  service: Service | null;
  sub: Subservice | null;
}) {
  const i18n = useI18n() as any;

  // ✅ React to header language button
  const [runtimeLang, setRuntimeLang] = useState<Lang>("en");

  useEffect(() => {
    const fromI18n =
      i18n?.lang ?? i18n?.locale ?? i18n?.language ?? i18n?.currentLang ?? "";
    const fromHtml = typeof document !== "undefined" ? document.documentElement.lang : "";
    const guess = String(fromI18n || fromHtml || "en").toLowerCase();
    setRuntimeLang(guess.startsWith("ar") ? "ar" : "en");
  }, [i18n?.lang, i18n?.locale, i18n?.language, i18n?.currentLang, i18n?.dir]);

  const lang: CatalogLang = runtimeLang === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const serviceSlug = slugs?.[0];
  const subSlug = slugs?.[1];

  const baseServices = `/services`;
  const baseContact = `/contact`;
  const baseBook = `/book`;
  const baseHome = `/`;

  const motionKey = `${lang}|${slugs.join("/") || "root"}`;

  const ui = useMemo(() => {
    const isAr = lang === "ar";
    return {
      notFoundTitle: isAr ? "الصفحة غير موجودة" : "Page not found",
      notFoundDesc: isAr
        ? "الصفحة المطلوبة غير موجودة أو تم نقلها."
        : "The requested service page does not exist or may have been moved.",
      backToServices: isAr ? "العودة للخدمات" : "Back to Services",
      contactUs: isAr ? "تواصل معنا" : "Contact Us",
      home: isAr ? "الرئيسية" : "Home",
      bookNow: isAr ? "احجز الآن" : "Book Now",
      whatsapp: isAr ? "واتساب" : "WhatsApp",
      call: isAr ? "اتصال" : "Call",
      subservices: isAr ? "الخدمات الفرعية" : "Subservices",
      viewDetails: isAr ? "عرض التفاصيل" : "View details",
      backToService: isAr ? "العودة للخدمة" : "Back to Service",
      services: isAr ? "الخدمات" : "Services",
      bestFor: isAr ? "مناسب لـ" : "Best for",
      specifications: isAr ? "المواصفات" : "Specifications",
      included: isAr ? "يشمل" : "What’s included",
      aftercare: isAr ? "بعد الخدمة" : "Aftercare",
      process: isAr ? "العملية" : "Our process",
      faqs: isAr ? "الأسئلة الشائعة" : "FAQs",
      readyToStart: isAr ? "جاهز للبدء؟" : "Ready to start?",
      sendPhotos: isAr
        ? "أرسل صورًا عبر واتساب للحصول على عرض سعر سريع."
        : "Send photos on WhatsApp for a fast quote.",
      getQuote: isAr ? "احصل على عرض سعر" : "Get a Quote",
      notFoundHintServiceMissing: isAr ? "الخدمة غير موجودة." : "Service not found.",
      notFoundHintSubMissing: isAr ? "الخدمة الفرعية غير موجودة." : "Subservice not found.",
      timeline: isAr ? "المدة" : "Timeline",
      warranty: isAr ? "الضمان" : "Warranty",
      location: isAr ? "الموقع" : "Location",
      doha: isAr ? "الدوحة" : "Doha",
    };
  }, [lang]);

  // ---------------------------
  // 404: no service slug
  // ---------------------------
  if (!serviceSlug) {
    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />
        <div className={styles.container}>
          <div className={styles.card} role="status" aria-live="polite">
            <div className={styles.badge}>404</div>
            <h1 className={styles.h1}>{ui.notFoundTitle}</h1>
            <p className={styles.muted}>{ui.notFoundDesc}</p>

            <div className={styles.actions}>
              <Link className={styles.btnPrimary} href={baseServices}>
                {ui.backToServices}
              </Link>
              <Link className={styles.btnGhost} href={baseContact}>
                {ui.contactUs}
              </Link>
              <Link className={styles.btnGhost} href={baseHome}>
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ---------------------------
  // 404: service not found
  // ---------------------------
  if (!service) {
    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />
        <div className={styles.container}>
          <div className={styles.card} role="status" aria-live="polite">
            <div className={styles.badge}>404</div>
            <h1 className={styles.h1}>{ui.notFoundTitle}</h1>
            <p className={styles.muted}>{ui.notFoundHintServiceMissing}</p>

            <div className={styles.actions}>
              <Link className={styles.btnPrimary} href={baseServices}>
                {ui.backToServices}
              </Link>
              <Link className={styles.btnGhost} href={baseHome}>
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ===========================
  // SERVICE PAGE (no subSlug)
  // ===========================
  if (!subSlug) {
    const title = getText(service.title, lang);
    const subtitle = getText(service.subtitle, lang);
    const overview = getText(service.overview, lang) ?? [];

    const proofKey = service.slug.replace(/\//g, "-");
    const beforeSrc = `/proof/${proofKey}-before.avif`;
    const afterSrc = `/proof/${proofKey}-after.avif`;

    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />

        {/* HERO */}
        <header className={styles.hero} data-sr-reveal>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.container}>
            <Link
              href={baseServices}
              className={styles.backArrow}
              aria-label={ui.backToServices}
              data-sr-reveal-item
            >
              <span className={styles.backIcon} aria-hidden="true">
                {lang === "ar" ? "→" : "←"}
              </span>
              <span className={styles.backText}>{ui.backToServices}</span>
            </Link>

            <div data-sr-reveal-item>
              <h1 className={styles.h1}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>

              <div className={styles.ctaRow}>
                <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href={baseBook}>
                  {ui.bookNow}
                </Link>
                <a
                  className={`${styles.btnGhost} ${styles.ctaBtn}`}
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.whatsapp}
                </a>
                <a className={`${styles.btnGhost} ${styles.ctaBtn}`} href={`tel:${SITE.phoneTel}`}>
                  {ui.call}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* OVERVIEW + SLIDER */}
        <section className={styles.section} data-sr-reveal>
          <div className={styles.container}>
            <div className={styles.split}>
              <div className={styles.textCol}>
                {overview.map((p, idx) => (
                  <p key={idx} className={styles.paragraph} data-sr-reveal-item>
                    {p}
                  </p>
                ))}
              </div>

              <aside className={styles.mediaCard} data-sr-reveal-item>
                <div className={styles.sliderWrap}>
                  <BeforeAfterSlider
                    beforeSrc={beforeSrc}
                    afterSrc={afterSrc}
                    alt={`${title} before/after`}
                    height={320}
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* SUBSERVICES */}
        <section className={styles.sectionAlt} data-sr-reveal>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.subservices}</h2>
            </div>

            <div className={styles.grid}>
              {service.subservices.map((s) => (
                <article key={s.slug} className={styles.card} data-sr-reveal-item>
                  <div className={styles.cardTop}>
                    <Image
                      src={s.heroImage || "/services/placeholder.avif"}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      className={styles.cardImg}
                      priority={false}
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.h3}>{getText(s.title, lang)}</h3>
                      <p className={styles.cardText}>{getText(s.intro, lang)?.[0]}</p>
                    </div>

                    <Link className={styles.cardBtn} href={`/services/${service.slug}/${s.slug}`}>
                      {ui.viewDetails}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ===========================
  // SUBSERVICE PAGE
  // ===========================
  if (!sub) {
    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />
        <div className={styles.container}>
          <div className={styles.card} role="status" aria-live="polite">
            <div className={styles.badge}>404</div>
            <h1 className={styles.h1}>{ui.notFoundTitle}</h1>
            <p className={styles.muted}>{ui.notFoundHintSubMissing}</p>

            <div className={styles.actions}>
              <Link className={styles.btnPrimary} href={`/services/${service.slug}`}>
                {ui.backToService}
              </Link>
              <Link className={styles.btnGhost} href={baseServices}>
                {ui.services}
              </Link>
              <Link className={styles.btnGhost} href={baseHome}>
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const title = getText(sub.title, lang);
  const intro = getText(sub.intro, lang) ?? [];
  const bestFor = getText(sub.bestFor, lang) ?? [];
  const specs = getText(sub.specs, lang) ?? [];
  const included = getText(sub.included, lang) ?? [];
  const process = getText(sub.process, lang) ?? [];
  const aftercare = getText(sub.aftercare, lang) ?? [];
  const timeline = getText(sub.timeline, lang);

  return (
    <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
      <ServiceRouteMotion motionKey={motionKey} />

      {/* HERO SMALL */}
      <header className={styles.heroSmall} data-sr-reveal>
        <div className={styles.container}>
          <Link
            href={`/services/${service.slug}`}
            className={styles.backArrow}
            aria-label={ui.backToService}
            data-sr-reveal-item
          >
            <span className={styles.backIcon} aria-hidden="true">
              {lang === "ar" ? "→" : "←"}
            </span>
            <span className={styles.backText}>{ui.backToService}</span>
          </Link>

          <div data-sr-reveal-item>
            <h1 className={styles.h1}>{title}</h1>
            <p className={styles.subtitle}>{intro?.[0]}</p>

            <div className={styles.ctaRow}>
              <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href={baseBook}>
                {ui.bookNow}
              </Link>
              <a
                className={`${styles.btnGhost} ${styles.ctaBtn}`}
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.whatsapp}
              </a>
              <a className={`${styles.btnGhost} ${styles.ctaBtn}`} href={`tel:${SITE.phoneTel}`}>
                {ui.call}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO + IMAGE */}
      <section className={styles.section} data-sr-reveal>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.textCol}>
              {intro.slice(0, 2).map((p, idx) => (
                <p key={idx} className={styles.paragraph} data-sr-reveal-item>
                  {p}
                </p>
              ))}

              <div className={styles.kpiRow} data-sr-reveal-item>
                <div className={styles.kpi}>
                  <span>{ui.timeline}</span>
                  <strong>{timeline}</strong>
                </div>
                <div className={styles.kpi}>
                  <span>{ui.warranty}</span>
                  <strong>{lang === "ar" ? "متوفر" : "Included"}</strong>
                </div>
                <div className={styles.kpi}>
                  <span>{ui.location}</span>
                  <strong>{ui.doha}</strong>
                </div>
              </div>
            </div>

            <aside className={styles.cardTopsub} data-sr-reveal-item>
              <Image
                src={sub.heroImage || "/services/placeholder.png"}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.cardImgsub}
                priority={false}
              />
            </aside>
          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className={styles.sectionAlt} data-sr-reveal>
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-sr-reveal-item>
            <h2 className={styles.h2}>{ui.bestFor}</h2>
          </div>
          <ul className={styles.bullets}>
            {bestFor.map((x) => (
              <li key={x} data-sr-reveal-item>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECS / INCLUDED / AFTERCARE */}
      <section className={styles.section} data-sr-reveal>
        <div className={styles.container}>
          <div className={styles.threeCols}>
            <div className={styles.panel} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.specifications}</h2>
              <ul className={styles.bullets}>
                {specs.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className={styles.panel} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.included}</h2>
              <ul className={styles.bullets}>
                {included.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className={styles.panel} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.aftercare}</h2>
              <ul className={styles.bullets}>
                {aftercare.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.sectionAlt} data-sr-reveal>
        <div className={styles.container}>
          <h2 className={styles.h2} data-sr-reveal-item>
            {ui.process}
          </h2>

          <ol className={styles.timeline}>
            {process.map((step, i) => (
              <li key={i} data-sr-reveal-item>
                <span className={styles.stepIndex}>{i + 1}</span>
                <span className={styles.stepText}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className={styles.section} data-sr-reveal>
        <div className={styles.container}>
          <h2 className={styles.h2} data-sr-reveal-item>
            {ui.faqs}
          </h2>

          <div className={styles.faqGrid} data-sr-reveal-item>
            {sub.faqs?.map((f, idx) => (
              <details key={idx} className={styles.faq}>
                <summary>{getText(f.q, lang)}</summary>
                <p className={styles.faqAns}>{getText(f.a, lang)}</p>
              </details>
            ))}
          </div>

          <div className={styles.finalCta} data-sr-reveal-item>
            <h3 className={styles.h3}>{ui.readyToStart}</h3>
            <p className={styles.muted}>{ui.sendPhotos}</p>

            <div className={styles.ctaRow}>
              <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href={baseBook}>
                {ui.getQuote}
              </Link>
              <a
                className={`${styles.btnGhost} ${styles.ctaBtn}`}
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
