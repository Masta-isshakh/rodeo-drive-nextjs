"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesHighlight.module.css";

export type Lang = "en" | "ar";

export type GuideSection = {
  key: "ppf" | "windshield" | "tint" | "detailing" | "peelable";
  tone: "silver" | "burgundy";
  image: string;
  imageAltEN: string;
  imageAltAR: string;

  titleEN: string;
  titleAR: string;
  leadEN: string;
  leadAR: string;

  benefitsEN: string[];
  benefitsAR: string[];

  processEN: string[];
  processAR: string[];
};

function tDir(lang: Lang) {
  return lang === "ar" ? "rtl" : "ltr";
}

export default function ServicesHighlightClient({
  lang,
  sections,
}: {
  lang: Lang;
  sections: GuideSection[];
}) {
  const dir = tDir(lang);

  const ui = useMemo(() => {
    if (lang === "ar") {
      return {
        kicker: "حماية ذكية مصممة لطرق قطر",
        title: "دليل حماية السيارة",
        subtitle:
          "خدمات أساسية لسيارتك في الدوحة — الفوائد، الخطوات، ولماذا روديو درايف يقدمها بشكل احترافي.",
        ctaPrimary: "احجز الآن",
        ctaSecondary: "تواصل معنا",
        viewServices: "عرض الخدمات",
        benefits: "الفوائد",
        process: "خطوات التنفيذ لدينا",
        close: "إغلاق",
        zoomHint: "اضغط للتكبير",
      };
    }
    return {
      kicker: "Smart protection built for Qatar roads",
      title: "Car Protection Guide",
      subtitle:
        "Essential services in Doha — benefits, process, and why Rodeo Drive delivers premium results.",
      ctaPrimary: "Book Now",
      ctaSecondary: "Contact Us",
      viewServices: "View Services",
      benefits: "Benefits",
      process: "Our Professional Process",
      close: "Close",
      zoomHint: "Tap to enlarge",
    };
  }, [lang]);

  // ✅ only 4 cards
  const cards = useMemo(() => sections.slice(0, 4), [sections]);

  const [openKey, setOpenKey] = useState<string>(cards[0]?.key ?? "ppf");
  const [modal, setModal] = useState<null | { src: string; alt: string }>(null);

  return (
    <main className={styles.page} dir={dir}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>{ui.kicker}</p>
          <h1 className={styles.h1}>{ui.title}</h1>
          <p className={styles.subtitle}>{ui.subtitle}</p>

          <div className={styles.heroCtas}>
            <Link href={`/${lang}/book`} className={styles.ctaPrimary}>
              {ui.ctaPrimary} <span aria-hidden="true">→</span>
            </Link>
            <Link href={`/${lang}/contact`} className={styles.ctaSecondary}>
              {ui.ctaSecondary} <span aria-hidden="true">→</span>
            </Link>
            <Link href={`/${lang}/services`} className={styles.ctaGhost}>
              {ui.viewServices} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 CARDS */}
      <section className={styles.sections}>
        <div className={styles.cardsWrap}>
          {cards.map((s, idx) => {
            const reverse = idx % 2 === 1; // ✅ alternate layout
            const isOpen = openKey === s.key;

            const title = lang === "ar" ? s.titleAR : s.titleEN;
            const lead = lang === "ar" ? s.leadAR : s.leadEN;
            const benefits = lang === "ar" ? s.benefitsAR : s.benefitsEN;
            const process = lang === "ar" ? s.processAR : s.processEN;
            const alt = lang === "ar" ? s.imageAltAR : s.imageAltEN;

            return (
              <article
                key={s.key}
                className={[
                  styles.splitCard,
                  reverse ? styles.reverse : "",
                  s.tone === "burgundy" ? styles.toneB : styles.toneS,
                ].join(" ")}
              >
                {/* IMAGE SIDE */}
                <button
                  type="button"
                  className={styles.media}
                  onClick={() => setModal({ src: s.image, alt })}
                  aria-label={`${title} — ${ui.zoomHint}`}
                >
                  <Image
                    src={s.image}
                    alt={alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 980px) 98vw, 49vw"
                    className={styles.img}
                  />
                  <div className={styles.mediaShade} aria-hidden="true" />
                  <span className={styles.zoomBadge}>{ui.zoomHint}</span>
                </button>

                {/* TEXT SIDE */}
                <div className={styles.content}>
                  <div className={styles.contentInner}>
                    <div className={styles.headRow}>
                      <h3 className={styles.h3}>{title}</h3>
                      <span className={styles.pill}>
                        {lang === "ar" ? "دوحة • قطر" : "Doha • Qatar"}
                      </span>
                    </div>

                    <p className={styles.lead}>{lead}</p>

                    <div className={styles.accordion}>
                      <button
                        type="button"
                        className={styles.accBtn}
                        onClick={() => setOpenKey((k) => (k === s.key ? "" : s.key))}
                        aria-expanded={isOpen}
                      >
                        <span>{ui.benefits}</span>
                        <span
                          className={[
                            styles.chev,
                            isOpen ? styles.chevUp : "",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      </button>

                      <div
                        className={[
                          styles.accPanel,
                          isOpen ? styles.open : "",
                        ].join(" ")}
                      >
                        <ul className={styles.list}>
                          {benefits.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>

                        <div className={styles.divider} />

                        <h4 className={styles.h4}>{ui.process}</h4>
                        <ol className={styles.steps}>
                          {process.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ol>

                        <div className={styles.inlineCtas}>
                          <Link href={`/${lang}/book`} className={styles.inlinePrimary}>
                            {ui.ctaPrimary} <span aria-hidden="true">→</span>
                          </Link>
                          <Link href={`/${lang}/contact`} className={styles.inlineSecondary}>
                            {ui.ctaSecondary} <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className={styles.miniTrust}>
                      <span className={styles.trust}>Inspection</span>
                      <span className={styles.sep} />
                      <span className={styles.trust}>Premium Materials</span>
                      <span className={styles.sep} />
                      <span className={styles.trust}>QC + Warranty</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          onClick={() => setModal(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setModal(null)}>
              {ui.close} ✕
            </button>
            <div className={styles.modalMedia}>
              <Image
                src={modal.src}
                alt={modal.alt}
                fill
                sizes="(max-width: 980px) 96vw, 1100px"
                className={styles.modalImg}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
