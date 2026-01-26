"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import { useI18n } from "../../lib/i18n";
import { SITE } from "@/app/config/site";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

// تحويل الأرقام إلى أرقام عربية (٠١٢٣٤٥٦٧٨٩) للعرض فقط
function toArabicDigits(input: string) {
  const map: Record<string, string> = {
    "0": "٠",
    "1": "١",
    "2": "٢",
    "3": "٣",
    "4": "٤",
    "5": "٥",
    "6": "٦",
    "7": "٧",
    "8": "٨",
    "9": "٩",
  };
  return input.replace(/\d/g, (d) => map[d] ?? d);
}

// يحافظ على tel: صحيح (أرقام لاتينية فقط) + إزالة المسافات والرموز
function toTelHref(phone: string) {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return `tel:${cleaned}`;
}

function clearInlineVisibility(el: HTMLElement | null) {
  if (!el) return;
  // Equivalent to gsap.clearProps("opacity,transform,visibility") for our needs
  el.style.removeProperty("opacity");
  el.style.removeProperty("transform");
  el.style.removeProperty("visibility");
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { t, language } = useI18n() as any;

  const labels = useMemo(() => {
    const nav = (t as any)?.nav ?? {};
    const footer = (t as any)?.footer ?? {};
    const services = (t as any)?.services ?? {};
    const servicesList = services?.list ?? {};
    const contact = (t as any)?.contact ?? {};

    return {
      quickLinks: safeText(footer.quickLinks, "Quick Links"),
      rights: safeText(footer.rights, "All rights reserved."),
      privacy: safeText(footer.privacy, "Privacy Policy"),
      terms: safeText(footer.terms, "Terms of Service"),
      cookiePolicy: safeText((footer as any).cookiePolicy, "Cookie Policy"),
      reviews: safeText((footer as any).reviews, "Google Reviews"),

      home: safeText(nav.home, "Home"),
      services: safeText(nav.services, "Services"),
      gallery: safeText(nav.gallery, "Gallery"),
      about: safeText(nav.about, "About"),
      contact: safeText(nav.contact, safeText(contact.title, "Contact")),
      faq: safeText(nav.faq, "FAQ"),

      paintProtection: safeText(servicesList.paintProtection, "Paint Protection"),
      nanoLeather: safeText(servicesList.nanoLeather, "Nano Leather"),
      windshield: safeText(servicesList.windshield, "Windshield"),
      detailing: safeText(servicesList.detailing, "Detailing Services"),
      pdrandpaint: safeText(
        servicesList.pdrandpaint,
        "Paintless Dent Repair and Paint"
      ),

      followUs: safeText((footer as any).followUs, "Follow"),
      explore: safeText((footer as any).explore, "Explore"),
      getInTouch: safeText((footer as any).getInTouch, "Get in touch"),
      location: safeText((footer as any).location, "Location"),
    };
  }, [t]);

  useLayoutEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    // Always ensure content is visible by default (no design change)
    clearInlineVisibility(contentRef.current);
    clearInlineVisibility(bottomRef.current);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Step 4 (mobile guard): skip GSAP entirely on mobile/coarse pointer to reduce TBT
    const isMobile =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      (window.matchMedia("(max-width: 768px)").matches ||
        window.matchMedia("(pointer: coarse)").matches);

    if (prefersReducedMotion || isMobile) {
      return;
    }

    let ctx: any = null;
    let rafId = 0;
    let cancelled = false;

    (async () => {
      try {
        const gsapModule = await import("gsap");
        const stModule = await import("gsap/ScrollTrigger");

        if (cancelled) return;

        const gsap = gsapModule.default;
        const ScrollTrigger =
          (stModule as any).ScrollTrigger || (stModule as any).default;

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ ignoreMobileResize: true });

        ctx = gsap.context(() => {
          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: footerEl,
              start: "top 95%",
              once: true,
              invalidateOnRefresh: false,
            },
          });

          if (contentRef.current) {
            tl.fromTo(
              contentRef.current,
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.42 },
              0
            );
          }

          if (bottomRef.current) {
            tl.fromTo(
              bottomRef.current,
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.32 },
              0.12
            );
          }
        }, footerEl);

        rafId = requestAnimationFrame(() => {
          if (!cancelled && footerRef.current) {
            try {
              ScrollTrigger.refresh();
            } catch {
              // ignore
            }
          }
        });
      } catch {
        // If GSAP fails to load, keep footer visible (no design break)
      }
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);

      try {
        ctx?.revert?.();
      } catch {
        // ignore
      }

      // Restore default visibility (important on route changes)
      clearInlineVisibility(contentRef.current);
      clearInlineVisibility(bottomRef.current);
    };
  }, [language, labels]);

  const year = new Date().getFullYear();
  const phone = "+97433202409";
  const email = "info@rodeodrive.me";
  const phoneDisplay = language === "ar" ? toArabicDigits(phone) : phone;

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.container}>
        <div className={styles.footerContent} ref={contentRef}>
          {/* LEFT: Social + small brand text */}
          <div className={styles.footerIntro}>
            <div className={styles.footerMiniBrand}>RODEO DRIVE</div>

            <div className={styles.socialBlock}>
              <div className={styles.blockLabel}>{labels.followUs}</div>

              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.5v8h4z" />
                  </svg>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="X (formerly Twitter)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.592l-5.156-6.745L4.844 21.75H1.536l7.73-8.835L1.5 2.25h6.75l4.66 6.07L18.244 2.25z" />
                  </svg>
                </a>

                <a
                  href="https://www.snapchat.com/add/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Snapchat"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.5c-3.25 0-5.88 2.63-5.88 5.88v3.63c0 .53-.7.88-1.4 1.05-.88.2-1.58.7-1.58 1.4 0 .7.7 1.2 1.58 1.4.7.17 1.4.52 1.4 1.05 0 2.05 2.93 4.09 5.88 4.09s5.88-2.04 5.88-4.09c0-.53.7-.88 1.4-1.05.88-.2 1.58-.7 1.58-1.4 0-.7-.7-1.2-1.58-1.4-.7-.17-1.4-.52-1.4-1.05V8.38C17.88 5.13 15.25 2.5 12 2.5z" />
                  </svg>
                </a>
              </div>

              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapsCta}
                aria-label="Open location on Google Maps"
              >
                <MapPin size={16} />
                <span>{labels.location}</span>
              </a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{labels.explore}</h3>
            <ul className={styles.footerList}>
              <li><Link href="/" className={styles.footerLink}>{labels.home}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.services}</Link></li>
              <li><Link href="/gallery" className={styles.footerLink}>{labels.gallery}</Link></li>
              <li><Link href="/about" className={styles.footerLink}>{labels.about}</Link></li>
              <li><Link href="/faq" className={styles.footerLink}>{labels.faq}</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>{labels.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{labels.services}</h3>
            <ul className={styles.footerList}>
              <li><Link href="/services/full-protection-ppf" className={styles.footerLink}>{labels.paintProtection}</Link></li>
              <li><Link href="/services/detailing-coating" className={styles.footerLink}>{labels.detailing}</Link></li>
              <li><Link href="/services/window-solar-film" className={styles.footerLink}>{labels.nanoLeather}</Link></li>
              <li><Link href="/services/windshield-services" className={styles.footerLink}>{labels.windshield}</Link></li>
              <li><Link href="/services/paint-repair-services" className={styles.footerLink}>{labels.pdrandpaint}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{labels.getInTouch}</h3>
            <ul className={styles.footerList}>
              <li>
                <a href={toTelHref(phone)} className={styles.footerLink} dir="ltr">
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className={styles.footerLink} dir="ltr">
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  {labels.reviews}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom} ref={bottomRef}>
          <p className={styles.copyright}>
            <span className={styles.bidiLtr} dir="ltr">
              {labels.rights}
            </span>{" "}
            <span className={styles.bidiRtl} dir="rtl">
              Rodeo Drive ©{year}
            </span>
          </p>

          <div className={styles.footerBottomLinks}>
            <Link href="/privacy" className={styles.footerBottomLink}>{labels.privacy}</Link>
            <Link href="/terms" className={styles.footerBottomLink}>{labels.terms}</Link>
            <Link href="/cookie-policy" className={styles.footerBottomLink}>{labels.cookiePolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
