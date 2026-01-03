"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import styles from "./Header.module.css";
import { useI18n } from "../../lib/i18n";
import { MessageCircleMore } from "lucide-react";


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

  const navItems = useMemo(
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

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

  // GSAP intro (safe)
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { y: -80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        );
      }

      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.55 },
          "-=0.35"
        );

        // Subtle floating for logo
        gsap.to(logoRef.current, {
          y: "+=2",
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const navItemsEls = navRef.current?.querySelectorAll("li");
      if (navItemsEls?.length) {
        tl.fromTo(
          navItemsEls,
          { y: -12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.06 },
          "-=0.25"
        );
      }

      const actionChildren = actionsRef.current?.children;
      if (actionChildren?.length) {
        tl.fromTo(
          actionChildren,
          { scale: 0.94, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, stagger: 0.06 },
          "-=0.2"
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const phoneWa = "https://wa.me/97412345678";

  return (
    <div ref={rootRef}>
      <header
        className={`${styles.header} ${isScrolled ? styles.solid : styles.transparent}`}
        ref={headerRef}
      >
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo} ref={logoRef} aria-label="Rodeo Drive">
            <span className={styles.logoRing} aria-hidden="true" />
            <span className={styles.logoImage}>
              <img
                src="/logo.jpeg"
                alt="Rodeo Drive Logo"
                className={styles.logoImg}
                loading="eager"
              />
            </span>
            <span className={styles.logoText}>RODEO DRIVE</span>
            <span className={styles.logoSheen} aria-hidden="true" />
          </Link>

          <nav className={styles.nav} ref={navRef} aria-label="Primary">
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
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
              &#x1F4AC;
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

      {/* Overlay (click to close) */}
      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ""}`}
        aria-label="Mobile menu"
      >
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
            <Link
              className={styles.mobileCta}
              href="/book"
              onClick={() => setIsMobileMenuOpen(false)}
            >
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
  <MessageCircleMore size={20} strokeWidth={2} aria-hidden="true" />
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
