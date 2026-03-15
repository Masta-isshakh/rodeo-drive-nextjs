import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/content/blog";
import { buildPageMetadata, type Lang } from "@/app/seo";
import styles from "./blog.module.css";

function text(lang: Lang) {
  if (lang === "ar") {
    return {
      kicker: "مركز التوعية",
      title: "مدونة الحماية والتفصيل في قطر",
      subtitle:
        "أدلة عملية عن PPF والسيراميك والتظليل والتفصيل لظروف الدوحة وقطر.",
      read: "اقرأ المقال",
      mins: "دقائق قراءة",
      category: "التصنيف",
      ctaBook: "احجز موعدك",
      ctaServices: "تصفح الخدمات",
    };
  }

  return {
    kicker: "Education Hub",
    title: "Qatar Car Protection & Detailing Blog",
    subtitle:
      "Practical guides for PPF, ceramic coating, tint, and detailing in Doha and across Qatar.",
    read: "Read article",
    mins: "min read",
    category: "Category",
    ctaBook: "Book your appointment",
    ctaServices: "Explore services",
  };
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/blog",
    titleEN: "Blog: PPF, Ceramic, Tint and Detailing Guides",
    titleAR: "المدونة: أدلة PPF والسيراميك والتظليل والتفصيل",
    descEN:
      "Learn how to choose PPF, ceramic coating, nano-ceramic tint, and detailing services in Doha with practical, Qatar-specific buyer guides.",
    descAR:
      "تعرّف على اختيار PPF والسيراميك وتظليل النانو وخدمات التفصيل في الدوحة عبر أدلة عملية مخصصة لقطر.",
    ogImagePath: "/hero-poster.avif",
  });
}

export default function BlogPage({ params }: { params: { lang: string } }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const ui = text(lang);

  return (
    <main className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <p className={styles.kicker}>{ui.kicker}</p>
        <h1 className={styles.title}>{ui.title}</h1>
        <p className={styles.subtitle}>{ui.subtitle}</p>

        <div className={styles.heroCtas}>
          <Link href={`/${lang}/book`} className={styles.primaryCta}>
            {ui.ctaBook}
          </Link>
          <Link href={`/${lang}/services`} className={styles.secondaryCta}>
            {ui.ctaServices}
          </Link>
        </div>
      </section>

      <section className={styles.grid}>
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className={styles.card}>
            <p className={styles.meta}>
              {ui.category}: {post.category.toUpperCase()} • {post.readTimeMinutes} {ui.mins}
            </p>
            <h2 className={styles.cardTitle}>{post.title[lang]}</h2>
            <p className={styles.cardDesc}>{post.description[lang]}</p>
            <Link href={`/${lang}/blog/${post.slug}`} className={styles.readMore}>
              {ui.read} →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
