"use client";

import { useEffect, useRef } from "react";
import BackgroundVideo from "next-video/background-video";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const text = textRef.current;
    if (!video || !overlay || !text) return;

    // Zoom léger de la vidéo au scroll
    gsap.to(video, {
      scale: 1.15,
      scrollTrigger: {
        trigger: text,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Overlay glow animé
    gsap.to(overlay, {
      opacity: 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });

    // Texte animé au scroll
    gsap.fromTo(
      text,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="hero-wrapper">
      <BackgroundVideo
        ref={videoRef}
        src="https://media.istockphoto.com/id/1251011196/video/a-shot-through-the-glass-of-a-wooden-dashboard-of-an-expensive-car.mp4?s=mp4-640x640-is&k=20&c=nlGiMRRQ7n8wxOVWninQ08HRRvg1kMSMKjfJGO32itQ="
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      />

      {/* Overlay animé */}
      <div className="hero-overlay" ref={overlayRef} />

      {/* Texte */}
      <div className="hero-text" ref={textRef}>
        <h1>RODEO DRIVE</h1>
        <p>Luxury Automotive Experience</p>
      </div>
    </section>
  );
}
