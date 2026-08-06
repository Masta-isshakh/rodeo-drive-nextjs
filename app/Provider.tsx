"use client";

import { Suspense, useEffect } from "react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import { I18nProvider, type Language } from "./lib/i18n";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import NoImageDownload from "./components/NoImageDownload";
import AttributionTracker from "./components/AttributionTracker";

let isConfigured = false;

export default function Providers({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  useEffect(() => {
    // Configure Amplify once (avoid reconfig on HMR)
    if (!isConfigured) {
      Amplify.configure(outputs, { ssr: false });
      isConfigured = true;
    }
  }, []);

  return (
    <I18nProvider initialLanguage={initialLanguage}>
      {/* useSearchParams needs a Suspense boundary to avoid opting the whole
          tree into client-side rendering. */}
      <Suspense fallback={null}>
        <AttributionTracker />
      </Suspense>
      <NoImageDownload />
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </I18nProvider>
  );
}
