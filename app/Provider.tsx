"use client";

import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import { I18nProvider } from "./lib/i18n";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";

let isConfigured = false;

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Configure Amplify une seule fois (évite reconfig en dev + HMR)
    if (!isConfigured) {
      Amplify.configure(outputs, { ssr: false });
      isConfigured = true;
    }
  }, []);

  return (
    <I18nProvider>
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </I18nProvider>
  );
}
