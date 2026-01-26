// app/[lang]/faq/page.tsx
import styles from "./faq.module.css";
import {
  ChevronDown,
  MessageCircle,
  Clock,
  CreditCard,
  Shield,
  Wrench,
  Star,
} from "lucide-react";
import FAQEnhancements from "./FaqPage";

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
  icon: React.ElementType;
};

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

function buildBasePath(lang: Lang) {
  return `/${lang}/faq`;
}

function getPageCopy(language: Lang) {
  return {
    title: language === "en" ? "FAQ" : "الأسئلة الشائعة",
    subtitle:
      language === "en"
        ? "Find answers to common questions about our services"
        : "اعثر على إجابات للأسئلة الشائعة حول خدماتنا",
    browseByCategory: language === "en" ? "Browse by Category" : "تصفح حسب الفئة",
    stillHaveQuestions:
      language === "en" ? "Still Have Questions?" : "لا تزال لديك أسئلة؟",
    ctaSubtitle:
      language === "en"
        ? "Our team is here to help. Contact us for personalized assistance."
        : "فريقنا هنا للمساعدة. تواصل معنا للحصول على دعم مخصص.",
    contactUs: language === "en" ? "Contact Us" : "اتصل بنا",
  };
}

function getCategories(language: Lang) {
  return [
    {
      id: "all" as const,
      name: language === "en" ? "All Questions" : "كل الأسئلة",
      icon: MessageCircle,
    },
    {
      id: "services" as const,
      name: language === "en" ? "Services" : "الخدمات",
      icon: Wrench,
    },
    {
      id: "pricing" as const,
      name: language === "en" ? "Pricing" : "الأسعار",
      icon: CreditCard,
    },
    {
      id: "booking" as const,
      name: language === "en" ? "Booking" : "الحجز",
      icon: Clock,
    },
    {
      id: "protection" as const,
      name: language === "en" ? "Protection" : "الحماية",
      icon: Shield,
    },
    {
      id: "quality" as const,
      name: language === "en" ? "Quality" : "الجودة",
      icon: Star,
    },
  ];
}

