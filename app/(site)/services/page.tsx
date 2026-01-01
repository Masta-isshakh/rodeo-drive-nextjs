// app/(site)/services/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const { language, t } = useI18n();

  const [activeCategory, setActiveCategory] = useState("all");

  const heroRef = useRef<HTMLElement>(null);
  const packagesGridRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  const allServices = useMemo(
    () => [
      { id: 1, name: t.services.list.polish, category: "detailing", icon: "✨", description: t.services.descriptions.polishDesc },
      { id: 2, name: t.services.list.ceramicCoating, category: "protection", icon: "💎", description: t.services.descriptions.ceramicCoatingDesc },
      { id: 3, name: t.services.list.protection, category: "protection", icon: "🛡️", description: t.services.descriptions.protectionDesc },
      { id: 4, name: t.services.list.paintProtection, category: "protection", icon: "🎨", description: t.services.descriptions.paintProtectionDesc },
      { id: 5, name: t.services.list.rubberizedPaint, category: "customization", icon: "🎭", description: t.services.descriptions.rubberizedPaintDesc },
      { id: 6, name: t.services.list.smartRepair, category: "repair", icon: "🔧", description: t.services.descriptions.smartRepairDesc },
      { id: 7, name: t.services.list.pdr, category: "repair", icon: "🔨", description: t.services.descriptions.pdrDesc },
      { id: 8, name: t.services.list.scratchAdjustment, category: "repair", icon: "🩹", description: t.services.descriptions.scratchAdjustmentDesc },
      { id: 9, name: t.services.list.guardColorChange, category: "customization", icon: "🌈", description: t.services.descriptions.guardColorChangeDesc },
      { id: 10, name: t.services.list.paintColorChange, category: "customization", icon: "🎨", description: t.services.descriptions.paintColorChangeDesc },
      { id: 11, name: t.services.list.interiorPolish, category: "detailing", icon: "🪑", description: t.services.descriptions.interiorPolishDesc },
      { id: 12, name: t.services.list.exteriorPolish, category: "detailing", icon: "✨", description: t.services.descriptions.exteriorPolishDesc },
      { id: 13, name: t.services.list.nanoCeramicRims, category: "protection", icon: "⭕", description: t.services.descriptions.nanoCeramicRimsDesc },
      { id: 14, name: t.services.list.nanoCeramicBody, category: "protection", icon: "💎", description: t.services.descriptions.nanoCeramicBodyDesc },
      { id: 15, name: t.services.list.nanoLeather, category: "protection", icon: "🛋️", description: t.services.descriptions.nanoLeatherDesc },
      { id: 16, name: t.services.list.windshield, category: "protection", icon: "🪟", description: t.services.descriptions.windshieldDesc },
      { id: 17, name: t.services.list.blackEdition, category: "customization", icon: "🖤", description: t.services.descriptions.blackEditionDesc },
      { id: 18, name: t.services.list.defenderConversion, category: "customization", icon: "🚙", description: t.services.descriptions.defenderConversionDesc },
      { id: 19, name: t.services.list.accessoriesPainting, category: "customization", icon: "🎨", description: t.services.descriptions.accessoriesPaintingDesc },
    ],
    [t]
  );

  const filteredServices =
    activeCategory === "all" ? allServices : allServices.filter((s) => s.category === activeCategory);

  const packages = useMemo(
    () => [
      {
        name: t.packages.essential.name,
        description: t.packages.essential.description,
        price: t.packages.essential.price,
        features: [t.packages.essential.feature1, t.packages.essential.feature2, t.packages.essential.feature3, t.packages.essential.feature4],
      },
      {
        name: t.packages.premium.name,
        description: t.packages.premium.description,
        price: t.packages.premium.price,
        features: [t.packages.premium.feature1, t.packages.premium.feature2, t.packages.premium.feature3, t.packages.premium.feature4, t.packages.premium.feature5],
        featured: true,
      },
      {
        name: t.packages.elite.name,
        description: t.packages.elite.description,
        price: t.packages.elite.price,
        features: [t.packages.elite.feature1, t.packages.elite.feature2, t.packages.elite.feature3, t.packages.elite.feature4, t.packages.elite.feature5, t.packages.elite.feature6],
      },
    ],
    [t]
  );

  // Animations (montage + cleanup propre)
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // HERO
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(heroContent, { opacity: 0, y: 80, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.15 });
        }
      }

      // PACKAGES
      if (packagesGridRef.current) {
        const cards = packagesGridRef.current.querySelectorAll(`.${styles.packageCard}`);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95, rotateX: -10 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: packagesGridRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // SERVICES GRID
      if (servicesGridRef.current) {
        const serviceCards = servicesGridRef.current.querySelectorAll(`.${styles.serviceCard}`);
        gsap.fromTo(
          serviceCards,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesGridRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // TITLES
      const sectionTitles = document.querySelectorAll(`.${styles.sectionTitle}`);
      sectionTitles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, rootRef);

    // images/fonts peuvent décaler -> refresh
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [t]); // relance propre si langue change (t change)

  // Re-animate services when filter changes
  useEffect(() => {
    if (!servicesGridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = servicesGridRef.current!.querySelectorAll(`.${styles.serviceCard}`);
      gsap.fromTo(cards, { opacity: 0, y: 20, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.03, ease: "power2.out" });
    }, servicesGridRef);

    return () => ctx.revert();
  }, [activeCategory, filteredServices.length]);

  return (
    <main className={styles.servicesPage} ref={rootRef}>
      {/* Hero Section */}
      <section className={styles.servicesHero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.services.title}</h1>
          <p className={styles.heroSubtitle}>{t.services.subtitle}</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className={styles.packagesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.packages.title}</h2>

          <div className={styles.packagesGrid} ref={packagesGridRef}>
            {packages.map((pkg, index) => (
              <div key={index} className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""}`}>
                {pkg.featured && (
                  <div className={styles.featuredBadge}>
                    {t.packages.mostPopular ?? (language === "en" ? "Most Popular" : "الأكثر شعبية")}
                  </div>
                )}

                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packageDescription}>{pkg.description}</p>
                <div className={styles.packagePrice}>{pkg.price}</div>

                <ul className={styles.packageFeatures}>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <button className={styles.packageButton} type="button">
                  {t.services.getQuote}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className={styles.servicesListSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.services.viewAll}</h2>

          {/* Category Filter */}
          <div className={styles.categoryFilter}>
            <button className={`${styles.filterButton} ${activeCategory === "all" ? styles.active : ""}`} onClick={() => setActiveCategory("all")} type="button">
              {t.services.categories.all}
            </button>
            <button className={`${styles.filterButton} ${activeCategory === "protection" ? styles.active : ""}`} onClick={() => setActiveCategory("protection")} type="button">
              {t.services.categories.protection}
            </button>
            <button className={`${styles.filterButton} ${activeCategory === "detailing" ? styles.active : ""}`} onClick={() => setActiveCategory("detailing")} type="button">
              {t.services.categories.detailing}
            </button>
            <button className={`${styles.filterButton} ${activeCategory === "customization" ? styles.active : ""}`} onClick={() => setActiveCategory("customization")} type="button">
              {t.services.categories.customization}
            </button>
            <button className={`${styles.filterButton} ${activeCategory === "repair" ? styles.active : ""}`} onClick={() => setActiveCategory("repair")} type="button">
              {t.services.categories.repair}
            </button>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid} ref={servicesGridRef}>
            {filteredServices.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <span className={styles.serviceIcon} aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <button className={styles.serviceButton} type="button">
                  {t.services.getQuote}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
