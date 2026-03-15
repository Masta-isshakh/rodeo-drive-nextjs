export type AreaLang = "en" | "ar";

export type AreaTestimonial = {
  quote: Record<AreaLang, string>;
  source: Record<AreaLang, string>;
};

export type AreaFaq = {
  q: Record<AreaLang, string>;
  a: Record<AreaLang, string>;
};

export type ServiceArea = {
  slug: "doha" | "lusail";
  name: Record<AreaLang, string>;
  heroTitle: Record<AreaLang, string>;
  heroSubtitle: Record<AreaLang, string>;
  heroImage: string;
  mapUrl: string;
  routeHint: Record<AreaLang, string>;
  gallery: Array<{
    src: string;
    alt: Record<AreaLang, string>;
    caption: Record<AreaLang, string>;
  }>;
  highlights: Record<AreaLang, string[]>;
  testimonials: AreaTestimonial[];
  faqs: AreaFaq[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "doha",
    name: { en: "Doha", ar: "الدوحة" },
    heroTitle: {
      en: "Car Detailing, PPF, Tint and Ceramic Services in Doha",
      ar: "خدمات تفصيل السيارات وPPF والتظليل والسيراميك في الدوحة",
    },
    heroSubtitle: {
      en: "Premium protection packages for daily city driving, Corniche routes, and high-mileage business use across Doha.",
      ar: "باقات حماية فاخرة مناسبة للقيادة اليومية داخل المدينة وطريق الكورنيش والاستخدام المكثف في أنحاء الدوحة.",
    },
    heroImage: "/city.avif",
    mapUrl: "https://maps.app.goo.gl/ieCJzCSYdFnR946h6",
    routeHint: {
      en: "Main service access from West Bay, The Pearl, Al Sadd, and Airport Road.",
      ar: "الوصول للخدمة متاح بسهولة من الخليج الغربي واللؤلؤة والسد وطريق المطار.",
    },
    gallery: [
      {
        src: "/before.avif",
        alt: {
          en: "Before detailing condition for Doha daily-use vehicle",
          ar: "حالة السيارة قبل التفصيل لسيارة استخدام يومي في الدوحة",
        },
        caption: {
          en: "Before: heavy dust buildup and swirl marks from weekly commuting.",
          ar: "قبل: تراكم غبار واضح وخدوش دائرية نتيجة التنقل الأسبوعي.",
        },
      },
      {
        src: "/after.avif",
        alt: {
          en: "After detailing and paint protection result in Doha",
          ar: "نتيجة السيارة بعد التفصيل والحماية في الدوحة",
        },
        caption: {
          en: "After: corrected finish with cleaner reflections and protected surfaces.",
          ar: "بعد: تشطيب مصحح بوضوح ولمعة أنظف مع حماية أفضل للأسطح.",
        },
      },
      {
        src: "/ppf.avif",
        alt: {
          en: "PPF installation for front impact zones in Doha",
          ar: "تركيب PPF لمناطق الصدمات الأمامية في الدوحة",
        },
        caption: {
          en: "PPF setup for high-impact city/highway transition driving.",
          ar: "تطبيق PPF مناسب لقيادة المدينة والانتقال للطرق السريعة.",
        },
      },
    ],
    highlights: {
      en: [
        "High-intent packages for PPF, nano-ceramic tint, coating, and paint correction.",
        "Vehicle inspection workflow with clear inclusions and aftercare guidance.",
        "WhatsApp-first booking and quick estimate response for Doha customers.",
      ],
      ar: [
        "باقات متخصصة في PPF وتظليل النانو والسيراميك وتصحيح الطلاء.",
        "خطوات فحص واضحة مع تفاصيل دقيقة لما يشمله العمل وتعليمات العناية.",
        "حجز سريع عبر واتساب مع استجابة سريعة للتسعير لعملاء الدوحة.",
      ],
    },
    testimonials: [
      {
        quote: {
          en: "The PPF fitment was precise and the handover explained exactly how to maintain the finish in Doha weather.",
          ar: "تركيب الـ PPF كان دقيقًا جدًا، والتسليم شمل شرحًا واضحًا للحفاظ على النتيجة مع أجواء الدوحة.",
        },
        source: { en: "Client from West Bay", ar: "عميل من الخليج الغربي" },
      },
      {
        quote: {
          en: "Our family SUV heat comfort improved after tint and coating, and the team followed up with aftercare tips.",
          ar: "راحة الحرارة في السيارة العائلية تحسنت بعد التظليل والحماية، والفريق تابع معنا بتعليمات العناية.",
        },
        source: { en: "Client from Al Sadd", ar: "عميل من السد" },
      },
    ],
    faqs: [
      {
        q: {
          en: "Do you handle full-body PPF for luxury sedans in Doha?",
          ar: "هل توفرون PPF كامل للسيارات الفاخرة في الدوحة؟",
        },
        a: {
          en: "Yes. We inspect panel condition first, then confirm coverage scope, timeline, and warranty details.",
          ar: "نعم. نبدأ بفحص حالة الأجزاء ثم نؤكد نطاق التغطية والمدة وتفاصيل الضمان.",
        },
      },
      {
        q: {
          en: "Can I combine detailing, coating, and tint in one booking?",
          ar: "هل يمكن جمع التفصيل والسيراميك والتظليل في حجز واحد؟",
        },
        a: {
          en: "Yes. Combined packages are planned in sequence to keep quality and curing standards consistent.",
          ar: "نعم. يتم ترتيب الباقة المركبة بتسلسل تنفيذي يحافظ على الجودة ومعايير التثبيت.",
        },
      },
      {
        q: {
          en: "How fast is pickup and drop planning inside Doha?",
          ar: "ما سرعة ترتيب الاستلام والتسليم داخل الدوحة؟",
        },
        a: {
          en: "Availability depends on scope and schedule. Contact us on WhatsApp for same-day planning windows.",
          ar: "يعتمد ذلك على نطاق الخدمة والجدول. تواصل عبر واتساب لمعرفة مواعيد التخطيط المتاحة في نفس اليوم.",
        },
      },
    ],
  },
  {
    slug: "lusail",
    name: { en: "Lusail", ar: "لوسيل" },
    heroTitle: {
      en: "Premium Car Protection Services for Lusail Drivers",
      ar: "خدمات حماية سيارات فاخرة لسائقي لوسيل",
    },
    heroSubtitle: {
      en: "Designed for high-speed corridor driving, new-vehicle ownership, and long-term appearance care in Lusail.",
      ar: "مصممة للقيادة على المحاور السريعة والملكية الجديدة والحفاظ طويل المدى على مظهر السيارة في لوسيل.",
    },
    heroImage: "/lamborghini.avif",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lusail+Qatar",
    routeHint: {
      en: "Convenient for Lusail Marina, Fox Hills, and Energy City routes.",
      ar: "مناسبة للوصول من مارينا لوسيل وفوكس هيلز وطرق مدينة الطاقة.",
    },
    gallery: [
      {
        src: "/before2.avif",
        alt: {
          en: "Before correction for Lusail highway-driven vehicle",
          ar: "حالة قبل التصحيح لسيارة مستخدمة على طرق لوسيل السريعة",
        },
        caption: {
          en: "Before: visible road wear and micro-marring on dark paint.",
          ar: "قبل: آثار استخدام طريق واضحة وخدوش سطحية دقيقة على الطلاء الداكن.",
        },
      },
      {
        src: "/after2.avif",
        alt: {
          en: "After correction and coating result for Lusail client",
          ar: "نتيجة بعد التصحيح والحماية لعميل من لوسيل",
        },
        caption: {
          en: "After: refined gloss and easier maintenance protection layer.",
          ar: "بعد: لمعان محسّن وطبقة حماية تسهل الصيانة الدورية.",
        },
      },
      {
        src: "/nano-tint.avif",
        alt: {
          en: "Nano-ceramic tint setup for Lusail heat comfort",
          ar: "تطبيق تظليل نانو سيراميك لراحة حرارة أفضل في لوسيل",
        },
        caption: {
          en: "Tint + comfort package for glare control and daily visibility.",
          ar: "باقة تظليل وراحة لتقليل الوهج وتحسين الرؤية اليومية.",
        },
      },
    ],
    highlights: {
      en: [
        "Protection plans built for mixed city/highway routes common in Lusail.",
        "Premium finish standards with inspection checkpoints and photo proof.",
        "Clear package scope and maintenance recommendations to protect resale value.",
      ],
      ar: [
        "خطط حماية مناسبة لمسارات المدينة والطرق السريعة الشائعة في لوسيل.",
        "معايير تشطيب فاخرة مع نقاط فحص واضحة وإثبات بصري للنتيجة.",
        "تحديد دقيق لنطاق الباقة وتعليمات صيانة للحفاظ على قيمة إعادة البيع.",
      ],
    },
    testimonials: [
      {
        quote: {
          en: "The tint clarity at night stayed excellent, and heat reduction was noticeable on Lusail express routes.",
          ar: "وضوح التظليل ليلًا ممتاز، وتقليل الحرارة كان واضحًا على طرق لوسيل السريعة.",
        },
        source: { en: "Client from Lusail Marina", ar: "عميل من مارينا لوسيل" },
      },
      {
        quote: {
          en: "I booked coating plus correction and got a detailed before/after explanation with practical aftercare.",
          ar: "حجزت تصحيح طلاء مع حماية، واستلمت شرحًا مفصلًا قبل/بعد مع تعليمات عناية عملية.",
        },
        source: { en: "Client from Fox Hills", ar: "عميل من فوكس هيلز" },
      },
    ],
    faqs: [
      {
        q: {
          en: "Which package suits a brand-new car in Lusail?",
          ar: "أي باقة تناسب سيارة جديدة في لوسيل؟",
        },
        a: {
          en: "Most owners choose front-impact PPF plus coating, then expand coverage based on use and parking exposure.",
          ar: "غالبًا يختار الملاك PPF لمناطق الصدمات مع حماية سيراميك، ثم يتم توسيع التغطية حسب الاستخدام ومكان الوقوف.",
        },
      },
      {
        q: {
          en: "Do you provide guidance for maintaining finish after delivery?",
          ar: "هل توفرون إرشادات للحفاظ على النتيجة بعد التسليم؟",
        },
        a: {
          en: "Yes. Every delivery includes practical washing intervals and safe product recommendations.",
          ar: "نعم. كل تسليم يتضمن فترات غسيل مقترحة وتوصيات آمنة للمنتجات المناسبة.",
        },
      },
      {
        q: {
          en: "Can I request fast booking from Lusail with WhatsApp photos?",
          ar: "هل يمكن طلب حجز سريع من لوسيل عبر صور واتساب؟",
        },
        a: {
          en: "Yes. Share vehicle photos and target service to receive a fast estimate and scheduling options.",
          ar: "نعم. أرسل صور السيارة والخدمة المطلوبة للحصول على تقدير سريع وخيارات مواعيد مناسبة.",
        },
      },
    ],
  },
];

export function getServiceArea(slug: string) {
  return SERVICE_AREAS.find((item) => item.slug === slug) ?? null;
}
