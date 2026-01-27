// app/[lang]/gallery/GalleryEnhancements.client.tsx
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

export default function GalleryEnhancements({ motionKey }: Props) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-gallery-root]");
    if (!root) return;

    const { reduced, lite } = getMotionFlags();
    // Keep logic minimal on reduced/lite devices
    if (reduced) return;

    let io: IntersectionObserver | null = null;
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const init = async () => {
      // Lazy-load GSAP only when needed
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");

      if (cancelled) return;

      const gsap = resolveMod(gsapMod, "gsap");
      const ScrollTrigger = resolveMod(stMod, "ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      const animEls = Array.from(
        root.querySelectorAll<HTMLElement>("[data-gallery-animate]")
      );
      const cards = Array.from(
        root.querySelectorAll<HTMLElement>("[data-gallery-card]")
      );

      // Clear leftover inline styles after lang switch / rerender
      const clear = (els: HTMLElement[]) => {
        if (!els.length) return;
        try {
          gsap.set(els, { clearProps: "opacity,transform,visibility" });
        } catch {
          // ignore
        }
      };

      clear(animEls);
      clear(cards);

      const ctx = gsap.context(() => {
        // Animate headings/subtitles/hero bits
        if (animEls.length && !lite) {
          gsap.set(animEls, { autoAlpha: 0, y: 12 });
          gsap.to(animEls, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: root.querySelector("[data-gallery-hero]") ?? root,
              start: "top 85%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }

        // Animate cards (comparisons, s3 cards, carousel slides, stats cards)
        if (cards.length && !lite) {
          gsap.set(cards, { autoAlpha: 0, y: 10, scale: 0.997 });
          gsap.to(cards, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.03,
            scrollTrigger: {
              trigger: root,
              start: "top 90%",
              once: true,
              invalidateOnRefresh: false,
            },
          });
        }
      }, root);

      // Video play/pause on visibility (lightweight)
      const videos = Array.from(
        root.querySelectorAll<HTMLVideoElement>("[data-gallery-video]")
      );

      const vidObserver =
        typeof IntersectionObserver !== "undefined"
          ? new IntersectionObserver(
              (entries) => {
                for (const e of entries) {
                  const v = e.target as HTMLVideoElement;
                  if (e.isIntersecting) {
                    const p = v.play();
                    if (p && typeof (p as any).catch === "function") {
                      (p as any).catch(() => {});
                    }
                  } else {
                    try {
                      v.pause();
                    } catch {
                      // ignore
                    }
                  }
                }
              },
              { root: null, threshold: 0.15 }
            )
          : null;

      if (vidObserver) videos.forEach((v) => vidObserver.observe(v));

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

        try {
          vidObserver?.disconnect();
        } catch {
          // ignore
        }

        clear(animEls);
        clear(cards);
      };
    };

    // Load enhancements only when near viewport
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
