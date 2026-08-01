import type { Metadata } from "next";
import styles from "./dataDeletion.module.css";
import { buildPageMetadata, type Lang } from "@/app/seo";

const EMAIL = "info@rodeodrive.qa";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/data-deletion",
    titleEN: "User Data Deletion",
    titleAR: "حذف بيانات المستخدم",
    descEN:
      "How to request deletion of your personal data held by Rodeo Drive Doha, what to include in your request, and which records we are legally required to keep.",
    descAR:
      "كيفية طلب حذف بياناتك الشخصية لدى روديو درايف الدوحة، وما الذي يجب تضمينه في الطلب، والسجلات التي يلزمنا القانون بالاحتفاظ بها.",
    ogImagePath: "/logo.avif",
  });
}

export default function DataDeletionPage({ params }: { params: { lang: Lang } }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  const content =
    lang === "ar"
      ? {
          title: "حذف بيانات المستخدم",
          intro:
            "إذا كنت ترغب في حذف البيانات الشخصية التي نحتفظ بها عنك في روديو درايف، يمكنك طلب ذلك في أي وقت عبر البريد الإلكتروني. توضح هذه الصفحة كيفية تقديم الطلب وما الذي يحدث بعده.",

          h1: "كيفية تقديم طلب الحذف",
          p1: `أرسل بريدًا إلكترونيًا إلى ${EMAIL} مع كتابة "طلب حذف البيانات" في خانة الموضوع.`,
          mailLabel: `مراسلتنا على ${EMAIL}`,

          h2: "المعلومات المطلوبة في الطلب",
          p2: "يرجى تضمين المعلومات التالية حتى نتمكن من تحديد سجلاتك بدقة:",
          list: [
            "الاسم الكامل",
            "رقم الهاتف أو الواتساب",
            "عنوان البريد الإلكتروني",
            "وصف البيانات المطلوب حذفها",
          ],

          h3: "التحقق من الهوية",
          p3:
            "حمايةً لخصوصيتك، قد نطلب منك التحقق من هويتك قبل تنفيذ الطلب، وذلك للتأكد من أن الطلب صادر عن صاحب البيانات فعليًا. قد يشمل ذلك تأكيد تفاصيل الحجز أو الخدمة السابقة، أو التواصل معك عبر رقم الهاتف أو البريد الإلكتروني المسجل لدينا. لا يتم تنفيذ الحذف قبل اكتمال هذا التحقق.",

          h4: "البيانات التي قد نحتفظ بها",
          p4:
            "قد نحتفظ ببعض السجلات التي يلزمنا القانون بحفظها، مثل السجلات المحاسبية والضريبية وسجلات المعاملات والفواتير، وذلك للمدة التي تفرضها الأنظمة المعمول بها في دولة قطر. تُحفظ هذه السجلات لأغراض الامتثال القانوني فقط ولا تُستخدم في التسويق أو الإعلانات أو أي تواصل تجاري بعد تنفيذ طلب الحذف.",

          h5: "مدة المعالجة",
          p5:
            "نقوم بمعالجة طلبات الحذف المكتملة خلال 30 يومًا من تأكيد هويتك، ونرسل إليك تأكيدًا بالبريد الإلكتروني عند اكتمال التنفيذ.",

          updated: "آخر تحديث: 1 أغسطس 2026",
        }
      : {
          title: "User Data Deletion",
          intro:
            "If you would like the personal data we hold about you at Rodeo Drive to be deleted, you can request this at any time by email. This page explains how to submit your request and what happens next.",

          h1: "How to request deletion",
          p1: `Send an email to ${EMAIL} with "Data Deletion Request" in the subject line.`,
          mailLabel: `Email us at ${EMAIL}`,

          h2: "Information to include",
          p2: "Please include the following details so we can locate your records accurately:",
          list: [
            "Full name",
            "Phone or WhatsApp number",
            "Email address",
            "Description of the data you want deleted",
          ],

          h3: "Identity verification",
          p3:
            "To protect your privacy, we may ask you to verify your identity before we action the request, so we can confirm it genuinely comes from the person the data belongs to. This may involve confirming details of a previous booking or service, or contacting you on the phone number or email address we already hold. No deletion is carried out until this verification is complete.",

          h4: "Data we may retain",
          p4:
            "We may keep certain records that we are legally required to retain, such as accounting, tax, transaction, and invoicing records, for the period required by applicable law in Qatar. These records are kept solely for legal compliance and are not used for marketing, advertising, or any commercial contact after your deletion request has been actioned.",

          h5: "Processing time",
          p5:
            "We process complete deletion requests within 30 days of verifying your identity, and we send you an email confirmation once the deletion has been completed.",

          updated: "Last updated: 1 August 2026",
        };

  return (
    <main className={styles.wrap} dir={dir}>
      <div className={styles.container}>
        <h1 className={styles.h1}>{content.title}</h1>
        <p className={styles.lead}>{content.intro}</p>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h1}</h2>
          <p className={styles.p}>{content.p1}</p>
          <div className={styles.mailRow}>
            <a
              className={styles.mailLink}
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Data Deletion Request")}`}
              dir="ltr"
            >
              {content.mailLabel}
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h2}</h2>
          <p className={styles.p}>{content.p2}</p>
          <ul className={styles.ul} style={{ marginTop: 12 }}>
            {content.list.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h3}</h2>
          <p className={styles.p}>{content.p3}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h4}</h2>
          <p className={styles.p}>{content.p4}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{content.h5}</h2>
          <p className={styles.p}>{content.p5}</p>
        </section>

        <p className={styles.updated}>{content.updated}</p>
      </div>
    </main>
  );
}
