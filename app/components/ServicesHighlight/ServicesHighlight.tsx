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

  // ✅ Read highlight keys from translations (EN/AR)
  const ui = useMemo(() => {
    const s = (t as any)?.services ?? {};
    const h = s?.highlight ?? {};
    const meta = h?.meta ?? {};

    return {
      kicker: safeText(h.kicker, "Comprehensive automotive care solutions"),
      title: safeText(h.title, "Premium Services"),
      lead: safeText(
        h.lead,
        "Precision. Protection. Performance — engineered finishes for Qatar’s roads and sun."
      ),

      viewAll: safeText(h.viewAll, safeText(s?.viewAll, "View All Services")),
      learnMore: safeText(h.learnMore, safeText(s?.learnMore, "Learn More")),

      signatureBadge: safeText(h.signatureBadge, "Signature Service"),
      dohaPill: safeText(h.dohaPill, "Doha • Qatar"),

      bottomText: safeText(
        h.bottomText,
        "Need the right package for your vehicle? Explore services and book a consultation."
      ),
      contactCta: safeText(h.contactCta, "Contact"),

      metaPremiumTop: safeText(meta.premiumTop, "Premium"),
      metaPremiumBottom: safeText(meta.premiumBottom, "Materials"),

      metaExpertTop: safeText(meta.expertTop, "Expert"),
      metaExpertBottom: safeText(meta.expertBottom, "Technicians"),

      metaLuxuryTop: safeText(meta.luxuryTop, "Luxury"),
      metaLuxuryBottom: safeText(meta.luxuryBottom, "Finish"),
    };
  }, [t]);

  const services: Service[] = useMemo(() => {
    const s = (t as any)?.services ?? {};
    const list = s?.list ?? {};
    const desc = s?.descriptions ?? {};

    return [
      {
        title: safeText(list.paintProtection, "Paint Protection"),
        description: safeText(
          desc.paintProtectionDesc ?? desc.paintProtection,
          "Premium protection for your paint."
        ),
        image: "/ppf.avif",
        tone: "silver",
      },
      {
        title: safeText(list.ceramicCoating, "Ceramic Coating"),
        description: safeText(
          desc.ceramicCoatingDesc ?? desc.ceramicCoating,
          "Long-lasting hydrophobic gloss."
        ),
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
        description: safeText(
          desc.blackEditionDesc ?? desc.blackEdition,
          "Deep, uniform, luxury finish."
        ),
        image: "/defenderchangedcolor.avif",
        tone: "burgundy",
      },
      {
        title: safeText(list.smartRepair, "Smart Repair"),
        description: safeText(
          desc.smartRepairDesc ?? desc.smartRepair,
          "Targeted repair for minor defects."
        ),
        image: "/paintoriginal.avif",
        tone: "silver",
      },
      {
        title: safeText(list.nanoLeather, "Nano Leather"),
        description: safeText(
          desc.nanoLeatherDesc ?? desc.nanoLeather,
          "Interior protection and care."
        ),
        image: "/solar.avif",
        tone: "burgundy",
      },
    ];
  }, [t]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const { reduced, lite } = getMotionFlags();
    root.classList.add(styles.ready);

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
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <header className={styles.header} data-reveal>
          <div className={styles.headerLeft}>
            <p className={styles.kicker}>{ui.kicker}</p>
            <h2 className={styles.title}>{ui.title}</h2>
            <p className={styles.lead}>{ui.lead}</p>
          </div>

          <div className={styles.headerRight}>
            <Link href="/services" className={styles.primaryCta}>
              {ui.viewAll}
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaTop}>{ui.metaPremiumTop}</span>
                <span className={styles.metaBottom}>{ui.metaPremiumBottom}</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaTop}>{ui.metaExpertTop}</span>
                <span className={styles.metaBottom}>{ui.metaExpertBottom}</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <span className={styles.metaTop}>{ui.metaLuxuryTop}</span>
                <span className={styles.metaBottom}>{ui.metaLuxuryBottom}</span>
              </div>
            </div>
          </div>
        </header>

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
                  sizes="(max-width: 768px) 97vw, 33vw"
                  className={styles.image}
                  priority={false}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.mediaOverlay} aria-hidden="true" />
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  {ui.signatureBadge}
                </div>
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.desc}>{s.description}</p>

                <div className={styles.actions}>
                  <Link href="/services" className={styles.link}>
                    {ui.learnMore}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <span className={styles.pill} aria-hidden="true">
                    {ui.dohaPill}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomRow} data-reveal>
          <div className={styles.bottomLine} />
          <p className={styles.bottomText}>{ui.bottomText}</p>
          <Link href="/contact" className={styles.secondaryCta}>
            {ui.contactCta}
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
