'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './BeforeAfterSlider.module.css';

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
height?: number | string;
};

export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt, height = 320 }: Props) {
  const [pos, setPos] = useState(56);
  const [isInView, setIsInView] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || isInView) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setIsInView(true);
        io.disconnect();
      },
      { rootMargin: '300px 0px', threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isInView]);

  const clip = useMemo(() => {
    return { clipPath: `inset(0 ${100 - pos}% 0 0)` };
  }, [pos]);

  return (
    <div ref={wrapRef} className={styles.wrap} style={{ height, aspectRatio: 'auto' }} aria-label={alt}>
      {isInView ? (
        <>
          <img className={styles.base} src={beforeSrc} alt={alt} loading="lazy" decoding="async" fetchPriority="low" />
          <img className={`${styles.top} ${styles.clipMask}`} src={afterSrc} alt={alt} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} loading="lazy" decoding="async" fetchPriority="low" />
        </>
      ) : (
        <div className={styles.placeholder} aria-hidden="true" />
      )}

      <div className={styles.handleDynamic} style={{ left: `${pos}%` }} aria-hidden="true">
        <span className={styles.knob} />
      </div>

      <input
        className={styles.range}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before after slider"
      />

      <div className={styles.labels} aria-hidden="true">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}
