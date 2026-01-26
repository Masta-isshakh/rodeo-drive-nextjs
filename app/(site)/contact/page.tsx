import styles from "./contact.module.css";
import Book from "../book/Book";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { cookies, headers } from "next/headers";
import ContactMotion from "./ContactPage";

type Lang = "en" | "ar";

function detectLanguage(): Lang {
  const c = cookies();
  const cookieLang =
    c.get("lang")?.value ||
    c.get("language")?.value ||
    c.get("NEXT_LOCALE")?.value;

  if (cookieLang) {
    const v = cookieLang.toLowerCase();
    if (v.startsWith("ar")) return "ar";
    if (v.startsWith("en")) return "en";
  }

  const accept = headers().get("accept-language")?.toLowerCase() || "";
  if (accept.includes("ar")) return "ar";
  return "en";
}

type InfoItem = {
  icon: any;
  title: string;
  details: string[];
  href?: string;
  target?: "_blank" | "_self";
  rel?: string;
};

export default function ContactPage() {
  const language = detectLanguage();
  const isEn = language === "en";
  const dir = isEn ? "ltr" : "rtl";

  const heroTitle = isEn ? "Contact" : "اتصل بنا";
  const heroSubtitle = isEn ? "We’re here to help" : "نحن هنا للمساعدة";

  const contactInfo: InfoItem[] = [
    {
      icon: Phone,
      title: isEn ? "Phone" : "الهاتف",
      details: ["+974 3320 2409"],
      href: "tel:+97433202409",
      target: "_self",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+974 3320 2409"],
      href: "https://wa.me/97433202409",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Mail,
      title: isEn ? "Email" : "البريد الإلكتروني",
      details: ["info@rodeodrive.me"],
      href: "mailto:info@rodeodrive.me",
      target: "_self",
    },
    {
      icon: MapPin,
      title: isEn ? "Location" : "الموقع",
      details: [
        "Doha, Qatar",
        "Block 2, Shop No SYS 066, Block 21, Near Dragon Mart Al Sayer, Doha",
      ],
      href: "https://maps.app.goo.gl/w1QEpGjy7UmE9LBs9?g_st=ipc",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Clock,
      title: isEn ? "Working Hours" : "ساعات العمل",
      details: [isEn ? "Saturday - Thursday: 9AM - 9PM" : "السبت - الخميس: 9 صباحاً - 9 مساءً"],
    },
  ];

  return (
    <main id="contact-root" className={styles.contactPage} dir={dir}>
      {/* Client-only motion controller (tiny + code-split GSAP) */}
      <ContactMotion />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{heroTitle}</h1>
          <p className={styles.subtitle}>{heroSubtitle}</p>

          <div className={styles.heroDecoration}>
            <div className={styles.decorLine} />
            <span className={styles.decorDiamond}>◆</span>
            <div className={styles.decorLine} />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className={styles.contactInfoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;

              const CardInner = (
                <>
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
                </>
              );

              // Use real links to avoid client JS
              if (info.href) {
                return (
                  <a
                    key={index}
                    className={styles.infoCard}
                    href={info.href}
                    target={info.target}
                    rel={info.rel}
                    aria-label={info.title}
                  >
                    {CardInner}
                  </a>
                );
              }

              // Non-clickable card (hours)
              return (
                <div key={index} className={styles.infoCard} aria-label={info.title}>
                  {CardInner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking / Form (keep as-is; can be client) */}
      <Book />

      {/* Map */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {isEn ? "Visit Our Facility" : "قم بزيارة منشأتنا"}
          </h2>

          <div className={styles.mapWrapper}>
            <div className={styles.mapPlaceholder}>
              <MapPin size={64} strokeWidth={1} />
              <h3 className={styles.mapTitle}>Rodeo Drive Car Care Center</h3>
              <p className={styles.mapAddress}>
                Block 2, Shop No SYS 066, Block 21, Near Dragon Mart Al Sayer, Doha
              </p>

              <a
                className={styles.directionsButton}
                href="https://maps.app.goo.gl/w1QEpGjy7UmE9LBs9?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isEn ? "Get Directions" : "احصل على الاتجاهات"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className={styles.quickContactSection}>
        <div className={styles.container}>
          <div className={styles.quickContactContent}>
            <h2 className={styles.quickContactTitle}>
              {isEn ? "Need Immediate Assistance?" : "تحتاج إلى مساعدة فورية؟"}
            </h2>
            <p className={styles.quickContactText}>
              {isEn
                ? "Our team is available to answer your questions and schedule appointments."
                : "فريقنا متاح للإجابة على أسئلتك وجدولة المواعيد."}
            </p>

            <div className={styles.quickContactButtons}>
              <a className={styles.phoneButton} href="tel:+97433202409">
                <Phone size={20} />
                {isEn ? "Call Now" : "اتصل الآن"}
              </a>

              <a
                className={styles.whatsappButtonLarge}
                href="https://wa.me/97433202409"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
