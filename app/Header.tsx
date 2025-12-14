"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { signOut, getCurrentUser } from "aws-amplify/auth";
import i18n from "./i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (!i18n.language) i18n.changeLanguage("en");
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const switchLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const logout = async () => {
    await signOut();
    setUser(null);
    router.push("/home");
  };

  return (
    <header className={`main-header ${menuOpen ? "menu-open" : ""}`}>
      {/* Logo à gauche */}
      <Link href="/home" className="logo">
        <img
          src="https://mastatiktok.s3.us-east-1.amazonaws.com/logo.jpeg"
          alt="Rodeo Drive Logo"
          className="logo-img"
        />
        <span>Rodeo Drive</span>
      </Link>

      {/* Menu mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      {/* Nav links */}
      <nav className="nav-links">
        <Link href="/home">{t("navbar.home")}</Link>
        <Link href="/services">{t("navbar.services")}</Link>
        <Link href="/about">{t("navbar.about")}</Link>
        <Link href="/contact">{t("navbar.contact")}</Link>
        {user && user.attributes?.email === "mastaisshakh@gmail.com" && (
          <Link href="/admin">{t("navbar.admin")}</Link>
        )}

        <button className="lang-btn" onClick={switchLang}>
          {i18n.language === "en" ? "AR" : "EN"}
        </button>

        {user ? (
          <button className="login-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={() => router.push("/login")}>
            {t("navbar.login")}
          </button>
        )}
      </nav>
    </header>
  );
}
