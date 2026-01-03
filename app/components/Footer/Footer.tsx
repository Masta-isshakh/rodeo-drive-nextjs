'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';
import { useI18n } from '../../lib/i18n';

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  const labels = useMemo(() => {
    const nav = (t as any)?.nav ?? {};
    const footer = (t as any)?.footer ?? {};
    const services = (t as any)?.services ?? {};
    const servicesList = services?.list ?? {};
    const contact = (t as any)?.contact ?? {};

    return {
      description: safeText(footer.description, 'Premium car detailing and protection services in Doha, Qatar.'),
      quickLinks: safeText(footer.quickLinks, 'Quick Links'),
      rights: safeText(footer.rights, 'All rights reserved.'),
      privacy: safeText(footer.privacy, 'Privacy Policy'),
      terms: safeText(footer.terms, 'Terms of Service'),

      home: safeText(nav.home, 'Home'),
      services: safeText(nav.services, 'Services'),
      gallery: safeText(nav.gallery, 'Gallery'),
      about: safeText(nav.about, 'About'),
      contact: safeText(nav.contact, safeText(contact.title, 'Contact')),
      faq: safeText(nav.faq, 'FAQ'),

      ceramicCoating: safeText(servicesList.ceramicCoating, 'Ceramic Coating'),
      paintProtection: safeText(servicesList.paintProtection, 'Paint Protection'),
      polish: safeText(servicesList.polish, 'Polish'),
      blackEdition: safeText(servicesList.blackEdition, 'Black Edition'),
    };
  }, [t]);

  useLayoutEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Le footer ne doit JAMAIS rester caché si l'anim ne se lance pas
    const cols = footerEl.querySelectorAll(`.${styles.footerBrand}, .${styles.footerColumn}`);
    gsap.set(cols, { clearProps: 'opacity,transform,visibility' });

    if (prefersReducedMotion) return;

    // Important: ignoreMobileResize pour éviter refreshs coûteux
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cols,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerEl,
            start: 'top 92%',
            once: true, // ✅ ne reverse jamais
          },
        }
      );
    }, footerEl);

    const raf = requestAnimationFrame(() => {
      if (footerRef.current) ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);

      // Cleanup SAFE: kill uniquement les triggers dont le trigger est dans le footer
      try {
        ScrollTrigger.getAll().forEach((st) => {
          const trig = st.trigger as Element | null;
          if (trig && footerEl.contains(trig)) st.kill(false);
        });
      } catch {
        // ignore
      }

      try {
        ctx.revert();
      } catch {
        // ignore
      }

      // S'assure qu'en dev/StrictMode le footer redevient visible
      gsap.set(cols, { clearProps: 'opacity,transform,visibility' });
    };
  }, [labels]);

  const year = new Date().getFullYear();
  const phone = '+974 5000 0748';
  const email = 'info@rodeodrive.me';

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoIcon}>RD</div>
              RODEO DRIVE
            </div>
            <p className={styles.footerDescription}>{labels.description}</p>

            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{labels.quickLinks}</h3>
            <ul className={styles.footerList}>
              <li><Link href="/" className={styles.footerLink}>{labels.home}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.services}</Link></li>
              <li><Link href="/gallery" className={styles.footerLink}>{labels.gallery}</Link></li>
              <li><Link href="/about" className={styles.footerLink}>{labels.about}</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{labels.services}</h3>
            <ul className={styles.footerList}>
              <li><Link href="/services" className={styles.footerLink}>{labels.ceramicCoating}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.paintProtection}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.polish}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.blackEdition}</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{labels.contact}</h3>
            <ul className={styles.footerList}>
              <li><Link href="/contact" className={styles.footerLink}>{labels.contact}</Link></li>
              <li><Link href="/faq" className={styles.footerLink}>{labels.faq}</Link></li>
              <li><a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.footerLink}>{phone}</a></li>
              <li><a href={`mailto:${email}`} className={styles.footerLink}>{email}</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {year} Rodeo Drive. {labels.rights}
          </p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy" className={styles.footerBottomLink}>{labels.privacy}</Link>
            <Link href="/terms" className={styles.footerBottomLink}>{labels.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
