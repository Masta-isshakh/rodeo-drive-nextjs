import type { Metadata } from "next";

import ProtectionGuideClient, {
  type GuideSection,
} from "@/app/components/ServicesHighlight/ServiceHighlightClient";
import { buildPageMetadata, type Lang } from "@/app/seo";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang = params.lang === "ar" ? "ar" : "en";

  return buildPageMetadata({
    lang,
    path: "/protection-guide",
    titleEN: "Protection Guide",
    titleAR: "دليل حماية السيارة",
    descEN:
      "Learn why PPF, Extreme Windshield Protection, nano-ceramic tint, detailing & nano coating, and peelable paint matter in Qatar—benefits, process, and how Rodeo Drive delivers premium results.",
    descAR:
      "اعرف لماذا تحتاج PPF وحماية الزجاج الأمامي Extreme وتظليل نانو سيراميك والتفصيل + النانو والدهان القابل للإزالة في قطر—الفوائد، خطوات التنفيذ، ولماذا روديو درايف هو الخيار الأفضل.",
    keywordsEN: [
      "PPF Doha",
      "paint protection film Qatar",
      "windshield protection Doha",
      "Extreme windshield Qatar",
      "nano ceramic tint Doha",
      "window tint Qatar",
      "detailing Doha",
      "nano coating Doha",
      "peelable paint Qatar",
      "car protection Doha",
    ],
    keywordsAR: [
      "PPF الدوحة",
      "فيلم حماية الطلاء قطر",
      "حماية الزجاج الأمامي الدوحة",
      "Extreme حماية الزجاج قطر",
      "تظليل نانو سيراميك الدوحة",
      "تظليل سيارات قطر",
      "تفصيل سيارات الدوحة",
      "نانو سيراميك قطر",
      "دهان قابل للإزالة قطر",
      "حماية السيارة الدوحة",
    ],
    ogImagePath: "/logo.avif",
  });
}

