"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  useEffect(() => {
    gsap.utils.toArray(".story-block").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 120 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="story">
      <div className="story-block">
        <h2>Designed for Precision</h2>
        <p>Automotive care pushed to perfection.</p>
      </div>
      <div className="story-block">
        <h2>Crafted by Experts</h2>
        <p>Every detail mastered.</p>
      </div>
      <div className="story-block">
        <h2>Luxury is a Standard</h2>
        <p>Not an option.</p>
      </div>
    </section>
  );
}
