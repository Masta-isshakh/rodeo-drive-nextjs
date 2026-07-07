'use client';
import { useEffect, useRef } from 'react';
import styles from './BackgroundVideo.module.css';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    
    const initAnimations = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (!mounted) return;
      
      gsap.registerPlugin(ScrollTrigger);
      
      // Animate overlay opacity based on scroll
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
        opacity: 0.95,
      });
    }

    // Subtle scale animation for video on scroll
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
          scale: 1.2,
        });
      }
    };
    
    initAnimations().catch(() => {});
    return () => { mounted = false; };
  }, []);

  return (
    <div className={styles.backgroundVideo}>
      <video
        ref={videoRef}
        className={styles.videoElement}
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/assets/video.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.overlay} ref={overlayRef} />
      
      {/* Animated particles */}
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
    </div>
  );
}
