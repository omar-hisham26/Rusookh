/**
 * Rusookh - Vanilla JS Conversion
 * Faithful 1:1 implementation of the original TanStack/React repository.
 */

// 1. I18N DICTIONARY
const t = {
  nav_about: { en: "About", ar: "من نحن" },
  nav_services: { en: "Services", ar: "الخدمات" },
  nav_work: { en: "Work", ar: "الأعمال" },
  nav_stack: { en: "Stack", ar: "التقنيات" },
  nav_contact: { en: "Contact", ar: "تواصل" },
  nav_cta: { en: "Start a project", ar: "ابدأ مشروعك" },
  brand_name: { en: "RUSOOKH", ar: "رسوخ" },
  brand_name_camel: { en: "Rusookh", ar: "رسوخ" },
  hero_badge: { en: "Future-forward software team", ar: "فريق برمجي يصنع المستقبل" },
  hero_title_1: { en: "Engineering the", ar: "نهندس" },
  hero_title_2: { en: "intelligent future.", ar: "المستقبل الذكي." },
  hero_desc: {
    en: "Rusookh is a software development studio crafting mobile, web, and automation systems with precision.",
    ar: "رسوخ فريق واستوديو برمجي لتصميم وتطوير تطبيقات الجوال ومنصات الويب بدقة واحترافية عالية."
  },
  hero_cta_1: { en: "Explore our craft", ar: "اكتشف أعمالنا" },
  hero_cta_2: { en: "Talk to our team", ar: "تواصل مع الفريق" },
  scroll: { en: "SCROLL", ar: "مرّر" },
  about_kicker: { en: "About Rusookh", ar: "عن رسوخ" },
  about_title_1: { en: "A studio built for what's", ar: "استوديو مبني لأجل" },
  about_title_2: { en: "next.", ar: "ما هو قادم." },
  about_p1: {
    en: "We are a team of software developers and designers building applications that feel effortless and inevitable. Every product we ship is tuned for performance, beauty, and trust.",
    ar: "نحن فريق من مطوري البرمجيات والمصممين، نصنع تطبيقات تبدو سلسة ومتقنة. كل منتج نطلقه مبني على الأداء والجمال والموثوقية."
  },
  about_p2: {
    en: "From ambitious consumer apps to scalable web platforms, we partner with founders and enterprises ready to build exceptional digital experiences.",
    ar: "من تطبيقات الجوال الطموحة إلى منصات الويب القابلة للتوسع، نشارك المؤسسين والشركات الراغبة في بناء تجارب رقمية استثنائية."
  },
  services_kicker: { en: "What we do", ar: "ماذا نقدم" },
  services_title: { en: "Services engineered for impact.", ar: "خدمات مصممة لإحداث الأثر." },
  services_desc: {
    en: "End-to-end design, build, and operation of mobile and web systems.",
    ar: "تصميم وبناء وتشغيل تطبيقات الجوال ومنصات الويب من البداية للنهاية."
  },
  learn_more: { en: "Learn more", ar: "اعرف المزيد" },
  svc_ai_t: { en: "Custom Solutions", ar: "حلول مخصصة" },
  svc_ai_d: {
    en: "Tailored software applications built to solve your unique business challenges.",
    ar: "تطبيقات برمجية مخصصة مصممة لحل تحديات عملك الفريدة."
  },
  svc_mob_t: { en: "Mobile Apps", ar: "تطبيقات الجوال" },
  svc_mob_d: {
    en: "Native-grade iOS & Android experiences with offline-first architectures.",
    ar: "تجارب iOS وAndroid بمستوى أصلي وبنية تعمل دون اتصال أولاً."
  },
  svc_web_t: { en: "Web Platforms", ar: "منصات الويب" },
  svc_web_d: {
    en: "Performant, accessible web products built on modern edge runtimes.",
    ar: "منتجات ويب سريعة وسهلة الوصول مبنية على بيئات تشغيل حديثة."
  },
  svc_auto_t: { en: "UI/UX Design", ar: "تصميم واجهات المستخدم" },
  svc_auto_d: {
    en: "Beautiful, user-centric designs that elevate your brand and engage your audience.",
    ar: "تصاميم جميلة تتمحور حول المستخدم للارتقاء بعلامتك التجارية وزيادة تفاعل جمهورك."
  },
  svc_dx_t: { en: "Digital Transformation", ar: "التحول الرقمي" },
  svc_dx_d: {
    en: "Modernize legacy stacks with secure, scalable, cloud-native foundations.",
    ar: "تحديث الأنظمة القديمة بأسس سحابية آمنة وقابلة للتوسع."
  },
  svc_smart_t: { en: "E-commerce", ar: "المتاجر الإلكترونية" },
  svc_smart_d: {
    en: "Robust online stores designed for high conversion and seamless shopping.",
    ar: "متاجر إلكترونية قوية مصممة لزيادة المبيعات وتوفير تجربة تسوق سلسة."
  },
  work_kicker: { en: "Featured work", ar: "أعمال مختارة" },
  work_title: { en: "Products in the wild.", ar: "منتجات في السوق." },
  proj_rebalance_name: { en: "Rebalance", ar: "ريبالنس" },
  proj_rebalance_tag: { en: "iOS · Android + Web Platform", ar: "صفحة ويب + تطبيقات جوال" },
  proj_viro_name: { en: "Viro", ar: "فيرو" },
  proj_viro_tag: { en: "iOS · Android", ar: "تطبيقات جوال" },
  stack_kicker: { en: "Technologies we use", ar: "التقنيات التي نستخدمها" },
  stack_title: { en: "Always using the latest tech.", ar: "دائماً نستخدم أحدث التقنيات." },
  stack_desc: {
    en: "We use the latest modern technologies and frameworks to ensure fast, secure, and scalable applications without getting bogged down in the technical details.",
    ar: "نستخدم أحدث التقنيات وأفضل أطر العمل لضمان تطبيقات سريعة، آمنة، وقابلة للتوسع بكفاءة عالية وبدون الدخول في تفاصيل معقدة."
  },
  contact_kicker: { en: "Contact", ar: "تواصل" },
  contact_title_1: { en: "Let's build something", ar: "لنبني شيئاً" },
  contact_title_2: { en: "unforgettable.", ar: "لا يُنسى." },
  contact_location: { en: "Al Madinah · Remote", ar: "المدينة المنورة · عن بُعد" },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." }
};

