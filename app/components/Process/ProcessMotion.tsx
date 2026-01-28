"use client";

import { useEffect } from "react";

type Ids = {
  section: string;
  header: string;
  line: string;
  steps: string;
  float: string;

  title: string;
  subtitle: string;

  s1t: string; s1d: string;
  s2t: string; s2d: string;
  s3t: string; s3d: string;
  s4t: string; s4d: string;
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

export default function ProcessEnhance({ ids }: { ids: Ids }) {
  useEffect(() => {
    const root = document.getElementById(ids.section);
    if (!root) return;

    const { reduced, lite } = getMotionFlags();
    if (reduced || lite) {
      // ✅ Ensure floating car doesn't stay at opacity 0 on desktop if GSAP skipped
      const car = document.getElementById(ids.float);
      if (car) car.style.opacity = "0.12";
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

      const headerBits: HTMLElement[] = [
        document.getElementById(ids.title) as HTMLElement | null,
        document.getElementById(ids.subtitle) as HTMLElement | null,
      ].filter(Boolean) as HTMLElement[];

      const line = document.getElementById(ids.line) as HTMLElement | null;
      const floatCar = document.getElementById(ids.float) as HTMLElement | null;
      const stepsWrap = document.getElementById(ids.steps);
      const steps = stepsWrap ? Array.from(stepsWrap.children) as HTMLElement[] : [];

      const clear = (els: HTMLElement[]) => {
        if (!els.length) return;
        try {
          gsap.set(els, { clearProps: "opacity,transform,visibility" });
        } catch {}
      };

      clear(headerBits);
      clear(steps);
      if (line) clear([line]);
      if (floatCar) clear([floatCar]);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
            invalidateOnRefresh: false,
          },
        });

        if (headerBits.length) {
          tl.fromTo(
            headerBits,
            { autoAlpha: 0, y: 22 },
            { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 },
            0
          );
        }

        if (floatCar) {
          tl.fromTo(
            floatCar,
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 0.12, y: 0, duration: 0.7 },
            0.05
          );
        }

        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0, transformOrigin: "0% 50%" },
            { scaleX: 1, duration: 0.7 },
            0.1
          );
        }

        if (steps.length) {
          tl.fromTo(
            steps,
            { autoAlpha: 0, y: 16, scale: 0.985 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 },
            0.18
          );
        }
      }, root);

      const raf = requestAnimationFrame(() => {
        try { ScrollTrigger.refresh(); } catch {}
      });

      cleanup = () => {
        cancelAnimationFrame(raf);
        try {
          ScrollTrigger.getAll().forEach((st: any) => {
            const trig = st?.trigger as Element | null;
            if (trig && root.contains(trig)) st.kill(false);
          });
        } catch {}
        try { ctx.revert(); } catch {}

        clear(headerBits);
        clear(steps);
        if (line) clear([line]);
        if (floatCar) clear([floatCar]);
      };
    };

    // ✅ only load GSAP when close to viewport
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
  }, [ids]);

  return null;
}
