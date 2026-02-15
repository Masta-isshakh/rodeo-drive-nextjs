// app/[lang]/gallery/GalleryClient.tsx
"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./gallery.module.css";
import { useI18n } from "@/app/lib/i18n";

type Lang = "en" | "ar";

type VideoItem = {
  id: number;
  src: string;
  poster?: string;
};

type S3VideoItemBase = {
  id: number;
  src: string;
  poster?: string;
  key: "ppf_install" | "detailing_coating" | "ppf_protection" | "detailing_results";
  labelEn: string;
  labelAr: string;
};

type BeforeAfterBase = {
  id: number;
  before: string;
  after: string;
  key: "color_ppf" | "interior_restoration" | "ppf_installation";
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
};

type Props = {
  initialLang: Lang;
  videoItems: VideoItem[];
  s3Videos: S3VideoItemBase[];
  beforeAfterComparisons: BeforeAfterBase[];
  stats: { cars: number; ceramic: number; protection: number; satisfaction: number };
};

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function buildWatchUrl(lang: "en" | "ar", src: string) {
    return `/${lang}/watch?src=${encodeURIComponent(src)}`;
}

// Client-only behaviors (lazy + GSAP code-split)
const GalleryEnhancements = dynamic(() => import("./GalleryEnhancement"), {
  ssr: false,
  loading: () => null,
});

