// components/HeroImage/HeroImageClient.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./HeroImage.module.css";
import { useI18n } from "../../lib/i18n";

type Ids = {
  overlay: string;
  title: string;
  tagline: string;
  desc: string;
  actions: string;
  scroll: string;
};

type Slide = {
  src: string;
  altEN: string;
  altAR: string;
};

function prefersReduced() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HeroImageClient({
  ids,
  slides,
}: {
  ids: Ids;
  slides: Slide[];
}) {
  // ✅ KEEP SAME translation method
  const { language } = useI18n() as any;
  const lang = language === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useMemo(() => prefersReduced(), []);
  const timerRef = useRef<number | null>(null);

  // Auto rotate
  useEffect(() => {
    if (reduce) return;
    if (paused) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, 5200);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, reduce, slides.length]);

  const go = (i: number) => setActive((i + slides.length) % slides.length);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div
      className={styles.inner}
      dir={dir}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* MEDIA */}
      <div className={styles.media}>
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <div
              key={s.src}
              className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                src={s.src}
                alt={lang === "ar" ? s.altAR : s.altEN}
                fill
                priority={i === 0}
                sizes="100vw"
                className={styles.img}
              />
            </div>
          );
        })}

        {/* overlays (CSS will auto-disable on mobile) */}
        <div className={styles.overlay} id={ids.overlay} aria-hidden="true" />
        <div className={styles.edgeVignette} aria-hidden="true" />
      </div>

      {/* ONLY TOP BADGE + BOTTOM CONTROLS */}
      <div className={styles.uiLayer}>
        {/* TOP: kickerBadge only */}
        <div className={styles.topBar}>
          <span className={styles.kickerBadge}>
            {lang === "ar" ? "دوحة • قطر" : "Doha • Qatar"}
          </span>
        </div>

        {/* BOTTOM: controls only */}
        <div className={styles.bottomBar}>
          <div className={styles.controls} aria-label="Hero carousel controls">
            <button
              type="button"
              className={styles.ctrlBtn}
              onClick={() => go(active - 1)}
              aria-label={lang === "ar" ? "السابق" : "Previous"}
            >
              <span aria-hidden="true">←</span>
            </button>

            <div className={styles.dots} role="tablist" aria-label="Slides">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => go(i)}
                  aria-label={(lang === "ar" ? "شريحة " : "Slide ") + (i + 1)}
                  aria-current={i === active ? "true" : "false"}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.ctrlBtn}
              onClick={() => go(active + 1)}
              aria-label={lang === "ar" ? "التالي" : "Next"}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
