"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./about.module.css";
import { Award, Users, Target, Trophy, Shield, Zap } from "lucide-react";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

function getMotionFlags() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return { reduced: false, lite: false };
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lite =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

  return { reduced, lite };
}

export default function AboutPage() {
  const { language } = useI18n();

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
      valuesSubtitle: isEn
        ? "The principles that guide everything we do"
        : "المبادئ التي توجه كل ما نقوم به",
      teamTitle: isEn ? "Meet Our Team" : "تعرف على فريقنا",
      teamSubtitle: isEn
        ? "Expert craftsmen dedicated to automotive excellence"
        : "حرفيون خبراء مكرسون للتميز في العناية بالسيارات",
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

  const achievements = useMemo(
    () => [
      {
        year: "2015",
        title: language === "en" ? "Company Founded" : "تأسيس الشركة",
        description:
          language === "en"
            ? "Rodeo Drive established in Doha"
            : "تأسست روديو درايف في الدوحة",
      },
      {
        year: "2017",
        title: language === "en" ? "500 Cars Milestone" : "500 سيارة",
        description:
          language === "en"
            ? "Served our 500th luxury vehicle"
            : "خدمة السيارة الفاخرة رقم 500",
      },
      {
        year: "2019",
        title: language === "en" ? "Facility Expansion" : "توسعة المنشأة",
        description:
          language === "en" ? "Opened state-of-the-art workshop" : "افتتاح ورشة حديثة",
      },
      {
        year: "2021",
        title: language === "en" ? "Excellence Award" : "جائزة التميّز",
        description:
          language === "en"
            ? "Qatar Automotive Excellence Award"
            : "جائزة التميّز في قطر",
      },
      {
        year: "2023",
        title: language === "en" ? "1000+ Clients" : "+1000 عميل",
        description:
          language === "en"
            ? "Trusted by luxury car owners across Qatar"
            : "ثقة ملاك السيارات الفاخرة في قطر",
      },
      {
        year: "2024",
        title: language === "en" ? "Innovation Leader" : "ريادة الابتكار",
        description:
          language === "en"
            ? "First to offer advanced nano-ceramic technology"
            : "الأوائل في تقديم تقنيات نانو سيراميك متقدمة",
      },
    ],
    [language]
  );

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const { reduced, lite } = getMotionFlags();

    // Step-4: no GSAP/ScrollTrigger animation in reduced OR lite mode
    if (reduced || lite) {
      const heroContent = heroRef.current?.querySelector(
        `.${styles.heroContent}`
      ) as HTMLElement | null;

      if (heroContent) {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "none";
      }
      return;
    }

    ScrollTrigger.config({
      ignoreMobileResize: true,
      limitCallbacks: true,
    });

    const ctx = gsap.context(() => {
      // HERO (fast, lightweight)
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(
          `.${styles.heroContent}`
        ) as HTMLElement | null;

        if (heroContent) {
          gsap.set(heroContent, {
            autoAlpha: 0,
            y: 18,
            willChange: "transform,opacity",
          });

          gsap.to(heroContent, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: 0.08,
            onComplete: () => { gsap.set(heroContent, { clearProps: "willChange" }); },
          });
        }
      }

      // STORY (batch, once)
      if (storyRef.current) {
        const blocks = Array.from(
          storyRef.current.querySelectorAll<HTMLElement>(`.${styles.storyBlock}`)
        );
        gsap.set(blocks, { autoAlpha: 0, y: 14, willChange: "transform,opacity" });

        ScrollTrigger.batch(blocks, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.07,
              onComplete: () => {
                batch.forEach((el) => { gsap.set(el as any, { clearProps: "willChange" }); });
              },
            });
          },
        });
      }

      // VALUES (batch, once)
      if (valuesRef.current) {
        const cards = Array.from(
          valuesRef.current.querySelectorAll<HTMLElement>(`.${styles.valueCard}`)
        );
        gsap.set(cards, { autoAlpha: 0, y: 14, willChange: "transform,opacity" });

        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.06,
              onComplete: () =>
                batch.forEach((el) => gsap.set(el as any, { clearProps: "willChange" })),
            });
          },
        });
      }

      // TEAM (batch, once) — safe even if section is not rendered yet
      if (teamRef.current) {
        const members = Array.from(
          teamRef.current.querySelectorAll<HTMLElement>(`.${styles.teamMember}`)
        );
        if (members.length) {
          gsap.set(members, { autoAlpha: 0, y: 14, willChange: "transform,opacity" });

          ScrollTrigger.batch(members, {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
                stagger: 0.06,
                onComplete: () =>
                  batch.forEach((el) => gsap.set(el as any, { clearProps: "willChange" })),
              });
            },
          });
        }
      }

      // ACHIEVEMENTS (batch, once)
      if (achievementsRef.current) {
        const items = Array.from(
          achievementsRef.current.querySelectorAll<HTMLElement>(
            `.${styles.achievementCard}`
          )
        );
        gsap.set(items, { autoAlpha: 0, y: 14, willChange: "transform,opacity" });

        ScrollTrigger.batch(items, {
          start: "top 90%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.06,
              onComplete: () =>
                batch.forEach((el) => gsap.set(el as any, { clearProps: "willChange" })),
            });
          },
        });
      }

      // SECTION TITLES (batch, once) — scoped to root (no document.querySelectorAll)
      const titles = Array.from(
        root.querySelectorAll<HTMLElement>(`.${styles.sectionTitle}`)
      );
      gsap.set(titles, { autoAlpha: 0, y: 12, willChange: "transform,opacity" });

      ScrollTrigger.batch(titles, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.38,
            ease: "power2.out",
            stagger: 0.05,
            onComplete: () =>
              batch.forEach((el) => gsap.set(el as any, { clearProps: "willChange" })),
          });
        },
      });
    }, root);

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();

      // Safety: kill triggers that belong to this page root
      try {
        ScrollTrigger.getAll().forEach((st) => {
          const trig = st.trigger as Element | null;
          if (trig && root.contains(trig)) st.kill(false);
        });
      } catch {
        // ignore
      }
    };
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
      {/* If you add the Team section later, keep ref={teamRef} on the section wrapper */}

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
                  <p className={styles.achievementDescription}>
                    {achievement.description}
                  </p>
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
