"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVideo from "./ScrollVideo";
import WebGLBackground from "./WebGLBackground";
import StorySection from "./StorySection";
import Car3D from "./Car3D";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.from(".story h2", { y: 100, opacity: 0 })
      .from(".story p", { y: 60, opacity: 0 }, "-=0.4");
  }, []);

  return (
    <>
      <section className="hero">
        <h1>RODEO DRIVE</h1>
        <p>Luxury Automotive Experience</p>
      </section>

      <div className="story">
        <h2>Precision Engineering</h2>
        <p>Crafted for perfection.</p>
      </div>
      <WebGLBackground />

      <StorySection />
      <ScrollVideo />

      <Car3D />

      <footer className="footer">
        © 2025 Rodeo Drive — All Rights Reserved
      </footer>
    </>
  );
}