function getFaqs(language: Lang): FAQItem[] {
  return [
    {
      category: "services",
      question:
        language === "en"
          ? "What services do you offer?"
          : "ما هي الخدمات التي تقدمونها؟",
      answer:
        language === "en"
          ? "We offer luxury detailing, ceramic coating, paint protection film (PPF), interior restoration, paint correction, rubberized paint, smart repair, PDR, and premium conversions."
          : "نقدم التفصيل الفاخر، السيراميك، حماية الطلاء PPF، ترميم الداخلية، تصحيح الطلاء، الدهان المطاطي، الإصلاح الذكي، PDR، وتحويلات مميزة.",
      icon: Wrench,
    },
    {
      category: "services",
      question:
        language === "en"
          ? "How long does ceramic coating last?"
          : "كم تدوم طبقة السيراميك؟",
      answer:
        language === "en"
          ? "Typically 3–5 years with proper maintenance. Longevity depends on usage conditions and care."
          : "عادة من 3 إلى 5 سنوات مع الصيانة المناسبة. تعتمد المدة على الاستخدام والعناية.",
      icon: Shield,
    },
    {
      category: "pricing",
      question:
        language === "en"
          ? "What are your pricing packages?"
          : "ما هي باقات الأسعار لديكم؟",
      answer:
        language === "en"
          ? "We offer Essential, Premium, and Elite packages, plus custom quotes depending on your vehicle and requested services."
          : "لدينا باقات أساسية ومميزة ونخبة، بالإضافة إلى عروض أسعار مخصصة حسب السيارة والخدمات المطلوبة.",
      icon: CreditCard,
    },
    {
      category: "pricing",
      question:
        language === "en" ? "Do you offer payment plans?" : "هل تقدمون خطط دفع؟",
      answer:
        language === "en"
          ? "Yes, we provide flexible payment options for premium services. Contact us to discuss the best option for you."
          : "نعم، نوفر خيارات دفع مرنة للخدمات المميزة. تواصل معنا لنرتب الأنسب لك.",
      icon: CreditCard,
    },
    {
      category: "booking",
      question:
        language === "en"
          ? "How do I book an appointment?"
          : "كيف يمكنني حجز موعد؟",
      answer:
        language === "en"
          ? "Book via phone, WhatsApp, online form, or visit our facility. We recommend booking in advance for major services."
          : "احجز عبر الهاتف أو واتساب أو نموذج الحجز أو بزيارة المنشأة. نوصي بالحجز المسبق للخدمات الكبيرة.",
      icon: Clock,
    },
    {
      category: "booking",
      question:
        language === "en"
          ? "How long does each service take?"
          : "كم من الوقت تستغرق كل خدمة؟",
      answer:
        language === "en"
          ? "It varies by service and vehicle condition. We provide accurate estimates during consultation."
          : "تختلف حسب الخدمة وحالة السيارة. نعطي تقديرًا دقيقًا أثناء الاستشارة.",
      icon: Clock,
    },
    {
      category: "protection",
      question:
        language === "en"
          ? "What is Paint Protection Film (PPF)?"
          : "ما هو فيلم حماية الطلاء (PPF)؟",
      answer:
        language === "en"
          ? "PPF is a transparent polyurethane film that protects paint from chips and scratches. Many films are self-healing with heat."
          : "PPF فيلم شفاف يحمي الطلاء من الخدوش ورقائق الحجر، وغالبًا يكون ذاتي الشفاء بالحرارة.",
      icon: Shield,
    },
    {
      category: "protection",
      question:
        language === "en"
          ? "Which is better: Ceramic coating or PPF?"
          : "أيهما أفضل: السيراميك أم PPF؟",
      answer:
        language === "en"
          ? "They complement each other: PPF protects physically, ceramic helps with chemical resistance and easy washing. Best is combining both."
          : "يكملان بعضهما: PPF حماية فيزيائية، والسيراميك مقاومة كيميائية وسهولة تنظيف. الأفضل دمجهما.",
      icon: Shield,
    },
    {
      category: "quality",
      question:
        language === "en"
          ? "Do you offer warranties on your services?"
          : "هل تقدمون ضمانات على خدماتكم؟",
      answer:
        language === "en"
          ? "Yes, warranties vary by service. We also provide maintenance guidelines to help maximize durability."
          : "نعم، تختلف الضمانات حسب الخدمة. كما نقدم إرشادات صيانة لزيادة الاستفادة.",
      icon: Star,
    },
  ];
}

export default async function FAQPage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { category?: string };
}) {
  const language: Lang = params.lang === "ar" ? "ar" : "en";
  const copy = getPageCopy(language);

  const activeCategory = safeCategory(searchParams?.category);
  const categories = getCategories(language);
  const faqs = getFaqs(language);

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const basePath = buildBasePath(language);

  const catHref = (id: FAQCategory) =>
    id === "all" ? basePath : `${basePath}?category=${encodeURIComponent(id)}`;

  return (
    <main className={styles.faqPage} data-faq-root>
      {/* Hero */}
      <section className={styles.hero} data-faq-hero>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent} data-faq-hero-content>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.subtitle}>{copy.subtitle}</p>

          <div className={styles.heroDecoration}>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection} data-faq-categories>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.browseByCategory}</h2>

          <div className={styles.categoriesGrid}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <a
                  key={category.id}
                  href={catHref(category.id)}
                  className={`${styles.categoryCard} ${
                    isActive ? styles.active : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className={styles.categoryIcon}>
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid} data-faq-grid>
            {filteredFaqs.map((faq, index) => {
              const IconComponent = faq.icon;

              return (
                <details
                  key={`${faq.category}-${index}`}
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
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{copy.stillHaveQuestions}</h2>
            <p className={styles.ctaSubtitle}>{copy.ctaSubtitle}</p>

            <div className={styles.ctaButtons}>
              <a className={styles.ctaButton} href="tel:+97433202409">
                {copy.contactUs}
              </a>

              <a
                className={styles.whatsappButton}
                href="https://wa.me/97433202409"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: lazy GSAP (does NOT force the whole page into client JS) */}
      <FAQEnhancements />
    </main>
  );
}