const SECTIONS: GuideSection[] = [
  {
    key: "ppf",
    tone: "silver",
    image: "/ppf.avif",
    imageAltEN: "Paint Protection Film installation in Doha",
    imageAltAR: "تركيب فيلم حماية الطلاء PPF في الدوحة",
    titleEN: "Why Install PPF (Paint Protection Film)?",
    titleAR: "لماذا تركّب PPF (فيلم حماية الطلاء)؟",
    leadEN:
      "Qatar roads, sand abrasion, and daily parking exposure can damage paint fast. PPF is the closest thing to an invisible shield—keeping your car looking new and protecting resale value.",
    leadAR:
      "طرق قطر، خدوش الرمال، والتعرض اليومي للشمس والمواقف قد يضر الطلاء بسرعة. الـ PPF هو أقرب شيء لدرع غير مرئي يحافظ على السيارة جديدة ويرفع قيمة إعادة البيع.",
    benefitsEN: [
      "Stops stone chips & road rash on high-impact areas",
      "Reduces swirl marks and light scratches",
      "Helps maintain a deep, clean finish for years",
      "Easier washing—dirt releases faster",
      "Protects resale value with a cleaner paint history",
    ],
    benefitsAR: [
      "يمنع ضربات الحصى وخدوش الطريق في المناطق الأكثر تعرضًا",
      "يقلل خدوش التلميع والخدوش السطحية",
      "يحافظ على لمعة ونظافة الطلاء لفترة طويلة",
      "يسهل الغسيل—الأوساخ تنفك بسرعة",
      "يحمي قيمة إعادة البيع بسجل طلاء أنظف",
    ],
    processEN: [
      "Inspection & coverage recommendation (full / front-end / custom zones)",
      "Safe wash + decontamination, then paint prep where needed",
      "Precision PPF installation with alignment and wrapped edges where possible",
      "Heat-set finishing, trimming control, and panel-by-panel QC under lighting",
      "Delivery briefing + aftercare + warranty guidance",
    ],
    processAR: [
      "فحص وتحديد التغطية المناسبة (كامل / أمامي / مناطق مختارة)",
      "غسيل آمن + إزالة شوائب ثم تجهيز الطلاء عند الحاجة",
      "تركيب PPF بدقة مع محاذاة وحواف ملفوفة قدر الإمكان",
      "تشطيب بالحرارة وتحكم بالقص وفحص جودة تحت الإضاءة لكل جزء",
      "تسليم + تعليمات عناية + توضيح الضمان",
    ],
  },
  {
    key: "windshield",
    tone: "burgundy",
    image: "/windshield-hero.avif",
    imageAltEN: "Windshield protection film applied on luxury car",
    imageAltAR: "تركيب فيلم حماية للزجاج الأمامي على سيارة فاخرة",
    titleEN: "Why Install Extreme Windshield Protection?",
    titleAR: "لماذا تركّب حماية الزجاج الأمامي Extreme؟",
    leadEN:
      "Windshields are expensive and vulnerable—chips can turn into cracks quickly. Extreme windshield film adds a tough protective layer designed for highway debris and harsh conditions.",
    leadAR:
      "الزجاج الأمامي مكلف وحساس—ضربة صغيرة قد تتحول إلى كسر بسرعة. فيلم Extreme يضيف طبقة حماية قوية مناسبة للحصى والظروف القاسية.",
    benefitsEN: [
      "Helps prevent chips from turning into cracks",
      "Adds impact resistance on highways",
      "Improves safety by reducing glass shatter risk",
      "Preserves optical clarity with professional installation",
      "Protects your wallet from frequent replacements",
    ],
    benefitsAR: [
      "يقلل احتمال تحول الضربات إلى تشققات",
      "يزيد مقاومة الصدمات على الطرق السريعة",
      "يعزز الأمان بتقليل خطر تفتت الزجاج",
      "يحافظ على وضوح الرؤية عند التركيب الاحترافي",
      "يوفر تكلفة التبديل المتكرر",
    ],
    processEN: [
      "Glass inspection and cleaning (remove residues and contaminants)",
      "Precision film sizing and controlled installation",
      "Edge finishing + bubble control + clarity checks",
      "Curing guidance and post-install review",
    ],
    processAR: [
      "فحص الزجاج وتنظيفه (إزالة بقايا وشوائب)",
      "قص دقيق وتركيب متحكم فيه",
      "تشطيب الحواف والتحكم بالفقاعات وفحص الوضوح",
      "تعليمات التثبيت ومراجعة بعد التركيب",
    ],
  },
  {
    key: "tint",
    tone: "silver",
    image: "/solar.avif",
    imageAltEN: "Nano-ceramic window tint installed on SUV in Doha",
    imageAltAR: "تركيب تظليل نانو سيراميك على سيارة في الدوحة",
    titleEN: "Why Install Nano-Ceramic Solar Window Tint?",
    titleAR: "لماذا تركّب تظليل سولار نانو سيراميك؟",
    leadEN:
      "In Qatar’s heat, tint is not a luxury—it’s comfort and protection. Nano-ceramic films reduce heat, glare, and UV exposure while keeping visibility clean.",
    leadAR:
      "في حرارة قطر، التظليل ليس رفاهية—هو راحة وحماية. أفلام النانو السيراميك تقلل الحرارة والوهج والأشعة فوق البنفسجية مع الحفاظ على رؤية واضحة.",
    benefitsEN: [
      "Significant heat reduction for cabin comfort",
      "UV protection to prevent fading/cracking of interior",
      "Glare reduction for safer driving",
      "Cleaner look with premium clarity",
      "Less AC load = better comfort and efficiency",
    ],
    benefitsAR: [
      "تقليل حرارة ملحوظ لراحة المقصورة",
      "حماية UV لتقليل بهتان وتشقق الداخلية",
      "تقليل الوهج لقيادة أكثر أمانًا",
      "مظهر أنظف مع وضوح عالي",
      "تخفيف ضغط المكيف = راحة وكفاءة أفضل",
    ],
    processEN: [
      "Tint consultation (shade + legality preferences) and glass inspection",
      "Deep glass prep + dust-free installation techniques",
      "Edge finishing + alignment for a factory-clean look",
      "Final inspection under light + care instructions",
    ],
    processAR: [
      "استشارة التظليل (النسبة + الأنظمة) وفحص الزجاج",
      "تجهيز عميق للزجاج + تركيب بأسلوب يقلل الغبار",
      "محاذاة وتشطيب حواف لمظهر نظيف مثل المصنع",
      "فحص نهائي تحت الإضاءة + تعليمات العناية",
    ],
  },
  {
    key: "detailing",
    tone: "burgundy",
    image: "/ceramic.avif",
    imageAltEN: "Detailing and nano coating applied for deep gloss",
    imageAltAR: "تفصيل وطلاء نانو لتوهج عميق",
    titleEN: "Why Detailing + Nano Coating?",
    titleAR: "لماذا التفصيل + النانو؟",
    leadEN:
      "Detailing restores the car’s beauty by safely removing defects. Nano coating then locks in gloss and adds a hydrophobic layer that makes washing easier and keeps the finish cleaner.",
    leadAR:
      "التفصيل يعيد جمال السيارة بإزالة العيوب بشكل آمن. ثم يأتي النانو ليحافظ على اللمعة ويضيف طبقة طاردة للماء تسهل التنظيف وتبقي السيارة أنظف.",
    benefitsEN: [
      "Restores gloss by reducing swirls and oxidation",
      "Hydrophobic protection—water and dirt repel more easily",
      "Helps preserve paint and clear coat condition",
      "Easier maintenance wash cycles",
      "Premium showroom finish for daily driving",
    ],
    benefitsAR: [
      "يعيد اللمعة بتقليل الخدوش والأكسدة",
      "حماية طاردة للماء—الأوساخ والماء تنزلق بسهولة",
      "يحافظ على حالة الطلاء والكلير",
      "يسهل صيانة الغسيل",
      "لمسة صالون فاخرة للاستخدام اليومي",
    ],
    processEN: [
      "Safe wash + decontamination (tar/iron removal where needed)",
      "Paint correction (multi-step) based on condition and goals",
      "Panel wipe-down and surface prep for bonding",
      "Nano coating application + curing guidelines",
      "Final QC, photos, and aftercare plan",
    ],
    processAR: [
      "غسيل آمن + إزالة شوائب (قطران/حديد عند الحاجة)",
      "تصحيح طلاء متعدد الخطوات حسب الحالة والهدف",
      "تحضير السطح لضمان التصاق ممتاز",
      "تطبيق النانو + تعليمات التثبيت",
      "فحص نهائي + صور + خطة عناية",
    ],
  },
  {
    key: "peelable",
    tone: "silver",
    image: "/peelable-paint.avif",
    imageAltEN: "Peelable paint color change on luxury SUV",
    imageAltAR: "تغيير لون بطلاء قابل للإزالة على سيارة فاخرة",
    titleEN: "Why Peelable Paint (Removable Paint)?",
    titleAR: "لماذا الدهان القابل للإزالة؟",
    leadEN:
      "Want a fresh color without permanent commitment? Peelable paint gives you a high-end color change with the option to remove it later—ideal for seasonal looks or brand styling.",
    leadAR:
      "تريد لونًا جديدًا بدون تغيير دائم؟ الدهان القابل للإزالة يمنحك تغيير لون فاخر مع إمكانية الإزالة لاحقًا—مثالي للمواسم أو ستايل خاص.",
    benefitsEN: [
      "Change color while preserving original paint underneath",
      "Removable—switch styles later with less risk",
      "Adds a protective sacrificial layer against minor wear",
      "Premium finish options (matte / satin / gloss depending on system)",
      "Great for branding and stand-out appearance in Doha",
    ],
    benefitsAR: [
      "تغيير لون مع الحفاظ على الطلاء الأصلي أسفله",
      "قابل للإزالة—تغيير الستايل لاحقًا بسهولة",
      "طبقة تضحية تحمي من الاحتكاكات الخفيفة",
      "خيارات تشطيب فاخرة (مطفي/ساتان/لمعة حسب النظام)",
      "مناسب للتميز والبراندينغ في الدوحة",
    ],
    processEN: [
      "Consultation: color goals + finish selection",
      "Surface prep and masking to protect trims and edges",
      "Layer-by-layer application with controlled drying",
      "Finishing + uniformity checks under proper lighting",
      "Delivery and care guidance for long-lasting results",
    ],
    processAR: [
      "استشارة: اختيار اللون والتشطيب",
      "تحضير السطح وتغطية الأجزاء الحساسة",
      "تطبيق طبقات متتالية مع تجفيف متحكم فيه",
      "تشطيب وفحص توحيد اللون تحت إضاءة مناسبة",
      "تسليم + تعليمات عناية لنتائج طويلة",
    ],
  },
];

export default function ProtectionGuidePage({ params }: { params: { lang: string } }) {
  const lang: Lang = params.lang === "ar" ? "ar" : "en";
  return <ProtectionGuideClient lang={lang} sections={SECTIONS} />;
}
