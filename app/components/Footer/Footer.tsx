import Link from "next/link";
import styles from "./Footer.module.css";
import { SITE } from "@/app/config/site";

// client-only: translations injection + motion enhancer
import FooterText from "./FooterText";
import FooterEnhance from "./FooterEnhance";

function toTelHref(phone: string) {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return `tel:${cleaned}`;
}

export default function Footer() {
  const ids = {
    root: "site-footer",
    content: "footer-content",
    bottom: "footer-bottom",

    // headings
    exploreTitle: "footer-explore-title",
    servicesTitle: "footer-services-title",
    touchTitle: "footer-touch-title",
    followLabel: "footer-follow-label",
    locationLabel: "footer-location-label",

    // nav labels
    home: "footer-home",
    services: "footer-services",
    gallery: "footer-gallery",
    about: "footer-about",
    faq: "footer-faq",
    contact: "footer-contact",

    // services labels
    paintProtection: "footer-paintProtection",
    detailing: "footer-detailing",
    nanoLeather: "footer-nanoLeather",
    windshield: "footer-windshield",
    pdrandpaint: "footer-pdrandpaint",

    // touch
    phone: "footer-phone",
    email: "footer-email",
    reviews: "footer-reviews",

    // bottom
    rights: "footer-rights",
    privacy: "footer-privacy",
    terms: "footer-terms",
    cookie: "footer-cookie",
  } as const;

  const year = new Date().getFullYear();
  const phone = "+97433202409";
  const email = "info@rodeodrive.me";

  return (
    <footer className={styles.footer} id={ids.root} dir="ltr">
      {/* ✅ Client-only: set labels + RTL/LTR behavior (same translation concept) */}
      <FooterText ids={ids} phone={phone} year={year} />

      {/* ✅ Client-only: GSAP / ScrollTrigger lazy-loaded near viewport */}
      <FooterEnhance ids={ids} />

      <div className={styles.container}>
        <div className={styles.footerContent} id={ids.content}>
          {/* LEFT: socials */}
          <div className={styles.footerIntro}>
            <div className={styles.footerMiniBrand}>RODEO DRIVE</div>

            <div className={styles.socialBlock}>
              <div className={styles.blockLabel} id={ids.followLabel}>
                Follow
              </div>

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
                <span className={styles.mapPin} aria-hidden="true">📍</span>
                <span id={ids.locationLabel}>Location</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle} id={ids.exploreTitle}>
              Explore
            </h3>
            <ul className={styles.footerList}>
              <li><Link href="/" className={styles.footerLink} id={ids.home}>Home</Link></li>
              <li><Link href="/services" className={styles.footerLink} id={ids.services}>Services</Link></li>
              <li><Link href="/gallery" className={styles.footerLink} id={ids.gallery}>Gallery</Link></li>
              <li><Link href="/about" className={styles.footerLink} id={ids.about}>About</Link></li>
              <li><Link href="/faq" className={styles.footerLink} id={ids.faq}>FAQ</Link></li>
              <li><Link href="/contact" className={styles.footerLink} id={ids.contact}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle} id={ids.servicesTitle}>
              Services
            </h3>
            <ul className={styles.footerList}>
              <li><Link href="/services/full-protection-ppf" className={styles.footerLink} id={ids.paintProtection}>Paint Protection</Link></li>
              <li><Link href="/services/detailing-coating" className={styles.footerLink} id={ids.detailing}>Detailing Services</Link></li>
              <li><Link href="/services/window-solar-film" className={styles.footerLink} id={ids.nanoLeather}>Nano Leather</Link></li>
              <li><Link href="/services/windshield-services" className={styles.footerLink} id={ids.windshield}>Windshield</Link></li>
              <li><Link href="/services/paint-repair-services" className={styles.footerLink} id={ids.pdrandpaint}>Paintless Dent Repair and Paint</Link></li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle} id={ids.touchTitle}>
              Get in touch
            </h3>
            <ul className={styles.footerList}>
              <li>
                <a href={toTelHref(phone)} className={styles.footerLink} dir="ltr" id={ids.phone}>
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className={styles.footerLink} dir="ltr" id={ids.email}>
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                  id={ids.reviews}
                >
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom} id={ids.bottom}>
          <p className={styles.copyright}>
            <span className={styles.bidiLtr} dir="ltr" id={ids.rights}>
              All rights reserved.
            </span>{" "}
            <span className={styles.bidiRtl} dir="rtl">
              Rodeo Drive ©{year}
            </span>
          </p>

          <div className={styles.footerBottomLinks}>
            <Link href="/privacy" className={styles.footerBottomLink} id={ids.privacy}>Privacy Policy</Link>
            <Link href="/terms" className={styles.footerBottomLink} id={ids.terms}>Terms of Service</Link>
            <Link href="/cookie-policy" className={styles.footerBottomLink} id={ids.cookie}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
