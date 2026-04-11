"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, Manrope } from "next/font/google";
import { useI18n } from "@/app/lib/i18n";
import { trackMetaEvent } from "@/app/lib/metaPixel";
import styles from "./HomeContent.module.css";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

type GalleryItem = {
  src: string;
  altEN: string;
  altAR: string;
};

type VideoPanel = {
  key: string;
  titleEN: string;
  titleAR: string;
  descEN: string;
  descAR: string;
  poster: string;
  videoBasePath: string;
  availableFormats?: Array<"webm" | "mp4">;
  targetDurationSec: number;
  scrollSpan: number;
  zoomFrom: number;
  zoomTo: number;
  parallaxRange: number;
  startBias: number;
  endBias: number;
  easing: number;
};

type HeroVideoSlide = {
  key: string;
  titleEN: string;
  titleAR: string;
  captionEN: string;
  captionAR: string;
  poster: string;
  videoBasePath: string;
  availableFormats?: Array<"webm" | "mp4">;
};

const GALLERY: GalleryItem[] = [
  { src: "/nano.avif", altEN: "Luxury car detail finish", altAR: "تشطيب فاخر للسيارة" },
  { src: "/lamborghini.avif", altEN: "Premium detailing studio", altAR: "استوديو تفصيل فاخر" },
  { src: "/vitre.avif", altEN: "Sport vehicle after detailing", altAR: "سيارة رياضية بعد التفصيل" },
  { src: "/nano-interior.avif", altEN: "Automotive protection workflow", altAR: "خطوات حماية السيارة" },
  { src: "/ceramic.avif", altEN: "Cinematic exterior treatment", altAR: "عناية سينمائية للهيكل" },
  { src: "/polish2.avif", altEN: "Detailed bodywork reflections", altAR: "انعكاسات دقيقة لهيكل السيارة" },
  { src: "/front-ppff.avif", altEN: "Curated premium vehicle", altAR: "سيارة مختارة بعناية" },
  { src: "/interior1.avif", altEN: "Luxury service result", altAR: "نتيجة خدمة فاخرة" },
  { src: "/defender.avif", altEN: "High-end automotive presentation", altAR: "عرض سيارات فاخر" },
];

const SPF_GALLERY: GalleryItem[] = [
  { src: "/photo1.avif", altEN: "Gloss SPF premium finish", altAR: "تشطيب جلوس فاخر" },
  { src: "/photo2.avif", altEN: "Surface protection film close-up", altAR: "لقطة قريبة لفيلم حماية الأسطح" },
  { src: "/photo3.avif", altEN: "Luxury interior protected surface", altAR: "سطح داخلي فاخر محمي" },
  { src: "/photo4.avif", altEN: "Matte SPF subtle elegance", altAR: "أناقة MATTE SPF الهادئة" },
  { src: "/photo5.avif", altEN: "Ceramic-coated protection layer", altAR: "طبقة حماية مطلية بالسيراميك" },
  { src: "/photo6.avif", altEN: "High durability surface film", altAR: "فيلم أسطح عالي المتانة" },
  { src: "/photo7.avif", altEN: "Premium residential and commercial application", altAR: "تطبيق فاخر للمنازل والمساحات التجارية" },
];

const HERO_VIDEO_SLIDES: HeroVideoSlide[] = [
  {
    key: "hero-front-precision",
    titleEN: "Front-End Precision",
    titleAR: "دقة الواجهة الأمامية",
    captionEN: "Sensor-safe detailing and seamless edge alignment.",
    captionAR: "تفاصيل آمنة للحساسات وتطابق مثالي للحواف.",
    poster: "/frontend-ppf.avif",
    videoBasePath: "/videos/home-1",
    availableFormats: ["mp4"],
  },
  {
    key: "hero-surface-transformation",
    titleEN: "Surface Transformation",
    titleAR: "تحول السطح",
    captionEN: "Depth, gloss, and finish consistency across every line.",
    captionAR: "عمق ولمعان وتناسق نهائي عبر كل تفاصيل الهيكل.",
    poster: "/before2.avif",
    videoBasePath: "/videos/home-2",
    availableFormats: ["mp4"],
  },
  {
    key: "hero-cabin-craftsmanship",
    titleEN: "Cabin Craftsmanship",
    titleAR: "حرفية المقصورة",
    captionEN: "Premium interior restoration and tactile finishing.",
    captionAR: "ترميم داخلي فاخر وإنهاء ملمسي دقيق.",
    poster: "/interior1.avif",
    videoBasePath: "/videos/home-3",
    availableFormats: ["mp4"],
  },
];

