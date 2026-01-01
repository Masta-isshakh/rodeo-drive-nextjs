'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Floating3DCars.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Floating3DCars() {
  const car1Ref = useRef<HTMLDivElement>(null);
  const car2Ref = useRef<HTMLDivElement>(null);
  const car3Ref = useRef<HTMLDivElement>(null);
  const car4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Car 1 - Top Left - Smooth 360° Y-axis rotation on scroll
    if (car1Ref.current) {
      gsap.fromTo(
        car1Ref.current,
        { opacity: 0, scale: 0.8, rotateY: -90 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: car1Ref.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Continuous scroll-based rotation
      gsap.to(car1Ref.current, {
        rotateY: 360,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=2000',
          scrub: 3,
        }
      });

      // Gentle floating animation
      gsap.to(car1Ref.current, {
        y: '-=20',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Car 2 - Top Right - Reverse rotation
    if (car2Ref.current) {
      gsap.fromTo(
        car2Ref.current,
        { opacity: 0, scale: 0.8, rotateY: 90 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 2,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: car2Ref.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Reverse rotation on scroll
      gsap.to(car2Ref.current, {
        rotateY: -360,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=2000',
          scrub: 3,
        }
      });

      // Gentle floating animation
      gsap.to(car2Ref.current, {
        y: '+=25',
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Car 3 - Middle Left - Multi-axis rotation
    if (car3Ref.current) {
      gsap.fromTo(
        car3Ref.current,
        { opacity: 0, scale: 0.7, rotateY: -45, rotateX: -30 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          duration: 2.5,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: car3Ref.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Smooth Y-axis rotation on scroll
      gsap.to(car3Ref.current, {
        rotateY: 360,
        rotateX: 15,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=3000',
          scrub: 2.5,
        }
      });

      // Gentle floating with slight tilt
      gsap.to(car3Ref.current, {
        y: '-=30',
        rotateZ: '+=3',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Car 4 - Bottom Right - Slow elegant rotation
    if (car4Ref.current) {
      gsap.fromTo(
        car4Ref.current,
        { opacity: 0, scale: 0.7, rotateY: 45, rotateZ: 15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          rotateZ: 0,
          duration: 2.5,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: car4Ref.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Elegant rotation on scroll
      gsap.to(car4Ref.current, {
        rotateY: -360,
        rotateZ: 10,
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=3500',
          scrub: 2,
        }
      });

      // Gentle floating
      gsap.to(car4Ref.current, {
        y: '+=20',
        rotateZ: '-=2',
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  return (
    <div className={styles.floating3DCarsContainer}>
      {/* Car 1 - Top Left Area */}
      <div className={styles.floatingCar} style={{ top: '15vh', left: '3%' }} ref={car1Ref}>
        <div className={styles.carWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY3MTEzNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            className={styles.carImage}
          />
          <div className={styles.carGlow}></div>
        </div>
      </div>

      {/* Car 2 - Top Right Area */}
      <div className={styles.floatingCar} style={{ top: '20vh', right: '5%' }} ref={car2Ref}>
        <div className={styles.carWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb3Rpb258ZW58MXx8fHwxNzY3MTEzNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            className={styles.carImage}
          />
          <div className={styles.carGlow}></div>
        </div>
      </div>

      {/* Car 3 - Middle Left Area */}
      <div className={styles.floatingCar} style={{ top: '50vh', left: '2%' }} ref={car3Ref}>
        <div className={styles.carWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcwNDI0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            className={styles.carImage}
          />
          <div className={styles.carGlow}></div>
        </div>
      </div>

      {/* Car 4 - Bottom Right Area */}
      <div className={styles.floatingCar} style={{ bottom: '15vh', right: '4%' }} ref={car4Ref}>
        <div className={styles.carWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjcxNTEwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            className={styles.carImage}
          />
          <div className={styles.carGlow}></div>
        </div>
      </div>
    </div>
  );
}
