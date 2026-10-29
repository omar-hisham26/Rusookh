/**
 * ====================================================================
 * ملف إدارة الأعمال والمشاريع - Rusookh Projects
 * ====================================================================
 * 
 * لإضافة مشروع أو عمل جديد إلى الموقع، قم بنسخ القالب التالي وألصقه داخل مصفوفة `projects`:
 * 
 * {
 *   title: { ar: "اسم المشروع بالعربي", en: "Project Name" },
 *   category: { ar: "تصنيف المشروع بالعربي", en: "Category in English" },
 *   link: "https://example.com", // رابط المشروع أو صفحة التطبيق
 *   image: "assets/your-image.jpg", // ضع صورة أو شعار المشروع في مجلد assets واكتب اسمها هنا
 *   gradient: "from-indigo-500/30 to-fuchsia-500/20" // تدرج الألوان لخلفية البطاقة (اختياري)
 * },
 * 
 * اقتراحات لتدرجات الألوان (gradient):
 * - أزرق وبنفسجي: "from-indigo-500/30 to-fuchsia-500/20"
 * - سماوي وأزرق: "from-cyan-400/30 to-indigo-500/20"
 * - أخضر وزمردي: "from-emerald-400/30 to-teal-500/20"
 * - بنفسجي ووردي: "from-purple-500/30 to-rose-500/20"
 * - برتقالي وذهبي: "from-amber-400/30 to-orange-500/20"
 * ====================================================================
 */

const projects = [
  {
    id: "rebalance",
    title: {
      ar: "ريبالنس",
      en: "Rebalance"
    },
    category: {
      ar: "نظام تشغيل للأنديه الرياضيه + تطبيق ويب + تطبيق جوال ",
      en: "iOS · Android + Web Platform"
    },
    link: "https://www.rebalance.sa",
    image: "assets/rebalance.jpg",
    gradient: "from-indigo-500/30 to-fuchsia-500/20"
  },
  {
    id: "viro",
    title: {
      ar: "فيرو",
      en: "Viro"
    },
    category: {
      ar: "تطبيقات جوال",
      en: "iOS · Android"
    },
    link: "https://apps.apple.com/sa/app/viro/id6771511279",
    image: "assets/viro.jpeg",
    gradient: "from-cyan-400/30 to-indigo-500/20"
  },

   {
    id: "abualjoud",
    title: {
      ar: "ابو الجود لتشغيل و صيانة الفنادق",
      en: "Abu Aljoud For Operation And Maintenance"
    },
    category: {
      ar: "نظام إدارة الموارد البشرية + تطبيق جوال + ربط بأجهزه البصمة + تطبيق ويب",
      en: "HR Management System"
    },
    link: "",
    image: "assets/abualjoud.png",
    gradient: "from-amber-400/30 to-orange-500/20"
  }
];
