"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Floating3DCars.module.css";

gsap.registerPlugin(ScrollTrigger);

type CarConfig = {
  // entrée
  from: gsap.TweenVars;
  // rotation au scroll (valeurs cibles)
  toScroll: gsap.TweenVars;
  // floating idle
  float: gsap.TweenVars;
};

export default function Floating3DCars() {
  const containerRef = useRef<HTMLDivElement>(null);

  const car1Ref = useRef<HTMLDivElement>(null);
  const car2Ref = useRef<HTMLDivElement>(null);
  const car3Ref = useRef<HTMLDivElement>(null);
  const car4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cars = [
        car1Ref.current,
        car2Ref.current,
        car3Ref.current,
        car4Ref.current,
      ].filter(Boolean) as HTMLDivElement[];

      // (optionnel) mieux pour les transforms 3D
      cars.forEach((el) => {
        gsap.set(el, { transformPerspective: 2000, transformStyle: "preserve-3d" });
      });

      // Config par carte (mêmes effets que toi, mais propres)
      const configs: CarConfig[] = [
        // Car 1 - Top Left
        {
          from: { opacity: 0, scale: 0.85, rotateY: -90, x: -40 },
          toScroll: { rotateY: 360 },
          float: { y: "-=18", duration: 4.2, ease: "sine.inOut", yoyo: true, repeat: -1 },
        },
        // Car 2 - Top Right
        {
          from: { opacity: 0, scale: 0.85, rotateY: 90, x: 40 },
          toScroll: { rotateY: -360 },
          float: { y: "+=22", duration: 4.7, ease: "sine.inOut", yoyo: true, repeat: -1 },
        },
        // Car 3 - Middle Left
        {
          from: { opacity: 0, scale: 0.8, rotateY: -45, rotateX: -25, y: 30 },
          toScroll: { rotateY: 360, rotateX: 12 },
          float: { y: "-=26", rotateZ: "+=2.5", duration: 5.2, ease: "sine.inOut", yoyo: true, repeat: -1 },
        },
        // Car 4 - Bottom Right
        {
          from: { opacity: 0, scale: 0.8, rotateY: 45, rotateZ: 12, y: -20 },
          toScroll: { rotateY: -360, rotateZ: 8 },
          float: { y: "+=18", rotateZ: "-=2", duration: 5.6, ease: "sine.inOut", yoyo: true, repeat: -1 },
        },
      ];

      // 1) Animations d’entrée (ScrollTrigger individuel par carte)
      cars.forEach((el, i) => {
        gsap.fromTo(
          el,
          configs[i].from,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 2) UN SEUL ScrollTrigger global pour la rotation (plus stable)
      const rotTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5,
        },
      });

      cars.forEach((el, i) => {
        rotTl.to(
          el,
          {
            ...configs[i].toScroll,
            ease: "none",
          },
          0
        );
      });

      // 3) Floating idle (sans ScrollTrigger)
      cars.forEach((el, i) => {
        gsap.to(el, {
          ...configs[i].float,
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      // nettoyage extra si HMR / dev strict
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className={styles.floating3DCarsContainer} ref={containerRef} aria-hidden="true">
      {/* Car 1 */}
      <div className={styles.floatingCar} style={{ top: "15vh", left: "3%" }} ref={car1Ref}>
        <div className={styles.carWrapper}>
          <img
            src="https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt=""
            className={styles.carImage}
            loading="eager"
            draggable={false}
          />
          <div className={styles.carGlow} />
        </div>
      </div>

      {/* Car 2 */}
      <div className={styles.floatingCar} style={{ top: "20vh", right: "5%" }} ref={car2Ref}>
        <div className={styles.carWrapper}>
          <img
            src="https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt=""
            className={styles.carImage}
            loading="lazy"
            draggable={false}
          />
          <div className={styles.carGlow} />
        </div>
      </div>

      {/* Car 3 */}
      <div className={styles.floatingCar} style={{ top: "50vh", left: "2%" }} ref={car3Ref}>
        <div className={styles.carWrapper}>
          <img
            src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt=""
            className={styles.carImage}
            loading="lazy"
            draggable={false}
          />
          <div className={styles.carGlow} />
        </div>
      </div>

      {/* Car 4 */}
      <div className={styles.floatingCar} style={{ bottom: "15vh", right: "4%" }} ref={car4Ref}>
        <div className={styles.carWrapper}>
          <img
            src="https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt=""
            className={styles.carImage}
            loading="lazy"
            draggable={false}
          />
          <div className={styles.carGlow} />
        </div>
      </div>
    </div>
  );
}