const PANELS: VideoPanel[] = [
  {
    key: "front-precision",
    titleEN: "Front-End Precision",
    titleAR: "دقة الواجهة الأمامية",
    descEN:
      "A calm, controlled installation sequence that highlights edge wrapping, sensor-safe cuts, and perfect panel alignment.",
    descAR: "تسلسل تركيب هادئ يُظهر لف الحواف، القص الآمن للحساسات، وتطابقًا مثاليًا للألواح.",
    poster: "/frontend-ppf.avif",
    videoBasePath: "/videos/home-1",
    availableFormats: ["mp4"],
    targetDurationSec: 8,
    scrollSpan: 1.55,
    zoomFrom: 0.93,
    zoomTo: 1.02,
    parallaxRange: 0.12,
    startBias: 0.92,
    endBias: 0.72,
    easing: 1.45,
  },
  {
    key: "surface-transformation",
    titleEN: "Surface Transformation",
    titleAR: "تحول السطح",
    descEN:
      "From correction to refined gloss, this chapter focuses on depth, clarity, and consistency across every body line.",
    descAR: "من تصحيح الطلاء حتى اللمعة النهائية، هذا الجزء يركز على العمق والوضوح والتناسق عبر كامل الهيكل.",
    poster: "/before2.avif",
    videoBasePath: "/videos/home-2",
    availableFormats: ["mp4"],
    targetDurationSec: 9,
    scrollSpan: 1.7,
    zoomFrom: 0.95,
    zoomTo: 1.045,
    parallaxRange: 0.09,
    startBias: 0.9,
    endBias: 0.78,
    easing: 1.55,
  },
  {
    key: "cabin-craftsmanship",
    titleEN: "Cabin Craftsmanship",
    titleAR: "حرفية المقصورة",
    descEN:
      "Interior restoration, trim-safe methods, and tactile finishing designed for a premium driving experience.",
    descAR: "ترميم داخلي، طرق آمنة على التريم، وإنهاء ملمسي لخلق تجربة قيادة فاخرة.",
    poster: "/interior1.avif",
    videoBasePath: "/videos/home-3",
    availableFormats: ["mp4"],
    targetDurationSec: 7,
    scrollSpan: 1.45,
    zoomFrom: 0.92,
    zoomTo: 1.03,
    parallaxRange: 0.14,
    startBias: 0.95,
    endBias: 0.7,
    easing: 1.4,
  },
];

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

function normalizeCdnBase(value: string) {
  return value.trim().replace(/\/+$/, "");
}

function withLeadingSlash(value: string) {
  return value.startsWith("/") ? value : `/${value}`;
}

function resolveMediaUrl(path: string, cdnBase: string) {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = withLeadingSlash(path);
  return cdnBase ? `${cdnBase}${normalized}` : normalized;
}

