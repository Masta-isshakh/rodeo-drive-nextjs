'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedBackground.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBackground() {
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const bg3Ref = useRef<HTMLDivElement>(null);
  const bg4Ref = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const flowingLinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Continuous rotation and scaling animation for backgrounds
    gsap.to(bg1Ref.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none'
    });

    gsap.to(bg2Ref.current, {
      rotation: -360,
      duration: 80,
      repeat: -1,
      ease: 'none'
    });

    gsap.to(bg3Ref.current, {
      rotation: 360,
      duration: 100,
      repeat: -1,
      ease: 'none'
    });

    gsap.to(bg4Ref.current, {
      rotation: -360,
      duration: 120,
      repeat: -1,
      ease: 'none'
    });

    // Parallax scroll effect
    gsap.to(bg1Ref.current, {
      y: 200,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to(bg2Ref.current, {
      y: -150,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    gsap.to(bg3Ref.current, {
      y: 250,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });

    gsap.to(bg4Ref.current, {
      y: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: 2.5
      }
    });

    // Pulse animation
    gsap.to([bg1Ref.current, bg3Ref.current], {
      scale: 1.1,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to([bg2Ref.current, bg4Ref.current], {
      scale: 0.9,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Animate particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((particle, i) => {
        gsap.to(particle, {
          y: `random(-200, 200)`,
          x: `random(-200, 200)`,
          duration: `random(10, 20)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.1
        });

        gsap.to(particle, {
          opacity: `random(0.2, 0.8)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      });
    }

    // Animate flowing lines
    if (flowingLinesRef.current) {
      const lines = flowingLinesRef.current.children;
      Array.from(lines).forEach((line, i) => {
        gsap.to(line, {
          x: `random(-100, 100)`,
          duration: `random(8, 15)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2
        });
      });
    }
  }, []);

  // Generate particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(
        <div
          key={i}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
          }}
        />
      );
    }
    return particles;
  };

  // Generate flowing lines
  const renderFlowingLines = () => {
    const lines = [];
    for (let i = 0; i < 15; i++) {
      lines.push(
        <div
          key={i}
          className={styles.flowingLine}
          style={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      );
    }
    return lines;
  };

  return (
    <div className={styles.animatedBackground}>
      <div className={styles.backgroundLayer} ref={bg1Ref}>
        <img 
          src="https://images.unsplash.com/photo-1760660989124-7ebdb3d27dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXBlcmNhciUyMG1vdGlvbnxlbnwxfHx8fDE3NjcxNzAwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
        />
      </div>
      <div className={styles.backgroundLayer} ref={bg2Ref}>
        <img 
          src="https://images.unsplash.com/photo-1761710033756-6d64f9b02d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBzcGVlZCUyMGJsdXJ8ZW58MXx8fHwxNzY3MTcwMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
        />
      </div>
      <div className={styles.backgroundLayer} ref={bg3Ref}>
        <img 
          src="https://images.unsplash.com/photo-1764962904631-98f6c441a2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBjYXIlMjBkeW5hbWljfGVufDF8fHx8MTc2NzE3MDAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
        />
      </div>
      <div className={styles.backgroundLayer} ref={bg4Ref}>
        <img 
          src="https://images.unsplash.com/photo-1685023911870-12430a741d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlJTIwbmlnaHR8ZW58MXx8fHwxNzY3MTcwMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
        />
      </div>
      
      {/* Gradient overlays for navy blue effect */}
      <div className={styles.gradientOverlay}></div>
      <div className={styles.silverSheen}></div>
      
      {/* Animated particles */}
      <div className={styles.particlesContainer} ref={particlesRef}>
        {renderParticles()}
      </div>
      
      {/* Flowing lines */}
      <div className={styles.flowingLinesContainer} ref={flowingLinesRef}>
        {renderFlowingLines()}
      </div>
      
      {/* Animated mesh grid */}
      <div className={styles.meshGrid}></div>
      
      {/* Radial pulses */}
      <div className={styles.radialPulse} style={{ top: '20%', left: '30%' }}></div>
      <div className={styles.radialPulse} style={{ top: '60%', right: '20%' }}></div>
      <div className={styles.radialPulse} style={{ bottom: '30%', left: '50%' }}></div>
      
      {/* Flowing gradient waves */}
      <div className={styles.waveLayer}></div>
      <div className={styles.waveLayer2}></div>
      <div className={styles.waveLayer3}></div>
    </div>
  );
}