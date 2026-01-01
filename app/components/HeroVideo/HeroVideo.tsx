"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroVideo.module.css";
import { useI18n } from "../../lib/i18n";
// Removed video import, use public path in <video> tag
export default function HeroVideo() {
  const { t } = useI18n();

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const animatedLinesRef = useRef<HTMLDivElement>(null);
  const glowOrbsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
  const v = videoRef.current;
  if (!v) return;

  v.muted = true;
  v.playsInline = true;

  const tryPlay = async () => {
    try {
      await v.play();
    } catch {
      // Autoplay bloqué : on retentera au premier geste utilisateur
    }
  };

  tryPlay();

  const onFirstTouch = () => {
    tryPlay();
    window.removeEventListener("touchstart", onFirstTouch);
    window.removeEventListener("click", onFirstTouch);
  };

  window.addEventListener("touchstart", onFirstTouch, { passive: true });
  window.addEventListener("click", onFirstTouch);

  return () => {
    window.removeEventListener("touchstart", onFirstTouch);
    window.removeEventListener("click", onFirstTouch);
  };
}, []);



  useEffect(() => {
    // IMPORTANT: éviter la duplication des orbs/lines en dev (React StrictMode)
    if (glowOrbsRef.current) glowOrbsRef.current.innerHTML = "";
    if (animatedLinesRef.current) animatedLinesRef.current.innerHTML = "";

    if (glowOrbsRef.current) {
      for (let i = 0; i < 5; i++) {
        const orb = document.createElement("div");
        orb.className = styles.glowOrb;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.style.animationDelay = `${i * 1.5}s`;
        orb.style.animationDuration = `${10 + i * 2}s`;
        glowOrbsRef.current.appendChild(orb);
      }
    }

    if (animatedLinesRef.current) {
      for (let i = 0; i < 10; i++) {
        const line = document.createElement("div");
        line.className = styles.animatedLine;
        line.style.left = `${Math.random() * 100}%`;
        line.style.animationDelay = `${i * 0.5}s`;
        line.style.animationDuration = `${3 + Math.random() * 2}s`;
        animatedLinesRef.current.appendChild(line);
      }
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 150, scale: 0.7, rotateX: -30 },
        { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 1.6, delay: 0.3, ease: "back.out(1.4)" },
        "-=1.5"
      )
      .fromTo(taglineRef.current, { opacity: 0, y: 80, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 }, "-=1")
      .fromTo(descriptionRef.current, { opacity: 0, y: 60, rotateX: -20 }, { opacity: 1, y: 0, rotateX: 0, duration: 1 }, "-=0.8")
      .fromTo(actionsRef.current, { opacity: 0, y: 40, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.2)" }, "-=0.6")
      .fromTo(scrollIndicatorRef.current, { opacity: 0, y: -30 }, { opacity: 0.8, y: 0, duration: 1 }, "-=0.5");

    const pulse = gsap.to(titleRef.current, {
      textShadow: "0 0 20px rgba(192, 192, 192, 0.8), 0 0 40px rgba(192, 192, 192, 0.4)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(scrollY / windowHeight, 1);

      if (videoRef.current) {
        gsap.to(videoRef.current, {
          y: scrollY * 0.5,
          scale: 1 + scrollProgress * 0.15,
          filter: `brightness(${0.7 - scrollProgress * 0.3}) contrast(${1.1 + scrollProgress * 0.2})`,
          duration: 0.1,
          ease: "none",
        });
      }

      if (heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          y: scrollY * 0.25,
          opacity: 1 - scrollProgress * 1.3,
          scale: 1 - scrollProgress * 0.1,
          duration: 0.1,
          ease: "none",
        });
      }

      if (overlayRef.current) {
        gsap.to(overlayRef.current, { opacity: 1 + scrollProgress * 0.3, duration: 0.1, ease: "none" });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.kill();
      pulse.kill();
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className={styles.heroVideo}>
      <div className={styles.glowOrbsContainer} ref={glowOrbsRef} />
      <div className={styles.animatedLinesContainer} ref={animatedLinesRef} />

      <div className={styles.videoBackground}>
  <video
    ref={videoRef}
    className={styles.videoElement}
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src="/video1.mp4" type="video/mp4" />
  </video>
      </div>

      <div className={styles.videoOverlay} ref={overlayRef} />

      <div className={styles.heroContent} ref={heroContentRef}>
        <h1 className={styles.heroTitle} ref={titleRef}>
          <span className={styles.heroTitleLine}>{t.hero.title}</span>
          <span className={styles.heroTitleLine}>{t.hero.subtitle}</span>
        </h1>

        <div className={styles.heroTagline} ref={taglineRef}>
          {t.hero.tagline}
        </div>

        <p className={styles.heroDescription} ref={descriptionRef}>
          {t.hero.description}
        </p>

        <div className={styles.heroActions} ref={actionsRef}>
          <button className={styles.ctaPrimary}>{t.hero.cta1}</button>
          <button className={styles.ctaSecondary}>{t.hero.cta2}</button>
        </div>
      </div>

      <div className={styles.scrollIndicator} onClick={scrollToContent} ref={scrollIndicatorRef}>
        <span>Scroll</span>
        <span className={styles.scrollIcon}>↓</span>
      </div>
    </section>
  );
}
