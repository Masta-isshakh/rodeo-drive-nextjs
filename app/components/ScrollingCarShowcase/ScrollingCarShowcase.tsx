'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollingCarShowcase.module.css';
import { getTranslation, Language } from '../../lib/translations';

gsap.registerPlugin(ScrollTrigger);

interface ScrollingCarShowcaseProps {
  language: Language;
}

export default function ScrollingCarShowcase({ language }: ScrollingCarShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const car1Ref = useRef<HTMLDivElement>(null);
  const car2Ref = useRef<HTMLDivElement>(null);
  const car3Ref = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const bg3Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const t = getTranslation(language);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate title with dramatic entrance
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, scale: 0.8, rotateX: -30 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Car 1 - 360° rotation on scroll with background transition
    const car1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car1Ref.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1.5,
      }
    });

    car1Timeline
      .fromTo(
        car1Ref.current,
        { opacity: 0, x: -300, rotateY: -90, scale: 0.5 },
        { opacity: 1, x: 0, rotateY: 360, scale: 1, ease: 'power2.out' }
      );

    // Background 1 transition
    gsap.fromTo(
      bg1Ref.current,
      { opacity: 0, scale: 1.3 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: bg1Ref.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        }
      }
    );

    // Car 2 - Reverse 360° rotation with different direction
    const car2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car2Ref.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1.5,
      }
    });

    car2Timeline
      .fromTo(
        car2Ref.current,
        { opacity: 0, x: 300, rotateY: 90, scale: 0.5 },
        { opacity: 1, x: 0, rotateY: -360, scale: 1, ease: 'power2.out' }
      );

    // Background 2 transition with crossfade
    gsap.timeline({
      scrollTrigger: {
        trigger: bg2Ref.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      }
    })
    .fromTo(
      bg2Ref.current,
      { opacity: 0, scale: 1.2, rotate: 5 },
      { opacity: 1, scale: 1, rotate: 0 }
    )
    .to(
      bg1Ref.current,
      { opacity: 0, scale: 0.9 },
      0
    );

    // Car 3 - Multiple rotations with dramatic effect
    const car3Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car3Ref.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1.5,
      }
    });

    car3Timeline
      .fromTo(
        car3Ref.current,
        { opacity: 0, y: 200, rotateY: 0, rotateZ: -45, scale: 0.4 },
        { opacity: 1, y: 0, rotateY: 720, rotateZ: 0, scale: 1, ease: 'power2.out' }
      );

    // Background 3 transition with zoom effect
    gsap.timeline({
      scrollTrigger: {
        trigger: bg3Ref.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      }
    })
    .fromTo(
      bg3Ref.current,
      { opacity: 0, scale: 1.5, rotate: -5 },
      { opacity: 1, scale: 1, rotate: 0 }
    )
    .to(
      bg2Ref.current,
      { opacity: 0, scale: 0.8 },
      0
    );

    // Continuous floating animations for each car
    gsap.to(car1Ref.current, {
      y: '+=20',
      rotateZ: '+=3',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(car2Ref.current, {
      y: '-=25',
      rotateZ: '-=2',
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(car3Ref.current, {
      y: '+=30',
      rotateZ: '+=4',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  return (
    <section className={styles.showcase} ref={sectionRef}>
      {/* Dynamic Background Images */}
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundImage} ref={bg1Ref}>
          <img 
            src="https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcxMjU2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury car interior detailing"
          />
        </div>
        <div className={styles.backgroundImage} ref={bg2Ref}>
          <img 
            src="https://images.unsplash.com/photo-1740744356759-4b4ff55c479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwb2xpc2glMjB3YXglMjBkZXRhaWx8ZW58MXx8fHwxNzY3MTI1NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Car polish and wax detail"
          />
        </div>
        <div className={styles.backgroundImage} ref={bg3Ref}>
          <img 
            src="https://images.unsplash.com/photo-1761312834150-4beefff097a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3YXNoaW5nJTIwZm9hbXxlbnwxfHx8fDE3NjcxMjU2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury car washing with foam"
          />
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title} ref={titleRef}>
          {t.gallery.title}
        </h2>

        {/* Car Showcase Items */}
        <div className={styles.carItem}>
          <div className={styles.carImageWrapper} ref={car1Ref}>
            <img 
              src="https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY3MTEzNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt={t.scrollingShowcase.car1Title}
              className={styles.carImage}
            />
            <div className={styles.carGlow}></div>
          </div>
          <div className={styles.carInfo}>
            <h3>{t.scrollingShowcase.car1Title}</h3>
            <p>{t.scrollingShowcase.car1Desc}</p>
          </div>
        </div>

        <div className={styles.carItem}>
          <div className={styles.carImageWrapper} ref={car2Ref}>
            <img 
              src="https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb3Rpb258ZW58MXx8fHwxNzY3MTEzNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt={t.scrollingShowcase.car2Title}
              className={styles.carImage}
            />
            <div className={styles.carGlow}></div>
          </div>
          <div className={styles.carInfo}>
            <h3>{t.scrollingShowcase.car2Title}</h3>
            <p>{t.scrollingShowcase.car2Desc}</p>
          </div>
        </div>

        <div className={styles.carItem}>
          <div className={styles.carImageWrapper} ref={car3Ref}>
            <img 
              src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcwNDI0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt={t.scrollingShowcase.car3Title}
              className={styles.carImage}
            />
            <div className={styles.carGlow}></div>
          </div>
          <div className={styles.carInfo}>
            <h3>{t.scrollingShowcase.car3Title}</h3>
            <p>{t.scrollingShowcase.car3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}