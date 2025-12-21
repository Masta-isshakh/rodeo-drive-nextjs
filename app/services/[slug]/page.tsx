"use client";

import { useParams } from "next/navigation";
import { servicesData } from "./servicedetail";
import "./service.css";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export default function ServicePage() {
    const { t } = useTranslation();
  
    const { slug } = useParams();
  const service = servicesData[slug as string];
  const imageRef = useRef<HTMLImageElement>(null);
  let lastScroll = 0;

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const velocity = Math.abs(current - lastScroll);
      lastScroll = current;

      if (imageRef.current) {
        imageRef.current.style.filter = `blur(${Math.min(velocity / 50, 6)}px)`;
        imageRef.current.style.transform = `translateY(${current * 0.2}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!service) return null;

  return (
    <main className="service-page">
      {/* HERO */}
      <section className="service-hero">
        <video
          className="hero-video"
          src="/videos/service-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="image-box">
          <img
            ref={imageRef}
            src={service.image}
            alt={service.title}
          />
        </div>

        <div className="service-text">
<h1>{t(`services_details.${slug}.title`)}</h1>
<p>{t(`services_details.${slug}.description`)}</p>


          <a href={`/book?service=${slug}`} className="book-btn">
            Book this service
          </a>
        </div>
      </section>
    </main>
  );
}
