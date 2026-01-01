"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./gallery.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type Filter = "all" | "detailing" | "ceramic" | "interior" | "ppf";

export default function GalleryPage() {
  const { language, t } = useI18n();

  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const galleryItems = useMemo(
    () => [
      {
        id: 1,
        category: "detailing",
        image: "https://images.unsplash.com/photo-1636974352899-850382ac7ad8?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Premium Detailing" : "تفصيل فاخر",
        description: language === "en" ? "Complete exterior restoration" : "ترميم خارجي كامل",
      },
      {
        id: 2,
        category: "ceramic",
        image: "https://images.unsplash.com/photo-1711512972476-cf52b296faff?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Ceramic Coating" : "سيراميك",
        description: language === "en" ? "Nano-ceramic protection application" : "تطبيق حماية نانو سيراميك",
      },
      {
        id: 3,
        category: "interior",
        image: "https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Interior Luxury" : "فخامة الداخلية",
        description: language === "en" ? "Premium leather treatment" : "عناية فاخرة بالجلد",
      },
      {
        id: 4,
        category: "ppf",
        image: "https://images.unsplash.com/photo-1606235994317-b517abfd89cf?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Paint Protection Film" : "حماية الطلاء PPF",
        description: language === "en" ? "Full PPF installation" : "تركيب كامل PPF",
      },
      {
        id: 5,
        category: "detailing",
        image: "https://images.unsplash.com/photo-1658058765830-a7e4c6dd9fff?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Sports Car Detailing" : "تفصيل سيارات رياضية",
        description: language === "en" ? "High-performance vehicle care" : "عناية عالية الأداء",
      },
      {
        id: 6,
        category: "ceramic",
        image: "https://images.unsplash.com/photo-1760343095083-2e2346a0de0b?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Supercar Collection" : "مجموعة سوبركار",
        description: language === "en" ? "Elite ceramic coating service" : "سيراميك نخبة",
      },
      {
        id: 7,
        category: "interior",
        image: "https://images.unsplash.com/photo-1736426341937-656fc3363b8f?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Showroom Interior" : "داخلية صالة عرض",
        description: language === "en" ? "Complete interior restoration" : "ترميم داخلي كامل",
      },
      {
        id: 8,
        category: "ppf",
        image: "https://images.unsplash.com/photo-1746079074371-e28f14c76e37?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Professional Workshop" : "ورشة احترافية",
        description: language === "en" ? "State-of-the-art facility" : "منشأة حديثة",
      },
      {
        id: 9,
        category: "detailing",
        image: "https://images.unsplash.com/photo-1636974352899-850382ac7ad8?auto=format&fit=crop&w=1400&q=80",
        title: language === "en" ? "Paint Correction" : "تصحيح الطلاء",
        description: language === "en" ? "Expert paint restoration" : "ترميم طلاء احترافي",
      },
    ],
    [language]
  );

  const beforeAfterComparisons = useMemo(
    () => [
      {
        id: 1,
        before: "https://images.unsplash.com/photo-1636974352899-850382ac7ad8?auto=format&fit=crop&w=1200&q=80",
        after: "https://images.unsplash.com/photo-1711512972476-cf52b296faff?auto=format&fit=crop&w=1200&q=80",
        title: language === "en" ? "Complete Detailing Transformation" : "تحول كامل بالتفصيل",
        description: language === "en" ? "Full paint correction and ceramic coating" : "تصحيح طلاء + سيراميك",
      },
      {
        id: 2,
        before: "https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?auto=format&fit=crop&w=1200&q=80",
        after: "https://images.unsplash.com/photo-1736426341937-656fc3363b8f?auto=format&fit=crop&w=1200&q=80",
        title: language === "en" ? "Interior Restoration" : "ترميم الداخلية",
        description: language === "en" ? "Premium leather treatment and deep cleaning" : "عناية جلد + تنظيف عميق",
      },
      {
        id: 3,
        before: "https://images.unsplash.com/photo-1606235994317-b517abfd89cf?auto=format&fit=crop&w=1200&q=80",
        after: "https://images.unsplash.com/photo-1658058765830-a7e4c6dd9fff?auto=format&fit=crop&w=1200&q=80",
        title: language === "en" ? "PPF Installation" : "تركيب PPF",
        description: language === "en" ? "Full body PPF with flawless application" : "PPF كامل بتطبيق مثالي",
      },
    ],
    [language]
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((i) => i.category === activeFilter);
  }, [galleryItems, activeFilter]);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(heroContent, { opacity: 0, y: 80, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.12 });
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
            scrollTrigger: { trigger: filterButtons[0].parentElement, start: "top 88%" },
          }
        );
      }
    }, rootRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [language]);

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
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{t.gallery?.title ?? (language === "en" ? "Gallery" : "المعرض")}</h1>
          <p className={styles.subtitle}>{t.gallery?.subtitle ?? (language === "en" ? "Our recent work and transformations" : "أعمالنا والتحولات")}</p>

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
              <div className={styles.statLabel}>{t.cinematicShowcase?.carsDetailedLabel ?? (language === "en" ? "Cars detailed" : "سيارات تم تفصيلها")}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="500">0</div>
              <div className={styles.statLabel}>{t.galleryPage?.filterCeramic ?? (language === "en" ? "Ceramic projects" : "مشاريع سيراميك")}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="300">0</div>
              <div className={styles.statLabel}>{t.galleryPage?.filterProtection ?? (language === "en" ? "Protection installs" : "تركيبات حماية")}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber} data-target="98">0</div>
              <div className={styles.statLabel}>{(t.aboutPage?.stats4Label ?? (language === "en" ? "Satisfaction" : "رضا العملاء"))} %</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className={styles.beforeAfterSection} ref={beforeAfterRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.beforeAfter?.title ?? (language === "en" ? "Before / After" : "قبل / بعد")}</h2>
          <p className={styles.sectionSubtitle}>{t.galleryPage?.description ?? (language === "en" ? "Real transformations by our team." : "تحولات حقيقية من فريقنا.")}</p>

          <div className={styles.comparisonsGrid}>
            {beforeAfterComparisons.map((comparison) => (
              <div key={comparison.id} className={styles.comparisonCard}>
                <div className={styles.comparisonImages}>
                  <div className={styles.imageWrapper}>
                    <img src={comparison.before} alt="Before" className={styles.comparisonImage} />
                    <span className={styles.imageLabel}>{t.beforeAfter?.before ?? (language === "en" ? "Before" : "قبل")}</span>
                  </div>

                  <div className={styles.divider}>
                    <div className={styles.dividerLine} />
                    <span className={styles.dividerIcon}>→</span>
                    <div className={styles.dividerLine} />
                  </div>

                  <div className={styles.imageWrapper}>
                    <img src={comparison.after} alt="After" className={styles.comparisonImage} />
                    <span className={styles.imageLabel}>{t.beforeAfter?.after ?? (language === "en" ? "After" : "بعد")}</span>
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
          <h2 className={styles.sectionTitle}>{t.galleryPage?.featured ?? (language === "en" ? "Featured Work" : "أعمال مختارة")}</h2>

          <div className={styles.filterButtons}>
            <button className={`${styles.filterButton} ${activeFilter === "all" ? styles.active : ""}`} onClick={() => setActiveFilter("all")} type="button">
              {t.galleryPage?.filterAll ?? (language === "en" ? "All" : "الكل")}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "detailing" ? styles.active : ""}`} onClick={() => setActiveFilter("detailing")} type="button">
              {t.services?.categories?.detailing ?? (language === "en" ? "Detailing" : "تفصيل")}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "ceramic" ? styles.active : ""}`} onClick={() => setActiveFilter("ceramic")} type="button">
              {t.services?.list?.ceramicCoating ?? (language === "en" ? "Ceramic" : "سيراميك")}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "interior" ? styles.active : ""}`} onClick={() => setActiveFilter("interior")} type="button">
              {t.galleryPage?.filterInterior ?? (language === "en" ? "Interior" : "الداخلية")}
            </button>
            <button className={`${styles.filterButton} ${activeFilter === "ppf" ? styles.active : ""}`} onClick={() => setActiveFilter("ppf")} type="button">
              {t.services?.list?.paintProtection ?? (language === "en" ? "PPF" : "PPF")}
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
                      <span className={styles.viewButton}>{language === "en" ? "View Details" : "عرض التفاصيل"}</span>
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
            <h2 className={styles.ctaTitle}>{t.finalCta?.title ?? (language === "en" ? "Ready to protect your car?" : "جاهز لحماية سيارتك؟")}</h2>
            <p className={styles.ctaSubtitle}>{t.galleryPage?.description ?? (language === "en" ? "Contact us for a tailored quote." : "تواصل معنا للحصول على عرض سعر.")}</p>
            <button className={styles.ctaButton} type="button">
              {t.nav?.bookNow ?? (language === "en" ? "Book Now" : "احجز الآن")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
