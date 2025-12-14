"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import i18n from "./i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const { t } = useTranslation();

  /* 🔹 Default language */
  useEffect(() => {
    if (!i18n.language || i18n.language === "dev") {
      i18n.changeLanguage("en");
    }

    document.documentElement.lang = i18n.language;
    document.documentElement.dir =
      i18n.language === "ar" ? "ltr" : "ltr";

    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  /* 🔹 Switch language */
  const switchLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir =
      newLang === "ar" ? "ltr" : "ltr";
  };

  /* 🔹 Logout */
  const logout = async () => {
    await signOut();
    setUser(null);
    router.push("/");
  };

  return (
    <header className={`main-header ${menuOpen ? "menu-open" : ""}`}>
      {/* LOGO */}
      <Link href="/home" className="logo">
        <img
          src="https://mastatiktok.s3.us-east-1.amazonaws.com/logo.jpeg"
          alt="Rodeo Drive Logo"
          className="logo-img"
        />
        <span>Rodeo Drive</span>
      </Link>

      {/* MOBILE */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* NAV */}
      <nav className="nav-links">
        <Link href="/home">{t("navbar.home")}</Link>
        <Link href="/services">{t("navbar.services")}</Link>
        <Link href="/about">{t("navbar.about")}</Link>
        <Link href="/contact">{t("navbar.contact")}</Link>

        <button className="lang-btn" onClick={switchLang}>
          {i18n.language === "en" ? "AR" : "EN"}
        </button>

        {user ? (
          <button className="login-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <button
            className="login-btn"
            onClick={() => router.push("/login")}
          >
            {t("navbar.login")}
          </button>
        )}
      </nav>
    </header>
  );
}
