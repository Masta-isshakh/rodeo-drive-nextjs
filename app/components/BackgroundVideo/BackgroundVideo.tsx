'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './BackgroundVideo.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