export default function HomeContent() {
  const { language } = useI18n();
  const lang = language === "ar" ? "ar" : "en";
  const isArabic = lang === "ar";
  const base = `/${lang}`;
  const [videoFallbacks, setVideoFallbacks] = useState<Record<string, boolean>>({});
  const [heroFallbacks, setHeroFallbacks] = useState<Record<string, boolean>>({});
  const [heroActive, setHeroActive] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [videoStates, setVideoStates] = useState<Record<string, string>>({});
  const [debugOpen, setDebugOpen] = useState(false);
  const [forcePosterDebug, setForcePosterDebug] = useState(false);
  const trackedFallbackKeysRef = useRef<Set<string>>(new Set());
  const heroVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const isDev = process.env.NODE_ENV !== "production";
  const mediaCdnBase = useMemo(
    () => normalizeCdnBase(process.env.NEXT_PUBLIC_MEDIA_CDN_BASE || ""),
    []
  );
  const enableFallbackTelemetry = useMemo(() => {
    const raw = (process.env.NEXT_PUBLIC_ENABLE_VIDEO_FALLBACK_TELEMETRY || "true").toLowerCase();
    return raw !== "0" && raw !== "false";
  }, []);
  const preferredFormats = useMemo<Array<"webm" | "mp4">>(() => {
    const raw = (process.env.NEXT_PUBLIC_HOME_VIDEO_FORMATS || "mp4").toLowerCase();
    const parsed = raw
      .split(",")
      .map((v) => v.trim())
      .filter((v): v is "webm" | "mp4" => v === "webm" || v === "mp4");
    return parsed.length ? parsed : ["mp4"];
  }, []);

  const setPanelState = (key: string, state: string) => {
    setVideoStates((prev) => (prev[key] === state ? prev : { ...prev, [key]: state }));
  };

  const goHeroSlide = (index: number) => {
    const total = HERO_VIDEO_SLIDES.length;
    setHeroActive((index + total) % total);
  };

  const markHeroFailed = (key: string) => {
    setHeroFallbacks((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  };

  useEffect(() => {
    if (!isDev) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "d" && e.shiftKey) {
        setDebugOpen((v) => !v);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDev]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (heroPaused) return;

    const timer = window.setInterval(() => {
      setHeroActive((v) => (v + 1) % HERO_VIDEO_SLIDES.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, [heroPaused]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goHeroSlide(heroActive + 1);
      if (e.key === "ArrowLeft") goHeroSlide(heroActive - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [heroActive]);

  useEffect(() => {
    heroVideoRefs.current.forEach((video, index) => {
      if (!video) return;
      const slide = HERO_VIDEO_SLIDES[index];
      if (!slide) return;

      const shouldPlay = index === heroActive && !heroPaused && !heroFallbacks[slide.key];
      if (!shouldPlay) {
        video.pause();
        return;
      }

      video.play().catch(() => {});
    });
  }, [heroActive, heroPaused, heroFallbacks]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-home-reveal]"));
    const panelItems = Array.from(document.querySelectorAll<HTMLElement>("[data-video-panel]"));
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video[data-home-video]"));
    const canAutoLoad = !(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.isVisible);
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealItems.forEach((el) => revealObserver.observe(el));

    const preloadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const v = entry.target.querySelector("video") as HTMLVideoElement | null;
          if (!v) return;
          if (v.preload === "none" && canAutoLoad) {
            v.preload = "metadata";
            v.load();
          }
          preloadObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "1100px 0px" }
    );

    panelItems.forEach((el) => preloadObserver.observe(el));

    const panelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.panelIndex || "0");
          const cfg = PANELS[index];
          const v = entry.target.querySelector("video") as HTMLVideoElement | null;
          if (!v || !cfg || videoFallbacks[cfg.key] || forcePosterDebug) {
            if (v) v.pause();
            if (cfg) setPanelState(cfg.key, videoFallbacks[cfg.key] || forcePosterDebug ? "fallback" : "idle");
            return;
          }

          const rate = 8 / cfg.targetDurationSec;
          v.playbackRate = Math.min(1.3, Math.max(0.82, rate));

          const shouldPlay = entry.isIntersecting && entry.intersectionRatio >= 0.45;
          v.dataset.active = shouldPlay ? "true" : "false";
          if (shouldPlay) {
            setPanelState(cfg.key, "playing");
            v.play().catch(() => {});
            return;
          }
          setPanelState(cfg.key, "paused");
          v.pause();
        });
      },
      { threshold: [0.25, 0.45, 0.7] }
    );

    panelItems.forEach((el) => panelObserver.observe(el));

    const tryPlay = () => {
      videos.forEach((v) => {
        if (v.dataset.active !== "true") return;
        v.play().catch(() => {});
      });
    };
    window.addEventListener("pointerdown", tryPlay, { once: true });

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        panelItems.forEach((el, index) => {
          const cfg = PANELS[index];
          if (!cfg) return;
          const rect = el.getBoundingClientRect();
          const total = rect.height * cfg.scrollSpan + window.innerHeight * (cfg.startBias + cfg.endBias);
          const raw = (window.innerHeight * cfg.startBias - rect.top) / total;
          const progress = clamp01(raw);
          const eased = 1 - Math.pow(1 - progress, cfg.easing);

          el.style.setProperty("--panel-progress", eased.toFixed(4));
          el.style.setProperty("--panel-text-progress", clamp01((eased - 0.15) / 0.7).toFixed(4));
        });
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver.disconnect();
      preloadObserver.disconnect();
      panelObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointerdown", tryPlay);
    };
  }, [forcePosterDebug, videoFallbacks]);

  const markVideoFailed = (key: string) => {
    setPanelState(key, "fallback");
    if (enableFallbackTelemetry && !trackedFallbackKeysRef.current.has(key)) {
      trackedFallbackKeysRef.current.add(key);
      trackMetaEvent("ViewContent", {
        source_section: "home_video_panel",
        cta_variant: "video_error_fallback",
        intent_type: "resilience",
        panel_key: key,
      });
    }

    setVideoFallbacks((prev) => {
      if (prev[key]) return prev;
      return { ...prev, [key]: true };
    });
  };

  return (
    <div className={`${styles.home} ${bodyFont.className}`} dir={isArabic ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <div
          className={styles.heroMedia}
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
          onFocusCapture={() => setHeroPaused(true)}
          onBlurCapture={() => setHeroPaused(false)}
        >
          {HERO_VIDEO_SLIDES.map((slide, index) => {
            const isActive = index === heroActive;
            const formats = slide.availableFormats?.length ? slide.availableFormats : preferredFormats;
            const sources = formats.map((format) => ({
              url: resolveMediaUrl(`${slide.videoBasePath}.${format}`, mediaCdnBase),
              type: format === "webm" ? "video/webm" : "video/mp4",
            }));
            const usePosterFallback = Boolean(heroFallbacks[slide.key]);

            return (
              <div
                key={slide.key}
                className={`${styles.heroSlide} ${isActive ? styles.heroSlideActive : ""}`}
                aria-hidden={!isActive}
              >
                {usePosterFallback ? (
                  <Image
                    src={slide.poster}
                    alt={isArabic ? slide.titleAR : slide.titleEN}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={styles.heroBg}
                  />
                ) : (
                  <video
                    ref={(el) => {
                      heroVideoRefs.current[index] = el;
                    }}
                    className={styles.heroVideo}
                    poster={slide.poster}
                    muted
                    loop
                    playsInline
                    preload={index === 0 ? "metadata" : "none"}
                    aria-label={isArabic ? slide.titleAR : slide.titleEN}
                    onError={() => markHeroFailed(slide.key)}
                  >
                    {sources.map((source) => (
                      <source key={source.url} src={source.url} type={source.type} />
                    ))}
                  </video>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={`${styles.heroContent} ${styles.reveal} ${styles.isVisible}`} data-home-reveal>
          <p className={styles.heroKicker}>{isArabic ? "RODEO DRIVE" : "RODEO DRIVE"}</p>
          <h1 className={`${styles.heroTitle} ${isArabic ? "" : displayFont.className}`}>
            {isArabic ? "اللمسة غير المرئية" : "THE UNSEEN"}
          </h1>
          <p className={styles.heroSubtitle}>
            {isArabic
              ? "تشطيب فاخر، حماية دقيقة، ونتائج تظهر مع كل انعكاس."
              : "Cinematic detailing, precision protection, and craftsmanship that reveals itself in every reflection."}
          </p>
        </div>

        <div className={styles.heroControls} aria-label={isArabic ? "عناصر تحكم فيديو الهيرو" : "Hero video controls"}>
          <button
            type="button"
            className={styles.heroCtrlBtn}
            aria-label={isArabic ? "الشريحة السابقة" : "Previous slide"}
            onClick={() => goHeroSlide(heroActive - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className={styles.heroDots} role="tablist" aria-label={isArabic ? "شرائح الهيرو" : "Hero slides"}>
            {HERO_VIDEO_SLIDES.map((slide, index) => {
              const isActive = index === heroActive;
              return (
                <button
                  key={slide.key}
                  type="button"
                  className={`${styles.heroDot} ${isActive ? styles.heroDotActive : ""}`}
                  onClick={() => goHeroSlide(index)}
                  aria-label={`${isArabic ? "شريحة" : "Slide"} ${index + 1}`}
                  aria-current={isActive ? "true" : "false"}
                >
                  <span className={styles.heroDotFill} />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className={styles.heroCtrlBtn}
            aria-label={isArabic ? "الشريحة التالية" : "Next slide"}
            onClick={() => goHeroSlide(heroActive + 1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <section className={`${styles.intro} ${styles.reveal}`} data-home-reveal>
        <p className={styles.sectionLabel}>{isArabic ? "أعمالنا" : "OUR WORKS"}</p>
        <h2 className={styles.introLine}>
          {isArabic
            ? "أفضل السيارات تُجهّز بعناية عالية"
            : "THE FINEST CARS CURATED WITH CARE"}
        </h2>
      </section>

      <section className={`${styles.gallery} ${styles.reveal}`} data-home-reveal aria-label={isArabic ? "معرض الأعمال" : "Our works gallery"}>
        {GALLERY.map((item, i) => (
          <article key={item.src} className={styles.galleryCard}>
            <Image
              src={item.src}
              alt={isArabic ? item.altAR : item.altEN}
              fill
              priority={i < 3}
              sizes="(max-width: 768px) 94vw, (max-width: 1200px) 46vw, 30vw"
              className={styles.galleryImg}
            />
          </article>
        ))}
      </section>

      <section
        id="surface-protection-film"
        className={`${styles.spfService} ${styles.reveal}`}
        data-home-reveal
        aria-label={isArabic ? "خدمة فيلم حماية الأسطح" : "Surface Protection Film service"}
      >
        <div className={styles.spfHeader}>
          <p className={styles.sectionLabel}>{isArabic ? "خدمة جديدة" : "NEW SERVICE"}</p>
          <h2 className={styles.spfTitle}>
            {isArabic
              ? "GLOSS SPF و MATTE SPF | فيلم حماية الأسطح بمستوى فاخر"
              : "GLOSS SPF & MATTE SPF | High-Performance Surface Protection Film"}
          </h2>
          <p className={styles.spfLead}>
            {isArabic
              ? "حل متقدم لحماية الأسطح الراقية في المنازل، المكاتب، والمساحات التجارية. بطبقة سيراميك شفافة متطورة، يمنحك SPF حماية غير مرئية ضد الحرارة، البقع، الخدوش، والاستخدام اليومي مع الحفاظ على جمال السطح الأصلي ولمعانه أو طابعه المات حسب اختيارك."
              : "Protect premium interiors with an invisible, ceramic-coated shield engineered for modern homes, offices, and commercial spaces. Our 5 mil PET Surface Protection Film resists heat, scratches, stains, and daily impact while preserving the original surface character in Gloss or Matte."}
          </p>
          <div className={styles.spfActions}>
            <Link href={`${base}/surface-protection-film`} className={styles.spfPrimaryCta}>
              {isArabic ? "احجز استشارة SPF" : "Book SPF Consultation"}
            </Link>
            <Link href={`${base}/contact`} className={styles.spfSecondaryCta}>
              {isArabic ? "اطلب عرض سعر" : "Request a Quote"}
            </Link>
          </div>
        </div>

        <div className={styles.spfVisualGrid}>
          <article className={styles.spfFeaturedCard}>
            <span className={styles.spfBadge}>{isArabic ? "حماية غير مرئية" : "Invisible Protection"}</span>
            <Image
              src={SPF_GALLERY[0].src}
              alt={isArabic ? SPF_GALLERY[0].altAR : SPF_GALLERY[0].altEN}
              fill
              sizes="(max-width: 960px) 100vw, 58vw"
              className={styles.spfFeaturedImg}
            />
          </article>

          <div className={styles.spfThumbGrid}>
            {SPF_GALLERY.slice(1).map((item) => (
              <article key={item.src} className={styles.spfThumbCard}>
                <Image
                  src={item.src}
                  alt={isArabic ? item.altAR : item.altEN}
                  fill
                  sizes="(max-width: 960px) 32vw, 18vw"
                  className={styles.spfThumbImg}
                />
              </article>
            ))}
          </div>
        </div>

        <div className={styles.spfSpecGrid}>
          <article className={styles.spfSpecCard}>
            <h3 className={styles.spfSpecTitle}>{isArabic ? "GLOSS SPF | بريق يحمي" : "GLOSS SPF | Brilliance That Protects"}</h3>
            <p className={styles.spfSpecText}>
              {isArabic
                ? "يعزز العمق والانعكاس والوضوح البصري بطبقة شفافة عالية النقاء، مع حماية متقدمة للأسطح الفاخرة دون التأثير على اللون أو التشطيب الأصلي."
                : "Designed to amplify depth, clarity, and reflection with optical-grade transparency, while delivering robust protection for premium surfaces without altering original color or finish."}
            </p>
            <p className={styles.spfSpecList}>
              {isArabic
                ? "وضوح بصري عالي | لمعان معزَّز | مقاومة حرارية حتى 150°C | مقاومة للبقع والمواد الكيميائية | سهولة تنظيف يومية"
                : "Optical-grade clarity | Reflective depth enhancement | Heat resistance up to 150C | Chemical and stain defense | Premium easy-clean finish"}
            </p>
          </article>

          <article className={styles.spfSpecCard}>
            <h3 className={styles.spfSpecTitle}>{isArabic ? "MATTE SPF | أناقة هادئة بحماية قوية" : "MATTE SPF | Refined Protection, Contemporary Finish"}</h3>
            <p className={styles.spfSpecText}>
              {isArabic
                ? "يوفر مظهراً مات ناعماً وغير عاكس مع حماية عالية ضد الخدش والصدمات والحرارة والاستخدام الكثيف، ليحافظ على الطابع العصري للمساحات الراقية."
                : "Created for modern interiors that favor subtle elegance, MATTE SPF offers non-glare visual calm with durable protection against scratches, impact, heat, and high-traffic use."}
            </p>
            <p className={styles.spfSpecList}>
              {isArabic
                ? "تشطيب مات غير عاكس | مقاومة خدش وصدمات | ثبات حراري حتى 150°C | مقاومة اصفرار طويلة الأمد | متانة وسهولة صيانة"
                : "Soft non-glare matte finish | Scratch and impact defense | Heat stable up to 150C | Anti-yellowing performance | Long-term durability and low maintenance"}
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.aftersales} ${styles.reveal}`} data-home-reveal>
        <p className={styles.sectionLabel}>{isArabic ? "ما بعد البيع" : "AFTER SALES"}</p>
        <div className={styles.aftersalesGrid}>
          <h3 className={styles.aftersalesTitle}>
            {isArabic ? "خدمة على مستوى جديد بالكامل" : "EXPERIENCE SERVICE ON A COMPLETELY NEW LEVEL"}
          </h3>
          <div>
            <p className={styles.aftersalesText}>
              {isArabic
                ? "فريقنا يقدّم رعاية دقيقة لكل سيارة: فحص واضح، تنفيذ احترافي، وتسليم يليق بالتفاصيل التي تهمك."
                : "Our specialists combine advanced methods and careful inspection to deliver an aftersales experience that feels confident, transparent, and premium."}
            </p>
            <Link href={`${base}/services`} className={styles.aftersalesCta}>
              {isArabic ? "استكشف الخدمات" : "Explore Services"}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.videoJourney} aria-label={isArabic ? "مشاهد فيديو" : "Cinematic process videos"}>
        {PANELS.map((panel, index) => {
          const formats = panel.availableFormats?.length ? panel.availableFormats : preferredFormats;
          const sources = formats.map((format) => ({
            format,
            url: resolveMediaUrl(`${panel.videoBasePath}.${format}`, mediaCdnBase),
            type: format === "webm" ? "video/webm" : "video/mp4",
          }));
          const usePosterFallback = forcePosterDebug || Boolean(videoFallbacks[panel.key]);

          const panelVars = {
            "--panel-zoom-from": panel.zoomFrom,
            "--panel-zoom-to": panel.zoomTo,
            "--panel-parallax": panel.parallaxRange,
            "--reveal-delay": `${Math.min(index * 110, 220)}ms`,
          } as CSSProperties;

          return (
          <article
            key={panel.key}
            className={`${styles.videoPanel} ${styles.reveal}`}
            data-home-reveal
            data-video-panel
            data-panel-index={index}
            style={panelVars}
          >
            <div className={styles.videoSticky}>
              <div className={styles.videoFrame}>
                {usePosterFallback ? (
                  <Image
                    src={panel.poster}
                    alt={isArabic ? panel.titleAR : panel.titleEN}
                    fill
                    sizes="(max-width: 1200px) 100vw, 72vw"
                    className={styles.videoPoster}
                  />
                ) : (
                  <video
                    data-home-video
                    className={styles.video}
                    poster={panel.poster}
                    muted
                    loop
                    playsInline
                    preload={index === 0 ? "metadata" : "none"}
                    crossOrigin="anonymous"
                    aria-label={isArabic ? panel.titleAR : panel.titleEN}
                    onPlay={() => setPanelState(panel.key, "playing")}
                    onPause={() => setPanelState(panel.key, "paused")}
                    onWaiting={() => setPanelState(panel.key, "buffering")}
                    onLoadStart={() => setPanelState(panel.key, "loading")}
                    onCanPlay={() => setPanelState(panel.key, "ready")}
                    onError={() => markVideoFailed(panel.key)}
                  >
                    {sources.map((source) => (
                      <source key={source.url} src={source.url} type={source.type} />
                    ))}
                  </video>
                )}
                <div className={styles.videoShade} aria-hidden="true" />
              </div>

              <div className={styles.videoText}>
                <h3 className={styles.videoTitle}>{isArabic ? panel.titleAR : panel.titleEN}</h3>
                <p className={styles.videoDesc}>{isArabic ? panel.descAR : panel.descEN}</p>
              </div>
            </div>
          </article>
          );
        })}
      </section>

      <section className={`${styles.about} ${styles.reveal}`} data-home-reveal>
        <p className={styles.sectionLabel}>{isArabic ? "من نحن" : "WHO WE ARE"}</p>
        <h3 className={styles.aboutTitle}>
          {isArabic
            ? "ورشة متكاملة بمساحة واسعة، تجهيزات عالية، وفريق يعتني بأدق التفاصيل."
            : "A high-capacity, detail-driven facility built for premium automotive care."}
        </h3>
        <Link href={`${base}/about`} className={styles.aboutCta}>
          {isArabic ? "اكتشف المزيد" : "Find Out More"}
        </Link>
      </section>

      {isDev ? (
        <>
          <button
            type="button"
            className={styles.debugFab}
            onClick={() => setDebugOpen((v) => !v)}
            aria-label="Toggle video debug panel"
            title="Video debug (Shift+D)"
          >
            VD
          </button>

          <aside className={`${styles.debugPanel} ${debugOpen ? styles.debugOpen : ""}`}>
            <h4 className={styles.debugTitle}>Video Debug</h4>
            <p className={styles.debugLine}>Mode: {mediaCdnBase ? "CDN" : "Local /public"}</p>
            <p className={styles.debugLine}>CDN Base: {mediaCdnBase || "(not set)"}</p>
            <p className={styles.debugLine}>Formats: {preferredFormats.join(", ")}</p>
            <p className={styles.debugLine}>Detected fallback panels: {Object.keys(videoFallbacks).length}</p>
            <label className={styles.debugToggle}>
              <input
                type="checkbox"
                checked={forcePosterDebug}
                onChange={(e) => setForcePosterDebug(e.target.checked)}
              />
              <span>Force poster fallback</span>
            </label>
            {PANELS.map((panel) => (
              <p key={panel.key} className={styles.debugLine}>
                {panel.key}: {forcePosterDebug || videoFallbacks[panel.key] ? "fallback" : videoStates[panel.key] || "idle"}
              </p>
            ))}
            <p className={styles.debugHint}>Tip: press Shift+D to open/close this panel.</p>
          </aside>
        </>
      ) : null}
    </div>
  );
}
