"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./contact.module.css";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useI18n } from "../../lib/i18n";
import Book from "../book/Book";

gsap.registerPlugin(ScrollTrigger);

type SubmitStatus = "idle" | "success" | "error";

function getMotionFlags() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return { reduced: false, lite: false };
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lite =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

  return { reduced, lite };
}

export default function ContactPage() {
  const { language, t } = useI18n();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // kept (not used currently in UI, but fine)
  const services = useMemo(
    () => [
      "Premium Detailing",
      "Ceramic Coating",
      "Windshield Protection Film",
      "Solar Window Tint",
      "Paint Protection Film (PPF)",
      "Paint Correction",
      "Interior Deep Cleaning",
      "Pealable Paint",
      "Smart Paint",
      "Black Edition Conversion",
      "Custom Services",
    ],
    []
  );

  const contactInfo = useMemo(
    () => [
      {
        icon: Phone,
        title: language === "en" ? "Phone" : "الهاتف",
        details: ["+974 3320 2409"],
        action: () => window.open("tel:+97433202409", "_self"),
      },
      {
        icon: MessageCircle,
        title: "WhatsApp",
        details: ["+974 3320 2409"],
        action: () => window.open("https://wa.me/97433202409", "_blank"),
      },
      {
        icon: Mail,
        title: language === "en" ? "Email" : "البريد الإلكتروني",
        details: ["info@rodeodrive.me"],
        action: () => window.open("mailto:info@rodeodrive.me", "_self"),
      },
      {
        icon: MapPin,
        title: language === "en" ? "Location" : "الموقع",
        details: [
          "Doha, Qatar",
          "Block 2, Shop No SYS 066, Block 21, Near Dragon Mart Al Sayer, Doha",
        ],
        action: () =>
          window.open("https://maps.app.goo.gl/w1QEpGjy7UmE9LBs9?g_st=ipc", "_blank"),
      },
      {
        icon: Clock,
        title: language === "en" ? "Working Hours" : "ساعات العمل",
        details: [
          language === "en"
            ? "Saturday - Thursday: 9AM - 9PM"
            : "السبت - الخميس: 9 صباحاً - 9 مساءً",
        ],
        action: null as null | (() => void),
      },
    ],
    [language]
  );

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const { reduced, lite } = getMotionFlags();

    // Step-4: No GSAP on reduced OR lite mode
    if (reduced || lite) {
      const heroContent = heroRef.current?.querySelector(
        `.${styles.heroContent}`
      ) as HTMLElement | null;

      if (heroContent) {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "none";
      }
      return;
    }

    ScrollTrigger.config({
      ignoreMobileResize: true,
      limitCallbacks: true,
    });

    const ctx = gsap.context(() => {
      // HERO (fast)
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(
          `.${styles.heroContent}`
        ) as HTMLElement | null;

        if (heroContent) {
          gsap.set(heroContent, { autoAlpha: 0, y: 18, willChange: "transform,opacity" });
          gsap.to(heroContent, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: 0.08,
            onComplete: () => {
              gsap.set(heroContent, { clearProps: "willChange" });
            },
          });
        }
      }

      // INFO CARDS (batch, once)
      if (contactInfoRef.current) {
        const cards = Array.from(
          contactInfoRef.current.querySelectorAll<HTMLElement>(`.${styles.infoCard}`)
        );
        if (cards.length) {
          gsap.set(cards, { autoAlpha: 0, y: 14, willChange: "transform,opacity" });

          ScrollTrigger.batch(cards, {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
                stagger: 0.06,
                onComplete: () => {
                  batch.forEach((el) => gsap.set(el as any, { clearProps: "willChange" }));
                },
              });
            },
          });
        }
      }

      // FORM GROUPS (if the form exists on this page)
      // NOTE: you currently render <Book />; if Book contains a form with .formGroup,
      // attach formRef to that form inside Book OR keep this block for future use.
      if (formRef.current) {
        const groups = Array.from(
          formRef.current.querySelectorAll<HTMLElement>(`.${styles.formGroup}`)
        );
        if (groups.length) {
          gsap.set(groups, { autoAlpha: 0, y: 12, willChange: "transform,opacity" });

          ScrollTrigger.batch(groups, {
            start: "top 90%",
            once: true,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.04,
                onComplete: () => {
                  batch.forEach((el) => gsap.set(el as any, { clearProps: "willChange" }));
                },
              });
            },
          });
        }
      }

      // MAP (batch, once) — animate wrapper or placeholder
      if (mapRef.current) {
        const target =
          (mapRef.current.querySelector(`.${styles.mapWrapper}`) as HTMLElement | null) ||
          (mapRef.current.querySelector(`.${styles.mapPlaceholder}`) as HTMLElement | null) ||
          mapRef.current;

        gsap.set(target, { autoAlpha: 0, y: 12, willChange: "transform,opacity" });

        ScrollTrigger.create({
          trigger: mapRef.current,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(target, {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              onComplete: () => {
                gsap.set(target, { clearProps: "willChange" });
              },
            });
          },
        });
      }

      // TITLES (scoped to root, batch, once)
      const titles = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.sectionTitle}`));
      if (titles.length) {
        gsap.set(titles, { autoAlpha: 0, y: 10, willChange: "transform,opacity" });

        ScrollTrigger.batch(titles, {
          start: "top 92%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
              stagger: 0.05,
              onComplete: () =>
                batch.forEach((el) => gsap.set(el as any, { clearProps: "willChange" })),
            });
          },
        });
      }
    }, root);

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();

      // Safety: kill triggers that belong to this page root
      try {
        ScrollTrigger.getAll().forEach((st) => {
          const trig = st.trigger as Element | null;
          if (trig && root.contains(trig)) st.kill(false);
        });
      } catch {
        // ignore
      }
    };
  }, [language]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/sendContactEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.error("Contact email API failed:", data);
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        carModel: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.contactPage} ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            {t.contact?.title ?? (language === "en" ? "Contact" : "اتصل بنا")}
          </h1>
          <p className={styles.subtitle}>
            {t.contact?.subtitle ?? (language === "en" ? "We’re here to help" : "نحن هنا للمساعدة")}
          </p>

          <div className={styles.heroDecoration}>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className={styles.contactInfoSection} ref={contactInfoRef}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className={styles.infoCard}
                  onClick={info.action || undefined}
                  style={{ cursor: info.action ? "pointer" : "default" }}
                  role={info.action ? "button" : undefined}
                  tabIndex={info.action ? 0 : -1}
                  onKeyDown={(e) => {
                    if (!info.action) return;
                    if (e.key === "Enter" || e.key === " ") info.action();
                  }}
                >
                  <div className={styles.infoIcon}>
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  <div className={styles.infoDetails}>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={styles.infoDetail}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking / Form */}
      <Book />

      {/* Map */}
      <section className={styles.mapSection} ref={mapRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {language === "en" ? "Visit Our Facility" : "قم بزيارة منشأتنا"}
          </h2>

          <div className={styles.mapWrapper}>
            <div className={styles.mapPlaceholder}>
              <MapPin size={64} strokeWidth={1} />
              <h3 className={styles.mapTitle}>Rodeo Drive Car Care Center</h3>
              <p className={styles.mapAddress}>
                Block 2, Shop No SYS 066, Block 21, Near Dragon Mart Al Sayer, Doha
              </p>

              <button
                className={styles.directionsButton}
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/w1QEpGjy7UmE9LBs9?g_st=ipc",
                    "_blank"
                  )
                }
                type="button"
              >
                {language === "en" ? "Get Directions" : "احصل على الاتجاهات"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className={styles.quickContactSection}>
        <div className={styles.container}>
          <div className={styles.quickContactContent}>
            <h2 className={styles.quickContactTitle}>
              {language === "en" ? "Need Immediate Assistance?" : "تحتاج إلى مساعدة فورية؟"}
            </h2>
            <p className={styles.quickContactText}>
              {language === "en"
                ? "Our team is available to answer your questions and schedule appointments."
                : "فريقنا متاح للإجابة على أسئلتك وجدولة المواعيد."}
            </p>

            <div className={styles.quickContactButtons}>
              <button
                className={styles.phoneButton}
                onClick={() => window.open("tel:+97433202409", "_self")}
                type="button"
              >
                <Phone size={20} />
                {language === "en" ? "Call Now" : "اتصل الآن"}
              </button>

              <button
                className={styles.whatsappButtonLarge}
                onClick={() => window.open("https://wa.me/97433202409", "_blank")}
                type="button"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
