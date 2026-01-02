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

  // refs des cartes
  const carRefs = useRef<Array<HTMLDivElement | null>>([]);
  carRefs.current = [];

  const setCarRef = (el: HTMLDivElement | null) => {
    if (!el) return;
    if (!carRefs.current.includes(el)) carRefs.current.push(el);
  };

  const cars: CarItem[] = useMemo(() => {
    const rg = (t as any)?.rotatingGallery ?? {};
    return [
      {
        img: "/cleaningafter.JPG",
        title: rg.car1Title ?? "Elite Performance",
        desc: rg.car1Desc ?? "Premium sports excellence",
      },
      {
        img: "menu.JPG",
        title: rg.car2Title ?? "Executive Class",
        desc: rg.car2Desc ?? "Sophisticated elegance",
      },
      {
        img: "/rotatingcargalley.png",
        title: rg.car3Title ?? "Ultra Luxury",
        desc: rg.car3Desc ?? "Unparalleled craftsmanship",
      },
      {
        img: "/rotatingcargallery.png",
        title: rg.car4Title ?? "Classic Elegance",
        desc: rg.car4Desc ?? "Timeless beauty",
      },
      {
        img: "/rotatingcargallery2.png",
        title: rg.car5Title ?? "Performance Icon",
        desc: rg.car5Desc ?? "Racing heritage",
      },
      {
        img: "https://images.unsplash.com/photo-1649136378672-b965cb9935d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: rg.car6Title ?? "Supercar Dream",
        desc: rg.car6Desc ?? "Ultimate aspiration",
      },
    ];
  }, [t]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // évite des valeurs 3D sans perspective
      gsap.set(sectionRef.current!, { perspective: 2000 });

      // Animation titre
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 80, rotateX: -35, transformOrigin: "50% 50%" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animation sous-titre
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const cards = carRefs.current.filter(Boolean) as HTMLDivElement[];

      // Animations par carte (variation par index)
      cards.forEach((card, i) => {
        const fromVars: gsap.TweenVars = {
          opacity: 0,
          scale: 0.8,
        };

        // petites variations selon i
        if (i % 3 === 0) {
          fromVars.x = -180;
          fromVars.rotateY = -90;
        } else if (i % 3 === 1) {
          fromVars.x = 180;
          fromVars.rotateZ = 12;
        } else {
          fromVars.y = 120;
          fromVars.rotateX = 40;
        }

        gsap.fromTo(
          card,
          fromVars,
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 35%",
              scrub: 1.5,
            },
          }
        );

        // léger "float" permanent (sans casser le scrollTrigger)
        gsap.to(card, {
          y: "+=10",
          duration: 3.2 + i * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.12,
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      // nettoyage extra (utile si hot-reload)
      ScrollTrigger.getAll().forEach((st) => st.kill());
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

        <div className={styles.grid}>
          {cars.map((car, idx) => (
            <div className={styles.carCard} ref={setCarRef} key={idx}>
              <div className={styles.carImageWrapper}>
                <img
                  src={car.img}
                  alt={car.title}
                  className={styles.carImage}
                  loading={idx < 2 ? "eager" : "lazy"}
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
