// app/[lang]/faq/FAQClient.tsx
"use client";

import type { ElementType } from "react";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./faq.module.css";
import { trackContact } from "@/app/lib/metaPixel";
import { useI18n } from "@/app/lib/i18n";

import {
  ChevronDown,
  MessageCircle,
  Clock,
  CreditCard,
  Shield,
  Wrench,
  Star,
} from "lucide-react";

type Lang = "en" | "ar";

type FAQCategory =
  | "all"
  | "services"
  | "pricing"
  | "booking"
  | "protection"
  | "quality";

type FAQItem = {
  category: Exclude<FAQCategory, "all">;
  question: string;
  answer: string;
  icon: ElementType;
};

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function safeCategory(input?: string): FAQCategory {
  const allowed: FAQCategory[] = [
    "all",
    "services",
    "pricing",
    "booking",
    "protection",
    "quality",
  ];
  return allowed.includes(input as FAQCategory) ? (input as FAQCategory) : "all";
}

// ✅ GSAP controller split + lazy loaded
const FAQMotion = dynamic(() => import("./FaqMotion"), {
  ssr: false,
  loading: () => null,
});

export default function FAQClient({
  initialLang,
  activeCategory,
}: {
  initialLang: Lang;
  activeCategory: FAQCategory;
}) {
  const i18n = useI18n() as any;
  const t = i18n?.t;

  /**
   * IMPORTANT:
   * Your lang button likely changes i18n context (t/dir/lang) WITHOUT changing route.
   * So we must derive the active language from i18n (not params.lang).
   */
  const [runtimeLang, setRuntimeLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const fromI18n =
      i18n?.lang ??
      i18n?.locale ??
      i18n?.language ??
      i18n?.currentLang ??
      "";

    const fromHtml =
      typeof document !== "undefined" ? document.documentElement.lang : "";

    const guess = String(fromI18n || fromHtml || initialLang).toLowerCase();
    setRuntimeLang(guess.startsWith("ar") ? "ar" : "en");
  }, [t, i18n?.lang, i18n?.locale, i18n?.language, i18n?.dir, initialLang]);

  const lang: Lang = runtimeLang;
  const dir = lang === "ar" ? "rtl" : "ltr";

  // Try multiple common locations so it works with your existing i18n shape
  const faqT = useMemo(() => {
    return (
      (t as any)?.faq ??
      (t as any)?.faqPage ??
      (t as any)?.pages?.faq ??
      {}
    );
  }, [t]);

  const copy = useMemo(() => {
    // Prefer translations from t, fallback to bilingual defaults
    return {
      title: safeText(faqT?.title, lang === "ar" ? "الأسئلة الشائعة" : "FAQ"),
      subtitle: safeText(
        faqT?.subtitle,
        lang === "ar"
          ? "اعثر على إجابات للأسئلة الشائعة حول خدماتنا"
          : "Find answers to common questions about our services"
      ),
      browseByCategory: safeText(
        faqT?.browseByCategory,
        lang === "ar" ? "تصفح حسب الفئة" : "Browse by Category"
      ),
      stillHaveQuestions: safeText(
        faqT?.stillHaveQuestions,
        lang === "ar" ? "لا تزال لديك أسئلة؟" : "Still Have Questions?"
      ),
      ctaSubtitle: safeText(
        faqT?.ctaSubtitle,
        lang === "ar"
          ? "فريقنا هنا للمساعدة. تواصل معنا للحصول على دعم مخصص."
          : "Our team is here to help. Contact us for personalized assistance."
      ),
      contactUs: safeText(faqT?.contactUs, lang === "ar" ? "اتصل بنا" : "Contact Us"),
    };
  }, [faqT, lang]);

  const categories = useMemo(() => {
    const catsT =
      faqT?.categories ??
      (t as any)?.faqCategories ??
      (t as any)?.categories?.faq ??
      {};

    return [
      {
        id: "all" as const,
        name: safeText(catsT?.all, lang === "ar" ? "كل الأسئلة" : "All Questions"),
        icon: MessageCircle,
      },
      {
        id: "services" as const,
        name: safeText(catsT?.services, lang === "ar" ? "الخدمات" : "Services"),
        icon: Wrench,
      },
      {
        id: "pricing" as const,
        name: safeText(catsT?.pricing, lang === "ar" ? "الأسعار" : "Pricing"),
        icon: CreditCard,
      },
      {
        id: "booking" as const,
        name: safeText(catsT?.booking, lang === "ar" ? "الحجز" : "Booking"),
        icon: Clock,
      },
      {
        id: "protection" as const,
        name: safeText(catsT?.protection, lang === "ar" ? "الحماية" : "Protection"),
        icon: Shield,
      },
      {
        id: "quality" as const,
        name: safeText(catsT?.quality, lang === "ar" ? "الجودة" : "Quality"),
        icon: Star,
      },
    ];
  }, [faqT, t, lang]);

  const faqs = useMemo<FAQItem[]>(() => {
    // If you have FAQ items in translations, prefer them:
    // expected shape: faqT.items = [{ category, question, answer, icon }, ...]
    const itemsT = faqT?.items ?? (t as any)?.faqItems;

    const iconMap: Record<string, ElementType> = {
      MessageCircle,
      Clock,
      CreditCard,
      Shield,
      Wrench,
      Star,
    };

    if (Array.isArray(itemsT) && itemsT.length) {
      return itemsT
        .map((it: any) => {
          const category = safeCategory(it?.category);
          if (category === "all") return null;

          const question = safeText(it?.question, "");
          const answer = safeText(it?.answer, "");
          if (!question || !answer) return null;

          const iconKey = safeText(it?.icon, "");
          const icon = iconMap[iconKey] ?? MessageCircle;

          return { category, question, answer, icon };
        })
        .filter(Boolean) as FAQItem[];
    }

    // Fallback (bilingual) — still reacts to lang toggle
    return [
      {
        category: "services",
        question: lang === "ar" ? "ما هي الخدمات التي تقدمونها؟" : "What services do you offer?",
        answer:
          lang === "ar"
            ? "نقدم التفصيل الفاخر، السيراميك، حماية الطلاء PPF، ترميم الداخلية، تصحيح الطلاء، الدهان المطاطي، الإصلاح الذكي، PDR، وتحويلات مميزة."
            : "We offer luxury detailing, ceramic coating, paint protection film (PPF), interior restoration, paint correction, rubberized paint, smart repair, PDR, and premium conversions.",
        icon: Wrench,
      },
      {
        category: "services",
        question: lang === "ar" ? "كم تدوم طبقة السيراميك؟" : "How long does ceramic coating last?",
        answer:
          lang === "ar"
            ? "عادة من 3 إلى 5 سنوات مع الصيانة المناسبة. تعتمد المدة على الاستخدام والعناية."
            : "Typically 3–5 years with proper maintenance. Longevity depends on usage conditions and care.",
        icon: Shield,
      },
      {
        category: "pricing",
        question: lang === "ar" ? "ما هي باقات الأسعار لديكم؟" : "What are your pricing packages?",
        answer:
          lang === "ar"
            ? "لدينا باقات أساسية ومميزة ونخبة، بالإضافة إلى عروض أسعار مخصصة حسب السيارة والخدمات المطلوبة."
            : "We offer Essential, Premium, and Elite packages, plus custom quotes depending on your vehicle and requested services.",
        icon: CreditCard,
      },
      {
        category: "pricing",
        question: lang === "ar" ? "هل تقدمون خطط دفع؟" : "Do you offer payment plans?",
        answer:
          lang === "ar"
            ? "نعم، نوفر خيارات دفع مرنة للخدمات المميزة. تواصل معنا لنرتب الأنسب لك."
            : "Yes, we provide flexible payment options for premium services. Contact us to discuss the best option for you.",
        icon: CreditCard,
      },
      {
        category: "booking",
        question: lang === "ar" ? "كيف يمكنني حجز موعد؟" : "How do I book an appointment?",
        answer:
          lang === "ar"
            ? "احجز عبر الهاتف أو واتساب أو نموذج الحجز أو بزيارة المنشأة. نوصي بالحجز المسبق للخدمات الكبيرة."
            : "Book via phone, WhatsApp, online form, or visit our facility. We recommend booking in advance for major services.",
        icon: Clock,
      },
      {
        category: "booking",
        question: lang === "ar" ? "كم من الوقت تستغرق كل خدمة؟" : "How long does each service take?",
        answer:
          lang === "ar"
            ? "تختلف حسب الخدمة وحالة السيارة. نعطي تقديرًا دقيقًا أثناء الاستشارة."
            : "It varies by service and vehicle condition. We provide accurate estimates during consultation.",
        icon: Clock,
      },
      {
        category: "protection",
        question: lang === "ar" ? "ما هو فيلم حماية الطلاء (PPF)؟" : "What is Paint Protection Film (PPF)?",
        answer:
          lang === "ar"
            ? "PPF فيلم شفاف يحمي الطلاء من الخدوش ورقائق الحجر، وغالبًا يكون ذاتي الشفاء بالحرارة."
            : "PPF is a transparent polyurethane film that protects paint from chips and scratches. Many films are self-healing with heat.",
        icon: Shield,
      },
      {
        category: "protection",
        question: lang === "ar" ? "أيهما أفضل: السيراميك أم PPF؟" : "Which is better: Ceramic coating or PPF?",
        answer:
          lang === "ar"
            ? "يكملان بعضهما: PPF حماية فيزيائية، والسيراميك مقاومة كيميائية وسهولة تنظيف. الأفضل دمجهما."
            : "They complement each other: PPF protects physically, ceramic helps with chemical resistance and easy washing. Best is combining both.",
        icon: Shield,
      },
      {
        category: "quality",
        question: lang === "ar" ? "هل تقدمون ضمانات على خدماتكم؟" : "Do you offer warranties on your services?",
        answer:
          lang === "ar"
            ? "نعم، تختلف الضمانات حسب الخدمة. كما نقدم إرشادات صيانة لزيادة الاستفادة."
            : "Yes, warranties vary by service. We also provide maintenance guidelines to help maximize durability.",
        icon: Star,
      },
    ];
  }, [faqT, t, lang]);

  const active = safeCategory(activeCategory);
  const filteredFaqs = active === "all" ? faqs : faqs.filter((f) => f.category === active);

  // Build base path from current pathname, but enforce selected lang
  const pathname = usePathname();
  const basePath = useMemo(() => {
    const clean = (pathname || "").split("?")[0];
    const parts = clean.split("/").filter(Boolean); // ["en","faq"]
    if (parts.length >= 2 && (parts[0] === "en" || parts[0] === "ar") && parts[1] === "faq") {
      return `/${lang}/faq`;
    }
    return `/${lang}/faq`;
  }, [pathname, lang]);

  const catHref = (id: FAQCategory) =>
    id === "all" ? basePath : `${basePath}?category=${encodeURIComponent(id)}`;

  // Re-run motion init on lang/category switch
  const motionKey = `${lang}|${active}`;

  return (
    <main className={styles.faqPage} data-faq-root dir={dir} lang={lang} key={lang}>
      <FAQMotion motionKey={motionKey} />

      {/* Hero */}
      <section className={styles.hero} data-faq-hero>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent} data-faq-hero-content>
          <h1 className={styles.title} data-faq-animate>
            {copy.title}
          </h1>
          <p className={styles.subtitle} data-faq-animate>
            {copy.subtitle}
          </p>

          <div className={styles.heroDecoration} data-faq-animate>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection} data-faq-categories>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-faq-animate>
            {copy.browseByCategory}
          </h2>

          <div className={styles.categoriesGrid} data-faq-cards>
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = active === category.id;

              return (
                <Link
                  key={category.id}
                  href={catHref(category.id)}
                  className={`${styles.categoryCard} ${isActive ? styles.active : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  data-faq-card
                >
                  <div className={styles.categoryIcon}>
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className={styles.faqSection} data-faq-list>
        <div className={styles.container}>
          <div className={styles.faqGrid} data-faq-grid>
            {filteredFaqs.map((faq, index) => {
              const IconComponent = faq.icon;

              return (
                <details
                  key={`${faq.category}-${index}-${lang}`}
                  className={styles.faqItem}
                  data-faq-item
                >
                  <summary className={styles.faqQuestion}>
                    <div className={styles.questionIcon}>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    <h3 className={styles.questionText}>{faq.question}</h3>

                    <span className={styles.chevron} aria-hidden="true">
                      <ChevronDown size={24} />
                    </span>
                  </summary>

                  <div className={styles.faqAnswer}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} data-faq-cta>
        <div className={styles.container}>
          <div className={styles.ctaContent} data-faq-animate>
            <h2 className={styles.ctaTitle}>{copy.stillHaveQuestions}</h2>
            <p className={styles.ctaSubtitle}>{copy.ctaSubtitle}</p>

            <div className={styles.ctaButtons}>
              <a
                className={styles.ctaButton}
                href="tel:+97433202409"
                onClick={() =>
                  trackContact({
                    content_name: "Phone",
                    content_category: "FAQ CTA",
                    source: "faq_page",
                  })
                }
              >
                {copy.contactUs}
              </a>

              <a
                className={styles.whatsappButton}
                href="https://wa.me/97433202409"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackContact({
                    content_name: "WhatsApp",
                    content_category: "FAQ CTA",
                    source: "faq_page",
                  })
                }
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
