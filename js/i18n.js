/**
 * Rusookh Cinematic Studio - Bilingual Localization System (AR / EN)
 * Default: Arabic (RTL) with high-end typographic hierarchy.
 */

const translations = {
  ar: {
    // Top HUD
    brand_title: "رسوخ",
    brand_tagline: "استوديو هندسة المستقبل الرقمي",
    nav_intro: "المقدمة",
    nav_theater: "مسرح القدرات",
    nav_architecture: "المعمارية الحية",
    nav_works: "الأعمال النخبوية",
    nav_collective: "فريق البناء",
    nav_contact: "إطلاق مشروع",
    film_mode_btn: "العرض السينمائي",
    explore_mode_btn: "استكشاف حر",
    sound_on: "الصوت: مفعّل",
    sound_off: "الصوت: صامت",

    // Hero / Cinematic Prologue
    hero_badge: "استوديو هندسي فائق الأداء · Al Madinah · Global Impact",
    hero_title_prefix: "نُهندس الرؤى لتصبح",
    hero_title_highlight: "واقعاً رقمياً راسخاً",
    hero_title_suffix: "يتحدى الزمن.",
    hero_desc: "رسوخ ليس مجرد شركة تطوير، بل مختبر سينمائي تقني لصياغة تطبيقات الجوال المليونية، المنصات السحابية الحساسة، ومنظومات الذكاء الاصطناعي ذات الاستجابة اللحظية.",
    hero_cta_film: "بدء الفيلم التفاعلي 🎬",
    hero_cta_explore: "تصفح المسرح التقني ⚡",
    hero_metrics_uptime: "جاهزية الأنظمة",
    hero_metrics_users: "مستخدم حول العالم",
    hero_metrics_latency: "زمن استجابة المنصات",

    // Act II: 3D Card Theater
    theater_kicker: "الفصل الأول · مسرح القدرات التفاعلي",
    theater_title: "قدرات هندسية مصممة للسيطرة على المستقبل",
    theater_desc: "تفاعل مع بطاقات المسرح ثلاثي الأبعاد لاستكشاف عمق تخصصات رسوخ. استمتع بزوايا الإضاءة والعمق البصري الحقيقي.",
    theater_hint: "اسحب البطاقات أو استخدم الأسهم للتنقل ثلاثي الأبعاد",

    card_1_tag: "Native Excellence",
    card_1_title: "تطبيقات جوال بمعدل 120fps",
    card_1_desc: "بناء تطبيقات iOS و Android استثنائية بلغات Swift و Kotlin و Flutter مع بنية Offline-First، وتكاملات عتادية عميقة وحماية بيومترية متقدمة.",
    card_1_stat: "120 FPS Buttery Smooth",

    card_2_tag: "Edge Systems",
    card_2_title: "منصات ويب فائقة السرعة",
    card_2_desc: "معماريات موزعة مبنية على بيئات Edge الحافة (V8 Isolates)، مع تحميل فوري في أقل من 50 مللي ثانية ودعم كامل لتزامن البيانات اللحظي عبر WebSockets.",
    card_2_stat: "< 50ms Edge TTFB",

    card_3_tag: "Neural Intelligence",
    card_3_title: "أتمتة ذكية ووكلاء ذكاء اصطناعي",
    card_3_desc: "تصميم وتنفيذ وكلاء ذكاء اصطناعي ذاتيي الحركة (Agentic AI Systems) مع قواعد بيانات شعاعية (Vector DBs) وخطوط معالجة عصبية ترفع إنتاجية الأعمال بمقدار 10x.",
    card_3_stat: "Autonomous Agentic Pipelines",

    card_4_tag: "High-Load Commerce",
    card_4_title: "بوابات ومتاجر إلكترونية عالية الحمل",
    card_4_desc: "منظومات تجارة رقمية تتحمل ملايين الزيارات التزامنية في حملات التخفيضات الكبرى، مع ربط بوابات دفع بنكية ومعالجة طلبات فائقة الأمان.",
    card_4_stat: "Zero-Downtime Peak Traffic",

    card_5_tag: "Spatial UX/UI",
    card_5_title: "تصميم وتجارب استخدام سينمائية",
    card_5_desc: "واجهات مستخدم تبتعد تماماً عن القوالب الجاهزة وتستعير لغة السينما والإضاءة الحجمية لترك انطباع لا يُمحى لدى المستخدم والعميل.",
    card_5_stat: "Bespoke Design Engineering",

    // Act III: Architecture Simulator
    arch_kicker: "الفصل الثاني · المحاكي المعماري التفاعلي",
    arch_title: "قلب المنظومة: كيف تجري البيانات داخل أنظمة رسوخ؟",
    arch_desc: "اضغط على زر إطلاق حزمة البيانات لمشاهدة دورة حياة الطلب عبر طبقات البنية التحتية، من الحافة حتى قواعد البيانات المشفرة.",
    arch_btn_pulse: "إطلاق حزمة بيانات تجريبية ⚡",
    arch_btn_reset: "إعادة تعيين المسار",
    arch_node_client: "طبقة العميل والواجهات (Mobile / Web)",
    arch_node_edge: "بوابة الحافة وجدار الحماية (Edge Gateway / WAF)",
    arch_node_ai: "نواة الذكاء والوكلاء (AI Agents & LLM Core)",
    arch_node_services: "الخدمات الميكروية (High-Perf Microservices)",
    arch_node_db: "النسيج البياني المشفر (Encrypted Database Fabric)",
    arch_log_ready: "النظام في وضع الاستعداد. اضغط على الزر لإرسال نبضة بيانات.",
    arch_log_sending: "تم إرسال حزمة بيانات ذات حمولة مشفرة...",
    arch_log_edge: "وصلت الحزمة إلى بوابة Edge: تم فحص الهوية ومكافحة التهديدات بنجاح (1.2ms).",
    arch_log_ai: "نواة الذكاء تقوم بتحليل سياق الطلب وتوجيهه ديناميكياً (4.5ms).",
    arch_log_services: "معالجة الطلب في Microservices المبنية بلغات مدمجة عالية السرعة (8.1ms).",
    arch_log_complete: "اكتمل التخزين في النسيج البياني المشفر. تم الرد بنجاح بمعدل استجابة كلي قياسي!",

    // Act IV: Flagship Projects
    works_kicker: "الفصل الثالث · استعراض المشاريع الواقعية",
    works_title: "منتجات حقيقية في السوق أثبتت صلابتها",
    works_desc: "نماذج من الأنظمة والتطبيقات التي تم ابتكارها وهندستها وتغذيتها بأرقى معايير الجودة.",

    proj_rebalance_name: "ريبالانس (Rebalance)",
    proj_rebalance_cat: "منظومة الصحة واللياقة الذكية المخصصة",
    proj_rebalance_desc: "تطبيق جوال ونظام سحابي متكامل لإدارة الجداول الغذائية والتمارين المدعومة بالذكاء الاصطناعي مع قياس مؤشرات الجسم الحيوية ومزامنة الأجهزة القابلة للارتداء.",
    proj_rebalance_badge: "شهد إطلاقاً ناجحاً ومعدلات استبقاء قياسية",
    proj_rebalance_f1: "محرك توصيات تغذية مخصص مدعوم بالذكاء الاصطناعي",
    proj_rebalance_f2: "تزامن فوري مع الساعات الذكية ومقاييس الصحة",
    proj_rebalance_f3: "واجهة استخدام فائقة النعومة وتفاعلات حركية متقنة",

    proj_viro_name: "فايرو (Viro)",
    proj_viro_cat: "منصة التوصيل والتجارة اللحظية الذكية",
    proj_viro_desc: "منظومة تقنية متكاملة لربط المتاجر والمناديب والعملاء بتتبع جغرافي لحظي فائق الدقة وخوارزميات ذكية لتوزيع الطلبات وتقليل زمن التوصيل بنسبة 35%.",
    proj_viro_badge: "بنية تحتية تتحمل آلاف الطلبات المتزامنة",
    proj_viro_f1: "تتبع مسارات فوري بالثانية عبر WebSockets",
    proj_viro_f2: "خوارزمية توزيع ذكية للطلبات استناداً إلى الكثافة",
    proj_viro_f3: "بوابة دفع متكاملة ونظام محاسبي مؤتمت بالكامل",

    proj_enterprise_name: "نواة رسوخ السحابية (Rusookh Core)",
    proj_enterprise_cat: "إطار عمل المؤسسات للذكاء والأتمتة",
    proj_enterprise_desc: "محرك داخلي مصمم للمنشآت لتشغيل الوكلاء البرمجية وتكامل الـ ERP وربط سير العمليات بأمان بنكي دون الاعتماد على خدمات خارجية معقدة.",
    proj_enterprise_badge: "معمارية معيارية مشفرة بالكامل",
    proj_enterprise_f1: "حماية البيانات الحساسة داخل بيئة العمل المحلية",
    proj_enterprise_f2: "تكامل مباشر مع أنظمة المؤسسات والـ APIs",
    proj_enterprise_f3: "لوحات تحكم سينمائية لمراقبة البيانات الحية لحظياً",

    // Act V: Terminal & Collective
    team_kicker: "الفصل الرابع · الفلسفة وفريق العمل",
    team_title: "مهندسون وبنّاؤون.. شغف بالكمال الرقمي",
    team_desc: "خلف كل سطر برمجي في رسوخ يقف فريق ومؤسس يعشقون الأداء الخالص، الجمال البصري، والصلابة المعمارية.",
    founder_name: "عمر هشام",
    founder_role: "المؤسس والمهندس البرمجي الرئيسي",
    founder_quote: "«البرمجيات الحقيقية لا تُصنع كواجب، بل تُنحت كفيلم ملحمي يترك بصمة لا تنسى في كل بكسل وكل استدعاء دالة.»",
    terminal_title: "RUSOOKH KERNEL CONSOLE v3.15",
    terminal_hint: "اكتب أو اضغط على الأوامر لتجربة الطرفية:",
    terminal_btn_stack: "عرض حزمة التقنيات (stack)",
    terminal_btn_philosophy: "فلسفة رسوخ (philosophy)",
    terminal_btn_contact: "تواصل مباشر (contact)",

    // Act VI: Contact
    contact_kicker: "الفصل الختامي · خطوتك القادمة",
    contact_title: "هل أنت مستعد لنقل مشروعك إلى مصاف الكبار؟",
    contact_desc: "سواء كنت تؤسس لشركة ناشئة طموحة أو ترغب في إعادة بناء منظومتك الرقمية بمعايير سينمائية لا تقبل المنافسة، فريق رسوخ مستعد للحديث معك الآن.",
    contact_whatsapp: "محادثة واتساب فورية",
    contact_email: "إرسال بريد إلكتروني",
    contact_location_val: "المدينة المنورة، المملكة العربية السعودية · نخدم العالم",
    contact_rights: "جميع الحقوق محفوظة © 2026 استوديو رسوخ للبرمجيات.",
  },

  en: {
    // Top HUD
    brand_title: "RUSOOKH",
    brand_tagline: "Intelligent Software & Cinematic Engineering Studio",
    nav_intro: "Overture",
    nav_theater: "3D Theater",
    nav_architecture: "Live Reactor",
    nav_works: "Flagship Works",
    nav_collective: "Builders",
    nav_contact: "Start Project",
    film_mode_btn: "Cinematic Film",
    explore_mode_btn: "Free Explore",
    sound_on: "Audio: LIVE",
    sound_off: "Audio: MUTED",

    // Hero / Cinematic Prologue
    hero_badge: "High-Performance Software Studio · Al Madinah · Global Reach",
    hero_title_prefix: "Engineering Visions Into",
    hero_title_highlight: "Resilient Realities",
    hero_title_suffix: "That Outlast Trends.",
    hero_desc: "Rusookh is a specialized software lab crafting high-frequency mobile applications, mission-critical distributed platforms, and autonomous AI architectures with cinematic precision.",
    hero_cta_film: "Launch Film Mode 🎬",
    hero_cta_explore: "Explore 3D Stage ⚡",
    hero_metrics_uptime: "System Availability",
    hero_metrics_users: "Global Users Reached",
    hero_metrics_latency: "Edge Response Latency",

    // Act II: 3D Card Theater
    theater_kicker: "Act I · Interactive 3D Theater",
    theater_title: "Core Disciplines Engineered for Impact",
    theater_desc: "Navigate through the 3D perspective stage to discover Rusookh's technical frontiers. Featuring dynamic depth, lighting, and tactile haptics.",
    theater_hint: "Drag cards or use keyboard arrows to traverse 3D space",

    card_1_tag: "Native Excellence",
    card_1_title: "120 FPS Native Mobile Systems",
    card_1_desc: "Building standout iOS & Android applications using Swift, Kotlin, and Flutter with offline-first synchronization, deep biometric security, and hardware acceleration.",
    card_1_stat: "120 FPS Buttery Smooth",

    card_2_tag: "Edge Systems",
    card_2_title: "Ultra-Velocity Web Platforms",
    card_2_desc: "Distributed architectures compiled for edge runtimes (V8 Isolates), achieving sub-50ms TTFB and continuous bi-directional WebSocket syncing.",
    card_2_stat: "< 50ms Edge TTFB",

    card_3_tag: "Neural Intelligence",
    card_3_title: "Autonomous Agentic AI Workflows",
    card_3_desc: "Architecting self-orchestrating AI agents with high-density vector databases and neural inference pipelines that unlock 10x operational velocity.",
    card_3_stat: "Autonomous Agentic Pipelines",

    card_4_tag: "High-Load Commerce",
    card_4_title: "High-Concurrence Commerce Engines",
    card_4_desc: "Resilient e-commerce platforms designed to endure viral surges during national flash sales, with zero checkout failures and banking-grade ledger compliance.",
    card_4_stat: "Zero-Downtime Peak Traffic",

    card_5_tag: "Spatial UX/UI",
    card_5_title: "Cinematic Interface Engineering",
    card_5_desc: "Rejecting cookie-cutter templates in favor of volumetric lighting, spatial depth, and tactile micro-interactions that leave an indelible mark on users.",
    card_5_stat: "Bespoke Design Engineering",

    // Act III: Architecture Simulator
    arch_kicker: "Act II · Interactive Live Architecture",
    arch_title: "System Core: How Data Flows Through Rusookh Architectures",
    arch_desc: "Trigger a test packet to witness the end-to-end lifecycle of an encrypted request traversing edge firewalls, neural inference, and distributed microservices.",
    arch_btn_pulse: "Inject Test Data Packet ⚡",
    arch_btn_reset: "Reset Path",
    arch_node_client: "Client Tier (Mobile / Web)",
    arch_node_edge: "Edge Gateway & Armor (Edge / WAF)",
    arch_node_ai: "Neural Inference Core (Agents & LLMs)",
    arch_node_services: "Compiled Microservices (Go / Rust / Node)",
    arch_node_db: "Encrypted Data Fabric (PostgreSQL / Redis)",
    arch_log_ready: "Architecture standing by. Click the button to inject a live telemetry packet.",
    arch_log_sending: "Dispatching encrypted payload from client runtime...",
    arch_log_edge: "Packet reached Edge Gateway: WAF verification & geo-routing verified (1.2ms).",
    arch_log_ai: "Neural Core parsed contextual intent and routed dynamically (4.5ms).",
    arch_log_services: "Microservices processed transactional logic with native concurrency (8.1ms).",
    arch_log_complete: "State persisted into encrypted sharded fabric. Sub-15ms round-trip achieved!",

    // Act IV: Flagship Projects
    works_kicker: "Act III · Flagship Production Work",
    works_title: "Real Products in the Wild",
    works_desc: "Battle-tested mobile and cloud systems shipped to real users, engineered with meticulous attention to detail.",

    proj_rebalance_name: "Rebalance",
    proj_rebalance_cat: "Intelligent Wellness & Nutrition Ecosystem",
    proj_rebalance_desc: "A flagship mobile app and cloud engine providing AI-personalized nutritional planning, bio-metric tracking, and smart wearable hardware synchronization.",
    proj_rebalance_badge: "Shipped to App Store & Google Play with high retention",
    proj_rebalance_f1: "AI-powered adaptive meal & macro calculation engine",
    proj_rebalance_f2: "Real-time sync with Apple Health & smart scales",
    proj_rebalance_f3: "Tactile, buttery-smooth fluid navigation UI",

    proj_viro_name: "Viro",
    proj_viro_cat: "Next-Gen Instant Delivery & Commerce Engine",
    proj_viro_desc: "An integrated on-demand logistics ecosystem interconnecting merchants, drivers, and consumers with real-time geospatial dispatch algorithms reducing delivery times by 35%.",
    proj_viro_badge: "Built for thousands of simultaneous live orders",
    proj_viro_f1: "Sub-second geospatial route tracking via WebSockets",
    proj_viro_f2: "Smart AI dispatching algorithm optimizing route clusters",
    proj_viro_f3: "Automated billing, split-payments, and audit logs",

    proj_enterprise_name: "Rusookh Core",
    proj_enterprise_cat: "Enterprise Autonomous Workflow Framework",
    proj_enterprise_desc: "An internal engine engineered for mid-to-large businesses to orchestrate automated agents, ERP connectors, and secure data pipelines with banking-grade security.",
    proj_enterprise_badge: "Fully encrypted modular architecture",
    proj_enterprise_f1: "Zero-data-leakage on-premise & hybrid cloud support",
    proj_enterprise_f2: "Direct webhook and API bridging with legacy systems",
    proj_enterprise_f3: "Real-time cinematic telemetry & operational HUD",

    // Act V: Terminal & Collective
    team_kicker: "Act IV · Philosophy & The Builders",
    team_title: "Craftsmen & Systems Builders",
    team_desc: "Behind every line of code at Rusookh stands an unwavering pursuit of pure speed, visual poetry, and architectural permanence.",
    founder_name: "Omar Hisham",
    founder_role: "Founder & Lead Systems Engineer",
    founder_quote: "“Great software is not manufactured as an errand; it is sculpted like an epic film, leaving an unforgettable impact on every pixel and every runtime execution.”",
    terminal_title: "RUSOOKH KERNEL CONSOLE v3.15",
    terminal_hint: "Type or click commands below to run terminal introspection:",
    terminal_btn_stack: "Inspect Tech Stack (stack)",
    terminal_btn_philosophy: "Studio Philosophy (philosophy)",
    terminal_btn_contact: "Direct Comms (contact)",

    // Act VI: Contact
    contact_kicker: "Act V · The Next Frontier",
    contact_title: "Ready to Build Something Truly Unforgettable?",
    contact_desc: "Whether you are conceiving an ambitious new startup or rebuilding your legacy infrastructure with cinematic standards, Rusookh is ready to partner with you.",
    contact_whatsapp: "Instant WhatsApp Channel",
    contact_email: "Send Studio Email",
    contact_location_val: "Al Madinah Al Munawwarah, KSA · Serving Innovators Worldwide",
    contact_rights: "All rights reserved © 2026 Rusookh Software Studio.",
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('rusookh_lang') || 'ar';
  }

  init() {
    this.applyLang(this.currentLang);
  }

  applyLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('rusookh_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-english');
    } else {
      document.body.classList.add('font-english');
      document.body.classList.remove('font-arabic');
    }

    const dict = translations[lang] || translations.ar;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update language switch button text
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.textContent = lang === 'ar' ? 'English' : 'العربية';
    }
  }

  toggleLang() {
    const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.applyLang(nextLang);
    if (window.sound) window.sound.click(0.6);
  }

  t(key) {
    const dict = translations[this.currentLang] || translations.ar;
    return dict[key] || key;
  }
}

window.i18n = new I18nManager();
