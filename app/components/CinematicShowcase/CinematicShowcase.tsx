"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CinematicShowcase.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

type Particle = {
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
};

export default function CinematicShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // ✅ refs pour éviter setState en boucle
  const carsNumRef = useRef<HTMLDivElement>(null);
  const clientsNumRef = useRef<HTMLDivElement>(null);
  const yearsNumRef = useRef<HTMLDivElement>(null);
  const ratingNumRef = useRef<HTMLDivElement>(null);

  const { t } = useI18n();

  const labels = useMemo(() => {
    const cs = (t as any)?.cinematicShowcase ?? {};
    return {
      title: safeText(cs.title, "Excellence in Every Detail"),
      subtitle: safeText(cs.subtitle, "Experience automotive perfection through our signature services"),
      premiumDetailingTitle: safeText(cs.premiumDetailingTitle, "Premium Detailing"),
      premiumDetailingDesc: safeText(cs.premiumDetailingDesc, "Meticulous care for every surface."),
      ceramicCoatingTitle: safeText(cs.ceramicCoatingTitle, "Ceramic Coating"),
      ceramicCoatingDesc: safeText(cs.ceramicCoatingDesc, "Long-lasting brilliance and durability."),
      paintCorrectionTitle: safeText(cs.paintCorrectionTitle, "Paint Correction"),
      paintCorrectionDesc: safeText(cs.paintCorrectionDesc, "Eliminate imperfections for a mirror finish."),
      interiorLuxuryTitle: safeText(cs.interiorLuxuryTitle, "Interior Luxury"),
      interiorLuxuryDesc: safeText(cs.interiorLuxuryDesc, "Deep clean and premium leather care."),
      carsDetailedLabel: safeText(cs.carsDetailedLabel, "Cars Detailed"),
      happyClientsLabel: safeText(cs.happyClientsLabel, "Happy Clients"),
      yearsExperienceLabel: safeText(cs.yearsExperienceLabel, "Years Experience"),
      averageRatingLabel: safeText(cs.averageRatingLabel, "Average Rating"),
    };
  }, [t]);

  // ✅ particles générés une seule fois (pas de innerHTML)
  const particles = useMemo<Particle[]>(() => {
    // réduit pour perf (tu peux monter à 30 si tu veux)
    const COUNT = 24;
    const arr: Particle[] = [];
    for (let i = 0; i < COUNT; i++) {
      const size = 2 + Math.random() * 3;
      arr.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2.5}s`,
        duration: `${4.5 + Math.random() * 4}s`,
        size,
        opacity: 0.35 + Math.random() * 0.35,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId: number | null = null;
    const createdAnims: gsap.core.Animation[] = [];

    const ctx = gsap.context(() => {
      // ✅ si reduced motion: pas d’animations lourdes
      if (prefersReducedMotion) {
        if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0, clearProps: "transform" });
        if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0, clearProps: "transform" });
        if (cardsContainerRef.current) {
          const cards = cardsContainerRef.current.querySelectorAll(`.${styles.card}`);
          gsap.set(cards, { opacity: 1, y: 0, clearProps: "transform" });
        }
        // stats par défaut
        if (carsNumRef.current) carsNumRef.current.textContent = "5,000+";
        if (clientsNumRef.current) clientsNumRef.current.textContent = "10,000+";
        if (yearsNumRef.current) yearsNumRef.current.textContent = "15+";
        if (ratingNumRef.current) ratingNumRef.current.textContent = "4.9";
        return;
      }

      // --- Header (once) ---
      if (titleRef.current) {
        const a = gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionEl, start: "top 82%", once: true },
          }
        );
        createdAnims.push(a);
      }

      if (subtitleRef.current) {
        const a = gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionEl, start: "top 82%", once: true },
          }
        );
        createdAnims.push(a);
      }

      // --- Cards (once, léger) ---
      if (cardsContainerRef.current) {
        const cards = Array.from(cardsContainerRef.current.children);

        const a = gsap.fromTo(
          cards,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: cardsContainerRef.current, start: "top 85%", once: true },
          }
        );
        createdAnims.push(a);
      }

      // --- Stats: animation sans setState (update DOM) ---
      if (statsRef.current) {
        const obj = { cars: 0, clients: 0, years: 0, rating: 0 };

        const st = ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const tween = gsap.to(obj, {
              cars: 5000,
              clients: 10000,
              years: 15,
              rating: 4.9,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                if (carsNumRef.current) carsNumRef.current.textContent = `${Math.floor(obj.cars).toLocaleString()}+`;
                if (clientsNumRef.current) clientsNumRef.current.textContent = `${Math.floor(obj.clients).toLocaleString()}+`;
                if (yearsNumRef.current) yearsNumRef.current.textContent = `${Math.floor(obj.years)}+`;
                if (ratingNumRef.current) ratingNumRef.current.textContent = obj.rating.toFixed(1);
              },
            });

            createdAnims.push(tween);
          },
        });

        // animation d’entrée stats (once)
        const a = gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 88%", once: true },
          }
        );
        createdAnims.push(a);

        // garder un handle pour cleanup
        createdAnims.push({ scrollTrigger: st } as unknown as gsap.core.Animation);
      }

      // ✅ refresh propre
      rafId = window.requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        ScrollTrigger.refresh();
      });
    }, sectionEl);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);

      // kill propre : évite bugs / removeChild
      for (const anim of createdAnims) {
        const st = (anim as any).scrollTrigger as ScrollTrigger | undefined;
        if (st) st.kill(false);
        anim.kill?.();
      }

      ctx.revert();
    };
  }, [labels]);

  return (
    <section className={styles.showcase} ref={sectionRef}>
      {/* Particles légers (pas de DOM innerHTML) */}
      <div className={styles.particles} aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} ref={titleRef}>
            {labels.title}
          </h2>
          <p className={styles.subtitle} ref={subtitleRef}>
            {labels.subtitle}
          </p>
        </div>

        <div className={styles.cardsGrid} ref={cardsContainerRef}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>✨</div>
            <h3 className={styles.cardTitle}>{labels.premiumDetailingTitle}</h3>
            <p className={styles.cardDesc}>{labels.premiumDetailingDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🛡️</div>
            <h3 className={styles.cardTitle}>{labels.ceramicCoatingTitle}</h3>
            <p className={styles.cardDesc}>{labels.ceramicCoatingDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🎨</div>
            <h3 className={styles.cardTitle}>{labels.paintCorrectionTitle}</h3>
            <p className={styles.cardDesc}>{labels.paintCorrectionDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>💎</div>
            <h3 className={styles.cardTitle}>{labels.interiorLuxuryTitle}</h3>
            <p className={styles.cardDesc}>{labels.interiorLuxuryDesc}</p>
          </div>
        </div>

        <div className={styles.stats} ref={statsRef}>
          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={carsNumRef}>
              0+
            </div>
            <div className={styles.statLabel}>{labels.carsDetailedLabel}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={clientsNumRef}>
              0+
            </div>
            <div className={styles.statLabel}>{labels.happyClientsLabel}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={yearsNumRef}>
              0+
            </div>
            <div className={styles.statLabel}>{labels.yearsExperienceLabel}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} ref={ratingNumRef}>
              0
            </div>
            <div className={styles.statLabel}>{labels.averageRatingLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
