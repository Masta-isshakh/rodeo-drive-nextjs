import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREAS } from "@/app/content/serviceAreas";
import { buildPageMetadata, type Lang } from "@/app/seo";
import styles from "./serviceAreas.module.css";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/service-areas",
    titleEN: "Service Areas: Doha and Lusail",
    titleAR: "مناطق الخدمة: الدوحة ولوسيل",
    descEN:
      "Explore Rodeo Drive service coverage pages for Doha and Lusail with area-specific guidance, proof photos, and booking routes.",
    descAR:
      "استكشف صفحات تغطية الخدمة لروديو درايف في الدوحة ولوسيل مع أدلة خاصة بكل منطقة وصور إثبات ومسارات الحجز.",
    ogImagePath: "/city.avif",
  });
}

function pageText(lang: Lang) {
  if (lang === "ar") {
    return {
      title: "مناطق الخدمة في قطر",
      subtitle:
        "صفحات تغطية حقيقية لكل منطقة تشمل ملاحظات الوصول، صور أعمال، أسئلة شائعة، وتجربة العميل.",
      read: "عرض صفحة المنطقة",
      cta: "احجز الآن",
    };
  }

  return {
    title: "Qatar Service Areas",
    subtitle:
      "Real location coverage pages with route notes, work-proof images, area FAQs, and booking context.",
    read: "View area page",
    cta: "Book now",
  };
}

export default function ServiceAreasIndexPage({ params }: { params: { lang: string } }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const ui = pageText(lang);

  return (
    <main className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <h1 className={styles.h1}>{ui.title}</h1>
        <p className={styles.subtitle}>{ui.subtitle}</p>
      </header>

      <section className={styles.grid}>
        {SERVICE_AREAS.map((area) => (
          <article key={area.slug} className={styles.card}>
            <h2 className={styles.h2}>{area.name[lang]}</h2>
            <p className={styles.lead}>{area.heroSubtitle[lang]}</p>
            <div className={styles.actions}>
              <Link href={`/${lang}/service-areas/${area.slug}`} className={styles.linkPrimary}>
                {ui.read} →
              </Link>
              <Link href={`/${lang}/book`} className={styles.linkGhost}>
                {ui.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
