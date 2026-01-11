"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des fichiers de traduction
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";

// Initialisation
i18n
  .use(LanguageDetector) // détecte la langue du navigateur / localStorage
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    lng: "en",
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