export default function GalleryClient({
  initialLang,
  videoItems,
  s3Videos,
  beforeAfterComparisons,
  stats,
}: Props) {
  const i18n = useI18n() as any;
  const t = i18n?.t;

  const [runtimeLang, setRuntimeLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const fromI18n =
      i18n?.lang ??
      i18n?.locale ??
      i18n?.language ??
      i18n?.currentLang ??
      "";

    const fromHtml =
      typeof document !== "undefined" ? document.documentElement.lang : "";

    const guess = String(fromI18n || fromHtml || initialLang).toLowerCase();
    setRuntimeLang(guess.startsWith("ar") ? "ar" : "en");
  }, [t, i18n?.lang, i18n?.locale, i18n?.language, i18n?.dir, initialLang]);

  const lang: Lang = runtimeLang;
  const dir = lang === "ar" ? "rtl" : "ltr";

  // Support multiple dictionary shapes
  const galleryT = useMemo(() => {
    return (
      (t as any)?.gallery ??
      (t as any)?.galleryPage ??
      (t as any)?.pages?.gallery ??
      {}
    );
  }, [t]);

  const labels = useMemo(() => {
    const isAr = lang === "ar";

    // Optional nested groups:
    const heroT = galleryT?.hero ?? {};
    const statsT = galleryT?.stats ?? {};
    const baT = galleryT?.beforeAfter ?? {};
    const s3T = galleryT?.s3 ?? {};
    const carouselT = galleryT?.carousel ?? {};
    const ctaT = galleryT?.cta ?? {};

    return {
      // Carousel
      videosTitle: safeText(
        carouselT?.videosTitle ?? galleryT?.videosTitle,
        isAr ? "معرض الفيديو" : "Video Gallery"
      ),
      videosSubtitle: safeText(
        carouselT?.videosSubtitle ?? galleryT?.videosSubtitle,
        isAr ? "لقطات من أحدث أعمالنا" : "Highlights from our latest work"
      ),

      // Hero
      galleryTitle: safeText(
        heroT?.title ?? galleryT?.galleryTitle,
        isAr ? "المعرض" : "Gallery"
      ),
      gallerySubtitle: safeText(
        heroT?.subtitle ?? galleryT?.gallerySubtitle,
        isAr ? "أعمالنا والتحولات" : "Our recent work and transformations"
      ),

      // Stats labels
      carsDetailedLabel: safeText(
        statsT?.carsDetailedLabel ?? galleryT?.carsDetailedLabel,
        isAr ? "سيارات تم تفصيلها" : "Cars detailed"
      ),
      filterCeramic: safeText(
        statsT?.filterCeramic ?? galleryT?.filterCeramic,
        isAr ? "مشاريع سيراميك" : "Ceramic projects"
      ),
      filterProtection: safeText(
        statsT?.filterProtection ?? galleryT?.filterProtection,
        isAr ? "تركيبات حماية" : "Protection installs"
      ),
      satisfaction: safeText(
        statsT?.satisfaction ?? galleryT?.satisfaction,
        isAr ? "رضا العملاء" : "Satisfaction"
      ),

      // Before/After
      beforeAfterTitle: safeText(
        baT?.title ?? galleryT?.beforeAfterTitle,
        isAr ? "قبل / بعد" : "Before / After"
      ),
      beforeLabel: safeText(
        baT?.beforeLabel ?? galleryT?.beforeLabel,
        isAr ? "قبل" : "Before"
      ),
      afterLabel: safeText(
        baT?.afterLabel ?? galleryT?.afterLabel,
        isAr ? "بعد" : "After"
      ),
      beforeAfterDesc: safeText(
        baT?.desc ?? galleryT?.beforeAfterDesc,
        isAr ? "تحولات حقيقية من فريقنا." : "Real transformations by our team."
      ),

      // S3
      s3Title: safeText(
        s3T?.title ?? galleryT?.s3Title,
        isAr ? "عرض الأعمال" : "Work Showcase"
      ),
      s3Subtitle: safeText(
        s3T?.subtitle ?? galleryT?.s3Subtitle,
        isAr ? "فيديوهات حقيقية من الورشة" : "Real videos from our workshop"
      ),
      watchFull: safeText(
        s3T?.watchFull ?? galleryT?.watchFull,
        isAr ? "شاهد كامل" : "Watch Full"
      ),

      // CTA
      ctaTitle: safeText(
        ctaT?.title ?? galleryT?.ctaTitle,
        isAr ? "جاهز لحماية سيارتك؟" : "Ready to protect your car?"
      ),
      ctaSubtitle: safeText(
        ctaT?.subtitle ?? galleryT?.ctaSubtitle,
        isAr ? "تواصل معنا للحصول على عرض سعر." : "Contact us for a tailored quote."
      ),
      bookNow: safeText(
        ctaT?.bookNow ?? galleryT?.bookNow,
        isAr ? "احجز الآن" : "Book Now"
      ),
    };
  }, [galleryT, lang]);

  // Translate S3 pills + Before/After titles/descriptions in client so they react to lang toggle
  const localizedS3 = useMemo(() => {
    const isAr = lang === "ar";

    // Optional translation dictionaries:
    const s3LabelsDict = galleryT?.s3Labels ?? galleryT?.labels?.s3 ?? {};

    return s3Videos.map((v) => {
      const fallback = isAr ? v.labelAr : v.labelEn;
      const override = safeText(s3LabelsDict?.[v.key], "");
      return { ...v, label: override || fallback };
    });
  }, [s3Videos, galleryT, lang]);

  const localizedBA = useMemo(() => {
    const isAr = lang === "ar";

    const itemsDict = galleryT?.beforeAfter?.items ?? galleryT?.beforeAfterItems ?? {};
    // If you store by key: itemsDict[color_ppf] = { title, desc }
    return beforeAfterComparisons.map((c) => {
      const fallbackTitle = isAr ? c.titleAr : c.titleEn;
      const fallbackDesc = isAr ? c.descAr : c.descEn;

      const item = itemsDict?.[c.key] ?? null;
      const title = safeText(item?.title, fallbackTitle);
      const description = safeText(item?.description ?? item?.desc, fallbackDesc);

      return { ...c, title, description };
    });
  }, [beforeAfterComparisons, galleryT, lang]);

  // Localize /contact link to /[lang]/contact
  const pathname = usePathname();
  const contactHref = useMemo(() => {
    const clean = (pathname || "").split("?")[0];
    const parts = clean.split("/").filter(Boolean);
    if (parts.length && (parts[0] === "en" || parts[0] === "ar")) return `/${lang}/contact`;
    return "/contact";
  }, [pathname, lang]);

  // Motion / enhancements should re-init when lang changes
  const motionKey = `${lang}|gallery`;

  return (
    <main
      className={styles.galleryPage}
      data-gallery-root
      dir={dir}
      lang={lang}
      key={lang}
    >
      {/* VIDEO CAROUSEL */}
      <section
        className={styles.videoCarouselSection}
        aria-label="Video carousel"
        data-gallery-carousel
      >
        <div className={styles.videoCarouselHeader} data-gallery-animate>
          <h2 className={styles.videoCarouselTitle}>{labels.videosTitle}</h2>
          <p className={styles.videoCarouselSubtitle}>{labels.videosSubtitle}</p>
        </div>

        <div className={styles.videoTrack} role="list" data-carousel-track>
          {videoItems.map((v) => (
            <div
              className={styles.videoSlide}
              key={v.id}
              role="listitem"
              data-carousel-slide
              data-gallery-card
            >
              <div className={styles.videoFrame}>
                <video
                  data-gallery-video
                  className={styles.video}
                  src={v.src}
                  poster={v.poster}
                  muted
                  playsInline
                  loop
                  preload="none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero */}
      <section className={styles.hero} data-gallery-hero>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent} data-gallery-hero-content>
          <h1 className={styles.title} data-gallery-animate>
            {labels.galleryTitle}
          </h1>
          <p className={styles.subtitle} data-gallery-animate>
            {labels.gallerySubtitle}
          </p>

          <div className={styles.heroDecoration} data-gallery-animate>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection} data-gallery-stats>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard} data-gallery-card>
              <div className={styles.statNumber} data-target={stats.cars}>
                {stats.cars}
              </div>
              <div className={styles.statLabel}>{labels.carsDetailedLabel}</div>
            </div>
            <div className={styles.statCard} data-gallery-card>
              <div className={styles.statNumber} data-target={stats.ceramic}>
                {stats.ceramic}
              </div>
              <div className={styles.statLabel}>{labels.filterCeramic}</div>
            </div>
            <div className={styles.statCard} data-gallery-card>
              <div className={styles.statNumber} data-target={stats.protection}>
                {stats.protection}
              </div>
              <div className={styles.statLabel}>{labels.filterProtection}</div>
            </div>
            <div className={styles.statCard} data-gallery-card>
              <div className={styles.statNumber} data-target={stats.satisfaction}>
                {stats.satisfaction}
              </div>
              <div className={styles.statLabel}>{labels.satisfaction} %</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className={styles.beforeAfterSection} data-gallery-beforeafter>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-gallery-animate>
            {labels.beforeAfterTitle}
          </h2>
          <p className={styles.sectionSubtitle} data-gallery-animate>
            {labels.beforeAfterDesc}
          </p>

          <div className={styles.comparisonsGrid}>
            {localizedBA.map((comparison) => (
              <div
                key={comparison.id}
                className={styles.comparisonCard}
                data-gallery-card
              >
                <div className={styles.comparisonImages}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={comparison.before}
                      alt={labels.beforeLabel}
                      className={styles.comparisonImage}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className={styles.imageLabel}>{labels.beforeLabel}</span>
                  </div>

                  <div className={styles.divider}>
                    <div className={styles.dividerLine} />
                    <span className={styles.dividerIcon}>→</span>
                    <div className={styles.dividerLine} />
                  </div>

                  <div className={styles.imageWrapper}>
                    <img
                      src={comparison.after}
                      alt={labels.afterLabel}
                      className={styles.comparisonImage}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className={styles.imageLabel}>{labels.afterLabel}</span>
                  </div>
                </div>

                <div className={styles.comparisonInfo}>
                  <h3 className={styles.comparisonTitle}>{comparison.title}</h3>
                  <p className={styles.comparisonDescription}>
                    {comparison.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3 VIDEOS */}
      <section
        className={styles.s3Section}
        aria-label="Work showcase videos"
        data-gallery-s3
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-gallery-animate>
            {labels.s3Title}
          </h2>
          <p className={styles.sectionSubtitle} data-gallery-animate>
            {labels.s3Subtitle}
          </p>

          <div className={styles.s3Grid}>
            {localizedS3.map((v) => (
              <article
                key={v.id}
                className={styles.s3Card}
                data-gallery-s3card
                data-gallery-card
              >
                <div className={styles.s3Top}>
                  <span className={styles.s3Pill}>{v.label}</span>

                  <a
                    className={styles.s3Link}
                    href={buildWatchUrl(v.src)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {labels.watchFull} <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className={styles.s3Frame}>
                  <video
                    data-gallery-video
                    className={styles.s3Video}
                    src={v.src}
                    poster={v.poster}
                    muted
                    playsInline
                    loop
                    preload="none"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} data-gallery-cta>
        <div className={styles.container}>
          <div className={styles.ctaContent} data-gallery-animate>
            <h2 className={styles.ctaTitle}>{labels.ctaTitle}</h2>
            <p className={styles.ctaSubtitle}>{labels.ctaSubtitle}</p>

            <Link href={contactHref} prefetch={false} className={styles.ctaButton}>
              {labels.bookNow}
            </Link>
          </div>
        </div>
      </section>

      {/* Client-only behaviors (lazy + reduced motion guards) */}
      <GalleryEnhancements motionKey={motionKey} />
    </main>
  );
}
