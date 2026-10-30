import type { Lang, FormKind } from './data/brands';

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
    whatWeOffer: 'What we offer',
    comingSoonBadge: 'Coming soon',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    privacyNote: 'By sending this form you agree to our',
    privacyLink: 'Privacy Policy',
    notFoundTitle: 'Page not found',
    notFoundText: 'The page you are looking for does not exist or has moved.',
    rights: 'All rights reserved.',
    homeCtaTitle: 'Have a project or a question?',
    homeCtaText: 'Tell us what you need and we will get back to you.',
    aboutTitle: 'About Robot and I',
    aboutP1: 'Robot and I is a technology company that brings together education, software, robotics and artificial intelligence. We teach, we build, and we test new ideas, then share what we learn.',
    aboutP2: 'Our six brands work as one team. Academy teaches the skills. Software, Robotics and AI build solutions for businesses. Labs tests new ideas. Store supplies the parts makers need.',
    contactTitle: 'Contact us',
    contactText: 'Tell us about your project or question and we will reply by email.',
    emailUs: 'Or email us at',
    topic: 'Topic',
    topicGeneral: 'General question',
    name: 'Name',
    email: 'Email',
    phone: 'Phone (optional)',
    message: 'How can we help?',
    sending: 'Sending…',
    error: 'Something went wrong. Please try again in a moment.',
  },
  ar: {
    siteName: 'Robot and I',
    tagline: 'التعليم والبرمجيات والروبوتات والذكاء الاصطناعي في مكان واحد.',
    heroTitle: 'ابنِ وتعلّم وأتمت مع Robot and I',
    heroText: 'ست علامات وفريق واحد: دورات وبرمجيات وروبوتات وذكاء اصطناعي وتجارب ومتجر للمبتكرين.',
    ourBrands: 'علاماتنا',
    whatWeOffer: 'ما نقدّمه',
    comingSoonBadge: 'قريباً',
    about: 'من نحن',
    contact: 'تواصل معنا',
    privacy: 'الخصوصية',
    privacyNote: 'بإرسال هذا النموذج فإنك توافق على',
    privacyLink: 'سياسة الخصوصية',
    notFoundTitle: 'الصفحة غير موجودة',
    notFoundText: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    rights: 'جميع الحقوق محفوظة.',
    homeCtaTitle: 'هل لديك مشروع أو سؤال؟',
    homeCtaText: 'أخبرنا بما تحتاجه وسنعاود الاتصال بك.',
    aboutTitle: 'من نحن',
    aboutP1: 'Robot and I شركة تقنية تجمع بين التعليم والبرمجيات والروبوتات والذكاء الاصطناعي. نُعلّم ونبني ونختبر أفكاراً جديدة، ثم نشارك ما تعلّمناه.',
    aboutP2: 'علاماتنا الست تعمل كفريق واحد. الأكاديمية تُعلّم المهارات. والبرمجيات والروبوتات والذكاء الاصطناعي تبني حلولاً للأعمال. والمختبرات تختبر الأفكار الجديدة. والمتجر يوفّر القطع التي يحتاجها المبتكرون.',
    contactTitle: 'تواصل معنا',
    contactText: 'أخبرنا عن مشروعك أو سؤالك وسنردّ عليك عبر البريد الإلكتروني.',
    emailUs: 'أو راسلنا عبر',
    topic: 'الموضوع',
    topicGeneral: 'سؤال عام',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف (اختياري)',
    message: 'كيف يمكننا مساعدتك؟',
    sending: 'جارٍ الإرسال…',
    error: 'حدث خطأ. يرجى المحاولة مرة أخرى بعد قليل.',
  },
} satisfies Record<Lang, Record<string, string>>;

export const forms: Record<Lang, Record<FormKind, { title: string; text: string; submit: string; success: string }>> = {
  en: {
    quote: { title: 'Get a quote', text: 'Describe what you want to build and we will send you a proposal.', submit: 'Request a quote', success: 'Thank you! We received your request and will be in touch soon.' },
    contact: { title: 'Talk to us', text: 'Tell us about your project and how we can help.', submit: 'Send message', success: 'Thank you! We received your message and will reply soon.' },
    waitlist: { title: 'Join the waitlist', text: 'Leave your email and we will let you know the moment we open.', submit: 'Join the waitlist', success: 'You are on the list. Thank you!' },
    follow: { title: 'Follow our experiments', text: 'Get a note when we share something new from the lab.', submit: 'Follow', success: 'Thank you! You will hear from us when there is news.' },
  },
  ar: {
    quote: { title: 'اطلب عرض سعر', text: 'صِف ما تريد بناءه وسنرسل لك عرضاً مناسباً.', submit: 'اطلب عرض سعر', success: 'شكراً لك! استلمنا طلبك وسنتواصل معك قريباً.' },
    contact: { title: 'تحدّث معنا', text: 'أخبرنا عن مشروعك وكيف يمكننا مساعدتك.', submit: 'إرسال الرسالة', success: 'شكراً لك! استلمنا رسالتك وسنردّ عليك قريباً.' },
    waitlist: { title: 'انضم إلى قائمة الانتظار', text: 'اترك بريدك الإلكتروني وسنخبرك فور الافتتاح.', submit: 'انضم إلى القائمة', success: 'تم تسجيلك في القائمة. شكراً لك!' },
    follow: { title: 'تابع تجاربنا', text: 'سنرسل لك إشعاراً عندما نشارك جديداً من المختبر.', submit: 'تابعنا', success: 'شكراً لك! سنتواصل معك عند وجود جديد.' },
  },
};

export function otherLang(lang: Lang): Lang {
  return lang === 'ar' ? 'en' : 'ar';
}
