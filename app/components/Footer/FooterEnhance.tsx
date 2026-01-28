"use client";

import { useEffect } from "react";

type Ids = Record<string, string>;

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

function clearInline(el: HTMLElement | null) {
  if (!el) return;
  el.style.removeProperty("opacity");
  el.style.removeProperty("transform");
  el.style.removeProperty("visibility");
}

export default function FooterEnhance({ ids }: { ids: Ids }) {
  useEffect(() => {
    const footerEl = document.getElementById(ids.root) as HTMLElement | null;
    if (!footerEl) return;

    const contentEl = document.getElementById(ids.content) as HTMLElement | null;
    const bottomEl = document.getElementById(ids.bottom) as HTMLElement | null;

    // always visible by default (no design break)
    clearInline(contentEl);
    clearInline(bottomEl);

    const { reduced, lite } = getMotionFlags();
    if (reduced || lite) return;

    let io: IntersectionObserver | null = null;
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const init = async () => {
      try {
        const gsapMod = await import("gsap");
        const stMod = await import("gsap/ScrollTrigger");
        if (cancelled) return;

        const gsap = resolveMod(gsapMod, "gsap");
        const ScrollTrigger = resolveMod(stMod, "ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ ignoreMobileResize: true });

        // clear leftover inline props (route changes)
        if (contentEl) gsap.set(contentEl, { clearProps: "opacity,transform,visibility" });
        if (bottomEl) gsap.set(bottomEl, { clearProps: "opacity,transform,visibility" });

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: footerEl,
              start: "top 95%",
              once: true,
              invalidateOnRefresh: false,
            },
          });

          if (contentEl) {
            tl.fromTo(contentEl, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.42 }, 0);
          }

          if (bottomEl) {
            tl.fromTo(bottomEl, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.32 }, 0.12);
          }
        }, footerEl);

        const raf = requestAnimationFrame(() => {
          try { ScrollTrigger.refresh(); } catch {}
        });

        cleanup = () => {
          cancelAnimationFrame(raf);

          try {
            ScrollTrigger.getAll().forEach((st: any) => {
              const trig = st?.trigger as Element | null;
              if (trig && footerEl.contains(trig)) st.kill(false);
            });
          } catch {}

          try { ctx.revert(); } catch {}

          clearInline(contentEl);
          clearInline(bottomEl);
        };
      } catch {
        // keep visible
      }
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

    io.observe(footerEl);

    return () => {
      cancelled = true;
      io?.disconnect();
      cleanup?.();
    };
  }, [ids]);

  return null;
}
