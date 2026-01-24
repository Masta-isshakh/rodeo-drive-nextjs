'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Process.module.css';
import { useI18n } from '../../lib/i18n';
import { Search, SprayCan, Sparkles, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const floatingCarRef = useRef<HTMLDivElement>(null);

  const { t } = useI18n();

  const labels = useMemo(() => {
    const p = (t as any)?.process ?? {};
    const s1 = p?.step1 ?? {};
    const s2 = p?.step2 ?? {};
    const s3 = p?.step3 ?? {};
    const s4 = p?.step4 ?? {};

    return {
      title: safeText(p.title, 'Our Process'),
      subtitle: safeText(p.subtitle, 'Excellence in every detail'),
      step1: { title: safeText(s1.title, 'Inspection'), description: safeText(s1.description, 'Thorough assessment') },
      step2: { title: safeText(s2.title, 'Preparation'), description: safeText(s2.description, 'Professional cleaning and prep') },
      step3: { title: safeText(s3.title, 'Correction'), description: safeText(s3.description, 'Paint correction and enhancement') },
      step4: { title: safeText(s4.title, 'Protection & Delivery'), description: safeText(s4.description, 'Final protection and quality check') },
    };
  }, [t]);

  const steps = useMemo(
    () => [
      { number: '01', icon: Search, title: labels.step1.title, description: labels.step1.description },
      { number: '02', icon: SprayCan, title: labels.step2.title, description: labels.step2.description },
      { number: '03', icon: Sparkles, title: labels.step3.title, description: labels.step3.description },
      { number: '04', icon: ShieldCheck, title: labels.step4.title, description: labels.step4.description },
    ],
    [labels]
  );

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reduce recalcs on mobile / resize
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // ensure everything visible (no triggers)
        if (headerRef.current) gsap.set(headerRef.current, { opacity: 1, y: 0 });
        if (timelineLineRef.current) gsap.set(timelineLineRef.current, { scaleX: 1 });
        if (stepsRef.current) {
          const items = stepsRef.current.querySelectorAll(`.${styles.step}`);
          gsap.set(items, { opacity: 1, y: 0, scale: 1 });
        }
        if (floatingCarRef.current) gsap.set(floatingCarRef.current, { opacity: 0.1, y: 0 });
        return;
      }

      // Use a single, lightweight timeline (no scrub) to avoid extra work
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 82%',
          once: true,
        },
      });

      // HEADER
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.55 },
          0
        );
      }

      // Floating decor (fade + lift only)
      if (floatingCarRef.current) {
        tl.fromTo(
          floatingCarRef.current,
          { opacity: 0, y: 18 },
          { opacity: 0.12, y: 0, duration: 0.7 },
          0.05
        );
      }

      // TIMELINE LINE (reveal)
      if (timelineLineRef.current) {
        tl.fromTo(
          timelineLineRef.current,
          { scaleX: 0, transformOrigin: '0% 50%' },
          { scaleX: 1, duration: 0.7 },
          0.1
        );
      }

      // STEPS (batch reveal; transform/opacity only)
      if (stepsRef.current) {
        const items = Array.from(stepsRef.current.querySelectorAll(`.${styles.step}`));
        tl.fromTo(
          items,
          { opacity: 0, y: 16, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 },
          0.18
        );
      }
    }, sectionEl);

    // Light refresh after paint
    const raf = requestAnimationFrame(() => {
      if (sectionRef.current) ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      try {
        ScrollTrigger.getAll().forEach((st) => {
          const trig = st.trigger as Element | null;
          if (trig && sectionEl.contains(trig)) st.kill(false);
        });
      } catch {
        // ignore
      }
      try {
        ctx.revert();
      } catch {
        // ignore
      }
    };
  }, [labels]);

  return (
    <section className={styles.processSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={headerRef}>
          <h2 className={styles.sectionTitle}>{labels.title}</h2>
          <p className={styles.sectionSubtitle}>{labels.subtitle}</p>
        </div>

        <div className={styles.floatingProcessCar} ref={floatingCarRef} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} ref={timelineLineRef} />

          <div className={styles.steps} ref={stepsRef}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
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
