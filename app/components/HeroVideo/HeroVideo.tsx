"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroVideo.module.css";
import { useI18n } from "../../lib/i18n";
import Link from "next/link";

type Orb = {
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
};
type Line = { left: string; delay: string; duration: string; opacity: number };

function useMotionFlags() {
  const reduceRef = useRef(false);
  const liteRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileOrCoarse =
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    reduceRef.current = rm.matches;
    liteRef.current = mobileOrCoarse;

    const onChange = () => {
      reduceRef.current = rm.matches;
    };

    // Support older browsers too
    if (typeof rm.addEventListener === "function") rm.addEventListener("change", onChange);
    else rm.addListener(onChange);

    return () => {
      if (typeof rm.removeEventListener === "function") rm.removeEventListener("change", onChange);
      else rm.removeListener(onChange);
    };
  }, []);

  return { reduceRef, liteRef };
}

export default function HeroVideo() {
  const { t, language } = useI18n() as any;
  const dir = language === "ar" ? "rtl" : "ltr";

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { reduceRef, liteRef } = useMotionFlags();

  // ✅ Orbs / lines generated once (no DOM appendChild)
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

  // ✅ Autoplay safe + pause on hidden tab (performance)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Autoplay blocked: will retry on first user gesture
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

    const onVis = () => {
      if (!videoRef.current) return;
      if (document.visibilityState === "hidden") {
        try {
          videoRef.current.pause();
        } catch {}
      } else {
        // Only resume if we are allowed to animate/play
        tryPlay();
      }
    };

    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("click", onFirst);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // ✅ Step-4: GSAP timeline only on desktop + not reduced motion
  useEffect(() => {
    const prefersReduced = reduceRef.current;
    const liteMode = liteRef.current; // mobile/coarse pointer

    // If user prefers reduced motion OR on mobile: no GSAP timeline
    if (prefersReduced || liteMode) {
      // Ensure everything is visible (no "stuck hidden" state)
      if (overlayRef.current) gsap.set(overlayRef.current, { opacity: 1, clearProps: "transform" });
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0, clearProps: "transform" });
      if (taglineRef.current) gsap.set(taglineRef.current, { opacity: 1, y: 0, clearProps: "transform" });
      if (descriptionRef.current) gsap.set(descriptionRef.current, { opacity: 1, y: 0, clearProps: "transform" });
      if (actionsRef.current) gsap.set(actionsRef.current, { opacity: 1, y: 0, clearProps: "transform" });
      if (scrollIndicatorRef.current)
        gsap.set(scrollIndicatorRef.current, { opacity: 0.85, y: 0, clearProps: "transform" });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.9 })
      .fromTo(titleRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.35")
      .fromTo(taglineRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.35"
      )
      .fromTo(actionsRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.3")
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 0.85, y: 0, duration: 0.55 },
        "-=0.25"
      );

    return () => {
      tl.kill();
      // Reset props to avoid SSR/route back issues
      if (overlayRef.current) gsap.set(overlayRef.current, { clearProps: "opacity,transform" });
      if (titleRef.current) gsap.set(titleRef.current, { clearProps: "opacity,transform" });
      if (taglineRef.current) gsap.set(taglineRef.current, { clearProps: "opacity,transform" });
      if (descriptionRef.current) gsap.set(descriptionRef.current, { clearProps: "opacity,transform" });
      if (actionsRef.current) gsap.set(actionsRef.current, { clearProps: "opacity,transform" });
      if (scrollIndicatorRef.current) gsap.set(scrollIndicatorRef.current, { clearProps: "opacity,transform" });
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  // Step-4: add a class that disables orb/line CSS animations on mobile/reduced motion
  const motionClass =
    (typeof window !== "undefined" &&
      window.matchMedia &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(max-width: 768px)").matches ||
        window.matchMedia("(pointer: coarse)").matches))
      ? styles.motionLite
      : styles.motionFull;

  return (
    <section className={`${styles.heroVideo} ${motionClass}`} dir={dir}>
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
              <source
                src="https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image10.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* overlay neutre */}
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

          <div
            className={styles.scrollIndicator}
            onClick={scrollToContent}
            ref={scrollIndicatorRef}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") scrollToContent();
            }}
          >
            <span>Scroll</span>
            <span className={styles.scrollIcon}>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
