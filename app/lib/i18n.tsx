"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getTranslation } from "./translations";
import type { Language } from "./translations";

// ✅ This makes: import { type Language } from "./lib/i18n" valid
export type { Language };

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readCookieLang(): Language | null {
  try {
    const m = document.cookie.match(/(?:^|;\s*)lang=(en|ar)(?:;|$)/);
    return (m?.[1] as Language) || null;
  } catch {
    return null;
  }
}

function readStorageLang(): Language | null {
  try {
    const v = localStorage.getItem("lang");
    return v === "en" || v === "ar" ? v : null;
  } catch {
    return null;
  }
}

function writeLang(lang: Language) {
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  try {
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
  } catch {}
}

function applyHtml(lang: Language) {
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);
}

export function I18nProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, _setLanguage] = useState<Language>(() => {
    if (initialLanguage === "en" || initialLanguage === "ar") return initialLanguage;
    if (typeof window === "undefined") return "en";
    return readStorageLang() ?? readCookieLang() ?? "en";
  });

  // Sync when route lang changes
  useEffect(() => {
    if (initialLanguage && initialLanguage !== language) {
      _setLanguage(initialLanguage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLanguage]);

  useEffect(() => {
    applyHtml(language);
    writeLang(language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    writeLang(lang);
    applyHtml(lang);
    _setLanguage(lang);
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    return { language, setLanguage, t: getTranslation(language) };
  }, [language, setLanguage]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
