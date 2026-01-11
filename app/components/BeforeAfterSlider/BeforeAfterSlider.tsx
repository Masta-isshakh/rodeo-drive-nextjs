'use client';

import { useMemo, useState } from 'react';
import styles from './BeforeAfterSlider.module.css';

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
height?: number | string;
};

export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt, height = 320 }: Props) {
  const [pos, setPos] = useState(56);

  const clip = useMemo(() => {
    return { clipPath: `inset(0 ${100 - pos}% 0 0)` };
  }, [pos]);

  return (
    <div className={styles.wrap} style={{ height }} aria-label={alt}>
      <img className={styles.base} src={beforeSrc} alt={alt} loading="lazy" />
      <img className={styles.top} src={afterSrc} alt={alt} style={clip} loading="lazy" />

      <div className={styles.handle} style={{ left: `${pos}%` }} aria-hidden="true">
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
