'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './GraphicalElements.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function GraphicalElements() {
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate circles with enhanced scroll effects
    circleRefs.current.forEach((circle, index) => {
      if (circle) {
        // Rotation and scale on scroll
        gsap.to(circle, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          },
          rotation: 360 * (index + 2),
          scale: 1.5,
          ease: 'none',
        });

        // Parallax movement
        gsap.to(circle, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
          y: index % 2 === 0 ? -200 : 200,
          x: index % 2 === 0 ? 100 : -100,
          ease: 'none',
        });
      }
    });

    // Animate lines with enhanced effects
    lineRefs.current.forEach((line, index) => {
      if (line) {
        gsap.to(line, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
          x: index % 2 === 0 ? 150 : -150,
          y: index % 2 === 0 ? -100 : 100,
          rotation: index % 2 === 0 ? 45 : -45,
          opacity: 0.9,
          ease: 'none',
        });
      }
    });

    // Animate dots grid with wave effect
    if (dotsGridRef.current) {
      const dots = dotsGridRef.current.querySelectorAll(`.${styles.dot}`);
      
      dots.forEach((dot, index) => {
        gsap.to(dot, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          },
          y: Math.sin(index * 0.5) * 30,
          opacity: 0.6,
          scale: 1 + Math.sin(index * 0.3) * 0.3,
          ease: 'none',
        });
      });
    }
  }, []);

  return (
    <div className={styles.graphicalElements}>
      {/* Animated Circles */}
      <div
        className={`${styles.circle} ${styles.circle1}`}
        ref={(el) => { circleRefs.current[0] = el; }}
      />
      <div
        className={`${styles.circle} ${styles.circle2}`}
        ref={(el) => { circleRefs.current[1] = el; }}
      />
      <div
        className={`${styles.circle} ${styles.circle3}`}
        ref={(el) => { circleRefs.current[2] = el; }}
      />

      {/* Animated Lines */}
      <div
        className={`${styles.line} ${styles.line1}`}
        ref={(el) => { lineRefs.current[0] = el; }}
      />
      <div
        className={`${styles.line} ${styles.line2}`}
        ref={(el) => { lineRefs.current[1] = el; }}
      />

      {/* Animated Dots Grid */}
      <div className={styles.dotsGrid} ref={dotsGridRef}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>
    </div>
  );
}