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
        image: "/ceramic.PNG",
      },
      {
        title: t.services.list.paintProtection,
        description: t.services.descriptions.paintProtectionDesc ?? t.services.descriptions.paintProtection,
        image: "/ppf.png",
      },
      {
        title: t.services.list.polish,
        description: t.services.descriptions.polishDesc ?? t.services.descriptions.polish,
        image: "/polish2.png",
      },
      {
        title: t.services.list.blackEdition,
        description: t.services.descriptions.blackEditionDesc ?? t.services.descriptions.blackEdition,
        image: "/defenderchangedcolor.PNG",
      },
      {
        title: t.services.list.smartRepair,
        description: t.services.descriptions.smartRepairDesc ?? t.services.descriptions.smartRepair,
        image: "/paintoriginal.PNG",
      },
      {
        title: t.services.list.nanoLeather,
        description: t.services.descriptions.nanoLeatherDesc ?? t.services.descriptions.nanoLeather,
        image: "/solar.PNG",
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

  const ctx = gsap.context(() => {
    // Reduced motion: show everything, no triggers
    if (prefersReducedMotion) {
      if (headerRef.current) gsap.set(headerRef.current, { autoAlpha: 1, y: 0 });
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(`.${styles.serviceCard}`);
        gsap.set(cards, { autoAlpha: 1, y: 0 });
      }
      if (floatingRef.current) gsap.set(floatingRef.current, { autoAlpha: 0.08, x: 0, y: 0 });
      return;
    }

    // Header reveal (fast)
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
        }
      );
    }

    // Cards reveal (BATCH = fewer triggers, better performance)
    if (gridRef.current) {
      const cards = gsap.utils.toArray<HTMLElement>(
        gridRef.current.querySelectorAll(`.${styles.serviceCard}`)
      );

      gsap.set(cards, { autoAlpha: 0, y: 18 });

      ScrollTrigger.batch(cards, {
        start: "top 86%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.06,
            overwrite: true,
          });
        },
      });
    }

    // Floating decor reveal + ultra-light breathing motion (transform only)
    if (floatingRef.current) {
      gsap.fromTo(
        floatingRef.current,
        { autoAlpha: 0, x: 50 },
        {
          autoAlpha: 0.09,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionEl, start: "top 85%", once: true },
        }
      );

      gsap.to(floatingRef.current, {
        y: "+=14",
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, sectionEl);

  return () => ctx.revert();
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
