"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cars = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
  "https://images.unsplash.com/photo-1493238792000-1d7b3f3f14b1",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://media.istockphoto.com/id/1185460602/photo/3d-illustration-of-generic-red-sedan-car-front-side-view.jpg?s=612x612&w=is&k=20&c=lDxcKz82HuMaChY-zHXPO_c5MViOdUZMYGAvIWCtHTs=",
];

export default function CinematicScroll() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cinematic-section",
        start: "top top",
        end: "+=5000", // Très longue section
        scrub: true,
        pin: true,
      },
    });

    // Chaque voiture entre avec rotation et fade
    cars.forEach((_, i) => {
      tl.fromTo(
        `.car-${i}`,
        { opacity: 0, y: 200, scale: 0.8, rotateY: -15 },
        { opacity: 1, y: 0, scale: 1, rotateY: 0, duration: 2 },
        i * 1 // delay entre chaque animation
      ).to(
        `.car-${i}`,
        { opacity: 0, y: -200, scale: 1.2, rotateY: 15, duration: 2 },
        i * 1 + 1.5
      );
    });

    // Text animation synchronisée
    tl.fromTo(
      ".cinematic-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 3 },
      0
    ).to(".cinematic-title", { opacity: 0, y: -50, duration: 2 }, "+=3");

    tl.fromTo(
      ".cinematic-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 3 },
      1
    ).to(".cinematic-subtitle", { opacity: 0, y: -30, duration: 2 }, "+=3");
  }, []);

  return (
    <section className="cinematic-section">
      <div className="cinematic-overlay" />
      <div className="cinematic-text">
        <h1 className="cinematic-title">RODEO DRIVE</h1>
        <p className="cinematic-subtitle">Luxury Automotive Experience</p>
      </div>

      {cars.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`cinematic-car car-${i}`}
          alt={`Car ${i}`}
        />
      ))}
    </section>
  );
}
