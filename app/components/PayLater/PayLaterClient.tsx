// app/[lang]/paylater/PayLaterClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PayLater.module.css";
import { useI18n } from "@/app/lib/i18n";

type PayLaterClientProps = {
  asPage?: boolean;
  headingLevel?: 1 | 2;
};

export default function PayLaterClient({
  asPage = false,
  headingLevel = asPage ? 1 : 2,
}: PayLaterClientProps) {
  const { language } = useI18n() as any;
  const lang = language === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const HeadingTag = headingLevel === 1 ? "h1" : "h2";

  const copy =
    lang === "ar"
      ? {
          kicker: "الآن متاح لدى روديو درايف",
          title: "PayLater",
          subtitle: "ادفع على دفعات ميسّرة",
          descTop:
            "احمِ سيارتك اليوم بدون دفع كامل المبلغ مقدمًا — خيارات دفع مرنة تناسبك.",
          bullets: [
            "PPF حماية الطلاء",
            "طلاء سيراميك + نانو حماية",
            "تظليل / سولار فيلم",
            "تفصيل فاخر وحماية كاملة",
          ],
          foot:
            "حسب موافقة PayLater والشروط. تواصل معنا لمعرفة التفاصيل وتأكيد الخدمة المناسبة لسيارتك.",
          cta: "تفاصيل PayLater",
        }
      : {
          kicker: "Now available at Rodeo Drive",
          title: "PayLater",
          subtitle: "Pay in easy installments",
          descTop:
            "Protect your car today without paying the full amount upfront — flexible payments that fit your plan.",
          bullets: [
            "Paint Protection Film (PPF)",
            "Ceramic Coating + Nano Protection",
            "Window Tint / Solar Film",
            "Premium Detailing & Protection",
          ],
          foot:
            "Subject to PayLater approval & terms. Contact us for details and the best recommendation for your vehicle.",
          cta: "PayLater details",
        };

  const content = (
      <section
        className={styles.hero}
        aria-label={lang === "ar" ? "PayLater لدى روديو درايف" : "PayLater at Rodeo Drive"}
      >
        {/* Background image */}
        <div className={styles.media} aria-hidden="true">
          <Image
            src="/paylater.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.bg}
          />
          <div className={styles.overlay} />
        </div>

        {/* Text inside image */}
        <div className={styles.inner}>
          {/* Top cluster */}
          <div className={styles.top}>
            <p className={styles.kicker}>{copy.kicker}</p>

            <HeadingTag className={styles.titleRow}>
              <span className={styles.title}>{copy.title}</span>
              <span className={styles.subtitle}>{copy.subtitle}</span>
            </HeadingTag>

            <p className={styles.descTop}>{copy.descTop}</p>
          </div>

          {/* Bottom cluster */}
          <div className={styles.bottom}>
            <ul className={styles.list}>
              {copy.bullets.map((x) => (
                <li key={x} className={styles.item}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.itemText}>{x}</span>
                </li>
              ))}
            </ul>

            <p className={styles.foot}>{copy.foot}</p>

            <Link className={styles.cta} href={`/${lang}/paylater`}>
              {copy.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
  );

  if (!asPage) {
    return (
      <section className={styles.page} dir={dir} aria-label="PayLater section">
        {content}
      </section>
    );
  }

  return (
    <main className={styles.page} dir={dir}>
      {content}
    </main>
  );
}
