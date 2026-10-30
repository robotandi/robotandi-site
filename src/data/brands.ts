// Brand data for all six brands. Arabic text is a DRAFT: have a native speaker review it.
export type Lang = 'ar' | 'en';
export type FormKind = 'quote' | 'contact' | 'waitlist' | 'follow';

export interface Service { title: string; text: string }

export interface Brand {
  slug: string;
  accent: string;
  name: Record<Lang, string>;     // short label for navigation
  title: Record<Lang, string>;    // full brand name
  summary: Record<Lang, string>;
  services: Record<Lang, Service[]>;
  form: FormKind;
}

// helper: s([[titleEn, textEn], ...], [[titleAr, textAr], ...])
const s = (en: [string, string][], ar: [string, string][]) => ({
  en: en.map(([title, text]) => ({ title, text })),
  ar: ar.map(([title, text]) => ({ title, text })),
});

export const brands: Brand[] = [
  {
    slug: 'academy',
    accent: '#F59E0B',
    name: { en: 'Academy', ar: 'الأكاديمية' },
    title: { en: 'Robot and I Academy', ar: 'أكاديمية Robot and I' }, // TODO: confirm final name
    summary: {
      en: 'Courses in robotics, programming, AI, electronics, and STEM.',
      ar: 'دورات في الروبوتات والبرمجة والذكاء الاصطناعي والإلكترونيات وعلوم STEM.',
    },
    services: s(
      [
        ['Robotics', 'Build and program robots, from basic mechanisms to sensors and control.'],
        ['Programming', 'Learn to write code and build real applications.'],
        ['Artificial Intelligence', 'Understand how AI works and how to use it in practice.'],
        ['Electronics', 'Circuits, components and microcontrollers made clear.'],
        ['STEM', 'Science, technology, engineering and math through projects.'],
      ],
      [
        ['الروبوتات', 'ابنِ روبوتات وبرمجها، من الآليات الأساسية إلى الحسّاسات والتحكم.'],
        ['البرمجة', 'تعلّم كتابة الأكواد وبناء تطبيقات حقيقية.'],
        ['الذكاء الاصطناعي', 'افهم كيف يعمل الذكاء الاصطناعي وكيف تستخدمه عملياً.'],
        ['الإلكترونيات', 'الدوائر والمكوّنات والمتحكّمات الدقيقة بشكل مبسّط.'],
        ['علوم STEM', 'العلوم والتكنولوجيا والهندسة والرياضيات من خلال المشاريع.'],
      ],
    ),
    form: 'waitlist',
  },
  {
    slug: 'software',
    accent: '#2563EB',
    name: { en: 'Software', ar: 'البرمجيات' },
    title: { en: 'Robot and I Software', ar: 'Robot and I للبرمجيات' },
    summary: {
      en: 'Websites, mobile apps, and ERP and CRM systems for your business.',
      ar: 'مواقع إلكترونية وتطبيقات جوّال وأنظمة ERP وCRM لأعمالك.',
    },
    services: s(
      [
        ['Websites', 'Fast, modern business websites that work on every device.'],
        ['Mobile apps', 'Apps for phones and tablets built around your customers.'],
        ['ERP systems', 'Connect finance, inventory and operations in one system.'],
        ['CRM systems', 'Track customers, leads and follow-ups in one place.'],
      ],
      [
        ['المواقع الإلكترونية', 'مواقع حديثة وسريعة لأعمالك تعمل على جميع الأجهزة.'],
        ['تطبيقات الجوّال', 'تطبيقات للهواتف والأجهزة اللوحية مصمّمة حول عملائك.'],
        ['أنظمة ERP', 'اربط المالية والمخزون والعمليات في نظام واحد.'],
        ['أنظمة CRM', 'تابع العملاء والفرص والمتابعات في مكان واحد.'],
      ],
    ),
    form: 'quote',
  },
  {
    slug: 'robotics',
    accent: '#0D9488',
    name: { en: 'Robotics', ar: 'الروبوتات' },
    title: { en: 'Robot and I Robotics', ar: 'Robot and I للروبوتات' },
    summary: {
      en: 'Robot design, educational models, IoT, embedded systems, and industrial automation.',
      ar: 'تصميم الروبوتات والنماذج التعليمية وإنترنت الأشياء والأنظمة المدمجة والأتمتة الصناعية.',
    },
    services: s(
      [
        ['Robot design', 'From concept and mechanics to a working prototype.'],
        ['Educational models', 'Robots and kits made for classrooms and learning.'],
        ['IoT', 'Connected devices that collect data and respond to it.'],
        ['Embedded systems', 'Firmware and hardware for dedicated devices.'],
        ['Industrial automation', 'Automate repetitive processes in production.'],
      ],
      [
        ['تصميم الروبوتات', 'من الفكرة والميكانيكا إلى نموذج أولي يعمل.'],
        ['النماذج التعليمية', 'روبوتات ومجموعات مخصّصة للفصول الدراسية والتعلّم.'],
        ['إنترنت الأشياء', 'أجهزة متصلة تجمع البيانات وتستجيب لها.'],
        ['الأنظمة المدمجة', 'برمجيات وعتاد لأجهزة مخصّصة.'],
        ['الأتمتة الصناعية', 'أتمتة العمليات المتكررة في الإنتاج.'],
      ],
    ),
    form: 'contact',
  },
  {
    slug: 'ai',
    accent: '#7C3AED',
    name: { en: 'AI', ar: 'الذكاء الاصطناعي' },
    title: { en: 'Robot and I AI', ar: 'Robot and I للذكاء الاصطناعي' },
    summary: {
      en: 'AI solutions and technical consulting for digital transformation.',
      ar: 'حلول الذكاء الاصطناعي واستشارات تقنية للتحول الرقمي.',
    },
    services: s(
      [
        ['AI solutions', 'Practical AI tools built around your data and your workflow.'],
        ['Technical consulting', 'Clear advice on what to build, what to buy and what to skip.'],
        ['Digital transformation', 'A roadmap for moving your business forward with technology.'],
      ],
      [
        ['حلول الذكاء الاصطناعي', 'أدوات عملية مبنية على بياناتك وسير عملك.'],
        ['الاستشارات التقنية', 'نصيحة واضحة حول ما يجب بناؤه وما يجب شراؤه وما يمكن تجاهله.'],
        ['التحول الرقمي', 'خارطة طريق لتطوير أعمالك باستخدام التقنية.'],
      ],
    ),
    form: 'contact',
  },
  {
    slug: 'labs',
    accent: '#DB2777',
    name: { en: 'Labs', ar: 'المختبرات' },
    title: { en: 'Robot and I Labs', ar: 'مختبرات Robot and I' },
    summary: {
      en: 'Prototypes, experiments, and new ideas we test before we release them.',
      ar: 'نماذج أولية وتجارب وأفكار جديدة نختبرها قبل إطلاقها.',
    },
    services: s(
      [
        ['Prototypes', 'Early versions of products and devices.'],
        ['Experiments', 'Ideas we test openly to see what works.'],
        ['New ideas', 'What we are exploring before it becomes a product.'],
      ],
      [
        ['النماذج الأولية', 'نسخ مبكرة من المنتجات والأجهزة.'],
        ['التجارب', 'أفكار نختبرها بشكل مفتوح لنعرف ما ينجح.'],
        ['أفكار جديدة', 'ما نستكشفه قبل أن يتحول إلى منتج.'],
      ],
    ),
    form: 'follow',
  },
  {
    slug: 'store',
    accent: '#E11D48',
    name: { en: 'Store', ar: 'المتجر' },
    title: { en: 'Robot and I Store', ar: 'متجر Robot and I' },
    summary: {
      en: 'Educational robots, electronic components, sensors, motors, and computers.',
      ar: 'روبوتات تعليمية ومكوّنات إلكترونية وحسّاسات ومحرّكات وحواسيب.',
    },
    services: s(
      [
        ['Educational robots', 'Ready-to-build robots for learning.'],
        ['Electronic components', 'Parts for your circuits and prototypes.'],
        ['Sensors and motors', 'Add sensing and movement to your projects.'],
        ['Computers', 'Boards and computers for makers and classrooms.'],
      ],
      [
        ['روبوتات تعليمية', 'روبوتات جاهزة للتركيب والتعلّم.'],
        ['مكوّنات إلكترونية', 'قطع لدوائرك ونماذجك الأولية.'],
        ['حسّاسات ومحرّكات', 'أضف الإحساس والحركة إلى مشاريعك.'],
        ['حواسيب', 'لوحات وحواسيب للمبتكرين والفصول الدراسية.'],
      ],
    ),
    form: 'waitlist',
  },
];
