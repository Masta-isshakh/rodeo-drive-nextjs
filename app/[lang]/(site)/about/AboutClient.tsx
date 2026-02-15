"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./about.module.css";
import { useI18n } from "@/app/lib/i18n";

import { Award, Users, Target, Trophy, Shield, Zap } from "lucide-react";

type Lang = "en" | "ar";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

const AboutMotion = dynamic(() => import("./AboutMotion"), {
  ssr: false,
  loading: () => null,
});

export default function AboutClient({ initialLang }: { initialLang: Lang }) {
  const i18n = useI18n() as any;
  const t = i18n?.t;

  // ✅ Runtime lang must come from your i18n state (lang button changes this)
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

  // Try several shapes so it works with your existing i18n dictionary structure
  const aboutT = useMemo(() => {
    return (
      (t as any)?.about ??
      (t as any)?.aboutPage ??
      (t as any)?.pages?.about ??
      {}
    );
  }, [t]);

  const copy = useMemo(() => {
    const isAr = lang === "ar";

    return {
      heroTitle: safeText(
        aboutT?.heroTitle,
        isAr ? "عن روديو درايف" : "About Rodeo Drive"
      ),
      heroSubtitle: safeText(
        aboutT?.heroSubtitle,
        isAr
          ? "تحديد التميز في رعاية السيارات الفاخرة منذ 2015"
          : "Defining Excellence in Luxury Automotive Care Since 2015"
      ),

      ourStory: safeText(aboutT?.ourStory, isAr ? "قصتنا" : "Our Story"),
      theBeginning: safeText(aboutT?.theBeginning, isAr ? "البداية" : "The Beginning"),
      beginningText: safeText(
        aboutT?.beginningText,
        isAr
          ? "تأسست في عام 2015 في قلب الدوحة، ولدت روديو درايف من شغف بالتميّز في العناية بالسيارات. رأينا حاجة لخدمات فاخرة تليق بمستوى السيارات في قطر."
          : "Founded in 2015 in the heart of Doha, Rodeo Drive was born from a passion for automotive excellence. We saw a need for premium detailing services that matched the caliber of luxury vehicles in Qatar."
      ),

      theMission: safeText(aboutT?.theMission, isAr ? "المهمة" : "The Mission"),
      missionText: safeText(
        aboutT?.missionText,
        isAr
          ? "مهمتنا تقديم عناية لا مثيل لها باستخدام أحدث التقنيات والمواد الفاخرة. كل سيارة تحصل على نفس الاهتمام الدقيق."
          : "Our mission is to provide unparalleled automotive care using cutting-edge technology and premium materials. Every vehicle receives the same meticulous attention."
      ),

      theEvolution: safeText(aboutT?.theEvolution, isAr ? "التطور" : "The Evolution"),
      evolutionText: safeText(
        aboutT?.evolutionText,
        isAr
          ? "من ورشة صغيرة إلى منشأة حديثة، تطورنا باستمرار لتلبية متطلبات ملاك السيارات الفاخرة."
          : "From a small workshop to a state-of-the-art facility, we've continuously evolved to meet the demands of discerning luxury car owners."
      ),

      valuesTitle: safeText(aboutT?.valuesTitle, isAr ? "قيمنا" : "Our Values"),
      valuesSubtitle: safeText(
        aboutT?.valuesSubtitle,
        isAr ? "المبادئ التي توجه كل ما نقوم به" : "The principles that guide everything we do"
      ),

      journeyTitle: safeText(aboutT?.journeyTitle, isAr ? "رحلتنا" : "Our Journey"),
      journeySubtitle: safeText(
        aboutT?.journeySubtitle,
        isAr ? "معالم تحدد التزامنا بالتميز" : "Milestones that define our commitment to excellence"
      ),

      ctaTitle: safeText(
        aboutT?.ctaTitle,
        isAr ? "اختبر فرق روديو درايف" : "Experience the Rodeo Drive Difference"
      ),
      ctaSubtitle: safeText(
        aboutT?.ctaSubtitle,
        isAr
          ? "انضم إلى مجتمع النخبة من أصحاب السيارات الفاخرة الذين يثقون بنا"
          : "Join the elite community of luxury car owners who trust us"
      ),
      ctaButton: safeText(aboutT?.ctaButton, isAr ? "احجز الآن" : "Book Now"),
    };
  }, [aboutT, lang]);

  // Icons map for translated arrays (optional)
  const iconMap = useMemo(() => {
    return { Award, Shield, Target, Users, Zap, Trophy } as const;
  }, []);

  const values = useMemo(() => {
    // If you have translations: aboutT.values = [{ icon:"Award", title:"", description:"" }, ...]
    const arr = aboutT?.values;
    if (Array.isArray(arr) && arr.length) {
      return arr
        .map((v: any) => {
          const iconKey = safeText(v?.icon, "");
          const Icon = (iconMap as any)[iconKey] ?? Award;
          return {
            icon: Icon,
            title: safeText(v?.title, ""),
            description: safeText(v?.description, ""),
          };
        })
        .filter((v: any) => v.title && v.description);
    }

    const isAr = lang === "ar";
    return [
      {
        icon: Award,
        title: isAr ? "التميّز" : "Excellence",
        description: isAr
          ? "نسعى للكمال في كل التفاصيل، مع أعلى المعايير في العناية بالسيارات."
          : "We pursue perfection in every detail, setting the highest standards in automotive care.",
      },
      {
        icon: Shield,
        title: isAr ? "الحماية" : "Protection",
        description: isAr
          ? "حماية سيارتك هي أولويتنا باستخدام مواد وتقنيات فاخرة."
          : "Your vehicle's protection is our priority, using only premium materials and techniques.",
      },
      {
        icon: Target,
        title: isAr ? "الدقة" : "Precision",
        description: isAr
          ? "اهتمام دقيق بالتفاصيل يضمن نتائج مثالية في كل مرة."
          : "Meticulous attention to detail ensures flawless results every time.",
      },
      {
        icon: Users,
        title: isAr ? "تركيز العميل" : "Client Focus",
        description: isAr
          ? "رضاك هو ما يحرك كل ما نقوم به مع خدمة مخصصة."
          : "Your satisfaction drives everything we do, delivering personalized service.",
      },
      {
        icon: Zap,
        title: isAr ? "الابتكار" : "Innovation",
        description: isAr
          ? "نواكب أحدث التقنيات والأساليب في تفصيل السيارات."
          : "We stay ahead with the latest technologies and methods in automotive detailing.",
      },
      {
        icon: Trophy,
        title: isAr ? "الإرث" : "Legacy",
        description: isAr
          ? "بناء سمعة للتميّز تصمد مع مرور الزمن."
          : "Building a reputation for excellence that stands the test of time.",
      },
    ] as const;
  }, [aboutT, lang, iconMap]);

  const achievements = useMemo(() => {
    // If you have translations: aboutT.achievements = [{ year, title, description }, ...]
    const arr = aboutT?.achievements;
    if (Array.isArray(arr) && arr.length) {
      return arr
        .map((a: any) => ({
          year: safeText(a?.year, ""),
          title: safeText(a?.title, ""),
          description: safeText(a?.description, ""),
        }))
        .filter((a: any) => a.year && a.title && a.description);
    }

    const isAr = lang === "ar";
    return [
      {
        year: "2015",
        title: isAr ? "تأسيس الشركة" : "Company Founded",
        description: isAr ? "تأسست روديو درايف في الدوحة" : "Rodeo Drive established in Doha",
      },
      {
        year: "2017",
        title: isAr ? "500 سيارة" : "500 Cars Milestone",
        description: isAr ? "خدمة السيارة الفاخرة رقم 500" : "Served our 500th luxury vehicle",
      },
      {
        year: "2019",
        title: isAr ? "توسعة المنشأة" : "Facility Expansion",
        description: isAr ? "افتتاح ورشة حديثة" : "Opened state-of-the-art workshop",
      },
      {
        year: "2021",
        title: isAr ? "جائزة التميّز" : "Excellence Award",
        description: isAr ? "جائزة التميّز في قطر" : "Qatar Automotive Excellence Award",
      },
      {
        year: "2023",
        title: isAr ? "+1000 عميل" : "1000+ Clients",
        description: isAr ? "ثقة ملاك السيارات الفاخرة في قطر" : "Trusted by luxury car owners across Qatar",
      },
      {
        year: "2024",
        title: isAr ? "ريادة الابتكار" : "Innovation Leader",
        description: isAr
          ? "الأوائل في تقديم تقنيات نانو سيراميك متقدمة"
          : "First to offer advanced nano-ceramic technology",
      },
    ] as const;
  }, [aboutT, lang]);

  // Localized contact link (keeps it correct when switching lang without route change)
  const pathname = usePathname();
  const contactHref = useMemo(() => {
    const clean = (pathname || "").split("?")[0];
    const parts = clean.split("/").filter(Boolean);
    // If you use /en/... routing:
    if (parts.length && (parts[0] === "en" || parts[0] === "ar")) {
      return `/${lang}/contact`;
    }
    // fallback:
    return "/contact";
  }, [pathname, lang]);

  const motionKey = `${lang}|about`;

  return (
    <main
      id="about-root"
      className={styles.aboutPage}
      data-about-root
      dir={dir}
      lang={lang}
      key={lang}
    >
      {/* tiny client-only motion controller (GSAP lazy-loaded inside) */}
      <AboutMotion motionKey={motionKey} />

      {/* Hero */}
      <section className={styles.hero} data-about-hero>
        <div className={styles.heroOverlay} />
        <div className={styles.heroBackground}>
          <img
            src="/about.avif"
            alt="Rodeo Drive Showroom"
            className={styles.heroImage}
            decoding="async"
            loading="eager"
          />
        </div>

        <div className={styles.heroContent} data-about-hero-content>


          <div className={styles.heroDecoration} data-about-animate>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={styles.storySection} data-about-story>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-about-animate>
            {copy.ourStory}
          </h2>

          <div className={styles.storyGrid} data-about-story-grid>
            <div className={styles.storyBlock} data-about-card>
              <div className={styles.storyNumber}>01</div>
              <h3 className={styles.storyTitle}>{copy.theBeginning}</h3>
              <p className={styles.storyText}>{copy.beginningText}</p>
            </div>

            <div className={styles.storyBlock} data-about-card>
              <div className={styles.storyNumber}>02</div>
              <h3 className={styles.storyTitle}>{copy.theMission}</h3>
              <p className={styles.storyText}>{copy.missionText}</p>
            </div>

            <div className={styles.storyBlock} data-about-card>
              <div className={styles.storyNumber}>03</div>
              <h3 className={styles.storyTitle}>{copy.theEvolution}</h3>
              <p className={styles.storyText}>{copy.evolutionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection} data-about-values>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-about-animate>
            {copy.valuesTitle}
          </h2>
          <p className={styles.sectionSubtitle} data-about-animate>
            {copy.valuesSubtitle}
          </p>

          <div className={styles.valuesGrid} data-about-values-grid>
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={`${idx}-${lang}`} className={styles.valueCard} data-about-card>
                  <div className={styles.valueIcon}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievementsSection} data-about-achievements>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-about-animate>
            {copy.journeyTitle}
          </h2>
          <p className={styles.sectionSubtitle} data-about-animate>
            {copy.journeySubtitle}
          </p>

          <div className={styles.timeline} data-about-timeline>
            {achievements.map((a, idx) => (
              <div key={`${idx}-${lang}`} className={styles.achievementCard} data-about-card>
                <div className={styles.achievementYear}>{a.year}</div>
                <div className={styles.achievementContent}>
                  <h3 className={styles.achievementTitle}>{a.title}</h3>
                  <p className={styles.achievementDescription}>{a.description}</p>
                </div>
                <div className={styles.achievementConnector} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} data-about-cta>
        <div className={styles.container}>
          <div className={styles.ctaContent} data-about-animate>
            <h2 className={styles.ctaTitle}>{copy.ctaTitle}</h2>
            <p className={styles.ctaSubtitle}>{copy.ctaSubtitle}</p>

            <Link href={contactHref} className={styles.ctaButton}>
              {copy.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
