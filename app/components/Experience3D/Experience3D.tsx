'use client';

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import styles from './Experience3D.module.css';

const CarCanvas = dynamic(() => import('./CarCanva'), { ssr: false });

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

export default function Experience3D() {
  const { t } = useI18n();

  const labels = useMemo(() => {
    const ex = (t as any)?.experience3d ?? {};
    const cars = ex?.cars ?? {};
    return {
      title: safeText(ex.title, '3D Experience'),
      subtitle: safeText(ex.subtitle, 'Explore Every Angle'),
      rotateHint: safeText(ex.rotateHint, 'Drag to rotate'),
      explorePackages: safeText(ex.explorePackages, 'Explore Packages'),
      cars: [
        safeText(cars.car1, 'Car 1'),
        safeText(cars.car2, 'Car 2'),
        safeText(cars.car3, 'Car 3'),
        safeText(cars.car4, 'Car 4'),
      ],
    };
  }, [t]);

  // Mets tes vrais fichiers dans /public
  const models = useMemo(
    () => [
      { name: labels.cars[0], url: '/rollscar.glb' },
      { name: labels.cars[1], url: '/lamborghini1.glb' },
      { name: labels.cars[2], url: '/merce.glb' },
      { name: labels.cars[3], url: '/bmw.glb' },
    ],
    [labels.cars]
  );

  // Autoplay settings
  const AUTOPLAY_MS = 666600;
  const PAUSE_AFTER_INTERACTION_MS = 5000;

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimerRef = useRef<number | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const goTo = (index: number, reason: 'auto' | 'user' = 'user') => {
    const clamped = ((index % models.length) + models.length) % models.length;
    setActive(clamped);

    // scroll horizontal vers la slide
    const track = trackRef.current;
    if (track) {
      const slide = track.querySelector<HTMLElement>(`[data-slide="${clamped}"]`);
      if (slide) {
        slide.scrollIntoView({ behavior: reason === 'auto' ? 'smooth' : 'smooth', inline: 'start', block: 'nearest' });
      }
    }

    // Pause après interaction utilisateur (évite conflits)
    if (reason === 'user') {
      setIsPaused(true);
      if (pauseTimerRef.current) window.clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = window.setTimeout(() => setIsPaused(false), PAUSE_AFTER_INTERACTION_MS);
    }
  };

  // Autoplay loop
  useEffect(() => {
    if (isPaused) return;

    autoplayRef.current = window.setInterval(() => {
      goTo(active + 1, 'auto');
    }, AUTOPLAY_MS);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPaused]);

  // Pause au hover (desktop)
  const onMouseEnter = () => setIsPaused(true);
  const onMouseLeave = () => setIsPaused(false);

  // Sync active index si l’utilisateur scrolle manuellement
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slides = Array.from(track.querySelectorAll<HTMLElement>('[data-slide]'));
        if (!slides.length) return;

        const trackRect = track.getBoundingClientRect();
        const centerX = trackRect.left + trackRect.width / 2;

        let bestIndex = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        slides.forEach((el, idx) => {
          const r = el.getBoundingClientRect();
          const elCenter = r.left + r.width / 2;
          const dist = Math.abs(centerX - elCenter);
          if (dist < bestDist) {
            bestDist = dist;
            bestIndex = idx;
          }
        });

        setActive(bestIndex);
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) window.clearTimeout(pauseTimerRef.current);
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <section className={styles.experienceSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{labels.title}</h2>
        <p className={styles.subtitle}>{labels.subtitle}</p>
      </div>

      {/* Carousel horizontal */}
      <div className={styles.carousel} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={styles.track} ref={trackRef}>
          {models.map((m, i) => (
            <div className={styles.slide} key={m.url} data-slide={i}>
              <div className={styles.canvasWrap}>
                <CarCanvas modelUrl={m.url} enableControls />
              </div>
              <div className={styles.slideCaption}>
                <span className={styles.carName}>{m.name}</span>
                <span className={styles.hint}>
                  <span aria-hidden="true">🔄</span> {labels.rotateHint}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.dots} aria-label="Carousel navigation">
          {models.map((m, i) => (
            <button
              key={m.url}
              type="button"
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => goTo(i, 'user')}
              aria-label={`Go to ${m.name}`}
              aria-pressed={i === active}
            />
          ))}
        </div>
      </div>

      <div className={styles.buttonRow}>
        <button className={styles.exploreButton} type="button">
          {labels.explorePackages}
        </button>
      </div>
    </section>
  );
}
