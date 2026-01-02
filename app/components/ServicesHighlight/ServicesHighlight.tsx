"use client";

import { useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesHighlight.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  icon: string;
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
        icon: "✨",
        title: t.services.list.ceramicCoating,
        description: t.services.descriptions.ceramicCoatingDesc ?? t.services.descriptions.ceramicCoating,
        image: "/NANO/IMG_0555.jpg",
      },
      {
        icon: "🛡️",
        title: t.services.list.paintProtection,
        description: t.services.descriptions.paintProtectionDesc ?? t.services.descriptions.paintProtection,
        image: "/PFF/C0094T01.JPG",
      },
      {
        icon: "💎",
        title: t.services.list.polish,
        description: t.services.descriptions.polishDesc ?? t.services.descriptions.polish,
        image: "/polish.JPG",
      },
      {
        icon: "🖤",
        title: t.services.list.blackEdition,
        description: t.services.descriptions.blackEditionDesc ?? t.services.descriptions.blackEdition,
        image: "/lamborghini.JPG",
      },
      {
        icon: "🔧",
        title: t.services.list.smartRepair,
        description: t.services.descriptions.smartRepairDesc ?? t.services.descriptions.smartRepair,
        image: "https://images.unsplash.com/photo-1658058765281-0833dce61996?auto=format&fit=crop&w=1600&q=80",
      },
      {
        icon: "🪑",
        title: t.services.list.nanoLeather,
        description: t.services.descriptions.nanoLeatherDesc ?? t.services.descriptions.nanoLeather,
        image: "/NANO/IMG_0539.jpg",
      },
    ],
    [t]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Nettoyage ciblé: uniquement les triggers liés à cette section
      ScrollTrigger.getAll().forEach((st) => {
        const triggerEl = st.trigger as Element | null;
        if (triggerEl && sectionRef.current?.contains(triggerEl)) st.kill(true);
      });

      // HEADER
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // CARDS
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(`.${styles.serviceCard}`);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.96, rotateY: -8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // FLOATING DECOR
      if (floatingRef.current) {
        gsap.fromTo(
          floatingRef.current,
          { opacity: 0, x: 120, rotate: 8 },
          {
            opacity: 0.1,
            x: 0,
            rotate: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(floatingRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(floatingRef.current, {
          rotate: "+=4",
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    // Important: Next/Image charge après → refresh
    const refresh = () => ScrollTrigger.refresh();
    const id = window.setTimeout(refresh, 250);

    return () => {
      window.clearTimeout(id);
      ctx.revert();
    };
  }, [t]); // re-run proprement quand la langue change

  const hoverIn = useCallback((el: HTMLElement) => {
    gsap.killTweensOf(el);
    gsap.to(el, { y: -10, scale: 1.02, rotateY: 1.5, duration: 0.25, ease: "power2.out" });
  }, []);

  const hoverOut = useCallback((el: HTMLElement) => {
    gsap.killTweensOf(el);
    gsap.to(el, { y: 0, scale: 1, rotateY: 0, duration: 0.25, ease: "power2.out" });
  }, []);

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
          />
        </div>

        <div className={styles.servicesGrid} ref={gridRef}>
          {services.map((service, index) => (
            <article
              key={`${service.title}-${index}`}
              className={styles.serviceCard}
              onMouseEnter={(e) => hoverIn(e.currentTarget)}
              onMouseLeave={(e) => hoverOut(e.currentTarget)}
            >
              <div className={styles.serviceMedia}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.serviceImage}
                />
              </div>

              <div className={styles.serviceContent}>
                <span className={styles.serviceIcon} aria-hidden="true">
                  {service.icon}
                </span>
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
