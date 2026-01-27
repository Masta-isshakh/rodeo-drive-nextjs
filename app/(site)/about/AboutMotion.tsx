"use client";

import { useEffect } from "react";

type Props = {
  motionKey: string;
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

export default function AboutMotion({ motionKey }: Props) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-about-root]");
    if (!root) return;

    const { reduced, lite } = getMotionFlags();
    if (reduced || lite) return;

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

      const heroBits = Array.from(
        root.querySelectorAll<HTMLElement>("[data-about-hero-content] [data-about-animate]")
      );

      const storyCards = Array.from(
        root.querySelectorAll<HTMLElement>("[data-about-story] [data-about-card]")
      );

      const valuesCards = Array.from(
        root.querySelectorAll<HTMLElement>("[data-about-values] [data-about-card]")
      );

      const achievementCards = Array.from(
        root.querySelectorAll<HTMLElement>("[data-about-achievements] [data-about-card]")
      );

      const cta = root.querySelector<HTMLElement>("[data-about-cta] [data-about-animate]");

      const ctx = gsap.context(() => {
        // Hero
        if (heroBits.length) {
          gsap.set(heroBits, { autoAlpha: 0, y: 14 });
          gsap.to(heroBits, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: root.querySelector("[data-about-hero]") ?? root,
              start: "top 85%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

        // Story
        if (storyCards.length) {
          gsap.set(storyCards, { autoAlpha: 0, y: 12 });
          gsap.to(storyCards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: root.querySelector("[data-about-story-grid]") ?? root,
              start: "top 88%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

        // Values
        if (valuesCards.length) {
          gsap.set(valuesCards, { autoAlpha: 0, y: 12, scale: 0.995 });
          gsap.to(valuesCards, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: root.querySelector("[data-about-values-grid]") ?? root,
              start: "top 90%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

        // Achievements
        if (achievementCards.length) {
          gsap.set(achievementCards, { autoAlpha: 0, y: 12 });
          gsap.to(achievementCards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: root.querySelector("[data-about-timeline]") ?? root,
              start: "top 90%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

        // CTA
        if (cta) {
          gsap.set(cta, { autoAlpha: 0, y: 12 });
          gsap.to(cta, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cta,
              start: "top 90%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }
      }, root);

      const raf = requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh();
        } catch {
          // ignore
        }
      });

      cleanup = () => {
        cancelAnimationFrame(raf);
        try {
          ScrollTrigger.getAll().forEach((st: any) => {
            const trig = st?.trigger as Element | null;
            if (trig && root.contains(trig)) st.kill(false);
          });
        } catch {
          // ignore
        }
        try {
          ctx.revert();
        } catch {
          // ignore
        }
      };
    };

    // ✅ Load GSAP only when page is near viewport
    io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io?.disconnect();
        io = null;
        init().catch(() => {});
      },
      { rootMargin: "250px 0px", threshold: 0.01 }
    );

    io.observe(root);

    return () => {
      cancelled = true;
      io?.disconnect();
      cleanup?.();
    };
  }, [motionKey]);

  return null;
}
