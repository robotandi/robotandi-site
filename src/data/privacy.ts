// Privacy policy text. This is a DRAFT and not legal advice: review it (ideally with a lawyer
// familiar with Egyptian data protection law) and have a native speaker check the Arabic.
import type { Lang } from './brands';

export const privacyUpdated: Record<Lang, string> = {
  en: 'Last updated: October 2026',
  ar: 'آخر تحديث: أكتوبر 2026',
};

export interface PrivacySection { title: string; body: string[] }

export const privacy: Record<Lang, { title: string; intro: string; sections: PrivacySection[] }> = {
  en: {
    title: 'Privacy Policy',
    intro: 'This page explains what information robotandi.com collects, why, and what you can ask us to do with it.',
    sections: [
      {
        title: 'Who we are',
        body: ['Robot and I operates robotandi.com and its brands: Academy, Software, Robotics, AI, Labs and Store. You can reach us through the Contact page.'],
      },
      {
        title: 'What we collect',
        body: [
          'We only collect what you choose to send us through our forms: your name, email address, phone number (optional), your message, the brand or topic you wrote to, and the language of the page you used.',
          'We do not ask for payment details or passwords on this website.',
        ],
      },
      {
        title: 'How we use it',
        body: [
          'We use your details to reply to you, prepare quotes and proposals, and, if you joined a waitlist or follow list, to tell you when that service opens or when there is news.',
          'We do not sell your information.',
        ],
      },
      {
        title: 'Who processes it for us',
        body: [
          'Web3Forms delivers form submissions to our email inbox.',
          'Cloudflare hosts the website and protects it. Like any hosting provider, it processes technical data such as your IP address when you visit.',
          'Google Fonts supplies the typeface used on this site, so your browser connects to Google servers when a page loads.',
          'Microsoft 365 provides our email, where your messages are stored.',
        ],
      },
      {
        title: 'Cookies and analytics',
        body: ['We do not use advertising cookies. Our hosting provider may use technical cookies for security. If we add analytics later, we will update this page and describe what is measured.'],
      },
      {
        title: 'How long we keep it',
        body: ['We keep your messages as long as needed to respond and for our business records. We keep waitlist and follow-list emails until you ask us to remove them.'],
      },
      {
        title: 'Your choices',
        body: ['You can ask us to show you the information we hold about you, correct it, or delete it, and you can ask to be removed from any list at any time. Contact us through the Contact page.'],
      },
      {
        title: 'Changes to this page',
        body: ['If we change how we handle information, we will update this page and its date.'],
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    intro: 'توضح هذه الصفحة ما هي المعلومات التي يجمعها موقع robotandi.com، ولماذا، وما الذي يمكنك أن تطلبه منا بشأنها.',
    sections: [
      {
        title: 'من نحن',
        body: ['تدير Robot and I موقع robotandi.com وعلاماته: الأكاديمية والبرمجيات والروبوتات والذكاء الاصطناعي والمختبرات والمتجر. يمكنك التواصل معنا عبر صفحة «تواصل معنا».'],
      },
      {
        title: 'ما الذي نجمعه',
        body: [
          'لا نجمع إلا ما تختار إرساله لنا عبر النماذج: اسمك وبريدك الإلكتروني ورقم هاتفك (اختياري) ورسالتك والعلامة أو الموضوع الذي راسلتنا بشأنه ولغة الصفحة التي استخدمتها.',
          'لا نطلب بيانات الدفع أو كلمات المرور على هذا الموقع.',
        ],
      },
      {
        title: 'كيف نستخدمها',
        body: [
          'نستخدم بياناتك للرد عليك وإعداد عروض الأسعار والمقترحات، وإذا انضممت إلى قائمة انتظار أو قائمة متابعة، فلإخبارك عند افتتاح الخدمة أو عند وجود أخبار.',
          'لا نبيع معلوماتك.',
        ],
      },
      {
        title: 'من يعالجها نيابةً عنا',
        body: [
          'تقوم خدمة Web3Forms بتسليم ما ترسله عبر النماذج إلى بريدنا الإلكتروني.',
          'تستضيف Cloudflare الموقع وتحميه، وكأي مزوّد استضافة فهي تعالج بيانات تقنية مثل عنوان IP عند زيارتك.',
          'توفّر Google Fonts الخط المستخدم في الموقع، ولذلك يتصل متصفحك بخوادم Google عند تحميل الصفحة.',
          'توفّر Microsoft 365 بريدنا الإلكتروني الذي تُحفظ فيه رسائلك.',
        ],
      },
      {
        title: 'ملفات تعريف الارتباط والتحليلات',
        body: ['لا نستخدم ملفات تعريف ارتباط إعلانية. وقد يستخدم مزوّد الاستضافة ملفات تقنية لأغراض الأمان. وإذا أضفنا أدوات تحليل لاحقاً فسنحدّث هذه الصفحة ونوضح ما يتم قياسه.'],
      },
      {
        title: 'مدة الاحتفاظ بها',
        body: ['نحتفظ برسائلك للمدة اللازمة للرد عليك ولسجلات أعمالنا. ونحتفظ ببريد قوائم الانتظار والمتابعة حتى تطلب حذفه.'],
      },
      {
        title: 'اختياراتك',
        body: ['يمكنك أن تطلب منا إطلاعك على المعلومات التي نحتفظ بها عنك أو تصحيحها أو حذفها، ويمكنك طلب إزالتك من أي قائمة في أي وقت. تواصل معنا عبر صفحة «تواصل معنا».'],
      },
      {
        title: 'التغييرات على هذه الصفحة',
        body: ['إذا غيّرنا طريقة تعاملنا مع المعلومات فسنحدّث هذه الصفحة وتاريخها.'],
      },
    ],
  },
};
