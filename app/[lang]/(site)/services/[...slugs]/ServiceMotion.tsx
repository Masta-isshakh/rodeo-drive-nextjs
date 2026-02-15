// app/[lang]/services/[...slugs]/ServiceRouteMotion.client.tsx
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

export default function ServiceRouteMotion({ motionKey }: Props) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-sr-root]");
    if (!root) return;

    const { reduced, lite } = getMotionFlags();
    if (reduced || lite) return;

    let rootIO: IntersectionObserver | null = null;
    let sectionIO: IntersectionObserver | null = null;
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const init = async () => {
      const gsapMod = await import("gsap");
      if (cancelled) return;

      const gsap = resolveMod(gsapMod, "gsap");

      const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-sr-reveal]"));
      const visibleMap = new WeakSet<Element>();

      const clear = (els: Element[]) => {
        if (!els.length) return;
        try {
          gsap.set(els, { clearProps: "opacity,transform,visibility" });
        } catch {}
      };

      const hide = (els: Element[]) => {
        if (!els.length) return;
        try {
          gsap.set(els, { autoAlpha: 0, y: 14 });
        } catch {}
      };

      const show = (els: Element[]) => {
        if (!els.length) return;
        try {
          gsap.to(els, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.06,
          });
        } catch {}
      };

      // Prepare: hide all reveal items, but only when motion is active
      sections.forEach((sec) => {
        const items = Array.from(sec.querySelectorAll("[data-sr-reveal-item]"));
        clear(items);
        hide(items);
      });

      sectionIO = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            if (visibleMap.has(e.target)) continue;

            visibleMap.add(e.target);

            const sec = e.target as HTMLElement;
            const items = Array.from(sec.querySelectorAll("[data-sr-reveal-item]"));
            show(items);

            sectionIO?.unobserve(sec);
          }
        },
        { rootMargin: "180px 0px", threshold: 0.12 }
      );

      sections.forEach((sec) => sectionIO?.observe(sec));

      cleanup = () => {
        try {
          sectionIO?.disconnect();
        } catch {}
        sectionIO = null;

        // Clear inline props so navigating back doesn't “stick”
        sections.forEach((sec) => {
          const items = Array.from(sec.querySelectorAll("[data-sr-reveal-item]"));
          clear(items);
        });
      };
    };

    // load GSAP only when page is near viewport
    rootIO = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        rootIO?.disconnect();
        rootIO = null;
        init().catch(() => {});
      },
      { rootMargin: "250px 0px", threshold: 0.01 }
    );

    rootIO.observe(root);

    return () => {
      cancelled = true;
      try {
        rootIO?.disconnect();
      } catch {}
      rootIO = null;

      cleanup?.();
    };
  }, [motionKey]);

  return null;
}
