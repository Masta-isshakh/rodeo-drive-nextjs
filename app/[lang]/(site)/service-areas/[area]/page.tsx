import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_AREAS, getServiceArea } from "@/app/content/serviceAreas";
import { buildPageMetadata, type Lang } from "@/app/seo";
import styles from "./area.module.css";

type Params = {
  lang: Lang;
  area: string;
};

export function generateStaticParams() {
  return ["en", "ar"].flatMap((lang) =>
    SERVICE_AREAS.map((area) => ({
      lang,
      area: area.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const area = getServiceArea(params.area);

  if (!area) {
    return buildPageMetadata({
      lang,
      path: `/service-areas/${params.area}`,
      titleEN: "Service Area",
      titleAR: "منطقة خدمة",
      descEN: "Service area page not found.",
      descAR: "صفحة منطقة الخدمة غير موجودة.",
      ogImagePath: "/city.avif",
    });
  }

  return buildPageMetadata({
    lang,
    path: `/service-areas/${area.slug}`,
    titleEN: `${area.name.en} Car Protection Services`,
    titleAR: `خدمات حماية السيارات في ${area.name.ar}`,
    descEN: area.heroSubtitle.en,
    descAR: area.heroSubtitle.ar,
    ogImagePath: area.heroImage,
  });
}

function labels(lang: Lang) {
  if (lang === "ar") {
    return {
      back: "العودة إلى مناطق الخدمة",
      directions: "الاتجاهات",
      highlights: "ما يميز الخدمة في هذه المنطقة",
      proof: "أعمال واقعية من المنطقة",
      testimonials: "آراء العملاء",
      faqs: "أسئلة شائعة خاصة بالمنطقة",
      book: "احجز موعدك",
      services: "استكشف الخدمات",
      mapHint: "ملاحظة الوصول",
    };
  }

  return {
    back: "Back to service areas",
    directions: "Directions",
    highlights: "Why this area page is useful",
    proof: "Real work proof from this area",
    testimonials: "Customer feedback",
    faqs: "Area-specific FAQs",
    book: "Book appointment",
    services: "Explore services",
    mapHint: "Route note",
  };
}

export default function ServiceAreaDetailPage({ params }: { params: Params }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const ui = labels(lang);
  const area = getServiceArea(params.area);

  if (!area) {
    notFound();
  }

  return (
    <main className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"}>
      <Link href={`/${lang}/service-areas`} className={styles.backLink}>
        ← {ui.back}
      </Link>

      <header className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src={area.heroImage}
            alt={area.heroTitle[lang]}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 1080px"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
        </div>

        <div className={styles.heroBody}>
          <h1 className={styles.h1}>{area.heroTitle[lang]}</h1>
          <p className={styles.lead}>{area.heroSubtitle[lang]}</p>

          <div className={styles.heroActions}>
            <a href={area.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              {ui.directions}
            </a>
            <Link href={`/${lang}/book`} className={styles.ghostBtn}>
              {ui.book}
            </Link>
          </div>

          <p className={styles.mapHint}>
            <strong>{ui.mapHint}:</strong> {area.routeHint[lang]}
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>{ui.highlights}</h2>
        <ul className={styles.list}>
          {area.highlights[lang].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>{ui.proof}</h2>
        <div className={styles.gallery}>
          {area.gallery.map((image) => (
            <figure key={image.src} className={styles.figure}>
              <div className={styles.figureMedia}>
                <Image
                  src={image.src}
                  alt={image.alt[lang]}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.figureImage}
                />
              </div>
              <figcaption className={styles.caption}>{image.caption[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>{ui.testimonials}</h2>
        <div className={styles.cards}>
          {area.testimonials.map((item) => (
            <article key={item.source.en} className={styles.card}>
              <p className={styles.quote}>"{item.quote[lang]}"</p>
              <p className={styles.source}>{item.source[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>{ui.faqs}</h2>
        <div className={styles.faqList}>
          {area.faqs.map((faq) => (
            <article key={faq.q.en} className={styles.faqCard}>
              <h3 className={styles.h3}>{faq.q[lang]}</h3>
              <p className={styles.answer}>{faq.a[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className={styles.ctaBar}>
        <Link href={`/${lang}/book`} className={styles.primaryBtn}>
          {ui.book}
        </Link>
        <Link href={`/${lang}/services`} className={styles.ghostBtn}>
          {ui.services}
        </Link>
      </aside>
    </main>
  );
}
