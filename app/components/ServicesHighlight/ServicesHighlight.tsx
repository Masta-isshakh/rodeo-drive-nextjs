"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/app/lib/i18n";
import styles from "./ServicesHighlightHome.module.css";

type Card = {
  key: string;
  slug: string;

  // icon (small)
  img: string;

  // ✅ NEW: large background image for split card
  bg: string;

  titleEN: string;
  titleAR: string;
  descEN: string;
  descAR: string;
};

const CARDS: Card[] = [
  {
    key: "ppf",
    slug: "full-protection-ppf",
    img: "/ppf-icon.avif",
    bg: "/ppf.avif", // ✅ use your real big image
    titleEN: "PPF Protection",
    titleAR: "حماية PPF",
    descEN: "Shield paint from chips, sand abrasion, and daily wear — built for Doha roads.",
    descAR: "حماية الطلاء من ضربات الحصى وخدوش الرمال والاستخدام اليومي — مناسبة لطرق الدوحة.",
  },
  {
    key: "tint",
    slug: "window-solar-film",
    img: "/SolarWindowTint-icon.avif",
    bg: "/solar.avif",
    titleEN: "Nano-Ceramic Tint",
    titleAR: "تظليل نانو سيراميك",
    descEN: "Reduce heat and UV for comfort, clarity, and a premium look.",
    descAR: "تقليل الحرارة وUV لراحة أفضل ورؤية أوضح ومظهر فاخر.",
  },
  {
    key: "detailing",
    slug: "detailing-coating",
    img: "/Exteriordetailing-icon.avif",
    bg: "/polish2.avif",
    titleEN: "Detailing & Coating",
    titleAR: "تفصيل + نانو",
    descEN: "Restore gloss, correct paint, and lock in protection with nano coating.",
    descAR: "استعادة اللمعة وتصحيح الطلاء وحمايته بطبقة نانو.",
  },
  {
    key: "windshield",
    slug: "windshield-services",
    img: "/windsheild-icon.avif",
    bg: "/windshield-clear.avif", // ✅ put a real image in /public (or change to existing)
    titleEN: "Windshield Protection",
    titleAR: "حماية الزجاج",
    descEN: "Reduce chips and improve durability with premium windshield protection.",
    descAR: "تقليل ضربات الحصى وزيادة المتانة بحماية زجاج فاخرة.",
  },
];

export default function ServicesHighlight() {
  const { language } = useI18n() as any;
  const lang = String(language || "en").toLowerCase().startsWith("ar") ? "ar" : "en";

  const ui =
    lang === "ar"
      ? {
          kicker: "الخدمات الأساسية لحماية سيارتك في قطر",
          title: "خدمات حماية فاخرة — بمعايير روديو درايف",
          subtitle:
            "اختر الخدمة المناسبة، وشاهد التفاصيل أو اطلع على دليل الحماية لمعرفة الفوائد وخطوات التنفيذ.",
          ctaServices: "عرض كل الخدمات",
          ctaGuide: "دليل الحماية",
          ctaBlog: "مركز التوعية",
          ctaAreas: "مناطق الخدمة",
          ctaDetails: "عرض التفاصيل",
          badge: "Premium Finish",
        }
      : {
          kicker: "Essential protection services for Qatar",
          title: "Premium Protection Services — the Rodeo Drive standard",
          subtitle:
            "Pick a service and view details, or explore the protection guide to understand benefits and process.",
          ctaServices: "View All Services",
          ctaGuide: "Protection Guide",
          ctaBlog: "Education Hub",
          ctaAreas: "Service Areas",
          ctaDetails: "View details",
          badge: "Premium Finish",
        };

  const base = `/${lang}`;

  return (
    <section className={styles.section} aria-label={lang === "ar" ? "خدمات الحماية" : "Protection services"}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <p className={styles.kicker}>{ui.kicker}</p>
          <h2 className={styles.h2}>{ui.title}</h2>
          <p className={styles.subtitle}>{ui.subtitle}</p>

          <div className={styles.ctas}>
            <Link className={styles.btnPrimary} href={`${base}/services`}>
              {ui.ctaServices} <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.btnGhost} href={`${base}/protection-guide`}>
              {ui.ctaGuide} <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.btnGhost} href={`${base}/blog`}>
              {ui.ctaBlog} <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.btnGhost} href={`${base}/service-areas`}>
              {ui.ctaAreas} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <div className={styles.splitStack}>
          {CARDS.map((c, idx) => {
            const reverse = idx % 2 === 1;
            const title = lang === "ar" ? c.titleAR : c.titleEN;
            const desc = lang === "ar" ? c.descAR : c.descEN;

            return (
              <article key={c.key} className={`${styles.splitCard} ${reverse ? styles.reverse : ""}`}>
                {/* IMAGE SIDE */}
                <div className={styles.media}>
                  <Image
                    src={c.bg}
                    alt={title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 980px) 98vw, 49vw"
                    className={styles.bgImg}
                  />
                  <div className={styles.mediaShade} aria-hidden="true" />

                  <div className={styles.mediaBadge} aria-hidden="true">
                    <span className={styles.badgeDot} />
                    <span className={styles.badgeText}>{ui.badge}</span>
                  </div>
                </div>

                {/* TEXT SIDE */}
                <div className={styles.content}>
                  <div className={styles.contentInner}>
                    <div className={styles.topRow}>
                      <div className={styles.icon}>
                        <Image src={c.img} alt="" width={44} height={44} className={styles.iconImg} />
                      </div>
                      <span className={styles.place}>{lang === "ar" ? "الدوحة • قطر" : "Doha • Qatar"}</span>
                    </div>

                    <h3 className={styles.h3}>{title}</h3>
                    <p className={styles.p}>{desc}</p>

                    <div className={styles.actions}>
                      <Link className={styles.primary} href={`${base}/book`}>
                        {lang === "ar" ? "احجز الآن" : "Book Now"} <span aria-hidden="true">→</span>
                      </Link>
                      <Link className={styles.secondary} href={`${base}/services/${c.slug}`}>
                        {ui.ctaDetails} <span aria-hidden="true">→</span>
                      </Link>
                    </div>

                    <div className={styles.trustRow}>
                      <span className={styles.trust}>{lang === "ar" ? "فحص" : "Inspection"}</span>
                      <span className={styles.sep} />
                      <span className={styles.trust}>{lang === "ar" ? "جودة" : "Premium Materials"}</span>
                      <span className={styles.sep} />
                      <span className={styles.trust}>{lang === "ar" ? "فحص نهائي" : "QC Finish"}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
