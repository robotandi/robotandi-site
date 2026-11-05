// Academy curriculum shown at /[lang]/academy/curriculum/.
// Arabic text is a DRAFT: have a native speaker review it.
// Keep this public: no school name, dates, prices or accreditation claims.
import type { Lang } from './brands';

type Localized = Record<Lang, string>;

export interface Level {
  name: Localized;
  focus: Localized;
  /** week-by-week topics, only for the first level of each track */
  weeks?: Record<Lang, string[]>;
}

export interface Track {
  id: string;
  name: Localized;
  ages: Localized;
  status: Localized;
  summary: Localized;
  levels: Level[];
}

export const curriculumText = {
  en: {
    title: 'Academy curriculum',
    description: 'Coding and robotics tracks for ages 6 to 17, with three levels in each track and hands-on projects every week.',
    notice: 'Registration is not open yet, and course details may change before launch.',
    howTitle: 'How each course works',
    sessionTitle: 'Inside a 90-minute session',
    levelsLabel: 'Levels',
    weeksLabel: 'See the 10-week plan',
    weekPrefix: 'Week',
    ctaTitle: 'Want to know when we open?',
    ctaText: 'Join the waitlist and we will let you know.',
    ctaButton: 'Join the waitlist',
  },
  ar: {
    title: 'منهج الأكاديمية',
    description: 'مسارات في البرمجة والروبوتات للأعمار من 6 إلى 17 سنة، بثلاثة مستويات في كل مسار ومشروعات عملية كل أسبوع.',
    notice: 'لم يُفتح التسجيل بعد، وقد تتغير تفاصيل الدورات قبل الانطلاق.',
    howTitle: 'كيف تسير كل دورة',
    sessionTitle: 'داخل الحصة (90 دقيقة)',
    levelsLabel: 'المستويات',
    weeksLabel: 'اعرض خطة الأسابيع العشرة',
    weekPrefix: 'الأسبوع',
    ctaTitle: 'هل تريد معرفة موعد الافتتاح؟',
    ctaText: 'انضم إلى قائمة الانتظار وسنخبرك.',
    ctaButton: 'انضم إلى قائمة الانتظار',
  },
} satisfies Record<Lang, Record<string, string>>;

export const courseFacts: Record<Lang, string[]> = {
  en: [
    'Each level runs for 10 weeks, with one 90-minute session a week.',
    'Groups of 8 to 12 students, with an assistant for younger children.',
    'Robot kits are included in the course fee and are not sold separately.',
    'Every child gets a progress report and a course-completion certificate.',
    'Each level ends with a showcase where families see the projects.',
  ],
  ar: [
    'يستمر كل مستوى 10 أسابيع، بحصة واحدة مدتها 90 دقيقة كل أسبوع.',
    'مجموعات من 8 إلى 12 طالبًا، مع مساعد للأطفال الأصغر سنًا.',
    'أطقم الروبوت مشمولة في رسوم الدورة ولا تُباع منفصلة.',
    'يحصل كل طفل على تقرير تقدّم وشهادة إتمام دورة.',
    'ينتهي كل مستوى بيوم عرض يشاهد فيه الأهالي المشروعات.',
  ],
};

export const sessionPlan: Record<Lang, { minutes: number; title: string }[]> = {
  en: [
    { minutes: 10, title: 'Warm-up and recap' },
    { minutes: 20, title: 'New concept' },
    { minutes: 45, title: 'Build and code' },
    { minutes: 10, title: 'Show and tell' },
    { minutes: 5, title: 'Tidy up' },
  ],
  ar: [
    { minutes: 10, title: 'تمهيد ومراجعة' },
    { minutes: 20, title: 'مفهوم جديد' },
    { minutes: 45, title: 'بناء وبرمجة' },
    { minutes: 10, title: 'عرض ومشاركة' },
    { minutes: 5, title: 'ترتيب المكان' },
  ],
};

