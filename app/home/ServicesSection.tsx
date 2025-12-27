"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Design",
    desc: "Tailored automotive aesthetics",
    img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
  },
  {
    title: "Performance Tuning",
    desc: "Unleash pure mechanical power",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    title: "Luxury Interior",
    desc: "Crafted premium materials",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
  },
  {
    title: "Aerodynamics",
    desc: "Precision airflow engineering",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    title: "Smart Technology",
    desc: "Next-gen driving intelligence",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753",
  },
  {
    title: "Exclusive Delivery",
    desc: "A cinematic handover experience",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");

    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 120,
          rotateX: 15,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );

      // Parallax image interne
      gsap.to(card.querySelector("img"), {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-header reveal">
        <h2>Our Expertise</h2>
        <p>Crafted experiences beyond automotive standards</p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-media">
              <img src={s.img} alt={s.title} />
            </div>
            <div className="service-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
