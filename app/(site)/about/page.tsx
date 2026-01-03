"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./about.module.css";
import { Award, Users, Target, Trophy, Shield, Zap } from "lucide-react";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const { language, t } = useI18n();

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const copy = useMemo(() => {
    const isEn = language === "en";
    return {
      heroTitle: isEn ? "About Rodeo Drive" : "عن روديو درايف",
      heroSubtitle: isEn
        ? "Defining Excellence in Luxury Automotive Care Since 2015"
        : "تحديد التميز في رعاية السيارات الفاخرة منذ 2015",
      ourStory: isEn ? "Our Story" : "قصتنا",
      theBeginning: isEn ? "The Beginning" : "البداية",
      theMission: isEn ? "The Mission" : "المهمة",
      theEvolution: isEn ? "The Evolution" : "التطور",
      valuesTitle: isEn ? "Our Values" : "قيمنا",
      valuesSubtitle: isEn ? "The principles that guide everything we do" : "المبادئ التي توجه كل ما نقوم به",
      teamTitle: isEn ? "Meet Our Team" : "تعرف على فريقنا",
      teamSubtitle: isEn ? "Expert craftsmen dedicated to automotive excellence" : "حرفيون خبراء مكرسون للتميز في العناية بالسيارات",
      journeyTitle: isEn ? "Our Journey" : "رحلتنا",
      journeySubtitle: isEn ? "Milestones that define our commitment to excellence" : "معالم تحدد التزامنا بالتميز",
      ctaTitle: isEn ? "Experience the Rodeo Drive Difference" : "اختبر فرق روديو درايف",
      ctaSubtitle: isEn ? "Join the elite community of luxury car owners who trust us" : "انضم إلى مجتمع النخبة من أصحاب السيارات الفاخرة الذين يثقون بنا",
      ctaButton: isEn ? "Book Now" : "احجز الآن",
    };
  }, [language]);

  const values = useMemo(
    () => [
      {
        icon: Award,
        title: language === "en" ? "Excellence" : "التميّز",
        description:
          language === "en"
            ? "We pursue perfection in every detail, setting the highest standards in automotive care."
            : "نسعى للكمال في كل التفاصيل، مع أعلى المعايير في العناية بالسيارات.",
      },
      {
        icon: Shield,
        title: language === "en" ? "Protection" : "الحماية",
        description:
          language === "en"
            ? "Your vehicle's protection is our priority, using only premium materials and techniques."
            : "حماية سيارتك هي أولويتنا باستخدام مواد وتقنيات فاخرة.",
      },
      {
        icon: Target,
        title: language === "en" ? "Precision" : "الدقة",
        description:
          language === "en"
            ? "Meticulous attention to detail ensures flawless results every time."
            : "اهتمام دقيق بالتفاصيل يضمن نتائج مثالية في كل مرة.",
      },
      {
        icon: Users,
        title: language === "en" ? "Client Focus" : "تركيز العميل",
        description:
          language === "en"
            ? "Your satisfaction drives everything we do, delivering personalized service."
            : "رضاك هو ما يحرك كل ما نقوم به مع خدمة مخصصة.",
      },
      {
        icon: Zap,
        title: language === "en" ? "Innovation" : "الابتكار",
        description:
          language === "en"
            ? "We stay ahead with the latest technologies and methods in automotive detailing."
            : "نواكب أحدث التقنيات والأساليب في تفصيل السيارات.",
      },
      {
        icon: Trophy,
        title: language === "en" ? "Legacy" : "الإرث",
        description:
          language === "en"
            ? "Building a reputation for excellence that stands the test of time."
            : "بناء سمعة للتميّز تصمد مع مرور الزمن.",
      },
    ],
    [language]
  );

  const teamMembers = useMemo(
    () => [
      {
        name: "Mohammed Al-Rashid",
        role: language === "en" ? "Founder & CEO" : "المؤسس والرئيس التنفيذي",
        image:
          "https://images.unsplash.com/photo-1761942943722-fb696d8a9a9d?auto=format&fit=crop&w=1200&q=80",
        description:
          language === "en"
            ? "15+ years of experience in luxury automotive care"
            : "خبرة +15 سنة في العناية بالسيارات الفاخرة",
      },
      {
        name: "Ahmed Hassan",
        role: language === "en" ? "Master Detailer" : "خبير تفصيل سيارات",
        image:
          "https://images.unsplash.com/photo-1746079074371-e28f14c76e37?auto=format&fit=crop&w=1200&q=80",
        description:
          language === "en"
            ? "Certified ceramic coating specialist with 500+ installations"
            : "مختص معتمد في السيراميك مع +500 تطبيق",
      },
      {
        name: "Khalid Ibrahim",
        role: language === "en" ? "PPF Specialist" : "مختص PPF",
        image:
          "https://images.unsplash.com/photo-1606235994317-b517abfd89cf?auto=format&fit=crop&w=1200&q=80",
        description:
          language === "en"
            ? "Expert in paint protection film application and customization"
            : "خبير في تطبيق وحلول حماية الطلاء والتخصيص",
      },
      {
        name: "Youssef Malik",
        role: language === "en" ? "Interior Specialist" : "مختص داخليات",
        image:
          "https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?auto=format&fit=crop&w=1200&q=80",
        description:
          language === "en"
            ? "Master of luxury interior restoration and leather care"
            : "متخصص في ترميم الداخليات الفاخرة والعناية بالجلد",
      },
    ],
    [language]
  );

  const achievements = useMemo(
    () => [
      { year: "2015", title: language === "en" ? "Company Founded" : "تأسيس الشركة", description: language === "en" ? "Rodeo Drive established in Doha" : "تأسست روديو درايف في الدوحة" },
      { year: "2017", title: language === "en" ? "500 Cars Milestone" : "500 سيارة", description: language === "en" ? "Served our 500th luxury vehicle" : "خدمة السيارة الفاخرة رقم 500" },
      { year: "2019", title: language === "en" ? "Facility Expansion" : "توسعة المنشأة", description: language === "en" ? "Opened state-of-the-art workshop" : "افتتاح ورشة حديثة" },
      { year: "2021", title: language === "en" ? "Excellence Award" : "جائزة التميّز", description: language === "en" ? "Qatar Automotive Excellence Award" : "جائزة التميّز في قطر" },
      { year: "2023", title: language === "en" ? "1000+ Clients" : "+1000 عميل", description: language === "en" ? "Trusted by luxury car owners across Qatar" : "ثقة ملاك السيارات الفاخرة في قطر" },
      { year: "2024", title: language === "en" ? "Innovation Leader" : "ريادة الابتكار", description: language === "en" ? "First to offer advanced nano-ceramic technology" : "الأوائل في تقديم تقنيات نانو سيراميك متقدمة" },
    ],
    [language]
  );

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // HERO
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(heroContent, { opacity: 0, y: 120, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.15 });
        }
      }

      // STORY
      if (storyRef.current) {
        const blocks = storyRef.current.querySelectorAll(`.${styles.storyBlock}`);
        gsap.fromTo(
          blocks,
          { opacity: 0, x: -80, rotateY: -10 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 75%", toggleActions: "play none none reverse" },
          }
        );
      }

      // VALUES
      if (valuesRef.current) {
        const cards = valuesRef.current.querySelectorAll(`.${styles.valueCard}`);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: valuesRef.current, start: "top 78%", toggleActions: "play none none reverse" },
          }
        );
      }

      // TEAM
      if (teamRef.current) {
        const members = teamRef.current.querySelectorAll(`.${styles.teamMember}`);
        gsap.fromTo(
          members,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: teamRef.current, start: "top 78%", toggleActions: "play none none reverse" },
          }
        );
      }

      // ACHIEVEMENTS
      if (achievementsRef.current) {
        const items = achievementsRef.current.querySelectorAll(`.${styles.achievementCard}`);
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.92, rotation: -6 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: achievementsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      }

      // TITLES
      const titles = document.querySelectorAll(`.${styles.sectionTitle}`);
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, rootRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [language]);

  return (
    <main className={styles.aboutPage} ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroBackground}>
          <img
            src="about.JPG"
            alt="Rodeo Drive Showroom"
            className={styles.heroImage}
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
      <section className={styles.storySection} ref={storyRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.ourStory}</h2>

          <div className={styles.storyGrid}>
            <div className={styles.storyBlock}>
              <div className={styles.storyNumber}>01</div>
              <h3 className={styles.storyTitle}>{copy.theBeginning}</h3>
              <p className={styles.storyText}>
                {language === "en"
                  ? "Founded in 2015 in the heart of Doha, Rodeo Drive was born from a passion for automotive excellence. We saw a need for premium detailing services that matched the caliber of luxury vehicles in Qatar."
                  : "تأسست في عام 2015 في قلب الدوحة، ولدت روديو درايف من شغف بالتميّز في العناية بالسيارات. رأينا حاجة لخدمات فاخرة تليق بمستوى السيارات في قطر."}
              </p>
            </div>

            <div className={styles.storyBlock}>
              <div className={styles.storyNumber}>02</div>
              <h3 className={styles.storyTitle}>{copy.theMission}</h3>
              <p className={styles.storyText}>
                {language === "en"
                  ? "Our mission is to provide unparalleled automotive care using cutting-edge technology and premium materials. Every vehicle receives the same meticulous attention."
                  : "مهمتنا تقديم عناية لا مثيل لها باستخدام أحدث التقنيات والمواد الفاخرة. كل سيارة تحصل على نفس الاهتمام الدقيق."}
              </p>
            </div>

            <div className={styles.storyBlock}>
              <div className={styles.storyNumber}>03</div>
              <h3 className={styles.storyTitle}>{copy.theEvolution}</h3>
              <p className={styles.storyText}>
                {language === "en"
                  ? "From a small workshop to a state-of-the-art facility, we've continuously evolved to meet the demands of discerning luxury car owners."
                  : "من ورشة صغيرة إلى منشأة حديثة، تطورنا باستمرار لتلبية متطلبات ملاك السيارات الفاخرة."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection} ref={valuesRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.valuesTitle}</h2>
          <p className={styles.sectionSubtitle}>{copy.valuesSubtitle}</p>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection} ref={teamRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.teamTitle}</h2>
          <p className={styles.sectionSubtitle}>{copy.teamSubtitle}</p>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberImageWrapper}>
                  <img src={member.image} alt={member.name} className={styles.memberImage} />
                  <div className={styles.memberOverlay}>
                    <div className={styles.memberSocial}>
                      <button className={styles.socialButton} type="button">
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievementsSection} ref={achievementsRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{copy.journeyTitle}</h2>
          <p className={styles.sectionSubtitle}>{copy.journeySubtitle}</p>

          <div className={styles.timeline}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementYear}>{achievement.year}</div>
                <div className={styles.achievementContent}>
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                  <p className={styles.achievementDescription}>{achievement.description}</p>
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
            <button className={styles.ctaButton} type="button">
              {copy.ctaButton}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
