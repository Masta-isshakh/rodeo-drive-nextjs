"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CinematicShowcase.module.css";
import { useI18n } from "../../lib/i18n";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

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

export default function CinematicShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const { reduced, lite } = getMotionFlags();

    // Reduce refresh churn on mobile
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Clear any leftover inline props (prevents “stuck” states after navigation)
    if (titleRef.current) gsap.set(titleRef.current, { clearProps: "opacity,transform,visibility" });
    if (subtitleRef.current) gsap.set(subtitleRef.current, { clearProps: "opacity,transform,visibility" });
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll(`.${styles.card}`);
      gsap.set(cards, { clearProps: "opacity,transform,visibility" });
    }
    if (statsRef.current) gsap.set(statsRef.current, { clearProps: "opacity,transform,visibility" });

    // Lite mode OR reduced motion: no triggers, everything visible, numbers set immediately
    if (reduced || lite) {
      if (titleRef.current) gsap.set(titleRef.current, { autoAlpha: 1, y: 0 });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { autoAlpha: 1, y: 0 });

      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(`.${styles.card}`);
        gsap.set(cards, { autoAlpha: 1, y: 0, scale: 1 });
      }

      if (statsRef.current) gsap.set(statsRef.current, { autoAlpha: 1, y: 0 });

      if (carsNumRef.current) carsNumRef.current.textContent = "5,000+";
      if (clientsNumRef.current) clientsNumRef.current.textContent = "10,000+";
      if (yearsNumRef.current) yearsNumRef.current.textContent = "15+";
      if (ratingNumRef.current) ratingNumRef.current.textContent = "4.9";

      return;
    }

    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current
        ? Array.from(cardsContainerRef.current.querySelectorAll(`.${styles.card}`))
        : [];

      // ONE lightweight section timeline (replaces multiple ScrollTriggers + batch)
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 82%",
          once: true,
          invalidateOnRefresh: false,
        },
      });

      if (titleRef.current) {
        tl.fromTo(titleRef.current, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65 }, 0);
      }

      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.08);
      }

      if (cards.length) {
        tl.fromTo(
          cards,
          { autoAlpha: 0, y: 14, scale: 0.995 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08 },
          0.18
        );
      }

      if (statsRef.current) {
        tl.fromTo(statsRef.current, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.3);
      }

      // Numbers count (DOM update only, once) — scoped to stats block
      if (statsRef.current) {
        const obj = { cars: 0, clients: 0, years: 0, rating: 0 };

        let lastCars = -1;
        let lastClients = -1;
        let lastYears = -1;
        let lastRating = "";

        ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              cars: 5000,
              clients: 10000,
              years: 15,
              rating: 4.9,
              duration: 1.25,
              ease: "power2.out",
              onUpdate: () => {
                const cars = Math.floor(obj.cars);
                const clients = Math.floor(obj.clients);
                const years = Math.floor(obj.years);
                const rating = obj.rating.toFixed(1);

                if (cars !== lastCars && carsNumRef.current) {
                  carsNumRef.current.textContent = `${cars.toLocaleString()}+`;
                  lastCars = cars;
                }
                if (clients !== lastClients && clientsNumRef.current) {
                  clientsNumRef.current.textContent = `${clients.toLocaleString()}+`;
                  lastClients = clients;
                }
                if (years !== lastYears && yearsNumRef.current) {
                  yearsNumRef.current.textContent = `${years}+`;
                  lastYears = years;
                }
                if (rating !== lastRating && ratingNumRef.current) {
                  ratingNumRef.current.textContent = rating;
                  lastRating = rating;
                }
              },
            });
          },
        });
      }
    }, sectionEl);

    // Light refresh after first paint (guarded)
    const raf = requestAnimationFrame(() => {
      try {
        if (sectionRef.current) ScrollTrigger.refresh();
      } catch {
        // ignore
      }
    });

    return () => {
      cancelAnimationFrame(raf);

      // Kill ONLY triggers that belong to this section
      try {
        ScrollTrigger.getAll().forEach((st) => {
          const trig = st.trigger as Element | null;
          if (trig && sectionEl.contains(trig)) st.kill(false);
        });
      } catch {
        // ignore
      }

      // Revert GSAP context
      try {
        ctx.revert();
      } catch {
        // ignore
      }

      // Clear inline props again (prevents sticky styles)
      if (titleRef.current) gsap.set(titleRef.current, { clearProps: "opacity,transform,visibility" });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { clearProps: "opacity,transform,visibility" });
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(`.${styles.card}`);
        gsap.set(cards, { clearProps: "opacity,transform,visibility" });
      }
      if (statsRef.current) gsap.set(statsRef.current, { clearProps: "opacity,transform,visibility" });
    };
  }, [labels]);

  return (
    <section className={styles.showcase} ref={sectionRef}>
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
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/10.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle}>{labels.premiumDetailingTitle}</h3>
            <p className={styles.cardDesc}>{labels.premiumDetailingDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/11.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle}>{labels.ceramicCoatingTitle}</h3>
            <p className={styles.cardDesc}>{labels.ceramicCoatingDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/12.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle}>{labels.paintCorrectionTitle}</h3>
            <p className={styles.cardDesc}>{labels.paintCorrectionDesc}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/13.avif" alt="" width={44} height={44} priority={false} />
            </div>
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
