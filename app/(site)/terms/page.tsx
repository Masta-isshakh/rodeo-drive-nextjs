'use client';

import styles from './terms.module.css';
import { useI18n } from '@/app/lib/i18n';

export default function TermsPage(){
  const { language } = useI18n();
  const lang = language === 'ar' ? 'ar' : 'en';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const c = lang === 'ar' ? {
    title:'شروط الخدمة',
    lead:'هذه الشروط توضح كيفية الحجز، نطاق العمل، وسياسات الضمان والجودة.',
    s1:'الحجوزات والمواعيد',
    p1:'تأكيد الحجز يعتمد على توافر المواعيد. قد نطلب إعادة جدولة في حالات نادرة لضمان الجودة أو لأسباب تشغيلية.',
    s2:'نطاق الخدمة',
    p2:'قد يختلف الوقت والنتيجة بناءً على حالة السيارة (الطلاء، الخدوش، الأضرار السابقة). سنوضح التوقعات قبل البدء.',
    s3:'الضمان',
    p3:'نوفر ضمانًا على جميع الخدمات وفق الشروط الموضحة وقت الاستلام. الضمان لا يشمل الأضرار الناتجة عن سوء الاستخدام أو الحوادث أو الغسيل غير الصحيح.',
    s4:'المحتوى والصور',
    p4:'قد نستخدم صور قبل/بعد (بدون معلومات شخصية) لأغراض الجودة والتسويق بعد الحصول على موافقتك عند الحاجة.'
  } : {
    title:'Terms of Service',
    lead:'These terms outline booking, scope of work, and warranty & quality policies.',
    s1:'Bookings & scheduling',
    p1:'Bookings are subject to availability. In rare cases, we may reschedule to ensure quality or for operational reasons.',
    s2:'Scope of work',
    p2:'Time and results depend on the vehicle condition (paint, defects, prior damage). Expectations are confirmed before starting.',
    s3:'Warranty',
    p3:'We provide warranty on all services under the terms shared at handover. Warranty does not cover misuse, accidents, or improper washing.',
    s4:'Content & photos',
    p4:'We may use before/after photos (without personal information) for quality and marketing, with your consent when required.'
  };

  return (
    <main className={styles.wrap} dir={dir}>
      <div className={styles.container}>
        <h1 className={styles.h1}>{c.title}</h1>
        <p className={styles.lead}>{c.lead}</p>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s1}</h2>
          <p className={styles.p}>{c.p1}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s2}</h2>
          <p className={styles.p}>{c.p2}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s3}</h2>
          <p className={styles.p}>{c.p3}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{c.s4}</h2>
          <p className={styles.p}>{c.p4}</p>
        </section>
      </div>
    </main>
  );
}
