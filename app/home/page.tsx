"use client";

import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useTranslation } from "react-i18next";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import Head from "next/head";
import BackgroundVideo from "next-video/background-video";

Amplify.configure(outputs);
const client = generateClient<Schema>();

export default function HomePageClient() {
  const { t } = useTranslation();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // Observe Amplify Todo model
  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    return () => sub.unsubscribe();
  }, []);

  const createTodo = () => {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  };

  // Scroll reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .service-card, .why-card, .stat-card"
    );
    const handleScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Rodeo Drive | Premium Car Care in Doha</title>
        <meta
          name="description"
          content="Discover Rodeo Drive premium car services in Doha: polishing, ceramic coating, PPF, nano protection, customization and luxury automotive care."
        />
      </Head>

      <main>
        {/* -------------------- HERO VIDEO CINEMATIC -------------------- */}
        <section className="video-carousel">
          <BackgroundVideo
            src="https://mastatiktok.s3.us-east-1.amazonaws.com/video3.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          />
          <div className="video-overlay"></div>
          <div className="carousel-text reveal">
            <h1>{t("home.hero_title")}</h1>
            <p>{t("home.hero_subtitle")}</p>
          </div>
        </section>

        {/* -------------------- SERVICES -------------------- */}
        <section id="services" aria-labelledby="services-title">
          <h2 id="services-title">{t("service.section_title")}</h2>
          <div className="services-container">
            {["polish", "protection", "wrap"].map((service, i) => (
              <div className="service-card reveal" key={i}>
                <img src={`/images/${service}.jpg`} alt={`${service} service`} />
                <h3>{t(`service.${service}_title`)}</h3>
                <p>{t(`service.${service}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------- STATS -------------------- */}
        <section className="stats-section">
          <div className="stats-overlay"></div>
          <div className="stats-container">
            {["brand", "locations", "vehicles", "years"].map((key) => (
              <div className="stat-card reveal" key={key}>
                <span className="stat-number">{t(`stats.${key}_number`)}</span>
                <span className="stat-label">{t(`stats.${key}_label`)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------- WHY CHOOSE US -------------------- */}
        <section className="why-section">
          <div className="why-grid">
            {["protection", "finish", "tech"].map((item, i) => (
              <div className="why-card reveal" key={i}>
                <i className={`icon fas fa-${item === "tech" ? "tools" : item}`} />
                <h3>{t(`why.${item}_title`)}</h3>
                <p>{t(`why.${item}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------- COMMITMENT -------------------- */}
        <section className="commit-section">
          <div className="commit-overlay"></div>
          <div className="commit-content reveal">
            <h2>{t("commit.title")}</h2>
            <p>{t("commit.description")}</p>
            <ul className="commit-points">
              <li>{t("commit.point1")}</li>
              <li>{t("commit.point2")}</li>
              <li>{t("commit.point3")}</li>
            </ul>
          </div>
        </section>

        {/* -------------------- SOCIAL -------------------- */}
        <section className="social-section">
          <h2>{t("social.title")}</h2>
          <p>{t("social.subtitle")}</p>
          <div className="social-icons">
            {["facebook-f","instagram","twitter","linkedin-in","youtube"].map((icon, i) => (
              <a key={i} href="#" aria-label={icon}><i className={`fab fa-${icon}`}></i></a>
            ))}
          </div>
        </section>

        {/* -------------------- CTA -------------------- */}
        <section className="cta-section">
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.subtitle")}</p>
          <a className="cta-btn" href="/book">{t("cta.button")}</a>
        </section>

        {/* -------------------- FOOTER -------------------- */}
        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-text">
              © 2025 <strong>Rodeo Drive</strong> — {t("footer.rights")}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
