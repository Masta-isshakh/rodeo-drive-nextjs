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

export default function ServicesHighlight() {
  const { t } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);

  const services: Service[] = useMemo(
    () => [
      {
        title: t.services.list.paintProtection,
        description:
          t.services.descriptions.paintProtectionDesc ??
          t.services.descriptions.paintProtection,
        image: "/ppf.png",
        tone: "silver",
      },
      {
        title: t.services.list.ceramicCoating,
        description:
          t.services.descriptions.ceramicCoatingDesc ??
          t.services.descriptions.ceramicCoating,
        image: "/ceramic.PNG",
        tone: "burgundy",
      },
      {
        title: t.services.list.polish,
        description:
          t.services.descriptions.polishDesc ?? t.services.descriptions.polish,
        image: "/polish2.png",
        tone: "silver",
      },
      {
        title: t.services.list.blackEdition,
        description:
          t.services.descriptions.blackEditionDesc ??
          t.services.descriptions.blackEdition,
        image: "/defenderchangedcolor.PNG",
        tone: "burgundy",
      },
      {
        title: t.services.list.smartRepair,
        description:
          t.services.descriptions.smartRepairDesc ??
          t.services.descriptions.smartRepair,
        image: "/paintoriginal.PNG",
        tone: "silver",
      },
      {
        title: t.services.list.nanoLeather,
        description:
          t.services.descriptions.nanoLeatherDesc ??
          t.services.descriptions.nanoLeather,
        image: "/solar.PNG",
        tone: "burgundy",
      },
    ],
    [t]
  );

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If reduced motion, just show everything
    if (reduce) {
      root.classList.add(styles.ready);
      const items = root.querySelectorAll("[data-reveal]");
      items.forEach((el) => el.classList.add(styles.in));
      return;
    }

    root.classList.add(styles.ready);

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

    return () => io.disconnect();
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
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
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

        {/* Showcase rail (new layout) */}
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
                    <span className={styles.arrow} aria-hidden="true">→</span>
                  </Link>

                  <span className={styles.pill} aria-hidden="true">
                    Doha • Qatar
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA (short, professional) */}
        <div className={styles.bottomRow} data-reveal>
          <div className={styles.bottomLine} />
          <p className={styles.bottomText}>
            Need the right package for your vehicle? Explore services and book a consultation.
          </p>
          <Link href="/contact" className={styles.secondaryCta}>
            Contact
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
