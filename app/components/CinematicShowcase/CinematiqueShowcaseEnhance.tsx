"use client";

import { useEffect } from "react";

type Ids = {
  section: string;
  title: string;
  subtitle: string;
  cards: string;
  stats: string;
  cars: string;
  clients: string;
  years: string;
  rating: string;
};

function getMotionFlags() {
  if (typeof window === "undefined" || !window.matchMedia) return { reduced: false, lite: false };
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

export default function CinematicShowcaseEnhance({ ids }: { ids: Ids }) {
  useEffect(() => {
    const sectionEl = document.getElementById(ids.section);
    if (!sectionEl) return;

    const { reduced, lite } = getMotionFlags();

    // ✅ No GSAP on reduced motion or mobile/coarse pointer
    if (reduced || lite) {
      const cars = document.getElementById(ids.cars);
      const clients = document.getElementById(ids.clients);
      const years = document.getElementById(ids.years);
      const rating = document.getElementById(ids.rating);

      if (cars) cars.textContent = "5,000+";
      if (clients) clients.textContent = "10,000+";
      if (years) years.textContent = "15+";
      if (rating) rating.textContent = "4.9";
      return;
    }

    let io: IntersectionObserver | null = null;
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const init = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;

      const gsap = resolveMod(gsapMod, "gsap");
      const ScrollTrigger = resolveMod(stMod, "ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      const titleEl = document.getElementById(ids.title);
      const subtitleEl = document.getElementById(ids.subtitle);
      const cardsWrap = document.getElementById(ids.cards);
      const statsEl = document.getElementById(ids.stats);

      const cards = cardsWrap ? Array.from(cardsWrap.children) : [];

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

        if (titleEl) tl.fromTo(titleEl, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65 }, 0);
        if (subtitleEl) tl.fromTo(subtitleEl, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.08);

        if (cards.length) {
          tl.fromTo(
            cards,
            { autoAlpha: 0, y: 14, scale: 0.995 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08 },
            0.18
          );
        }

        if (statsEl) tl.fromTo(statsEl, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.3);

        // ✅ numbers
        if (statsEl) {
          const carsEl = document.getElementById(ids.cars);
          const clientsEl = document.getElementById(ids.clients);
          const yearsEl = document.getElementById(ids.years);
          const ratingEl = document.getElementById(ids.rating);

          const obj = { cars: 0, clients: 0, years: 0, rating: 0 };
          let lastCars = -1, lastClients = -1, lastYears = -1, lastRating = "";

          ScrollTrigger.create({
            trigger: statsEl,
            start: "top 88%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                cars: 5000,
                clients: 10000,
                years: 15,
                rating: 4.9,
                duration: 1.15,
                ease: "power2.out",
                onUpdate: () => {
                  const cars = Math.floor(obj.cars);
                  const clients = Math.floor(obj.clients);
                  const years = Math.floor(obj.years);
                  const rating = obj.rating.toFixed(1);

                  if (cars !== lastCars && carsEl) { carsEl.textContent = `${cars.toLocaleString()}+`; lastCars = cars; }
                  if (clients !== lastClients && clientsEl) { clientsEl.textContent = `${clients.toLocaleString()}+`; lastClients = clients; }
                  if (years !== lastYears && yearsEl) { yearsEl.textContent = `${years}+`; lastYears = years; }
                  if (rating !== lastRating && ratingEl) { ratingEl.textContent = rating; lastRating = rating; }
                },
              });
            },
          });
        }
      }, sectionEl);

      const raf = requestAnimationFrame(() => {
        try { ScrollTrigger.refresh(); } catch {}
      });

      cleanup = () => {
        cancelAnimationFrame(raf);
        try {
          ScrollTrigger.getAll().forEach((st: any) => {
            const trig = st.trigger as Element | null;
            if (trig && sectionEl.contains(trig)) st.kill(false);
          });
        } catch {}
        try { ctx.revert(); } catch {}
      };
    };

    // ✅ Load GSAP only when close to viewport
    io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io?.disconnect();
        io = null;
        init().catch(() => {});
      },
      { rootMargin: "250px 0px", threshold: 0.01 }
    );

    io.observe(sectionEl);

    return () => {
      cancelled = true;
      io?.disconnect();
      cleanup?.();
    };
  }, [ids]);

  return null;
}
