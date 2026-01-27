"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./Process.module.css";
import { useI18n } from "../../lib/i18n";
import { Search, SprayCan, Sparkles, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

// ✅ GSAP controller is code-split (no GSAP in this bundle)
const ProcessMotion = dynamic(() => import("./ProcessMotion"), {
  ssr: false,
  loading: () => null,
});

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const floatingCarRef = useRef<HTMLDivElement>(null);

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
      step1: {
        title: safeText(s1.title, "Inspection"),
        description: safeText(s1.description, "Thorough assessment"),
      },
      step2: {
        title: safeText(s2.title, "Preparation"),
        description: safeText(s2.description, "Professional cleaning and prep"),
      },
      step3: {
        title: safeText(s3.title, "Correction"),
        description: safeText(s3.description, "Paint correction and enhancement"),
      },
      step4: {
        title: safeText(s4.title, "Protection & Delivery"),
        description: safeText(s4.description, "Final protection and quality check"),
      },
    };
  }, [t]);

  const steps = useMemo(
    () => [
      {
        number: "01",
        icon: Search,
        title: labels.step1.title,
        description: labels.step1.description,
      },
      {
        number: "02",
        icon: SprayCan,
        title: labels.step2.title,
        description: labels.step2.description,
      },
      {
        number: "03",
        icon: Sparkles,
        title: labels.step3.title,
        description: labels.step3.description,
      },
      {
        number: "04",
        icon: ShieldCheck,
        title: labels.step4.title,
        description: labels.step4.description,
      },
    ],
    [labels]
  );

  // ✅ motionKey changes when language changes (ensures re-init after lang toggle)
  const motionKey = useMemo(() => {
    const lang =
      (i18n?.lang ?? i18n?.locale ?? i18n?.language ?? "").toString().toLowerCase();
    const resolved = lang.startsWith("ar") ? "ar" : "en";
    return `${resolved}|process`;
  }, [i18n?.lang, i18n?.locale, i18n?.language, t]);

  return (
    <section
      className={styles.processSection}
      ref={sectionRef}
      data-process-root
    >
      {/* ✅ Client-only motion controller (tiny + lazy GSAP) */}
      <ProcessMotion motionKey={motionKey} />

      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={headerRef} data-process-header>
          <h2 className={styles.sectionTitle} data-process-animate>
            {labels.title}
          </h2>
          <p className={styles.sectionSubtitle} data-process-animate>
            {labels.subtitle}
          </p>
        </div>

        <div
          className={styles.floatingProcessCar}
          ref={floatingCarRef}
          aria-hidden="true"
          data-process-float
        >
          <img
            src="https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.timeline} data-process-timeline>
          <div
            className={styles.timelineLine}
            ref={timelineLineRef}
            data-process-line
          />

          <div className={styles.steps} ref={stepsRef} data-process-steps>
            {steps.map((step, index) => (
              <div
                key={index}
                className={styles.step}
                data-process-step
              >
                <div className={styles.stepTop}>
                  <div className={styles.stepNumber} aria-hidden="true">
                    <span className={styles.stepNumberText}>{step.number}</span>
                  </div>

                  <span className={styles.stepIcon} aria-hidden="true">
                    <step.icon size={30} strokeWidth={2} />
                  </span>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>

                <span className={styles.stepDivider} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
