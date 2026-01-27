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

export default function ProcessMotion({ motionKey }: Props) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-process-root]");
    if (!root) return;

    const { reduced, lite } = getMotionFlags();
    if (reduced) return; // fully skip
    // in lite we can still show content without heavy triggers
    // (we’ll just not init GSAP in lite)
    if (lite) return;

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

      const header = root.querySelector<HTMLElement>("[data-process-header]");
      const line = root.querySelector<HTMLElement>("[data-process-line]");
      const floatCar = root.querySelector<HTMLElement>("[data-process-float]");
      const steps = Array.from(
        root.querySelectorAll<HTMLElement>("[data-process-step]")
      );
      const headerBits = Array.from(
        root.querySelectorAll<HTMLElement>("[data-process-animate]")
      );

      const clear = (els: HTMLElement[]) => {
        if (!els.length) return;
        try {
          gsap.set(els, { clearProps: "opacity,transform,visibility" });
        } catch {
          // ignore
        }
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
        } else if (header) {
          tl.fromTo(
            header,
            { autoAlpha: 0, y: 22 },
            { autoAlpha: 1, y: 0, duration: 0.55 },
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

        clear(headerBits);
        clear(steps);
        if (line) clear([line]);
        if (floatCar) clear([floatCar]);
      };
    };

    // ✅ only load when near viewport
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
