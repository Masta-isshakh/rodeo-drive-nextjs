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

    // réduit les recalculs sur mobile / resize
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // HEADER (once)
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // TIMELINE LINE (once) => scaleX au lieu de scaleY (plus logique / léger)
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleX: 0, transformOrigin: '0% 50%' },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionEl,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // STEPS (once)
      if (stepsRef.current) {
        const items = stepsRef.current.querySelectorAll(`.${styles.step}`);
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }

      // FLOATING CAR (once) - pas de scrub, pas de boucle JS (la “float” est en CSS)
      if (floatingCarRef.current) {
        gsap.fromTo(
          floatingCarRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 0.12,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionEl,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionEl);

    // refresh léger après paint
    const raf = requestAnimationFrame(() => {
      if (sectionRef.current) ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);

      // Cleanup SAFE : tuer uniquement les triggers de cette section
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
  }, [labels]); // pas [steps] pour éviter reruns inutiles

  return (
    <section className={styles.processSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={headerRef}>
          <h2 className={styles.sectionTitle}>{labels.title}</h2>
          <p className={styles.sectionSubtitle}>{labels.subtitle}</p>
        </div>

        <div className={styles.floatingProcessCar} ref={floatingCarRef} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb3Rpb258ZW58MXx8fHwxNzY3MTEzNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                <div className={styles.stepNumber}>{step.number}</div>
<span className={styles.stepIcon} aria-hidden="true">
  <step.icon size={32} strokeWidth={2} />
</span>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
