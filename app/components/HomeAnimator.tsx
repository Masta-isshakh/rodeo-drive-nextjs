"use client";

import { useEffect, useRef } from "react";

// GSAP removed — simple IntersectionObserver fade-in:
// • Removes ~240 KB of GSAP from the initial load path
// • Eliminates the parallax scrub that fired layout repaints on every scroll pixel
export default function HomeAnimator({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Skip the first section (hero) — it must be visible immediately for LCP
    const sections = Array.from(
      mainRef.current.querySelectorAll<HTMLElement>("section:not(:first-child)")
    );

    sections.forEach((s) => {
      s.style.opacity = "0";
      s.style.transform = "translateY(36px)";
      s.style.transition = "opacity 0.65s ease, transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)";
      s.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          // Release will-change after animation so compositor layer is freed
          el.addEventListener(
            "transitionend",
            () => { el.style.willChange = "auto"; },
            { once: true }
          );
          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return <main ref={mainRef}>{children}</main>;
}