export const tracks: Track[] = [
  {
    id: 'starter',
    name: { en: 'Starter', ar: 'Starter' },
    ages: { en: 'Ages 6 to 9', ar: 'من 6 إلى 9 سنوات' },
    status: { en: 'First to open', ar: 'يبدأ أولًا' },
    summary: {
      en: 'Children learn logic through play, block coding and simple robots.',
      ar: 'يتعلم الأطفال المنطق من خلال اللعب والبرمجة بالكتل والروبوتات البسيطة.',
    },
    levels: [
      {
        name: { en: 'Starter 1: Robot Explorers', ar: 'Starter 1: مستكشفو الروبوت' },
        focus: {
          en: 'Sequences, loops, events and first sensors.',
          ar: 'التسلسل والتكرار والأحداث وأول استخدام للحساسات.',
        },
        weeks: {
          en: [
            'Meet your robot',
            'Step-by-step instructions',
            'My first block program',
            'Repeat it with loops',
            'Find the bug',
            'When this happens, do that',
            'Robots that sense',
            'Make a simple decision',
            'Plan and build my project',
            'Showcase day',
          ],
          ar: [
            'تعرّف إلى روبوتك',
            'التعليمات خطوة بخطوة',
            'أول برنامج لي بالكتل',
            'التكرار بالحلقات',
            'ابحث عن الخطأ',
            'عندما يحدث هذا، افعل ذلك',
            'روبوتات تستشعر ما حولها',
            'اتخاذ قرار بسيط',
            'خطط لمشروعي وابنه',
            'يوم العرض',
          ],
        },
      },
      {
        name: { en: 'Starter 2: Story and Game Makers', ar: 'Starter 2: صنّاع القصص والألعاب' },
        focus: {
          en: 'Characters, scenes, scores and simple games.',
          ar: 'الشخصيات والمشاهد والنقاط والألعاب البسيطة.',
        },
      },
      {
        name: { en: 'Starter 3: Smart Robot Challenges', ar: 'Starter 3: تحديات الروبوت الذكي' },
        focus: {
          en: 'Sensor missions, mazes and teamwork.',
          ar: 'مهام الحساسات والمتاهات والعمل الجماعي.',
        },
      },
    ],
  },
  {
    id: 'builder',
    name: { en: 'Builder', ar: 'Builder' },
    ages: { en: 'Ages 10 to 13', ar: 'من 10 إلى 13 سنة' },
    status: { en: 'First to open', ar: 'يبدأ أولًا' },
    summary: {
      en: 'Students move from blocks to real programming with sensors, motors and circuits.',
      ar: 'ينتقل الطلاب من الكتل إلى البرمجة الفعلية باستخدام الحساسات والمحركات والدوائر.',
    },
    levels: [
      {
        name: { en: 'Builder 1: Code and Circuits', ar: 'Builder 1: البرمجة والدوائر' },
        focus: {
          en: 'Variables, conditions, safe circuits and first motors.',
          ar: 'المتغيرات والشروط والدوائر الآمنة وأول استخدام للمحركات.',
        },
        weeks: {
          en: [
            'How programs think',
            'Variables and inputs',
            'Loops and conditions',
            'My first circuit',
            'Code controls light',
            'Reading a sensor',
            'Making things move',
            'Sense and respond',
            'Build and test my project',
            'Showcase day',
          ],
          ar: [
            'كيف تفكر البرامج',
            'المتغيرات والمدخلات',
            'الحلقات والشروط',
            'أول دائرة لي',
            'الكود يتحكم في الضوء',
            'قراءة الحساس',
            'تحريك الأشياء',
            'الاستشعار والاستجابة',
            'بناء مشروعي واختباره',
            'يوم العرض',
          ],
        },
      },
      {
        name: { en: 'Builder 2: Sensors and Smart Devices', ar: 'Builder 2: الحساسات والأجهزة الذكية' },
        focus: {
          en: 'Several sensors, displays, logged data and simple automation.',
          ar: 'عدة حساسات وشاشات وتسجيل البيانات وأتمتة بسيطة.',
        },
      },
      {
        name: { en: 'Builder 3: Python Robot Projects', ar: 'Builder 3: مشروعات الروبوت بلغة Python' },
        focus: {
          en: 'Text-based coding, robot control and a team design project.',
          ar: 'البرمجة النصية والتحكم في الروبوت ومشروع تصميم جماعي.',
        },
      },
    ],
  },
  {
    id: 'creator',
    name: { en: 'Creator', ar: 'Creator' },
    ages: { en: 'Ages 14 to 17', ar: 'من 14 إلى 17 سنة' },
    status: { en: 'Follows when there is demand', ar: 'يبدأ لاحقًا حسب الطلب' },
    summary: {
      en: 'Teens build apps, websites, electronics projects and AI basics for a personal portfolio.',
      ar: 'يبني المراهقون تطبيقات ومواقع ومشروعات إلكترونية وأساسيات الذكاء الاصطناعي لملف أعمال شخصي.',
    },
    levels: [
      {
        name: { en: 'Creator 1: Python and the Web', ar: 'Creator 1: Python والويب' },
        focus: {
          en: 'Python foundations, data and a first website.',
          ar: 'أساسيات Python والبيانات وأول موقع ويب.',
        },
        weeks: {
          en: [
            'Python foundations',
            'Decisions and loops',
            'Functions',
            'Working with data',
            'Build a mini app',
            'Web page structure',
            'Styling a page',
            'Adding interaction',
            'Build my portfolio project',
            'Project demo day',
          ],
          ar: [
            'أساسيات Python',
            'القرارات والحلقات',
            'الدوال',
            'التعامل مع البيانات',
            'بناء تطبيق صغير',
            'هيكل صفحة الويب',
            'تنسيق الصفحة',
            'إضافة التفاعل',
            'بناء مشروع ملف الأعمال',
            'يوم عرض المشروعات',
          ],
        },
      },
      {
        name: { en: 'Creator 2: Electronics and Connected Devices', ar: 'Creator 2: الإلكترونيات والأجهزة المتصلة' },
        focus: {
          en: 'Microcontrollers, wireless data and simple dashboards.',
          ar: 'المتحكمات الدقيقة ونقل البيانات لاسلكيًا ولوحات متابعة بسيطة.',
        },
      },
      {
        name: { en: 'Creator 3: AI Basics and Portfolio', ar: 'Creator 3: أساسيات الذكاء الاصطناعي وملف الأعمال' },
        focus: {
          en: 'How AI learns from data, responsible use and a final project.',
          ar: 'كيف يتعلم الذكاء الاصطناعي من البيانات، والاستخدام المسؤول، ومشروع نهائي.',
        },
      },
    ],
  },
];
