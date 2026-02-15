// app/[lang]/privacy/page.tsx
import styles from "./privacy.module.css";

type Lang = "en" | "ar";

export default function PrivacyPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const c =
    lang === "ar"
      ? {
          title: "سياسة الخصوصية",
          lead:
            "نحترم خصوصيتك. توضح هذه الصفحة كيفية جمع البيانات واستخدامها وحمايتها عند التواصل أو الحجز.",
          s1: "ما البيانات التي نجمعها؟",
          p1:
            "قد نجمع بيانات التواصل مثل الاسم ورقم الهاتف والبريد الإلكتروني ورسالتك، بالإضافة إلى معلومات المركبة والخدمة المطلوبة عند إرسال نموذج الحجز أو التواصل.",
          s2: "كيف نستخدم البيانات؟",
          list: [
            "للرد على استفساراتك وتأكيد الحجوزات.",
            "لتقديم عرض سعر وتفاصيل الخدمة.",
            "لتحسين جودة الخدمة وتجربة الموقع.",
          ],
          s3: "مشاركة البيانات",
          p3:
            "لا نبيع بياناتك. قد نشارك الحد الأدنى المطلوب مع مزودي خدمات موثوقين فقط لتنفيذ الخدمة (مثل مزود استضافة الموقع).",
          s4: "التواصل",
          p4: "إذا كان لديك أي سؤال حول الخصوصية، تواصل معنا عبر صفحة الاتصال.",
        }
      : {
          title: "Privacy Policy",
          lead:
            "We respect your privacy. This page explains how data is collected, used, and protected when you contact or book.",
          s1: "What data we collect",
          p1:
            "We may collect contact details (name, phone, email, message) and vehicle/service details when you submit a booking or contact form.",
          s2: "How we use data",
          list: [
            "To respond to inquiries and confirm bookings.",
            "To provide quotes and service details.",
            "To improve service quality and website experience.",
          ],
          s3: "Data sharing",
          p3:
            "We do not sell your data. We may share the minimum required with trusted providers only to operate the website and deliver services.",
          s4: "Contact",
          p4: "If you have privacy questions, contact us through the Contact page.",
        };

  return (
    <main className={styles.wrap} dir={dir}>
      <div className={styles.container}>
        <h1 className={styles.h1}>{c.title}</h1>
        <p className={styles.lead}>{c.lead}</p>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s1}</h2>
          <p className={styles.p}>{c.p1}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s2}</h2>
          <ul className={styles.ul}>
            {c.list.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s3}</h2>
          <p className={styles.p}>{c.p3}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s4}</h2>
          <p className={styles.p}>{c.p4}</p>
        </section>
      </div>
    </main>
  );
}
