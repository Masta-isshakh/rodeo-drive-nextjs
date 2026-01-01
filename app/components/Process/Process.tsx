'use client';

import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Process.module.css';
import { useI18n } from '../../lib/i18n';

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
      { number: '01', icon: '🔍', title: labels.step1.title, description: labels.step1.description },
      { number: '02', icon: '🧼', title: labels.step2.title, description: labels.step2.description },
      { number: '03', icon: '✨', title: labels.step3.title, description: labels.step3.description },
      { number: '04', icon: '🛡️', title: labels.step4.title, description: labels.step4.description },
    ],
    [labels]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 80, rotateX: -18, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            duration: 1.8,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.to(timelineLineRef.current, {
          boxShadow: '0 0 26px rgba(192, 192, 192, 0.55)',
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      const stepEls = stepsRef.current?.querySelectorAll(`.${styles.step}`);
      if (stepEls && stepEls.length) {
        gsap.fromTo(
          stepEls,
          { opacity: 0, x: -80, rotateY: -18, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (floatingCarRef.current) {
        gsap.fromTo(
          floatingCarRef.current,
          { opacity: 0, y: 110, scale: 0.85, rotate: -10 },
          {
            opacity: 0.12,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.to(floatingCarRef.current, {
          y: -90,
          rotate: 6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });

        gsap.to(floatingCarRef.current, {
          y: '+=30',
          rotate: '+=3',
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [steps]);

  return (
    <section className={styles.processSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={headerRef}>
          <h2 className={styles.sectionTitle}>{labels.title}</h2>
          <p className={styles.sectionSubtitle}>{labels.subtitle}</p>
        </div>

        <div className={styles.floatingProcessCar} ref={floatingCarRef}>
          <img
            src="https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb3Rpb258ZW58MXx8fHwxNzY3MTEzNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sports car"
            loading="lazy"
          />
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} ref={timelineLineRef} />

          <div className={styles.steps} ref={stepsRef}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <span className={styles.stepIcon}>{step.icon}</span>
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
