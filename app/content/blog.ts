export type BlogLang = "en" | "ar";

export type BlogPost = {
  slug: string;
  category: "ppf" | "ceramic" | "tint" | "detailing";
  title: Record<BlogLang, string>;
  description: Record<BlogLang, string>;
  publishedAt: string;
  readTimeMinutes: number;
  sections: Array<{
    heading: Record<BlogLang, string>;
    paragraphs: Record<BlogLang, string[]>;
    bullets?: Record<BlogLang, string[]>;
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "full-body-vs-front-end-ppf-qatar",
    category: "ppf",
    publishedAt: "2026-03-15",
    readTimeMinutes: 6,
    title: {
      en: "Full Body vs Front-End PPF in Qatar: Which One Should You Choose?",
      ar: "PPF كامل أم PPF أمامي في قطر: أي خيار يناسبك؟",
    },
    description: {
      en: "A practical Doha buyer guide comparing coverage, risk zones, and budget trade-offs for PPF.",
      ar: "دليل عملي في الدوحة يقارن التغطية ومناطق الخطر والميزانية لاختيار نوع PPF المناسب.",
    },
    sections: [
      {
        heading: { en: "Where damage usually happens", ar: "أين يحدث الضرر غالبًا" },
        paragraphs: {
          en: [
            "In Qatar, the highest impact zones are the front bumper, hood edge, mirrors, and lower doors where sand and road debris accumulate.",
            "If your driving is mostly city and short trips, front-end PPF can cover most risk for a lower entry budget.",
          ],
          ar: [
            "في قطر، أكثر مناطق الضرر تكون الصدام الأمامي وحافة غطاء المحرك والمرايا وأسفل الأبواب بسبب الرمال وبقايا الطريق.",
            "إذا كان استخدامك داخل المدينة ومشاوير قصيرة، فـ PPF الأمامي يغطي أغلب المخاطر بميزانية أقل.",
          ],
        },
      },
      {
        heading: { en: "When full-body PPF is worth it", ar: "متى يكون PPF الكامل هو الأفضل" },
        paragraphs: {
          en: [
            "Full body PPF is ideal for new vehicles, premium paint finishes, or owners planning long-term ownership.",
            "It offers consistent protection across all painted panels and keeps resale presentation cleaner over time.",
          ],
          ar: [
            "PPF الكامل مناسب للسيارات الجديدة أو الألوان الخاصة أو من يخطط للاحتفاظ بالسيارة مدة طويلة.",
            "يوفر حماية متجانسة لكل أجزاء الطلاء ويحافظ على مظهر أفضل عند إعادة البيع.",
          ],
        },
      },
    ],
  },
  {
    slug: "ppf-maintenance-dusty-sandy-conditions",
    category: "ppf",
    publishedAt: "2026-03-15",
    readTimeMinutes: 5,
    title: {
      en: "PPF Maintenance in Dusty and Sandy Conditions",
      ar: "صيانة PPF في أجواء الغبار والرمال",
    },
    description: {
      en: "Simple wash routines and do's/don'ts to protect film clarity and edge health in Doha.",
      ar: "روتين غسيل بسيط وما يجب فعله وتجنبه للحفاظ على وضوح الفيلم وحواف التركيب في الدوحة.",
    },
    sections: [
      {
        heading: { en: "First-week care matters", ar: "العناية في الأسبوع الأول مهمة" },
        paragraphs: {
          en: [
            "Follow curing instructions exactly after installation. Early pressure washing or harsh chemicals can reduce finish quality.",
          ],
          ar: [
            "اتبع تعليمات التثبيت بدقة بعد التركيب. الغسيل القوي أو المواد الكيميائية في البداية قد يؤثران على جودة النتيجة.",
          ],
        },
        bullets: {
          en: [
            "Use pH-neutral shampoo",
            "Avoid abrasive mitts and automatic brushes",
            "Rinse sand before touching the surface",
          ],
          ar: [
            "استخدم شامبو متعادل الحموضة",
            "تجنب الفُرش الخشنة والغسيل الآلي",
            "اشطف الرمال أولًا قبل لمس السطح",
          ],
        },
      },
    ],
  },
  {
    slug: "gloss-vs-matte-vs-color-ppf",
    category: "ppf",
    publishedAt: "2026-03-15",
    readTimeMinutes: 6,
    title: {
      en: "Gloss vs Matte vs Color PPF: Visual and Practical Differences",
      ar: "PPF لامع أم مطفي أم ملوّن: الفروقات العملية والشكلية",
    },
    description: {
      en: "Compare appearance goals, maintenance profiles, and suitability for your daily driving style.",
      ar: "مقارنة بين أهداف المظهر ومتطلبات العناية ومدى مناسبة كل نوع لقيادتك اليومية.",
    },
    sections: [
      {
        heading: { en: "Choose by lifestyle, not trend", ar: "اختر حسب الاستخدام وليس الموضة" },
        paragraphs: {
          en: [
            "Gloss keeps the original shine, matte delivers a stealth look, and color PPF adds a full visual change while preserving original paint underneath.",
            "Your parking habits, wash routine, and how often you drive highways should decide the final option.",
          ],
          ar: [
            "اللامع يحافظ على بريق الطلاء الأصلي، والمطفي يعطي شكلًا رياضيًا هادئًا، والملوّن يغير الشكل بالكامل مع الحفاظ على الطلاء الأصلي أسفله.",
            "اختيارك النهائي يجب أن يعتمد على أسلوب ركن السيارة وطريقة الغسيل وكثافة القيادة على الطرق السريعة.",
          ],
        },
      },
    ],
  },
  {
    slug: "ceramic-coating-vs-wax-vs-sealant-gcc",
    category: "ceramic",
    publishedAt: "2026-03-15",
    readTimeMinutes: 7,
    title: {
      en: "Ceramic Coating vs Wax vs Sealant in GCC Climate",
      ar: "السيراميك مقابل الواكس والسيالنت في مناخ الخليج",
    },
    description: {
      en: "A realistic comparison of durability, hydrophobic performance, and maintenance effort in hot climates.",
      ar: "مقارنة واقعية للمتانة وفعالية طرد الماء ومتطلبات العناية في المناخ الحار.",
    },
    sections: [
      {
        heading: { en: "Expected lifespan in real use", ar: "العمر المتوقع في الاستخدام الحقيقي" },
        paragraphs: {
          en: [
            "Wax can improve shine quickly but typically needs frequent reapplication. Sealants last longer, while ceramic coatings are built for longer-term protection and easier maintenance.",
          ],
          ar: [
            "الواكس يمنح لمعانًا سريعًا لكنه يحتاج تجديدًا متكررًا غالبًا. السيالنت يدوم أكثر، بينما السيراميك مصمم لحماية أطول وعناية أسهل.",
          ],
        },
      },
    ],
  },
  {
    slug: "does-ceramic-replace-ppf",
    category: "ceramic",
    publishedAt: "2026-03-15",
    readTimeMinutes: 4,
    title: {
      en: "Does Ceramic Coating Replace PPF?",
      ar: "هل السيراميك يغني عن PPF؟",
    },
    description: {
      en: "The short answer is no. Learn how each layer solves a different protection problem.",
      ar: "الإجابة المختصرة: لا. تعرّف كيف يحل كل نظام مشكلة حماية مختلفة.",
    },
    sections: [
      {
        heading: { en: "Impact protection vs surface protection", ar: "حماية من الصدمات مقابل حماية السطح" },
        paragraphs: {
          en: [
            "PPF is for impact and abrasion resistance, especially on front-end zones. Ceramic coating is excellent for hydrophobic behavior, gloss retention, and easier cleaning.",
            "For many owners, the best setup is PPF on high-risk panels and ceramic coating over remaining painted surfaces.",
          ],
          ar: [
            "PPF مخصص لمقاومة الضربات والاحتكاك خصوصًا في المناطق الأمامية. السيراميك ممتاز لطرد الماء والحفاظ على اللمعة وتسهيل التنظيف.",
            "بالنسبة لكثير من الملاك، أفضل تركيبة هي PPF للمناطق عالية المخاطر مع سيراميك لباقي أجزاء الطلاء.",
          ],
        },
      },
    ],
  },
  {
    slug: "how-to-choose-nano-ceramic-tint",
    category: "tint",
    publishedAt: "2026-03-15",
    readTimeMinutes: 6,
    title: {
      en: "How to Choose Nano-Ceramic Tint in Doha",
      ar: "كيف تختار تظليل نانو سيراميك في الدوحة",
    },
    description: {
      en: "Understand heat rejection, optical clarity, privacy levels, and legal awareness before booking tint.",
      ar: "افهم رفض الحرارة ووضوح الرؤية ومستوى الخصوصية والالتزام بالنظام قبل حجز التظليل.",
    },
    sections: [
      {
        heading: { en: "Spec terms that matter", ar: "المواصفات التي تهم فعلًا" },
        paragraphs: {
          en: [
            "Focus on real performance outcomes: cabin comfort, glare control, and daily visibility. Ask for practical recommendations based on your route, parking exposure, and car glass type.",
          ],
          ar: [
            "ركّز على النتيجة الفعلية: راحة المقصورة وتقليل الوهج ووضوح الرؤية يوميًا. اطلب توصية عملية حسب طريقك ومكان الوقوف ونوع زجاج السيارة.",
          ],
        },
      },
    ],
  },
  {
    slug: "common-tint-mistakes-bubbling-hazing",
    category: "tint",
    publishedAt: "2026-03-15",
    readTimeMinutes: 5,
    title: {
      en: "Common Tint Mistakes: Bubbling, Hazing, and Purple Shift",
      ar: "أخطاء التظليل الشائعة: الفقاعات والضبابية وتغيّر اللون",
    },
    description: {
      en: "What causes early tint failure and how to avoid it with better prep, installation, and aftercare.",
      ar: "ما أسباب فشل التظليل المبكر وكيف تتجنبها عبر التحضير والتركيب والعناية الصحيحة.",
    },
    sections: [
      {
        heading: { en: "Most issues are process-related", ar: "معظم المشاكل سببها التنفيذ" },
        paragraphs: {
          en: [
            "Contaminated glass, rushed edge finishing, or incorrect curing care can create visible defects. Professional dust control and strict finishing checks are critical.",
          ],
          ar: [
            "الزجاج غير المجهز جيدًا أو استعجال تشطيب الحواف أو تجاهل تعليمات التثبيت قد يسبب عيوبًا واضحة. التحكم بالغبار وفحص التشطيب أساس النجاح.",
          ],
        },
      },
    ],
  },
  {
    slug: "ppf-warranty-terms-explained-qatar",
    category: "ppf",
    publishedAt: "2026-03-15",
    readTimeMinutes: 5,
    title: {
      en: "PPF Warranty Terms Explained for Qatar Drivers",
      ar: "شرح شروط ضمان PPF لسائقي قطر",
    },
    description: {
      en: "Understand what is usually covered, what is excluded, and which care habits protect your warranty eligibility.",
      ar: "افهم ما يشمله الضمان عادة وما يُستثنى منه والعادات التي تساعدك على الحفاظ على أهلية الضمان.",
    },
    sections: [
      {
        heading: { en: "Coverage usually depends on process and care", ar: "تغطية الضمان ترتبط بالتنفيذ والعناية" },
        paragraphs: {
          en: [
            "Warranty protection generally applies when installation follows approved process and aftercare guidance is respected.",
            "Always ask for a written explanation of covered defects, claim flow, and maintenance responsibilities at delivery.",
          ],
          ar: [
            "غالبًا يسري الضمان عندما يتم التركيب وفق إجراءات صحيحة مع الالتزام بتعليمات العناية بعد التسليم.",
            "اطلب دائمًا شرحًا مكتوبًا لما يشمله الضمان وآلية المطالبة ومسؤوليات الصيانة عند التسليم.",
          ],
        },
      },
    ],
  },
  {
    slug: "ceramic-aftercare-safe-shampoos-wash-intervals",
    category: "ceramic",
    publishedAt: "2026-03-15",
    readTimeMinutes: 5,
    title: {
      en: "Ceramic Aftercare: Safe Shampoos, Wash Intervals, and Swirl Prevention",
      ar: "عناية السيراميك بعد التركيب: شامبو آمن وفترات غسيل ومنع الخدوش الدائرية",
    },
    description: {
      en: "A simple aftercare routine to preserve hydrophobic behavior and gloss in Qatar weather.",
      ar: "روتين عناية بسيط للحفاظ على الطرد المائي واللمعة في أجواء قطر.",
    },
    sections: [
      {
        heading: { en: "Consistency beats aggressive cleaning", ar: "الانتظام أفضل من التنظيف القاسي" },
        paragraphs: {
          en: [
            "Use safe pH-balanced products and regular gentle washing instead of infrequent aggressive cleaning cycles.",
            "This keeps the coated surface cleaner, protects gloss, and lowers the risk of fresh swirl marks.",
          ],
          ar: [
            "استخدم منتجات متوازنة الحموضة مع غسيل دوري لطيف بدل دورات تنظيف قوية ومتباعدة.",
            "هذا يحافظ على نظافة السطح المعالج ولمعانه ويقلل احتمال ظهور خدوش دائرية جديدة.",
          ],
        },
      },
    ],
  },
  {
    slug: "swirl-marks-in-qatar-prevention-guide",
    category: "detailing",
    publishedAt: "2026-03-15",
    readTimeMinutes: 6,
    title: {
      en: "Swirl Marks in Qatar: Why They Happen and How to Prevent Them",
      ar: "الخدوش الدائرية في قطر: لماذا تحدث وكيف تتجنبها",
    },
    description: {
      en: "Learn the common wash mistakes behind swirl marks and a safer maintenance workflow for long-term finish quality.",
      ar: "تعرّف على أخطاء الغسيل التي تسبب الخدوش الدائرية وطريقة صيانة أكثر أمانًا للحفاظ على التشطيب طويل المدى.",
    },
    sections: [
      {
        heading: { en: "Dust + friction is the core problem", ar: "الغبار مع الاحتكاك هو السبب الأساسي" },
        paragraphs: {
          en: [
            "Most swirl marks appear when dusty paint is touched before proper rinse and lubrication.",
            "A safer routine starts with pre-rinse, then soft-contact washing tools and clean drying methods.",
          ],
          ar: [
            "معظم الخدوش الدائرية تظهر عند لمس سطح مغبر قبل الشطف والتشحيم الكافيين.",
            "الروتين الآمن يبدأ بشطف مبدئي ثم استخدام أدوات غسيل ناعمة وتجفيف نظيف.",
          ],
        },
      },
    ],
  },
  {
    slug: "paint-correction-what-it-removes",
    category: "detailing",
    publishedAt: "2026-03-15",
    readTimeMinutes: 6,
    title: {
      en: "Paint Correction: What It Removes and What It Cannot",
      ar: "تصحيح الطلاء: ما الذي يزيله وما الذي لا يستطيع إصلاحه",
    },
    description: {
      en: "Set realistic expectations for swirl removal, oxidation recovery, and when repainting is still required.",
      ar: "ضع توقعات واقعية لإزالة الخدوش الدائرية واستعادة اللمعة ومتى يبقى الدهان هو الحل.",
    },
    sections: [
      {
        heading: { en: "Set a measurable correction goal", ar: "حدّد هدف تصحيح واضح" },
        paragraphs: {
          en: [
            "Paint correction can reduce swirl marks, haze, and many surface defects. Deep chips and through-clear-coat damage may require bodywork or repainting.",
            "A proper inspection under lighting before work starts helps align expectations and final results.",
          ],
          ar: [
            "تصحيح الطلاء يمكنه تقليل الخدوش الدائرية والضبابية وكثير من العيوب السطحية. أما الضربات العميقة أو الضرر المتجاوز للكلير كوت فقد يحتاج صيانة دهان.",
            "الفحص تحت الإضاءة قبل البدء مهم لمطابقة التوقعات مع النتيجة النهائية.",
          ],
        },
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | null {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}
