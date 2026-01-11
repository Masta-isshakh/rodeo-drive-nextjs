export type Lang = 'en' | 'ar';
export type FAQ = { q: Record<Lang,string>; a: Record<Lang,string> };
export type Subservice = {
  slug: string;
  title: Record<Lang,string>;
  heroImage: string;
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
          "heroImage": "/full-ppf.png",
          "intro": {
            "en": [
              "Full Body PPF is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "PPF حماية كاملة مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "front-end-ppf",
          "title": {
            "en": "Front-End PPF",
            "ar": "PPF للواجهة الأمامية"
          },
          "heroImage": "/front-ppf.png",
          "intro": {
            "en": [
              "Front-End PPF is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "PPF للواجهة الأمامية مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "partial-front-ppf",
          "title": {
            "en": "Partial Front PPF",
            "ar": "PPF جزئي أمامي"
          },
          "heroImage": "/partial-ppf.png",
          "intro": {
            "en": [
              "Partial Front PPF is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "PPF جزئي أمامي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "gloss-ppf",
          "title": {
            "en": "Gloss PPF",
            "ar": "PPF لامع"
          },
          "heroImage": "/gloss-ppf.png",
          "intro": {
            "en": [
              "Gloss PPF is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "PPF لامع مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "matte-ppf",
          "title": {
            "en": "Matte PPF",
            "ar": "PPF مطفي"
          },
          "heroImage": "/matt-ppf.png",
          "intro": {
            "en": [
              "Matte PPF is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "PPF مطفي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "satin-ppf",
          "title": {
            "en": "Satin PPF",
            "ar": "PPF ساتان"
          },
          "heroImage": "/matt-ppf.png",
          "intro": {
            "en": [
              "Satin PPF is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "PPF ساتان مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "self-healing-ppf",
          "title": {
            "en": "Self-Healing PPF",
            "ar": "PPF ذاتي المعالجة"
          },
          "heroImage": "/matt-ppf.png",
          "intro": {
            "en": [
              "Self-Healing PPF is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "PPF ذاتي المعالجة مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "headlight-taillight-film",
          "title": {
            "en": "Headlight & Taillight Protection Film",
            "ar": "حماية الأنوار"
          },
          "heroImage": "/matt-ppf.png",
          "intro": {
            "en": [
              "Headlight & Taillight Protection Film is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "حماية الأنوار مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "interior-screen-protection",
          "title": {
            "en": "Interior Screen Protection Film",
            "ar": "حماية الشاشات"
          },
          "heroImage": "/matt-ppf.png",
          "intro": {
            "en": [
              "Interior Screen Protection Film is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "حماية الشاشات مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "ppf-removal-replacement",
          "title": {
            "en": "PPF Removal & Replacement",
            "ar": "إزالة واستبدال PPF"
          },
          "heroImage": "/matt-ppf.png",
          "intro": {
            "en": [
              "PPF Removal & Replacement is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "إزالة واستبدال PPF مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          "heroImage": "/window-solar.jpg",
          "intro": {
            "en": [
              "Nano Ceramic Tint is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "تظليل نانو سيراميك مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "heat-uv-protection-film",
          "title": {
            "en": "Heat & UV Protection Film",
            "ar": "فيلم حماية حرارة وUV"
          },
          "heroImage": "/window-solar.jpg",
          "intro": {
            "en": [
              "Heat & UV Protection Film is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "فيلم حماية حرارة وUV مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "windshield-clear-protection",
          "title": {
            "en": "Windshield Clear Protection",
            "ar": "حماية شفافة للزجاج الأمامي"
          },
          "heroImage": "/window-solar.jpg",
          "intro": {
            "en": [
              "Windshield Clear Protection is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "حماية شفافة للزجاج الأمامي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "sunroof-panorama-tint",
          "title": {
            "en": "Sunroof & Panoramic Roof Tint",
            "ar": "تظليل سقف بانوراما"
          },
          "heroImage": "/window-solar.jpg",
          "intro": {
            "en": [
              "Sunroof & Panoramic Roof Tint is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "تظليل سقف بانوراما مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "tint-removal-reinstallation",
          "title": {
            "en": "Tint Removal & Reinstallation",
            "ar": "إزالة وإعادة تظليل"
          },
          "heroImage": "/window-solar.jpg",
          "intro": {
            "en": [
              "Tint Removal & Reinstallation is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "إزالة وإعادة تظليل مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          "heroImage": "/lexus1.png",
          "intro": {
            "en": [
              "Exterior Detailing & Paint Correction is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "تفصيل خارجي وتصحيح طلاء مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "interior-deep-cleaning",
          "title": {
            "en": "Interior Deep Cleaning",
            "ar": "تنظيف داخلي عميق"
          },
          "heroImage": "/lexus1.png",
          "intro": {
            "en": [
              "Interior Deep Cleaning is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "تنظيف داخلي عميق مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "ceramic-graphene-coating",
          "title": {
            "en": "Ceramic & Graphene Coating",
            "ar": "طلاء سيراميك وجرافين"
          },
          "heroImage": "/lexus1.png",
          "intro": {
            "en": [
              "Ceramic & Graphene Coating is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "طلاء سيراميك وجرافين مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "glass-wheel-interior-coating",
          "title": {
            "en": "Glass, Wheel & Interior Coating",
            "ar": "طلاءات للزجاج والجنوط والداخل"
          },
          "heroImage": "/lexus1.png",
          "intro": {
            "en": [
              "Glass, Wheel & Interior Coating is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "طلاءات للزجاج والجنوط والداخل مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          "heroImage": "/paintoriginal1.png",
          "intro": {
            "en": [
              "Smart Paint Repair is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "إصلاح طلاء ذكي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
              "Rubber / Peelable Paint is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "دهان مطاطي قابل للإزالة مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "normal-full-repaint",
          "title": {
            "en": "Normal & Full Repaint",
            "ar": "دهان عادي أو كامل"
          },
          "heroImage": "/paintoriginal1.png",
          "intro": {
            "en": [
              "Normal & Full Repaint is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "دهان عادي أو كامل مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "paintless-dent-repair-pdr",
          "title": {
            "en": "Paintless Dent Repair (PDR)",
            "ar": "إصلاح صدمات بدون دهان"
          },
          "heroImage": "/paintoriginal1.png",
          "intro": {
            "en": [
              "Paintless Dent Repair (PDR) is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "إصلاح صدمات بدون دهان مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "color-matching-panel-painting",
          "title": {
            "en": "Color Matching & Panel Painting",
            "ar": "مطابقة لون ودهان ألواح"
          },
          "heroImage": "/paintoriginal1.png",
          "intro": {
            "en": [
              "Color Matching & Panel Painting is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "مطابقة لون ودهان ألواح مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          "heroImage": "/car-wash.png",
          "intro": {
            "en": [
              "Basic & Premium Hand Wash is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "غسيل يدوي أساسي وبريميوم مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "foam-wash",
          "title": {
            "en": "Foam Wash",
            "ar": "غسيل رغوي"
          },
          "heroImage": "/car-wash.png",
          "intro": {
            "en": [
              "Foam Wash is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "غسيل رغوي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "engine-bay-cleaning",
          "title": {
            "en": "Engine Bay Cleaning",
            "ar": "تنظيف حجرة المحرك"
          },
          "heroImage": "/car-wash.png",
          "intro": {
            "en": [
              "Engine Bay Cleaning is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "تنظيف حجرة المحرك مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "interior-vacuum-sanitization",
          "title": {
            "en": "Interior Vacuum & Sanitization",
            "ar": "شفط وتعقيم داخلي"
          },
          "heroImage": "/car-wash.png",
          "intro": {
            "en": [
              "Interior Vacuum & Sanitization is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "شفط وتعقيم داخلي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          "slug": "stone-chip-crack-repair",
          "title": {
            "en": "Stone Chip & Crack Repair",
            "ar": "إصلاح ضربات وتشققات"
          },
          "heroImage": "/rollsroyce.png",
          "intro": {
            "en": [
              "Stone Chip & Crack Repair is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "إصلاح ضربات وتشققات مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        },
        {
          "slug": "glass-polishing",
          "title": {
            "en": "Glass Polishing",
            "ar": "تلميع الزجاج"
          },
          "heroImage": "/rollsroyce.png",
          "intro": {
            "en": [
              "Glass Polishing is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "تلميع الزجاج مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
              "Water Repellent Treatment is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "طبقة طاردة للماء مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
              "Windshield Replacement is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "استبدال الزجاج الأمامي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
              "Windshield Protection – Light is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "حماية الزجاج – لايت مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
              "Windshield Protection – City is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "حماية الزجاج – سيتي مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
              "Windshield Protection – Extreme is designed for Doha driving conditions—heat, dust, and daily wear—delivering a premium finish with controlled installation and quality checks.",
              "You will receive clear scope, a step-by-step process, and aftercare guidance to keep results consistent long after delivery."
            ],
            "ar": [
              "حماية الزجاج – إكستريم مصمم لظروف القيادة في الدوحة—الحرارة والغبار والاستخدام اليومي—مع تشطيب فاخر وتركيب مدروس وفحص جودة.",
              "ستحصل على نطاق خدمة واضح وخطوات تنفيذ وتعليمات عناية للحفاظ على النتيجة بعد التسليم."
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
          ]
        }
      ]
    }
  ]
} as any;
