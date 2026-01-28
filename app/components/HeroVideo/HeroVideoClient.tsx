"use client";

import styles from "./HeroVideo.module.css";
import Link from "next/link";
import { useI18n } from "../../lib/i18n";

type Ids = {
  title: string;
  tagline: string;
  desc: string;
  actions: string;
  scroll: string;
};

export default function HeroVideoContent({ ids }: { ids: Ids }) {
  const { t, language } = useI18n() as any;
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <div className={styles.heroContent} dir={dir}>
        <h1 className={styles.heroTitle} id={ids.title}>
          <span className={styles.heroTitleLine}>{t.hero.title}</span>
          <span className={styles.heroTitleLine}>{t.hero.subtitle}</span>
        </h1>

        <div className={styles.heroTagline} id={ids.tagline}>
          {t.hero.tagline}
        </div>

        <p className={styles.heroDescription} id={ids.desc}>
          {t.hero.description}
        </p>

        <div className={styles.heroActions} id={ids.actions}>
          <Link href="/book" className={styles.ctaPrimary}>
            {t.hero.cta1}
          </Link>
          <Link href="/services" className={styles.ctaSecondary}>
            {t.hero.cta2}
          </Link>
        </div>
      </div>

      {/* keep same UX, but no JS needed */}
      <a className={styles.scrollIndicator} href="#after-hero" id={ids.scroll}>
        <span>Scroll</span>
        <span className={styles.scrollIcon}>↓</span>
      </a>
    </>
  );
}
