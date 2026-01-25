"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./gallery.module.css";
import { useI18n } from "../../lib/i18n";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

export default function GalleryPage() {
  const { language, t } = useI18n();

  const rootRef = useRef<HTMLElement>(null);
  const videoCarouselRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const s3ShowcaseRef = useRef<HTMLElement>(null);

  // --- VIDEO CAROUSEL (3 videos) ---
  const videoItems = useMemo(
    () => [
      {
        id: 1,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/IMG_0395.MOV",
        poster: "/videos/poster-1.jpg", // optional local poster, or use S3 poster
        label: language === "en" ? "PPF Installation" : "تركيب PPF",
      },
      {
        id: 2,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/IMG_1006.MOV",
        poster: "/videos/poster-2.jpg",
        label: language === "en" ? "Detailing & Coating" : "تفصيل وسيراميك",
      },
            {
        id: 3,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/IMG_1098.MOV",
        poster: "/videos/poster-1.jpg", // optional local poster, or use S3 poster
        label: language === "en" ? "PPF Installation" : "تركيب PPF",
      },

    ],
    [language]
  );

  // ✅ S3 Showcase videos (REPLACE with your real S3 URLs)
  const s3Videos = useMemo(
    () => [
      {
        id: 1,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/IMG_1119.MOV",
        poster: "/videos/poster-1.jpg", // optional local poster, or use S3 poster
        label: language === "en" ? "PPF Installation" : "تركيب PPF",
      },
      {
        id: 2,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/IMG_2217.MOV",
        poster: "/videos/poster-2.jpg",
        label: language === "en" ? "Detailing & Coating" : "تفصيل وسيراميك",
      },
            {
        id: 3,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/IMG_9060.MOV",
        poster: "/videos/poster-1.jpg", // optional local poster, or use S3 poster
        label: language === "en" ? "PPF Installation" : "تركيب PPF",
      },
      {
        id: 4,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/IMG_1445.MOV",
        poster: "/videos/poster-2.jpg",
        label: language === "en" ? "Detailing & Coating" : "تفصيل وسيراميك",
      },
    ],
    [language]
  );

  // ✅ Auto-scroll carousel every 3 seconds (ONLY for video carousel)
  useEffect(() => {
    const section = videoCarouselRef.current;
    if (!section) return;

    const track = section.querySelector(`.${styles.videoTrack}`) as HTMLDivElement | null;
    if (!track) return;

    const slides = Array.from(track.querySelectorAll(`.${styles.videoSlide}`)) as HTMLElement[];
    if (!slides.length) return;

    let index = 0;
    let timer: number | null = null;

    const scrollToIndex = (i: number) => {
      const el = slides[i];
      if (!el) return;
      track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
    };

    timer = window.setInterval(() => {
      index = (index + 1) % slides.length;
      scrollToIndex(index);
    }, 3000);

    const onUserInteract = () => {
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(() => {
        index = (index + 1) % slides.length;
        scrollToIndex(index);
      }, 3000);
    };

    track.addEventListener("scroll", onUserInteract, { passive: true });

    return () => {
      if (timer) window.clearInterval(timer);
      track.removeEventListener("scroll", onUserInteract);
    };
  }, [language]);

  // Safe labels (no crash if translation missing)
  const labels = useMemo(() => {
    const gallery = (t as any)?.gallery ?? {};
    const beforeAfter = (t as any)?.beforeAfter ?? {};
    const galleryPage = (t as any)?.galleryPage ?? {};
    const nav = (t as any)?.nav ?? {};
    const cinematic = (t as any)?.cinematicShowcase ?? {};
    const about = (t as any)?.aboutPage ?? {};

    return {
      galleryTitle: safeText(gallery.title, language === "en" ? "Gallery" : "المعرض"),
      gallerySubtitle: safeText(gallery.subtitle, language === "en" ? "Our recent work and transformations" : "أعمالنا والتحولات"),
      carsDetailedLabel: safeText(cinematic.carsDetailedLabel, language === "en" ? "Cars detailed" : "سيارات تم تفصيلها"),
      filterCeramic: safeText(galleryPage.filterCeramic, language === "en" ? "Ceramic projects" : "مشاريع سيراميك"),
      filterProtection: safeText(galleryPage.filterProtection, language === "en" ? "Protection installs" : "تركيبات حماية"),
      satisfaction: safeText(about.stats4Label, language === "en" ? "Satisfaction" : "رضا العملاء"),
      beforeAfterTitle: safeText(beforeAfter.title, language === "en" ? "Before / After" : "قبل / بعد"),
      beforeLabel: safeText(beforeAfter.before, language === "en" ? "Before" : "قبل"),
      afterLabel: safeText(beforeAfter.after, language === "en" ? "After" : "بعد"),
      beforeAfterDesc: safeText(galleryPage.description, language === "en" ? "Real transformations by our team." : "تحولات حقيقية من فريقنا."),

      // ✅ S3 section labels
      s3Title: safeText(galleryPage.s3Title, language === "en" ? "Work Showcase" : "عرض الأعمال"),
      s3Subtitle: safeText(galleryPage.s3Subtitle, language === "en" ? "Real videos from our workshop" : "فيديوهات حقيقية من الورشة"),
      watchFull: safeText(galleryPage.watchFull, language === "en" ? "Watch Full" : "شاهد كامل"),

      ctaTitle: safeText((t as any)?.finalCta?.title, language === "en" ? "Ready to protect your car?" : "جاهز لحماية سيارتك؟"),
      ctaSubtitle: safeText(galleryPage.description, language === "en" ? "Contact us for a tailored quote." : "تواصل معنا للحصول على عرض سعر."),
      bookNow: safeText(nav.bookNow, language === "en" ? "Book Now" : "احجز الآن"),
      videosTitle: safeText(galleryPage.videosTitle, language === "en" ? "Video Gallery" : "معرض الفيديو"),
      videosSubtitle: safeText(galleryPage.videosSubtitle, language === "en" ? "Highlights from our latest work" : "لقطات من أحدث أعمالنا"),
    };
  }, [t, language]);

  const beforeAfterComparisons = useMemo(
    () => [
      {
        id: 1,
        before: "/before.jpg",
        after: "/after.jpg",
        title: language === "en" ? "Color PPF Upgrade" : "ترقية بـ PPF الملون",
        description: language === "en" ? "Full-body color film wrap" : "تغليف كامل بفيلم ملون",
      },
      {
        id: 2,
        before: "/before1.png",
        after: "after1.png",
        title: language === "en" ? "Interior Restoration" : "ترميم الداخلية",
        description: language === "en" ? "Premium leather treatment and deep cleaning" : "عناية جلد + تنظيف عميق",
      },
      {
        id: 3,
        before: "before2.png",
        after: "after2.png",
        title: language === "en" ? "PPF Installation" : "تركيب PPF",
        description: language === "en" ? "Full body PPF with flawless application" : "PPF كامل بتطبيق مثالي",
      },
    ],
    [language]
  );

  // --- Autoplay: attempt play videos in carousel + S3 showcase ---
  useEffect(() => {
    const allVideos = Array.from(document.querySelectorAll("video"));
    if (!allVideos.length) return;

    allVideos.forEach((v) => {
      v.muted = true;
      (v as any).playsInline = true;
      v.loop = true;
      v.preload = "metadata";
    });

    const tryPlayAll = async () => {
      for (const v of allVideos) {
        try {
          await v.play();
        } catch {
          // Autoplay can be blocked; user gesture fallback below
        }
      }
    };

    tryPlayAll();

    const onFirstGesture = () => {
      tryPlayAll();
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
    };

    window.addEventListener("click", onFirstGesture);
    window.addEventListener("touchstart", onFirstGesture, { passive: true });

    return () => {
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
    };
  }, [language]);

  // --- GSAP animations (removed gallery-grid animations; keep others) ---
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      if (videoCarouselRef.current) {
        const slides = videoCarouselRef.current.querySelectorAll(`.${styles.videoSlide}`);
        gsap.fromTo(
          slides,
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: videoCarouselRef.current, start: "top 85%" },
          }
        );
      }

      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(
            heroContent,
            { opacity: 0, y: 80, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.12 }
          );
        }
      }

      if (beforeAfterRef.current) {
        const cards = beforeAfterRef.current.querySelectorAll(`.${styles.comparisonCard}`);
        gsap.fromTo(
          cards,
          { opacity: 0, x: -60, rotateY: -8 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: beforeAfterRef.current, start: "top 75%", toggleActions: "play none none reverse" },
          }
        );
      }

      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll(`.${styles.statNumber}`);
        statNumbers.forEach((node) => {
          const target = Number(node.getAttribute("data-target") || "0");
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              node.textContent = String(Math.round(obj.val));
            },
            scrollTrigger: { trigger: statsRef.current, start: "top 82%", toggleActions: "play none none reverse" },
          });
        });
      }

      // ✅ Animate S3 showcase cards (nice entrance)
      if (s3ShowcaseRef.current) {
        const cards = s3ShowcaseRef.current.querySelectorAll(`.${styles.s3Card}`);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 26, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.10,
            ease: "power2.out",
            scrollTrigger: { trigger: s3ShowcaseRef.current, start: "top 80%" },
          }
        );
      }
    }, rootRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [language]);

  return (
    <main className={styles.galleryPage} ref={rootRef}>
      {/* VIDEO CAROUSEL (under navbar) */}
      <section className={styles.videoCarouselSection} ref={videoCarouselRef} aria-label="Video carousel">
        <div className={styles.videoCarouselHeader}>
          <h2 className={styles.videoCarouselTitle}>{labels.videosTitle}</h2>
          <p className={styles.videoCarouselSubtitle}>{labels.videosSubtitle}</p>
        </div>

        <div className={styles.videoTrack} role="list">
          {videoItems.map((v) => (
            <div className={styles.videoSlide} key={v.id} role="listitem">
              <div className={styles.videoFrame}>
                <video className={styles.video} src={v.src} poster={v.poster} muted playsInline loop preload="metadata" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{labels.galleryTitle}</h1>
          <p className={styles.subtitle}>{labels.gallerySubtitle}</p>

          <div className={styles.heroDecoration}>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="850">0</div>
              <div className={styles.statLabel}>{labels.carsDetailedLabel}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="500">0</div>
              <div className={styles.statLabel}>{labels.filterCeramic}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="300">0</div>
              <div className={styles.statLabel}>{labels.filterProtection}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="98">0</div>
              <div className={styles.statLabel}>{labels.satisfaction} %</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className={styles.beforeAfterSection} ref={beforeAfterRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.beforeAfterTitle}</h2>
          <p className={styles.sectionSubtitle}>{labels.beforeAfterDesc}</p>

          <div className={styles.comparisonsGrid}>
            {beforeAfterComparisons.map((comparison) => (
              <div key={comparison.id} className={styles.comparisonCard}>
                <div className={styles.comparisonImages}>
                  <div className={styles.imageWrapper}>
                    <img src={comparison.before} alt={labels.beforeLabel} className={styles.comparisonImage} />
                    <span className={styles.imageLabel}>{labels.beforeLabel}</span>
                  </div>

                  <div className={styles.divider}>
                    <div className={styles.dividerLine} />
                    <span className={styles.dividerIcon}>→</span>
                    <div className={styles.dividerLine} />
                  </div>

                  <div className={styles.imageWrapper}>
                    <img src={comparison.after} alt={labels.afterLabel} className={styles.comparisonImage} />
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

      {/* ✅ S3 VIDEOS (horizontal frames) */}
      <section className={styles.s3Section} ref={s3ShowcaseRef} aria-label="Work showcase videos">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.s3Title}</h2>
          <p className={styles.sectionSubtitle}>{labels.s3Subtitle}</p>

          <div className={styles.s3Grid}>
            {s3Videos.map((v) => (
              <article key={v.id} className={styles.s3Card}>
                <div className={styles.s3Top}>
                  <span className={styles.s3Pill}>{v.label}</span>

                  <a className={styles.s3Link} href={v.src} target="_blank" rel="noopener noreferrer">
                    {labels.watchFull}
                    <span className={styles.s3Arrow} aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className={styles.s3Frame}>
                  <video
                    className={styles.s3Video}
                    src={v.src}
                    poster={v.poster}
                    muted
                    playsInline
                    loop
                    controls
                    preload="metadata"
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
            <Link href="/contact" className={styles.ctaButton}>
              {labels.bookNow}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
