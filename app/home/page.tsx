"use client";

import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useTranslation } from "react-i18next";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();

export default function HomePageClient() {
  const { t } = useTranslation();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
    return () => sub.unsubscribe();
  }, []);

  const createTodo = () => {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  };

  return (
    <main>
      {/* HERO */}
      <section className="video-carousel">
        <video
          src="https://mastatiktok.s3.us-east-1.amazonaws.com/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://mastatiktok.s3.us-east-1.amazonaws.com/video-poster.jpg"
          title={t("home.hero_title")}
        />
        <div className="carousel-text">
          <h1>{t("home.hero_title")}</h1>
          <p>{t("home.hero_subtitle")}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2 className="section-title">{t("service.section_title")}</h2>
        <div className="services-container">
          <div className="service-card">
            <img src="/images/polish.jpg" alt="Professional car polish" />
            <h3>{t("service.polish_title")}</h3>
            <p>{t("service.polish_desc")}</p>
          </div>
          <div className="service-card">
            <img src="/images/protection.jpg" alt="Car protection service" />
            <h3>{t("service.protection_title")}</h3>
            <p>{t("service.protection_desc")}</p>
          </div>
          <div className="service-card">
            <img src="/images/wrap.jpg" alt="Car wrapping and color change" />
            <h3>{t("service.wrap_title")}</h3>
            <p>{t("service.wrap_desc")}</p>
          </div>
        </div>
      </section>

          <section className="stats-section" aria-label="Company statistics">
        <div className="stats-overlay" aria-hidden="true"></div>

        <div className="stats-container">
          {["brand", "locations", "vehicles", "years"].map((key) => (
            <div className="stat-card" key={key}>
              <span className="stat-number">
                {t(`stats.${key}_number`)}
              </span>
              <span className="stat-label">
                {t(`stats.${key}_label`)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section" aria-labelledby="why-title">
        <h2 id="why-title">{t("why.title")}</h2>

        <div className="why-grid">
          <div className="why-card">
            <i className="icon fas fa-shield-alt" aria-hidden="true"></i>
            <h3>{t("why.protection_title")}</h3>
            <p>{t("why.protection_desc")}</p>
          </div>

          <div className="why-card">
            <i className="icon fas fa-car" aria-hidden="true"></i>
            <h3>{t("why.finish_title")}</h3>
            <p>{t("why.finish_desc")}</p>
          </div>

          <div className="why-card">
            <i className="icon fas fa-tools" aria-hidden="true"></i>
            <h3>{t("why.tech_title")}</h3>
            <p>{t("why.tech_desc")}</p>
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="commit-section" aria-labelledby="commit-title">
        <div className="commit-overlay" aria-hidden="true"></div>

        <div className="commit-content">
          <h2 id="commit-title">{t("commit.title")}</h2>
          <p>{t("commit.description")}</p>

          <ul className="commit-points">
            <li>{t("commit.point1")}</li>
            <li>{t("commit.point2")}</li>
            <li>{t("commit.point3")}</li>
          </ul>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="social-section" aria-labelledby="social-title">
        <h2 id="social-title">{t("social.title")}</h2>
        <p>{t("social.subtitle")}</p>

        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-title">
        <h2 id="cta-title">{t("cta.title")}</h2>
        <p>{t("cta.subtitle")}</p>
        <a className="cta-btn" href="#contact">
          {t("cta.button")}
        </a>
      </section>

      {/* FOOTER */}
      <footer role="contentinfo">
        © 2025 Rodeo Drive — {t("footer.rights")}
      </footer>

    </main>
  );
}
