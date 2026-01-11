"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Rotating3DCar.module.css";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

export default function Rotating3DCar() {
  const sectionRef = useRef<HTMLElement>(null);
  const carContainerRef = useRef<HTMLDivElement>(null); // rotate this
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const angleTextRef = useRef<HTMLDivElement>(null);

  const { t } = useI18n();

  const labels = useMemo(() => {
    const inspection = (t as any)?.inspection360 ?? {};
    return {
      title: safeText(inspection.title, "360° Inspection"),
      subtitle: safeText(inspection.subtitle, "Every Angle Perfected"),
      description: safeText(
        inspection.description,
        "We examine every detail from all perspectives to ensure flawless results."
      ),
      rotation: safeText(inspection.rotation, "Rotation"),
      frontView: safeText(inspection.frontView, "Front View"),
      sideProfile: safeText(inspection.sideProfile, "Side Profile"),
      rearView: safeText(inspection.rearView, "Rear View"),
      threeQuarter: safeText(inspection.threeQuarter, "Three Quarter"),
    };
  }, [t]);

  const carImages = useMemo(
    () => [
      {
        url: "https://images.unsplash.com/photo-1760381558154-0887c4539467?auto=format&fit=crop&w=1400&q=80",
        angle: 0,
        title: labels.frontView,
      },
      {
        url: "https://images.unsplash.com/photo-1558992658-08a063bb01af?auto=format&fit=crop&w=1400&q=80",
        angle: 90,
        title: labels.sideProfile,
      },
      {
        url: "https://images.unsplash.com/photo-1602210738255-3c9c94c0149c?auto=format&fit=crop&w=1400&q=80",
        angle: 180,
        title: labels.rearView,
      },
      {
        url: "https://images.unsplash.com/photo-1683693066225-028b1e30bc6e?auto=format&fit=crop&w=1400&q=80",
        angle: 270,
        title: labels.threeQuarter,
      },
    ],
    [labels]
  );

  useEffect(() => {
    if (!sectionRef.current || !carContainerRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Responsive translateZ: recalculé à chaque refresh
      const setZ = () => {
        const el = carContainerRef.current!;
        const w = el.clientWidth || 900;
        // Z dynamique (mobile <-> desktop)
        // 0.55 * width donne un bon rendu 3D, clamp pour éviter extrêmes.
        const z = gsap.utils.clamp(220, 520, Math.round(w * 0.55));
        el.style.setProperty("--z", `${z}px`);
      };

      setZ();
      ScrollTrigger.addEventListener("refreshInit", setZ);

      // Entrée titres
      if (!prefersReducedMotion && titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50, rotateX: -30 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 1, y: 0, rotateX: 0 });
      }

      if (!prefersReducedMotion && descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else if (descriptionRef.current) {
        gsap.set(descriptionRef.current, { opacity: 1, y: 0 });
      }

      // Setup 3D container
      gsap.set(carContainerRef.current, {
        transformStyle: "preserve-3d",
        rotateY: 0,
      });

      // Pin + rotation timeline (stable)
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2400",
          scrub: prefersReducedMotion ? false : 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // petit “breathing” (optionnel) uniquement si motion OK
      if (!prefersReducedMotion) {
        tl.to(carContainerRef.current, { scale: 1.2, duration: 0.25 }, 0)
          .to(carContainerRef.current, { y: -35, duration: 0.45 }, 0)
          .to(carContainerRef.current, { y: 0, duration: 0.45 }, 0.45)
          .to(carContainerRef.current, { scale: 1, duration: 0.25 }, 0.75);
      }

      // Rotation principale
      tl.to(
        carContainerRef.current,
        {
          rotateY: 360,
          duration: 1,
          onUpdate: () => {
            if (!angleTextRef.current || !carContainerRef.current) return;
            // Lecture réelle de la rotation pour affichage fiable
            const rot = Number(gsap.getProperty(carContainerRef.current, "rotateY")) || 0;
            const normalized = ((rot % 360) + 360) % 360;
            angleTextRef.current.textContent = `${Math.round(normalized)}°`;
          },
        },
        0
      );

      // Fix affichage initial
      if (angleTextRef.current) angleTextRef.current.textContent = "0°";

      // Force refresh (important après setZ)
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", setZ);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [labels]); // langue change => texte change + re-init propre

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title} ref={titleRef}>
            <span className={styles.titleGradient}>{labels.title}</span>
            <br />
            {labels.subtitle}
          </h2>
          <p className={styles.description} ref={descriptionRef}>
            {labels.description}
          </p>
        </div>

        <div className={styles.carWrapper}>
          <div className={styles.carContainer} ref={carContainerRef}>
            {carImages.map((car, index) => (
              <div
                key={`${car.angle}-${index}`}
                className={styles.carImage}
                style={{ transform: `rotateY(${car.angle}deg) translateZ(var(--z))` }}
              >
                <img src={car.url} alt={car.title} loading="lazy" draggable={false} />
                <div className={styles.carLabel}>{car.title}</div>
              </div>
            ))}
          </div>

          <div className={styles.angleIndicator}>
            <div className={styles.angleDisplay} ref={angleTextRef}>
              0°
            </div>
            <div className={styles.angleLabel}>{labels.rotation}</div>
          </div>

          <div className={styles.reflectionLine} />
          <div className={styles.scanLine} />
        </div>
      </div>

      <div className={styles.backgroundGrid} />
      <div className={styles.gradientOverlay} />
    </section>
  );
}
