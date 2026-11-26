'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import styles from './CookieBanner.module.css';
import { useI18n } from '@/app/lib/i18n';
import { isRodeoWebsiteOrigin, websiteTrackingScript } from '@/app/lib/websiteMarketing';

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'rd_cookie_consent_v2';
const COOKIE_KEY = 'rd_cookie_consent';

function getStored(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics !== 'boolean') return null;
    if (typeof parsed?.marketing !== 'boolean') return null;
    return { necessary: true, analytics: parsed.analytics, marketing: parsed.marketing };
  } catch {
    return null;
  }
}

function setCookie(value: string) {
  // 180 days
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function store(consent: Consent) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ analytics: consent.analytics, marketing: consent.marketing })
  );
  setCookie(JSON.stringify({ analytics: consent.analytics, marketing: consent.marketing }));
}

const GA4_MEASUREMENT_ID = 'G-D2PWCF6WZH';

function GoogleAnalytics() {
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || previousPathname.current === pathname) return;

    const analyticsWindow = window as Window & { dataLayer?: unknown[] };
    const dataLayer = (analyticsWindow.dataLayer ??= []);
    function gtag(..._args: unknown[]) {
      dataLayer.push(arguments);
    }

    const origin = window.location.origin;
    const pageLocation = origin + pathname;
    const initialReferrer = document.referrer ? new URL(document.referrer).origin : '';
    const pageReferrer = previousPathname.current ? origin + previousPathname.current : initialReferrer;

    if (previousPathname.current === null) {
      gtag('js', new Date());
      gtag('config', GA4_MEASUREMENT_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        page_location: pageLocation,
        page_referrer: pageReferrer,
      });
    }

    gtag('event', 'page_view', {
      send_to: GA4_MEASUREMENT_ID,
      page_location: pageLocation,
      page_referrer: pageReferrer,
    });
    previousPathname.current = pathname;
  }, [pathname]);

  return (
    <Script
      id="rodeo-google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  );
}

export default function CookieBanner() {
  const { language } = useI18n();
  const lang = language === 'ar' ? 'ar' : 'en';
  const dir = useMemo(() => (lang === 'ar' ? 'rtl' : 'ltr'), [lang]);

  const copy = useMemo(() => {
    if (lang === 'ar') {
      return {
        title: 'ملفات تعريف الارتباط والخصوصية',
        text:
          'نستخدم ملفات تعريف الارتباط لتشغيل الموقع وتحسين الأداء وقياس الزيارات باستخدام Google Analytics بعد موافقتك. يمكنك قبول الكل أو رفض غير الضروري أو إدارة التفضيلات.',
        policy: 'سياسة الكوكيز',
        accept: 'قبول الكل',
        reject: 'رفض غير الضروري',
        manage: 'إدارة',
        hide: 'إخفاء الخيارات',
        save: 'حفظ',
        necessary: 'ضروري (دائمًا مفعّل)',
        analytics: 'التحليلات',
        marketing: 'التسويق',
        on: 'مفعّل',
      };
    }
    return {
      title: 'Cookies & Privacy',
      text:
        'We use cookies to run the website and improve performance. With your permission, we use Google Analytics to measure website visits. You can accept all, reject non-essential, or manage preferences.',
      policy: 'Cookie Policy',
      accept: 'Accept all',
      reject: 'Reject non-essential',
      manage: 'Manage',
      hide: 'Hide options',
      save: 'Save',
      necessary: 'Strictly necessary (always on)',
      analytics: 'Analytics',
      marketing: 'Marketing',
      on: 'ON',
    };
  }, [lang]);

  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  useEffect(() => {
    const existing = getStored();
    if (!existing) setVisible(true);
    setTrackingEnabled(
      existing?.analytics === true && isRodeoWebsiteOrigin(window.location.origin)
    );
  }, []);

  if (!visible) {
    return trackingEnabled ? (
      <>
        <Script id="rodeo-website-tracker" src={websiteTrackingScript} strategy="afterInteractive" />
        <GoogleAnalytics />
      </>
    ) : null;
  }

  const saveConsent = (consent: Consent) => {
    store(consent);
    setTrackingEnabled(consent.analytics && isRodeoWebsiteOrigin(window.location.origin));
    setVisible(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectNonEssential = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const savePrefs = () => saveConsent({ necessary: true, analytics, marketing });

  return (
    <div className={styles.wrap} dir={dir} role="dialog" aria-label="Cookie consent">
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.title}>{copy.title}</div>
          <a className={styles.link} href={`/${lang}/cookie-policy`}>
            {copy.policy}
          </a>
        </div>

        <p className={styles.text}>{copy.text}</p>

        {manage && (
          <div className={styles.prefs}>
            <div className={styles.row}>
              <span>{copy.necessary}</span>
              <span className={styles.badge}>{copy.on}</span>
            </div>

            <label className={styles.row}>
              <span>{copy.analytics}</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
            </label>

            <label className={styles.row}>
              <span>{copy.marketing}</span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
            </label>
          </div>
        )}

        <div className={styles.actions}>
          <button className={styles.secondary} onClick={rejectNonEssential} type="button">
            {copy.reject}
          </button>

          <button className={styles.secondary} onClick={() => setManage((v) => !v)} type="button">
            {manage ? copy.hide : copy.manage}
          </button>

          {manage ? (
            <button className={styles.primary} onClick={savePrefs} type="button">
              {copy.save}
            </button>
          ) : (
            <button className={styles.primary} onClick={acceptAll} type="button">
              {copy.accept}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
