import type { Metadata } from "next";
import styles from "./cookiePolicy.module.css";
import { buildPageMetadata, type Lang } from "@/app/seo";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/cookie-policy",
    titleEN: "Cookie Policy",
    titleAR: "سياسة ملفات تعريف الارتباط",
    descEN:
      "Learn how Rodeo Drive uses cookies for essential functionality, analytics, and marketing performance measurement.",
    descAR:
      "اعرف كيف يستخدم روديو درايف ملفات تعريف الارتباط للوظائف الأساسية والتحليلات وقياس أداء التسويق.",
    ogImagePath: "/logo.avif",
  });
}

export default function CookiePolicyPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const content =
    lang === "ar"
      ? {
          title: "سياسة ملفات تعريف الارتباط",
          intro:
            "توضح هذه الصفحة كيفية استخدامنا لملفات تعريف الارتباط لتحسين تجربتك، ورفع الأداء، وقياس نتائج التسويق.",
          h1: "ما هي ملفات تعريف الارتباط؟",
          p1:
            "ملفات تعريف الارتباط هي ملفات صغيرة يتم حفظها على جهازك لمساعدة الموقع على العمل بشكل صحيح وتذكر التفضيلات وتحسين الأداء.",
          h2: "كيف نستخدمها؟",
          list: [
            "ضرورية: لتشغيل الموقع والأمان والوظائف الأساسية.",
            "تحليلات (اختيارية): لفهم زيارات الصفحات وتحسين تجربة المستخدم.",
            "تسويق (اختيارية): لقياس أداء الحملات وتحسين الرسائل التسويقية.",
          ],
          h3: "إدارة التفضيلات",
          p2:
            "يمكنك تغيير تفضيلاتك في أي وقت عبر مسح بيانات الموقع من إعدادات المتصفح ثم زيارة الموقع مرة أخرى.",
        }
      : {
          title: "Cookie Policy",
          intro:
            "This page explains how we use cookies to improve your experience, increase performance, and measure marketing results.",
          h1: "What are cookies?",
          p1:
            "Cookies are small files stored on your device to help websites work correctly, remember preferences, and improve performance.",
          h2: "How we use them",
          list: [
            "Strictly necessary: required for security and core site functionality.",
            "Analytics (optional): helps us understand visits and improve user experience.",
            "Marketing (optional): helps measure campaign performance and improve messaging.",
          ],
          h3: "Managing preferences",
          p2:
            "You can change your preferences anytime by clearing site data in your browser settings, then revisiting the site.",
        };

  return (
    <main className={styles.wrap} dir={dir}>
      <div className={styles.container}>
        <h1 className={styles.h1}>{content.title}</h1>
        <p className={styles.lead}>{content.intro}</p>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h1}</h2>
          <p className={styles.p}>{content.p1}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h2}</h2>
          <ul className={styles.ul}>
            {content.list.map((x) => (
              <li key={x} className={styles.li}>
                {x}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h3}</h2>
          <p className={styles.p}>{content.p2}</p>
        </section>
      </div>
    </main>
  );
}
