"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./Rotating3DCar.module.css";
import { useI18n } from "../../lib/i18n";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

export default function Rotating3DCar() {
  const sectionRef = useRef<HTMLElement>(null);
  const carContainerRef = useRef<HTMLDivElement>(null); // rotate this
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const angleTextRef = useRef<HTMLDivElement>(null);

  const { t } = useI18n();

  const labels: {
    title: string;
    subtitle: string;
    description: string;
    rotation: string;
    frontView: string;
    sideProfile: string;
    rearView: string;
    threeQuarter: string;
  } = useMemo(() => {
    const inspection = (t as any)?.inspection360 ?? {};
    return {
      title: safeText(inspection.title, "360Â° Inspection"),
      subtitle: safeText(inspection.subtitle, "Every Angle Perfected"),
      description: safeText(
        inspection.description,
        "We examine every detail from all perspectives to ensure flawless results."
      ),
      rotation: safeText(inspection.rotation, "Rotation"),
      frontView: safeText(inspection.frontView, "Front View"),
      sideProfile: safeText(inspection.sideProfile, "Side Profile"),
      rearView: safeText(inspection.rearView, "Rear View"),
      threeQuarter: safeText(inspection.threeQuarter, "Three Quarter"),
    };
  }, [t]);

  const carImages = useMemo(
    () => [
      {
        url: "https://images.unsplash.com/photo-1760381558154-0887c4539467?auto=format&fit=crop&w=1400&q=80",
        angle: 0,
        title: labels.frontView,
      },
      {
        url: "https://images.unsplash.com/photo-1558992658-08a063bb01af?auto=format&fit=crop&w=1400&q=80",
        angle: 90,
        title: labels.sideProfile,
      },
      {
        url: "https://images.unsplash.com/photo-1602210738255-3c9c94c0149c?auto=format&fit=crop&w=1400&q=80",
        angle: 180,
        title: labels.rearView,
      },
      {
        url: "https://images.unsplash.com/photo-1683693066225-028b1e30bc6e?auto=format&fit=crop&w=1400&q=80",
        angle: 270,
        title: labels.threeQuarter,
      },
    ],
    [labels]
  );

  useEffect(() => {
    // GSAP animations disabled for this build
  }, [labels]); // langue change => texte change + re-init propre

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title} ref={titleRef}>
            <span className={styles.titleGradient}>{labels.title}</span>
            <br />
            {labels.subtitle}
          </h2>
          <p className={styles.description} ref={descriptionRef}>
            {labels.description}
          </p>
        </div>

        <div className={styles.carWrapper}>
          <div className={styles.carContainer} ref={carContainerRef}>
            {carImages.map((car, index) => (
              <div
                key={`${car.angle}-${index}`}
                className={styles.carImage}
                style={{ transform: `rotateY(${car.angle}deg) translateZ(var(--z))` }}
              >
                <img src={car.url} alt={car.title} loading="lazy" draggable={false} />
                <div className={styles.carLabel}>{car.title}</div>
              </div>
            ))}
          </div>

          <div className={styles.angleIndicator}>
            <div className={styles.angleDisplay} ref={angleTextRef}>
              0Â°
            </div>
            <div className={styles.angleLabel}>{labels.rotation}</div>
          </div>

          <div className={styles.reflectionLine} />
          <div className={styles.scanLine} />
        </div>
      </div>

      <div className={styles.backgroundGrid} />
      <div className={styles.gradientOverlay} />
    </section>
  );
}

