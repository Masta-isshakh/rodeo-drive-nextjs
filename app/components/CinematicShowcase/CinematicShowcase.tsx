"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import styles from "./CinematicShowcase.module.css";
import { useI18n } from "../../lib/i18n";
import Image from "next/image";

const CinematicShowcaseMotion = dynamic(() => import("./CinematiqueShowcaseClient"), {
  ssr: false,
  loading: () => null,
});

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

export default function CinematicShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const carsNumRef = useRef<HTMLDivElement>(null);
  const clientsNumRef = useRef<HTMLDivElement>(null);
  const yearsNumRef = useRef<HTMLDivElement>(null);
  const ratingNumRef = useRef<HTMLDivElement>(null);

  // ✅ KEEP your translation method as-is
  const { t } = useI18n();

  const labels = useMemo(() => {
    const cs = (t as any)?.cinematicShowcase ?? {};
    return {
      title: safeText(cs.title, "Excellence in Every Detail"),
      subtitle: safeText(cs.subtitle, "Experience automotive perfection through our signature services"),
      premiumDetailingTitle: safeText(cs.premiumDetailingTitle, "Premium Detailing"),
      premiumDetailingDesc: safeText(cs.premiumDetailingDesc, "Meticulous care for every surface."),
      ceramicCoatingTitle: safeText(cs.ceramicCoatingTitle, "Ceramic Coating"),
      ceramicCoatingDesc: safeText(cs.ceramicCoatingDesc, "Long-lasting brilliance and durability."),
      paintCorrectionTitle: safeText(cs.paintCorrectionTitle, "Paint Correction"),
      paintCorrectionDesc: safeText(cs.paintCorrectionDesc, "Eliminate imperfections for a mirror finish."),
      interiorLuxuryTitle: safeText(cs.interiorLuxuryTitle, "Interior Luxury"),
      interiorLuxuryDesc: safeText(cs.interiorLuxuryDesc, "Deep clean and premium leather care."),
      carsDetailedLabel: safeText(cs.carsDetailedLabel, "Cars Detailed"),
      happyClientsLabel: safeText(cs.happyClientsLabel, "Happy Clients"),
      yearsExperienceLabel: safeText(cs.yearsExperienceLabel, "Years Experience"),
      averageRatingLabel: safeText(cs.averageRatingLabel, "Average Rating"),
    };
  }, [t]);

  // Small key to re-init animations if language changes
  const motionKey = useMemo(
    () =>
      [
        labels.title,
        labels.subtitle,
        labels.premiumDetailingTitle,
        labels.ceramicCoatingTitle,
        labels.paintCorrectionTitle,
        labels.interiorLuxuryTitle,
        labels.carsDetailedLabel,
        labels.happyClientsLabel,
        labels.yearsExperienceLabel,
        labels.averageRatingLabel,
      ].join("|"),
    [labels]
  );

  return (
    <section className={styles.showcase} ref={sectionRef}>
      {/* ✅ GSAP code is moved out + code-split + lazy-loaded */}
      <CinematicShowcaseMotion
        motionKey={motionKey}
        sectionRef={sectionRef}
        titleRef={titleRef}
        subtitleRef={subtitleRef}
        cardsContainerRef={cardsContainerRef}
        statsRef={statsRef}
        carsNumRef={carsNumRef}
        clientsNumRef={clientsNumRef}
        yearsNumRef={yearsNumRef}
        ratingNumRef={ratingNumRef}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} ref={titleRef}>
            {labels.title}
          </h2>
          <p className={styles.subtitle} ref={subtitleRef}>
            {labels.subtitle}
          </p>
        </div>

        <div className={styles.cardsGrid} ref={cardsContainerRef}>
          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/10.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle}>{labels.premiumDetailingTitle}</h3>
            <p className={styles.cardDesc}>{labels.premiumDetailingDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/11.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle}>{labels.ceramicCoatingTitle}</h3>
            <p className={styles.cardDesc}>{labels.ceramicCoatingDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/12.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle}>{labels.paintCorrectionTitle}</h3>
            <p className={styles.cardDesc}>{labels.paintCorrectionDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/13.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle}>{labels.interiorLuxuryTitle}</h3>
            <p className={styles.cardDesc}>{labels.interiorLuxuryDesc}</p>
          </div>
        </div>

        <div className={styles.stats} ref={statsRef}>
          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={carsNumRef}>
              0+
            </div>
            <div className={styles.statLabel}>{labels.carsDetailedLabel}</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={clientsNumRef}>
              0+
            </div>
            <div className={styles.statLabel}>{labels.happyClientsLabel}</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={yearsNumRef}>
              0+
            </div>
            <div className={styles.statLabel}>{labels.yearsExperienceLabel}</div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={ratingNumRef}>
              0
            </div>
            <div className={styles.statLabel}>{labels.averageRatingLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
