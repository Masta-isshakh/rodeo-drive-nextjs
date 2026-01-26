"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./gallery.module.css";
import { useI18n } from "../../lib/i18n";
import Link from "next/link";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

type S3VideoItem = {
  id: number;
  src: string;
  poster?: string;
  label: string;
};

function buildWatchUrl(src: string) {
  return `/watch?src=${encodeURIComponent(src)}`;
}

export default function GalleryPage() {
  const { language, t } = useI18n();

  const rootRef = useRef<HTMLElement>(null);
  const videoCarouselRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const s3ShowcaseRef = useRef<HTMLElement>(null);

  // --- VIDEO CAROUSEL ---
  const videoItems = useMemo(
    () => [
      {
        id: 1,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image9.mp4",
        poster: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image9-poster.png",
      },
      {
        id: 2,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image8.mp4",
        poster: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image8-poster.png",
      },
      {
        id: 3,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image7.mp4",
        poster: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image7-poster.png",
      },
    ],
    []
  );

  // ✅ S3 Showcase videos
  const s3Videos: S3VideoItem[] = useMemo(
    () => [
      {
        id: 1,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image6.mp4",
        poster: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image6-poster.png",
        label: language === "en" ? "PPF Installation" : "تركيب PPF",
      },
      {
        id: 2,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image5.mp4",
        poster: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image5-poster.png",
        label: language === "en" ? "Detailing & Coating" : "تفصيل وسيراميك",
      },
      {
        id: 3,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image4.mp4",
        poster: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image4-poster.png",
        label: language === "en" ? "PPF / Protection" : "PPF / حماية",
      },
      {
        id: 4,
        src: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image3.mp4",
        poster: "https://mastatiktok.s3.us-east-1.amazonaws.com/videos/image3-poster.png",
        label: language === "en" ? "Detailing Results" : "نتائج التفصيل",
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

  // Safe labels
  const labels = useMemo(() => {
    const gallery = (t as any)?.gallery ?? {};
    const beforeAfter = (t as any)?.beforeAfter ?? {};
    const galleryPage = (t as any)?.galleryPage ?? {};
    const nav = (t as any)?.nav ?? {};
    const cinematic = (t as any)?.cinematicShowcase ?? {};
    const about = (t as any)?.aboutPage ?? {};

    return {
      galleryTitle: safeText(gallery.title, language === "en" ? "Gallery" : "المعرض"),
      gallerySubtitle: safeText(
        gallery.subtitle,
        language === "en" ? "Our recent work and transformations" : "أعمالنا والتحولات"
      ),
      carsDetailedLabel: safeText(cinematic.carsDetailedLabel, language === "en" ? "Cars detailed" : "سيارات تم تفصيلها"),
      filterCeramic: safeText(galleryPage.filterCeramic, language === "en" ? "Ceramic projects" : "مشاريع سيراميك"),
      filterProtection: safeText(galleryPage.filterProtection, language === "en" ? "Protection installs" : "تركيبات حماية"),
      satisfaction: safeText(about.stats4Label, language === "en" ? "Satisfaction" : "رضا العملاء"),
      beforeAfterTitle: safeText(beforeAfter.title, language === "en" ? "Before / After" : "قبل / بعد"),
      beforeLabel: safeText(beforeAfter.before, language === "en" ? "Before" : "قبل"),
      afterLabel: safeText(beforeAfter.after, language === "en" ? "After" : "بعد"),
      beforeAfterDesc: safeText(
        galleryPage.description,
        language === "en" ? "Real transformations by our team." : "تحولات حقيقية من فريقنا."
      ),

      s3Title: safeText(galleryPage.s3Title, language === "en" ? "Work Showcase" : "عرض الأعمال"),
      s3Subtitle: safeText(galleryPage.s3Subtitle, language === "en" ? "Real videos from our workshop" : "فيديوهات حقيقية من الورشة"),
      watchFull: safeText(galleryPage.watchFull, language === "en" ? "Watch Full" : "شاهد كامل"),

      ctaTitle: safeText((t as any)?.finalCta?.title, language === "en" ? "Ready to protect your car?" : "جاهز لحماية سيارتك؟"),
      ctaSubtitle: safeText(
        galleryPage.description,
        language === "en" ? "Contact us for a tailored quote." : "تواصل معنا للحصول على عرض سعر."
      ),
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
        after: "/after1.png",
        title: language === "en" ? "Interior Restoration" : "ترميم الداخلية",
        description: language === "en" ? "Premium leather treatment and deep cleaning" : "عناية جلد + تنظيف عميق",
      },
      {
        id: 3,
        before: "/before2.png",
        after: "/after2.png",
        title: language === "en" ? "PPF Installation" : "تركيب PPF",
        description: language === "en" ? "Full body PPF with flawless application" : "PPF كامل بتطبيق مثالي",
      },
    ],
    [language]
  );

  // ✅ Step 3: Play only when visible (scope to gallery videos only)
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video[data-gallery-video]"));
    if (!videos.length) return;

    const shouldPlay = new Set<HTMLVideoElement>();

    for (const v of videos) {
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      (v as any).playsInline = true;
      v.preload = "none";
      v.controls = false;

      try {
        v.pause();
      } catch {
        // ignore
      }
    }

    // allow only the first one to fetch metadata earlier (optional)
    if (videos[0]) videos[0].preload = "metadata";

    const safePlay = async (v: HTMLVideoElement) => {
      if (v.preload === "none") {
        v.preload = "metadata";
        try {
          v.load();
        } catch {}
      }
      try {
        if (!shouldPlay.has(v)) return;
        await v.play();
      } catch {}
    };

    const safePause = (v: HTMLVideoElement) => {
      try {
        v.pause();
      } catch {}
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target as HTMLVideoElement;
          const visibleEnough = entry.isIntersecting && entry.intersectionRatio >= 0.4;

          if (visibleEnough) {
            shouldPlay.add(v);
            void safePlay(v);
          } else {
            shouldPlay.delete(v);
            safePause(v);
          }
        }
      },
      {
        root: null,
        rootMargin: "200px 0px 200px 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8],
      }
    );

    for (const v of videos) observer.observe(v);

    const onFirstGesture = () => {
      shouldPlay.forEach((v) => void safePlay(v));
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
    };

    window.addEventListener("click", onFirstGesture);
    window.addEventListener("touchstart", onFirstGesture, { passive: true });

    return () => {
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
      observer.disconnect();

      for (const v of videos) {
        shouldPlay.delete(v);
        safePause(v);
      }
    };
  }, [language]);

  // ✅ Step 4: GSAP/ScrollTrigger optimized (dynamic import + reduced motion + mobile guard)
  useEffect(() => {
    if (!rootRef.current) return;

    let cancelled = false;
    let ctx: any = null;
    let ScrollTriggerRef: any = null;

    const prefersReducedMotion = () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile = () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 768px)").matches;

    const setStatsInstant = () => {
      if (!statsRef.current) return;
      const statNumbers = statsRef.current.querySelectorAll(`.${styles.statNumber}`);
      statNumbers.forEach((node) => {
        const target = node.getAttribute("data-target") || "0";
        node.textContent = target;
      });
    };

    const scheduleIdle = (fn: () => void) => {
      const w = window as any;
      if (typeof w.requestIdleCallback === "function") {
        return w.requestIdleCallback(fn, { timeout: 1500 });
      }
      return window.setTimeout(fn, 250);
    };

    const cleanup = () => {
      try {
        ctx?.revert?.();
      } catch {}

      try {
        if (ScrollTriggerRef?.getAll) {
          ScrollTriggerRef.getAll().forEach((st: any) => st.kill());
        }
      } catch {}
    };

    const run = async () => {
      // Respect reduced motion: skip heavy animations entirely.
      // (Your elements should still render normally via CSS.)
      if (prefersReducedMotion()) {
        setStatsInstant();
        return;
      }

      // Defer GSAP load to reduce TBT during first paint
      scheduleIdle(async () => {
        if (cancelled) return;

        const gsapModule = await import("gsap");
        const stModule = await import("gsap/ScrollTrigger");

        if (cancelled) return;

        const gsap = gsapModule.default;
        const ScrollTrigger = (stModule as any).ScrollTrigger || (stModule as any).default || stModule;
        ScrollTriggerRef = ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        // Helpful perf tweak
        if (ScrollTrigger.config) {
          ScrollTrigger.config({ ignoreMobileResize: true });
        }

        const mobile = isMobile();

        cleanup(); // ensure no duplicate triggers on language changes

        ctx = gsap.context(() => {
          // VIDEO CAROUSEL reveal (lighter on mobile)
          if (videoCarouselRef.current) {
            const slides = videoCarouselRef.current.querySelectorAll(`.${styles.videoSlide}`);
            gsap.fromTo(
              slides,
              { opacity: 0, y: mobile ? 10 : 20 },
              {
                opacity: 1,
                y: 0,
                duration: mobile ? 0.45 : 0.7,
                stagger: mobile ? 0.04 : 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: videoCarouselRef.current,
                  start: "top 88%",
                },
              }
            );
          }

          // HERO entrance (optional; lighter on mobile)
          if (heroRef.current) {
            const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
            if (heroContent) {
              gsap.fromTo(
                heroContent,
                { opacity: 0, y: mobile ? 30 : 80 },
                {
                  opacity: 1,
                  y: 0,
                  duration: mobile ? 0.6 : 1.0,
                  ease: "power3.out",
                  delay: 0.08,
                }
              );
            }
          }

          // BEFORE/AFTER cards (avoid 3D on mobile)
          if (beforeAfterRef.current) {
            const cards = beforeAfterRef.current.querySelectorAll(`.${styles.comparisonCard}`);
            gsap.fromTo(
              cards,
              mobile
                ? { opacity: 0, y: 16 }
                : { opacity: 0, x: -60, rotateY: -8 },
              {
                opacity: 1,
                x: 0,
                y: 0,
                rotateY: 0,
                duration: mobile ? 0.55 : 0.9,
                stagger: mobile ? 0.08 : 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: beforeAfterRef.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // STATS count-up (skip on mobile to reduce main-thread work)
          if (statsRef.current) {
            if (mobile) {
              setStatsInstant();
            } else {
              const statNumbers = statsRef.current.querySelectorAll(`.${styles.statNumber}`);
              statNumbers.forEach((node) => {
                const target = Number(node.getAttribute("data-target") || "0");
                const obj = { val: 0 };

                gsap.to(obj, {
                  val: target,
                  duration: 1.4,
                  ease: "power2.out",
                  onUpdate: () => {
                    node.textContent = String(Math.round(obj.val));
                  },
                  scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                });
              });
            }
          }

          // S3 cards
          if (s3ShowcaseRef.current) {
            const cards = s3ShowcaseRef.current.querySelectorAll(`.${styles.s3Card}`);
            gsap.fromTo(
              cards,
              { opacity: 0, y: mobile ? 14 : 26 },
              {
                opacity: 1,
                y: 0,
                duration: mobile ? 0.55 : 0.75,
                stagger: mobile ? 0.06 : 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: s3ShowcaseRef.current,
                  start: "top 84%",
                },
              }
            );
          }
        }, rootRef);

        // Avoid forcing sync layout immediately; refresh next frame
        requestAnimationFrame(() => {
          try {
            ScrollTrigger.refresh();
          } catch {}
        });
      });
    };

    void run();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [language]);

  return (
    <main className={styles.galleryPage} ref={rootRef}>
      {/* VIDEO CAROUSEL */}
      <section className={styles.videoCarouselSection} ref={videoCarouselRef} aria-label="Video carousel">
        <div className={styles.videoCarouselHeader}>
          <h2 className={styles.videoCarouselTitle}>{labels.videosTitle}</h2>
          <p className={styles.videoCarouselSubtitle}>{labels.videosSubtitle}</p>
        </div>

        <div className={styles.videoTrack} role="list">
          {videoItems.map((v) => (
            <div className={styles.videoSlide} key={v.id} role="listitem">
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
              <div className={styles.statNumber} data-target="850">
                0
              </div>
              <div className={styles.statLabel}>{labels.carsDetailedLabel}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="500">
                0
              </div>
              <div className={styles.statLabel}>{labels.filterCeramic}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="300">
                0
              </div>
              <div className={styles.statLabel}>{labels.filterProtection}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="98">
                0
              </div>
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

      {/* ✅ S3 VIDEOS */}
      <section className={styles.s3Section} ref={s3ShowcaseRef} aria-label="Work showcase videos">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.s3Title}</h2>
          <p className={styles.sectionSubtitle}>{labels.s3Subtitle}</p>

          <div className={styles.s3Grid}>
            {s3Videos.map((v) => (
              <article key={v.id} className={styles.s3Card}>
                <div className={styles.s3Top}>
                  <span className={styles.s3Pill}>{v.label}</span>

                  <a className={styles.s3Link} href={buildWatchUrl(v.src)} target="_blank" rel="noopener noreferrer">
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
            <Link href="/contact" className={styles.ctaButton}>
              {labels.bookNow}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
