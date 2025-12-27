"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const init = () => {
      video.pause();
      video.currentTime = 0;

      /* ===============================
         VIDEO SCROLL (FRAME BY FRAME)
      ================================ */
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=200%", // storytelling fluide sans dépasser 100vh visuel
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* ===============================
         MASTER TIMELINE (TEXT + FX)
      ================================ */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      });

      tl.fromTo(
        ".video-title",
        {
          y: 120,
          opacity: 0,
          rotationX: 25,
          transformPerspective: 1000,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          ease: "power4.out",
          duration: 1,
        }
      )
        .fromTo(
          ".video-subtitle",
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power4.out",
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          ".video-glow",
          {
            opacity: 1,
            scale: 1.15,
            ease: "power2.out",
            duration: 1,
          },
          "-=1"
        )
        .to(
          [".video-title", ".video-subtitle"],
          {
            opacity: 0,
            y: -80,
            ease: "power2.inOut",
            duration: 1,
          },
          "+=0.6"
        );
    };

    video.addEventListener("loadedmetadata", init);
    return () => video.removeEventListener("loadedmetadata", init);
  }, []);

  return (
    <section ref={containerRef} className="video-section">
      <video
        ref={videoRef}
        src="https://media.istockphoto.com/id/1251011196/video/a-shot-through-the-glass-of-a-wooden-dashboard-of-an-expensive-car.mp4?s=mp4-640x640-is&k=20&c=nlGiMRRQ7n8wxOVWninQ08HRRvg1kMSMKjfJGO32itQ="
        muted
        playsInline
        preload="auto"
      />

      {/* OVERLAY CINÉMATIQUE */}
      <div className="video-overlay" />

      {/* GLOW DYNAMIQUE */}
      <div className="video-glow" />

      {/* CONTENU */}
      <div className="video-content">
        <h1 className="video-title">ENGINEERED TO MOVE</h1>
        <p className="video-subtitle">
          Where precision meets emotion and motion becomes art.
        </p>
      </div>
    </section>
  );
}
