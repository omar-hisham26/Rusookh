/**
 * Rusookh - 1:1 Exact Vanilla JS Conversion of the original repository
 * Implements the exact Orb.tsx Three.js MeshDistortMaterial shader,
 * lighting, colors, particles, floating physics, and mouse/scroll responsiveness.
 */

// --- 1. EXACT I18N DICTIONARY FROM src/lib/i18n.tsx ---
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

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] && t[key][lang]) {
      el.textContent = t[key][lang];
    }
  });

  const langBtn = document.getElementById("lang-btn-text");
  if (langBtn) {
    langBtn.textContent = lang === "en" ? "العربية" : "English";
  }

  const prefixEl = document.getElementById("hero-title-prefix");
  if (prefixEl) {
    prefixEl.textContent = t.hero_title_1[lang];
  }
}

// --- 2. EXACT CURSOR GLOW (from index.tsx) ---
const cursorGlow = document.getElementById("cursor-glow");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let curGlowX = mouseX;
let curGlowY = mouseY;

window.addEventListener("pointermove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursorGlow() {
  curGlowX += (mouseX - curGlowX) * 0.1;
  curGlowY += (mouseY - curGlowY) * 0.1;
  if (cursorGlow) {
    cursorGlow.style.left = `${curGlowX}px`;
    cursorGlow.style.top = `${curGlowY}px`;
  }
  requestAnimationFrame(animateCursorGlow);
}
requestAnimationFrame(animateCursorGlow);

// --- 3. REVEAL ANIMATIONS (matching Framer Motion whileInView) ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "-80px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// --- 4. EXACT THREE.JS 3D ORB (1:1 with Orb.tsx Blueberry & Particles) ---
function initOrb() {
  const container = document.getElementById("orb-container");
  if (!container || typeof THREE === "undefined") return;

  // Camera matching Orb.tsx: position [0, 0, 4.5], fov 45
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

  // Lights matching Orb.tsx exactly:
  // ambientLight intensity 0.4
  // pointLight [5, 5, 5] intensity 2 color="#6366f1"
  // pointLight [-5, -3, 2] intensity 1.5 color="#22d3ee"
  // pointLight [0, -5, 4] intensity 1 color="#a855f7"
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

  // Group for Float behavior
  const floatGroup = new THREE.Group();
  scene.add(floatGroup);

  // Simplex 3D Noise GLSL for MeshDistortMaterial
  const simplexNoiseGLSL = `
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
  `;

  // Exact Blueberry Sphere: args [1.4, 128, 128]
  const sphereGeom = new THREE.SphereGeometry(1.4, 128, 128);

  // Exact Material attributes:
  // color: "#3a3aa8", emissive: "#1e1b6e", emissiveIntensity: 0.6,
  // roughness: 0.15, metalness: 0.6, clearcoat: 1
  const distortUniforms = {
    time: { value: 0 },
    distort: { value: 0.4 },
    speed: { value: 2.0 },
    radius: { value: 1.0 }
  };

  const sphereMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#3a3aa8"),
    emissive: new THREE.Color("#1e1b6e"),
    emissiveIntensity: 0.6,
    roughness: 0.15,
    metalness: 0.6,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });

  sphereMat.onBeforeCompile = (shader) => {
    shader.uniforms.time = distortUniforms.time;
    shader.uniforms.distort = distortUniforms.distort;
    shader.uniforms.speed = distortUniforms.speed;
    shader.uniforms.radius = distortUniforms.radius;

    shader.vertexShader = `
      uniform float time;
      uniform float distort;
      uniform float speed;
      uniform float radius;
      ${simplexNoiseGLSL}
      ${shader.vertexShader}
    `;

    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `
      #include <begin_vertex>
      float updateTime = time * speed;
      transformed += normal * snoise(vec3(position * radius + updateTime)) * distort;
      `
    );
  };

  const blueberryMesh = new THREE.Mesh(sphereGeom, sphereMat);
  floatGroup.add(blueberryMesh);

  // Exact Inner Glow Core: args [1.05, 32, 32], color: "#6366f1", opacity: 0.08
  const innerGeom = new THREE.SphereGeometry(1.05, 32, 32);
  const innerMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#6366f1"),
    transparent: true,
    opacity: 0.08
  });
  const innerMesh = new THREE.Mesh(innerGeom, innerMat);
  floatGroup.add(innerMesh);

  // Exact Particles: 600 points, r = 3 + Math.random() * 4, color "#a5b4fc", opacity 0.7, size 0.025
  const particleCount = 600;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = 3 + Math.random() * 4;
    const t_ang = Math.random() * Math.PI * 2;
    const p_ang = Math.acos(2 * Math.random() - 1);
    particlePositions[i * 3] = r * Math.sin(p_ang) * Math.cos(t_ang);
    particlePositions[i * 3 + 1] = r * Math.sin(p_ang) * Math.sin(t_ang);
    particlePositions[i * 3 + 2] = r * Math.cos(p_ang);
  }
  const particleGeom = new THREE.BufferGeometry();
  particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.025,
    color: new THREE.Color("#a5b4fc"),
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true
  });
  const particles = new THREE.Points(particleGeom, particleMat);
  scene.add(particles);

  // Mouse & Scroll state tracking matching Orb.tsx
  const mouseState = { x: 0, y: 0 };
  let scrollProgress = 0;

  window.addEventListener("scroll", () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  });

  window.addEventListener("pointermove", (e) => {
    mouseState.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseState.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener("resize", () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  const mouseSmooth = { x: 0, y: 0 };
  const clock = new THREE.Clock();

  function renderLoop() {
    requestAnimationFrame(renderLoop);
    const dt = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Exact Float behavior: speed 1.2, floatIntensity 1.2, rotationIntensity 0.4
    floatGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
    floatGroup.rotation.z = Math.sin(elapsedTime * 0.6) * 0.04;

    // Exact Mouse smoothing & Rotation from useFrame:
    // mouse.x += (m.x - mouse.x) * 0.05
    // mouse.y += (m.y - mouse.y) * 0.05
    // ref.rotation.y += dt * 0.15 + mouse.x * dt * 0.6
    // ref.rotation.x = mouse.y * 0.4
    // s = 1 + Math.sin(elapsedTime * 0.8) * 0.03
    mouseSmooth.x += (mouseState.x - mouseSmooth.x) * 0.05;
    mouseSmooth.y += (mouseState.y - mouseSmooth.y) * 0.05;

    blueberryMesh.rotation.y += dt * 0.15 + mouseSmooth.x * dt * 0.6;
    blueberryMesh.rotation.x = mouseSmooth.y * 0.4;

    const s = 1 + Math.sin(elapsedTime * 0.8) * 0.03;
    blueberryMesh.scale.set(s, s, s);

    // Exact Dynamic Distort & Speed from useFrame:
    // mat.distort = 0.35 + scroll.v * 0.5 + Math.sin(elapsedTime) * 0.05
    // mat.speed = 1.5 + scroll.v * 3
    distortUniforms.distort.value = 0.35 + scrollProgress * 0.5 + Math.sin(elapsedTime) * 0.05;
    distortUniforms.speed.value = 1.5 + scrollProgress * 3;
    distortUniforms.time.value = elapsedTime;

    // Particles rotation: ref.rotation.y += dt * 0.02
    particles.rotation.y += dt * 0.02;

    renderer.render(scene, camera);
  }
  renderLoop();
}

// --- 5. INITIALIZE ---
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "ar" : "en");
    });
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  initOrb();
});
