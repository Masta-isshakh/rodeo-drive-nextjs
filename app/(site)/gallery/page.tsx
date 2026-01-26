// app/[lang]/gallery/page.tsx
import Link from "next/link";
import styles from "./gallery.module.css";
import GalleryEnhancements from "./GalleryPage";

type Lang = "en" | "ar";

type S3VideoItem = {
  id: number;
  src: string;
  poster?: string;
  label: string;
};

function buildWatchUrl(src: string) {
  return `/watch?src=${encodeURIComponent(src)}`;
}

export default async function GalleryPage({
  params,
}: {
  params: { lang: string };
}) {
  const language: Lang = params.lang === "ar" ? "ar" : "en";

  // If you have server dictionaries, you can replace the labels below
  // with values from your dictionary to keep full i18n parity.

  const labels = {
    galleryTitle: language === "en" ? "Gallery" : "المعرض",
    gallerySubtitle:
      language === "en"
        ? "Our recent work and transformations"
        : "أعمالنا والتحولات",
    carsDetailedLabel: language === "en" ? "Cars detailed" : "سيارات تم تفصيلها",
    filterCeramic: language === "en" ? "Ceramic projects" : "مشاريع سيراميك",
    filterProtection:
      language === "en" ? "Protection installs" : "تركيبات حماية",
    satisfaction: language === "en" ? "Satisfaction" : "رضا العملاء",

    beforeAfterTitle: language === "en" ? "Before / After" : "قبل / بعد",
    beforeLabel: language === "en" ? "Before" : "قبل",
    afterLabel: language === "en" ? "After" : "بعد",
    beforeAfterDesc:
      language === "en" ? "Real transformations by our team." : "تحولات حقيقية من فريقنا.",

    s3Title: language === "en" ? "Work Showcase" : "عرض الأعمال",
    s3Subtitle:
      language === "en" ? "Real videos from our workshop" : "فيديوهات حقيقية من الورشة",
    watchFull: language === "en" ? "Watch Full" : "شاهد كامل",

    ctaTitle:
      language === "en" ? "Ready to protect your car?" : "جاهز لحماية سيارتك؟",
    ctaSubtitle:
      language === "en" ? "Contact us for a tailored quote." : "تواصل معنا للحصول على عرض سعر.",
    bookNow: language === "en" ? "Book Now" : "احجز الآن",

    videosTitle: language === "en" ? "Video Gallery" : "معرض الفيديو",
    videosSubtitle:
      language === "en" ? "Highlights from our latest work" : "لقطات من أحدث أعمالنا",
  };

  const videoItems = [
    {
      id: 1,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image9.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image9-poster.png",
    },
    {
      id: 2,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image8.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image8-poster.png",
    },
    {
      id: 3,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image7.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image7-poster.png",
    },
  ];

  const s3Videos: S3VideoItem[] = [
    {
      id: 1,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image6.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image6-poster.png",
      label: language === "en" ? "PPF Installation" : "تركيب PPF",
    },
    {
      id: 2,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image5.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image5-poster.png",
      label: language === "en" ? "Detailing & Coating" : "تفصيل وسيراميك",
    },
    {
      id: 3,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image4.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image4-poster.png",
      label: language === "en" ? "PPF / Protection" : "PPF / حماية",
    },
    {
      id: 4,
      src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image3.mp4",
      poster:
        "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image3-poster.png",
      label: language === "en" ? "Detailing Results" : "نتائج التفصيل",
    },
  ];

  const beforeAfterComparisons = [
    {
      id: 1,
      before: "/before.avif",
      after: "/after.avif",
      title: language === "en" ? "Color PPF Upgrade" : "ترقية بـ PPF الملون",
      description:
        language === "en" ? "Full-body color film wrap" : "تغليف كامل بفيلم ملون",
    },
    {
      id: 2,
      before: "/before1.avif",
      after: "/after1.avif",
      title: language === "en" ? "Interior Restoration" : "ترميم الداخلية",
      description:
        language === "en"
          ? "Premium leather treatment and deep cleaning"
          : "عناية جلد + تنظيف عميق",
    },
    {
      id: 3,
      before: "/before2.avif",
      after: "/after2.avif",
      title: language === "en" ? "PPF Installation" : "تركيب PPF",
      description:
        language === "en"
          ? "Full body PPF with flawless application"
          : "PPF كامل بتطبيق مثالي",
    },
  ];

  return (
    <main className={styles.galleryPage} data-gallery-root>
      {/* VIDEO CAROUSEL */}
      <section
        className={styles.videoCarouselSection}
        aria-label="Video carousel"
        data-gallery-carousel
      >
        <div className={styles.videoCarouselHeader}>
          <h2 className={styles.videoCarouselTitle}>{labels.videosTitle}</h2>
          <p className={styles.videoCarouselSubtitle}>{labels.videosSubtitle}</p>
        </div>

        <div
          className={styles.videoTrack}
          role="list"
          data-carousel-track
        >
          {videoItems.map((v) => (
            <div
              className={styles.videoSlide}
              key={v.id}
              role="listitem"
              data-carousel-slide
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
          <h1 className={styles.title}>{labels.galleryTitle}</h1>
          <p className={styles.subtitle}>{labels.gallerySubtitle}</p>

          <div className={styles.heroDecoration}>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Stats (render final numbers by default; JS anim is optional) */}
      <section className={styles.statsSection} data-gallery-stats>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="850">850</div>
              <div className={styles.statLabel}>{labels.carsDetailedLabel}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="500">500</div>
              <div className={styles.statLabel}>{labels.filterCeramic}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="300">300</div>
              <div className={styles.statLabel}>{labels.filterProtection}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="98">98</div>
              <div className={styles.statLabel}>{labels.satisfaction} %</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className={styles.beforeAfterSection} data-gallery-beforeafter>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.beforeAfterTitle}</h2>
          <p className={styles.sectionSubtitle}>{labels.beforeAfterDesc}</p>

          <div className={styles.comparisonsGrid}>
            {beforeAfterComparisons.map((comparison) => (
              <div key={comparison.id} className={styles.comparisonCard} data-gallery-card>
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
                  <p className={styles.comparisonDescription}>{comparison.description}</p>
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
          <h2 className={styles.sectionTitle}>{labels.s3Title}</h2>
          <p className={styles.sectionSubtitle}>{labels.s3Subtitle}</p>

          <div className={styles.s3Grid}>
            {s3Videos.map((v) => (
              <article key={v.id} className={styles.s3Card} data-gallery-s3card>
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
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{labels.ctaTitle}</h2>
            <p className={styles.ctaSubtitle}>{labels.ctaSubtitle}</p>

            {/* Reduce prefetch churn if you want */}
            <Link href="/contact" prefetch={false} className={styles.ctaButton}>
              {labels.bookNow}
            </Link>
          </div>
        </div>
      </section>

      {/* Client-only behaviors live here (lazy + reduced motion guards) */}
      <GalleryEnhancements />
    </main>
  );
}
