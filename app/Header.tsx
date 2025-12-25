"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { signOut, getCurrentUser } from "aws-amplify/auth";
import i18n from "./i18n";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);

  const router = useRouter();
  const { t } = useTranslation();

  /* ---------------- INIT ---------------- */
  useEffect(() => {
    if (!i18n.language) i18n.changeLanguage("en");

    // 🔒 FORCER LE DOCUMENT EN LTR (CRITIQUE)
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = "ltr";

    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null));

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------- CLOSE MENU / DROPDOWN ON OUTSIDE CLICK -------- */
  useEffect(() => {
    const handlePointerDown = (event: Event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () =>
      document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  /* ---------------- ACTIONS ---------------- */
const switchLang = async () => {
  const newLang = i18n.language === "en" ? "ar" : "en";
  await i18n.changeLanguage(newLang);

  document.documentElement.lang = newLang;
  document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

  window.location.reload();
};



  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
<header
  ref={headerRef}
  dir={i18n.language === "ar" ? "rtl" : "ltr"}
  className={`main-header ${scrolled ? "scrolled" : ""}`}
>

      {/* LOGO TOUJOURS À GAUCHE */}
      <Link href="/home" className="logo" onClick={closeAll}>
        <img
          src="https://mastatiktok.s3.us-east-1.amazonaws.com/logo.jpeg"
          alt="Rodeo Drive Logo"
          className="logo-img"
        />
        <span>Rodeo Drive</span>
      </Link>

      {/* MOBILE TOGGLE */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* NAV */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link href="/home" onClick={closeAll}>
          {t("navbar.home")}
        </Link>

        {/* SERVICES DROPDOWN */}
        <div className="services-wrapper">
          <button
            type="button"
            className="services-btn"
            onClick={() => setServicesOpen((v) => !v)}
          >
            {t("navbar.services")}
            <span className={`arrow ${servicesOpen ? "rotate" : ""}`} />
          </button>

          <div className={`services-dropdown ${servicesOpen ? "show" : ""}`}>
            <Link href="/services/polishing" onClick={closeAll}>
              {t("services.polishing")}
            </Link>
            <Link href="/services/protection" onClick={closeAll}>
              {t("services.ceramic")}
            </Link>
            <Link href="/services/ppf" onClick={closeAll}>
              {t("services.ppf")}
            </Link>
            <Link href="/services/wrap" onClick={closeAll}>
              {t("services.wrapping")}
            </Link>
            <Link href="/services/interior" onClick={closeAll}>
              {t("services.interior")}
            </Link>
            <Link href="/services/smart" onClick={closeAll}>
              {t("services.smart")}
            </Link>
          </div>
        </div>

        <Link href="/about" onClick={closeAll}>
          {t("navbar.about")}
        </Link>

        <button className="lang-btn" onClick={switchLang}>
          {i18n.language === "en" ? "EN" : "AR"}
        </button>

      </nav>
    </header>
  );
}
