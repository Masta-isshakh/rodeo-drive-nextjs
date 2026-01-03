"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./contact.module.css";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useI18n } from "../../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type SubmitStatus = "idle" | "success" | "error";

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

  const services = useMemo(
    () => [
      "Premium Detailing",
      "Ceramic Coating",
      "Paint Protection Film (PPF)",
      "Paint Correction",
      "Interior Restoration",
      "Rubberized Paint",
      "Smart Repair",
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
        details: ["+974 33388451", "+974 33388452"],
        action: () => window.open("tel:+97433388452", "_self"),
      },
      {
        icon: MessageCircle,
        title: "WhatsApp",
        details: ["+974 33388451"],
        action: () => window.open("https://wa.me/97433202409", "_blank"),
      },
      {
        icon: Mail,
        title: language === "en" ? "Email" : "البريد الإلكتروني",
        details: ["info@rodeodrive.qa", "info@rodeodrive.me"],
        action: () => window.open("mailto:info@rodeodrive.qa", "_self"),
      },
      {
        icon: MapPin,
        title: language === "en" ? "Location" : "الموقع",
        details: ["Doha, Qatar", "Block 2, Shop No SYS 066, Block 21, Near Dragon Mart Al Sayer, Doha"],
        action: () => window.open("https://maps.app.goo.gl/w1QEpGjy7UmE9LBs9?g_st=ipc", "_blank"),
      },
      {
        icon: Clock,
        title: language === "en" ? "Working Hours" : "ساعات العمل",
        details: [
          language === "en" ? "Sun - Thu: 9AM - 9PM" : "السبت - الخميس: 9 صباحاً - 9 مساءً",
         
        ],
        action: null as null | (() => void),
      },
    ],
    [language]
  );

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector(`.${styles.heroContent}`);
        if (heroContent) {
          gsap.fromTo(heroContent, { opacity: 0, y: 80, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.12 });
        }
      }

      // Info cards
      if (contactInfoRef.current) {
        const cards = contactInfoRef.current.querySelectorAll(`.${styles.infoCard}`);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: contactInfoRef.current, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      }

      // Form fields
      if (formRef.current) {
        const groups = formRef.current.querySelectorAll(`.${styles.formGroup}`);
        gsap.fromTo(
          groups,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: { trigger: formRef.current, start: "top 78%", toggleActions: "play none none reverse" },
          }
        );
      }

      // Map
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: mapRef.current, start: "top 82%", toggleActions: "play none none reverse" },
          }
        );
      }

      // Titles
      const titles = document.querySelectorAll(`.${styles.sectionTitle}`);
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, rootRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [language]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulation (remplace par ton API plus tard)
      await new Promise((r) => setTimeout(r, 1200));
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", carModel: "", service: "", date: "", time: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  return (
    <main className={styles.contactPage} ref={rootRef}>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{t.contact?.title ?? (language === "en" ? "Contact" : "اتصل بنا")}</h1>
          <p className={styles.subtitle}>{t.contact?.subtitle ?? (language === "en" ? "We’re here to help" : "نحن هنا للمساعدة")}</p>

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

      {/* Form */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <h2 className={styles.sectionTitle}>{language === "en" ? "Book an Appointment" : "احجز موعد"}</h2>
              <p className={styles.sectionSubtitle}>
                {language === "en" ? "Fill out the form below and we’ll get back to you within 24 hours" : "املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة"}
              </p>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.contact?.form?.name ?? (language === "en" ? "Name" : "الاسم")} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder={language === "en" ? "rashid" : "الاسم الكامل"}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.contact?.form?.phone ?? (language === "en" ? "Phone" : "الهاتف")} *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="+974 65464365"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.contact?.form?.email ?? (language === "en" ? "Email" : "البريد")} </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="rashid@gmail.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.contact?.form?.carModel ?? (language === "en" ? "Car model" : "موديل السيارة")} *</label>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder={language === "en" ? " Ferrari 488" : "مثال: فيراري 488"}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>{t.contact?.form?.service ?? (language === "en" ? "Service" : "الخدمة")} *</label>
                <select name="service" value={formData.service} onChange={handleInputChange} className={styles.select} required>
                  <option value="">{language === "en" ? "Select a service" : "اختر خدمة"}</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.contact?.form?.date ?? (language === "en" ? "Date" : "التاريخ")}</label>
                  <input type="date" name="date" value={formData.date} onChange={handleInputChange} className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.contact?.form?.time ?? (language === "en" ? "Time" : "الوقت")}</label>
                  <input type="time" name="time" value={formData.time} onChange={handleInputChange} className={styles.input} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>{t.contact?.form?.notes ?? (language === "en" ? "Notes" : "ملاحظات")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows={5}
                  placeholder={language === "en" ? "Tell us more about your requirements..." : "أخبرنا المزيد عن متطلباتك..."}
                />
              </div>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className={styles.spinner} />
                ) : (
                  <>
                    <Send size={20} />
                    {t.contact?.form?.submit ?? (language === "en" ? "Submit" : "إرسال")}
                  </>
                )}
              </button>

              {submitStatus === "success" && <div className={styles.successMessage}>{t.contact?.success ?? (language === "en" ? "Message sent successfully." : "تم إرسال الرسالة بنجاح.")}</div>}
              {submitStatus === "error" && <div className={styles.errorMessage}>{language === "en" ? "Something went wrong. Try again." : "حدث خطأ. حاول مرة أخرى."}</div>}
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection} ref={mapRef}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{language === "en" ? "Visit Our Facility" : "قم بزيارة منشأتنا"}</h2>

          <div className={styles.mapWrapper}>
            <div className={styles.mapPlaceholder}>
              <MapPin size={64} strokeWidth={1} />
              <h3 className={styles.mapTitle}>Rodeo Drive Detailing</h3>
              <p className={styles.mapAddress}>Al Sadd Street, Doha, Qatar</p>

              <button className={styles.directionsButton} onClick={() => window.open("https://maps.google.com", "_blank")} type="button">
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
            <h2 className={styles.quickContactTitle}>{language === "en" ? "Need Immediate Assistance?" : "تحتاج إلى مساعدة فورية؟"}</h2>
            <p className={styles.quickContactText}>
              {language === "en" ? "Our team is available to answer your questions and schedule appointments." : "فريقنا متاح للإجابة على أسئلتك وجدولة المواعيد."}
            </p>

            <div className={styles.quickContactButtons}>
              <button className={styles.phoneButton} onClick={() => window.open("tel:+97412345678", "_self")} type="button">
                <Phone size={20} />
                {language === "en" ? "Call Now" : "اتصل الآن"}
              </button>

              <button className={styles.whatsappButtonLarge} onClick={() => window.open("https://wa.me/97412345678", "_blank")} type="button">
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
