// app/(site)/services/page.tsx
"use client";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  imageSrc: string;
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

function getMotionFlags() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return { reduced: false, lite: false };
  }
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lite =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

  return { reduced, lite };
}

function GoldBadgeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.badgeIcon}
    >
      <path
        d="M4 10l3-3 5 4 5-4 3 3v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M7 7l-3 3 2 2 1-2 5 3 5-3 1 2 2-2-3-3-5 4-5-4Z"
        fill="currentColor"
      />
      <path
        d="M8 20h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
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
    const footer = (t as any)?.footer ?? {};

    return {
      kicker: safeText(
        (services as any).kicker,
        language === "en" ? "Luxury Car Care" : "عناية فاخرة بالسيارات"
      ),
      heroTitle: safeText(services.title, language === "en" ? "Premium Services" : "خدمات مميزة"),
      heroSubtitle: safeText(
        services.subtitle,
        language === "en"
          ? "Detailing, Protection and Finishing—crafted to showroom standards."
          : "تفصيل، حماية، وتشطيب—بمعايير صالات العرض."
      ),

      packagesTitle: safeText(packages.title, language === "en" ? "Packages" : "الباقات"),
      viewAllTitle: safeText(services.viewAll, language === "en" ? "View All Services" : "عرض الخدمات"),
      exploreBtn: safeText(services.learnMore, language === "en" ? "Explore" : "استكشاف"),
      getQuote: safeText((services as any).getQuote, language === "en" ? "Get a Quote" : "اطلب عرض سعر"),

      vipTitle: safeText(packagesNew.vipTitle, "VIP Detailing"),
      standardTitle: safeText(packagesNew.standardTitle, "Standard Packages"),
      premiumTitle: safeText(packagesNew.premiumTitle, "Premium Packages"),

      featuredBadge: safeText(packagesNew.featuredBadge, language === "en" ? "Most Popular" : "الأكثر طلبًا"),
      learnMore: safeText(services.learnMore, language === "en" ? "Explore" : "استكشاف"),
      rights: safeText(footer.rights, "All rights reserved."),
    };
  }, [t, language]);

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
      "Ceramic coating",
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
      "One free service extra wash",
    ];

    return [
      { title: labels.vipTitle, features: vip },
      { title: labels.standardTitle, features: standard, badge: labels.featuredBadge },
      { title: labels.premiumTitle, features: premium },
    ];
  }, [t, labels.vipTitle, labels.standardTitle, labels.premiumTitle, labels.featuredBadge]);

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
        subservices: data.ppfSubservices ?? [],
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
        subservices: data.solarSubservices ?? [],
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
        subservices: data.detailingSubservices ?? [],
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
        subservices: data.paintRepairSubservices ?? [],
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
        subservices: data.washSubservices ?? [],
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
        subservices: data.windshieldSubservices ?? [],
      },
    ];
  }, [t, language]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const { reduced, lite } = getMotionFlags();

    // Step-4: do not run ScrollTrigger animations in reduced OR lite mode.
    if (reduced || lite) {
      // Ensure nothing gets stuck if any inline styles existed
      const heroContent = heroRef.current?.querySelector(`.${styles.heroContent}`) as HTMLElement | null;
      if (heroContent) {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "none";
      }
      return;
    }

    // Perf: reduce refresh churn + callback noise
    ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

    const ctx = gsap.context(() => {
      // HERO (fast)
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`) as HTMLElement | null;
        if (heroContent) {
          gsap.set(heroContent, { autoAlpha: 0, y: 18, willChange: "transform,opacity" });
          gsap.to(heroContent, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            onComplete: () => { gsap.set(heroContent, { clearProps: "willChange" }); },
          });
        }
      }

      // PACKAGES (batch, once)
      if (packagesRef.current) {
        const cards = Array.from(
          packagesRef.current.querySelectorAll<HTMLElement>(`.${styles.packageCard}`)
        );

        gsap.set(cards, { autoAlpha: 0, y: 14, willChange: "transform,opacity" });

        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.06,
              onComplete: () => { batch.forEach((el) => gsap.set(el, { clearProps: "willChange" })); },
            });
          },
        });
      }

      // SERVICES (batch, once)
      if (servicesRef.current) {
        const items = Array.from(
          servicesRef.current.querySelectorAll<HTMLElement>(`.${styles.serviceCard}`)
        );

        gsap.set(items, { autoAlpha: 0, y: 14, willChange: "transform,opacity" });

        ScrollTrigger.batch(items, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.06,
              onComplete: () => batch.forEach((el) => gsap.set(el, { clearProps: "willChange" })),
            });
          },
        });
      }
    }, root);

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();

      // Extra safety: kill triggers whose trigger is inside this page root
      try {
        ScrollTrigger.getAll().forEach((st) => {
          const trig = st.trigger as Element | null;
          if (trig && root.contains(trig)) st.kill(false);
        });
      } catch {
        // ignore
      }
    };
  }, [labels]);

  return (
    <main className={styles.servicesPage} ref={rootRef}>
      {/* HERO */}
      <section className={styles.servicesHero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroSpotlights} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.heroKicker}>{labels.kicker}</div>
          <h1 className={styles.heroTitle}>{labels.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{labels.heroSubtitle}</p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className={styles.packagesSection} ref={packagesRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.packagesTitle}</h2>

          <div className={styles.packagesGrid}>
            {packages.map((pkg, pkgIndex) => (
              <article
                key={`${pkg.title}-${pkgIndex}`}
                className={`${styles.packageCard} ${pkg.badge ? styles.featured : ""}`}
              >
                {pkg.badge && (
                  <div className={styles.popularSticker} aria-label={pkg.badge}>
                    <span className={styles.stickerPin} aria-hidden="true" />
                    <span className={styles.stickerIcon} aria-hidden="true">
                      <GoldBadgeIcon />
                    </span>
                    <span className={styles.stickerText}>{pkg.badge}</span>
                    <span className={styles.stickerTail} aria-hidden="true" />
                  </div>
                )}

                <div className={styles.packageHeader}>
                  <h3 className={styles.packageName}>{pkg.title}</h3>
                </div>

                <ul className={styles.packageFeatures}>
                  {pkg.features.map((f, i) => (
                    <li key={`${pkg.title}-${i}-${f}`} className={styles.packageFeature}>
                      <span className={styles.featureDot} aria-hidden="true" />
                      <span className={styles.featureText}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={styles.packageButton}>
                  {labels.getQuote}
                  <span className={styles.btnArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesListSection} ref={servicesRef}>
        <div className={styles.containerWide}>
          <h2 className={styles.sectionTitle}>{labels.viewAllTitle}</h2>

          <div className={styles.servicesGrid} aria-live="polite">
            {serviceGroups.map((svc) => (
              <article key={svc.slug} className={styles.serviceCard}>
                <div className={styles.serviceMedia}>
                  <BeforeAfterSlider
                    beforeSrc={`/proof/${svc.slug}-before.png`}
                    afterSrc={`/proof/${svc.slug}-after.png`}
                    alt={`${svc.title} before/after`}
                    height={320}
                  />

                  <div className={styles.mediaOverlay} aria-hidden="true" />

                  <span className={styles.serviceIcon} aria-hidden="true">
                    <Image
                      src={svc.imageSrc}
                      alt=""
                      width={48}
                      height={48}
                      className={styles.serviceIconImage}
                      loading="lazy"
                      decoding="async"
                      priority={false}
                    />
                  </span>
                </div>

                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceName}>{svc.title}</h3>
                  <p className={styles.serviceDescription}>{svc.description}</p>

                  <Link
                    href={`/services/${svc.slug}`}
                    className={styles.serviceButton}
                    aria-label={`${svc.title} - ${labels.exploreBtn}`}
                  >
                    {labels.exploreBtn}
                    <span className={styles.btnArrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
