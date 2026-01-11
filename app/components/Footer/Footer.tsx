'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
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
  // يسمح بـ + وأرقام فقط
  const cleaned = phone.replace(/[^\d+]/g, '');
  return `tel:${cleaned}`;
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { t, language } = useI18n() as any; // نفترض أن useI18n يرجّع language مثل باقي الكود عندك

  const labels = useMemo(() => {
    const nav = (t as any)?.nav ?? {};
    const footer = (t as any)?.footer ?? {};
    const services = (t as any)?.services ?? {};
    const servicesList = services?.list ?? {};
    const contact = (t as any)?.contact ?? {};

    return {
      description: safeText(footer.description, 'Premuim ccar care services including Glossy, Matt and Color PPF installation, Interior and Exterior Detailing, Ceramic Coating and more. '),
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

      ceramicCoating: safeText(servicesList.ceramicCoating, 'Ceramic Coating'),
      paintProtection: safeText(servicesList.paintProtection, 'Paint Protection'),
      nanoLeather: safeText(servicesList.nanoLeather, 'Nano Leather'),
      windshield: safeText(servicesList.windshield, 'windshield'),
      detailing: safeText(servicesList.detailing, 'Detailing Services'),
      pdrandpaint: safeText(servicesList.pdrandpaint, 'Paintless Dent Repair and Paint'),

    };
  }, [t]);

  useLayoutEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cols = footerEl.querySelectorAll(`.${styles.footerBrand}, .${styles.footerColumn}`);
    gsap.set(cols, { clearProps: 'opacity,transform,visibility' });

    if (prefersReducedMotion) return;

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
            once: true,
          },
        }
      );
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

      gsap.set(cols, { clearProps: 'opacity,transform,visibility' });
    };
  }, [labels]);

  const year = new Date().getFullYear();

  // ✅ بيانات الاتصال
  const phone = '+97433202409';
  const email = 'info@rodeodrive.me';

  // ✅ عرض الهاتف حسب اللغة (العرض فقط)
  const phoneDisplay = language === 'ar' ? toArabicDigits(phone) : phone;

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoIcon}>
                <img src="/logo.jpeg" alt="Rodeo Drive Logo" className={styles.footerLogoImage} />
              </div>
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
              <li><Link href="/services" className={styles.footerLink}>{labels.paintProtection}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.nanoLeather}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.windshield}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.detailing}</Link></li>
              <li><Link href="/services" className={styles.footerLink}>{labels.pdrandpaint}</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{labels.contact}</h3>
            <ul className={styles.footerList}>
              <li><Link href="/contact" className={styles.footerLink}>{labels.contact}</Link></li>
              <li><Link href="/faq" className={styles.footerLink}>{labels.faq}</Link></li>

              {/* ✅ tel: يبقى لاتيني، العرض يتغير حسب اللغة */}
              <li>
                <a href={toTelHref(phone)} className={styles.footerLink} dir="ltr">
                  {phoneDisplay}
                </a>
              </li>

              <li><a href={`mailto:${email}`} className={styles.footerLink} dir="ltr">{email}</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          {/* ✅ Fix bidi: جزء EN و جزء AR كل واحد dir لوحده */}
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
            <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.footerBottomLink}>{labels.reviews}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
