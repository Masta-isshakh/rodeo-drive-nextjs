"use client";

import { useEffect, useMemo } from "react";
import { useI18n } from "../../lib/i18n";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

type Ids = Record<string, string>;

export default function CinematicShowcaseText({ ids }: { ids: Ids }) {
  const { t } = useI18n();

  const labels = useMemo(() => {
    const cs = (t as any)?.cinematicShowcase ?? {};
    return {
      title: safeText(cs.title, "Excellence in Every Detail"),
      subtitle: safeText(cs.subtitle, "Experience automotive perfection through our signature services"),
      premiumDetailingTitle: safeText(cs.premiumDetailingTitle, "Premium Detailing"),
      premiumDetailingDesc: safeText(cs.premiumDetailingDesc, "Meticulous care for every surface."),
      ceramicCoatingTitle: safeText(cs.ceramicCoatingTitle, "Ceramic Coating"),
      ceramicCoatingDesc: safeText(cs.ceramicCoatingDesc, "Long-lasting brilliance and durability."),
      paintCorrectionTitle: safeText(cs.paintCorrectionTitle, "Paint Correction"),
      paintCorrectionDesc: safeText(cs.paintCorrectionDesc, "Eliminate imperfections for a mirror finish."),
      interiorLuxuryTitle: safeText(cs.interiorLuxuryTitle, "Interior Luxury"),
      interiorLuxuryDesc: safeText(cs.interiorLuxuryDesc, "Deep clean and premium leather care."),
      carsDetailedLabel: safeText(cs.carsDetailedLabel, "Cars Detailed"),
      happyClientsLabel: safeText(cs.happyClientsLabel, "Happy Clients"),
      yearsExperienceLabel: safeText(cs.yearsExperienceLabel, "Years Experience"),
      averageRatingLabel: safeText(cs.averageRatingLabel, "Average Rating"),
    };
  }, [t]);

  // ✅ Updates instantly when language changes (no refresh needed)
  useEffect(() => {
    const section = document.getElementById(ids.section);
    if (!section) return;

    const titleEl = document.getElementById(ids.title);
    const subtitleEl = document.getElementById(ids.subtitle);

    if (titleEl) titleEl.textContent = labels.title;
    if (subtitleEl) subtitleEl.textContent = labels.subtitle;

    section.querySelectorAll<HTMLElement>("[data-k]").forEach((el) => {
      const key = el.getAttribute("data-k") as keyof typeof labels | null;
      if (!key) return;
      el.textContent = String(labels[key] ?? "");
    });
  }, [labels, ids]);

  return null;
}
