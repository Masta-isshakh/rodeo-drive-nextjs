'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CinematicShowcase.module.css';
import { useI18n } from '../../lib/i18n';

gsap.registerPlugin(ScrollTrigger);

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

export default function CinematicShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const [stats, setStats] = useState({ cars: 0, clients: 0, years: 0, rating: 0 });

  const { t } = useI18n();

  const labels = useMemo(() => {
    const cs = (t as any)?.cinematicShowcase ?? {};
    return {
      title: safeText(cs.title, 'Excellence in Every Detail'),
      subtitle: safeText(cs.subtitle, 'Experience automotive perfection through our signature services'),
      premiumDetailingTitle: safeText(cs.premiumDetailingTitle, 'Premium Detailing'),
      premiumDetailingDesc: safeText(cs.premiumDetailingDesc, 'Meticulous care for every surface.'),
      ceramicCoatingTitle: safeText(cs.ceramicCoatingTitle, 'Ceramic Coating'),
      ceramicCoatingDesc: safeText(cs.ceramicCoatingDesc, 'Long-lasting brilliance and durability.'),
      paintCorrectionTitle: safeText(cs.paintCorrectionTitle, 'Paint Correction'),
      paintCorrectionDesc: safeText(cs.paintCorrectionDesc, 'Eliminate imperfections for a mirror finish.'),
      interiorLuxuryTitle: safeText(cs.interiorLuxuryTitle, 'Interior Luxury'),
      interiorLuxuryDesc: safeText(cs.interiorLuxuryDesc, 'Deep clean and premium leather care.'),
      carsDetailedLabel: safeText(cs.carsDetailedLabel, 'Cars Detailed'),
      happyClientsLabel: safeText(cs.happyClientsLabel, 'Happy Clients'),
      yearsExperienceLabel: safeText(cs.yearsExperienceLabel, 'Years Experience'),
      averageRatingLabel: safeText(cs.averageRatingLabel, 'Average Rating'),
    };
  }, [t]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // particles (évite duplication en dev)
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = styles.particle;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 3}s`;
          particle.style.animationDuration = `${3 + Math.random() * 4}s`;
          fragment.appendChild(particle);
        }
        particlesRef.current.appendChild(fragment);
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 100, scale: 0.85, rotateX: -35 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 55 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (statsRef.current) {
        const tweenObj = { cars: 0, clients: 0, years: 0, rating: 0 };

        ScrollTrigger.create({
          trigger: statsRef.current,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.to(tweenObj, {
              cars: 5000,
              clients: 10000,
              years: 15,
              rating: 4.9,
              duration: 2.1,
              ease: 'power2.out',
              onUpdate: () => {
                setStats({
                  cars: Math.floor(tweenObj.cars),
                  clients: Math.floor(tweenObj.clients),
                  years: Math.floor(tweenObj.years),
                  rating: Number(tweenObj.rating.toFixed(1)),
                });
              },
            });
          },
        });

        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (cardsContainerRef.current) {
        const cards = Array.from(cardsContainerRef.current.children);

        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotateY: -22, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        cards.forEach((card, index) => {
          gsap.to(card, {
            y: '+=18',
            rotateZ: index % 2 === 0 ? '+=1.5' : '-=1.5',
            duration: 3.2 + index * 0.35,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        });
      }

      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [labels]);

  return (
    <section className={styles.showcase} ref={sectionRef}>
      <div className={styles.particles} ref={particlesRef} />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} ref={titleRef}>
            {labels.title}
          </h2>
          <p className={styles.subtitle} ref={subtitleRef}>
            {labels.subtitle}
          </p>
        </div>

        <div className={styles.cardsGrid} ref={cardsContainerRef}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>✨</div>
            <h3 className={styles.cardTitle}>{labels.premiumDetailingTitle}</h3>
            <p className={styles.cardDesc}>{labels.premiumDetailingDesc}</p>
            <div className={styles.cardShine} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🛡️</div>
            <h3 className={styles.cardTitle}>{labels.ceramicCoatingTitle}</h3>
            <p className={styles.cardDesc}>{labels.ceramicCoatingDesc}</p>
            <div className={styles.cardShine} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🎨</div>
            <h3 className={styles.cardTitle}>{labels.paintCorrectionTitle}</h3>
            <p className={styles.cardDesc}>{labels.paintCorrectionDesc}</p>
            <div className={styles.cardShine} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>💎</div>
            <h3 className={styles.cardTitle}>{labels.interiorLuxuryTitle}</h3>
            <p className={styles.cardDesc}>{labels.interiorLuxuryDesc}</p>
            <div className={styles.cardShine} />
          </div>
        </div>

        <div className={styles.stats} ref={statsRef}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{stats.cars.toLocaleString()}+</div>
            <div className={styles.statLabel}>{labels.carsDetailedLabel}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{stats.clients.toLocaleString()}+</div>
            <div className={styles.statLabel}>{labels.happyClientsLabel}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{stats.years}+</div>
            <div className={styles.statLabel}>{labels.yearsExperienceLabel}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{stats.rating}</div>
            <div className={styles.statLabel}>{labels.averageRatingLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
