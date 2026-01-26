"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ServicesHighlight.module.css";
import { useI18n } from "../../lib/i18n";

type Service = {
  title: string;
  description: string;
  image: string;
  tone?: "silver" | "burgundy";
};

function safeText(v: unknown, fallback: string) {
  return typeof v === "string" && v.trim() ? v : fallback;
}

function getMotionFlags() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return { reduced: false, lite: false };
  }
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lite =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

  return { reduced, lite };
}

export default function ServicesHighlight() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  const services: Service[] = useMemo(() => {
    const s = (t as any)?.services ?? {};
    const list = s?.list ?? {};
    const desc = s?.descriptions ?? {};

    return [
      {
        title: safeText(list.paintProtection, "Paint Protection"),
        description: safeText(desc.paintProtectionDesc ?? desc.paintProtection, "Premium protection for your paint."),
        image: "/ppf.avif",
        tone: "silver",
      },
      {
        title: safeText(list.ceramicCoating, "Ceramic Coating"),
        description: safeText(desc.ceramicCoatingDesc ?? desc.ceramicCoating, "Long-lasting hydrophobic gloss."),
        image: "/ceramic.avif",
        tone: "burgundy",
      },
      {
        title: safeText(list.polish, "Polish"),
        description: safeText(desc.polishDesc ?? desc.polish, "Refined clarity and depth."),
        image: "/polish2.avif",
        tone: "silver",
      },
      {
        title: safeText(list.blackEdition, "Black Edition"),
        description: safeText(desc.blackEditionDesc ?? desc.blackEdition, "Deep, uniform, luxury finish."),
        image: "/defenderchangedcolor.avif",
        tone: "burgundy",
      },
      {
        title: safeText(list.smartRepair, "Smart Repair"),
        description: safeText(desc.smartRepairDesc ?? desc.smartRepair, "Targeted repair for minor defects."),
        image: "/paintoriginal.avif",
        tone: "silver",
      },
      {
        title: safeText(list.nanoLeather, "Nano Leather"),
        description: safeText(desc.nanoLeatherDesc ?? desc.nanoLeather, "Interior protection and care."),
        image: "/solar.avif",
        tone: "burgundy",
      },
    ];
  }, [t]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const { reduced, lite } = getMotionFlags();

    // Always mark ready to enable CSS reveal system
    root.classList.add(styles.ready);

    // Reduced or Lite mode: show everything instantly (no observers)
    if (reduced || lite) {
      const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
      items.forEach((el) => el.classList.add(styles.in));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add(styles.in);
          io.unobserve(entry.target);
        }
      },
      { root: null, threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Header row */}
        <header className={styles.header} data-reveal>
          <div className={styles.headerLeft}>
            <p className={styles.kicker}>{t.services.subtitle}</p>
            <h2 className={styles.title}>{t.services.title}</h2>
            <p className={styles.lead}>
              Precision. Protection. Performance — engineered finishes for Qatar’s roads and sun.
            </p>
          </div>

          <div className={styles.headerRight}>
            <Link href="/services" className={styles.primaryCta}>
              {t.services.viewAll}
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaTop}>Premium</span>
                <span className={styles.metaBottom}>Materials</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaTop}>Expert</span>
                <span className={styles.metaBottom}>Technicians</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaTop}>Luxury</span>
                <span className={styles.metaBottom}>Finish</span>
              </div>
            </div>
          </div>
        </header>

        {/* Showcase grid */}
        <div className={styles.grid} data-reveal>
          {services.map((s, i) => (
            <article
              key={`${s.title}-${i}`}
              className={`${styles.card} ${s.tone === "burgundy" ? styles.toneB : styles.toneS}`}
            >
              <div className={styles.media}>
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                  priority={false}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.mediaOverlay} aria-hidden="true" />
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  Signature Service
                </div>
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.desc}>{s.description}</p>

                <div className={styles.actions}>
                  <Link href="/services" className={styles.link}>
                    {t.services.learnMore}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <span className={styles.pill} aria-hidden="true">
                    Doha • Qatar
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomRow} data-reveal>
          <div className={styles.bottomLine} />
          <p className={styles.bottomText}>
            Need the right package for your vehicle? Explore services and book a consultation.
          </p>
          <Link href="/contact" className={styles.secondaryCta}>
            Contact
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
