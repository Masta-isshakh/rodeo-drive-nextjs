"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./faq.module.css";
import { ChevronDown, MessageCircle, Clock, CreditCard, Shield, Wrench, Star } from "lucide-react";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type FAQCategory = "all" | "services" | "pricing" | "booking" | "protection" | "quality";

type FAQItem = {
  category: Exclude<FAQCategory, "all">;
  question: string;
  answer: string;
  icon: React.ElementType;
};

export default function FAQPage() {
  const { language, t } = useI18n();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const faqGridRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => [
      { id: "all" as const, name: language === "en" ? "All Questions" : "كل الأسئلة", icon: MessageCircle },
      { id: "services" as const, name: language === "en" ? "Services" : "الخدمات", icon: Wrench },
      { id: "pricing" as const, name: language === "en" ? "Pricing" : "الأسعار", icon: CreditCard },
      { id: "booking" as const, name: language === "en" ? "Booking" : "الحجز", icon: Clock },
      { id: "protection" as const, name: language === "en" ? "Protection" : "الحماية", icon: Shield },
      { id: "quality" as const, name: language === "en" ? "Quality" : "الجودة", icon: Star },
    ],
    [language]
  );

  const faqs: FAQItem[] = useMemo(
    () => [
      {
        category: "services",
        question: language === "en" ? "What services do you offer?" : "ما هي الخدمات التي تقدمونها؟",
        answer:
          language === "en"
            ? "We offer luxury detailing, ceramic coating, paint protection film (PPF), interior restoration, paint correction, rubberized paint, smart repair, PDR, and premium conversions."
            : "نقدم التفصيل الفاخر، السيراميك، حماية الطلاء PPF، ترميم الداخلية، تصحيح الطلاء، الدهان المطاطي، الإصلاح الذكي، PDR، وتحويلات مميزة.",
        icon: Wrench,
      },
      {
        category: "services",
        question: language === "en" ? "How long does ceramic coating last?" : "كم تدوم طبقة السيراميك؟",
        answer:
          language === "en"
            ? "Typically 3–5 years with proper maintenance. Longevity depends on usage conditions and care."
            : "عادة من 3 إلى 5 سنوات مع الصيانة المناسبة. تعتمد المدة على الاستخدام والعناية.",
        icon: Shield,
      },
      {
        category: "pricing",
        question: language === "en" ? "What are your pricing packages?" : "ما هي باقات الأسعار لديكم؟",
        answer:
          language === "en"
            ? "We offer Essential, Premium, and Elite packages, plus custom quotes depending on your vehicle and requested services."
            : "لدينا باقات أساسية ومميزة ونخبة، بالإضافة إلى عروض أسعار مخصصة حسب السيارة والخدمات المطلوبة.",
        icon: CreditCard,
      },
      {
        category: "pricing",
        question: language === "en" ? "Do you offer payment plans?" : "هل تقدمون خطط دفع؟",
        answer:
          language === "en"
            ? "Yes, we provide flexible payment options for premium services. Contact us to discuss the best option for you."
            : "نعم، نوفر خيارات دفع مرنة للخدمات المميزة. تواصل معنا لنرتب الأنسب لك.",
        icon: CreditCard,
      },
      {
        category: "booking",
        question: language === "en" ? "How do I book an appointment?" : "كيف يمكنني حجز موعد؟",
        answer:
          language === "en"
            ? "Book via phone, WhatsApp, online form, or visit our facility. We recommend booking in advance for major services."
            : "احجز عبر الهاتف أو واتساب أو نموذج الحجز أو بزيارة المنشأة. نوصي بالحجز المسبق للخدمات الكبيرة.",
        icon: Clock,
      },
      {
        category: "booking",
        question: language === "en" ? "How long does each service take?" : "كم من الوقت تستغرق كل خدمة؟",
        answer:
          language === "en"
            ? "It varies by service and vehicle condition. We provide accurate estimates during consultation."
            : "تختلف حسب الخدمة وحالة السيارة. نعطي تقديرًا دقيقًا أثناء الاستشارة.",
        icon: Clock,
      },
      {
        category: "protection",
        question: language === "en" ? "What is Paint Protection Film (PPF)?" : "ما هو فيلم حماية الطلاء (PPF)؟",
        answer:
          language === "en"
            ? "PPF is a transparent polyurethane film that protects paint from chips and scratches. Many films are self-healing with heat."
            : "PPF فيلم شفاف يحمي الطلاء من الخدوش ورقائق الحجر، وغالبًا يكون ذاتي الشفاء بالحرارة.",
        icon: Shield,
      },
      {
        category: "protection",
        question: language === "en" ? "Which is better: Ceramic coating or PPF?" : "أيهما أفضل: السيراميك أم PPF؟",
        answer:
          language === "en"
            ? "They complement each other: PPF protects physically, ceramic helps with chemical resistance and easy washing. Best is combining both."
            : "يكملان بعضهما: PPF حماية فيزيائية، والسيراميك مقاومة كيميائية وسهولة تنظيف. الأفضل دمجهما.",
        icon: Shield,
      },
      {
        category: "quality",
        question: language === "en" ? "Do you offer warranties on your services?" : "هل تقدمون ضمانات على خدماتكم؟",
        answer:
          language === "en"
            ? "Yes, warranties vary by service. We also provide maintenance guidelines to help maximize durability."
            : "نعم، تختلف الضمانات حسب الخدمة. كما نقدم إرشادات صيانة لزيادة الاستفادة.",
        icon: Star,
      },
    ],
    [language]
  );

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "all") return faqs;
    return faqs.filter((f) => f.category === activeCategory);
  }, [faqs, activeCategory]);

  // Mount animations
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // HERO
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(heroContent, { opacity: 0, y: 90, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.12 });
        }
      }

      // Categories
      if (categoriesRef.current) {
        const cards = categoriesRef.current.querySelectorAll(`.${styles.categoryCard}`);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: categoriesRef.current, start: "top 82%", toggleActions: "play none none reverse" },
          }
        );
      }

      // FAQ Items
      if (faqGridRef.current) {
        const items = faqGridRef.current.querySelectorAll(`.${styles.faqItem}`);
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: faqGridRef.current, start: "top 78%", toggleActions: "play none none reverse" },
          }
        );
      }

      // Titles
      const titles = document.querySelectorAll(`.${styles.sectionTitle}`);
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, rootRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [language]);

  // Re-animate on category change
  useEffect(() => {
    if (!faqGridRef.current) return;

    const ctx = gsap.context(() => {
      const items = faqGridRef.current!.querySelectorAll(`.${styles.faqItem}`);
      gsap.fromTo(items, { opacity: 0, y: 10, scale: 0.99 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.03, ease: "power2.out" });
    }, faqGridRef);

    return () => ctx.revert();
  }, [activeCategory, filteredFaqs.length]);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className={styles.faqPage} ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{t.faq?.title ?? (language === "en" ? "FAQ" : "الأسئلة الشائعة")}</h1>
          <p className={styles.subtitle}>
            {language === "en" ? "Find answers to common questions about our services" : "اعثر على إجابات للأسئلة الشائعة حول خدماتنا"}
          </p>

          <div className={styles.heroDecoration}>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection} ref={categoriesRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{language === "en" ? "Browse by Category" : "تصفح حسب الفئة"}</h2>

          <div className={styles.categoriesGrid}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`${styles.categoryCard} ${activeCategory === category.id ? styles.active : ""}`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setActiveIndex(null);
                  }}
                >
                  <div className={styles.categoryIcon}>
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid} ref={faqGridRef}>
            {filteredFaqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const open = activeIndex === index;

              return (
                <div key={`${faq.category}-${index}`} className={`${styles.faqItem} ${open ? styles.active : ""}`}>
                  <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)} type="button" aria-expanded={open}>
                    <div className={styles.questionIcon}>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.questionText}>{faq.question}</h3>
                    <span className={`${styles.chevron} ${open ? styles.rotated : ""}`}>
                      <ChevronDown size={24} />
                    </span>
                  </button>

                  {open && (
                    <div className={styles.faqAnswer}>
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{language === "en" ? "Still Have Questions?" : "لا تزال لديك أسئلة؟"}</h2>
            <p className={styles.ctaSubtitle}>
              {language === "en" ? "Our team is here to help. Contact us for personalized assistance." : "فريقنا هنا للمساعدة. تواصل معنا للحصول على دعم مخصص."}
            </p>

            <div className={styles.ctaButtons}>
              <button className={styles.ctaButton} type="button">
                {language === "en" ? "Contact Us" : "اتصل بنا"}
              </button>

              <button className={styles.whatsappButton} type="button" onClick={() => window.open("https://wa.me/97412345678", "_blank")}>
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
