export type Lang = 'en' | 'ar';
export type FAQ = { q: Record<Lang,string>; a: Record<Lang,string> };

export type Subservice = {
  slug: string;
  title: Record<Lang,string>;
  heroImage: string;

  /** Optional: detail-page media */
  beforeImage?: string;
  afterImage?: string;
  miniImages?: string[]; // expected: 3 images

  intro: Record<Lang,string[]>;
  bestFor: Record<Lang,string[]>;
  specs: Record<Lang,string[]>;
  included: Record<Lang,string[]>;
  process: Record<Lang,string[]>;
  timeline: Record<Lang,string>;
  aftercare: Record<Lang,string[]>;
  faqs: FAQ[];
};

export type Service = {
  slug: string;
  title: Record<Lang,string>;
  subtitle: Record<Lang,string>;
  heroImage: string;
  overview: Record<Lang,string[]>;
  subservices: Subservice[];
};

export const CATALOG: { services: Service[] } = {
  "services": [
    {
      "slug": "full-protection-ppf",
      "title": {
        "en": "Paint Protection Film (PPF)",
        "ar": "حماية الطلاء (PPF)"
      },
      "subtitle": {
        "en": "Optically clear protection against chips, scratches, and sand abrasion—built for Doha driving.",
        "ar": "حماية شفافة ضد ضربات الحصى والخدوش وخدوش الرمال—مناسبة لقيادة الدوحة."
      },
      "heroImage": "/services/full-protection-ppf/hero.svg",
      "overview": {
        "en": [
          "Optically clear protection against chips, scratches, and sand abrasion—built for Doha driving.",
          "Explore options below and book an inspection for an accurate recommendation and quote."
        ],
        "ar": [
          "حماية شفافة ضد ضربات الحصى والخدوش وخدوش الرمال—مناسبة لقيادة الدوحة.",
          "استعرض الخيارات أدناه واحجز فحصًا للحصول على توصية وعرض سعر دقيق."
        ]
      },
      "subservices": [
        {
          "slug": "full-body-ppf",
          "title": {
            "en": "Full Body PPF",
            "ar": "PPF حماية كاملة"
          },
          "heroImage": "/full-body.png",
          "intro": {
            "en": [
              "Full-vehicle coverage designed to shield every painted panel from chips, scratches, and sand abrasion—ideal for brand-new cars and long-term ownership in Qatar.",
              "Installed with precise panel alignment, wrapped edges where possible, and workshop-controlled finishing for a seamless, factory-clean look."
            ],
            "ar": [
              "تغطية كاملة للسيارة لحماية جميع أجزاء الطلاء من ضربات الحصى والخدوش وخدوش الرمال—مناسبة للسيارات الجديدة والملكية طويلة المدى في قطر.",
              "تركيب بدقة عالية مع محاذاة مثالية للحواف قدر الإمكان وإنهاء نظيف داخل الورشة للحصول على مظهر مصنع."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/full-ppf.png",
          "afterImage": "/full-ppf.png",
          "miniImages": [
            "/full-ppf.png",
            "/full-ppf.png",
            "/full-ppf.png"
          ]
        },
        {
          "slug": "front-end-ppf",
          "title": {
            "en": "Front-End PPF",
            "ar": "PPF للواجهة الأمامية"
          },
          "heroImage": "/front-ppff.PNG",
          "intro": {
            "en": [
              "Focused protection for the highest-impact zones (bumper, hood, fenders, mirrors) to stop stone chips and road rash before they start.",
              "A smart balance between coverage and budget, with clean edges and consistent clarity for daily Doha driving."
            ],
            "ar": [
              "حماية مركزة لأكثر المناطق تعرضًا للصدمات (الصدام، غطاء المحرك، الرفارف، المرايا) لمنع ضربات الحصى وخدوش الطريق.",
              "خيار متوازن بين التغطية والتكلفة مع حواف نظيفة وشفافية ثابتة لقيادة الدوحة اليومية."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/front-end-ppf/before.jpg",
          "afterImage": "/proof/full-protection-ppf/front-end-ppf/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/front-end-ppf/mini-1.jpg",
            "/proof/full-protection-ppf/front-end-ppf/mini-2.jpg",
            "/proof/full-protection-ppf/front-end-ppf/mini-3.jpg"
          ]
        },
        {
          "slug": "partial-front-ppf",
          "title": {
            "en": "Partial Front PPF",
            "ar": "PPF جزئي أمامي"
          },
          "heroImage": "/frontend-partial.jpg",
          "intro": {
            "en": [
              "Entry-level chip protection for key front areas, typically covering the bumper and targeted hood/fender sections where damage happens most.",
              "Perfect for commuters and city driving—clean installs, minimal visual lines, and easy maintenance."
            ],
            "ar": [
              "حماية أساسية من ضربات الحصى لأهم أجزاء الواجهة الأمامية، غالبًا للصدام وأجزاء محددة من غطاء المحرك/الرفارف حيث يحدث الضرر أكثر.",
              "مناسب لقيادة المدينة والتنقل—تركيب نظيف وخطوط مرئية أقل وصيانة سهلة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/partial-front-ppf/before.jpg",
          "afterImage": "/proof/full-protection-ppf/partial-front-ppf/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/partial-front-ppf/mini-1.jpg",
            "/proof/full-protection-ppf/partial-front-ppf/mini-2.jpg",
            "/proof/full-protection-ppf/partial-front-ppf/mini-3.jpg"
          ]
        },
        {
          "slug": "gloss-ppf",
          "title": {
            "en": "Gloss PPF",
            "ar": "PPF لامع"
          },
          "heroImage": "/gloss-ppff.JPG",
          "intro": {
            "en": [
              "High-clarity gloss PPF that preserves the original paint color while adding a deep, wet-look finish and strong impact resistance.",
              "Great for owners who want maximum shine without compromising on protection or maintenance."
            ],
            "ar": [
              "PPF لامع عالي الشفافية يحافظ على لون الطلاء الأصلي مع لمعة عميقة ومقاومة قوية للصدمات.",
              "مناسب لمن يريد لمعانًا أقوى مع حماية عالية وصيانة بسيطة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/gloss-ppf/before.jpg",
          "afterImage": "/proof/full-protection-ppf/gloss-ppf/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/gloss-ppf/mini-1.jpg",
            "/proof/full-protection-ppf/gloss-ppf/mini-2.jpg",
            "/proof/full-protection-ppf/gloss-ppf/mini-3.jpg"
          ]
        },
        {
          "slug": "matte-ppf",
          "title": {
            "en": "Matte PPF",
            "ar": "PPF مطفي"
          },
          "heroImage": "/matte-ppf.PNG",
          "intro": {
            "en": [
              "Matte PPF transforms gloss paint into a premium satin-matte appearance while defending against chips, scratches, and harsh washing marks.",
              "Uniform texture and controlled finishing to avoid patchiness and keep the look consistent panel-to-panel."
            ],
            "ar": [
              "PPF مطفي يحول الطلاء اللامع إلى مظهر مطفي فاخر مع حماية ضد ضربات الحصى والخدوش وآثار الغسيل القاسي.",
              "ملمس موحد وإنهاء مضبوط لتجنب اختلاف الدرجات والحفاظ على تناسق الشكل بين الألواح."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/matte-ppf/before.jpg",
          "afterImage": "/proof/full-protection-ppf/matte-ppf/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/matte-ppf/mini-1.jpg",
            "/proof/full-protection-ppf/matte-ppf/mini-2.jpg",
            "/proof/full-protection-ppf/matte-ppf/mini-3.jpg"
          ]
        },
        {
          "slug": "satin-ppf",
          "title": {
            "en": "Satin PPF",
            "ar": "PPF ساتان"
          },
          "heroImage": "/satin-ppf.PNG",
          "intro": {
            "en": [
              "Satin PPF delivers a refined, semi-matte finish—more depth than matte, less glare than gloss—while keeping strong impact protection.",
              "Ideal for luxury cars seeking a modern, understated look with easy cleaning."
            ],
            "ar": [
              "PPF ساتان يعطي مظهرًا نصف مطفي أنيق—عمق أكثر من المطفي ولمعان أقل من اللامع—مع حماية قوية ضد الصدمات.",
              "مثالي للسيارات الفاخرة التي تريد مظهرًا عصريًا هادئًا مع تنظيف أسهل."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/satin-ppf/before.jpg",
          "afterImage": "/proof/full-protection-ppf/satin-ppf/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/satin-ppf/mini-1.jpg",
            "/proof/full-protection-ppf/satin-ppf/mini-2.jpg",
            "/proof/full-protection-ppf/satin-ppf/mini-3.jpg"
          ]
        },
        {
          "slug": "self-healing-ppf",
          "title": {
            "en": "Self-Healing PPF",
            "ar": "PPF ذاتي المعالجة"
          },
          "heroImage": "/self-healing.PNG",
          "intro": {
            "en": [
              "Advanced self-healing PPF that helps minor swirls and light scratches disappear with heat, keeping the surface looking newer for longer.",
              "Best for high-use vehicles and frequent washing—engineered for Qatar heat and dust exposure."
            ],
            "ar": [
              "PPF ذاتي الالتئام يساعد على اختفاء الخدوش الخفيفة وآثار الدوامات مع الحرارة للحفاظ على مظهر جديد لفترة أطول.",
              "مناسب للسيارات المستخدمة بكثرة ومع الغسيل المتكرر—مصمم لتحمل حرارة وغبار قطر."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/self-healing-ppf/before.jpg",
          "afterImage": "/proof/full-protection-ppf/self-healing-ppf/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/self-healing-ppf/mini-1.jpg",
            "/proof/full-protection-ppf/self-healing-ppf/mini-2.jpg",
            "/proof/full-protection-ppf/self-healing-ppf/mini-3.jpg"
          ]
        },
        {
          "slug": "headlight-taillight-film",
          "title": {
            "en": "Headlight & Taillight Protection Film",
            "ar": "حماية الأنوار"
          },
          "heroImage": "/headlight-ppf.jpeg",
          "intro": {
            "en": [
              "Clear or lightly-tinted lens film that protects headlights and taillights from pitting, sandblasting, and surface scratches.",
              "Maintains clarity and visibility while reducing yellowing and wear from harsh sun and highway driving."
            ],
            "ar": [
              "فيلم شفاف أو بدرجة تظليل خفيفة لحماية المصابيح الأمامية والخلفية من التآكل وخدوش الرمال والخدوش السطحية.",
              "يحافظ على الوضوح والرؤية ويقلل الاصفرار والتلف بسبب الشمس القوية والطرق السريعة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/headlight-taillight-film/before.jpg",
          "afterImage": "/proof/full-protection-ppf/headlight-taillight-film/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/headlight-taillight-film/mini-1.jpg",
            "/proof/full-protection-ppf/headlight-taillight-film/mini-2.jpg",
            "/proof/full-protection-ppf/headlight-taillight-film/mini-3.jpg"
          ]
        },
        {
          "slug": "interior-screen-protection",
          "title": {
            "en": "Interior Screen Protection Film",
            "ar": "حماية الشاشات"
          },
          "heroImage": "/interior-ppf.PNG",
          "intro": {
            "en": [
              "Precision-cut protection for infotainment screens, clusters, and glossy trim to prevent scratches, fingerprints, and daily wear.",
              "A clean, bubble-free application with touch responsiveness preserved and easy wipe-down maintenance."
            ],
            "ar": [
              "حماية مقصوصة بدقة لشاشات السيارة والعدادات والديكورات اللامعة لمنع الخدوش وبصمات الأصابع والاستخدام اليومي.",
              "تركيب نظيف بدون فقاعات مع الحفاظ على الاستجابة للمس وحلول تنظيف سهلة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/interior-screen-protection/before.jpg",
          "afterImage": "/proof/full-protection-ppf/interior-screen-protection/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/interior-screen-protection/mini-1.jpg",
            "/proof/full-protection-ppf/interior-screen-protection/mini-2.jpg",
            "/proof/full-protection-ppf/interior-screen-protection/mini-3.jpg"
          ]
        },
        {
          "slug": "ppf-removal-replacement",
          "title": {
            "en": "PPF Removal & Replacement",
            "ar": "إزالة واستبدال PPF"
          },
          "heroImage": "/remove.jpg",
          "intro": {
            "en": [
              "Safe removal of old or damaged PPF with controlled heat and adhesive cleanup to protect the original paint underneath.",
              "Includes surface prep and optional replacement film installation to restore a clean, uniform finish."
            ],
            "ar": [
              "إزالة آمنة للـ PPF القديم أو التالف باستخدام حرارة محسوبة وتنظيف بقايا اللاصق لحماية الطلاء الأصلي.",
              "يشمل تجهيز السطح وإمكانية تركيب فيلم جديد لاستعادة مظهر موحد ونظيف."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/full-protection-ppf/ppf-removal-replacement/before.jpg",
          "afterImage": "/proof/full-protection-ppf/ppf-removal-replacement/after.jpg",
          "miniImages": [
            "/proof/full-protection-ppf/ppf-removal-replacement/mini-1.jpg",
            "/proof/full-protection-ppf/ppf-removal-replacement/mini-2.jpg",
            "/proof/full-protection-ppf/ppf-removal-replacement/mini-3.jpg"
          ]
        }
      ]
    },
    {
      "slug": "window-solar-film",
      "title": {
        "en": "Window Solar Film (Tint)",
        "ar": "عازل حراري للنوافذ"
      },
      "subtitle": {
        "en": "Heat and UV control with clean edges and clarity—ideal for Qatar sun.",
        "ar": "تحكم بالحرارة وUV مع إنهاء نظيف ووضوح—مثالي لشمس قطر."
      },
      "heroImage": "/window-solar.jpg",
      "overview": {
        "en": [
          "Heat and UV control with clean edges and clarity—ideal for Qatar sun.",
          "Explore options below and book an inspection for an accurate recommendation and quote."
        ],
        "ar": [
          "تحكم بالحرارة وUV مع إنهاء نظيف ووضوح—مثالي لشمس قطر.",
          "استعرض الخيارات أدناه واحجز فحصًا للحصول على توصية وعرض سعر دقيق."
        ]
      },
      "subservices": [
        {
          "slug": "nano-ceramic-tint",
          "title": {
            "en": "Nano Ceramic Tint",
            "ar": "تظليل نانو سيراميك"
          },
          "heroImage": "/nano-ceramic.webp",
          "intro": {
            "en": [
              "Premium nano-ceramic tint engineered for maximum heat rejection without sacrificing visibility—ideal for Qatar’s intense sun.",
              "Reduces cabin temperature, glare, and UV exposure while keeping a clean, high-end appearance."
            ],
            "ar": [
              "تظليل نانو سيراميك فاخر مصمم لرفض الحرارة بأعلى مستوى مع الحفاظ على وضوح الرؤية—مثالي لشمس قطر القوية.",
              "يقلل حرارة المقصورة والوهج وأشعة UV مع مظهر أنيق وفاخر."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/window-solar-film/nano-ceramic-tint/before.jpg",
          "afterImage": "/proof/window-solar-film/nano-ceramic-tint/after.jpg",
          "miniImages": [
            "/proof/window-solar-film/nano-ceramic-tint/mini-1.jpg",
            "/proof/window-solar-film/nano-ceramic-tint/mini-2.jpg",
            "/proof/window-solar-film/nano-ceramic-tint/mini-3.jpg"
          ]
        },
        {
          "slug": "heat-uv-protection-film",
          "title": {
            "en": "Heat & UV Protection Film",
            "ar": "فيلم حماية حرارة وUV"
          },
          "heroImage": "/uv-protection.PNG",
          "intro": {
            "en": [
              "High-performance film focused on blocking UV and reducing infrared heat to protect interiors from fading and cracking.",
              "A practical upgrade for daily drivers—comfort improves immediately, especially in summer traffic."
            ],
            "ar": [
              "فيلم عالي الأداء لصد أشعة UV وتقليل حرارة الأشعة تحت الحمراء لحماية الداخلية من البهتان والتشقق.",
              "ترقية عملية للاستخدام اليومي—راحة أفضل مباشرة خصوصًا في زحمة الصيف."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/window-solar-film/heat-uv-protection-film/before.jpg",
          "afterImage": "/proof/window-solar-film/heat-uv-protection-film/after.jpg",
          "miniImages": [
            "/proof/window-solar-film/heat-uv-protection-film/mini-1.jpg",
            "/proof/window-solar-film/heat-uv-protection-film/mini-2.jpg",
            "/proof/window-solar-film/heat-uv-protection-film/mini-3.jpg"
          ]
        },
        {
          "slug": "windshield-clear-protection",
          "title": {
            "en": "Windshield Clear Protection",
            "ar": "حماية شفافة للزجاج الأمامي"
          },
          "heroImage": "/windshield-clear.PNG",
          "intro": {
            "en": [
              "Optically clear film for the front windshield that defends against sand pitting and light impacts while keeping full visibility.",
              "Installed with precision to maintain clarity and reduce micro-scratches from wipers and dust."
            ],
            "ar": [
              "فيلم شفاف للزجاج الأمامي يحمي من تآكل الرمال والصدمات الخفيفة مع الحفاظ على رؤية كاملة.",
              "تركيب دقيق للحفاظ على الوضوح وتقليل الخدوش الدقيقة من المساحات والغبار."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/window-solar-film/windshield-clear-protection/before.jpg",
          "afterImage": "/proof/window-solar-film/windshield-clear-protection/after.jpg",
          "miniImages": [
            "/proof/window-solar-film/windshield-clear-protection/mini-1.jpg",
            "/proof/window-solar-film/windshield-clear-protection/mini-2.jpg",
            "/proof/window-solar-film/windshield-clear-protection/mini-3.jpg"
          ]
        },
        {
          "slug": "sunroof-panorama-tint",
          "title": {
            "en": "Sunroof & Panoramic Roof Tint",
            "ar": "تظليل سقف بانوراما"
          },
          "heroImage": "/sunroof.PNG",
          "intro": {
            "en": [
              "Specialized tint for sunroofs and panoramic glass to cut heat and glare from above—improving comfort for front and rear passengers.",
              "Helps protect the headliner and interior trims from UV damage while maintaining a premium look."
            ],
            "ar": [
              "تظليل مخصص لفتحات السقف والسقف البانورامي لتقليل الحرارة والوهج من الأعلى—لراحة أفضل للركاب.",
              "يساعد على حماية سقف السيارة والديكورات الداخلية من UV مع مظهر فاخر."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/window-solar-film/sunroof-panorama-tint/before.jpg",
          "afterImage": "/proof/window-solar-film/sunroof-panorama-tint/after.jpg",
          "miniImages": [
            "/proof/window-solar-film/sunroof-panorama-tint/mini-1.jpg",
            "/proof/window-solar-film/sunroof-panorama-tint/mini-2.jpg",
            "/proof/window-solar-film/sunroof-panorama-tint/mini-3.jpg"
          ]
        },
        {
          "slug": "tint-removal-reinstallation",
          "title": {
            "en": "Tint Removal & Reinstallation",
            "ar": "إزالة وإعادة تظليل"
          },
          "heroImage": "/tint-removal.PNG",
          "intro": {
            "en": [
              "Professional tint removal that protects defroster lines and trims, followed by clean reinstallation with a fresh finish.",
              "Best for bubbling, purple tint, poor visibility, or non-compliant film—restored clarity and comfort."
            ],
            "ar": [
              "إزالة تظليل احترافية تحافظ على خطوط التسخين والديكورات، ثم إعادة تركيب نظيفة بنتيجة جديدة.",
              "مناسب للتظليل المتقشر أو المتغير اللون أو ضعف الرؤية أو عدم المطابقة—وضوح وراحة أفضل."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/window-solar-film/tint-removal-reinstallation/before.jpg",
          "afterImage": "/proof/window-solar-film/tint-removal-reinstallation/after.jpg",
          "miniImages": [
            "/proof/window-solar-film/tint-removal-reinstallation/mini-1.jpg",
            "/proof/window-solar-film/tint-removal-reinstallation/mini-2.jpg",
            "/proof/window-solar-film/tint-removal-reinstallation/mini-3.jpg"
          ]
        }
      ]
    },
    {
      "slug": "detailing-coating",
      "title": {
        "en": "Detailing & Coating",
        "ar": "تفصيل وطلاء حماية"
      },
      "subtitle": {
        "en": "Paint correction, deep cleaning, and protective coating systems for a premium finish.",
        "ar": "تصحيح طلاء وتنظيف عميق وطلاءات حماية لنتيجة فاخرة."
      },
      "heroImage": "/lexus1.png",
      "overview": {
        "en": [
          "Paint correction, deep cleaning, and protective coating systems for a premium finish.",
          "Explore options below and book an inspection for an accurate recommendation and quote."
        ],
        "ar": [
          "تصحيح طلاء وتنظيف عميق وطلاءات حماية لنتيجة فاخرة.",
          "استعرض الخيارات أدناه واحجز فحصًا للحصول على توصية وعرض سعر دقيق."
        ]
      },
      "subservices": [
        {
          "slug": "exterior-detailing-paint-correction",
          "title": {
            "en": "Exterior Detailing & Paint Correction",
            "ar": "تفصيل خارجي وتصحيح طلاء"
          },
          "heroImage": "/exterior-detailing.PNG",
          "intro": {
            "en": [
              "Multi-step exterior detailing and paint correction to remove swirls, haze, and defects—restoring true gloss and clarity.",
              "The ideal foundation before ceramic/graphene coating for maximum durability and a flawless finish."
            ],
            "ar": [
              "تنظيف خارجي متقدم وتصحيح طلاء متعدد المراحل لإزالة الدوامات والبهتان والعيوب—لاستعادة اللمعة والوضوح.",
              "أساس مثالي قبل تطبيق السيراميك/الجرافين لتحقيق أفضل متانة ونتيجة مثالية."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/detailing-coating/exterior-detailing-paint-correction/before.jpg",
          "afterImage": "/proof/detailing-coating/exterior-detailing-paint-correction/after.jpg",
          "miniImages": [
            "/proof/detailing-coating/exterior-detailing-paint-correction/mini-1.jpg",
            "/proof/detailing-coating/exterior-detailing-paint-correction/mini-2.jpg",
            "/proof/detailing-coating/exterior-detailing-paint-correction/mini-3.jpg"
          ]
        },
        {
          "slug": "interior-deep-cleaning",
          "title": {
            "en": "Interior Deep Cleaning",
            "ar": "تنظيف داخلي عميق"
          },
          "heroImage": "/car_interior_cleaning.webp",
          "intro": {
            "en": [
              "Deep interior cleaning for seats, carpets, plastics, and vents—removing stains, odors, and embedded dust safely.",
              "Includes conditioning where needed for a fresh, hygienic cabin feel suited to Doha’s dusty environment."
            ],
            "ar": [
              "تنظيف داخلي عميق للمقاعد والسجاد والبلاستيك والفتحات لإزالة البقع والروائح والغبار المتراكم بأمان.",
              "يشمل تكييف/ترطيب عند الحاجة للحصول على مقصورة نظيفة وصحية تناسب بيئة الدوحة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/detailing-coating/interior-deep-cleaning/before.jpg",
          "afterImage": "/proof/detailing-coating/interior-deep-cleaning/after.jpg",
          "miniImages": [
            "/proof/detailing-coating/interior-deep-cleaning/mini-1.jpg",
            "/proof/detailing-coating/interior-deep-cleaning/mini-2.jpg",
            "/proof/detailing-coating/interior-deep-cleaning/mini-3.jpg"
          ]
        },
        {
          "slug": "ceramic-graphene-coating",
          "title": {
            "en": "Ceramic & Graphene Coating",
            "ar": "طلاء سيراميك وجرافين"
          },
          "heroImage": "/Graphene-Coating.jpg",
          "intro": {
            "en": [
              "Long-lasting ceramic or graphene coating that boosts gloss, adds hydrophobic behavior, and improves resistance to chemicals and UV.",
              "Applied under controlled conditions with proper prep to ensure durability and easy maintenance."
            ],
            "ar": [
              "طلاء سيراميك أو جرافين طويل المدى يزيد اللمعة ويعطي خاصية طرد الماء ويحسن مقاومة المواد الكيميائية وUV.",
              "يُطبق داخل الورشة مع تجهيز صحيح لضمان المتانة وسهولة الصيانة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/detailing-coating/ceramic-graphene-coating/before.jpg",
          "afterImage": "/proof/detailing-coating/ceramic-graphene-coating/after.jpg",
          "miniImages": [
            "/proof/detailing-coating/ceramic-graphene-coating/mini-1.jpg",
            "/proof/detailing-coating/ceramic-graphene-coating/mini-2.jpg",
            "/proof/detailing-coating/ceramic-graphene-coating/mini-3.jpg"
          ]
        },
        {
          "slug": "glass-wheel-interior-coating",
          "title": {
            "en": "Glass, Wheel & Interior Coating",
            "ar": "طلاءات للزجاج والجنوط والداخل"
          },
          "heroImage": "/interior-coating.webp",
          "intro": {
            "en": [
              "Targeted coatings for glass, wheels, and interior surfaces to reduce staining, ease cleaning, and improve daily durability.",
              "Helps repel water on glass, brake dust on wheels, and wear on high-touch interior areas."
            ],
            "ar": [
              "طلاءات مخصصة للزجاج والجنوط والأسطح الداخلية لتقليل البقع وتسهيل التنظيف وزيادة التحمل اليومي.",
              "يساعد على طرد الماء من الزجاج وتقليل التصاق غبار الفرامل بالجنوط وحماية المناطق الداخلية كثيرة الاستخدام."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/detailing-coating/glass-wheel-interior-coating/before.jpg",
          "afterImage": "/proof/detailing-coating/glass-wheel-interior-coating/after.jpg",
          "miniImages": [
            "/proof/detailing-coating/glass-wheel-interior-coating/mini-1.jpg",
            "/proof/detailing-coating/glass-wheel-interior-coating/mini-2.jpg",
            "/proof/detailing-coating/glass-wheel-interior-coating/mini-3.jpg"
          ]
        }
      ]
    },
    {
      "slug": "paint-repair-services",
      "title": {
        "en": "Paint & Repair Services",
        "ar": "خدمات الدهان والإصلاح"
      },
      "subtitle": {
        "en": "Smart repairs, refinishing, and dent solutions with quality control and clean results.",
        "ar": "إصلاحات ذكية ودهان وحلول صدمات مع فحص جودة ونتائج نظيفة."
      },
      "heroImage": "/paintoriginal1.png",
      "overview": {
        "en": [
          "Smart repairs, refinishing, and dent solutions with quality control and clean results.",
          "Explore options below and book an inspection for an accurate recommendation and quote."
        ],
        "ar": [
          "إصلاحات ذكية ودهان وحلول صدمات مع فحص جودة ونتائج نظيفة.",
          "استعرض الخيارات أدناه واحجز فحصًا للحصول على توصية وعرض سعر دقيق."
        ]
      },
      "subservices": [
        {
          "slug": "smart-paint-repair",
          "title": {
            "en": "Smart Paint Repair",
            "ar": "إصلاح طلاء ذكي"
          },
          "heroImage": "/smart-paint2.png",
          "intro": {
            "en": [
              "Localized paint repair for scuffs, scratches, and bumper damage—minimizing repaint area while restoring a clean OEM look.",
              "Fast turnaround with precise blending to match surrounding paint and preserve vehicle value."
            ],
            "ar": [
              "إصلاح طلاء موضعي للخدوش والاحتكاكات وأضرار الصدام—مع تقليل مساحة الرش واستعادة مظهر قريب من المصنع.",
              "تنفيذ سريع مع دمج لون دقيق لمطابقة الطلاء المحيط والحفاظ على قيمة السيارة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/paint-repair-services/smart-paint-repair/before.jpg",
          "afterImage": "/proof/paint-repair-services/smart-paint-repair/after.jpg",
          "miniImages": [
            "/proof/paint-repair-services/smart-paint-repair/mini-1.jpg",
            "/proof/paint-repair-services/smart-paint-repair/mini-2.jpg",
            "/proof/paint-repair-services/smart-paint-repair/mini-3.jpg"
          ]
        },
        {
          "slug": "rubber-peelable-paint",
          "title": {
            "en": "Rubber / Peelable Paint",
            "ar": "دهان مطاطي قابل للإزالة"
          },
          "heroImage": "/paintoriginal1.png",
          "intro": {
            "en": [
              "Peelable rubberized paint for temporary color change or protection—reversible when you want to return to original paint.",
              "Great for styling, seasonal looks, or protecting panels without permanent modifications."
            ],
            "ar": [
              "طلاء مطاطي قابل للإزالة لتغيير اللون مؤقتًا أو للحماية—يمكن نزعه والعودة للون الأصلي متى ما رغبت.",
              "مناسب للتغيير الشكلي أو الحماية بدون تعديل دائم على السيارة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/paint-repair-services/rubber-peelable-paint/before.jpg",
          "afterImage": "/proof/paint-repair-services/rubber-peelable-paint/after.jpg",
          "miniImages": [
            "/proof/paint-repair-services/rubber-peelable-paint/mini-1.jpg",
            "/proof/paint-repair-services/rubber-peelable-paint/mini-2.jpg",
            "/proof/paint-repair-services/rubber-peelable-paint/mini-3.jpg"
          ]
        },
        {
          "slug": "normal-full-repaint",
          "title": {
            "en": "Normal & Full Repaint",
            "ar": "دهان عادي أو كامل"
          },
          "heroImage": "/smart-paint.PNG",
          "intro": {
            "en": [
              "Full-panel or full-body repaint with professional preparation and controlled application to restore a uniform, premium finish.",
              "Ideal for faded paint, multiple panel damage, or a complete refresh—quality-focused and color-consistent."
            ],
            "ar": [
              "إعادة رش كاملة للوحة أو للسيارة مع تجهيز احترافي وتطبيق مضبوط لاستعادة نتيجة موحدة وفاخرة.",
              "مناسب للطلاء الباهت أو الأضرار المتعددة أو تجديد كامل—مع جودة عالية وتناسق لون."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/paint-repair-services/normal-full-repaint/before.jpg",
          "afterImage": "/proof/paint-repair-services/normal-full-repaint/after.jpg",
          "miniImages": [
            "/proof/paint-repair-services/normal-full-repaint/mini-1.jpg",
            "/proof/paint-repair-services/normal-full-repaint/mini-2.jpg",
            "/proof/paint-repair-services/normal-full-repaint/mini-3.jpg"
          ]
        },
        {
          "slug": "paintless-dent-repair-pdr",
          "title": {
            "en": "Paintless Dent Repair (PDR)",
            "ar": "إصلاح صدمات بدون دهان"
          },
          "heroImage": "/pdr-paint.PNG",
          "intro": {
            "en": [
              "Paintless Dent Repair (PDR) removes dents from panels without repainting—preserving the original factory paint whenever possible.",
              "Perfect for door dings and small impacts with faster service and excellent cosmetic results."
            ],
            "ar": [
              "إصلاح الصدمات بدون رش (PDR) يزيل الانبعاجات دون إعادة طلاء—مع الحفاظ على طلاء المصنع قدر الإمكان.",
              "مناسب لنقرات الأبواب والصدمات الخفيفة مع وقت أسرع ونتائج شكلية ممتازة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/paint-repair-services/paintless-dent-repair-pdr/before.jpg",
          "afterImage": "/proof/paint-repair-services/paintless-dent-repair-pdr/after.jpg",
          "miniImages": [
            "/proof/paint-repair-services/paintless-dent-repair-pdr/mini-1.jpg",
            "/proof/paint-repair-services/paintless-dent-repair-pdr/mini-2.jpg",
            "/proof/paint-repair-services/paintless-dent-repair-pdr/mini-3.jpg"
          ]
        },
        {
          "slug": "color-matching-panel-painting",
          "title": {
            "en": "Color Matching & Panel Painting",
            "ar": "مطابقة لون ودهان ألواح"
          },
          "heroImage": "/paintoriginal3.png",
          "intro": {
            "en": [
              "Accurate color matching and panel painting using blending techniques to ensure seamless transitions between panels.",
              "Best for single-panel repairs, bumper work, and restoring factory appearance with consistent gloss."
            ],
            "ar": [
              "مطابقة لون دقيقة ورش ألواح مع تقنيات دمج لضمان انتقال سلس بين الألواح.",
              "مناسب لإصلاح لوحة واحدة أو الصدام واستعادة مظهر المصنع مع لمعة متناسقة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/paint-repair-services/color-matching-panel-painting/before.jpg",
          "afterImage": "/proof/paint-repair-services/color-matching-panel-painting/after.jpg",
          "miniImages": [
            "/proof/paint-repair-services/color-matching-panel-painting/mini-1.jpg",
            "/proof/paint-repair-services/color-matching-panel-painting/mini-2.jpg",
            "/proof/paint-repair-services/color-matching-panel-painting/mini-3.jpg"
          ]
        }
      ]
    },
    {
      "slug": "car-wash-services",
      "title": {
        "en": "Car Wash Services",
        "ar": "خدمات غسيل السيارات"
      },
      "subtitle": {
        "en": "Safe wash methods designed to preserve protected finishes and keep your vehicle presentable.",
        "ar": "طرق غسيل آمنة للحفاظ على الأسطح المحمية وإظهار السيارة بأفضل شكل."
      },
      "heroImage": "/car-wash.png",
      "overview": {
        "en": [
          "Safe wash methods designed to preserve protected finishes and keep your vehicle presentable.",
          "Explore options below and book an inspection for an accurate recommendation and quote."
        ],
        "ar": [
          "طرق غسيل آمنة للحفاظ على الأسطح المحمية وإظهار السيارة بأفضل شكل.",
          "استعرض الخيارات أدناه واحجز فحصًا للحصول على توصية وعرض سعر دقيق."
        ]
      },
      "subservices": [
        {
          "slug": "basic-premium-hand-wash",
          "title": {
            "en": "Basic & Premium Hand Wash",
            "ar": "غسيل يدوي أساسي وبريميوم"
          },
          "heroImage": "/hand-wash.PNG",
          "intro": {
            "en": [
              "Safe hand wash using proper wash media and drying methods to reduce swirls—choose Basic for maintenance or Premium for extra finishing touches.",
              "A clean, consistent wash routine that keeps your car presentable between detailing sessions."
            ],
            "ar": [
              "غسيل يدوي آمن باستخدام أدوات وغسيل وتجفيف صحيح لتقليل الدوامات—اختر العادي للصيانة أو البريميوم لتفاصيل إضافية.",
              "روتين غسيل ثابت يحافظ على نظافة السيارة بين جلسات العناية."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/car-wash-services/basic-premium-hand-wash/before.jpg",
          "afterImage": "/proof/car-wash-services/basic-premium-hand-wash/after.jpg",
          "miniImages": [
            "/proof/car-wash-services/basic-premium-hand-wash/mini-1.jpg",
            "/proof/car-wash-services/basic-premium-hand-wash/mini-2.jpg",
            "/proof/car-wash-services/basic-premium-hand-wash/mini-3.jpg"
          ]
        },
        {
          "slug": "foam-wash",
          "title": {
            "en": "Foam Wash",
            "ar": "غسيل رغوي"
          },
          "heroImage": "/foam-wash.PNG",
          "intro": {
            "en": [
              "Thick snow-foam pre-wash that loosens dirt and sand before contact—reducing swirl risk in dusty conditions.",
              "Ideal as a first step before a hand wash for a safer, more thorough clean."
            ],
            "ar": [
              "غسيل فوم كثيف يفك الأوساخ والرمال قبل اللمس لتقليل خطر الدوامات في الأجواء المغبرة.",
              "مثالي كخطوة أولى قبل الغسيل اليدوي لتنظيف أعمق وأكثر أمانًا."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/car-wash-services/foam-wash/before.jpg",
          "afterImage": "/proof/car-wash-services/foam-wash/after.jpg",
          "miniImages": [
            "/proof/car-wash-services/foam-wash/mini-1.jpg",
            "/proof/car-wash-services/foam-wash/mini-2.jpg",
            "/proof/car-wash-services/foam-wash/mini-3.jpg"
          ]
        },
        {
          "slug": "engine-bay-cleaning",
          "title": {
            "en": "Engine Bay Cleaning",
            "ar": "تنظيف حجرة المحرك"
          },
          "heroImage": "/engine-wash.png",
          "intro": {
            "en": [
              "Controlled engine bay cleaning and degreasing to remove dust buildup and oil residue without harming sensitive components.",
              "Finished with careful drying and dressing for a neat, professional look under the hood."
            ],
            "ar": [
              "تنظيف حجرة المحرك وإزالة الدهون بشكل مضبوط لإزالة الغبار المتراكم وبقايا الزيوت دون الإضرار بالمكونات الحساسة.",
              "تشطيب مع تجفيف وتلميع مناسب لمظهر مرتب واحترافي تحت الغطاء."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/car-wash-services/engine-bay-cleaning/before.jpg",
          "afterImage": "/proof/car-wash-services/engine-bay-cleaning/after.jpg",
          "miniImages": [
            "/proof/car-wash-services/engine-bay-cleaning/mini-1.jpg",
            "/proof/car-wash-services/engine-bay-cleaning/mini-2.jpg",
            "/proof/car-wash-services/engine-bay-cleaning/mini-3.jpg"
          ]
        },
        {
          "slug": "interior-vacuum-sanitization",
          "title": {
            "en": "Interior Vacuum & Sanitization",
            "ar": "شفط وتعقيم داخلي"
          },
          "heroImage": "/vacuum.png",
          "intro": {
            "en": [
              "Thorough vacuuming plus sanitization of high-touch areas to reduce odors, dust, and bacteria for a fresher cabin.",
              "Perfect for family cars, ride-hailing vehicles, and anyone who wants a clean, hygienic interior quickly."
            ],
            "ar": [
              "شفط وتنظيف شامل مع تعقيم المناطق كثيرة اللمس لتقليل الروائح والغبار والبكتيريا لمقصورة أنظف.",
              "مناسب لسيارات العائلة وسيارات التوصيل وكل من يريد داخلية نظيفة وصحية بسرعة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/car-wash-services/interior-vacuum-sanitization/before.jpg",
          "afterImage": "/proof/car-wash-services/interior-vacuum-sanitization/after.jpg",
          "miniImages": [
            "/proof/car-wash-services/interior-vacuum-sanitization/mini-1.jpg",
            "/proof/car-wash-services/interior-vacuum-sanitization/mini-2.jpg",
            "/proof/car-wash-services/interior-vacuum-sanitization/mini-3.jpg"
          ]
        }
      ]
    },
    {
      "slug": "windshield-services",
      "title": {
        "en": "Windshield Services",
        "ar": "خدمات الزجاج الأمامي"
      },
      "subtitle": {
        "en": "Repair, polishing, water repellency and replacement for maximum visibility and safety.",
        "ar": "إصلاح وتلميع وطبقة طاردة للماء واستبدال لأقصى وضوح وسلامة."
      },
      "heroImage": "/rollsroyce.png",
      "overview": {
        "en": [
          "Repair, polishing, water repellency and replacement for maximum visibility and safety.",
          "Explore options below and book an inspection for an accurate recommendation and quote."
        ],
        "ar": [
          "إصلاح وتلميع وطبقة طاردة للماء واستبدال لأقصى وضوح وسلامة.",
          "استعرض الخيارات أدناه واحجز فحصًا للحصول على توصية وعرض سعر دقيق."
        ]
      },
      "subservices": [

        {
          "slug": "glass-polishing",
          "title": {
            "en": "Glass Polishing",
            "ar": "تلميع الزجاج"
          },
          "heroImage": "/glass-polishing.PNG",
          "intro": {
            "en": [
              "Glass polishing to reduce wiper marks, water spots, and light scratches—improving visibility and overall appearance.",
              "Best paired with water-repellent treatment for smoother driving in rain and easier cleaning."
            ],
            "ar": [
              "تلميع الزجاج لتقليل آثار المساحات وبقع الماء والخدوش الخفيفة—لرؤية أفضل ومظهر أنظف.",
              "يفضل مع علاج طارد للماء لقيادة أسهل في المطر وتنظيف أسرع."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/windshield-services/glass-polishing/before.jpg",
          "afterImage": "/proof/windshield-services/glass-polishing/after.jpg",
          "miniImages": [
            "/proof/windshield-services/glass-polishing/mini-1.jpg",
            "/proof/windshield-services/glass-polishing/mini-2.jpg",
            "/proof/windshield-services/glass-polishing/mini-3.jpg"
          ]
        },
        {
          "slug": "water-repellent-treatment",
          "title": {
            "en": "Water Repellent Treatment",
            "ar": "طبقة طاردة للماء"
          },
          "heroImage": "/rollsroyce.png",
          "intro": {
            "en": [
              "Hydrophobic treatment that makes water bead and slide off the windshield—improving visibility at speed and reducing wiper chatter.",
              "Helps keep glass cleaner for longer and makes bug and dust removal easier."
            ],
            "ar": [
              "علاج طارد للماء يجعل الماء يتجمع وينزلق عن الزجاج الأمامي لتحسين الرؤية وتقليل صوت المساحات.",
              "يساعد على بقاء الزجاج أنظف لفترة أطول ويسهل إزالة الغبار والحشرات."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/windshield-services/water-repellent-treatment/before.jpg",
          "afterImage": "/proof/windshield-services/water-repellent-treatment/after.jpg",
          "miniImages": [
            "/proof/windshield-services/water-repellent-treatment/mini-1.jpg",
            "/proof/windshield-services/water-repellent-treatment/mini-2.jpg",
            "/proof/windshield-services/water-repellent-treatment/mini-3.jpg"
          ]
        },
        {
          "slug": "windshield-replacement",
          "title": {
            "en": "Windshield Replacement",
            "ar": "استبدال الزجاج الأمامي"
          },
          "heroImage": "/rollsroyce.png",
          "intro": {
            "en": [
              "Professional windshield replacement using quality glass and proper sealing to prevent leaks, noise, and fitment issues.",
              "Includes careful installation and guidance for ADAS/sensor checks when applicable."
            ],
            "ar": [
              "تغيير الزجاج الأمامي بشكل احترافي باستخدام زجاج عالي الجودة وتركيب صحيح لمنع التسريب والضوضاء ومشاكل المقاس.",
              "يشمل تركيب دقيق وإرشادات لفحص أنظمة الحساسات/ADAS عند الحاجة."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/windshield-services/windshield-replacement/before.jpg",
          "afterImage": "/proof/windshield-services/windshield-replacement/after.jpg",
          "miniImages": [
            "/proof/windshield-services/windshield-replacement/mini-1.jpg",
            "/proof/windshield-services/windshield-replacement/mini-2.jpg",
            "/proof/windshield-services/windshield-replacement/mini-3.jpg"
          ]
        },
        {
          "slug": "windshield-light",
          "title": {
            "en": "Windshield Protection – Light",
            "ar": "حماية الزجاج – لايت"
          },
          "heroImage": "/rollsroyce.png",
          "intro": {
            "en": [
              "Light-level windshield protection film for basic defense against sand pitting and minor surface wear.",
              "A practical option for city use—maintains clarity and reduces micro-scratches over time."
            ],
            "ar": [
              "حماية خفيفة للزجاج الأمامي لمقاومة تآكل الرمال والاستخدام اليومي البسيط.",
              "خيار عملي لقيادة المدينة—يحافظ على الوضوح ويقلل الخدوش الدقيقة مع الوقت."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/windshield-services/windshield-light/before.jpg",
          "afterImage": "/proof/windshield-services/windshield-light/after.jpg",
          "miniImages": [
            "/proof/windshield-services/windshield-light/mini-1.jpg",
            "/proof/windshield-services/windshield-light/mini-2.jpg",
            "/proof/windshield-services/windshield-light/mini-3.jpg"
          ]
        },
        {
          "slug": "windshield-city",
          "title": {
            "en": "Windshield Protection – City",
            "ar": "حماية الزجاج – سيتي"
          },
          "heroImage": "/rollsroyce.png",
          "intro": {
            "en": [
              "City-level windshield protection with enhanced durability for frequent road use, keeping glass clearer despite dust and traffic exposure.",
              "Balanced performance for daily driving: comfort, clarity, and stronger resistance than entry-level film."
            ],
            "ar": [
              "حماية مستوى المدينة للزجاج الأمامي بمتانة أعلى للاستخدام اليومي المتكرر مع الحفاظ على وضوح أفضل رغم الغبار والزحمة.",
              "أداء متوازن للقيادة اليومية: راحة ووضوح ومقاومة أقوى من المستوى الخفيف."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/windshield-services/windshield-city/before.jpg",
          "afterImage": "/proof/windshield-services/windshield-city/after.jpg",
          "miniImages": [
            "/proof/windshield-services/windshield-city/mini-1.jpg",
            "/proof/windshield-services/windshield-city/mini-2.jpg",
            "/proof/windshield-services/windshield-city/mini-3.jpg"
          ]
        },
        {
          "slug": "windshield-extreme",
          "title": {
            "en": "Windshield Protection – Extreme",
            "ar": "حماية الزجاج – إكستريم"
          },
          "heroImage": "/rollsroyce.png",
          "intro": {
            "en": [
              "Extreme-level windshield protection built for heavy highway use and harsh conditions—maximum resistance against pitting and impacts.",
              "Ideal for long-distance driving and high-speed roads, with careful installation for optical clarity."
            ],
            "ar": [
              "حماية قصوى للزجاج الأمامي للطرق السريعة والظروف القاسية—أعلى مقاومة للتآكل والصدمات.",
              "مناسب للقيادة الطويلة والسرعات العالية مع تركيب دقيق للحفاظ على الوضوح."
            ]
          },
          "bestFor": {
            "en": [
              "Daily drivers",
              "Highway commuters",
              "Owners who want long-lasting results"
            ],
            "ar": [
              "الاستخدام اليومي",
              "الطرق السريعة",
              "من يريد نتائج طويلة المدى"
            ]
          },
          "specs": {
            "en": [
              "High clarity / clean finish specification",
              "Durability designed for heat and dust exposure",
              "Controlled application methods to reduce defects",
              "Quality inspection under lighting",
              "Warranty-backed service delivery"
            ],
            "ar": [
              "مواصفة وضوح وتشطيب نظيف",
              "متانة مناسبة للحرارة والغبار",
              "طرق تنفيذ مدروسة لتقليل العيوب",
              "فحص جودة تحت الإضاءة",
              "خدمة بضمان"
            ]
          },
          "included": {
            "en": [
              "Inspection and recommendation",
              "Surface preparation and safe cleaning",
              "Precision application/installation",
              "Edge/finish refinement where applicable",
              "Final quality check",
              "Aftercare guidance + warranty details"
            ],
            "ar": [
              "فحص وتوصية",
              "تجهيز وتنظيف آمن",
              "تنفيذ/تركيب دقيق",
              "تحسين التشطيب والحواف عند الحاجة",
              "فحص جودة نهائي",
              "تعليمات عناية + تفاصيل الضمان"
            ]
          },
          "process": {
            "en": [
              "Vehicle inspection and confirmation of scope",
              "Preparation and decontamination (as needed)",
              "Controlled installation/application step-by-step",
              "Detail finishing and alignment checks",
              "Curing / settling guidance (when applicable)",
              "Quality control under different angles and lighting",
              "Delivery briefing + aftercare"
            ],
            "ar": [
              "فحص السيارة وتأكيد النطاق",
              "تجهيز وإزالة شوائب عند الحاجة",
              "تنفيذ/تركيب مدروس خطوة بخطوة",
              "تشطيب وتحقق من المحاذاة",
              "تعليمات تثبيت/تجفيف عند الحاجة",
              "فحص جودة بزوايا وإضاءة مختلفة",
              "تسليم + تعليمات العناية"
            ]
          },
          "timeline": {
            "en": "Varies by vehicle and scope; confirmed after inspection.",
            "ar": "يختلف حسب السيارة والنطاق؛ نؤكده بعد الفحص."
          },
          "aftercare": {
            "en": [
              "Follow curing guidance if provided",
              "Use safe wash methods",
              "Avoid harsh chemicals/abrasives",
              "Contact us if you notice any issue early"
            ],
            "ar": [
              "اتبع تعليمات التثبيت إن وجدت",
              "استخدم غسيل آمن",
              "تجنب مواد قوية/كاشطة",
              "تواصل معنا مبكرًا عند وجود أي ملاحظة"
            ]
          },
          "faqs": [
            {
              "q": {
                "en": "How do I choose the right option?",
                "ar": "كيف أختار الخيار المناسب؟"
              },
              "a": {
                "en": "We recommend the best option based on your driving pattern, paint/glass condition, and goals after inspection.",
                "ar": "نقترح الأفضل حسب الاستخدام وحالة السطح والهدف بعد الفحص."
              }
            },
            {
              "q": {
                "en": "Does it come with warranty?",
                "ar": "هل يوجد ضمان؟"
              },
              "a": {
                "en": "Yes—every service includes warranty coverage; terms depend on the chosen option and scope.",
                "ar": "نعم—كل خدمة تشمل ضمانًا؛ الشروط تختلف حسب الخيار والنطاق."
              }
            },
            {
              "q": {
                "en": "How long does it take?",
                "ar": "كم يستغرق؟"
              },
              "a": {
                "en": "Time depends on vehicle size and scope; we confirm a realistic timeline before starting.",
                "ar": "يعتمد على حجم السيارة والنطاق؛ نؤكد وقتًا واقعيًا قبل البدء."
              }
            },
            {
              "q": {
                "en": "Will it affect the look?",
                "ar": "هل يؤثر على الشكل؟"
              },
              "a": {
                "en": "We prioritize clean finishing and clarity; aesthetic options are clarified during consultation.",
                "ar": "نركز على تشطيب نظيف ووضوح؛ الخيارات الجمالية نوضحها أثناء الاستشارة."
              }
            },
            {
              "q": {
                "en": "What maintenance is required?",
                "ar": "ما الصيانة المطلوبة؟"
              },
              "a": {
                "en": "Safe washing and basic aftercare protect results; we provide a simple routine.",
                "ar": "غسيل آمن وتعليمات بسيطة للحفاظ على النتيجة."
              }
            },
            {
              "q": {
                "en": "Can it be removed or adjusted later?",
                "ar": "هل يمكن الإزالة أو التعديل لاحقًا؟"
              },
              "a": {
                "en": "Where applicable, yes—procedures are performed with controlled methods to protect surfaces.",
                "ar": "عند الإمكان نعم—تتم بطرق مدروسة لحماية السطح."
              }
            },
            {
              "q": {
                "en": "Is it suitable for Qatar heat?",
                "ar": "هل يناسب حرارة قطر؟"
              },
              "a": {
                "en": "Yes—our spec choices and process are designed around high heat and dust exposure.",
                "ar": "نعم—نختار المواصفات وطريقة التنفيذ بما يناسب الحرارة والغبار."
              }
            },
            {
              "q": {
                "en": "How do I book?",
                "ar": "كيف أحجز؟"
              },
              "a": {
                "en": "Use the Book Now page or WhatsApp for a fast quote and scheduling.",
                "ar": "استخدم صفحة الحجز أو واتساب لعرض سعر سريع وتحديد موعد."
              }
            }
          ],
          "beforeImage": "/proof/windshield-services/windshield-extreme/before.jpg",
          "afterImage": "/proof/windshield-services/windshield-extreme/after.jpg",
          "miniImages": [
            "/proof/windshield-services/windshield-extreme/mini-1.jpg",
            "/proof/windshield-services/windshield-extreme/mini-2.jpg",
            "/proof/windshield-services/windshield-extreme/mini-3.jpg"
          ]
        }
      ]
    }
  ]
} as any;
