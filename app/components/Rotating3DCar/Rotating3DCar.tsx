'use client';

import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Rotating3DCar.module.css';
import { useI18n } from '../../lib/i18n';

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

export default function Rotating3DCar() {
  const sectionRef = useRef<HTMLElement>(null);
  const carImagesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const angleTextRef = useRef<HTMLDivElement>(null);

  const { t } = useI18n();

  const labels = useMemo(() => {
    const inspection = (t as any)?.inspection360 ?? {};
    return {
      title: safeText(inspection.title, '360° Inspection'),
      subtitle: safeText(inspection.subtitle, 'Every Angle Perfected'),
      description: safeText(
        inspection.description,
        'We examine every detail from all perspectives to ensure flawless results.'
      ),
      rotation: safeText(inspection.rotation, 'Rotation'),
      frontView: safeText(inspection.frontView, 'Front View'),
      sideProfile: safeText(inspection.sideProfile, 'Side Profile'),
      rearView: safeText(inspection.rearView, 'Rear View'),
      threeQuarter: safeText(inspection.threeQuarter, 'Three Quarter'),
    };
  }, [t]);

  const carImages = useMemo(
    () => [
      {
        url: 'https://images.unsplash.com/photo-1760381558154-0887c4539467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBmcm9udCUyMHZpZXd8ZW58MXx8fHwxNzY3MTY4ODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        angle: 0,
        title: labels.frontView,
      },
      {
        url: 'https://images.unsplash.com/photo-1558992658-08a063bb01af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBzaWRlJTIwcHJvZmlsZXxlbnwxfHx8fDE3NjcxNjg4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        angle: 90,
        title: labels.sideProfile,
      },
      {
        url: 'https://images.unsplash.com/photo-1602210738255-3c9c94c0149c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZWFyJTIwYmFja3xlbnwxfHx8fDE3NjcxNjg4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        angle: 180,
        title: labels.rearView,
      },
      {
        url: 'https://images.unsplash.com/photo-1683693066225-028b1e30bc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBhbmdsZXxlbnwxfHx8fDE3NjcxNjg4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        angle: 270,
        title: labels.threeQuarter,
      },
    ],
    [labels]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50, rotateX: -30 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (carImagesRef.current) {
        gsap.set(carImagesRef.current, { transformStyle: 'preserve-3d' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=2600',
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        const updateAngle = () => {
          const st = tl.scrollTrigger;
          if (!st || !angleTextRef.current) return;
          const progress = gsap.utils.clamp(0, 1, st.progress);
          angleTextRef.current.textContent = `${Math.round(progress * 360)}°`;
        };

        tl.to(carImagesRef.current, {
          rotateY: 360,
          duration: 1,
          ease: 'none',
          onUpdate: updateAngle,
        });

        tl.to(carImagesRef.current, { scale: 1.25, duration: 0.25, ease: 'power2.inOut' }, 0);
        tl.to(carImagesRef.current, { y: -40, duration: 0.5, ease: 'sine.inOut' }, 0);
        tl.to(carImagesRef.current, { y: 0, duration: 0.5, ease: 'sine.inOut' }, 0.5);
        tl.to(carImagesRef.current, { scale: 1, duration: 0.25, ease: 'power2.inOut' }, 0.75);

        updateAngle();
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [labels]); // important: relance quand la langue change

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title} ref={titleRef}>
            <span className={styles.titleGradient}>{labels.title}</span>
            <br />
            {labels.subtitle}
          </h2>
          <p className={styles.description} ref={descriptionRef}>
            {labels.description}
          </p>
        </div>

        <div className={styles.carWrapper}>
          <div className={styles.carContainer} ref={carImagesRef}>
            {carImages.map((car, index) => (
              <div
                key={index}
                className={styles.carImage}
                style={{ transform: `rotateY(${car.angle}deg) translateZ(500px)` }}
              >
                <img src={car.url} alt={car.title} loading="lazy" />
                <div className={styles.carLabel}>{car.title}</div>
              </div>
            ))}
          </div>

          <div className={styles.angleIndicator}>
            <div className={styles.angleDisplay} ref={angleTextRef}>
              0°
            </div>
            <div className={styles.angleLabel}>{labels.rotation}</div>
          </div>

          <div className={styles.reflectionLine} />
          <div className={styles.scanLine} />
        </div>
      </div>

      <div className={styles.backgroundGrid} />
      <div className={styles.gradientOverlay} />
    </section>
  );
}
