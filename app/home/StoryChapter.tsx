"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryChapter({ title, text, index }: any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={ref} className="chapter">
      <span className="chapter-index">        
        <h1>RODEO DRIVE</h1>
        <p>Luxury Automotive Experience</p>
        {index}
        </span>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}
