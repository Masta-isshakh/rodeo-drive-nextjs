// app/(site)/services/page.tsx
"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import { useI18n } from "../../lib/i18n";

// ✅ Lucide icons (SVG, pro, léger)
import {
  Sparkles,
  ShieldCheck,
  Palette,
  SprayCan,
  Wrench,
  Hammer,
  Bandage,
  Paintbrush,
  Car,
  Sofa,
  Droplets,
  CircleDot,
  Wind,
  BadgeCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Category = "all" | "protection" | "detailing" | "customization" | "repair";

type ServiceItem = {
  id: number;
  name: string;
  category: Exclude<Category, "all">;
  Icon: React.ElementType;
  description: string;
};

export default function ServicesPage() {
  const { language, t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const packagesSectionRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);

  // ✅ Services + icônes professionnelles (pas d'emojis)
  const allServices: ServiceItem[] = useMemo(
    () => [
      { id: 1, name: t.services.list.polish, category: "detailing", Icon: Sparkles, description: t.services.descriptions.polishDesc },
      { id: 2, name: t.services.list.ceramicCoating, category: "protection", Icon: ShieldCheck, description: t.services.descriptions.ceramicCoatingDesc },
      { id: 3, name: t.services.list.protection, category: "protection", Icon: BadgeCheck, description: t.services.descriptions.protectionDesc },
      { id: 4, name: t.services.list.paintProtection, category: "protection", Icon: ShieldCheck, description: t.services.descriptions.paintProtectionDesc },

      { id: 5, name: t.services.list.rubberizedPaint, category: "customization", Icon: SprayCan, description: t.services.descriptions.rubberizedPaintDesc },
      { id: 6, name: t.services.list.smartRepair, category: "repair", Icon: Wrench, description: t.services.descriptions.smartRepairDesc },
      { id: 7, name: t.services.list.pdr, category: "repair", Icon: Hammer, description: t.services.descriptions.pdrDesc },
      { id: 8, name: t.services.list.scratchAdjustment, category: "repair", Icon: Bandage, description: t.services.descriptions.scratchAdjustmentDesc },

      { id: 9, name: t.services.list.guardColorChange, category: "customization", Icon: Paintbrush, description: t.services.descriptions.guardColorChangeDesc },
      { id: 10, name: t.services.list.paintColorChange, category: "customization", Icon: Palette, description: t.services.descriptions.paintColorChangeDesc },

      { id: 11, name: t.services.list.interiorPolish, category: "detailing", Icon: Sofa, description: t.services.descriptions.interiorPolishDesc },
      { id: 12, name: t.services.list.exteriorPolish, category: "detailing", Icon: Sparkles, description: t.services.descriptions.exteriorPolishDesc },

      { id: 13, name: t.services.list.nanoCeramicRims, category: "protection", Icon: CircleDot, description: t.services.descriptions.nanoCeramicRimsDesc },
      { id: 14, name: t.services.list.nanoCeramicBody, category: "protection", Icon: ShieldCheck, description: t.services.descriptions.nanoCeramicBodyDesc },
      { id: 15, name: t.services.list.nanoLeather, category: "protection", Icon: Droplets, description: t.services.descriptions.nanoLeatherDesc },
      { id: 16, name: t.services.list.windshield, category: "protection", Icon: Wind, description: t.services.descriptions.windshieldDesc },

      { id: 17, name: t.services.list.blackEdition, category: "customization", Icon: Car, description: t.services.descriptions.blackEditionDesc },
      { id: 18, name: t.services.list.defenderConversion, category: "customization", Icon: Car, description: t.services.descriptions.defenderConversionDesc },
      { id: 19, name: t.services.list.accessoriesPainting, category: "customization", Icon: Paintbrush, description: t.services.descriptions.accessoriesPaintingDesc },
    ],
    [t]
  );

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return allServices;
    return allServices.filter((s) => s.category === activeCategory);
  }, [allServices, activeCategory]);

  const packages = useMemo(
    () => [
      {
        name: t.packages.essential.name,
        description: t.packages.essential.description,
        price: t.packages.essential.price,
        features: [
          t.packages.essential.feature1,
          t.packages.essential.feature2,
          t.packages.essential.feature3,
          t.packages.essential.feature4,
        ],
      },
      {
        name: t.packages.premium.name,
        description: t.packages.premium.description,
        price: t.packages.premium.price,
        features: [
          t.packages.premium.feature1,
          t.packages.premium.feature2,
          t.packages.premium.feature3,
          t.packages.premium.feature4,
          t.packages.premium.feature5,
        ],
        featured: true,
      },
      {
        name: t.packages.elite.name,
        description: t.packages.elite.description,
        price: t.packages.elite.price,
        features: [
          t.packages.elite.feature1,
          t.packages.elite.feature2,
          t.packages.elite.feature3,
          t.packages.elite.feature4,
          t.packages.elite.feature5,
          t.packages.elite.feature6,
        ],
      },
    ],
    [t]
  );

  /**
   * ✅ Animations optimisées :
   * - Hero : une seule animation au mount
   * - Sections : fade léger, once=true (pas de reverse)
   * - Pas d’animation sur chaque card -> zéro latence même avec 19+ cards
   */
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Toujours visible par défaut
    if (prefersReducedMotion) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      // HERO (sans scrollTrigger)
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(
            heroContent,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
        }
      }

      // PACKAGES section (fade simple)
      if (packagesSectionRef.current) {
        gsap.fromTo(
          packagesSectionRef.current,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: packagesSectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // SERVICES section (fade simple)
      if (servicesSectionRef.current) {
        gsap.fromTo(
          servicesSectionRef.current,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesSectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, root);

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);

      // kill triggers dans le root uniquement
      try {
        ScrollTrigger.getAll().forEach((st) => {
          const trig = st.trigger as Element | null;
          if (trig && root.contains(trig)) st.kill(false);
        });
      } catch {}

      try {
        ctx.revert();
      } catch {}
    };
  }, [t]);

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
      <section className={styles.packagesSection} ref={packagesSectionRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.packages.title}</h2>

          <div className={styles.packagesGrid}>
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
      <section className={styles.servicesListSection} ref={servicesSectionRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.services.viewAll}</h2>

          {/* Category Filter */}
          <div className={styles.categoryFilter} role="tablist" aria-label="Services categories">
            <button
              className={`${styles.filterButton} ${activeCategory === "all" ? styles.active : ""}`}
              onClick={() => setActiveCategory("all")}
              type="button"
              role="tab"
              aria-selected={activeCategory === "all"}
            >
              {t.services.categories.all}
            </button>
            <button
              className={`${styles.filterButton} ${activeCategory === "protection" ? styles.active : ""}`}
              onClick={() => setActiveCategory("protection")}
              type="button"
              role="tab"
              aria-selected={activeCategory === "protection"}
            >
              {t.services.categories.protection}
            </button>
            <button
              className={`${styles.filterButton} ${activeCategory === "detailing" ? styles.active : ""}`}
              onClick={() => setActiveCategory("detailing")}
              type="button"
              role="tab"
              aria-selected={activeCategory === "detailing"}
            >
              {t.services.categories.detailing}
            </button>
            <button
              className={`${styles.filterButton} ${activeCategory === "customization" ? styles.active : ""}`}
              onClick={() => setActiveCategory("customization")}
              type="button"
              role="tab"
              aria-selected={activeCategory === "customization"}
            >
              {t.services.categories.customization}
            </button>
            <button
              className={`${styles.filterButton} ${activeCategory === "repair" ? styles.active : ""}`}
              onClick={() => setActiveCategory("repair")}
              type="button"
              role="tab"
              aria-selected={activeCategory === "repair"}
            >
              {t.services.categories.repair}
            </button>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid} aria-live="polite">
            {filteredServices.map((service) => {
              const Icon = service.Icon;
              return (
                <div key={service.id} className={styles.serviceCard}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <Icon size={28} strokeWidth={1.6} />
                  </span>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <button className={styles.serviceButton} type="button">
                    {t.services.getQuote}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
