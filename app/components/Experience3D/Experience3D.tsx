'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Experience3D.module.css';
import { getTranslation, Language } from '../../lib/translations';

gsap.registerPlugin(ScrollTrigger);

interface Experience3DProps {
  language: Language;
}

export default function Experience3D({ language }: Experience3DProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const car3DRef = useRef<HTMLDivElement>(null);
  const car3D2Ref = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const t = getTranslation(language);

  useEffect(() => {
    // Animate header with 3D rotation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 80, rotateX: -20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate 3D viewer with enhanced scale and rotation effect
    gsap.fromTo(
      viewerRef.current,
      { opacity: 0, scale: 0.85, rotateY: -20 },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: viewerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate placeholder content with stagger
    if (placeholderRef.current) {
      const elements = placeholderRef.current.children;
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: placeholderRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Animate floating 3D car images
    if (car3DRef.current) {
      gsap.fromTo(
        car3DRef.current,
        { opacity: 0, x: -150, rotateY: -30, scale: 0.8 },
        {
          opacity: 0.18,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Parallax effect
      gsap.to(car3DRef.current, {
        y: -80,
        x: 30,
        rotateY: -15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });

      // Continuous floating
      gsap.to(car3DRef.current, {
        y: '+=30',
        rotate: '+=2',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    if (car3D2Ref.current) {
      gsap.fromTo(
        car3D2Ref.current,
        { opacity: 0, x: 150, rotateY: 30, scale: 0.8 },
        {
          opacity: 0.15,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 2,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Parallax effect
      gsap.to(car3D2Ref.current, {
        y: -60,
        x: -40,
        rotateY: 12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });

      // Continuous floating
      gsap.to(car3D2Ref.current, {
        y: '-=35',
        rotate: '-=3',
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Animate button with bounce
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section className={styles.experienceSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} ref={headerRef}>
          <h2 className={styles.sectionTitle}>{t.experience3d.title}</h2>
          <p className={styles.sectionSubtitle}>{t.experience3d.subtitle}</p>
        </div>

        {/* Floating 3D Car Images */}
        <div className={styles.floating3DCar1} ref={car3DRef}>
          <img
            src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcwNDI0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury car interior"
          />
        </div>
        <div className={styles.floating3DCar2} ref={car3D2Ref}>
          <img
            src="https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY3MTEzNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury sports car"
          />
        </div>

        <div className={styles.experienceContainer}>
          <div className={styles.viewer3D} ref={viewerRef}>
            {/* Three.js / react-three-fiber integration placeholder */}
            <div className={styles.placeholderContent} ref={placeholderRef}>
              <span className={styles.placeholderIcon}>🚗</span>
              <h3 className={styles.placeholderTitle}>{t.experience3d.placeholderTitle}</h3>
              <p className={styles.placeholderText}>
                {t.experience3d.placeholderText}<br />
                {t.experience3d.placeholderNote}
              </p>
            </div>

            <div className={styles.viewerControls}>
              <div className={styles.rotateHint}>
                <span>🔄</span>
                <span>{t.experience3d.rotateHint}</span>
              </div>
              
              <div className={styles.colorDots}>
                <div className={styles.colorDot} style={{ backgroundColor: '#000000' }} />
                <div className={styles.colorDot} style={{ backgroundColor: '#FFFFFF' }} />
                <div className={styles.colorDot} style={{ backgroundColor: '#C0C0C0' }} />
                <div className={styles.colorDot} style={{ backgroundColor: '#1A2332' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
          <button className={styles.exploreButton} ref={buttonRef}>
            {t.experience3d.explorePackages}
          </button>
        </div>
      </div>
    </section>
  );
}