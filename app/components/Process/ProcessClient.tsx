"use client";

import { useEffect, useMemo } from "react";
import { useI18n } from "../../lib/i18n";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

type Ids = Record<string, string>;

export default function ProcessText({ ids }: { ids: Ids }) {
  const i18n = useI18n() as any;
  const t = i18n?.t;

  const labels = useMemo(() => {
    const p = (t as any)?.process ?? {};
    const s1 = p?.step1 ?? {};
    const s2 = p?.step2 ?? {};
    const s3 = p?.step3 ?? {};
    const s4 = p?.step4 ?? {};

    return {
      title: safeText(p.title, "Our Process"),
      subtitle: safeText(p.subtitle, "Excellence in every detail"),

      s1t: safeText(s1.title, "Inspection"),
      s1d: safeText(s1.description, "Thorough assessment"),

      s2t: safeText(s2.title, "Preparation"),
      s2d: safeText(s2.description, "Professional cleaning and prep"),

      s3t: safeText(s3.title, "Correction"),
      s3d: safeText(s3.description, "Paint correction and enhancement"),

      s4t: safeText(s4.title, "Protection & Delivery"),
      s4d: safeText(s4.description, "Final protection and quality check"),
    };
  }, [t]);

  // ✅ Instant update on language switch (same concept)
  useEffect(() => {
    const setText = (id: string, value: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    setText(ids.title, labels.title);
    setText(ids.subtitle, labels.subtitle);

    setText(ids.s1t, labels.s1t);
    setText(ids.s1d, labels.s1d);

    setText(ids.s2t, labels.s2t);
    setText(ids.s2d, labels.s2d);

    setText(ids.s3t, labels.s3t);
    setText(ids.s3d, labels.s3d);

    setText(ids.s4t, labels.s4t);
    setText(ids.s4d, labels.s4d);
  }, [labels, ids]);

  return null;
}
