// app/[lang]/paylater/PayLaterClient.tsx
"use client";

import Image from "next/image";
import styles from "./PayLater.module.css";
import { useI18n } from "@/app/lib/i18n";

export default function PayLaterClient() {
  const { language } = useI18n() as any;
  const lang = language === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

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
        };

  return (
    <main className={styles.page} dir={dir}>
      <section className={styles.hero} aria-label="PayLater">
        {/* Background image */}
        <div className={styles.media} aria-hidden="true">
          {/* Put your image at: /public/paylater/paylater-bg.avif */}
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

            <h1 className={styles.titleRow}>
              <span className={styles.title}>{copy.title}</span>
              <span className={styles.subtitle}>{copy.subtitle}</span>
            </h1>

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
          </div>
        </div>
      </section>
    </main>
  );
}
