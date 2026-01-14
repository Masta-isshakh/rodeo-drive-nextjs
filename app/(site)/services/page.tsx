// app/(site)/services/page.tsx
"use client";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider/BeforeAfterSlider";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type ServiceGroup = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string; // ✅ replaced Icon with image path
  subservices: string[];
};

type PackageCard = {
  title: string;
  features: string[];
  badge?: string;
};

function safeText(v: unknown, fallback: string) {
  return typeof v === "string" && v.trim() ? v : fallback;
}

export default function ServicesPage() {
  const { language, t } = useI18n();

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const packagesRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  const labels = useMemo(() => {
    const services = (t as any)?.services ?? {};
    const packages = (t as any)?.packages ?? {};
    const packagesNew = (t as any)?.packagesNew ?? {};

    return {
      heroTitle: safeText(
        services.title,
        language === "en" ? "Premium Services" : "خدمات مميزة"
      ),
      heroSubtitle: safeText(
        services.subtitle,
        language === "en"
          ? "Comprehensive automotive care solutions"
          : "حلول شاملة لرعاية السيارات"
      ),
      packagesTitle: safeText(packages.title, language === "en" ? "Packages" : "الباقات"),
      viewAllTitle: safeText(services.viewAll, language === "en" ? "View All Services" : "عرض الخدمات"),
      exploreBtn: safeText(services.learnMore, language === "en" ? "Explore" : "استكشاف"),
      subservicesLabel: safeText(services.subservicesLabel, language === "en" ? "Subservices" : "الخدمات الفرعية"),

      // New packages titles
      vipTitle: safeText(packagesNew.vipTitle, "VIP Detailing"),
      standardTitle: safeText(packagesNew.standardTitle, "Standard Packages"),
      premiumTitle: safeText(packagesNew.premiumTitle, "Premium Packages"),
      featuredBadge: safeText(packagesNew.featuredBadge, language === "en" ? "Recommended" : "موصى به"),
    };
  }, [t, language]);

  // ✅ 3 packages (VIP / Standard / Premium)
  const packages: PackageCard[] = useMemo(() => {
    const packagesNew = (t as any)?.packagesNew ?? {};

    const vip = packagesNew.vipFeatures ?? [
      "Interior deep cleaning",
      "Exterior polishing",
      "Rim nano coating",
      "Leather nano coating",
      "Body nano coating",
    ];

    const standard = packagesNew.standardFeatures ?? [
      "Full car PPF installation",
      "Exterior polishing",
      "Rim protection",
      "Leather protection",
      "Solar window film",
      "Windshield (light)",
    ];

    const premium = packagesNew.premiumFeatures ?? [
      "Interior protection",
      "Full exterior PPF installation",
      "Solar window film (extra cool)",
      "Windshield (extreme)",
      "Leather nano coating",
      "Rim nano coating",
      "Exterior polishing",
      "One free service extra wash",
    ];

    return [
      { title: labels.vipTitle, features: vip },
      { title: labels.standardTitle, features: standard, badge: labels.featuredBadge },
      { title: labels.premiumTitle, features: premium },
    ];
  }, [t, labels.vipTitle, labels.standardTitle, labels.premiumTitle, labels.featuredBadge]);

  // ✅ 6 services only + subservices + routing
  // Put your images inside /public, then reference them like "/icons/ppf.png"
  const serviceGroups: ServiceGroup[] = useMemo(() => {
    const data = (t as any)?.servicesGroups ?? {};

    return [
      {
        slug: "full-protection-ppf",
        title: safeText(data.ppfTitle, "Full Protection – PPF"),
        description: safeText(
          data.ppfDesc,
          language === "en"
            ? "Complete PPF solutions for maximum paint preservation."
            : "حلول حماية كاملة بفيلم PPF للحفاظ على الطلاء."
        ),
        imageSrc: "/ppf-icon.png",
        subservices: data.ppfSubservices ?? [
          "Full Body PPF",
          "Front-End PPF (Bumper, Hood, Fenders, Mirrors)",
          "Gloss / Matte / Satin PPF",
          "Self-Healing PPF",
          "Headlight, Taillight & Interior PPF",
          "PPF Removal & Replacement",
        ],
      },
      {
        slug: "window-solar-film",
        title: safeText(data.solarTitle, "Window Solar Film"),
        description: safeText(
          data.solarDesc,
          language === "en"
            ? "Heat and UV reduction with premium tint and clear protection."
            : "تقليل الحرارة والأشعة فوق البنفسجية مع تظليل وحماية شفافة."
        ),
        imageSrc: "/SolarWindowTint-icon.png",
        subservices: data.solarSubservices ?? [
          "Nano Ceramic Tint",
          "Heat & UV Protection Film",
          "Windshield Clear Protection",
          "Sunroof & Panoramic Roof Tint",
          "Tint Removal & Reinstallation",
        ],
      },
      {
        slug: "detailing-coating",
        title: safeText(data.detailingTitle, "Detailing & Coating"),
        description: safeText(
          data.detailingDesc,
          language === "en"
            ? "Paint correction, deep cleaning, and advanced coating systems."
            : "تصحيح طلاء وتنظيف عميق وطبقات حماية متقدمة."
        ),
        imageSrc: "/Exteriordetailing-icon.png",
        subservices: data.detailingSubservices ?? [
          "Exterior Detailing & Paint Correction",
          "Interior Deep Cleaning",
          "Ceramic & Graphene Coating",
          "Glass, Wheel & Interior Coating",
        ],
      },
      {
        slug: "paint-repair-services",
        title: safeText(data.paintRepairTitle, "Paint & Repair Services"),
        description: safeText(
          data.paintRepairDesc,
          language === "en"
            ? "Smart repair and refinishing solutions with precise color matching."
            : "إصلاحات ذكية ودهان مع مطابقة لون دقيقة."
        ),
        imageSrc: "/paintessdentrepair-icon.png",
        subservices: data.paintRepairSubservices ?? [
          "Smart Paint Repair",
          "Rubber / Peelable Paint",
          "Normal & Full Repaint",
          "Paintless Dent Repair (PDR)",
          "Color Matching & Panel Painting",
        ],
      },
      {
        slug: "car-wash-services",
        title: safeText(data.washTitle, "Car Wash Services"),
        description: safeText(
          data.washDesc,
          language === "en"
            ? "Premium hand wash, foam wash, and safe interior sanitization."
            : "غسيل يدوي ممتاز وغسيل رغوي وتعقيم داخلي آمن."
        ),
        imageSrc: "/carwash-icon.png",
        subservices: data.washSubservices ?? [
          "Basic & Premium Hand Wash",
          "Foam Wash",
          "Engine Bay Cleaning",
          "Interior Vacuum & Sanitization",
        ],
      },
      {
        slug: "windshield-services",
        title: safeText(data.windshieldTitle, "Windshield Services"),
        description: safeText(
          data.windshieldDesc,
          language === "en"
            ? "Repair, protection and replacement for maximum visibility."
            : "إصلاح وحماية واستبدال لضمان أفضل رؤية."
        ),
        imageSrc: "/windsheild-icon.png",
        subservices: data.windshieldSubservices ?? [
          "Stone Chip & Crack Repair",
          "Glass Polishing",
          "Water Repellent Treatment",
          "Windshield Replacement",
        ],
      },
    ];
  }, [t, language]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      // HERO
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(
            heroContent,
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
        }
      }

      // PACKAGES section
      if (packagesRef.current) {
        const cards = packagesRef.current.querySelectorAll(`.${styles.packageCard}`);
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: packagesRef.current, start: "top 85%", once: true },
          }
        );
      }

      // SERVICES section
      if (servicesRef.current) {
        const items = servicesRef.current.querySelectorAll(`.${styles.serviceCard}`);
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: servicesRef.current, start: "top 85%", once: true },
          }
        );
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);

    return () => ctx.revert();
  }, [language]);

  return (
    <main className={styles.servicesPage} ref={rootRef}>
      {/* Hero */}
      <section className={styles.servicesHero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{labels.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{labels.heroSubtitle}</p>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.packagesSection} ref={packagesRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.packagesTitle}</h2>

          <div className={styles.packagesGrid}>
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className={`${styles.packageCard} ${pkg.badge ? styles.featured : ""}`}
              >
                {pkg.badge && <div className={styles.featuredBadge}>{pkg.badge}</div>}

                <h3 className={styles.packageName}>{pkg.title}</h3>

                <ul className={styles.packageFeatures}>
                  {pkg.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>

                <Link href="/contact" className={styles.packageButton}>
                  {t.services.getQuote ?? (language === "en" ? "Get a Quote" : "احصل على عرض سعر")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* View All Services (6 only) */}
      <section className={styles.servicesListSection} ref={servicesRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.viewAllTitle}</h2>

          <div className={styles.servicesGrid} aria-live="polite">
            {serviceGroups.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={styles.serviceCard}
                aria-label={`${svc.title} - ${labels.subservicesLabel}`}
              >
                <div className={styles.serviceMedia} aria-hidden="true">
                  <BeforeAfterSlider
                    beforeSrc={`/proof/${svc.slug}-before.png`}
                    afterSrc={`/proof/${svc.slug}-after.png`}
                    alt={`${svc.title} before/after`}
                    height="clamp(240px, 18vw, 360px)"
                  />
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <img
                      src={svc.imageSrc}
                      alt=""
                      className={styles.serviceIconImage}
                      loading="lazy"
                    />
                  </span>
                </div>

                <h3 className={styles.serviceName}>{svc.title}</h3>
                <p className={styles.serviceDescription}>{svc.description}</p>

                <div className={styles.serviceMeta}>
                  <span className={styles.serviceMetaPill}>
                    {labels.subservicesLabel}: {svc.subservices.length}
                  </span>
                </div>

                <span className={styles.serviceButton} aria-hidden="true">
                  {labels.exploreBtn}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
