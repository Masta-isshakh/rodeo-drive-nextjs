// components/HeroImage/HeroImage.tsx
import styles from "./HeroImage.module.css";
import HeroImageClient from "./HeroImageClient";

type Slide = {
  src: string;
  altEN: string;
  altAR: string;
};

export default function HeroImage() {
  // ✅ server-known static slide list (SEO-friendly, stable)
  const slides: Slide[] = [
    {
      src: "/front-ppff.avif",
      altEN: "Luxury car detailing and protection in Doha",
      altAR: "تفصيل وحماية سيارات فاخرة في الدوحة",
    },
    {
      src: "/home-bg.avif",
      altEN: "Paint Protection Film (PPF) installation in Doha",
      altAR: "تركيب حماية الطلاء PPF في الدوحة",
    },
    {
      src: "/nano.avif",
      altEN: "Ceramic coating and premium finish in Qatar",
      altAR: "سيراميك وتشطيب فاخر في قطر",
    },
  ];

  const ids = {
    root: "hero-root",
    overlay: "hero-overlay",
    title: "hero-title",
    tagline: "hero-tagline",
    desc: "hero-desc",
    actions: "hero-actions",
    scroll: "hero-scroll",
  } as const;

  return (
    <section className={styles.hero} id={ids.root} aria-label="Rodeo Drive Hero">
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />
      <HeroImageClient ids={ids} slides={slides} />
    </section>
  );
}
