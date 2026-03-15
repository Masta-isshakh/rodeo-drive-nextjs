"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import styles from "./serviceRoute.module.css";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider/BeforeAfterSlider";
import { SITE } from "@/app/config/site";
import type { Service, Subservice, Lang as CatalogLang } from "@/app/content/catalog2";
import { useI18n } from "@/app/lib/i18n";

const ServiceRouteMotion = dynamic(() => import("./ServiceMotion"), {
  ssr: false,
  loading: () => null,
});

type Lang = "en" | "ar";

type ServiceInsight = {
  pricing: Record<Lang, string>;
  compare: Record<Lang, string>;
  blogHref: string;
  faqs: Array<{ q: Record<Lang, string>; a: Record<Lang, string> }>;
};

const SERVICE_INSIGHTS: Record<string, ServiceInsight> = {
  "full-protection-ppf": {
    pricing: {
      en: "Typical pricing depends on coverage (front-end, partial, or full-body) and vehicle size. Final quote is confirmed after inspection.",
      ar: "السعر يختلف حسب مستوى التغطية (أمامي أو جزئي أو كامل) وحجم السيارة. السعر النهائي يتأكد بعد الفحص.",
    },
    compare: {
      en: "If your goal is chip resistance, prioritize PPF on impact zones first, then expand to full-body for maximum long-term paint protection.",
      ar: "إذا كان هدفك مقاومة ضربات الحصى، ابدأ بـ PPF في مناطق الصدمات ثم انتقل للتغطية الكاملة لأفضل حماية طويلة المدى.",
    },
    blogHref: "/blog/full-body-vs-front-end-ppf-qatar",
    faqs: [
      {
        q: {
          en: "Should I choose front-end or full-body PPF?",
          ar: "هل أختار PPF أمامي أم كامل؟",
        },
        a: {
          en: "Front-end is usually enough for daily city driving. Full-body is ideal for premium paint, frequent highway use, or long-term ownership.",
          ar: "الـ PPF الأمامي غالبًا مناسب للاستخدام اليومي داخل المدينة. أما الكامل فهو أفضل للألوان الخاصة والطرق السريعة والملكية طويلة المدى.",
        },
      },
      {
        q: {
          en: "How should I wash a car after PPF installation?",
          ar: "كيف أغسل السيارة بعد تركيب PPF؟",
        },
        a: {
          en: "Follow curing guidance first, then use pH-neutral shampoo and avoid abrasive brushes or aggressive chemicals.",
          ar: "اتبع تعليمات التثبيت أولًا، ثم استخدم شامبو متعادل الحموضة وتجنب الفُرش الخشنة والمواد الكيميائية القوية.",
        },
      },
      {
        q: {
          en: "Can PPF and ceramic coating be combined?",
          ar: "هل يمكن الجمع بين PPF والسيراميك؟",
        },
        a: {
          en: "Yes. Many owners protect impact zones with PPF and apply ceramic coating on the remaining painted panels.",
          ar: "نعم. كثير من الملاك يحمون مناطق الصدمات بـ PPF ثم يطبقون السيراميك على باقي أجزاء الطلاء.",
        },
      },
    ],
  },
  "detailing-coating": {
    pricing: {
      en: "Detailing and coating pricing depends on paint condition, correction stages, and coating type. We provide a scope-based estimate after assessment.",
      ar: "سعر التفصيل والطلاء يعتمد على حالة الطلاء وعدد مراحل التصحيح ونوع الحماية. نقدم تقديرًا دقيقًا حسب نطاق العمل بعد الفحص.",
    },
    compare: {
      en: "Ceramic coating improves gloss and washability, while paint correction addresses swirl marks and haze before coating is applied.",
      ar: "السيراميك يحسن اللمعة وسهولة الغسيل، بينما تصحيح الطلاء يعالج الخدوش الدائرية والضبابية قبل تطبيق الحماية.",
    },
    blogHref: "/blog/does-ceramic-replace-ppf",
    faqs: [
      {
        q: {
          en: "Does ceramic coating remove scratches?",
          ar: "هل السيراميك يزيل الخدوش؟",
        },
        a: {
          en: "No. Scratch reduction comes from paint correction. Ceramic coating protects and preserves the corrected finish.",
          ar: "لا. تقليل الخدوش يأتي من تصحيح الطلاء، بينما السيراميك يحافظ على النتيجة ويحميها.",
        },
      },
      {
        q: {
          en: "How long does a detailing and coating session take?",
          ar: "كم يستغرق التفصيل مع الحماية؟",
        },
        a: {
          en: "Timeline varies by condition and scope. We confirm a realistic schedule after inspection.",
          ar: "المدة تختلف حسب الحالة والنطاق، ويتم تأكيد الجدول الواقعي بعد الفحص.",
        },
      },
      {
        q: {
          en: "Can I combine coating with PPF?",
          ar: "هل يمكن الجمع بين السيراميك وPPF؟",
        },
        a: {
          en: "Yes. It is common to apply coating alongside PPF strategy for complete protection and easier maintenance.",
          ar: "نعم. من الشائع دمج السيراميك مع خطة PPF للحصول على حماية شاملة وصيانة أسهل.",
        },
      },
    ],
  },
  "window-solar-film": {
    pricing: {
      en: "Tint pricing is based on vehicle size and selected film series. We recommend a legal and performance-balanced option before booking.",
      ar: "سعر التظليل يعتمد على حجم السيارة وفئة الفيلم المختارة. نوصي بخيار متوازن بين الأداء والالتزام بالنظام قبل الحجز.",
    },
    compare: {
      en: "Choose tint by real comfort outcomes: heat control, glare reduction, and clear visibility for day and night driving.",
      ar: "اختر التظليل حسب النتيجة العملية: تقليل الحرارة والوهج مع وضوح رؤية ممتاز نهارًا وليلًا.",
    },
    blogHref: "/blog/how-to-choose-nano-ceramic-tint",
    faqs: [
      {
        q: {
          en: "What tint shade should I choose?",
          ar: "ما نسبة التظليل المناسبة؟",
        },
        a: {
          en: "Shade selection should balance privacy, visibility, and local legal compliance. We recommend based on your use case.",
          ar: "اختيار النسبة يجب أن يوازن الخصوصية والرؤية والالتزام بالنظام المحلي. نوصي بالخيار الأنسب حسب استخدامك.",
        },
      },
      {
        q: {
          en: "How can I avoid bubbling or haze?",
          ar: "كيف أتجنب الفقاعات أو الضبابية؟",
        },
        a: {
          en: "Professional glass preparation, controlled installation, and proper curing aftercare are essential for clean tint results.",
          ar: "تحضير الزجاج بشكل احترافي وتركيب متحكم فيه واتباع تعليمات التثبيت عوامل أساسية للحصول على نتيجة نظيفة.",
        },
      },
      {
        q: {
          en: "How soon can I wash windows after tint?",
          ar: "متى يمكن تنظيف الزجاج بعد التظليل؟",
        },
        a: {
          en: "Wait for curing completion and use soft materials only. We provide exact care guidance at delivery.",
          ar: "انتظر اكتمال التثبيت واستخدم أدوات ناعمة فقط. نزوّدك بتعليمات دقيقة عند التسليم.",
        },
      },
    ],
  },
  "windshield-services": {
    pricing: {
      en: "Windshield service pricing depends on damage type, protection option, and vehicle glass profile. Inspection determines the correct scope.",
      ar: "سعر خدمات الزجاج الأمامي يعتمد على نوع الضرر وخيار الحماية ونوع الزجاج. الفحص يحدد نطاق العمل الصحيح.",
    },
    compare: {
      en: "Preventive windshield protection usually costs less over time than repeated chip repairs or replacement in high-mileage driving.",
      ar: "الحماية الوقائية للزجاج غالبًا أقل تكلفة على المدى الطويل مقارنة بإصلاحات متكررة أو استبدال كامل عند القيادة الكثيفة.",
    },
    blogHref: "/blog/common-tint-mistakes-bubbling-hazing",
    faqs: [
      {
        q: {
          en: "Can small chips become large cracks?",
          ar: "هل يمكن أن تتحول الضربة الصغيرة إلى كسر كبير؟",
        },
        a: {
          en: "Yes, especially with heat shifts and road vibration. Early action reduces the chance of full replacement.",
          ar: "نعم، خصوصًا مع تغيّر الحرارة واهتزاز الطريق. التدخل المبكر يقلل احتمال الاستبدال الكامل.",
        },
      },
      {
        q: {
          en: "Is windshield protection suitable for daily highways?",
          ar: "هل حماية الزجاج مناسبة للقيادة اليومية على الطرق السريعة؟",
        },
        a: {
          en: "It is designed exactly for high-impact driving patterns where debris and stone chips are frequent.",
          ar: "هي مصممة أساسًا لأسلوب القيادة عالي التعرض للصدمات حيث تتكرر ضربات الحصى والشوائب.",
        },
      },
      {
        q: {
          en: "How do I care for protected windshield glass?",
          ar: "كيف أعتني بالزجاج بعد الحماية؟",
        },
        a: {
          en: "Use safe glass cleaning methods and avoid aggressive blades or chemicals during the curing phase.",
          ar: "استخدم تنظيفًا آمنًا للزجاج وتجنب الشفرات أو المواد القوية خلال فترة التثبيت.",
        },
      },
    ],
  },
};

