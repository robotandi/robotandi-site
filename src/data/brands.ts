// Brand data for all six brands. Arabic text is a DRAFT: have a native speaker review it.
export type Lang = 'ar' | 'en';

export interface Brand {
  slug: string;
  accent: string; // CSS color for the brand accent
  name: Record<Lang, string>;      // short label used in navigation
  title: Record<Lang, string>;     // full brand name
  summary: Record<Lang, string>;
  cta: Record<Lang, string>;
}

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
    cta: { en: 'Join the waitlist', ar: 'انضم إلى قائمة الانتظار' },
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
    cta: { en: 'Get a quote', ar: 'اطلب عرض سعر' },
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
    cta: { en: 'Contact us', ar: 'تواصل معنا' },
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
    cta: { en: 'Book a consultation', ar: 'احجز استشارة' },
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
    cta: { en: 'Follow our experiments', ar: 'تابع تجاربنا' },
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
    cta: { en: 'Join the waitlist', ar: 'انضم إلى قائمة الانتظار' },
  },
];
