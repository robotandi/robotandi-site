import type { Lang } from './data/brands';

export const languages: Record<Lang, { label: string; dir: 'rtl' | 'ltr'; locale: string }> = {
  ar: { label: 'العربية', dir: 'rtl', locale: 'ar' },
  en: { label: 'English', dir: 'ltr', locale: 'en' },
};

export const ui = {
  en: {
    siteName: 'Robot and I',
    tagline: 'Education, software, robotics and AI under one roof.',
    heroTitle: 'Build, learn and automate with Robot and I',
    heroText: 'Six brands, one team: courses, software, robotics, AI, experiments and a store for makers.',
    ourBrands: 'Our brands',
    comingSoon: 'Coming soon',
    comingSoonText: 'This page is being built. Check back shortly.',
    back: 'Back to home',
    menu: 'Menu',
    rights: 'All rights reserved.',
    home: 'Home',
  },
  ar: {
    siteName: 'Robot and I',
    tagline: 'التعليم والبرمجيات والروبوتات والذكاء الاصطناعي في مكان واحد.',
    heroTitle: 'ابنِ وتعلّم وأتمت مع Robot and I',
    heroText: 'ست علامات وفريق واحد: دورات وبرمجيات وروبوتات وذكاء اصطناعي وتجارب ومتجر للمبتكرين.',
    ourBrands: 'علاماتنا',
    comingSoon: 'قريباً',
    comingSoonText: 'هذه الصفحة قيد الإنشاء. عاودوا زيارتنا قريباً.',
    back: 'العودة إلى الرئيسية',
    menu: 'القائمة',
    rights: 'جميع الحقوق محفوظة.',
    home: 'الرئيسية',
  },
} satisfies Record<Lang, Record<string, string>>;

export function otherLang(lang: Lang): Lang {
  return lang === 'ar' ? 'en' : 'ar';
}
