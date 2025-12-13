"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const switchLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "ltr" : "rtl";
  };

  return (
    <header className={menuOpen ? "menu-open" : ""}>
      <div className="logo">
        <img
          src="https://mastatiktok.s3.us-east-1.amazonaws.com/logo.jpeg"
          alt="Rodeo Drive Logo"
          className="logo-img"
        />
        <span>Rodeo Drive</span>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      <nav className="nav-links">
        <Link href="/home">{t("navbar.home")}</Link>
        <Link href="/services">{t("navbar.services")}</Link>
        <Link href="/about">{t("navbar.about")}</Link>
        <Link href="/contact">{t("navbar.contact")}</Link>
        <Link href="/admin">{t("navbar.admin")}</Link>

        <button className="lang-btn" onClick={switchLang}>
          {i18n.language === "en" ? "AR" : "EN"}
        </button>

        <button className="login-btn" onClick={() => router.push("/login")}>
          {t("navbar.login")}
        </button>
      </nav>
    </header>
  );
}