function getText<T>(obj: Record<CatalogLang, T>, lang: CatalogLang): T {
  return obj?.[lang] ?? obj?.en;
}

export default function ServiceRouteClient({
  slugs,
  service,
  sub,
}: {
  slugs: string[];
  service: Service | null;
  sub: Subservice | null;
}) {
  const i18n = useI18n() as any;

  // ✅ React to header language button
  const [runtimeLang, setRuntimeLang] = useState<Lang>("en");

  useEffect(() => {
    const fromI18n =
      i18n?.lang ?? i18n?.locale ?? i18n?.language ?? i18n?.currentLang ?? "";
    const fromHtml = typeof document !== "undefined" ? document.documentElement.lang : "";
    const guess = String(fromI18n || fromHtml || "en").toLowerCase();
    setRuntimeLang(guess.startsWith("ar") ? "ar" : "en");
  }, [i18n?.lang, i18n?.locale, i18n?.language, i18n?.currentLang, i18n?.dir]);

  const lang: CatalogLang = runtimeLang === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const serviceSlug = slugs?.[0];
  const subSlug = slugs?.[1];
  const prefix = `/${lang}`;

  const baseServices = `${prefix}/services`;
  const baseContact = `${prefix}/contact`;
  const baseBook = `${prefix}/book`;
  const baseHome = `${prefix}`;

  const motionKey = `${lang}|${slugs.join("/") || "root"}`;
  const serviceInsight = serviceSlug ? SERVICE_INSIGHTS[serviceSlug] ?? null : null;

  const ui = useMemo(() => {
    const isAr = lang === "ar";
    return {
      notFoundTitle: isAr ? "الصفحة غير موجودة" : "Page not found",
      notFoundDesc: isAr
        ? "الصفحة المطلوبة غير موجودة أو تم نقلها."
        : "The requested service page does not exist or may have been moved.",
      backToServices: isAr ? "العودة للخدمات" : "Back to Services",
      contactUs: isAr ? "تواصل معنا" : "Contact Us",
      home: isAr ? "الرئيسية" : "Home",
      bookNow: isAr ? "احجز الآن" : "Book Now",
      whatsapp: isAr ? "واتساب" : "WhatsApp",
      call: isAr ? "اتصال" : "Call",
      subservices: isAr ? "الخدمات الفرعية" : "Subservices",
      viewDetails: isAr ? "عرض التفاصيل" : "View details",
      backToService: isAr ? "العودة للخدمة" : "Back to Service",
      services: isAr ? "الخدمات" : "Services",
      bestFor: isAr ? "مناسب لـ" : "Best for",
      specifications: isAr ? "المواصفات" : "Specifications",
      included: isAr ? "يشمل" : "What’s included",
      aftercare: isAr ? "بعد الخدمة" : "Aftercare",
      process: isAr ? "العملية" : "Our process",
      faqs: isAr ? "الأسئلة الشائعة" : "FAQs",
      readyToStart: isAr ? "جاهز للبدء؟" : "Ready to start?",
      sendPhotos: isAr
        ? "أرسل صورًا عبر واتساب للحصول على عرض سعر سريع."
        : "Send photos on WhatsApp for a fast quote.",
      getQuote: isAr ? "احصل على عرض سعر" : "Get a Quote",
      notFoundHintServiceMissing: isAr ? "الخدمة غير موجودة." : "Service not found.",
      notFoundHintSubMissing: isAr ? "الخدمة الفرعية غير موجودة." : "Subservice not found.",
      timeline: isAr ? "المدة" : "Timeline",
      warranty: isAr ? "الضمان" : "Warranty",
      location: isAr ? "الموقع" : "Location",
      doha: isAr ? "الدوحة" : "Doha",
    };
  }, [lang]);

  // ---------------------------
  // 404: no service slug
  // ---------------------------
  if (!serviceSlug) {
    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />
        <div className={styles.container}>
          <div className={styles.card} role="status" aria-live="polite">
            <div className={styles.badge}>404</div>
            <h1 className={styles.h1}>{ui.notFoundTitle}</h1>
            <p className={styles.muted}>{ui.notFoundDesc}</p>

            <div className={styles.actions}>
              <Link className={styles.btnPrimary} href={baseServices}>
                {ui.backToServices}
              </Link>
              <Link className={styles.btnGhost} href={baseContact}>
                {ui.contactUs}
              </Link>
              <Link className={styles.btnGhost} href={baseHome}>
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ---------------------------
  // 404: service not found
  // ---------------------------
  if (!service) {
    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />
        <div className={styles.container}>
          <div className={styles.card} role="status" aria-live="polite">
            <div className={styles.badge}>404</div>
            <h1 className={styles.h1}>{ui.notFoundTitle}</h1>
            <p className={styles.muted}>{ui.notFoundHintServiceMissing}</p>

            <div className={styles.actions}>
              <Link className={styles.btnPrimary} href={baseServices}>
                {ui.backToServices}
              </Link>
              <Link className={styles.btnGhost} href={baseHome}>
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ===========================
  // SERVICE PAGE (no subSlug)
  // ===========================
  if (!subSlug) {
    const title = getText(service.title, lang);
    const subtitle = getText(service.subtitle, lang);
    const overview = getText(service.overview, lang) ?? [];

    const proofKey = service.slug.replace(/\//g, "-");
    const beforeSrc = `/proof/${proofKey}-before.avif`;
    const afterSrc = `/proof/${proofKey}-after.avif`;

    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />

        {/* HERO */}
        <header className={styles.hero} data-sr-reveal>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.container}>
            <Link
              href={baseServices}
              className={styles.backArrow}
              aria-label={ui.backToServices}
              data-sr-reveal-item
            >
              <span className={styles.backIcon} aria-hidden="true">
                {lang === "ar" ? "→" : "←"}
              </span>
              <span className={styles.backText}>{ui.backToServices}</span>
            </Link>

            <div data-sr-reveal-item>
              <h1 className={styles.h1}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>

              <div className={styles.ctaRow}>
                <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href={baseBook}>
                  {ui.bookNow}
                </Link>
                <a
                  className={`${styles.btnGhost} ${styles.ctaBtn}`}
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.whatsapp}
                </a>
                <a className={`${styles.btnGhost} ${styles.ctaBtn}`} href={`tel:${SITE.phoneTel}`}>
                  {ui.call}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* OVERVIEW + SLIDER */}
        <section className={styles.section} data-sr-reveal>
          <div className={styles.container}>
            <div className={styles.split}>
              <div className={styles.textCol}>
                {overview.map((p, idx) => (
                  <p key={idx} className={styles.paragraph} data-sr-reveal-item>
                    {p}
                  </p>
                ))}
              </div>

              <aside className={styles.mediaCard} data-sr-reveal-item>
                <div className={styles.sliderWrap}>
                  <BeforeAfterSlider
                    beforeSrc={beforeSrc}
                    afterSrc={afterSrc}
                    alt={`${title} before/after`}
                    height={320}
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* SUBSERVICES */}
        {serviceInsight ? (
          <section className={styles.section} data-sr-reveal>
            <div className={styles.container}>
              <div className={styles.sectionHeader} data-sr-reveal-item>
                <h2 className={styles.h2}>{lang === "ar" ? "دليل القرار" : "Buyer Guidance"}</h2>
              </div>

              <div className={styles.paragraph} data-sr-reveal-item>
                {serviceInsight.compare[lang]}
              </div>
              <div className={styles.paragraph} data-sr-reveal-item>
                {serviceInsight.pricing[lang]}
              </div>

              <p className={styles.paragraph} data-sr-reveal-item>
                <Link href={`/${lang}${serviceInsight.blogHref}`} className={styles.cardBtn}>
                  {lang === "ar" ? "اقرأ الدليل الكامل" : "Read the full guide"}
                </Link>
              </p>

              <div className={styles.sectionHeader} data-sr-reveal-item>
                <h2 className={styles.h2}>{ui.faqs}</h2>
              </div>

              <div className={styles.grid}>
                {serviceInsight.faqs.map((faq) => (
                  <article key={faq.q.en} className={styles.card} data-sr-reveal-item>
                    <div className={styles.cardBody}>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.h3}>{faq.q[lang]}</h3>
                        <p className={styles.cardText}>{faq.a[lang]}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* SUBSERVICES */}
        <section className={styles.sectionAlt} data-sr-reveal>
          <div className={styles.container}>
            <div className={styles.sectionHeader} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.subservices}</h2>
            </div>

            <div className={styles.grid}>
              {service.subservices.map((s) => (
                <article key={s.slug} className={styles.card} data-sr-reveal-item>
                  <div className={styles.cardTop}>
                    <Image
                      src={s.heroImage || "/services/placeholder.avif"}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      className={styles.cardImg}
                      priority={false}
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.h3}>{getText(s.title, lang)}</h3>
                      <p className={styles.cardText}>{getText(s.intro, lang)?.[0]}</p>
                    </div>

                    <Link className={styles.cardBtn} href={`${baseServices}/${service.slug}/${s.slug}`}>
                      {ui.viewDetails}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ===========================
  // SUBSERVICE PAGE
  // ===========================
  if (!sub) {
    return (
      <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
        <ServiceRouteMotion motionKey={motionKey} />
        <div className={styles.container}>
          <div className={styles.card} role="status" aria-live="polite">
            <div className={styles.badge}>404</div>
            <h1 className={styles.h1}>{ui.notFoundTitle}</h1>
            <p className={styles.muted}>{ui.notFoundHintSubMissing}</p>

            <div className={styles.actions}>
              <Link className={styles.btnPrimary} href={`${baseServices}/${service.slug}`}>
                {ui.backToService}
              </Link>
              <Link className={styles.btnGhost} href={baseServices}>
                {ui.services}
              </Link>
              <Link className={styles.btnGhost} href={baseHome}>
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const title = getText(sub.title, lang);
  const intro = getText(sub.intro, lang) ?? [];
  const bestFor = getText(sub.bestFor, lang) ?? [];
  const specs = getText(sub.specs, lang) ?? [];
  const included = getText(sub.included, lang) ?? [];
  const process = getText(sub.process, lang) ?? [];
  const aftercare = getText(sub.aftercare, lang) ?? [];
  const timeline = getText(sub.timeline, lang);

  return (
    <main className={styles.page} dir={dir} data-sr-root key={motionKey}>
      <ServiceRouteMotion motionKey={motionKey} />

      {/* HERO SMALL */}
      <header className={styles.heroSmall} data-sr-reveal>
        <div className={styles.container}>
          <Link
            href={`${baseServices}/${service.slug}`}
            className={styles.backArrow}
            aria-label={ui.backToService}
            data-sr-reveal-item
          >
            <span className={styles.backIcon} aria-hidden="true">
              {lang === "ar" ? "→" : "←"}
            </span>
            <span className={styles.backText}>{ui.backToService}</span>
          </Link>

          <div data-sr-reveal-item>
            <h1 className={styles.h1}>{title}</h1>
            <p className={styles.subtitle}>{intro?.[0]}</p>

            <div className={styles.ctaRow}>
              <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href={baseBook}>
                {ui.bookNow}
              </Link>
              <a
                className={`${styles.btnGhost} ${styles.ctaBtn}`}
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.whatsapp}
              </a>
              <a className={`${styles.btnGhost} ${styles.ctaBtn}`} href={`tel:${SITE.phoneTel}`}>
                {ui.call}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO + IMAGE */}
      <section className={styles.section} data-sr-reveal>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.textCol}>
              {intro.slice(0, 2).map((p, idx) => (
                <p key={idx} className={styles.paragraph} data-sr-reveal-item>
                  {p}
                </p>
              ))}

              <div className={styles.kpiRow} data-sr-reveal-item>
                <div className={styles.kpi}>
                  <span>{ui.timeline}</span>
                  <strong>{timeline}</strong>
                </div>
                <div className={styles.kpi}>
                  <span>{ui.warranty}</span>
                  <strong>{lang === "ar" ? "متوفر" : "Included"}</strong>
                </div>
                <div className={styles.kpi}>
                  <span>{ui.location}</span>
                  <strong>{ui.doha}</strong>
                </div>
              </div>
            </div>

            <aside className={styles.cardTopsub} data-sr-reveal-item>
              <Image
                src={sub.heroImage || "/services/placeholder.png"}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.cardImgsub}
                priority={false}
              />
            </aside>
          </div>
        </div>
      </section>

      {/* BEST FOR */}
      <section className={styles.sectionAlt} data-sr-reveal>
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-sr-reveal-item>
            <h2 className={styles.h2}>{ui.bestFor}</h2>
          </div>
          <ul className={styles.bullets}>
            {bestFor.map((x) => (
              <li key={x} data-sr-reveal-item>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECS / INCLUDED / AFTERCARE */}
      <section className={styles.section} data-sr-reveal>
        <div className={styles.container}>
          <div className={styles.threeCols}>
            <div className={styles.panel} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.specifications}</h2>
              <ul className={styles.bullets}>
                {specs.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className={styles.panel} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.included}</h2>
              <ul className={styles.bullets}>
                {included.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className={styles.panel} data-sr-reveal-item>
              <h2 className={styles.h2}>{ui.aftercare}</h2>
              <ul className={styles.bullets}>
                {aftercare.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.sectionAlt} data-sr-reveal>
        <div className={styles.container}>
          <h2 className={styles.h2} data-sr-reveal-item>
            {ui.process}
          </h2>

          <ol className={styles.timeline}>
            {process.map((step, i) => (
              <li key={i} data-sr-reveal-item>
                <span className={styles.stepIndex}>{i + 1}</span>
                <span className={styles.stepText}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className={styles.section} data-sr-reveal>
        <div className={styles.container}>
          <h2 className={styles.h2} data-sr-reveal-item>
            {ui.faqs}
          </h2>

          <div className={styles.faqGrid} data-sr-reveal-item>
            {sub.faqs?.map((f, idx) => (
              <details key={idx} className={styles.faq}>
                <summary>{getText(f.q, lang)}</summary>
                <p className={styles.faqAns}>{getText(f.a, lang)}</p>
              </details>
            ))}
          </div>

          <div className={styles.finalCta} data-sr-reveal-item>
            <h3 className={styles.h3}>{ui.readyToStart}</h3>
            <p className={styles.muted}>{ui.sendPhotos}</p>

            <div className={styles.ctaRow}>
              <Link className={`${styles.btnPrimary} ${styles.ctaBtn}`} href={baseBook}>
                {ui.getQuote}
              </Link>
              <a
                className={`${styles.btnGhost} ${styles.ctaBtn}`}
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
