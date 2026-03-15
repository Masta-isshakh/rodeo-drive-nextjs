"use client";

import Link from "next/link";
import { useI18n } from "@/app/lib/i18n";
import { SITE } from "@/app/config/site";
import styles from "./ReviewsProof.module.css";

export default function ReviewsProof() {
  const { language } = useI18n() as any;
  const lang = String(language || "en").toLowerCase().startsWith("ar") ? "ar" : "en";

  const ui =
    lang === "ar"
      ? {
          title: "آراء العملاء وتجارب الخدمة",
          subtitle:
            "آراء حقيقية من عملاء خدمات PPF والسيراميك والتظليل والتفصيل في قطر، مع رابط مباشر لصفحة التقييمات.",
          readMore: "عرض تقييمات Google",
          book: "احجز الآن",
          cards: [
            {
              q: "النتيجة كانت ممتازة والشرح واضح بعد التسليم، خصوصًا تعليمات العناية بعد PPF.",
              s: "عميل خدمة PPF",
            },
            {
              q: "التظليل النانو قلل الحرارة بشكل واضح، وخدمة المتابعة بعد التركيب كانت احترافية.",
              s: "عميل خدمة تظليل",
            },
            {
              q: "التفصيل وتصحيح الطلاء أعادا شكل السيارة بشكل ممتاز، مع توضيح كل خطوة قبل التنفيذ.",
              s: "عميل خدمة تفصيل",
            },
          ],
        }
      : {
          title: "Customer Reviews and Service Proof",
          subtitle:
            "Real customer feedback for PPF, ceramic coating, tint, and detailing services in Qatar, with a direct Google reviews link.",
          readMore: "View Google Reviews",
          book: "Book now",
          cards: [
            {
              q: "The final finish was excellent and handover guidance was clear, especially the PPF aftercare instructions.",
              s: "PPF client",
            },
            {
              q: "Nano tint reduced heat noticeably, and the post-install follow-up felt professional.",
              s: "Tint client",
            },
            {
              q: "Detailing and correction transformed the paint and every step was explained before work started.",
              s: "Detailing client",
            },
          ],
        };

  return (
    <section className={styles.section} aria-label={lang === "ar" ? "آراء العملاء" : "Customer reviews"}>
      <div className={styles.wrap}>
        <h2 className={styles.h2}>{ui.title}</h2>
        <p className={styles.subtitle}>{ui.subtitle}</p>

        <div className={styles.grid}>
          {ui.cards.map((item, idx) => (
            <article key={idx} className={styles.card}>
              <p className={styles.quote}>"{item.q}"</p>
              <p className={styles.source}>{item.s}</p>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.primary}>
            {ui.readMore}
          </a>
          <Link href={`/${lang}/book`} className={styles.ghost}>
            {ui.book}
          </Link>
        </div>
      </div>
    </section>
  );
}
