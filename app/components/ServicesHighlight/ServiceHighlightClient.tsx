"use client";

import { useEffect } from "react";
import styles from "./ServicesHighlight.module.css";

function getMotionFlags() {
  if (typeof window === "undefined" || !window.matchMedia) return { reduced: false, lite: false };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lite = window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(pointer: coarse)").matches;
  return { reduced, lite };
}

export default function ServicesHighlightReveal({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    const root = document.getElementById(sectionId);
    if (!root) return;

    const { reduced, lite } = getMotionFlags();
    root.classList.add(styles.ready);

    if (reduced || lite) {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add(styles.in));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).classList.add(styles.in);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionId]);

  return null;
}
