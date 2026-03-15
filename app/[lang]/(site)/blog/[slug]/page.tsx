import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/app/content/blog";
import { buildPageMetadata, type Lang } from "@/app/seo";
import styles from "./post.module.css";

type Params = { lang: Lang; slug: string };

export function generateStaticParams(): Params[] {
  return ["en", "ar"].flatMap((lang) =>
    BLOG_POSTS.map((post) => ({ lang: lang as Lang, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const post = getBlogPost(params.slug);

  if (!post) {
    return buildPageMetadata({
      lang,
      path: `/blog/${params.slug}`,
      titleEN: "Blog Article",
      titleAR: "مقال",
      descEN: "Article not found.",
      descAR: "المقال غير موجود.",
      ogImagePath: "/hero-poster.avif",
    });
  }

  return buildPageMetadata({
    lang,
    path: `/blog/${post.slug}`,
    titleEN: post.title.en,
    titleAR: post.title.ar,
    descEN: post.description.en,
    descAR: post.description.ar,
    ogImagePath: "/hero-poster.avif",
  });
}

function uiText(lang: Lang) {
  if (lang === "ar") {
    return {
      back: "العودة إلى المدونة",
      published: "تاريخ النشر",
      read: "دقائق قراءة",
      book: "احجز فحصك الآن",
      services: "شاهد الخدمات",
      relatedService: "الخدمة المرتبطة",
      relatedReads: "مقالات مرتبطة",
    };
  }

  return {
    back: "Back to blog",
    published: "Published",
    read: "min read",
    book: "Book an inspection",
    services: "View services",
    relatedService: "Related service",
    relatedReads: "Related reads",
  };
}

function relatedServiceHref(lang: Lang, category: string) {
  if (category === "ppf") return `/${lang}/services/full-protection-ppf`;
  if (category === "ceramic") return `/${lang}/services/detailing-coating`;
  if (category === "tint") return `/${lang}/services/window-solar-film`;
  return `/${lang}/services/detailing-coating`;
}

export default function BlogPostPage({ params }: { params: Params }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const ui = uiText(lang);
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter(
    (item) => item.category === post.category && item.slug !== post.slug
  ).slice(0, 3);

  return (
    <main className={styles.page} dir={lang === "ar" ? "rtl" : "ltr"}>
      <Link href={`/${lang}/blog`} className={styles.backLink}>
        ← {ui.back}
      </Link>

      <header className={styles.header}>
        <p className={styles.meta}>
          {ui.published}: {post.publishedAt} • {post.readTimeMinutes} {ui.read}
        </p>
        <h1 className={styles.title}>{post.title[lang]}</h1>
        <p className={styles.description}>{post.description[lang]}</p>
      </header>

      <article className={styles.article}>
        {post.sections.map((section) => (
          <section key={section.heading.en} className={styles.section}>
            <h2 className={styles.h2}>{section.heading[lang]}</h2>
            {section.paragraphs[lang].map((paragraph, idx) => (
              <p key={idx} className={styles.p}>
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className={styles.ul}>
                {section.bullets[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>

      <aside className={styles.ctaBar}>
        {relatedPosts.length > 0 ? (
          <div className={styles.relatedBlock}>
            <p className={styles.relatedTitle}>{ui.relatedReads}</p>
            <div className={styles.relatedLinks}>
              {relatedPosts.map((item) => (
                <Link key={item.slug} href={`/${lang}/blog/${item.slug}`} className={styles.inlineLink}>
                  {item.title[lang]}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <Link href={relatedServiceHref(lang, post.category)} className={styles.ctaSecondary}>
          {ui.relatedService}
        </Link>
        <Link href={`/${lang}/book`} className={styles.ctaPrimary}>
          {ui.book}
        </Link>
        <Link href={`/${lang}/services`} className={styles.ctaSecondary}>
          {ui.services}
        </Link>
      </aside>
    </main>
  );
}
