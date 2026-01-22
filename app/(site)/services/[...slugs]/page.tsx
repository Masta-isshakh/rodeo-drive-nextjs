"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider/BeforeAfterSlider";
import { SITE } from "@/app/config/site";
import styles from "./serviceRoute.module.css";
import { useI18n } from "../../../lib/i18n";
import { CATALOG, Service, Subservice, Lang } from "../../../content/catalog2";

function getText<T>(obj: Record<Lang, T>, lang: Lang): T {
  return obj[lang] ?? obj.en;
}

function findService(slug: string): Service | undefined {
  return (CATALOG.services as Service[]).find((s) => s.slug === slug);
}

function findSub(service: Service, subSlug: string): Subservice | undefined {
  return service.subservices.find((x) => x.slug === subSlug);
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceRoutePage() {
  const params = useParams<{ slugs: string[] }>();
  const slugs = (params?.slugs ?? []) as string[];
  const { language } = useI18n();
  const lang = (language === "ar" ? "ar" : "en") as Lang;
  const dir = lang === "ar" ? "rtl" : "ltr";

  const view = useMemo(() => {
    const serviceSlug = slugs?.[0];
    const subSlug = slugs?.[1];
    if (!serviceSlug) return { kind: "notfound" as const };

    const service = findService(serviceSlug);
    if (!service) return { kind: "notfound" as const };

    if (!subSlug) return { kind: "service" as const, service };

    const sub = findSub(service, subSlug);
    if (!sub) return { kind: "notfound" as const };

    return { kind: "sub" as const, service, sub };
  }, [slugs]);

  if (view.kind === "notfound") {
    return (
<main className={styles.page} dir={dir}>
  <div className={styles.container}>
    <div className={styles.card} role="status" aria-live="polite">
      <div className={styles.badge}>404</div>

      <h1 className={styles.h1}>Page not found</h1>
      <p className={styles.muted}>
        The requested service page does not exist or may have been moved.
      </p>

      <div className={styles.actions}>
        <Link className={styles.btnPrimary} href="/services">
          Back to Services
        </Link>
        <Link className={styles.btnGhost} href="/contact">
          Contact Us
        </Link>
        <Link className={styles.btnGhost} href="/">
          Home
        </Link>
      </div>

      <p className={styles.hint}>
        If you reached this page from a link, please let us know and we will fix it.
      </p>
    </div>
  </div>
</main>

    );
  }

  // ===========================
  // SERVICE PAGE
  // ===========================
  if (view.kind === "service") {
    const s = view.service;
    const title = getText(s.title, lang);
    const subtitle = getText(s.subtitle, lang);
    const overview = getText(s.overview, lang);

    const proofKey = s.slug.replace(/\//g, "-");
    const beforeSrc = `/proof/${proofKey}-before.png`;
    const afterSrc = `/proof/${proofKey}-after.png`;

    return (
      <main className={styles.page} dir={dir}>
        <div className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.container}>
            <Link
              href="/services"
              className={styles.backArrow}
              aria-label={lang === "ar" ? "الرجوع إلى صفحة الخدمات" : "Back to Services"}
            >
              <span className={styles.backIcon} aria-hidden="true">
                {lang === "ar" ? "→" : "←"}
              </span>
              <span className={styles.backText}>
                {lang === "ar" ? "رجوع للخدمات" : "Back to Services"}
              </span>
            </Link>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
              <h1 className={styles.h1}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>

              {/* ✅ aligned CTAs */}
              <div className={styles.ctaRow}>
                <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href="/book">
                  {lang === "ar" ? "احجز الآن" : "Book Now"}
                </Link>
                <a
                  className={`${styles.btnGhost} ${styles.ctaBtn}`}
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === "ar" ? "واتساب" : "WhatsApp"}
                </a>
                <a className={`${styles.btnGhost} ${styles.ctaBtn}`} href={`tel:${SITE.phoneTel}`}>
                  {lang === "ar" ? "اتصال" : "Call"}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.split}>
              <div>
                {overview.map((p, idx) => (
                  <motion.p
                    key={idx}
                    className={styles.paragraph}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.45 }}
                  >
                    {p}
                  </motion.p>
                ))}

                <div className={styles.trustStrip}>
                  <div className={styles.trustItem}>
                    {lang === "ar" ? "ضمان على جميع الخدمات" : "Warranty on all services"}
                  </div>
                  <div className={styles.trustItem}>
                    {lang === "ar" ? "فحص جودة متعدد" : "Multi-step quality control"}
                  </div>
                  <div className={styles.trustItem}>
                    {lang === "ar" ? "مناسب لظروف قطر" : "Optimized for Qatar conditions"}
                  </div>
                </div>
              </div>

              {/* ✅ slider wrapper to ensure it stays clickable & smooth */}
              <div className={styles.mediaCard}>
                <div className={styles.sliderWrap}>
                  <BeforeAfterSlider
                    beforeSrc={beforeSrc}
                    afterSrc={afterSrc}
                    alt={`${title} before/after`}
                    height={320}
                  />
                </div>

                <p className={styles.mutedSmall}>
                  {lang === "ar"
                    ? "صور توضيحية — استبدلها بصور الورشة الحقيقية لزيادة التحويل."
                    : "Illustrative images — replace with real workshop photos for maximum conversion."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.h2}>{lang === "ar" ? "الخدمات الفرعية" : "Subservices"}</h2>
              <p className={styles.muted}>
                {lang === "ar"
                  ? "اختر خدمة فرعية لعرض التفاصيل الكاملة والخطوات والمواصفات."
                  : "Choose a subservice to see full details, process, specifications, and FAQs."}
              </p>
            </div>

            <div className={styles.grid}>
              {s.subservices.map((sub) => (
                <motion.div
                  key={sub.slug}
                  className={styles.card}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                >
                  <div className={styles.cardTop}>
                    <img src={sub.heroImage || "/services/placeholder.png"} alt="" className={styles.cardImg} />
                  </div>

                  {/* ✅ header aligned + CTA pinned bottom */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.h3}>{getText(sub.title, lang)}</h3>
                      <p className={styles.cardText}>{getText(sub.intro, lang)[0]}</p>
                    </div>

                    <Link className={styles.cardBtn} href={`/services/${s.slug}/${sub.slug}`}>
                      {lang === "ar" ? "عرض التفاصيل" : "View details"}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.finalCta}>
              <h2 className={styles.h2}>{lang === "ar" ? "هل تريد توصية دقيقة؟" : "Want an accurate recommendation?"}</h2>
              <p className={styles.muted}>
                {lang === "ar"
                  ? "احجز فحصًا سريعًا أو أرسل صورًا عبر واتساب للحصول على عرض سعر."
                  : "Book a quick inspection or send photos on WhatsApp to get a quote."}
              </p>

              <div className={styles.ctaRow}>
                <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href="/book">
                  {lang === "ar" ? "احصل على عرض سعر" : "Get a Quote"}
                </Link>
                <a
                  className={`${styles.btnGhost} ${styles.ctaBtn}`}
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === "ar" ? "واتساب" : "WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ===========================
  // SUBSERVICE PAGE
  // ===========================
  const s = view.service;
  const sub = view.sub;

  const title = getText(sub.title, lang);
  const intro = getText(sub.intro, lang);
  const bestFor = getText(sub.bestFor, lang);
  const specs = getText(sub.specs, lang);
  const included = getText(sub.included, lang);
  const process = getText(sub.process, lang);
  const aftercare = getText(sub.aftercare, lang);
  const timeline = getText(sub.timeline, lang);

  const serviceKey = s.slug.replace(/\//g, "-");
  const beforeSrc = sub.beforeImage || `/proof/${serviceKey}-before.png`;
  const afterSrc = sub.afterImage || `/proof/${serviceKey}-after.png`;

  const miniImages: string[] = (
    sub.miniImages && sub.miniImages.length
      ? sub.miniImages
      : ["/services/proof-1.svg", "/services/proof-2.svg", "/services/proof-3.svg"]
  ).slice(0, 3);

  return (
    <main className={styles.page} dir={dir}>
      <div className={styles.heroSmall}>
        <div className={styles.container}>
          {/* ✅ bring back the back arrow so header is aligned + consistent */}
          <Link
            href={`/services/${s.slug}`}
            className={styles.backArrow}
            aria-label={lang === "ar" ? "الرجوع إلى صفحة الخدمة" : "Back to Service"}
          >
            <span className={styles.backIcon} aria-hidden="true">
              {lang === "ar" ? "→" : "←"}
            </span>
            <span className={styles.backText}>
              {lang === "ar" ? "رجوع" : "Back"}
            </span>
          </Link>

          <div className={styles.breadcrumbs}>
            <Link href="/services">{lang === "ar" ? "الخدمات" : "Services"}</Link>
            <span className={styles.sep}>/</span>
            <Link href={`/services/${s.slug}`}>{getText(s.title, lang)}</Link>
            <span className={styles.sep}>/</span>
            <span>{title}</span>
          </div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.45 }}>
            <h1 className={styles.h1}>{title}</h1>
            <p className={styles.subtitle}>{intro[0]}</p>

            {/* ✅ aligned CTAs */}
            <div className={styles.ctaRow}>
              <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href="/book">
                {lang === "ar" ? "احجز الآن" : "Book Now"}
              </Link>
              <a
                className={`${styles.btnGhost} ${styles.ctaBtn}`}
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "ar" ? "واتساب" : "WhatsApp"}
              </a>
              <a className={`${styles.btnGhost} ${styles.ctaBtn}`} href={`tel:${SITE.phoneTel}`}>
                {lang === "ar" ? "اتصال" : "Call"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div>
              {intro.slice(0, 2).map((p, idx) => (
                <motion.p
                  key={idx}
                  className={styles.paragraph}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                >
                  {p}
                </motion.p>
              ))}

              <div className={styles.kpiRow}>
                <div className={styles.kpi}>
                  <span>{lang === "ar" ? "المدة" : "Timeline"}</span>
                  <strong>{timeline}</strong>
                </div>
                <div className={styles.kpi}>
                  <span>{lang === "ar" ? "ضمان" : "Warranty"}</span>
                  <strong>{lang === "ar" ? "متوفر" : "Included"}</strong>
                </div>
                <div className={styles.kpi}>
                  <span>{lang === "ar" ? "المنطقة" : "Location"}</span>
                  <strong>{lang === "ar" ? "الدوحة" : "Doha"}</strong>
                </div>
              </div>
            </div>

            {/* ✅ restore slider for subservice (your previous version removed it) */}
                  <div className={styles.cardTopsub}>
                    <img src={sub.heroImage || "/services/placeholder.png"} alt="" className={styles.cardImgsub} />
                  </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>{lang === "ar" ? "مناسب لـ" : "Best for"}</h2>
          </div>
          <ul className={styles.bullets}>{bestFor.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.threeCols}>
            <div className={styles.panel}>
              <h2 className={styles.h2}>{lang === "ar" ? "المواصفات" : "Specifications"}</h2>
              <ul className={styles.bullets}>{specs.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className={styles.panel}>
              <h2 className={styles.h2}>{lang === "ar" ? "يشمل" : "What’s included"}</h2>
              <ul className={styles.bullets}>{included.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className={styles.panel}>
              <h2 className={styles.h2}>{lang === "ar" ? "بعد الخدمة" : "Aftercare"}</h2>
              <ul className={styles.bullets}>{aftercare.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.h2}>{lang === "ar" ? "العملية" : "Our process"}</h2>
          <ol className={styles.timeline}>
            {process.map((step, i) => (
              <motion.li
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.stepIndex}>{i + 1}</span>
                <span className={styles.stepText}>{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.h2}>{lang === "ar" ? "الأسئلة الشائعة" : "FAQs"}</h2>
          <div className={styles.faqGrid}>
            {sub.faqs.map((f, idx) => (
              <details key={idx} className={styles.faq}>
                <summary>{getText(f.q, lang)}</summary>
                <p className={styles.faqAns}>{getText(f.a, lang)}</p>
              </details>
            ))}
          </div>

          <div className={styles.finalCta}>
            <h3 className={styles.h3}>{lang === "ar" ? "جاهز للبدء؟" : "Ready to start?"}</h3>
            <p className={styles.muted}>
              {lang === "ar" ? "أرسل صورًا عبر واتساب للحصول على عرض سعر سريع." : "Send photos on WhatsApp for a fast quote."}
            </p>

            <div className={styles.ctaRow}>
              <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href="/book">
                {lang === "ar" ? "احصل على عرض سعر" : "Get a Quote"}
              </Link>
              <a
                className={`${styles.btnGhost} ${styles.ctaBtn}`}
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "ar" ? "واتساب" : "WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
