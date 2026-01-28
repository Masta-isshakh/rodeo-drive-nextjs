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

export default function HeroVideoEnhance({ ids }: { ids: Ids }) {
  // video autoplay retry + pause when tab hidden (performance)
  useEffect(() => {
    const v = document.getElementById(ids.video) as HTMLVideoElement | null;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {}
    };

    tryPlay();

    const onFirst = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("click", onFirst);
    };

    window.addEventListener("touchstart", onFirst, { passive: true });
    window.addEventListener("click", onFirst);

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
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("click", onFirst);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [ids.video]);

  // GSAP only on desktop + not reduced motion, loaded dynamically (NOT in main bundle)
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
