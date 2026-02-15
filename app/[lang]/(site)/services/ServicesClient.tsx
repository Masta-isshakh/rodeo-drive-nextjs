// app/[lang]/services/ServicesClient.tsx
"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import styles from "./services.module.css";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider/BeforeAfterSlider";
import { useI18n } from "@/app/lib/i18n";
import type { PackageKey, ServiceGroupBase } from "./page";

type Lang = "en" | "ar";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function GoldBadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className={styles.badgeIcon}>
      <path
        d="M4 10l3-3 5 4 5-4 3 3v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M7 7l-3 3 2 2 1-2 5 3 5-3 1 2 2-2-3-3-5 4-5-4Z" fill="currentColor" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

// ✅ Optional motion island (GSAP lazy)
const ServicesMotion = dynamic(() => import("./ServicesMotion"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  initialLang: Lang;
  packages: PackageKey[];
  serviceGroups: ServiceGroupBase[];
};

export default function ServicesClient({ initialLang, packages, serviceGroups }: Props) {
  const i18n = useI18n() as any;
  const t = i18n?.t;

  // ✅ runtime language comes from i18n (lang button changes this)
  const [runtimeLang, setRuntimeLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const fromI18n =
      i18n?.lang ?? i18n?.locale ?? i18n?.language ?? i18n?.currentLang ?? "";
    const fromHtml =
      typeof document !== "undefined" ? document.documentElement.lang : "";
    const guess = String(fromI18n || fromHtml || initialLang).toLowerCase();
    setRuntimeLang(guess.startsWith("ar") ? "ar" : "en");
  }, [t, i18n?.lang, i18n?.locale, i18n?.language, i18n?.dir, initialLang]);

  const lang: Lang = runtimeLang;
  const dir = lang === "ar" ? "rtl" : "ltr";

  const servicesT = useMemo(() => {
    return (t as any)?.services ?? (t as any)?.servicesPage ?? (t as any)?.pages?.services ?? {};
  }, [t]);

  const labels = useMemo(() => {
    const isAr = lang === "ar";
    const heroT = servicesT?.hero ?? {};
    const pkgT = servicesT?.packages ?? {};
    const listT = servicesT?.list ?? {};

    return {
      kicker: safeText(heroT?.kicker ?? servicesT?.kicker, isAr ? "عناية فاخرة بالسيارات" : "Luxury Car Care"),
      heroTitle: safeText(heroT?.title ?? servicesT?.heroTitle, isAr ? "خدمات مميزة" : "Premium Services"),
      heroSubtitle: safeText(
        heroT?.subtitle ?? servicesT?.heroSubtitle,
        isAr ? "تفصيل، حماية، وتشطيب—بمعايير صالات العرض." : "Detailing, Protection and Finishing—crafted to showroom standards."
      ),

      packagesTitle: safeText(pkgT?.title ?? servicesT?.packagesTitle, isAr ? "الباقات" : "Packages"),
      viewAllTitle: safeText(listT?.title ?? servicesT?.viewAllTitle, isAr ? "عرض الخدمات" : "View All Services"),

      exploreBtn: safeText(servicesT?.exploreBtn, isAr ? "استكشاف" : "Explore"),
      getQuote: safeText(servicesT?.getQuote, isAr ? "اطلب عرض سعر" : "Get a Quote"),
      featuredBadge: safeText(servicesT?.featuredBadge, isAr ? "الأكثر طلبًا" : "Most Popular"),

      vipTitle: safeText(servicesT?.vipTitle, isAr ? "تفصيل VIP" : "VIP Detailing"),
      standardTitle: safeText(servicesT?.standardTitle, isAr ? "الباقات القياسية" : "Standard Packages"),
      premiumTitle: safeText(servicesT?.premiumTitle, isAr ? "الباقات المميزة" : "Premium Packages"),
    };
  }, [servicesT, lang]);

  // Packages text
const packageCards = useMemo(() => {
  const isAr = lang === "ar";
  const vipFeatures = servicesT?.packageFeatures?.vip;
  const standardFeatures = servicesT?.packageFeatures?.standard;
  const premiumFeatures = servicesT?.packageFeatures?.premium;

  const fromDictArray = (x: any) => (Array.isArray(x) ? x.filter(Boolean) : null);

  const vipF =
    fromDictArray(vipFeatures) ??
    (isAr
      ? [
          "تنظيف داخلي عميق",
          "تلميع خارجي",
          "نانو للجنوط",
          "نانو للجلد",
          "نانو للبودي",
          "نانو للزجاج",
          "تعقيم وإزالة الروائح",
        ]
      : [
          "Interior deep cleaning",
          "Exterior polishing",
          "Rim nano coating",
          "Leather nano coating",
          "Body nano coating",
          "Glass nano coating",
          "Sanitization & odor removal",
        ]);

  const standardF =
    fromDictArray(standardFeatures) ??
    (isAr
      ? [
          "تركيب PPF كامل",
          "طبقة سيراميك",
          "حماية الجنوط",
          "حماية الجلد",
          "تظليل/حماية زجاج",
          "حماية زجاج أمامي (لايت)",
          "تلميع تحضيري قبل الحماية",
        ]
      : [
          "Full car PPF installation",
          "Ceramic coating",
          "Rim protection",
          "Leather protection",
          "Solar window film",
          "Windshield (light)",
          "Preparation polish before protection",
        ]);

  const premiumF =
    fromDictArray(premiumFeatures) ??
    (isAr
      ? [
          "حماية الداخلية",
          "تركيب PPF خارجي كامل",
          "تظليل (إكسترا كول)",
          "زجاج أمامي (إكستريم)",
          "نانو للجلد",
          "نانو للجنوط",
          "غسيل إضافي مجاني مرة واحدة",
        ]
      : [
          "Interior protection",
          "Full exterior PPF installation",
          "Solar window film (extra cool)",
          "Windshield (extreme)",
          "Leather nano coating",
          "Rim nano coating",
          "One free service extra wash",
        ]);

  const cards = [
    { key: "vip" as const, title: labels.vipTitle, features: vipF, badge: undefined },
    { key: "standard" as const, title: labels.standardTitle, features: standardF, badge: labels.featuredBadge },
    { key: "premium" as const, title: labels.premiumTitle, features: premiumF, badge: undefined },
  ];

  const order = new Map(packages.map((k, i) => [k, i]));
  return cards.sort((a, b) => (order.get(a.key) ?? 0) - (order.get(b.key) ?? 0));
}, [servicesT, lang, labels, packages]);


  // Services list translation by slug (dict overrides supported)
  const localizedGroups = useMemo(() => {
    const isAr = lang === "ar";
    const svcDict = servicesT?.serviceGroups ?? servicesT?.services ?? {};

    const defaults: Record<
      string,
      { en: { title: string; desc: string }; ar: { title: string; desc: string } }
    > = {
      "full-protection-ppf": {
        en: { title: "Full Protection – PPF", desc: "Complete PPF solutions for maximum paint preservation." },
        ar: { title: "حماية كاملة – PPF", desc: "حلول حماية كاملة بفيلم PPF للحفاظ على الطلاء." },
      },
      "window-solar-film": {
        en: { title: "Window Solar Film", desc: "Heat and UV reduction with premium tint and clear protection." },
        ar: { title: "تظليل وحماية الزجاج", desc: "تقليل الحرارة والأشعة فوق البنفسجية مع تظليل وحماية شفافة." },
      },
      "detailing-coating": {
        en: { title: "Detailing & Coating", desc: "Paint correction, deep cleaning, and advanced coating systems." },
        ar: { title: "تفصيل وسيراميك", desc: "تصحيح طلاء وتنظيف عميق وطبقات حماية متقدمة." },
      },
      "paint-repair-services": {
        en: { title: "Paint & Repair Services", desc: "Smart repair and refinishing solutions with precise color matching." },
        ar: { title: "خدمات الدهان والإصلاح", desc: "إصلاحات ذكية ودهان مع مطابقة لون دقيقة." },
      },
      "car-wash-services": {
        en: { title: "Car Wash Services", desc: "Premium hand wash, foam wash, and safe interior sanitization." },
        ar: { title: "خدمات غسيل السيارات", desc: "غسيل يدوي ممتاز وغسيل رغوي وتعقيم داخلي آمن." },
      },
      "windshield-services": {
        en: { title: "Windshield Services", desc: "Repair, protection and replacement for maximum visibility." },
        ar: { title: "خدمات الزجاج الأمامي", desc: "إصلاح وحماية واستبدال لضمان أفضل رؤية." },
      },
    };

    return serviceGroups.map((svc) => {
      const override = svcDict?.[svc.slug] ?? null;
      const fallback = defaults[svc.slug]?.[isAr ? "ar" : "en"] ?? { title: svc.slug, desc: "" };

      return {
        ...svc,
        title: safeText(override?.title ?? svc.title, fallback.title),
        description: safeText(override?.description ?? override?.desc ?? svc.description, fallback.desc),
      };
    });
  }, [servicesT, serviceGroups, lang]);

  // Localize /contact route safely
  const pathname = usePathname();
  const contactHref = useMemo(() => {
    const clean = (pathname || "").split("?")[0];
    const parts = clean.split("/").filter(Boolean);
    // if current URL already has /en or /ar, keep localized links
    if (parts.length && (parts[0] === "en" || parts[0] === "ar")) return `/${lang}/contact`;
    return "/contact";
  }, [pathname, lang]);

  /**
   * ✅ 100% correct builder for /[lang]/services/[...slugs]
   * - uses routeSlug (catalog key)
   * - encodes segments
   */
  const serviceDetailHref = useCallback(
    (routeSlug: string) => {
      const segs = String(routeSlug || "")
        .split("/")
        .filter(Boolean)
        .map((s) => encodeURIComponent(s));
      return `/services/${segs.join("/")}`;
    },
    [lang]
  );

  // proof images must not break if slug has "/" (just in case)
  const proofKey = (slug: string) => slug.replace(/\//g, "-");

  const motionKey = `${lang}|services`;

  return (
    <main className={styles.servicesPage} dir={dir} data-services-root lang={lang} key={lang}>
      <ServicesMotion motionKey={motionKey} />

      {/* HERO */}
      <section className={styles.servicesHero} data-services-hero>
        <div className={styles.heroOverlay} />
        <div className={styles.heroSpotlights} aria-hidden="true" />

      </section>

      {/* PACKAGES */}
      <section className={styles.packagesSection} data-services-packages>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-services-animate>
            {labels.packagesTitle}
          </h2>

          <div className={styles.packagesGrid}>
            {packageCards.map((pkg, pkgIndex) => (
              <article
                key={`${pkg.key}-${pkgIndex}-${lang}`}
                className={`${styles.packageCard} ${pkg.badge ? styles.featured : ""}`}
                data-package-card
                data-services-card
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
                  {pkg.features.map((f: string, i: number) => (
                    <li key={`${pkg.key}-${i}-${f}`} className={styles.packageFeature}>
                      <span className={styles.featureDot} aria-hidden="true" />
                      <span className={styles.featureText}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href={contactHref} prefetch={false} className={styles.packageButton}>
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
      <section className={styles.servicesListSection} data-services-list>
        <div className={styles.containerWide}>
          <h2 className={styles.sectionTitle} data-services-animate>
            {labels.viewAllTitle}
          </h2>

          <div className={styles.servicesGrid} aria-live="polite">
            {localizedGroups.map((svc) => (
              <article key={svc.slug} className={styles.serviceCard} data-service-card data-services-card>
                <div className={styles.serviceMedia}>
                  <BeforeAfterSlider
                    beforeSrc={`/proof/${proofKey(svc.slug)}-before.avif`}
                    afterSrc={`/proof/${proofKey(svc.slug)}-after.avif`}
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

                  {/* ✅ THIS is the corrected link */}
                  <Link
                    href={serviceDetailHref(svc.routeSlug)}
                    prefetch={false}
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
