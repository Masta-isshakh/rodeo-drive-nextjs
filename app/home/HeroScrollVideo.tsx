"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();

    // Animation frame-by-frame du scroll
    const videoObj = { currentTime: 0 };
    gsap.to(videoObj, {
      currentTime: video.duration || 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
      },
      onUpdate: () => {
        video.currentTime = videoObj.currentTime;
      },
    });

    // Texte animé
    gsap.fromTo(
      ".hero-title",
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, scrollTrigger: { trigger: container, start: "top 60%", end: "top 20%", scrub: true } }
    );

    gsap.fromTo(
      ".hero-subtitle",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, scrollTrigger: { trigger: container, start: "top 50%", end: "top 10%", scrub: true } }
    );

    gsap.to(".hero-title", {
      opacity: 0,
      scrollTrigger: { trigger: container, start: "center center", end: "bottom center", scrub: true },
    });
  }, []);

  return (
    <section ref={containerRef} className="hero-section">
      <video
        ref={videoRef}
        src="https://media.istockphoto.com/id/1251011196/video/a-shot-through-the-glass-of-a-wooden-dashboard-of-an-expensive-car.mp4?s=mp4-640x640-is&k=20&c=nlGiMRRQ7n8wxOVWninQ08HRRvg1kMSMKjfJGO32itQ="
        muted
        playsInline
        preload="auto"
      />
      <div className="video-overlay" />
      <div className="hero-content">
        <h2 className="hero-title">ENGINEERED TO PERFORM</h2>
        <p className="hero-subtitle">Precision, motion and emotion in every frame.</p>
      </div>
    </section>
  );
}
