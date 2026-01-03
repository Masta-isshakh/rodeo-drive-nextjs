"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./gallery.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type Filter = "all" | "detailing" | "ceramic" | "interior" | "ppf";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

export default function GalleryPage() {
  const { language, t } = useI18n();

  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const rootRef = useRef<HTMLElement>(null);
  const videoCarouselRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // --- VIDEO CAROUSEL (6 vidéos) ---
  const videoItems = useMemo(
    () => [
      { id: 1, src: "/videocarousel.mp4", poster: "/videos/poster-1.jpg" },
      { id: 2, src: "/videocarousel1.mp4", poster: "/videos/poster-2.jpg" },
      { id: 3, src: "/video1.mp4", poster: "/videos/poster-3.jpg" },
      { id: 4, src: "/video1.mp4", poster: "/videos/poster-4.jpg" },
      { id: 5, src: "/video1.mp4", poster: "/videos/poster-5.jpg" },
      { id: 6, src: "/video1.mp4", poster: "/videos/poster-6.jpg" },
    ],
    []
  );

  // Traductions safe (aucune erreur si la clé manque)
  const labels = useMemo(() => {
    const gallery = (t as any)?.gallery ?? {};
    const beforeAfter = (t as any)?.beforeAfter ?? {};
    const galleryPage = (t as any)?.galleryPage ?? {};
    const nav = (t as any)?.nav ?? {};
    const cinematic = (t as any)?.cinematicShowcase ?? {};
    const about = (t as any)?.aboutPage ?? {};
    const services = (t as any)?.services ?? {};

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
      featured: safeText(galleryPage.featured, language === "en" ? "Featured Work" : "أعمال مختارة"),
      filterAll: safeText(galleryPage.filterAll, language === "en" ? "All" : "الكل"),
      filterInterior: safeText(galleryPage.filterInterior, language === "en" ? "Interior" : "الداخلية"),
      detailingLabel: safeText(services?.categories?.detailing, language === "en" ? "Detailing" : "تفصيل"),
      ceramicLabel: safeText(services?.list?.ceramicCoating, language === "en" ? "Ceramic" : "سيراميك"),
      ppfLabel: safeText(services?.list?.paintProtection, "PPF"),
      viewDetails: language === "en" ? "View Details" : "عرض التفاصيل",
      ctaTitle: safeText((t as any)?.finalCta?.title, language === "en" ? "Ready to protect your car?" : "جاهز لحماية سيارتك؟"),
      ctaSubtitle: safeText(galleryPage.description, language === "en" ? "Contact us for a tailored quote." : "تواصل معنا للحصول على عرض سعر."),
      bookNow: safeText(nav.bookNow, language === "en" ? "Book Now" : "احجز الآن"),
      videosTitle: safeText(galleryPage.videosTitle, language === "en" ? "Video Gallery" : "معرض الفيديو"),
      videosSubtitle: safeText(galleryPage.videosSubtitle, language === "en" ? "Highlights from our latest work" : "لقطات من أحدث أعمالنا"),
    };
  }, [t, language]);

  const galleryItems = useMemo(
    () => [
      {
        id: 1,
        category: "detailing",
        image: "/lexus1.png",
        title: language === "en" ? "Premium Detailing" : "تفصيل فاخر",
        description: language === "en" ? "Complete exterior restoration" : "ترميم خارجي كامل",
      },
      {
        id: 2,
        category: "ceramic",
        image: "/nano.jpg",
        title: language === "en" ? "Ceramic Coating" : "سيراميك",
        description: language === "en" ? "Nano-ceramic protection application" : "تطبيق حماية نانو سيراميك",
      },
      {
        id: 3,
        category: "interior",
        image: "/nano1.jpg",
        title: language === "en" ? "Interior Luxury" : "فخامة الداخلية",
        description: language === "en" ? "Premium leather treatment" : "عناية فاخرة بالجلد",
      },
      {
        id: 4,
        category: "ppf",
        image: "ppf.jpg",
        title: language === "en" ? "Paint Protection Film" : "حماية الطلاء PPF",
        description: language === "en" ? "Full PPF installation" : "تركيب كامل PPF",
      },
      {
        id: 5,
        category: "detailing",
        image: "/lambor.png",
        title: language === "en" ? "Sports Car Detailing" : "تفصيل سيارات رياضية",
        description: language === "en" ? "High-performance vehicle care" : "عناية عالية الأداء",
      },
      {
        id: 6,
        category: "ceramic",
        image: "/polish1.JPG",
        title: language === "en" ? "Supercar Collection" : "مجموعة سوبركار",
        description: language === "en" ? "Elite ceramic coating service" : "سيراميك نخبة",
      },

    ],
    [language]
  );

  // --- Before/After: 6 comparaisons ---
  const beforeAfterComparisons = useMemo(
    () => [
      {
        id: 1,
        before: "/before.jpg",
        after: "/after.jpg",
        title: language === "en" ? "Complete Detailing Transformation" : "تحول كامل بالتفصيل",
        description: language === "en" ? "Full paint correction and ceramic coating" : "تصحيح طلاء + سيراميك",
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
      {
        id: 4,
        before: "mercedes_before.jpg",
        after: "mercedes_after.jpg",
        title: language === "en" ? "Deep Gloss Enhancement" : "تعزيز اللمعان العميق",
        description: language === "en" ? "Polish + gloss boost for mirror finish" : "تلميع + تعزيز لمعان",
      },
      {
        id: 5,
        before: "/bmw_wheel_trim_before.jpg",
        after: "/bmw_wheel_trim_after.jpg",
        title: language === "en" ? "Wheel & Trim Revival" : "تجديد الجنط والزوائد",
        description: language === "en" ? "Restoration of wheels, trims, and plastics" : "ترميم الجنط والقطع البلاستيكية",
      },
      {
        id: 6,
        before: "lamborghini_showroom_before.jpg",
        after: "lamborghini_showroom_after.jpg",
        title: language === "en" ? "Showroom Finish" : "نتيجة صالة عرض",
        description: language === "en" ? "Complete exterior + interior refresh" : "تفصيل خارجي وداخلي كامل",
      },
    ],
    [language]
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((i) => i.category === activeFilter);
  }, [galleryItems, activeFilter]);

  // --- Autoplay vidéos: tentative play + fallback interaction ---
  useEffect(() => {
    const section = videoCarouselRef.current;
    if (!section) return;

    const videos = Array.from(section.querySelectorAll("video"));
    if (!videos.length) return;

    videos.forEach((v) => {
      v.muted = true;
      v.playsInline = true;
      v.loop = true;
      v.preload = "metadata";
    });

    const tryPlayAll = async () => {
      for (const v of videos) {
        try {
          await v.play();
        } catch {
          // Autoplay peut être bloqué; fallback ci-dessous
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

  // --- Animations GSAP existantes + animation pour carousel vidéo ---
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Video carousel (entrée légère)
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

      // Hero
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

      // Gallery grid
      if (galleryGridRef.current) {
        const items = galleryGridRef.current.querySelectorAll(`.${styles.galleryItem}`);
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: { trigger: galleryGridRef.current, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      }

      // Before/After
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

      // Stats counter
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

      // Filter buttons
      const filterButtons = document.querySelectorAll(`.${styles.filterButton}`);
      if (filterButtons.length) {
        gsap.fromTo(
          filterButtons,
          { opacity: 0, y: -14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: (filterButtons[0] as HTMLElement).parentElement, start: "top 88%" },
          }
        );
      }
    }, rootRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [language]);

  // Re-anime items lors du changement de filtre
  useEffect(() => {
    if (!galleryGridRef.current) return;

    const ctx = gsap.context(() => {
      const items = galleryGridRef.current!.querySelectorAll(`.${styles.galleryItem}`);
      gsap.fromTo(items, { opacity: 0, y: 12, scale: 0.99 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.03, ease: "power2.out" });
    }, galleryGridRef);

    return () => ctx.revert();
  }, [activeFilter, filteredItems.length]);

  return (
    <main className={styles.galleryPage} ref={rootRef}>
      {/* VIDEO CAROUSEL (juste sous la navbar) */}
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
                  className={styles.video}
                  src={v.src}
                  poster={v.poster}
                  muted
                  playsInline
                  loop
                  preload="metadata"
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

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.featured}</h2>

          <div className={styles.filterButtons}>
            <button className={`${styles.filterButton} ${activeFilter === "all" ? styles.active : ""}`} onClick={() => setActiveFilter("all")} type="button">
              {labels.filterAll}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "detailing" ? styles.active : ""}`} onClick={() => setActiveFilter("detailing")} type="button">
              {labels.detailingLabel}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "ceramic" ? styles.active : ""}`} onClick={() => setActiveFilter("ceramic")} type="button">
              {labels.ceramicLabel}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "interior" ? styles.active : ""}`} onClick={() => setActiveFilter("interior")} type="button">
              {labels.filterInterior}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "ppf" ? styles.active : ""}`} onClick={() => setActiveFilter("ppf")} type="button">
              {labels.ppfLabel}
            </button>
          </div>

          <div className={styles.galleryGrid} ref={galleryGridRef}>
            {filteredItems.map((item) => (
              <button key={item.id} className={styles.galleryItem} onClick={() => setSelectedImage(item.id)} type="button">
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.title} className={styles.galleryImage} />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.imageTitle}>{item.title}</h3>
                      <p className={styles.imageDescription}>{item.description}</p>
                      <span className={styles.viewButton}>{labels.viewDetails}</span>
                    </div>
                  </div>
                </div>
              </button>
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
            <button className={styles.ctaButton} type="button">
              {labels.bookNow}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
