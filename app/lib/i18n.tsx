"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Language } from "./translations";
import { getTranslation } from "./translations";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function safeGetStoredLang(): Language | null {
  try {
    const v = localStorage.getItem("lang");
    return v === "en" || v === "ar" ? v : null;
  } catch {
    return null;
  }
}

function safeSetStoredLang(lang: Language) {
  try {
    localStorage.setItem("lang", lang);
  } catch {
    // ignore
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, _setLanguage] = useState<Language>("en");

  // 1) Charger la langue depuis localStorage (client-only)
  useEffect(() => {
    const saved = safeGetStoredLang();
    if (saved) _setLanguage(saved);
  }, []);

  // 2) Appliquer dir/lang + persister
  useEffect(() => {
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
    safeSetStoredLang(language);
  }, [language]);

  // Setter stable
  const setLanguage = useCallback((lang: Language) => {
    _setLanguage(lang);
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    return {
      language,
      setLanguage,
      t: getTranslation(language),
    };
  }, [language, setLanguage]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
