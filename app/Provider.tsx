"use client";

import { I18nProvider } from "./lib/i18n";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <Header />
      {children}
      <Footer />
    </I18nProvider>
  );
}
