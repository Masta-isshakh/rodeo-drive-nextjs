"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollVideo from "./ScrollVideo";
import WebGLBackground from "./WebGLBackground";

import StoryChapter from "./StoryChapter";
import HeroScrollVideo from "./HeroScrollVideo";
import CinematicGallery from "./CinematiqueGallery";
import HeroBackgroundVideo from "./BackgroundVideo";
import ServicesSection from "./ServicesSection";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.fromTo(
        el,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* BACKGROUND FIXE GLOBAL */}
      <div className="global-bg">
        <div className="bg-image" />
        <div className="bg-overlay" />
        <div className="bg-grain" />
      </div>

      {/* CONTENU */}
      <main className="page-content">

        <HeroBackgroundVideo />

                <ServicesSection />

        <CinematicGallery />
        <HeroScrollVideo />
        <StoryChapter />
        <ScrollVideo />
        <footer className="footer">
          © 2025 Rodeo Drive — All Rights Reserved
        </footer>
      </main>
    </>
  );
}
