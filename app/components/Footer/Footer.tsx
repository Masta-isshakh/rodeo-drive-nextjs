'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import { useI18n } from '../../lib/i18n';
import { SITE } from '@/app/config/site';

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

// تحويل الأرقام إلى أرقام عربية (٠١٢٣٤٥٦٧٨٩) للعرض فقط
function toArabicDigits(input: string) {
  const map: Record<string, string> = {
    '0': '٠',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
  };
  return input.replace(/\d/g, (d) => map[d] ?? d);
}

// يحافظ على tel: صحيح (أرقام لاتينية فقط) + إزالة المسافات والرموز
function toTelHref(phone: string) {
  const cleaned = phone.replace(/[^\d+]/g, '');
  return `tel:${cleaned}`;
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
      quickLinks: safeText(footer.quickLinks, 'Quick Links'),
      rights: safeText(footer.rights, 'All rights reserved.'),
      privacy: safeText(footer.privacy, 'Privacy Policy'),
      terms: safeText(footer.terms, 'Terms of Service'),
      cookiePolicy: safeText((footer as any).cookiePolicy, 'Cookie Policy'),
      reviews: safeText((footer as any).reviews, 'Google Reviews'),

      home: safeText(nav.home, 'Home'),
      services: safeText(nav.services, 'Services'),
      gallery: safeText(nav.gallery, 'Gallery'),
      about: safeText(nav.about, 'About'),
      contact: safeText(nav.contact, safeText(contact.title, 'Contact')),
      faq: safeText(nav.faq, 'FAQ'),

      paintProtection: safeText(servicesList.paintProtection, 'Paint Protection'),
      nanoLeather: safeText(servicesList.nanoLeather, 'Nano Leather'),
      windshield: safeText(servicesList.windshield, 'Windshield'),
      detailing: safeText(servicesList.detailing, 'Detailing Services'),
      pdrandpaint: safeText(servicesList.pdrandpaint, 'Paintless Dent Repair and Paint'),

      followUs: safeText((footer as any).followUs, 'Follow'),
      explore: safeText((footer as any).explore, 'Explore'),
      getInTouch: safeText((footer as any).getInTouch, 'Get in touch'),
      location: safeText((footer as any).location, 'Location'),
    };
  }, [t]);

  useLayoutEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (contentRef.current) gsap.set(contentRef.current, { clearProps: 'opacity,transform,visibility' });
    if (bottomRef.current) gsap.set(bottomRef.current, { clearProps: 'opacity,transform,visibility' });

    if (prefersReducedMotion) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: footerEl,
          start: 'top 95%',
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

    const raf = requestAnimationFrame(() => {
      if (footerRef.current) ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
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
      if (contentRef.current) gsap.set(contentRef.current, { clearProps: 'opacity,transform,visibility' });
      if (bottomRef.current) gsap.set(bottomRef.current, { clearProps: 'opacity,transform,visibility' });
    };
  }, [labels]);

  const year = new Date().getFullYear();
  const phone = '+97433202409';
  const email = 'info@rodeodrive.me';
  const phoneDisplay = language === 'ar' ? toArabicDigits(phone) : phone;

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.container}>
        <div className={styles.footerContent} ref={contentRef}>
          {/* LEFT: Social + small brand text (no logo, no description) */}
          <div className={styles.footerIntro}>
            <div className={styles.footerMiniBrand}>RODEO DRIVE</div>

            <div className={styles.socialBlock}>
              <div className={styles.blockLabel}>{labels.followUs}</div>
              <div className={styles.socialLinks}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
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
              <li><Link href="/services" className={styles.footerLink}>{labels.paintProtection}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.detailing}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.nanoLeather}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.windshield}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.pdrandpaint}</Link></li>
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
            </span>{' '}
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
