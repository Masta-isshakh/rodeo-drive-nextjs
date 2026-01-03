"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./RotatingCarGallery.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type CarItem = {
  img: string;
  title: string;
  desc: string;
};

export default function RotatingCarGallery() {
  const { t } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const cars: CarItem[] = useMemo(() => {
    const rg = (t as any)?.rotatingGallery ?? {};
    return [
      { img: "/cleaningafter.JPG", title: rg.car1Title ?? "Elite Performance", desc: rg.car1Desc ?? "Premium sports excellence" },
      { img: "/menu.JPG", title: rg.car2Title ?? "Executive Class", desc: rg.car2Desc ?? "Sophisticated elegance" },
      { img: "/changedcolor.png", title: rg.car3Title ?? "Ultra Luxury", desc: rg.car3Desc ?? "Unparalleled craftsmanship" },
      { img: "/lambor.png", title: rg.car4Title ?? "Classic Elegance", desc: rg.car4Desc ?? "Timeless beauty" },
      { img: "/rotatingcargallery2.png", title: rg.car5Title ?? "Performance Icon", desc: rg.car5Desc ?? "Racing heritage" },
      {
        img: "https://images.unsplash.com/photo-1649136378672-b965cb9935d5?auto=format&fit=crop&w=1200&q=80",
        title: rg.car6Title ?? "Supercar Dream",
        desc: rg.car6Desc ?? "Ultimate aspiration",
      },
    ];
  }, [t]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let rafId: number | null = null;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // On garde une liste de toutes les animations créées
    const createdAnims: gsap.core.Animation[] = [];

    // IMPORTANT: on scope tout à la section pour éviter de toucher le reste du site
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
        if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
        if (gridRef.current) {
          const cards = gridRef.current.querySelectorAll(`.${styles.carCard}`);
          gsap.set(cards, { opacity: 1, y: 0 });
        }
        return;
      }

      // TITRE
      if (titleRef.current) {
        const a = gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
        createdAnims.push(a);
      }

      // SOUS-TITRE
      if (subtitleRef.current) {
        const a = gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
        createdAnims.push(a);
      }

      // CARTES
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.querySelectorAll(`.${styles.carCard}`));

        const a = gsap.fromTo(
          cards,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
        createdAnims.push(a);
      }

      // Refresh après layout — on le met en rAF, MAIS on l’annule si unmount
      rafId = window.requestAnimationFrame(() => {
        // sécurise le cas où le composant se démonte avant ce rAF
        if (!sectionRef.current) return;
        ScrollTrigger.refresh();
      });
    }, sectionEl);

    return () => {
      // 1) annuler rAF si pas encore exécuté
      if (rafId !== null) window.cancelAnimationFrame(rafId);

      // 2) kill proprement triggers de NOS animations (évite removeChild sur DOM absent)
      for (const anim of createdAnims) {
        const st = (anim as any).scrollTrigger as ScrollTrigger | undefined;
        if (st) st.kill(false);
        anim.kill();
      }

      // 3) revert context (styles inline, etc.)
      ctx.revert();
    };
  }, [cars]);

  return (
    <section className={styles.gallery} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title} ref={titleRef}>
          {(t as any)?.rotatingGallery?.title ?? "Luxury Fleet Showcase"}
        </h2>

        <p className={styles.subtitle} ref={subtitleRef}>
          {(t as any)?.rotatingGallery?.subtitle ?? "Experience automotive excellence through dynamic perspectives"}
        </p>

        <div className={styles.grid} ref={gridRef}>
          {cars.map((car, idx) => (
            <div
              key={idx}
              className={`${styles.carCard} ${styles.float}`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className={styles.carImageWrapper}>
                <img
                  src={car.img}
                  alt={car.title}
                  className={styles.carImage}
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.carInfo}>
                <h3>{car.title}</h3>
                <p>{car.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
