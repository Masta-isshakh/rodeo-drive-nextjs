"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroVideo.module.css";
import { useI18n } from "../../lib/i18n";
import Link from "next/link";

type Orb = { left: string; top: string; delay: string; duration: string; size: number; opacity: number };
type Line = { left: string; delay: string; duration: string; opacity: number };

export default function HeroVideo() {
  const { t } = useI18n();

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ✅ Orbs / lines générés une seule fois (pas de DOM appendChild)
  const orbs = useMemo<Orb[]>(() => {
    const arr: Orb[] = [];
    for (let i = 0; i < 5; i++) {
      const size = 220 + Math.random() * 160;
      arr.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${i * 1.4}s`,
        duration: `${10 + i * 2}s`,
        size,
        opacity: 0.18 + Math.random() * 0.12,
      });
    }
    return arr;
  }, []);

  const lines = useMemo<Line[]>(() => {
    const arr: Line[] = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        left: `${Math.random() * 100}%`,
        delay: `${i * 0.45}s`,
        duration: `${3 + Math.random() * 2}s`,
        opacity: 0.18 + Math.random() * 0.18,
      });
    }
    return arr;
  }, []);

  // ✅ Autoplay safe
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Autoplay bloqué : retry au 1er geste utilisateur
      }
    };

    tryPlay();

    const onFirst = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("click", onFirst);
    };

    window.addEventListener("touchstart", onFirst, { passive: true });
    window.addEventListener("click", onFirst);

    return () => {
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("click", onFirst);
    };
  }, []);

  // ✅ Animations (sans scroll parallax agressif)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.9 })
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.35"
      )
      .fromTo(taglineRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
      .fromTo(descriptionRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
      .fromTo(actionsRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.3")
      .fromTo(scrollIndicatorRef.current, { opacity: 0, y: -10 }, { opacity: 0.85, y: 0, duration: 0.55 }, "-=0.25");

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <section className={styles.heroVideo}>
      {/* Orbs */}
      <div className={styles.glowOrbsContainer} aria-hidden="true">
        {orbs.map((o, i) => (
          <span
            key={i}
            className={styles.glowOrb}
            style={{
              left: o.left,
              top: o.top,
              width: o.size,
              height: o.size,
              opacity: o.opacity,
              animationDelay: o.delay,
              animationDuration: o.duration,
            }}
          />
        ))}
      </div>

      {/* Lines */}
      <div className={styles.animatedLinesContainer} aria-hidden="true">
        {lines.map((l, i) => (
          <span
            key={i}
            className={styles.animatedLine}
            style={{
              left: l.left,
              opacity: l.opacity,
              animationDelay: l.delay,
              animationDuration: l.duration,
            }}
          />
        ))}
      </div>

      {/* ✅ 70% wrapper */}
      <div className={styles.heroInner}>
        <div className={styles.videoFrame}>
          <div className={styles.videoBackground}>
            <video
              ref={videoRef}
              className={styles.videoElement}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* overlay neutre (pas de couleurs) */}
          <div className={styles.videoOverlay} ref={overlayRef} />

          <div className={styles.heroContent} ref={heroContentRef}>
            <h1 className={styles.heroTitle} ref={titleRef}>
              <span className={styles.heroTitleLine}>{t.hero.title}</span>
              <span className={styles.heroTitleLine}>{t.hero.subtitle}</span>
            </h1>

            <div className={styles.heroTagline} ref={taglineRef}>
              {t.hero.tagline}
            </div>

            <p className={styles.heroDescription} ref={descriptionRef}>
              {t.hero.description}
            </p>

            <div className={styles.heroActions} ref={actionsRef}>
              <Link href="/book" className={styles.ctaPrimary}>
                {t.hero.cta1}
              </Link>
              <Link href="/services" className={styles.ctaSecondary}>
                {t.hero.cta2}
              </Link>
            </div>
          </div>

          <div className={styles.scrollIndicator} onClick={scrollToContent} ref={scrollIndicatorRef}>
            <span>Scroll</span>
            <span className={styles.scrollIcon}>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
