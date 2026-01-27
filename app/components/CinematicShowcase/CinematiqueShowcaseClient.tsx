"use client";

import type { RefObject } from "react";
import { useEffect } from "react";

type Props = {
  motionKey: string;
  sectionRef: RefObject<HTMLElement>;
  titleRef: RefObject<HTMLHeadingElement>;
  subtitleRef: RefObject<HTMLParagraphElement>;
  cardsContainerRef: RefObject<HTMLDivElement>;
  statsRef: RefObject<HTMLDivElement>;
  carsNumRef: RefObject<HTMLDivElement>;
  clientsNumRef: RefObject<HTMLDivElement>;
  yearsNumRef: RefObject<HTMLDivElement>;
  ratingNumRef: RefObject<HTMLDivElement>;
};

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

function resolveMod<T = any>(m: any, key?: string): T {
  if (!m) return m;
  if (key && m[key]) return m[key];
  return m.default ?? m;
}

export default function CinematicShowcaseMotion({
  motionKey,
  sectionRef,
  titleRef,
  subtitleRef,
  cardsContainerRef,
  statsRef,
  carsNumRef,
  clientsNumRef,
  yearsNumRef,
  ratingNumRef,
}: Props) {
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const { reduced, lite } = getMotionFlags();

    // Reduced/lite: no GSAP, set final states immediately
    if (reduced || lite) {
      // Make sure everything is visible (no animation)
      if (titleRef.current) titleRef.current.style.opacity = "1";
      if (subtitleRef.current) subtitleRef.current.style.opacity = "1";

      const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>("*");
      cards?.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });

      if (statsRef.current) {
        statsRef.current.style.opacity = "1";
        statsRef.current.style.transform = "none";
      }

      if (carsNumRef.current) carsNumRef.current.textContent = "5,000+";
      if (clientsNumRef.current) clientsNumRef.current.textContent = "10,000+";
      if (yearsNumRef.current) yearsNumRef.current.textContent = "15+";
      if (ratingNumRef.current) ratingNumRef.current.textContent = "4.9";

      return;
    }

    let io: IntersectionObserver | null = null;
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const init = async () => {
      // ✅ Lazy-load GSAP only when needed (big bundle win)
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");

      if (cancelled) return;

      const gsap = resolveMod(gsapMod, "gsap");
      const ScrollTrigger = resolveMod(stMod, "ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Reduce refresh churn on mobile
      ScrollTrigger.config({ ignoreMobileResize: true });

      // Clear leftover inline props (prevents “stuck” states after navigation)
      if (titleRef.current) gsap.set(titleRef.current, { clearProps: "opacity,transform,visibility" });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { clearProps: "opacity,transform,visibility" });

      const cards = cardsContainerRef.current
        ? Array.from(cardsContainerRef.current.querySelectorAll(`.${(await import("./CinematicShowcase.module.css")).default.card}`))
        : [];

      // If CSS module import fails for any reason, fallback to selecting children
      const safeCards: Element[] =
        cards.length > 0 ? cards : (cardsContainerRef.current ? Array.from(cardsContainerRef.current.children) : []);

      if (safeCards.length) gsap.set(safeCards, { clearProps: "opacity,transform,visibility" });
      if (statsRef.current) gsap.set(statsRef.current, { clearProps: "opacity,transform,visibility" });

      const ctx = gsap.context(() => {
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

        if (safeCards.length) {
          tl.fromTo(
            safeCards,
            { autoAlpha: 0, y: 14, scale: 0.995 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08 },
            0.18
          );
        }

        if (statsRef.current) {
          tl.fromTo(statsRef.current, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.3);
        }

        // Numbers count (once)
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

      const raf = requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh();
        } catch {
          // ignore
        }
      });

      cleanup = () => {
        cancelAnimationFrame(raf);

        // Kill ONLY triggers that belong to this section
        try {
          ScrollTrigger.getAll().forEach((st: any) => {
            const trig = st.trigger as Element | null;
            if (trig && sectionEl.contains(trig)) st.kill(false);
          });
        } catch {
          // ignore
        }

        try {
          ctx.revert();
        } catch {
          // ignore
        }

        // Clear inline props again
        if (titleRef.current) gsap.set(titleRef.current, { clearProps: "opacity,transform,visibility" });
        if (subtitleRef.current) gsap.set(subtitleRef.current, { clearProps: "opacity,transform,visibility" });
        if (safeCards.length) gsap.set(safeCards, { clearProps: "opacity,transform,visibility" });
        if (statsRef.current) gsap.set(statsRef.current, { clearProps: "opacity,transform,visibility" });
      };
    };

    // ✅ Start only when section is close to viewport (delays GSAP download/execution)
    io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit) return;
        io?.disconnect();
        io = null;
        init().catch(() => {
          // ignore
        });
      },
      { rootMargin: "250px 0px", threshold: 0.01 }
    );

    io.observe(sectionEl);

    return () => {
      cancelled = true;
      io?.disconnect();
      cleanup?.();
    };
  }, [motionKey, sectionRef, titleRef, subtitleRef, cardsContainerRef, statsRef, carsNumRef, clientsNumRef, yearsNumRef, ratingNumRef]);

  return null;
}
