import Link from "next/link";
import { cookies, headers } from "next/headers";
import styles from "./about.module.css";
import AboutMotion from "./AboutPage";
import { Award, Users, Target, Trophy, Shield, Zap } from "lucide-react";

type Lang = "en" | "ar";

function detectLanguage(): Lang {
  const c = cookies();
  const cookieLang =
    c.get("lang")?.value ||
    c.get("language")?.value ||
    c.get("NEXT_LOCALE")?.value;

  if (cookieLang) {
    const v = cookieLang.toLowerCase();
    if (v.startsWith("ar")) return "ar";
    if (v.startsWith("en")) return "en";
  }

  const accept = headers().get("accept-language")?.toLowerCase() || "";
  if (accept.includes("ar")) return "ar";
  return "en";
}

export default function AboutPage() {
  const language = detectLanguage();
  const isEn = language === "en";
  const dir = isEn ? "ltr" : "rtl";

  const copy = {
    heroTitle: isEn ? "About Rodeo Drive" : "عن روديو درايف",
    heroSubtitle: isEn
      ? "Defining Excellence in Luxury Automotive Care Since 2015"
      : "تحديد التميز في رعاية السيارات الفاخرة منذ 2015",
    ourStory: isEn ? "Our Story" : "قصتنا",
    theBeginning: isEn ? "The Beginning" : "البداية",
    theMission: isEn ? "The Mission" : "المهمة",
    theEvolution: isEn ? "The Evolution" : "التطور",
    valuesTitle: isEn ? "Our Values" : "قيمنا",
    valuesSubtitle: isEn
      ? "The principles that guide everything we do"
      : "المبادئ التي توجه كل ما نقوم به",
    journeyTitle: isEn ? "Our Journey" : "رحلتنا",
    journeySubtitle: isEn
      ? "Milestones that define our commitment to excellence"
      : "معالم تحدد التزامنا بالتميز",
    ctaTitle: isEn
      ? "Experience the Rodeo Drive Difference"
      : "اختبر فرق روديو درايف",
    ctaSubtitle: isEn
      ? "Join the elite community of luxury car owners who trust us"
      : "انضم إلى مجتمع النخبة من أصحاب السيارات الفاخرة الذين يثقون بنا",
    ctaButton: isEn ? "Book Now" : "احجز الآن",
  };

  const values = [
    {
      icon: Award,
      title: isEn ? "Excellence" : "التميّز",
      description: isEn
        ? "We pursue perfection in every detail, setting the highest standards in automotive care."
        : "نسعى للكمال في كل التفاصيل، مع أعلى المعايير في العناية بالسيارات.",
    },
    {
      icon: Shield,
      title: isEn ? "Protection" : "الحماية",
      description: isEn
        ? "Your vehicle's protection is our priority, using only premium materials and techniques."
        : "حماية سيارتك هي أولويتنا باستخدام مواد وتقنيات فاخرة.",
    },
    {
      icon: Target,
      title: isEn ? "Precision" : "الدقة",
      description: isEn
        ? "Meticulous attention to detail ensures flawless results every time."
        : "اهتمام دقيق بالتفاصيل يضمن نتائج مثالية في كل مرة.",
    },
    {
      icon: Users,
      title: isEn ? "Client Focus" : "تركيز العميل",
      description: isEn
        ? "Your satisfaction drives everything we do, delivering personalized service."
        : "رضاك هو ما يحرك كل ما نقوم به مع خدمة مخصصة.",
    },
    {
      icon: Zap,
      title: isEn ? "Innovation" : "الابتكار",
      description: isEn
        ? "We stay ahead with the latest technologies and methods in automotive detailing."
        : "نواكب أحدث التقنيات والأساليب في تفصيل السيارات.",
    },
    {
      icon: Trophy,
      title: isEn ? "Legacy" : "الإرث",
      description: isEn
        ? "Building a reputation for excellence that stands the test of time."
        : "بناء سمعة للتميّز تصمد مع مرور الزمن.",
    },
  ] as const;

  const achievements = [
    {
      year: "2015",
      title: isEn ? "Company Founded" : "تأسيس الشركة",
      description: isEn ? "Rodeo Drive established in Doha" : "تأسست روديو درايف في الدوحة",
    },
    {
      year: "2017",
      title: isEn ? "500 Cars Milestone" : "500 سيارة",
      description: isEn ? "Served our 500th luxury vehicle" : "خدمة السيارة الفاخرة رقم 500",
    },
    {
      year: "2019",
      title: isEn ? "Facility Expansion" : "توسعة المنشأة",
      description: isEn ? "Opened state-of-the-art workshop" : "افتتاح ورشة حديثة",
    },
    {
      year: "2021",
      title: isEn ? "Excellence Award" : "جائزة التميّز",
      description: isEn ? "Qatar Automotive Excellence Award" : "جائزة التميّز في قطر",
    },
    {
      year: "2023",
      title: isEn ? "1000+ Clients" : "+1000 عميل",
      description: isEn
        ? "Trusted by luxury car owners across Qatar"
        : "ثقة ملاك السيارات الفاخرة في قطر",
    },
    {
      year: "2024",
      title: isEn ? "Innovation Leader" : "ريادة الابتكار",
      description: isEn
        ? "First to offer advanced nano-ceramic technology"
        : "الأوائل في تقديم تقنيات نانو سيراميك متقدمة",
    },
  ] as const;

  return (
    <main id="about-root" className={styles.aboutPage} dir={dir}>
      {/* Client-only motion controller (tiny) */}
      <AboutMotion />

      {/* Hero */}
      <section className={styles.hero}>
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

        <div className={styles.heroContent}>
          <h1 className={styles.title}>{copy.heroTitle}</h1>
          <p className={styles.subtitle}>{copy.heroSubtitle}</p>

          <div className={styles.heroDecoration}>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.ourStory}</h2>

          <div className={styles.storyGrid}>
            <div className={styles.storyBlock}>
              <div className={styles.storyNumber}>01</div>
              <h3 className={styles.storyTitle}>{copy.theBeginning}</h3>
              <p className={styles.storyText}>
                {isEn
                  ? "Founded in 2015 in the heart of Doha, Rodeo Drive was born from a passion for automotive excellence. We saw a need for premium detailing services that matched the caliber of luxury vehicles in Qatar."
                  : "تأسست في عام 2015 في قلب الدوحة، ولدت روديو درايف من شغف بالتميّز في العناية بالسيارات. رأينا حاجة لخدمات فاخرة تليق بمستوى السيارات في قطر."}
              </p>
            </div>

            <div className={styles.storyBlock}>
              <div className={styles.storyNumber}>02</div>
              <h3 className={styles.storyTitle}>{copy.theMission}</h3>
              <p className={styles.storyText}>
                {isEn
                  ? "Our mission is to provide unparalleled automotive care using cutting-edge technology and premium materials. Every vehicle receives the same meticulous attention."
                  : "مهمتنا تقديم عناية لا مثيل لها باستخدام أحدث التقنيات والمواد الفاخرة. كل سيارة تحصل على نفس الاهتمام الدقيق."}
              </p>
            </div>

            <div className={styles.storyBlock}>
              <div className={styles.storyNumber}>03</div>
              <h3 className={styles.storyTitle}>{copy.theEvolution}</h3>
              <p className={styles.storyText}>
                {isEn
                  ? "From a small workshop to a state-of-the-art facility, we've continuously evolved to meet the demands of discerning luxury car owners."
                  : "من ورشة صغيرة إلى منشأة حديثة، تطورنا باستمرار لتلبية متطلبات ملاك السيارات الفاخرة."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.valuesTitle}</h2>
          <p className={styles.sectionSubtitle}>{copy.valuesSubtitle}</p>

          <div className={styles.valuesGrid}>
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className={styles.valueCard}>
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
      <section className={styles.achievementsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.journeyTitle}</h2>
          <p className={styles.sectionSubtitle}>{copy.journeySubtitle}</p>

          <div className={styles.timeline}>
            {achievements.map((a, idx) => (
              <div key={idx} className={styles.achievementCard}>
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
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>{copy.ctaTitle}</h2>
            <p className={styles.ctaSubtitle}>{copy.ctaSubtitle}</p>

            <Link href="/contact" className={styles.ctaButton}>
              {copy.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
