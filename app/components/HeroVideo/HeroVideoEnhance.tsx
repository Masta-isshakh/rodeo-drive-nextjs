"use client";

import { useEffect } from "react";

type Ids = {
  root: string;
  video: string;
  overlay: string;
  title: string;
  tagline: string;
  desc: string;
  actions: string;
  scroll: string;
};

function isLiteOrReduced() {
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

function once(el: EventTarget, event: string, fn: () => void, opts?: AddEventListenerOptions) {
  const handler = () => {
    fn();
    el.removeEventListener(event, handler as any);
  };
  el.addEventListener(event, handler as any, opts);
}

function injectSourceIfMissing(v: HTMLVideoElement) {
  const src = v.dataset.src;
  if (!src) return;
  // prevent duplicate injection
  const already = Array.from(v.querySelectorAll("source")).some((s) => s.src === src);
  if (already) return;

  const source = document.createElement("source");
  source.src = src;
  source.type = "video/mp4";
  v.appendChild(source);
  v.load();
}

export default function HeroVideoEnhance({ ids }: { ids: Ids }) {
  // VIDEO LOADING STRATEGY (biggest Lighthouse win)
  useEffect(() => {
    const v = document.getElementById(ids.video) as HTMLVideoElement | null;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const lite = isLiteOrReduced();

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // ignore
      }
    };

    const loadAndPlay = () => {
      injectSourceIfMissing(v);
      tryPlay();
    };

    if (lite) {
      // MOBILE/LITE: do NOT autoplay or auto-load the heavy mp4.
      // Load only on first user interaction.
      const onFirstInteract = () => loadAndPlay();
      once(window, "touchstart", onFirstInteract, { passive: true });
      once(window, "click", onFirstInteract);
    } else {
      // DESKTOP: load after idle (or 1200ms fallback)
      const idle = (cb: () => void) => {
        const ric = (window as any).requestIdleCallback;
        if (typeof ric === "function") return ric(cb, { timeout: 1200 });
        return window.setTimeout(cb, 900);
      };
      const cancelIdle = (id: any) => {
        const cic = (window as any).cancelIdleCallback;
        if (typeof cic === "function") return cic(id);
        clearTimeout(id);
      };

      const id = idle(() => loadAndPlay());
      // also allow early load on interaction
      const onFirstInteract = () => loadAndPlay();
      once(window, "mousemove", onFirstInteract, { passive: true });
      once(window, "scroll", onFirstInteract, { passive: true });

      // visibility pause/resume
      const onVis = () => {
        if (document.visibilityState === "hidden") {
          try {
            v.pause();
          } catch {}
        } else {
          tryPlay();
        }
      };
      document.addEventListener("visibilitychange", onVis);

      return () => {
        cancelIdle(id);
        document.removeEventListener("visibilitychange", onVis);
      };
    }

    // pause/resume for both modes
    const onVis = () => {
      if (document.visibilityState === "hidden") {
        try {
          v.pause();
        } catch {}
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [ids.video]);

  // GSAP only on desktop + not reduced motion (loaded dynamically)
  useEffect(() => {
    if (isLiteOrReduced()) return;

    let ctx: any;

    (async () => {
      const gsapMod = await import("gsap");
      const gsap = gsapMod.default;

      const root = document.getElementById(ids.root) as HTMLElement | null;
      if (!root) return;

      const overlay = document.getElementById(ids.overlay);
      const title = document.getElementById(ids.title);
      const tagline = document.getElementById(ids.tagline);
      const desc = document.getElementById(ids.desc);
      const actions = document.getElementById(ids.actions);
      const scroll = document.getElementById(ids.scroll);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.9 })
          .fromTo(title, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.35")
          .fromTo(tagline, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
          .fromTo(desc, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
          .fromTo(actions, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.3")
          .fromTo(scroll, { opacity: 0, y: -10 }, { opacity: 0.85, y: 0, duration: 0.55 }, "-=0.25");
      }, root);
    })();

    return () => ctx?.revert?.();
  }, [ids]);

  return null;
}
