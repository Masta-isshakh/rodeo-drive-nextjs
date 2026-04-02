'use client';
import { useEffect, useRef } from 'react';
import styles from './GraphicalElements.module.css';

// GSAP is now imported dynamically and deferred via requestIdleCallback so it
// never blocks hydration or the first paint. Dots cut from 50 → 12 to reduce
// DOM size. Combined rotation+parallax into a single ScrollTrigger per element
// (was 2 per element = 110 triggers; now ≤10 total).
export default function GraphicalElements() {
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let cancelled = false;

    const run = () => {
      if (cancelled) return;

      Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
        ([gsapMod, stMod]) => {
          if (cancelled) return;

          const gsap = (gsapMod as any).gsap ?? gsapMod.default ?? gsapMod;
          const ScrollTrigger =
            (stMod as any).ScrollTrigger ?? stMod.default ?? stMod;
          gsap.registerPlugin(ScrollTrigger);

          const sharedTrigger = {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          };

          // One combined tween per circle (was two)
          circleRefs.current.forEach((circle, i) => {
            if (!circle) return;
            gsap.to(circle, {
              scrollTrigger: sharedTrigger,
              y: i % 2 === 0 ? -120 : 120,
              rotation: 180 * (i + 1),
              ease: 'none',
            });
          });

          // One tween per line
          lineRefs.current.forEach((line, i) => {
            if (!line) return;
            gsap.to(line, {
              scrollTrigger: { ...sharedTrigger, scrub: 1.5 },
              x: i % 2 === 0 ? 80 : -80,
              ease: 'none',
            });
          });
        }
      );
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run, { timeout: 2500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    // Fallback for Safari (no requestIdleCallback)
    const timer = setTimeout(run, 1500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.graphicalElements} aria-hidden="true">
      <div className={`${styles.circle} ${styles.circle1}`} ref={(el) => { circleRefs.current[0] = el; }} />
      <div className={`${styles.circle} ${styles.circle2}`} ref={(el) => { circleRefs.current[1] = el; }} />
      <div className={`${styles.circle} ${styles.circle3}`} ref={(el) => { circleRefs.current[2] = el; }} />
      <div className={`${styles.line} ${styles.line1}`}   ref={(el) => { lineRefs.current[0] = el; }} />
      <div className={`${styles.line} ${styles.line2}`}   ref={(el) => { lineRefs.current[1] = el; }} />
      {/* 12 dots instead of 50 — keeps the visual texture, reduces DOM size */}
      <div className={styles.dotsGrid}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>
    </div>
  );
}