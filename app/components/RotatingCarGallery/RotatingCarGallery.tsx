'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './RotatingCarGallery.module.css';
import { getTranslation, Language } from '../../lib/translations';

gsap.registerPlugin(ScrollTrigger);

interface RotatingCarGalleryProps {
  language: Language;
}

export default function RotatingCarGallery({ language }: RotatingCarGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const car1Ref = useRef<HTMLDivElement>(null);
  const car2Ref = useRef<HTMLDivElement>(null);
  const car3Ref = useRef<HTMLDivElement>(null);
  const car4Ref = useRef<HTMLDivElement>(null);
  const car5Ref = useRef<HTMLDivElement>(null);
  const car6Ref = useRef<HTMLDivElement>(null);
  const t = getTranslation(language);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation with 3D effect
    gsap.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        y: 100, 
        rotateX: -45,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Car 1 - 360° Y-axis rotation
    const car1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car1Ref.current,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 2,
      }
    });

    car1Timeline
      .fromTo(
        car1Ref.current,
        { 
          opacity: 0, 
          x: -400, 
          rotateY: -180,
          scale: 0.3
        },
        { 
          opacity: 1, 
          x: 0, 
          rotateY: 360,
          scale: 1,
          ease: 'power2.out'
        }
      );

    // Car 2 - 360° Z-axis rotation with flip
    const car2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car2Ref.current,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 2,
      }
    });

    car2Timeline
      .fromTo(
        car2Ref.current,
        { 
          opacity: 0, 
          x: 400, 
          rotateZ: 180,
          scale: 0.3
        },
        { 
          opacity: 1, 
          x: 0, 
          rotateZ: 0,
          scale: 1,
          ease: 'power2.out'
        }
      );

    // Car 3 - Multi-axis rotation
    const car3Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car3Ref.current,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 2,
      }
    });

    car3Timeline
      .fromTo(
        car3Ref.current,
        { 
          opacity: 0, 
          y: 300, 
          rotateY: 180,
          rotateX: 90,
          scale: 0.2
        },
        { 
          opacity: 1, 
          y: 0, 
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          ease: 'power2.out'
        }
      );

    // Car 4 - Barrel roll effect
    const car4Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car4Ref.current,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 2,
      }
    });

    car4Timeline
      .fromTo(
        car4Ref.current,
        { 
          opacity: 0, 
          x: -400,
          y: -200,
          rotateZ: -360,
          scale: 0.3
        },
        { 
          opacity: 1, 
          x: 0,
          y: 0,
          rotateZ: 0,
          scale: 1,
          ease: 'power2.out'
        }
      );

    // Car 5 - Spiral rotation
    const car5Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car5Ref.current,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 2,
      }
    });

    car5Timeline
      .fromTo(
        car5Ref.current,
        { 
          opacity: 0, 
          x: 400,
          y: 200,
          rotateY: -540,
          rotateZ: 180,
          scale: 0.2
        },
        { 
          opacity: 1, 
          x: 0,
          y: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          ease: 'power2.out'
        }
      );

    // Car 6 - Double flip
    const car6Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: car6Ref.current,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 2,
      }
    });

    car6Timeline
      .fromTo(
        car6Ref.current,
        { 
          opacity: 0, 
          y: -300,
          rotateX: 720,
          rotateY: 360,
          scale: 0.2
        },
        { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: 'power2.out'
        }
      );

    // Continuous hover animations
    const carRefs = [car1Ref, car2Ref, car3Ref, car4Ref, car5Ref, car6Ref];
    
    carRefs.forEach((carRef, index) => {
      gsap.to(carRef.current, {
        y: '+=20',
        rotateZ: index % 2 === 0 ? '+=3' : '-=3',
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2
      });
    });

  }, []);

  return (
    <section className={styles.gallery} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title} ref={titleRef}>
          {t.rotatingGallery.title}
        </h2>
        <p className={styles.subtitle} ref={subtitleRef}>
          {t.rotatingGallery.subtitle}
        </p>

        <div className={styles.grid}>
          {/* Car 1 */}
          <div className={styles.carCard} ref={car1Ref}>
            <div className={styles.carImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNjcxMTM3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={t.rotatingGallery.car1Title}
                className={styles.carImage}
                loading="eager"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.carInfo}>
              <h3>{t.rotatingGallery.car1Title}</h3>
              <p>{t.rotatingGallery.car1Desc}</p>
            </div>
          </div>

          {/* Car 2 */}
          <div className={styles.carCard} ref={car2Ref}>
            <div className={styles.carImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjcxNTEwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={t.rotatingGallery.car2Title}
                className={styles.carImage}
                loading="eager"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.carInfo}>
              <h3>{t.rotatingGallery.car2Title}</h3>
              <p>{t.rotatingGallery.car2Desc}</p>
            </div>
          </div>

          {/* Car 3 */}
          <div className={styles.carCard} ref={car3Ref}>
            <div className={styles.carImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcxNDk4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={t.rotatingGallery.car3Title}
                className={styles.carImage}
                loading="eager"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.carInfo}>
              <h3>{t.rotatingGallery.car3Title}</h3>
              <p>{t.rotatingGallery.car3Desc}</p>
            </div>
          </div>

          {/* Car 4 */}
          <div className={styles.carCard} ref={car4Ref}>
            <div className={styles.carImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1747414632749-6c8b14ba30fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzY3MDkwNzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={t.rotatingGallery.car4Title}
                className={styles.carImage}
                loading="eager"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.carInfo}>
              <h3>{t.rotatingGallery.car4Title}</h3>
              <p>{t.rotatingGallery.car4Desc}</p>
            </div>
          </div>

          {/* Car 5 */}
          <div className={styles.carCard} ref={car5Ref}>
            <div className={styles.carImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1661311928926-180711852306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXBlcmNhcnxlbnwxfHx8fDE3NjcxMTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={t.rotatingGallery.car5Title}
                className={styles.carImage}
                loading="eager"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.carInfo}>
              <h3>{t.rotatingGallery.car5Title}</h3>
              <p>{t.rotatingGallery.car5Desc}</p>
            </div>
          </div>

          {/* Car 6 */}
          <div className={styles.carCard} ref={car6Ref}>
            <div className={styles.carImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1649136378672-b965cb9935d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb252ZXJ0aWJsZSUyMGNhcnxlbnwxfHx8fDE3NjcxMTI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={t.rotatingGallery.car6Title}
                className={styles.carImage}
                loading="eager"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.carInfo}>
              <h3>{t.rotatingGallery.car6Title}</h3>
              <p>{t.rotatingGallery.car6Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}