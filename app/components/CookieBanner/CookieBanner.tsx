'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './CookieBanner.module.css';
import { useI18n } from '@/app/lib/i18n';

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'rd_cookie_consent_v1';
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

export default function CookieBanner() {
  const { language } = useI18n();
  const lang = language === 'ar' ? 'ar' : 'en';
  const dir = useMemo(() => (lang === 'ar' ? 'rtl' : 'ltr'), [lang]);

  const copy = useMemo(() => {
    if (lang === 'ar') {
      return {
        title: 'ملفات تعريف الارتباط والخصوصية',
        text:
          'نستخدم ملفات تعريف الارتباط لتشغيل الموقع وتحسين الأداء وقياس نتائج التسويق. يمكنك قبول الكل أو رفض غير الضروري أو إدارة التفضيلات.',
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
        'We use cookies to run the website, improve performance, and measure marketing results. You can accept all, reject non-essential, or manage preferences.',
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

  useEffect(() => {
    const existing = getStored();
    if (!existing) setVisible(true);
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    store({ necessary: true, analytics: true, marketing: true });
    setVisible(false);
  };

  const rejectNonEssential = () => {
    store({ necessary: true, analytics: false, marketing: false });
    setVisible(false);
  };

  const savePrefs = () => {
    store({ necessary: true, analytics, marketing });
    setVisible(false);
  };

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
