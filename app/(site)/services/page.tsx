// app/(site)/services/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cookies, headers } from "next/headers";
import styles from "./services.module.css";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider/BeforeAfterSlider";
import ServicesEnhancements from "./ServicesPage";

type Lang = "en" | "ar";

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

function detectLang(): Lang {
  // Adjust cookie keys to match your app if needed
  const c = cookies();
  const cookieLang =
    c.get("lang")?.value ||
    c.get("NEXT_LOCALE")?.value ||
    c.get("locale")?.value ||
    "";

  const normalized = cookieLang.toLowerCase();
  if (normalized.startsWith("ar")) return "ar";
  if (normalized.startsWith("en")) return "en";

  const accept = (headers().get("accept-language") || "").toLowerCase();
  if (accept.startsWith("ar")) return "ar";
  return "en";
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

export default function ServicesPage() {
  const lang = detectLang();
  const dir = lang === "ar" ? "rtl" : "ltr";

  // Server labels (replace with your server dictionary if you have one)
  const labels = {
    kicker: lang === "en" ? "Luxury Car Care" : "عناية فاخرة بالسيارات",
    heroTitle: lang === "en" ? "Premium Services" : "خدمات مميزة",
    heroSubtitle:
      lang === "en"
        ? "Detailing, Protection and Finishing—crafted to showroom standards."
        : "تفصيل، حماية، وتشطيب—بمعايير صالات العرض.",

    packagesTitle: lang === "en" ? "Packages" : "الباقات",
    viewAllTitle: lang === "en" ? "View All Services" : "عرض الخدمات",
    exploreBtn: lang === "en" ? "Explore" : "استكشاف",
    getQuote: lang === "en" ? "Get a Quote" : "اطلب عرض سعر",

    vipTitle: lang === "en" ? "VIP Detailing" : "تفصيل VIP",
    standardTitle: lang === "en" ? "Standard Packages" : "الباقات القياسية",
    premiumTitle: lang === "en" ? "Premium Packages" : "الباقات المميزة",
    featuredBadge: lang === "en" ? "Most Popular" : "الأكثر طلبًا",
  };

  const packages: PackageCard[] = [
    {
      title: labels.vipTitle,
      features:
        lang === "en"
          ? ["Interior deep cleaning", "Exterior polishing", "Rim nano coating", "Leather nano coating", "Body nano coating"]
          : ["تنظيف داخلي عميق", "تلميع خارجي", "نانو للجنوط", "نانو للجلد", "نانو للبودي"],
    },
    {
      title: labels.standardTitle,
      badge: labels.featuredBadge,
      features:
        lang === "en"
          ? ["Full car PPF installation", "Ceramic coating", "Rim protection", "Leather protection", "Solar window film", "Windshield (light)"]
          : ["تركيب PPF كامل", "طبقة سيراميك", "حماية الجنوط", "حماية الجلد", "تظليل/حماية زجاج", "حماية زجاج أمامي (لايت)"],
    },
    {
      title: labels.premiumTitle,
      features:
        lang === "en"
          ? [
              "Interior protection",
              "Full exterior PPF installation",
              "Solar window film (extra cool)",
              "Windshield (extreme)",
              "Leather nano coating",
              "Rim nano coating",
              "One free service extra wash",
            ]
          : [
              "حماية الداخلية",
              "تركيب PPF خارجي كامل",
              "تظليل (إكسترا كول)",
              "زجاج أمامي (إكستريم)",
              "نانو للجلد",
              "نانو للجنوط",
              "غسيل إضافي مجاني مرة واحدة",
            ],
    },
  ];

  const serviceGroups: ServiceGroup[] = [
    {
      slug: "full-protection-ppf",
      title: lang === "en" ? "Full Protection – PPF" : "حماية كاملة – PPF",
      description:
        lang === "en"
          ? "Complete PPF solutions for maximum paint preservation."
          : "حلول حماية كاملة بفيلم PPF للحفاظ على الطلاء.",
      imageSrc: "/ppf-icon.avif",
      subservices: [],
    },
    {
      slug: "window-solar-film",
      title: lang === "en" ? "Window Solar Film" : "تظليل وحماية الزجاج",
      description:
        lang === "en"
          ? "Heat and UV reduction with premium tint and clear protection."
          : "تقليل الحرارة والأشعة فوق البنفسجية مع تظليل وحماية شفافة.",
      imageSrc: "/SolarWindowTint-icon.avif",
      subservices: [],
    },
    {
      slug: "detailing-coating",
      title: lang === "en" ? "Detailing & Coating" : "تفصيل وسيراميك",
      description:
        lang === "en"
          ? "Paint correction, deep cleaning, and advanced coating systems."
          : "تصحيح طلاء وتنظيف عميق وطبقات حماية متقدمة.",
      imageSrc: "/Exteriordetailing-icon.avif",
      subservices: [],
    },
    {
      slug: "paint-repair-services",
      title: lang === "en" ? "Paint & Repair Services" : "خدمات الدهان والإصلاح",
      description:
        lang === "en"
          ? "Smart repair and refinishing solutions with precise color matching."
          : "إصلاحات ذكية ودهان مع مطابقة لون دقيقة.",
      imageSrc: "/paintessdentrepair-icon.avif",
      subservices: [],
    },
    {
      slug: "car-wash-services",
      title: lang === "en" ? "Car Wash Services" : "خدمات غسيل السيارات",
      description:
        lang === "en"
          ? "Premium hand wash, foam wash, and safe interior sanitization."
          : "غسيل يدوي ممتاز وغسيل رغوي وتعقيم داخلي آمن.",
      imageSrc: "/carwash-icon.avif",
      subservices: [],
    },
    {
      slug: "windshield-services",
      title: lang === "en" ? "Windshield Services" : "خدمات الزجاج الأمامي",
      description:
        lang === "en"
          ? "Repair, protection and replacement for maximum visibility."
          : "إصلاح وحماية واستبدال لضمان أفضل رؤية.",
      imageSrc: "/windsheild-icon.avif",
      subservices: [],
    },
  ];

  return (
    <main className={styles.servicesPage} dir={dir} data-services-root>
      {/* HERO */}
      <section className={styles.servicesHero} data-services-hero>
        <div className={styles.heroOverlay} />
        <div className={styles.heroSpotlights} aria-hidden="true" />
        <div className={styles.heroContent} data-services-hero-content>
          <div className={styles.heroKicker}>{labels.kicker}</div>
          <h1 className={styles.heroTitle}>{labels.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{labels.heroSubtitle}</p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className={styles.packagesSection} data-services-packages>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{labels.packagesTitle}</h2>

          <div className={styles.packagesGrid}>
            {packages.map((pkg, pkgIndex) => (
              <article
                key={`${pkg.title}-${pkgIndex}`}
                className={`${styles.packageCard} ${pkg.badge ? styles.featured : ""}`}
                data-package-card
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

                <Link href="/contact" prefetch={false} className={styles.packageButton}>
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
          <h2 className={styles.sectionTitle}>{labels.viewAllTitle}</h2>

          <div className={styles.servicesGrid} aria-live="polite">
            {serviceGroups.map((svc) => (
              <article key={svc.slug} className={styles.serviceCard} data-service-card>
                <div className={styles.serviceMedia}>
                  {/* Client component is allowed here without turning the whole page into client */}
                  <BeforeAfterSlider
                    beforeSrc={`/proof/${svc.slug}-before.avif`}
                    afterSrc={`/proof/${svc.slug}-after.avif`}
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

      {/* GSAP/ScrollTrigger moved to a tiny lazy client island */}
      <ServicesEnhancements />
    </main>
  );
}
