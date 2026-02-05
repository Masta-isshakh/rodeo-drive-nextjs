// components/HeroVideo/HeroVideo.tsx
import styles from "./HeroVideo.module.css";
import HeroVideoContent from "./HeroVideoClient";
import HeroVideoEnhance from "./HeroVideoEnhance";

type Orb = {
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
};
type Line = { left: string; delay: string; duration: string; opacity: number };

// deterministic RNG so output is stable
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildOrbs(seed = 1337): Orb[] {
  const rand = mulberry32(seed);
  const arr: Orb[] = [];
  for (let i = 0; i < 5; i++) {
    const size = 220 + rand() * 160;
    arr.push({
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      delay: `${i * 1.4}s`,
      duration: `${10 + i * 2}s`,
      size,
      opacity: 0.18 + rand() * 0.12,
    });
  }
  return arr;
}

function buildLines(seed = 4242): Line[] {
  const rand = mulberry32(seed);
  const arr: Line[] = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      left: `${rand() * 100}%`,
      delay: `${i * 0.45}s`,
      duration: `${3 + rand() * 2}s`,
      opacity: 0.18 + rand() * 0.18,
    });
  }
  return arr;
}

export default function HeroVideo() {
  const orbs = buildOrbs();
  const lines = buildLines();

  // IMPORTANT: replace with your real URL (CloudFront recommended)
  const VIDEO_URL =
    "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image10.mp4";

  // IDs so client enhancer can target DOM
  const ids = {
    root: "hero-root",
    video: "hero-video",
    overlay: "hero-overlay",
    title: "hero-title",
    tagline: "hero-tagline",
    desc: "hero-desc",
    actions: "hero-actions",
    scroll: "hero-scroll",
  } as const;

  return (
    <section className={styles.heroVideo} id={ids.root}>
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

      <div className={styles.heroInner}>
        <div className={styles.videoFrame}>
          <div className={styles.videoBackground}>
            <video
              id={ids.video}
              className={styles.videoElement}
              muted
              loop
              playsInline
              preload="none"
              poster="/hero-poster.avif"
              // we DON'T set <source> here (prevents big download on first paint)
              data-src={VIDEO_URL}
            />
          </div>

          <div className={styles.videoOverlay} id={ids.overlay} />

          {/* Text (client for translations) */}
          <HeroVideoContent ids={ids} />

          {/* Behavior (client): loads video intelligently + GSAP */}
          <HeroVideoEnhance ids={ids} />
        </div>
      </div>
    </section>
  );
}
