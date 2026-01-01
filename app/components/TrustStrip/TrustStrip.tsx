"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TrustStrip.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function TrustStrip() {
  const { t, language } = useI18n(); // language utile si tu veux gérer RTL styles
  const stripRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stripRef.current || !containerRef.current) return;

    // IMPORTANT: scoper GSAP à ce composant (évite collisions + double effects en dev)
    const ctx = gsap.context(() => {
      // 1) Strip reveal
      gsap.fromTo(
        stripRef.current,
        { y: -40, opacity: 0, scaleY: 0.9 },
        {
          y: 0,
          opacity: 1,
          scaleY: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stripRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2) Items stagger
      const items = containerRef.current!.querySelectorAll(`.${styles.trustItem}`);
      gsap.fromTo(
        items,
        { opacity: 0, y: 18, scale: 0.95, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3) Icon pulse (subtil + premium)
      const icons = containerRef.current!.querySelectorAll(`.${styles.trustIcon}`);
      icons.forEach((icon, index) => {
        gsap.to(icon, {
          scale: 1.12,
          rotateZ: 3,
          duration: 1.8 + index * 0.15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      // 4) Shimmer
      if (shimmerRef.current) {
        gsap.fromTo(
          shimmerRef.current,
          { xPercent: -120 },
          {
            xPercent: 220,
            duration: 2.8,
            repeat: -1,
            ease: "none",
            delay: 0.8,
          }
        );
      }
    }, stripRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={styles.trustStrip}
      ref={stripRef}
      // optionnel si tu veux adapter des styles en RTL
      data-dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className={styles.shimmer} ref={shimmerRef} />

      <div className={styles.trustContainer} ref={containerRef}>
        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>📍</span>
          <span>{t.trust.location}</span>
        </div>

        <div className={styles.separator} />

        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>✨</span>
          <span>{t.trust.service1}</span>
        </div>

        <div className={styles.separator} />

        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>🛡️</span>
          <span>{t.trust.service2}</span>
        </div>

        <div className={styles.separator} />

        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>💎</span>
          <span>{t.trust.service3}</span>
        </div>
      </div>
    </div>
  );
}
