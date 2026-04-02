"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/app/lib/i18n";
import { trackLead } from "@/app/lib/metaPixel";
import { SITE } from "@/app/config/site";
import styles from "./surface-protection-film.module.css";

type Lang = "en" | "ar";

type Copy = {
  kicker: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  overviewTitle: string;
  overviewText: string;
  glossTitle: string;
  glossBody: string;
  glossList: string;
  matteTitle: string;
  matteBody: string;
  matteList: string;
  galleryTitle: string;
  gallerySubtitle: string;
  formTitle: string;
  formSubtitle: string;
  nameLabel: string;
  phoneLabel: string;
  surfaceLabel: string;
  finishLabel: string;
  notesLabel: string;
  submit: string;
  success: string;
};

const GALLERY = [
  "/photo1.avif",
  "/photo2.avif",
  "/photo3.avif",
  "/photo4.avif",
  "/photo5.avif",
  "/photo6.avif",
  "/photo7.avif",
] as const;

export default function SurfaceProtectionFilmClient({ initialLang }: { initialLang: Lang }) {
  const { language } = useI18n();
  const pathname = usePathname();

  const lang: Lang = language === "ar" ? "ar" : initialLang;
  const isArabic = lang === "ar";
  const base = `/${lang}`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [surface, setSurface] = useState("");
  const [finish, setFinish] = useState("Gloss SPF");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copy: Copy = useMemo(
    () =>
      isArabic
        ? {
            kicker: "خدمة مميزة",
            title: "GLOSS SPF و MATTE SPF",
            subtitle:
              "فيلم حماية أسطح احترافي بطبقة سيراميك متطورة يحافظ على جمال الأسطح الفاخرة ويمنحها حماية يومية قوية في المنازل، المكاتب، والمساحات التجارية.",
            primaryCta: "احجز استشارة SPF",
            secondaryCta: "العودة للرئيسية",
            overviewTitle: "تقنية حماية متقدمة بمظهر فاخر",
            overviewText:
              "SPF هو فيلم حماية أسطح عالي الأداء بسماكة 5 ميل من PET، مصمم ليشكل درعاً غير مرئي ضد الحرارة، البقع، المواد الكيميائية، الخدوش، والصدمات اليومية. النتيجة: حماية طويلة الأمد مع الحفاظ الكامل على اللون والتشطيب الأصلي.",
            glossTitle: "GLOSS SPF | بريق يحمي",
            glossBody:
              "لمن يبحث عن عمق بصري ولمعان أنيق، يوفر GLOSS SPF طبقة شفافة فائقة النقاء تعزز الانعكاس وتبقي السطح مشرقاً ونظيفاً.",
            glossList:
              "وضوح بصري ممتاز | تعزيز اللمعان والانعكاس | مقاومة حرارة حتى 150°C | حماية من البقع والمواد الكيميائية | تنظيف أسهل يومياً",
            matteTitle: "MATTE SPF | هدوء بصري بحماية قوية",
            matteBody:
              "للعملاء الذين يفضلون الطابع العصري غير العاكس، يقدم MATTE SPF مظهراً ناعماً راقياً مع مقاومة ممتازة للخدوش والاحتكاك والاستخدام الكثيف.",
            matteList:
              "تشطيب مات غير عاكس | مقاومة خدش وصدمات | مقاومة حرارة حتى 150°C | مقاومة اصفرار طويلة الأمد | متانة وصيانة منخفضة",
            galleryTitle: "معرض تطبيقات SPF",
            gallerySubtitle: "عينات حقيقية من تطبيقات GLOSS و MATTE على أسطح فاخرة.",
            formTitle: "اطلب عرض سعر مخصص",
            formSubtitle: "أرسل لنا متطلباتك وسيتواصل فريقنا معك سريعاً عبر واتساب.",
            nameLabel: "الاسم",
            phoneLabel: "رقم التواصل",
            surfaceLabel: "نوع السطح / المساحة",
            finishLabel: "التشطيب المطلوب",
            notesLabel: "تفاصيل إضافية",
            submit: "إرسال الطلب",
            success: "تم تجهيز طلبك. سيتم فتح واتساب لإرسال التفاصيل مباشرة.",
          }
        : {
            kicker: "New Signature Service",
            title: "GLOSS SPF & MATTE SPF",
            subtitle:
              "A ceramic-coated, high-performance Surface Protection Film engineered to preserve premium finishes while delivering powerful day-to-day defense for homes, offices, and commercial spaces.",
            primaryCta: "Book SPF Consultation",
            secondaryCta: "Back to Home",
            overviewTitle: "Advanced Protection, Premium Aesthetics",
            overviewText:
              "SPF is a 5 mil PET protective film that acts as an invisible shield against heat, stains, chemicals, scratches, and daily impact. It protects long-term durability without changing your original color or surface character.",
            glossTitle: "GLOSS SPF | Brilliance That Protects",
            glossBody:
              "Designed to maximize visual depth and refined shine, GLOSS SPF adds a crystal-clear protective layer that keeps premium surfaces radiant and easy to maintain.",
            glossList:
              "Optical-grade clarity | Enhanced gloss and reflection | Heat resistance up to 150C | Chemical and stain defense | Premium easy-clean surface",
            matteTitle: "MATTE SPF | Refined Protection, Modern Finish",
            matteBody:
              "For understated, contemporary interiors, MATTE SPF provides a soft non-glare appearance with robust resistance to scratches, wear, and high-traffic use.",
            matteList:
              "Soft non-glare finish | Scratch and impact resistance | Heat stable up to 150C | Anti-yellowing protection | Long-term durability and low maintenance",
            galleryTitle: "SPF Showcase Gallery",
            gallerySubtitle: "Real installations featuring Gloss and Matte surface protection applications.",
            formTitle: "Request a Tailored Quote",
            formSubtitle: "Share your requirements and our team will contact you quickly on WhatsApp.",
            nameLabel: "Full Name",
            phoneLabel: "Phone Number",
            surfaceLabel: "Surface Type / Area",
            finishLabel: "Preferred Finish",
            notesLabel: "Additional Notes",
            submit: "Send Request",
            success: "Your request is ready. WhatsApp will open to send your details directly.",
          },
    [isArabic]
  );

  const openWhatsAppLead = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      "SPF Lead Request",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Surface: ${surface || "-"}`,
      `Finish: ${finish || "-"}`,
      `Notes: ${notes || "-"}`,
      `Page: ${pathname || "-"}`,
    ].join("\n");

    trackLead(
      {
        source_section: "spf_detail_page",
        cta_variant: "spf_form_whatsapp",
        intent_type: "lead",
        conversion_stage: "consideration",
      },
      {
        language: lang,
        pagePath: pathname || undefined,
      }
    );

    const waNumber = SITE.whatsappUrl.replace("https://wa.me/", "");
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className={styles.page} dir={isArabic ? "rtl" : "ltr"}>
      <section className={styles.hero}>
        <Image
          src={GALLERY[0]}
          alt={isArabic ? "فيلم حماية أسطح فاخر" : "Premium surface protection film"}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <p className={styles.kicker}>{copy.kicker}</p>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.subtitle}>{copy.subtitle}</p>
          <div className={styles.actions}>
            <a href="#spf-lead-form" className={styles.primaryCta}>
              {copy.primaryCta}
            </a>
            <Link href={`${base}`} className={styles.secondaryCta}>
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <h2 className={styles.sectionTitle}>{copy.overviewTitle}</h2>
        <p className={styles.sectionText}>{copy.overviewText}</p>

        <div className={styles.columns}>
          <article className={styles.card}>
            <h3>{copy.glossTitle}</h3>
            <p>{copy.glossBody}</p>
            <p className={styles.keyLine}>{copy.glossList}</p>
          </article>
          <article className={styles.card}>
            <h3>{copy.matteTitle}</h3>
            <p>{copy.matteBody}</p>
            <p className={styles.keyLine}>{copy.matteList}</p>
          </article>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>{copy.galleryTitle}</h2>
        <p className={styles.sectionText}>{copy.gallerySubtitle}</p>
        <div className={styles.gallery}>
          {GALLERY.map((src, index) => (
            <article key={src} className={`${styles.galleryItem} ${index === 0 ? styles.featured : ""}`}>
              <Image
                src={src}
                alt={isArabic ? `صورة SPF ${index + 1}` : `SPF showcase ${index + 1}`}
                fill
                sizes={index === 0 ? "(max-width: 900px) 100vw, 62vw" : "(max-width: 900px) 48vw, 26vw"}
                className={styles.galleryImage}
              />
            </article>
          ))}
        </div>
      </section>

      <section id="spf-lead-form" className={styles.formSection}>
        <div className={styles.formWrap}>
          <h2 className={styles.sectionTitle}>{copy.formTitle}</h2>
          <p className={styles.sectionText}>{copy.formSubtitle}</p>

          <form className={styles.form} onSubmit={openWhatsAppLead}>
            <label>
              {copy.nameLabel}
              <input required value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
              {copy.phoneLabel}
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>

            <label>
              {copy.surfaceLabel}
              <input value={surface} onChange={(e) => setSurface(e.target.value)} />
            </label>

            <label>
              {copy.finishLabel}
              <select value={finish} onChange={(e) => setFinish(e.target.value)}>
                <option value="Gloss SPF">Gloss SPF</option>
                <option value="Matte SPF">Matte SPF</option>
              </select>
            </label>

            <label className={styles.notesField}>
              {copy.notesLabel}
              <textarea rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} />
            </label>

            <button type="submit" className={styles.submitBtn}>
              {copy.submit}
            </button>
          </form>

          {submitted ? <p className={styles.success}>{copy.success}</p> : null}
        </div>
      </section>
    </main>
  );
}
