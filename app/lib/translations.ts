// Translation system for English and Arabic
export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      blog: "Blog",
      gallery: "Gallery",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      bookNow: "Book Now",
    },

    // Hero Section
    hero: {
      title: "Premium PPF, Detailing & Tint",
      subtitle: "in Doha, Qatar",
      tagline: "Precision. Protection. Performance.",
      description:
        "Showroom-level detailing, protection, and finishing engineered for Qatar’s heat, sun, and sand.",
      cta1: "Book Now",
      cta2: "View Services",
    },

    // Trust Strip
    trust: {
      location: "Doha, Qatar",
      service1: "Premium Detailing",
      service2: "Ceramic & Graphene Coating",
      service3: "Paint Protection Film (PPF)",
    },

    // Services
    services: {
      subservicesLabel: "Subservices",
      title: "Premium Services",
      subtitle: "Comprehensive automotive care tailored to your vehicle",
      viewAll: "View All Services",
      getQuote: "Get a Quote",
      learnMore: "Learn More",

      categories: {
        all: "All Services",
        protection: "Protection",
        detailing: "Detailing",
        customization: "Customization",
        repair: "Repair",
      },

      highlight: {
        kicker: "Comprehensive automotive care",
        title: "Premium Services",
        lead: "Precision. Protection. Performance crafted finishes built for Qatar’s roads and sun.",
        viewAll: "View All Services",
        learnMore: "Learn More",
        signatureBadge: "Signature Service",
        dohaPill: "Doha • Qatar",
        bottomText:
          "Not sure which package fits your car? Explore services or book a quick consultation for a precise recommendation.",
        contactCta: "Contact",
        meta: {
          premiumTop: "Premium",
          premiumBottom: "Materials",
          expertTop: "Expert",
          expertBottom: "Technicians",
          luxuryTop: "Luxury",
          luxuryBottom: "Finish",
        },
      },

      list: {
        polish: "Polishing",
        detailing: "Detailing Services",
        pdrandpaint: "PDR & Paint Services",
        ceramicCoating: "Ceramic Coating",
        protection: "Protection",
        paintProtection: "Paint Protection Film (PPF)",
        rubberizedPaint: "Rubberized Paint / Plasti Dip",
        smartRepair: "Smart Repair",
        pdr: "Paintless Dent Repair (PDR)",
        scratchAdjustment: "Scratch & Dent Correction",
        guardColorChange: "Protective Film Color Change",
        paintColorChange: "Rubberized Paint Color Change",
        interiorPolish: "Interior Detailing",
        exteriorPolish: "Exterior Detailing",
        nanoCeramicRims: "Wheel Nano Ceramic Coating",
        nanoCeramicBody: "Body Nano Ceramic Coating",
        nanoLeather: "Leather Nano Protection",
        windshield: "Windshield Services",
        blackEdition: "Color PPF",
        defenderConversion: "Custom Defender Body Conversion",
        accessoriesPainting: "Accessories Painting",
      },

      descriptions: {
        ceramicCoating:
          "Advanced ceramic protection for deep gloss, chemical resistance, and long-term durability.",
        paintProtection:
          "Premium PPF installation to protect paint from chips, scratches, and everyday wear.",
        polish:
          "Professional paint correction and polishing for a crisp, mirror-like finish.",
        blackEdition:
          "Elevate the look with premium Color PPF and refined finishing details.",
        smartRepair:
          "Targeted repair for minor damage—restoring surfaces with precision and clean results.",
        nanoLeather:
          "Premium nano protection for leather—helps resist stains, wear, and discoloration.",

        polishDesc:
          "Multi-stage paint correction and polishing to remove swirl marks and enhance clarity.",
        ceramicCoatingDesc:
          "High-grade ceramic / graphene coating with multi-year performance when maintained properly.",
        protectionDesc:
          "A complete protection ecosystem—PPF, coatings, glass treatments, and more.",
        paintProtectionDesc:
          "Professional PPF installation with clean edges, proper alignment, and durable adhesion.",
        rubberizedPaintDesc:
          "Peelable protective paint with customizable colors—ideal for temporary styling changes.",
        smartRepairDesc:
          "Smart repair for scuffs, minor paint defects, trim imperfections, and localized refinishing.",
        pdrDesc:
          "Dent removal without repainting—preserves the original finish where possible.",
        scratchAdjustmentDesc:
          "Scratch and dent correction with minimal paint intervention for a clean OEM look.",
        guardColorChangeDesc:
          "Refresh the style by changing the color of your protective film—without harming the original paint.",
        paintColorChangeDesc:
          "Transform the appearance with a new rubberized color—durable, removable, and cleanly applied.",
        interiorPolishDesc:
          "Deep interior cleaning with careful treatment for leather, plastics, and fabrics.",
        exteriorPolishDesc:
          "Complete exterior detailing—wash, decontamination, polish, and final finishing touches.",
        nanoCeramicRimsDesc:
          "Wheel coating that helps reduce brake dust buildup and makes cleaning easier.",
        nanoCeramicBodyDesc:
          "Full-body coating application for enhanced gloss and a protective hydrophobic layer.",
        nanoLeatherDesc:
          "Nano treatment for leather that helps resist stains and keeps surfaces looking newer for longer.",
        windshieldDesc:
          "Repair, polishing, and protective treatments for clarity, safety, and improved visibility.",
        blackEditionDesc:
          "Color PPF delivers a premium transformation with a durable, removable, high-gloss finish that protects the original paint.",
        defenderConversionDesc:
          "Custom Defender body kit installation with precise fitment and professional finishing.",
        accessoriesPaintingDesc:
          "Professional paintwork for trims and accessories with clean preparation and durable results.",
      },
    },

    // Packages
    packages: {
      title: "Premium Packages",
      mostPopular: "Most Popular",
      essential: {
        name: "Essential",
        description: "Ideal for regular maintenance and a clean, refined finish",
        price: "From QAR 2,500",
        feature1: "Exterior Polish",
        feature2: "Interior Cleaning",
        feature3: "Glass Treatment",
        feature4: "Tire & Trim Dressing",
      },
      premium: {
        name: "Premium",
        description: "Complete care with enhanced protection and detailing depth",
        price: "From QAR 5,500",
        feature1: "Paint Correction",
        feature2: "Ceramic Coating",
        feature3: "Interior Deep Clean",
        feature4: "Leather Protection",
        feature5: "Engine Bay Detailing",
      },
      elite: {
        name: "Elite",
        description: "Ultimate luxury protection and showroom-grade finishing",
        price: "From QAR 12,000",
        feature1: "Full Paint Protection Film (PPF)",
        feature2: "Premium Ceramic / Graphene Coating",
        feature3: "Complete Interior Restoration",
        feature4: "Nano Leather Protection",
        feature5: "Windshield Protection",
        feature6: "Color PPF Options",
      },
    },

    // Process
    process: {
      title: "Our Process",
      subtitle: "Excellence in every detail",
      step1: {
        title: "Inspection",
        description: "A thorough assessment to identify needs, risks, and best-fit solutions",
      },
      step2: {
        title: "Preparation",
        description: "Safe wash, decontamination, and precision prep for perfect results",
      },
      step3: {
        title: "Correction",
        description: "Refinement of paint and surfaces to restore clarity and depth",
      },
      step4: {
        title: "Protection & Delivery",
        description: "Final protection, quality control, and delivery with aftercare guidance",
      },
    },

    // Gallery
    gallery: {
      title: "Our Work",
      subtitle: "Precision meets perfection",
      viewFull: "View Full Gallery",
    },

    // Before/After
    beforeAfter: {
      title: "Transformations",
      before: "Before",
      after: "After",
    },

    // 3D Experience
    experience3d: {
      title: "Explore Our Packages",
      subtitle: "Interactive 3D vehicle customization",
      rotateHint: "Drag to rotate",
      explorePackages: "Explore Packages",
      placeholderTitle: "Interactive 3D Experience",
      placeholderText: "3D car viewer with customization options",
      placeholderNote: "(Three.js integration ready)",
    },

    // Testimonials
    testimonials: {
      title: "Client Reviews",
      subtitle: "What our clients say",
    },

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      viewAll: "View All FAQs",
    },

    // Final CTA
    finalCta: {
      title: "Ready to Transform Your Vehicle?",
      subtitle: "Book your appointment today",
      trustText: "Trusted by luxury car owners across Doha",
    },

    // Contact
    contact: {
      title: "Get in Touch",
      subtitle: "We are here to help",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        carModel: "Car Model",
        service: "Service Required",
        date: "Preferred Date",
        time: "Preferred Time",
        notes: "Additional Notes",
        submit: "Submit Request",
      },
      info: {
        whatsapp: "WhatsApp",
        phone: "Phone",
        location: "Location",
        hours: "Working Hours",
      },
      success: "Thank you! We will contact you soon.",
    },

    // Footer
    footer: {
      description:
        "Premium automotive care in Doha—PPF (gloss, matte, satin, and color), ceramic & graphene coatings, paint correction, interior deep cleaning, PDR, and professional paint services.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },

    // Rotating Car Gallery
    rotatingGallery: {
      title: "Luxury Fleet Showcase",
      subtitle: "Experience automotive excellence through dynamic perspectives",
      car1Title: "Elite Performance",
      car1Desc: "Power, balance, and precision",
      car2Title: "Executive Class",
      car2Desc: "Refined comfort and presence",
      car3Title: "Ultra Luxury",
      car3Desc: "Uncompromising craftsmanship",
      car4Title: "Classic Elegance",
      car4Desc: "Timeless beauty and heritage",
      car5Title: "Performance Icon",
      car5Desc: "Racing DNA, road-ready control",
      car6Title: "Supercar Dream",
      car6Desc: "Pure aspiration and design",
    },

    // 360 Inspection
    inspection360: {
      title: "360° Inspection",
      subtitle: "Every angle perfected",
      description:
        "We examine every detail from all perspectives—ensuring flawless results that exceed expectations.",
      frontView: "Front View",
      sideProfile: "Side Profile",
      rearView: "Rear View",
      threeQuarter: "Three-Quarter View",
      rotation: "Rotation",
    },

    // Scrolling Car Showcase
    scrollingShowcase: {
      car1Title: "Supreme Engineering",
      car1Desc: "Where power meets precision in perfect harmony",
      car2Title: "Executive Class",
      car2Desc: "Sophistication meets performance in every detail",
      car3Title: "Ultra Luxury",
      car3Desc: "Where craftsmanship and innovation converge",
    },

    // Cinematic Showcase
    cinematicShowcase: {
      title: "Excellence in Every Detail",
      subtitle: "Experience automotive perfection through our signature services",
      premiumDetailingTitle: "Premium Detailing",
      premiumDetailingDesc:
        "Meticulous care for every surface—restoring your vehicle to showroom perfection.",
      ceramicCoatingTitle: "Ceramic & Graphene Coating",
      ceramicCoatingDesc:
        "Advanced protection for lasting brilliance, easier cleaning, and durable performance.",
      paintCorrectionTitle: "Paint Correction",
      paintCorrectionDesc:
        "Expert refinement that removes defects and restores a flawless mirror finish.",
      interiorLuxuryTitle: "Interior Luxury",
      interiorLuxuryDesc:
        "Deep cleaning and premium leather care for comfort, freshness, and protection.",
      carsDetailedLabel: "Cars Detailed",
      happyClientsLabel: "Happy Clients",
      yearsExperienceLabel: "Years Experience",
      averageRatingLabel: "Average Rating",
    },

    // Gallery Page
    galleryPage: {
      title: "Gallery",
      subtitle: "Explore Our Premium Work",
      description: "Browse our collection of expertly detailed luxury vehicles",
      filterAll: "All",
      filterExterior: "Exterior",
      filterInterior: "Interior",
      filterCeramic: "Coating",
      filterProtection: "Paint Protection",
      beforeAfter: "Before & After",
      featured: "Featured Projects",
      recent: "Recent Work",
      viewButton: "View →",
      luxuryShowroom: "Luxury Showroom",
      detailWork: "Detail Work",
      paintCorrection: "Paint Correction",
      wheelDetailing: "Wheel Detailing",
      polishDetail: "Polish Detail",
      interiorDetail: "Interior Detail",
      studioLighting: "Studio Lighting",
    },

    // About Page
    aboutPage: {
      title: "About Us",
      subtitle: "Luxury Car Detailing Excellence in Doha",
      description:
        "Rodeo Drive is Doha’s premium destination for detailing and protection—focused on exceptional results for discerning vehicle owners.",
      ourStory: "Our Story",
      ourMission: "Our Mission",
      ourVision: "Our Vision",
      storyText:
        "Founded in Doha, Rodeo Drive has become a trusted destination for luxury car detailing and protection. Our passion for automotive excellence drives us to deliver consistent, high-end results for every vehicle.",
      missionText:
        "To deliver world-class detailing and protection services that preserve the beauty and value of every vehicle through meticulous craftsmanship and premium materials.",
      visionText:
        "To set a new benchmark for luxury automotive care in the Middle East—defined by quality, professionalism, and customer satisfaction.",
      whyChooseUs: "Why Choose Us",
      whyChooseUsSubtitle: "Excellence in every aspect",
      reason1Title: "Expert Technicians",
      reason1Desc: "Skilled professionals trained for luxury finishes and delicate materials",
      reason2Title: "Premium Products",
      reason2Desc: "High-grade coatings, films, and detailing systems from trusted brands",
      reason3Title: "State-of-the-Art Facility",
      reason3Desc: "Controlled environment and specialized tools for consistent results",
      reason4Title: "Warranty Protected",
      reason4Desc: "Comprehensive service warranties for confidence and peace of mind",
      ourTeam: "Our Team",
      ourTeamSubtitle: "Meet the professionals",
      ourValues: "Our Values",
      ourValuesSubtitle: "What drives us",
      value1: "Excellence",
      value2: "Integrity",
      value3: "Innovation",
      value4: "Customer Focus",
      valueExcellenceDesc:
        "We pursue perfection in every detail—because premium work is built on consistency.",
      valueProtectionTitle: "Protection",
      valueProtectionDesc:
        "We protect what matters—using proven systems designed for harsh climates.",
      valueTrustTitle: "Trust",
      valueTrustDesc:
        "We build long-term relationships through transparency, reliability, and honest advice.",
      valuePrecisionTitle: "Precision",
      valuePrecisionDesc:
        "Every step is measured—clean edges, proper prep, and meticulous finishing.",
      stats1Label: "Years Experience",
      stats2Label: "Happy Clients",
      stats3Label: "Projects Completed",
      stats4Label: "Satisfaction Rate",
      statsYearsExp: "Years Experience",
      statsCarsDetailed: "Cars Detailed",
      statsClientSatisfaction: "Client Satisfaction",
      statsCustomerSupport: "Customer Support",
      expertCraftsmanship: "Expert Craftsmanship",
      certifiedProfessionals: "Certified Professionals",
      certifiedProfessionalsDesc:
        "Our team is trained and certified in the latest detailing techniques and protection systems.",
      premiumProducts: "Premium Products",
      premiumProductsDesc:
        "We use only high-quality automotive care products from trusted global brands.",
      stateOfTheArtFacility: "State-of-the-Art Facility",
      stateOfTheArtFacilityDesc:
        "A controlled environment that ensures perfect application conditions.",
      warrantyProtected: "Warranty Protected",
      warrantyProtectedDesc:
        "Our services are backed by warranties for added peace of mind.",
      experienceRodeoDrive: "Experience the Rodeo Drive Difference",
      experienceRodeoDriveDesc:
        "Book your appointment and discover why our clients trust us for premium automotive care in Doha.",
      bookNowBtn: "Book Now",
      contactUsBtn: "Contact Us",
    },

    // FAQ Page
    faqPage: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know",
      description:
        "Find quick answers about our services, pricing, timelines, and booking process.",
      general: "General",
      services: "Services",
      pricing: "Pricing",
      booking: "Booking",
      q1: "What services do you offer?",
      a1:
        "We offer premium detailing, ceramic and graphene coatings, paint protection film (PPF), paint correction, interior detailing, PDR, and select customization services.",
      q2: "How long does a typical service take?",
      a2:
        "Timelines vary by service. Basic detailing can take 3–4 hours, while coatings or PPF may take 1–3 days depending on the scope.",
      q3: "Do you work on all makes and models?",
      a3:
        "Yes. We work on all makes and models, with special care and processes for luxury and high-end vehicles.",
      q4: "What is ceramic coating and how long does it last?",
      a4:
        "Ceramic coating is a protective layer that bonds to the paint, improving gloss and resistance to contamination. With proper maintenance, premium coatings can last 3–5 years.",
      q5: "How much does PPF cost?",
      a5:
        "PPF pricing depends on coverage. Partial front packages start from around QAR 3,000, while full vehicle protection typically ranges from QAR 8,000 to QAR 15,000.",
      q6: "Do you offer mobile detailing?",
      a6:
        "For select services, yes. However, most premium applications are performed in our facility to ensure the highest quality and durability.",
      q7: "How do I book an appointment?",
      a7:
        "Book online, call us directly, or message us on WhatsApp. We recommend booking 1–2 weeks in advance for premium services.",
      q8: "Do you provide warranties?",
      a8:
        "Yes. Our services include workmanship coverage, and select products may include manufacturer warranties depending on the package.",
      q9: "What payment methods do you accept?",
      a9:
        "We accept cash, debit/credit cards, and bank transfers. Payment terms may vary by package.",
      q10: "Can I wait while my car is being serviced?",
      a10:
        "For short services, yes. For longer treatments, we can arrange pickup and delivery within Doha (subject to availability).",
      stillHaveQuestions: "Still have questions?",
      contactUs: "Contact us for more information",
      workingHours: "Sat–Thu: 9 AM – 9 PM",
      quickResponse: "Fast response via chat",
      chatNow: "Chat Now",
    },

    // Contact Page
    contactPage: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      description: "Book your appointment or reach out to our team",
      formTitle: "Send us a message",
      formSubtitle: "We will get back to you within 24 hours",
      contactInfoTitle: "Contact Information",
      contactInfoSubtitle: "Reach us through any of these channels",
      locationTitle: "Visit Our Facility",
      locationSubtitle: "See our detailing center in Doha",
      address: "Doha, Qatar",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      hoursLabel: "Working Hours",
      hoursValue: "Saturday - Thursday: 9 AM - 9 PM",
      socialTitle: "Follow Us",
      successMessage: "Thanks for contacting us! We will get back to you shortly.",
      errorMessage: "Something went wrong. Please try again.",
      namePlaceholder: "John Doe",
      carModelPlaceholder: "e.g., Mercedes S-Class 2023",
      selectService: "Select a service...",
      otherService: "Other",
      notesPlaceholder: "Any specific requirements or questions...",
      chatOnWhatsApp: "Chat on WhatsApp",
      callNow: "Call Now",
      getDirections: "Get Directions",
      mapPlaceholder: "Map Placeholder",
      mapNote: "(Google Maps integration ready)",
    },

    packagesNew: {
      vipTitle: "Detailing Package",
      standardTitle: "Standard Package",
      premiumTitle: "Premium Package",
      featuredBadge: "Most Popular",
      vipFeatures: [
        "Interior Deep Cleaning",
        "Exterior Polishing",
        "Wheel Nano Coating",
        "Leather Nano Protection",
        "Body Nano Coating",
        "Paint Correction",
        "Interior Coating",
      ],
      standardFeatures: [
        "Full Car PPF Installation",
        "Exterior Polishing",
        "Wheel Protection",
        "Leather Protection",
        "Solar Window Film",
        "Front-End PPF",
        "Windshield (Light)",
      ],
      premiumFeatures: [
        "Interior Protection",
        "Full Exterior PPF Installation",
        "Solar Window Film",
        "Windshield (Extreme)",
        "Leather Nano Protection",
        "Wheel Nano Coating",
        "One Free Extra Service",
      ],
    },

    servicesGroups: {
      ppfTitle: "Full Protection – PPF",
      ppfDesc: "Complete PPF solutions for maximum paint preservation.",
      ppfSubservices: [
        "Full Body PPF",
        "Front-End PPF (Bumper, Hood, Fenders, Mirrors)",
        "Gloss / Matte / Satin PPF",
        "Self-Healing PPF",
        "Headlight, Taillight & Interior PPF",
        "PPF Removal & Replacement",
      ],

      solarTitle: "Window Solar Film",
      solarDesc: "Heat and UV reduction with premium tint and clear protection.",
      solarSubservices: [
        "Nano Ceramic Tint",
        "Heat & UV Protection Film",
        "Windshield Clear Protection",
        "Sunroof & Panoramic Roof Tint",
        "Tint Removal & Reinstallation",
      ],

      detailingTitle: "Detailing & Coating",
      detailingDesc: "Paint correction, deep cleaning, and advanced coating systems.",
      detailingSubservices: [
        "Exterior Detailing & Paint Correction",
        "Interior Deep Cleaning",
        "Ceramic & Graphene Coating",
        "Glass, Wheel & Interior Coating",
      ],

      paintRepairTitle: "Paint & Repair Services",
      paintRepairDesc:
        "Smart repair and refinishing solutions with precise color matching.",
      paintRepairSubservices: [
        "Smart Paint Repair",
        "Rubber / Peelable Paint",
        "Normal & Full Repaint",
        "Paintless Dent Repair (PDR)",
        "Color Matching & Panel Painting",
      ],

      washTitle: "Car Wash Services",
      washDesc: "Premium hand wash, foam wash, and safe interior sanitization.",
      washSubservices: [
        "Basic & Premium Hand Wash",
        "Foam Wash",
        "Engine Bay Cleaning",
        "Interior Vacuum & Sanitization",
      ],

      windshieldTitle: "Windshield Services",
      windshieldDesc: "Repair, protection and replacement for maximum visibility.",
      windshieldSubservices: [
        "Stone Chip & Crack Repair",
        "Glass Polishing",
        "Water Repellent Treatment",
        "Windshield Replacement",
      ],
    },
  },

  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      blog: "المدونة",
      gallery: "المعرض",
      about: "من نحن",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      bookNow: "احجز الآن",
    },

    // Hero Section
    hero: {
      title: "خدمات PPF والتفصيل والتظليل الفاخرة",
      subtitle: "في الدوحة، قطر",
      tagline: "دقة. حماية. أداء.",
      description:
        "تفصيل وحماية وتشطيب بمستوى صالات العرض مصمم ليتحمّل حرارة قطر وشمسها وأجواءها الرملية.",
      cta1: "احجز الآن",
      cta2: "عرض الخدمات",
    },

    // Trust Strip
    trust: {
      location: "الدوحة، قطر",
      service1: "تفصيل فاخر",
      service2: "طلاء سيراميك وجرَافين",
      service3: "فيلم حماية الطلاء (PPF)",
    },

    // Services
    services: {
      subservicesLabel: "الخدمات الفرعية",
      title: "خدمات مميزة",
      subtitle: "حلول متكاملة للعناية بالسيارة مناسبة لسيارتك تمامًا",
      viewAll: "عرض جميع الخدمات",
      getQuote: "اطلب عرض سعر",
      learnMore: "اعرف المزيد",

      categories: {
        all: "جميع الخدمات",
        protection: "الحماية",
        detailing: "التفصيل",
        customization: "التخصيص",
        repair: "الإصلاح",
      },

      highlight: {
        kicker: "حلول متكاملة للعناية بالسيارات",
        title: "خدماتنا المميزة",
        lead: "دقة. حماية. أداء  تشطيبات راقية مصممة لتناسب طرق قطر وحرارة الشمس.",
        viewAll: "عرض جميع الخدمات",
        learnMore: "اعرف المزيد",
        signatureBadge: "خدمة مميزة",
        dohaPill: "الدوحة • قطر",
        bottomText:
          "غير متأكد من الباقة الأنسب لسيارتك؟ استعرض الخدمات أو احجز استشارة سريعة للحصول على توصية دقيقة.",
        contactCta: "تواصل معنا",
        meta: {
          premiumTop: "مواد",
          premiumBottom: "فاخرة",
          expertTop: "فنيون",
          expertBottom: "محترفون",
          luxuryTop: "تشطيب",
          luxuryBottom: "فاخر",
        },
      },

      list: {
        polish: "تلميع وتصحيح طلاء",
        detailing: "خدمات التفصيل",
        pdrandpaint: "خدمات PDR والدهان",
        ceramicCoating: "طلاء سيراميك",
        protection: "الحماية",
        paintProtection: "فيلم حماية الطلاء (PPF)",
        rubberizedPaint: "دهان مطاطي / بلاستي ديب",
        smartRepair: "إصلاحات ذكية (Smart Repair)",
        pdr: "إزالة الانبعاجات بدون دهان (PDR)",
        scratchAdjustment: "تصحيح الخدوش والانبعاجات",
        guardColorChange: "تغيير لون فيلم الحماية",
        paintColorChange: "تغيير لون الدهان المطاطي",
        interiorPolish: "تفصيل داخلي",
        exteriorPolish: "تفصيل خارجي",
        nanoCeramicRims: "نانو سيراميك للجنوط",
        nanoCeramicBody: "نانو سيراميك للهيكل",
        nanoLeather: "حماية نانو للجلد",
        windshield: "خدمات الزجاج الأمامي",
        blackEdition: "فيلم حماية ملون (Color PPF)",
        defenderConversion: "تحويل ديفندر (Body Conversion)",
        accessoriesPainting: "دهان الإكسسوارات",
      },

      descriptions: {
        ceramicCoating:
          "حماية سيراميكية متقدمة تمنح لمعانًا عميقًا ومقاومة ممتازة للمواد الكيميائية وعمرًا أطول.",
        paintProtection:
          "تركيب PPF احترافي لحماية الطلاء من ضربات الحصى والخدوش والاستخدام اليومي.",
        polish:
          "تصحيح وتلميع احترافي يعيد للطلاء صفاءه ولمعانه بمظهر مرآتي.",
        blackEdition:
          "ترقية المظهر عبر Color PPF وتشطيبات دقيقة بتفاصيل فاخرة.",
        smartRepair:
          "إصلاحات موضعية للأضرار البسيطة مع نتائج نظيفة ودقيقة.",
        nanoLeather:
          "حماية نانو للجلد تقلّل امتصاص البقع وتساعد على مقاومة التآكل وتغيّر اللون.",

        polishDesc:
          "تصحيح متعدد المراحل لإزالة آثار السويرل والخدوش الخفيفة وإبراز عمق اللون.",
        ceramicCoatingDesc:
          "طلاء سيراميك/جرَافين عالي الجودة بأداء طويل الأمد مع الصيانة المناسبة.",
        protectionDesc:
          "منظومة حماية شاملة تشمل PPF والطلاءات ومعالجات الزجاج وغيرها.",
        paintProtectionDesc:
          "تركيب PPF بحواف نظيفة ومحاذاة دقيقة والتصاق قوي لضمان المتانة.",
        rubberizedPaintDesc:
          "دهان قابل للإزالة بألوان مختلفة—مثالي لتغيير الشكل دون التأثير على الطلاء الأصلي.",
        smartRepairDesc:
          "إصلاح خدوش وضربات بسيطة وعيوب موضعية وتشطيبات دقيقة مع أقل تدخل ممكن.",
        pdrDesc:
          "إزالة الانبعاجات دون إعادة دهان عند الإمكان للحفاظ على الطلاء الأصلي.",
        scratchAdjustmentDesc:
          "تصحيح الخدوش والانبعاجات بمظهر قريب من المصنع دون دهان كامل.",
        guardColorChangeDesc:
          "تغيير لون فيلم الحماية لتجديد المظهر دون الإضرار بالطلاء الأصلي.",
        paintColorChangeDesc:
          "تغيير لون الدهان المطاطي بألوان مخصصة مع تطبيق نظيف وقابل للإزالة.",
        interiorPolishDesc:
          "تنظيف داخلي عميق مع عناية بالجلد والبلاستيك والأقمشة بأمان.",
        exteriorPolishDesc:
          "تفصيل خارجي كامل: غسيل آمن، إزالة تلوث، تلميع، وتشطيب نهائي.",
        nanoCeramicRimsDesc:
          "حماية للجنوط تقلّل تراكم غبار الفرامل وتسهّل التنظيف.",
        nanoCeramicBodyDesc:
          "تطبيق نانو سيراميك على كامل الهيكل لطبقة حماية ولمعان ومفعول طارد للماء.",
        nanoLeatherDesc:
          "معالجة نانو للجلد تساعد على مقاومة البقع والحفاظ على مظهره لفترة أطول.",
        windshieldDesc:
          "إصلاح وتلميع ومعالجات حماية للزجاج لتحسين الرؤية والأمان.",
        blackEditionDesc:
          "يوفّر Color PPF تحولًا فاخرًا بلمعة عالية مع حماية متينة وقابلة للإزالة تحافظ على الطلاء الأصلي.",
        defenderConversionDesc:
          "تركيب طقم تحويل ديفندر مع ضبط المقاسات وتشطيب احترافي.",
        accessoriesPaintingDesc:
          "دهان إكسسوارات السيارة بتحضير صحيح وطبقات متينة وتشطيب نظيف.",
      },
    },

    // Packages
    packages: {
      title: "باقات فاخرة",
      mostPopular: "الأكثر طلبًا",
      essential: {
        name: "أساسي",
        description: "مثالي للصيانة الدورية ولمظهر نظيف ومرتب",
        price: "من ٢,٥٠٠ ر.ق",
        feature1: "تلميع خارجي",
        feature2: "تنظيف داخلي",
        feature3: "معالجة الزجاج",
        feature4: "تلميع الإطارات والقطع الخارجية",
      },
      premium: {
        name: "مميز",
        description: "عناية متقدمة مع حماية وتشطيب أعمق",
        price: "من ٥,٥٠٠ ر.ق",
        feature1: "تصحيح الطلاء",
        feature2: "طلاء سيراميك",
        feature3: "تنظيف داخلي عميق",
        feature4: "حماية للجلد",
        feature5: "تفصيل حجرة المحرك",
      },
      elite: {
        name: "نخبة",
        description: "أقصى مستوى من الحماية والفخامة بمظهر صالة العرض",
        price: "من ١٢,٠٠٠ ر.ق",
        feature1: "PPF كامل للسيارة",
        feature2: "طلاء سيراميك/جرَافين فاخر",
        feature3: "ترميم داخلي شامل",
        feature4: "حماية نانو للجلد",
        feature5: "حماية الزجاج الأمامي",
        feature6: "خيارات Color PPF",
      },
    },

    // Process
    process: {
      title: "خطوات العمل",
      subtitle: "التميز في كل تفصيلة",
      step1: {
        title: "الفحص",
        description: "تقييم شامل لتحديد احتياج السيارة وأفضل الحلول المناسبة",
      },
      step2: {
        title: "التحضير",
        description: "غسيل آمن وإزالة تلوث وتجهيز دقيق لضمان أفضل نتيجة",
      },
      step3: {
        title: "التصحيح",
        description: "تحسين الطلاء والأسطح لاستعادة الصفاء والعمق واللمعان",
      },
      step4: {
        title: "الحماية والتسليم",
        description: "حماية نهائية، فحص جودة، وتسليم مع إرشادات العناية بعد الخدمة",
      },
    },

    // Gallery
    gallery: {
      title: "أعمالنا",
      subtitle: "الدقة تلتقي بالكمال",
      viewFull: "عرض المعرض الكامل",
    },

    // Before/After
    beforeAfter: {
      title: "النتائج",
      before: "قبل",
      after: "بعد",
    },

    // 3D Experience
    experience3d: {
      title: "استكشف باقاتنا",
      subtitle: "تخصيص تفاعلي ثلاثي الأبعاد للمركبة",
      rotateHint: "اسحب للتدوير",
      explorePackages: "استكشف الباقات",
      placeholderTitle: "تجربة ثلاثية الأبعاد تفاعلية",
      placeholderText: "عارض سيارات ثلاثي الأبعاد مع خيارات التخصيص",
      placeholderNote: "(جاهز لتكامل Three.js)",
    },

    // Testimonials
    testimonials: {
      title: "آراء العملاء",
      subtitle: "ماذا يقول عملاؤنا",
    },

    // FAQ
    faq: {
      title: "الأسئلة الشائعة",
      viewAll: "عرض جميع الأسئلة",
    },

    // Final CTA
    finalCta: {
      title: "جاهز لتجديد سيارتك؟",
      subtitle: "احجز موعدك اليوم",
      trustText: "موثوق لدى مُلّاك السيارات الفاخرة في الدوحة",
    },

    // Contact
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك",
      form: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        carModel: "موديل السيارة",
        service: "الخدمة المطلوبة",
        date: "التاريخ المفضل",
        time: "الوقت المفضل",
        notes: "ملاحظات إضافية",
        submit: "إرسال الطلب",
      },
      info: {
        whatsapp: "واتساب",
        phone: "هاتف",
        location: "الموقع",
        hours: "ساعات العمل",
      },
      success: "شكرًا لك! سنقوم بالتواصل معك قريبًا.",
    },

    // Footer
    footer: {
      description:
        "العناية الفاخرة بالسيارات في الدوحة—PPF (لامع، مطفي، ساتان، وملون)، طلاء سيراميك وجرَافين، تصحيح طلاء، تنظيف داخلي عميق، PDR، وخدمات دهان احترافية.",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },

    // Rotating Car Gallery
    rotatingGallery: {
      title: "عرض سيارات فاخرة",
      subtitle: "استمتع بتجربة استثنائية عبر زوايا ديناميكية",
      car1Title: "أداء متميز",
      car1Desc: "قوة وتوازن ودقة",
      car2Title: "فئة رجال الأعمال",
      car2Desc: "هيبة وراحة وفخامة",
      car3Title: "فخامة فائقة",
      car3Desc: "حرفية بلا تنازلات",
      car4Title: "أناقة كلاسيكية",
      car4Desc: "جمال خالد وتراث",
      car5Title: "رمز الأداء",
      car5Desc: "روح سباقات وتحكم",
      car6Title: "حلم السوبركار",
      car6Desc: "تصميم وطموح",
    },

    // 360 Inspection
    inspection360: {
      title: "فحص ٣٦٠°",
      subtitle: "كل زاوية بإتقان",
      description:
        "نفحص أدق التفاصيل من جميع الزوايا—لنضمن نتيجة مثالية تتجاوز التوقعات.",
      frontView: "الواجهة الأمامية",
      sideProfile: "الجانب",
      rearView: "الواجهة الخلفية",
      threeQuarter: "زاوية ثلاثة أرباع",
      rotation: "تدوير",
    },

    // Scrolling Car Showcase
    scrollingShowcase: {
      car1Title: "هندسة فائقة",
      car1Desc: "حيث تلتقي القوة بالدقة في تناغم مثالي",
      car2Title: "فئة رجال الأعمال",
      car2Desc: "فخامة مع أداء في كل تفصيلة",
      car3Title: "فخامة فائقة",
      car3Desc: "حيث تلتقي الحرفية بالابتكار",
    },

    // Cinematic Showcase
    cinematicShowcase: {
      title: "التميز في كل التفاصيل",
      subtitle: "اختبر كمال العناية بالسيارات عبر خدماتنا المميزة",
      premiumDetailingTitle: "تفصيل فاخر",
      premiumDetailingDesc:
        "عناية دقيقة بكل سطح—لاستعادة مظهر صالة العرض.",
      ceramicCoatingTitle: "طلاء سيراميك وجرَافين",
      ceramicCoatingDesc:
        "حماية متقدمة ولمعان طويل الأمد وتنظيف أسهل وأداء متين.",
      paintCorrectionTitle: "تصحيح الطلاء",
      paintCorrectionDesc:
        "إزالة العيوب واستعادة صفاء الطلاء بلمعة مرآتيّة.",
      interiorLuxuryTitle: "فخامة داخلية",
      interiorLuxuryDesc:
        "تنظيف عميق وعناية فاخرة بالجلد لراحة ونظافة وحماية.",
      carsDetailedLabel: "سيارات تم خدمتها",
      happyClientsLabel: "عملاء سعداء",
      yearsExperienceLabel: "سنوات خبرة",
      averageRatingLabel: "متوسط التقييم",
    },

    // Gallery Page
    galleryPage: {
      title: "المعرض",
      subtitle: "استكشف أعمالنا المميزة",
      description: "تصفح مجموعة من السيارات الفاخرة المُعتنى بها باحتراف",
      filterAll: "الكل",
      filterExterior: "الخارجي",
      filterInterior: "الداخلي",
      filterCeramic: "الطلاءات",
      filterProtection: "حماية الطلاء",
      beforeAfter: "قبل وبعد",
      featured: "مشاريع مميزة",
      recent: "أعمال حديثة",
      viewButton: "عرض →",
      luxuryShowroom: "مظهر صالة عرض",
      detailWork: "تفاصيل دقيقة",
      paintCorrection: "تصحيح طلاء",
      wheelDetailing: "تفصيل الجنوط",
      polishDetail: "تلميع",
      interiorDetail: "تفصيل داخلي",
      studioLighting: "إضاءة استوديو",
    },

    // About Page
    aboutPage: {
      title: "من نحن",
      subtitle: "التميز في تفصيل السيارات الفاخرة في الدوحة",
      description:
        "روديو درايف هو وجهتك المميزة في الدوحة لتفصيل وحماية السيارات—بخدمات احترافية تناسب أصحاب الذوق الرفيع.",
      ourStory: "قصتنا",
      ourMission: "مهمتنا",
      ourVision: "رؤيتنا",
      storyText:
        "تأسس روديو درايف في الدوحة ليقدّم مستوى مختلفًا من العناية بالسيارات الفاخرة. نعمل بشغف واحتراف لنقدّم نتائج ثابتة وعالية الجودة لكل سيارة تدخل مركزنا.",
      missionText:
        "تقديم خدمات تفصيل وحماية عالمية المستوى تحافظ على جمال وقيمة السيارة عبر حرفية دقيقة ومواد عالية الجودة.",
      visionText:
        "أن نكون المعيار الأعلى للعناية بالسيارات الفاخرة في الشرق الأوسط—من حيث الجودة والاحتراف ورضا العملاء.",
      whyChooseUs: "لماذا تختارنا",
      whyChooseUsSubtitle: "التميز في كل جانب",
      reason1Title: "فنيون خبراء",
      reason1Desc:
        "محترفون مدربون للتعامل مع التشطيبات الفاخرة والمواد الحساسة",
      reason2Title: "مواد ومنتجات فاخرة",
      reason2Desc:
        "نستخدم طلاءات وأفلام حماية وأنظمة عناية من علامات موثوقة",
      reason3Title: "منشأة متطورة",
      reason3Desc: "بيئة مناسبة مع معدات متخصصة لضمان نتائج ثابتة",
      reason4Title: "مشمول بضمان",
      reason4Desc: "ضمانات شاملة لراحة البال والثقة بالخدمة",
      ourTeam: "فريقنا",
      ourTeamSubtitle: "تعرّف على المحترفين",
      ourValues: "قيمنا",
      ourValuesSubtitle: "ما يميزنا",
      value1: "التميز",
      value2: "النزاهة",
      value3: "الابتكار",
      value4: "التركيز على العميل",
      valueExcellenceDesc:
        "نبحث عن الكمال في كل تفصيلة لأن الجودة تعني الثبات والدقة.",
      valueProtectionTitle: "الحماية",
      valueProtectionDesc:
        "نحمي ما يهم—بأنظمة مثبتة ومناسبة لظروف المناخ القاسي.",
      valueTrustTitle: "الثقة",
      valueTrustDesc:
        "نبني علاقة طويلة الأمد عبر الشفافية والالتزام والنصيحة الصادقة.",
      valuePrecisionTitle: "الدقة",
      valuePrecisionDesc:
        "كل خطوة محسوبة—تحضير صحيح، حواف نظيفة، وتشطيب فائق.",
      stats1Label: "سنوات خبرة",
      stats2Label: "عملاء سعداء",
      stats3Label: "مشاريع منجزة",
      stats4Label: "معدل الرضا",
      statsYearsExp: "سنوات خبرة",
      statsCarsDetailed: "سيارات تم خدمتها",
      statsClientSatisfaction: "رضا العملاء",
      statsCustomerSupport: "دعم العملاء",
      expertCraftsmanship: "حرفية احترافية",
      certifiedProfessionals: "فنيون معتمدون",
      certifiedProfessionalsDesc:
        "فريقنا مُدرّب ومعتمد على أحدث تقنيات التفصيل وأنظمة الحماية.",
      premiumProducts: "منتجات فاخرة",
      premiumProductsDesc:
        "نستخدم منتجات عناية عالية الجودة من علامات عالمية موثوقة.",
      stateOfTheArtFacility: "منشأة متطورة",
      stateOfTheArtFacilityDesc:
        "بيئة مناسبة لتطبيق مثالي وجودة ثابتة.",
      warrantyProtected: "مشمول بضمان",
      warrantyProtectedDesc: "خدماتنا مدعومة بضمانات لمزيد من الثقة وراحة البال.",
      experienceRodeoDrive: "عِش تجربة روديو درايف",
      experienceRodeoDriveDesc:
        "احجز موعدك اليوم واكتشف لماذا يثق بنا عملاؤنا كأفضل متخصصي العناية بالسيارات في الدوحة.",
      bookNowBtn: "احجز الآن",
      contactUsBtn: "تواصل معنا",
    },

    // FAQ Page
    faqPage: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته",
      description:
        "إجابات سريعة لأكثر الأسئلة شيوعًا حول الخدمات والأسعار والمدة والحجز.",
      general: "عام",
      services: "الخدمات",
      pricing: "الأسعار",
      booking: "الحجز",
      q1: "ما هي الخدمات التي تقدمونها؟",
      a1:
        "نقدّم خدمات تفصيل فاخرة، طلاء سيراميك وجرَافين، فيلم حماية الطلاء (PPF)، تصحيح الطلاء، تفصيل داخلي، PDR، وبعض خدمات التخصيص المختارة.",
      q2: "كم تستغرق الخدمة عادةً؟",
      a2:
        "تختلف المدة حسب الخدمة. التفصيل الأساسي قد يستغرق ٣–٤ ساعات، بينما الطلاءات أو PPF قد تستغرق ١–٣ أيام حسب نطاق العمل.",
      q3: "هل تعملون على جميع أنواع السيارات؟",
      a3:
        "نعم. نعمل على جميع الماركات والموديلات، مع إجراءات خاصة للسيارات الفاخرة والتشطيبات الحساسة.",
      q4: "ما هو الطلاء السيراميكي وكم يدوم؟",
      a4:
        "هو طبقة حماية ترتبط بالطلاء لتحسّن اللمعان وتزيد مقاومة التلوث. مع الصيانة المناسبة قد يدوم ٣–٥ سنوات.",
      q5: "كم تكلفة PPF؟",
      a5:
        "تعتمد التكلفة على التغطية. تبدأ حماية الواجهة الأمامية عادةً من حوالي ٣,٠٠٠ ر.ق، بينما قد تتراوح حماية السيارة بالكامل بين ٨,٠٠٠ و١٥,٠٠٠ ر.ق.",
      q6: "هل تقدمون خدمة متنقلة؟",
      a6:
        "لبعض الخدمات المختارة نعم، لكن معظم الخدمات المميزة تُنفّذ داخل المركز لضمان أعلى جودة ومتانة.",
      q7: "كيف أحجز موعدًا؟",
      a7:
        "يمكنك الحجز عبر الموقع أو الاتصال أو عبر واتساب. نوصي بالحجز قبل أسبوع إلى أسبوعين للخدمات المميزة.",
      q8: "هل يوجد ضمان على الخدمات؟",
      a8:
        "نعم. تشمل خدماتنا ضمان جودة العمل، وقد تتضمن بعض المنتجات ضمانات من الشركة المصنعة حسب الباقة.",
      q9: "ما طرق الدفع المتاحة؟",
      a9:
        "نقبل النقد وبطاقات الدفع والتحويل البنكي. قد تختلف الشروط حسب نوع الخدمة أو الباقة.",
      q10: "هل يمكنني الانتظار أثناء الخدمة؟",
      a10:
        "للخدمات القصيرة نعم. للخدمات الطويلة يمكن ترتيب الاستلام والتسليم داخل الدوحة حسب التوفر.",
      stillHaveQuestions: "لا تزال لديك أسئلة؟",
      contactUs: "تواصل معنا للمزيد من المعلومات",
      workingHours: "السبت إلى الخميس: ٩ صباحًا – ٩ مساءً",
      quickResponse: "استجابة سريعة عبر الدردشة",
      chatNow: "دردش الآن",
    },

    // Contact Page
    contactPage: {
      title: "تواصل معنا",
      subtitle: "ابقَ على تواصل",
      description: "احجز موعدك أو تواصل مع فريقنا",
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "سنرد عليك خلال ٢٤ ساعة",
      contactInfoTitle: "معلومات التواصل",
      contactInfoSubtitle: "اختر القناة الأنسب لك",
      locationTitle: "زوروا مركزنا",
      locationSubtitle: "اكتشف مركز التفصيل الخاص بنا في الدوحة",
      address: "الدوحة، قطر",
      phoneLabel: "هاتف",
      whatsappLabel: "واتساب",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
      hoursValue: "السبت - الخميس: ٩ صباحًا - ٩ مساءً",
      socialTitle: "تابعنا",
      successMessage: "شكرًا لتواصلك معنا! سنرد عليك قريبًا.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      namePlaceholder: "محمد أحمد",
      carModelPlaceholder: "مثال: مرسيدس S-Class 2023",
      selectService: "اختر خدمة...",
      otherService: "أخرى",
      notesPlaceholder: "أي متطلبات أو أسئلة إضافية...",
      chatOnWhatsApp: "دردش عبر واتساب",
      callNow: "اتصل الآن",
      getDirections: "احصل على الاتجاهات",
      mapPlaceholder: "عنصر الخريطة",
      mapNote: "(جاهز لتكامل خرائط Google)",
    },

    packagesNew: {
      vipTitle: "باقة التفصيل",
      standardTitle: "باقة قياسية",
      premiumTitle: "باقة بريميوم",
      featuredBadge: "الأكثر طلبًا",
      vipFeatures: [
        "تنظيف داخلي عميق",
        "تلميع خارجي",
        "نانو سيراميك للجنوط",
        "حماية نانو للجلد",
        "نانو حماية للهيكل",
        "تصحيح الطلاء",
        "تغطية/حماية داخلية",
      ],
      standardFeatures: [
        "تركيب PPF كامل للسيارة",
        "تلميع خارجي",
        "حماية للجنوط",
        "حماية للجلد",
        "فيلم حماية شمسي للنوافذ",
        "PPF للواجهة الأمامية",
        "الزجاج الأمامي (لايت)",
      ],
      premiumFeatures: [
        "حماية داخلية",
        "تركيب PPF خارجي كامل",
        "فيلم حماية شمسي",
        "الزجاج الأمامي (إكستريم)",
        "حماية نانو للجلد",
        "نانو سيراميك للجنوط",
        "خدمة إضافية مجانية مرة واحدة",
      ],
    },

    servicesGroups: {
      ppfTitle: "الحماية الكاملة – PPF",
      ppfDesc: "حلول PPF متكاملة لأقصى حماية لطلاء السيارة.",
      ppfSubservices: [
        "PPF كامل للهيكل",
        "PPF للواجهة الأمامية (الصدام، الكبوت، الرفارف، المرايا)",
        "PPF لامع / مطفي / ساتان",
        "PPF ذاتي الالتئام",
        "PPF للمصابيح والأجزاء الداخلية",
        "إزالة واستبدال PPF",
      ],

      solarTitle: "تظليل وحماية الزجاج",
      solarDesc: "تقليل الحرارة والأشعة مع تظليل وحماية شفافة ممتازة.",
      solarSubservices: [
        "تظليل نانو سيراميك",
        "فيلم حماية من الحرارة والأشعة",
        "حماية شفافة للزجاج الأمامي",
        "تظليل فتحة السقف والسقف البانورامي",
        "إزالة وإعادة تركيب التظليل",
      ],

      detailingTitle: "تفصيل وطلاءات حماية",
      detailingDesc: "تصحيح طلاء، تنظيف عميق، وأنظمة حماية متقدمة.",
      detailingSubservices: [
        "تفصيل خارجي وتصحيح الطلاء",
        "تنظيف داخلي عميق",
        "طلاء سيراميك وجرَافين",
        "طلاءات للزجاج والجنوط والداخلية",
      ],

      paintRepairTitle: "خدمات الدهان والإصلاح",
      paintRepairDesc: "إصلاحات ذكية ودهان مع مطابقة لون دقيقة.",
      paintRepairSubservices: [
        "إصلاح طلاء ذكي",
        "دهان مطاطي / قابل للإزالة",
        "دهان عادي أو دهان كامل",
        "إزالة الانبعاجات بدون دهان (PDR)",
        "مطابقة اللون ودهان القطع",
      ],

      washTitle: "خدمات غسيل السيارات",
      washDesc: "غسيل يدوي ممتاز وغسيل رغوي وتعقيم داخلي آمن.",
      washSubservices: [
        "غسيل يدوي أساسي وممتاز",
        "غسيل رغوي",
        "تنظيف حجرة المحرك",
        "تنظيف وتعقيم داخلي",
      ],

      windshieldTitle: "خدمات الزجاج الأمامي",
      windshieldDesc: "إصلاح وحماية واستبدال لضمان أفضل رؤية.",
      windshieldSubservices: [
        "إصلاح ضربات الحصى والشقوق",
        "تلميع الزجاج",
        "معالجة طاردة للماء",
        "استبدال الزجاج الأمامي",
      ],
    },
  },
};

export const getTranslation = (lang: Language = "en") => {
  return translations[lang];
};
