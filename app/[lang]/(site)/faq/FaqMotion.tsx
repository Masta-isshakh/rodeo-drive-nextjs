// app/[lang]/faq/FAQMotion.client.tsx
"use client";

import { useEffect } from "react";

type Props = { motionKey: string };

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

export default function FAQMotion({ motionKey }: Props) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-faq-root]");
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
        root.querySelectorAll<HTMLElement>("[data-faq-hero-content] [data-faq-animate]")
      );

      const categoriesWrap = root.querySelector<HTMLElement>("[data-faq-cards]");
      const categoryCards = Array.from(root.querySelectorAll<HTMLElement>("[data-faq-card]"));

      const faqGrid = root.querySelector<HTMLElement>("[data-faq-grid]");
      const faqItems = Array.from(root.querySelectorAll<HTMLElement>("[data-faq-item]"));

      const cta = root.querySelector<HTMLElement>("[data-faq-cta] [data-faq-animate]");

      const ctx = gsap.context(() => {
        if (heroBits.length) {
          gsap.set(heroBits, { autoAlpha: 0, y: 14 });
          gsap.to(heroBits, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: root.querySelector("[data-faq-hero]") ?? root,
              start: "top 85%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

        if (categoriesWrap && categoryCards.length) {
          gsap.set(categoryCards, { autoAlpha: 0, y: 12, scale: 0.995 });
          gsap.to(categoryCards, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: categoriesWrap,
              start: "top 88%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

        if (faqGrid && faqItems.length) {
          gsap.set(faqItems, { autoAlpha: 0, y: 10 });
          gsap.to(faqItems, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: faqGrid,
              start: "top 90%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

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
