"use client";

import { useEffect, useMemo } from "react";
import { useI18n } from "../../lib/i18n";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function toArabicDigits(input: string) {
  const map: Record<string, string> = {
    "0": "٠","1": "١","2": "٢","3": "٣","4": "٤",
    "5": "٥","6": "٦","7": "٧","8": "٨","9": "٩",
  };
  return input.replace(/\d/g, (d) => map[d] ?? d);
}

type Ids = Record<string, string>;

export default function FooterText({ ids, phone, year }: { ids: Ids; phone: string; year: number }) {
  const { t, language } = useI18n() as any;

  const labels = useMemo(() => {
    const nav = (t as any)?.nav ?? {};
    const footer = (t as any)?.footer ?? {};
    const services = (t as any)?.services ?? {};
    const servicesList = services?.list ?? {};
    const contact = (t as any)?.contact ?? {};

    return {
      followUs: safeText((footer as any).followUs, "Follow"),
      explore: safeText((footer as any).explore, "Explore"),
      getInTouch: safeText((footer as any).getInTouch, "Get in touch"),
      location: safeText((footer as any).location, "Location"),

      rights: safeText(footer.rights, "All rights reserved."),
      privacy: safeText(footer.privacy, "Privacy Policy"),
      terms: safeText(footer.terms, "Terms of Service"),
      cookiePolicy: safeText((footer as any).cookiePolicy, "Cookie Policy"),
      reviews: safeText((footer as any).reviews, "Google Reviews"),

      home: safeText(nav.home, "Home"),
      services: safeText(nav.services, "Services"),
      gallery: safeText(nav.gallery, "Gallery"),
      about: safeText(nav.about, "About"),
      faq: safeText(nav.faq, "FAQ"),
      contact: safeText(nav.contact, safeText(contact.title, "Contact")),

      paintProtection: safeText(servicesList.paintProtection, "Paint Protection"),
      nanoLeather: safeText(servicesList.nanoLeather, "Nano Leather"),
      windshield: safeText(servicesList.windshield, "Windshield"),
      detailing: safeText(servicesList.detailing, "Detailing Services"),
      pdrandpaint: safeText(servicesList.pdrandpaint, "Paintless Dent Repair and Paint"),
    };
  }, [t]);

  useEffect(() => {
    const root = document.getElementById(ids.root);
    if (root) root.setAttribute("dir", language === "ar" ? "rtl" : "ltr");

    const setText = (id: string, value: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    // headings / labels
    setText(ids.followLabel, labels.followUs);
    setText(ids.locationLabel, labels.location);
    setText(ids.exploreTitle, labels.explore);
    setText(ids.servicesTitle, labels.services);
    setText(ids.touchTitle, labels.getInTouch);

    // explore links
    setText(ids.home, labels.home);
    setText(ids.services, labels.services);
    setText(ids.gallery, labels.gallery);
    setText(ids.about, labels.about);
    setText(ids.faq, labels.faq);
    setText(ids.contact, labels.contact);

    // services links
    setText(ids.paintProtection, labels.paintProtection);
    setText(ids.detailing, labels.detailing);
    setText(ids.nanoLeather, labels.nanoLeather);
    setText(ids.windshield, labels.windshield);
    setText(ids.pdrandpaint, labels.pdrandpaint);

    // bottom
    setText(ids.rights, labels.rights);
    setText(ids.privacy, labels.privacy);
    setText(ids.terms, labels.terms);
    setText(ids.cookie, labels.cookiePolicy);
    setText(ids.reviews, labels.reviews);

    // phone display only (href stays tel:+...)
    const phoneEl = document.getElementById(ids.phone);
    if (phoneEl) {
      phoneEl.textContent = language === "ar" ? toArabicDigits(phone) : phone;
      phoneEl.setAttribute("dir", "ltr");
    }

    const emailEl = document.getElementById(ids.email);
    if (emailEl) emailEl.textContent = "info@rodeodrive.me";

    // keep year stable (already rendered), but if you ever need it:
    void year;
  }, [ids, labels, language, phone, year]);

  return null;
}
