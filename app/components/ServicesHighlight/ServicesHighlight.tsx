"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesHighlight.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  title: string;
  description: string;
  image: string;
};

export default function ServicesHighlight() {
  const { t } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  const services: Service[] = useMemo(
    () => [
      {
        title: t.services.list.ceramicCoating,
        description: t.services.descriptions.ceramicCoatingDesc ?? t.services.descriptions.ceramicCoating,
        image: "/nano3.PNG",
      },
      {
        title: t.services.list.paintProtection,
        description: t.services.descriptions.paintProtectionDesc ?? t.services.descriptions.paintProtection,
        image: "/ppf.png",
      },
      {
        title: t.services.list.polish,
        description: t.services.descriptions.polishDesc ?? t.services.descriptions.polish,
        image: "/polish.png",
      },
      {
        title: t.services.list.blackEdition,
        description: t.services.descriptions.blackEditionDesc ?? t.services.descriptions.blackEdition,
        image: "/defender.PNG",
      },
      {
        title: t.services.list.smartRepair,
        description: t.services.descriptions.smartRepairDesc ?? t.services.descriptions.smartRepair,
        image: "/paint2.PNG",
      },
      {
        title: t.services.list.nanoLeather,
        description: t.services.descriptions.nanoLeatherDesc ?? t.services.descriptions.nanoLeather,
        image: "/thermal.png",
      },
    ],
    [t]
  );

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // IMPORTANT: on force un refresh léger après images/layout
    // mais seulement 1 fois et sans boucle.
    const scheduleRefresh = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const ctx = gsap.context(() => {
      // Si reduced motion => aucun ScrollTrigger, tout visible immédiatement
      if (prefersReducedMotion) {
        if (headerRef.current) gsap.set(headerRef.current, { opacity: 1, y: 0 });
        if (gridRef.current) {
          const cards = gridRef.current.querySelectorAll(`.${styles.serviceCard}`);
          gsap.set(cards, { opacity: 1, y: 0 });
        }
        if (floatingRef.current) gsap.set(floatingRef.current, { opacity: 0.08, x: 0, y: 0 });
        return;
      }

      // HEADER (simple: opacity + y)
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true, // très performant
            },
          }
        );
      }

      // CARDS (stagger léger, sans 3D)
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.querySelectorAll(`.${styles.serviceCard}`));

        gsap.fromTo(
          cards,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true, // évite reverse / recalcul en scroll
            },
          }
        );
      }

      // FLOATING DECOR (léger, pas de scrub)
      if (floatingRef.current) {
        gsap.fromTo(
          floatingRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 0.08,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionEl,
              start: "top 85%",
              once: true,
            },
          }
        );

        // petite "respiration" très légère
        gsap.to(floatingRef.current, {
          y: "+=14",
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      scheduleRefresh();
    }, sectionEl);

    return () => {
      ctx.revert();
      // évite accumulations de triggers
      ScrollTrigger.clearMatchMedia?.();
    };
  }, [t]);

  return (
    <section className={styles.servicesSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={headerRef}>
          <h2 className={styles.sectionTitle}>{t.services.title}</h2>
          <p className={styles.sectionSubtitle}>{t.services.subtitle}</p>
        </div>

        <div className={styles.floatingCar} ref={floatingRef} aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1732818653412-130e4a87f442?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 30vw"
            className={styles.floatingImg}
            priority={false}
          />
        </div>

        <div className={styles.servicesGrid} ref={gridRef}>
          {services.map((service, index) => (
            <article key={`${service.title}-${index}`} className={styles.serviceCard}>
              <div className={styles.serviceMedia}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.serviceImage}
                  // si ces images sont visibles très tôt sur la home, tu peux mettre priority sur les 1-2 premières:
                  // priority={index < 2}
                />
              </div>

              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>

                <Link href="/services" className={styles.serviceLink}>
                  {t.services.learnMore} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Link href="/services" className={styles.viewAllButton}>
            {t.services.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
