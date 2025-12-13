"use client";

import "./about.css";
import { useTranslation } from "react-i18next";

export default function AboutPageClient() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1>{t("about.title")}</h1>
          <p>{t("about.subtitle")}</p>
        </div>
      </section>

      {/* VISION - MISSION */}
      <section className="about-vision">
        <div className="vision-container">
          <div className="vision-card">
            <h2>{t("about.vision_title")}</h2>
            <p>{t("about.vision_text")}</p>
          </div>
          <div className="vision-card">
            <h2>{t("about.mission_title")}</h2>
            <p>{t("about.mission_text")}</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-history">
        <h2>{t("about.story_title")}</h2>
        <p>{t("about.story_text")}</p>
        <div className="history-image">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=60"
            alt="Our Story"
          />
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-values">
        <h2>{t("about.values_title")}</h2>

        <div className="values-grid">
          <div className="value-card">
            <i className="icon fas fa-shield-alt" />
            <h3>{t("about.values.integrity.title")}</h3>
            <p>{t("about.values.integrity.text")}</p>
          </div>

          <div className="value-card">
            <i className="icon fas fa-star" />
            <h3>{t("about.values.excellence.title")}</h3>
            <p>{t("about.values.excellence.text")}</p>
          </div>

          <div className="value-card">
            <i className="icon fas fa-users" />
            <h3>{t("about.values.customer.title")}</h3>
            <p>{t("about.values.customer.text")}</p>
          </div>

          <div className="value-card">
            <i className="icon fas fa-cogs" />
            <h3>{t("about.values.innovation.title")}</h3>
            <p>{t("about.values.innovation.text")}</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <h2>{t("about.team_title")}</h2>
        <p>{t("about.team_text")}</p>

        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1546443046-ed1ce6ffd1d3?auto=format&fit=crop&w=800&q=60" alt="" />
            <h3>{t("about.team.member1.name")}</h3>
            <p>{t("about.team.member1.role")}</p>
          </div>

          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=60" alt="" />
            <h3>{t("about.team.member2.name")}</h3>
            <p>{t("about.team.member2.role")}</p>
          </div>

          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1564869730310-4adf0a1b1f6f?auto=format&fit=crop&w=800&q=60" alt="" />
            <h3>{t("about.team.member3.name")}</h3>
            <p>{t("about.team.member3.role")}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>{t("about.cta_title")}</h2>
        <p>{t("about.cta_text")}</p>
        <a className="cta-btn" href="/contact">
          {t("about.cta_btn")}
        </a>
      </section>

      <footer>{t("about.footer")}</footer>
    </div>
  );
}
