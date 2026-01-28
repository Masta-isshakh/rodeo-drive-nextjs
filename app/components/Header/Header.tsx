"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useI18n } from "../../lib/i18n";
import Image from "next/image";
import GoogleReviewsBadge from "@/app/components/GoogleReviewsBadge/GoogleReviewsBadge";
import { SITE } from "@/app/config/site";
import dynamic from "next/dynamic";

const HeaderMotion = dynamic(() => import("./HeaderMotion"), {
  ssr: false,
  loading: () => null,
});

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useI18n();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  type NavItem = { label: string; href: string };

  const navItems: NavItem[] = useMemo(
    () => [
      { label: t.nav.home, href: "/" },
      { label: t.nav.services, href: "/services" },
      { label: t.nav.gallery, href: "/gallery" },
      { label: t.nav.about, href: "/about" },
      { label: t.nav.faq, href: "/faq" },
      { label: t.nav.contact, href: "/contact" },
    ],
    [t]
  );

  // ✅ Optimized scroll listener (no extra state updates)
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const next = window.scrollY > 30;
        setIsScrolled((prev) => (prev === next ? prev : next));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const phoneWa = SITE.whatsappUrl;

  return (
    <div ref={rootRef}>
      {/* ✅ Step-10: GSAP moved out + code-split + guarded */}
      <HeaderMotion
        rootRef={rootRef}
        headerRef={headerRef}
        logoRef={logoRef}
        navRef={navRef}
        actionsRef={actionsRef}
      />

      <header
        className={`${styles.header} ${isScrolled ? styles.solid : styles.transparent}`}
        ref={headerRef}
      >
        <div className={styles.headerContainer}>
          <div className={styles.logoo}>
            <a
              className={styles.whatsappButtonn}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <Image src="/logo.avif" alt="" width={54} height={54} quality={100} priority={false} />
            </a>

            {/* ✅ Keep same markup; only add ref here for GSAP */}
            <a href="/" className={styles.logoLink} ref={logoRef}>
              <h4>RODEO DRIVE</h4>
            </a>
          </div>

          <nav className={styles.nav} ref={navRef} aria-label="Primary">
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.activeNavLink : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actions} ref={actionsRef}>
            <div className={styles.reviewsWrap}>
              <GoogleReviewsBadge />
            </div>

            {/* ✅ keep language concept unchanged */}
            <div className={styles.languageSwitch} aria-label="Language">
              <button
                className={`${styles.langButton} ${language === "en" ? styles.active : ""}`}
                onClick={() => setLanguage("en")}
                type="button"
              >
                EN
              </button>
              <button
                className={`${styles.langButton} ${language === "ar" ? styles.active : ""}`}
                onClick={() => setLanguage("ar")}
                type="button"
              >
                AR
              </button>
            </div>

            <Link className={styles.ctaButton} href="/book">
              {t.nav.bookNow}
            </Link>

            <a
              className={styles.whatsappButton}
              href={phoneWa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <Image src="/whatsapp.avif" alt="" width={40} height={40} quality={100} priority={false} />
            </a>

            <button
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ""}`} aria-label="Mobile menu">
        <div className={styles.mobileNavContent}>
          <div className={styles.mobileTop}>
            <div className={styles.mobileBrand}>RODEO DRIVE</div>
            <button
              className={styles.mobileNavClose}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              ✕
            </button>
          </div>

          <div className={styles.mobileReviews}>
            <GoogleReviewsBadge />
          </div>

          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <Link className={styles.mobileCta} href="/book" onClick={() => setIsMobileMenuOpen(false)}>
              {t.nav.bookNow}
            </Link>

            <a
              className={styles.whatsappButton}
              href={phoneWa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <Image src="/whatsapp.avif" alt="" width={40} height={40} quality={100} priority={false} />
            </a>

            <div className={styles.mobileLangRow}>
              <button
                className={`${styles.langButton} ${language === "en" ? styles.active : ""}`}
                onClick={() => setLanguage("en")}
                type="button"
              >
                EN
              </button>
              <button
                className={`${styles.langButton} ${language === "ar" ? styles.active : ""}`}
                onClick={() => setLanguage("ar")}
                type="button"
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
