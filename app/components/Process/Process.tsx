import Image from "next/image";
import styles from "./Process.module.css";
import { Search, SprayCan, Sparkles, ShieldCheck } from "lucide-react";

import ProcessText from "./ProcessClient";
import ProcessEnhance from "./ProcessMotion";

export default function Process() {
  const ids = {
    section: "process-section",
    header: "process-header",
    line: "process-line",
    steps: "process-steps",
    float: "process-floatcar",

    // header text
    title: "process-title",
    subtitle: "process-subtitle",

    // step texts
    s1t: "process-s1-title",
    s1d: "process-s1-desc",
    s2t: "process-s2-title",
    s2d: "process-s2-desc",
    s3t: "process-s3-title",
    s3d: "process-s3-desc",
    s4t: "process-s4-title",
    s4d: "process-s4-desc",
  } as const;

  return (
    <section className={styles.processSection} id={ids.section}>
      {/* ✅ Client-only: inject translated strings (same translation concept) */}
      <ProcessText ids={ids} />

      {/* ✅ Client-only: GSAP/ScrollTrigger lazy-loaded near viewport */}
      <ProcessEnhance ids={ids} />

      <div className={styles.container}>
        <div className={styles.sectionHeader} id={ids.header}>
          {/* Provide fallback text to avoid blank before hydration */}
          <h2 className={styles.sectionTitle} id={ids.title}>
            Our Process
          </h2>
          <p className={styles.sectionSubtitle} id={ids.subtitle}>
            Excellence in every detail
          </p>
        </div>

        <div className={styles.floatingProcessCar} id={ids.float} aria-hidden="true">
            <Image
              src="/defender.avif"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 768px) 0px, (max-width: 1100px) 640px, 820px"
            />
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} id={ids.line} />

          <div className={styles.steps} id={ids.steps}>
            {/* Step 01 */}
            <div className={styles.step}>
              <div className={styles.stepTop}>
                <div className={styles.stepNumber} aria-hidden="true">
                  <span className={styles.stepNumberText}>01</span>
                </div>

                <span className={styles.stepIcon} aria-hidden="true">
                  <Search size={30} strokeWidth={2} />
                </span>
              </div>

              <h3 className={styles.stepTitle} id={ids.s1t}>
                Inspection
              </h3>
              <p className={styles.stepDescription} id={ids.s1d}>
                Thorough assessment
              </p>

              <span className={styles.stepDivider} aria-hidden="true" />
            </div>

            {/* Step 02 */}
            <div className={styles.step}>
              <div className={styles.stepTop}>
                <div className={styles.stepNumber} aria-hidden="true">
                  <span className={styles.stepNumberText}>02</span>
                </div>

                <span className={styles.stepIcon} aria-hidden="true">
                  <SprayCan size={30} strokeWidth={2} />
                </span>
              </div>

              <h3 className={styles.stepTitle} id={ids.s2t}>
                Preparation
              </h3>
              <p className={styles.stepDescription} id={ids.s2d}>
                Professional cleaning and prep
              </p>

              <span className={styles.stepDivider} aria-hidden="true" />
            </div>

            {/* Step 03 */}
            <div className={styles.step}>
              <div className={styles.stepTop}>
                <div className={styles.stepNumber} aria-hidden="true">
                  <span className={styles.stepNumberText}>03</span>
                </div>

                <span className={styles.stepIcon} aria-hidden="true">
                  <Sparkles size={30} strokeWidth={2} />
                </span>
              </div>

              <h3 className={styles.stepTitle} id={ids.s3t}>
                Correction
              </h3>
              <p className={styles.stepDescription} id={ids.s3d}>
                Paint correction and enhancement
              </p>

              <span className={styles.stepDivider} aria-hidden="true" />
            </div>

            {/* Step 04 */}
            <div className={styles.step}>
              <div className={styles.stepTop}>
                <div className={styles.stepNumber} aria-hidden="true">
                  <span className={styles.stepNumberText}>04</span>
                </div>

                <span className={styles.stepIcon} aria-hidden="true">
                  <ShieldCheck size={30} strokeWidth={2} />
                </span>
              </div>

              <h3 className={styles.stepTitle} id={ids.s4t}>
                Protection & Delivery
              </h3>
              <p className={styles.stepDescription} id={ids.s4d}>
                Final protection and quality check
              </p>

              <span className={styles.stepDivider} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
