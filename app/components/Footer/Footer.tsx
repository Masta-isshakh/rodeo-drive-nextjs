'use client';

import { useEffect, useMemo, useRef } from 'react';
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
      // footer
      description: safeText(footer.description, 'Premium car detailing and protection services in Doha, Qatar.'),
      quickLinks: safeText(footer.quickLinks, 'Quick Links'),
      rights: safeText(footer.rights, 'All rights reserved.'),
      privacy: safeText(footer.privacy, 'Privacy Policy'),
      terms: safeText(footer.terms, 'Terms of Service'),

      // nav
      home: safeText(nav.home, 'Home'),
      services: safeText(nav.services, 'Services'),
      gallery: safeText(nav.gallery, 'Gallery'),
      about: safeText(nav.about, 'About'),
      contact: safeText(nav.contact, safeText(contact.title, 'Contact')),
      faq: safeText(nav.faq, 'FAQ'),

      // services list
      ceramicCoating: safeText(servicesList.ceramicCoating, 'Ceramic Coating'),
      paintProtection: safeText(servicesList.paintProtection, 'Paint Protection'),
      polish: safeText(servicesList.polish, 'Polish'),
      blackEdition: safeText(servicesList.blackEdition, 'Black Edition'),
    };
  }, [t]);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const cols = footerRef.current?.querySelectorAll(
        `.${styles.footerBrand}, .${styles.footerColumn}`
      );

      if (cols && cols.length) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, [labels]);

  const year = new Date().getFullYear();

  // Mets tes vraies infos ici (ou remplace par traduction si tu veux)
  const phone = '+974 1234 5678';
  const email = 'info@rodeo-drive.qa';

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
