"use client";

import { useParams, notFound } from "next/navigation";
import { servicesData } from "./servicedetail";
import "./service.css";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export default function ServicePage() {
  const { t } = useTranslation();
  const params = useParams();
  const slug = params?.slug as string;

  const service = servicesData[slug];
  const imageRef = useRef<HTMLImageElement | null>(null);
  const lastScrollRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const velocity = Math.abs(currentScroll - lastScrollRef.current);
      lastScrollRef.current = currentScroll;

      if (imageRef.current) {
        imageRef.current.style.filter = `blur(${Math.min(
          velocity / 50,
          6
        )}px)`;
        imageRef.current.style.transform = `translateY(${
          currentScroll * 0.2
        }px) scale(1.05)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="service-page">
        {/* HERO SECTION */}
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
              alt={t(`services_details.${slug}.title`)}
              loading="eager"
            />
          </div>

          <div className="service-text">
            <h1>{t(`services_details.${slug}.title`)}</h1>
            <p>{t(`services_details.${slug}.description`)}</p>

            <a href={`/book?service=${slug}`} className="book-btn">
              {t(`services_details.${slug}.book`)}
            </a>
          </div>
        </section>
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>{t("footer.brandName")}</h3>
          <p>{t("footer.description")}</p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>{t("footer.company")}</h4>
          <ul>
            <li><a href="/about">{t("footer.about")}</a></li>
            <li><a href="/services">{t("footer.services")}</a></li>
            <li><a href="/contact">{t("footer.contact")}</a></li>
            <li><a href="/privacy">{t("footer.privacy")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>{t("footer.contact")}</h4>
          <p>{t("footer.email")}: contact@mycompany.com</p>
          <p>{t("footer.phone")}: +974 0000 0000</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {t("footer.brandName")}.{" "}
        {t("footer.rights")}
      </div>
    </footer>
      </main>

    </>
  );
}
