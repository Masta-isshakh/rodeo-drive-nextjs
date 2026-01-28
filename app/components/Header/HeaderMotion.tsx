"use client";

import type { RefObject } from "react";
import { useEffect } from "react";

type Props = {
  rootRef: RefObject<HTMLDivElement>;
  headerRef: RefObject<HTMLElement>;
  logoRef: RefObject<HTMLAnchorElement>;
  navRef: RefObject<HTMLElement>;
  actionsRef: RefObject<HTMLDivElement>;
};

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

export default function HeaderMotion({
  rootRef,
  headerRef,
  logoRef,
  navRef,
  actionsRef,
}: Props) {
  useEffect(() => {
    if (!rootRef.current) return;

    const { reduced, lite } = getMotionFlags();
    if (reduced || lite) return; // ✅ skip GSAP on mobile / reduced motion

    let cancelled = false;
    let ctx: any = null;

    const run = async () => {
      try {
        // ✅ defer until browser is idle-ish (faster first paint)
        const idle = (cb: () => void) => {
          if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(cb, { timeout: 800 });
          } else {
            setTimeout(cb, 1);
          }
        };

        idle(async () => {
          if (cancelled) return;

          const gsapMod = await import("gsap");
          if (cancelled) return;

          const gsap = gsapMod.default;

          ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (headerRef.current) {
              tl.fromTo(
                headerRef.current,
                { y: -80, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 }
              );
            }

            if (logoRef.current) {
              tl.fromTo(
                logoRef.current,
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.55 },
                "-=0.35"
              );

              // ✅ keep your exact infinite float (desktop only)
              gsap.to(logoRef.current, {
                y: "+=2",
                duration: 2.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            }

            const navItemsEls = navRef.current?.querySelectorAll("li");
            if (navItemsEls?.length) {
              tl.fromTo(
                navItemsEls,
                { y: -12, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.35, stagger: 0.06 },
                "-=0.25"
              );
            }

            const actionChildren = actionsRef.current?.children;
            if (actionChildren?.length) {
              tl.fromTo(
                actionChildren,
                { scale: 0.94, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.35, stagger: 0.06 },
                "-=0.2"
              );
            }
          }, rootRef);
        });
      } catch {
        // if GSAP fails, no UI break
      }
    };

    run();

    return () => {
      cancelled = true;
      try {
        ctx?.revert?.();
      } catch {
        // ignore
      }
    };
  }, [rootRef, headerRef, logoRef, navRef, actionsRef]);

  return null;
}