let currentLang = localStorage.getItem("lang") || "ar";

function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] && t[key][lang]) {
      el.textContent = t[key][lang];
    }
  });

  // Toggle button label
  const langBtn = document.getElementById("lang-btn-text");
  if (langBtn) {
    langBtn.textContent = lang === "en" ? "العربية" : "English";
  }

  // Update hero title split animation if needed
  updateHeroTitle();
}

function updateHeroTitle() {
  const container = document.getElementById("hero-title-prefix");
  if (!container) return;
  const text = t.hero_title_1[currentLang];
  const words = text.split(" ");
  container.innerHTML = words
    .map(
      (word, i) =>
        `<span class="inline-block mx-1.5 transition-all duration-700 opacity-100 translate-y-0" style="transition-delay: ${300 + i * 100}ms">${word}</span>`
    )
    .join(" ");
}

// 2. CURSOR FOLLOWER WITH SPRING EASING
const cursorGlow = document.getElementById("cursor-glow");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

window.addEventListener("pointermove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;
  if (cursorGlow) {
    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;
  }
  requestAnimationFrame(animateCursor);
}
requestAnimationFrame(animateCursor);

// 3. REVEAL ANIMATIONS (IntersectionObserver matching Framer Motion's whileInView)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "-80px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// 4. THREE.JS 3D ORB (Faithful translation of Orb.tsx)
function initOrb() {
  const container = document.getElementById("orb-container");
  if (!container || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 4.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const light1 = new THREE.PointLight(0x6366f1, 2, 50);
  light1.position.set(5, 5, 5);
  scene.add(light1);

  const light2 = new THREE.PointLight(0x22d3ee, 1.5, 50);
  light2.position.set(-5, -3, 2);
  scene.add(light2);

  const light3 = new THREE.PointLight(0xa855f7, 1, 50);
  light3.position.set(0, -5, 4);
  scene.add(light3);

  // Deformable Sphere (MeshDistortMaterial equivalent with custom noise displacement)
  const geom = new THREE.SphereGeometry(1.4, 64, 64);
  const originalPos = geom.attributes.position.clone();

  const mat = new THREE.MeshStandardMaterial({
    color: 0x3a3aa8,
    emissive: 0x1e1b6e,
    emissiveIntensity: 0.6,
    roughness: 0.15,
    metalness: 0.6,
  });
  const sphere = new THREE.Mesh(geom, mat);
  scene.add(sphere);

  // Inner Glow Core
  const innerGeom = new THREE.SphereGeometry(1.05, 32, 32);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    transparent: true,
    opacity: 0.08,
  });
  const innerSphere = new THREE.Mesh(innerGeom, innerMat);
  scene.add(innerSphere);

  // Particle cloud (600 points)
  const particleCount = 600;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = 3 + Math.random() * 4;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    particlePositions[i * 3] = r * Math.sin(p) * Math.cos(t);
    particlePositions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
    particlePositions[i * 3 + 2] = r * Math.cos(p);
  }
  const particleGeom = new THREE.BufferGeometry();
  particleGeom.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
  );
  const particleMat = new THREE.PointsMaterial({
    size: 0.025,
    color: 0xa5b4fc,
    transparent: true,
    opacity: 0.7,
  });
  const particles = new THREE.Points(particleGeom, particleMat);
  scene.add(particles);

  // Window resize handler
  window.addEventListener("resize", () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Animation Loop with scroll & mouse distortion
  let mouseTargetX = 0, mouseTargetY = 0;
  let currentRotX = 0, currentRotY = 0;

  window.addEventListener("pointermove", (e) => {
    mouseTargetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseTargetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Scroll progress
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);

    // Mouse interpolation
    currentRotX += (mouseTargetY * 0.4 - currentRotX) * 0.05;
    currentRotY += (mouseTargetX * 0.6 - currentRotY) * 0.05;

    sphere.rotation.y += dt * 0.15 + currentRotY * dt;
    sphere.rotation.x = currentRotX;

    const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.03;
    sphere.scale.set(scale, scale, scale);

    particles.rotation.y += dt * 0.02;

    // Vertex noise distortion matching MeshDistortMaterial
    const pos = geom.attributes.position;
    const orig = originalPos;
    const distort = 0.35 + scrollProgress * 0.5 + Math.sin(elapsedTime) * 0.05;
    const speed = 1.5 + scrollProgress * 3;

    for (let i = 0; i < pos.count; i++) {
      const u = orig.getX(i);
      const v = orig.getY(i);
      const w = orig.getZ(i);

      const wave = Math.sin(u * 1.5 + elapsedTime * speed) *
                   Math.cos(v * 1.5 + elapsedTime * speed) *
                   Math.sin(w * 1.5 + elapsedTime * speed);

      const factor = 1 + wave * (distort * 0.12);
      pos.setXYZ(i, u * factor, v * factor, w * factor);
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();

    renderer.render(scene, camera);
  }
  animate();
}

// 5. DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "ar" : "en");
    });
  }

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Initialize 3D Orb
  initOrb();
});
