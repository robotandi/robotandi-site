// Subject pages shown at /[lang]/academy/[subject]/.
// Arabic text is a DRAFT: have a native speaker review it.
// Every level referenced here must exist in curriculum.ts. Tools stay generic
// until the kits are chosen. No school name, dates, prices or accreditation claims.
import type { Lang } from './brands';

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

export interface SubjectPlacement {
  /** a track id from curriculum.ts */
  track: string;
  /** zero-based level positions in that track */
  levels: number[];
  text: Localized;
}

export interface Subject {
  slug: string;
  name: Localized;
  intro: Localized;
  learn: LocalizedList;
  projects: LocalizedList;
  note?: Localized;
  placements: SubjectPlacement[];
}

export const subjectText = {
  en: {
    backToAcademy: 'Back to Academy',
    learnTitle: 'What students learn',
    projectsTitle: 'Example projects',
    placementsTitle: 'Where it appears in the curriculum',
    otherTitle: 'Other subjects',
    curriculumLink: 'See the full curriculum',
  },
  ar: {
    backToAcademy: 'العودة إلى الأكاديمية',
    learnTitle: 'ماذا يتعلم الطلاب',
    projectsTitle: 'أمثلة على المشروعات',
    placementsTitle: 'أين يظهر في المنهج',
    otherTitle: 'مواد أخرى',
    curriculumLink: 'اعرض المنهج كاملًا',
  },
} satisfies Record<Lang, Record<string, string>>;

export const subjects: Subject[] = [
  {
    slug: 'robotics',
    name: { en: 'Robotics', ar: 'الروبوتات' },
    intro: {
      en: 'Students learn how robots sense, decide and move, then program their own robots to complete real missions.',
      ar: 'يتعلم الطلاب كيف تستشعر الروبوتات ما حولها وتقرر وتتحرك، ثم يبرمجون روبوتاتهم لإنجاز مهام فعلية.',
    },
    learn: {
      en: [
        'What a robot is and what its parts do',
        'How to plan a route and turn it into a program',
        'How sensors help a robot respond to its surroundings',
        'How motors and servos create movement',
        'How to test, fix and improve a robot',
      ],
      ar: [
        'ما هو الروبوت وما وظيفة أجزائه',
        'كيف نخطط لمسار ونحوله إلى برنامج',
        'كيف تساعد الحساسات الروبوت على الاستجابة لما حوله',
        'كيف تصنع المحركات والمحركات المؤازرة الحركة',
        'كيف نختبر الروبوت ونصلحه ونحسّنه',
      ],
    },
    projects: {
      en: [
        'A robot that stops before it reaches an obstacle',
        'A robot mission designed in pairs',
        'A team maze and line-following challenge',
        'A team robot project in Python',
      ],
      ar: [
        'روبوت يتوقف قبل الوصول إلى عائق',
        'مهمة روبوت يصممها طالبان معًا',
        'تحدي جماعي في المتاهات وتتبع الخط',
        'مشروع روبوت جماعي بلغة Python',
      ],
    },
    placements: [
      {
        track: 'starter',
        levels: [0, 2],
        text: {
          en: 'First robots, sensors and team challenges.',
          ar: 'أول الروبوتات والحساسات والتحديات الجماعية.',
        },
      },
      {
        track: 'builder',
        levels: [0, 2],
        text: {
          en: 'Motors, then robot control with text-based code.',
          ar: 'المحركات، ثم التحكم في الروبوت بالبرمجة النصية.',
        },
      },
    ],
  },
  {
    slug: 'programming',
    name: { en: 'Programming', ar: 'البرمجة' },
    intro: {
      en: 'Students move step by step from block coding to real programming, and use it to build games, apps and websites.',
      ar: 'ينتقل الطلاب خطوة بخطوة من البرمجة بالكتل إلى البرمجة الفعلية، ويستخدمونها لبناء ألعاب وتطبيقات ومواقع.',
    },
    learn: {
      en: [
        'Sequences, loops, events and decisions',
        'Variables, inputs and conditions',
        'How to find and fix bugs',
        'Python functions and working with data',
        'How web pages are structured, styled and made interactive',
      ],
      ar: [
        'التسلسل والتكرار والأحداث والقرارات',
        'المتغيرات والمدخلات والشروط',
        'كيف نجد الأخطاء ونصلحها',
        'الدوال في Python والتعامل مع البيانات',
        'كيف تُبنى صفحات الويب وتُنسّق وتصبح تفاعلية',
      ],
    },
    projects: {
      en: [
        'A simple game or animated story',
        'A score counter and a number game',
        'A quiz program in Python',
        'A personal project website',
      ],
      ar: [
        'لعبة بسيطة أو قصة متحركة',
        'عدّاد نقاط ولعبة أرقام',
        'برنامج اختبارات بلغة Python',
        'موقع شخصي لعرض المشروعات',
      ],
    },
    placements: [
      {
        track: 'starter',
        levels: [0, 1],
        text: {
          en: 'Block coding through robots, stories and games.',
          ar: 'البرمجة بالكتل من خلال الروبوتات والقصص والألعاب.',
        },
      },
      {
        track: 'builder',
        levels: [0, 2],
        text: {
          en: 'From first variables to text-based Python.',
          ar: 'من أول المتغيرات إلى البرمجة النصية بلغة Python.',
        },
      },
      {
        track: 'creator',
        levels: [0],
        text: {
          en: 'Python, data and a first website.',
          ar: 'لغة Python والبيانات وأول موقع ويب.',
        },
      },
    ],
  },
  {
    slug: 'artificial-intelligence',
    name: { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
    intro: {
      en: 'Older students learn how AI learns from data, where it can go wrong, and how to use it responsibly in a small project.',
      ar: 'يتعلم الطلاب الأكبر سنًا كيف يتعلم الذكاء الاصطناعي من البيانات، وأين قد يخطئ، وكيف يستخدمونه بمسؤولية في مشروع صغير.',
    },
    learn: {
      en: [
        'How AI models learn from data',
        'Why data quality matters',
        'What bias is and why it happens',
        'How to use AI tools responsibly',
        'How to plan and present a small AI project',
      ],
      ar: [
        'كيف تتعلم نماذج الذكاء الاصطناعي من البيانات',
        'لماذا تهم جودة البيانات',
        'ما هو التحيز ولماذا يحدث',
        'كيف نستخدم أدوات الذكاء الاصطناعي بمسؤولية',
        'كيف نخطط لمشروع صغير في الذكاء الاصطناعي ونعرضه',
      ],
    },
    projects: {
      en: [
        'A small AI project',
        'A look at how data changes the results',
        'A final project for the student portfolio',
      ],
      ar: [
        'مشروع صغير في الذكاء الاصطناعي',
        'دراسة كيف تغيّر البيانات النتائج',
        'مشروع نهائي لملف أعمال الطالب',
      ],
    },
    note: {
      en: 'Staff choose any AI tools used in class, and students never enter personal data into them.',
      ar: 'يختار الفريق أدوات الذكاء الاصطناعي المستخدمة في الفصل، ولا يُدخل الطلاب أي بيانات شخصية فيها.',
    },
    placements: [
      {
        track: 'creator',
        levels: [2],
        text: {
          en: 'Taught in the final Creator level, after Python and data skills.',
          ar: 'يُدرَّس في المستوى الأخير من Creator، بعد مهارات Python والبيانات.',
        },
      },
    ],
  },
  {
    slug: 'electronics',
    name: { en: 'Electronics', ar: 'الإلكترونيات' },
    intro: {
      en: 'Students learn how circuits work, wire them safely, and connect them to code so devices can sense and respond.',
      ar: 'يتعلم الطلاب كيف تعمل الدوائر، ويوصّلونها بأمان، ويربطونها بالبرمجة لتستشعر الأجهزة ما حولها وتستجيب له.',
    },
    learn: {
      en: [
        'Current, components and safe wiring',
        'How to build circuits on a breadboard',
        'How controller boards run code',
        'How to read sensors and use their data',
        'How connected devices send data wirelessly',
      ],
      ar: [
        'التيار والمكوّنات والتوصيل الآمن',
        'كيف نبني الدوائر على لوحة التجارب',
        'كيف تشغّل لوحات التحكم الكود',
        'كيف نقرأ الحساسات ونستخدم بياناتها',
        'كيف ترسل الأجهزة المتصلة البيانات لاسلكيًا',
      ],
    },
    projects: {
      en: [
        'An LED circuit on a breadboard',
        'A programmed traffic light',
        'An automatic barrier or night light',
        'A connected device with a dashboard',
      ],
      ar: [
        'دائرة LED على لوحة التجارب',
        'إشارة مرور مبرمجة',
        'بوابة آلية أو مصباح ليلي',
        'جهاز متصل بلوحة متابعة',
      ],
    },
    note: {
      en: 'Students use low-voltage, battery or USB-powered equipment only. There is no soldering in these levels.',
      ar: 'يستخدم الطلاب معدات منخفضة الجهد تعمل بالبطارية أو USB فقط، ولا يوجد لحام في هذه المستويات.',
    },
    placements: [
      {
        track: 'builder',
        levels: [0, 1],
        text: {
          en: 'Safe circuits, sensors, displays and simple automation.',
          ar: 'الدوائر الآمنة والحساسات والشاشات والأتمتة البسيطة.',
        },
      },
      {
        track: 'creator',
        levels: [1],
        text: {
          en: 'Microcontrollers, wireless data and simple dashboards.',
          ar: 'المتحكمات الدقيقة ونقل البيانات لاسلكيًا ولوحات المتابعة البسيطة.',
        },
      },
    ],
  },
  {
    slug: 'stem',
    name: { en: 'STEM', ar: 'علوم STEM' },
    intro: {
      en: 'STEM is not a separate course. Science, technology, engineering and math come together in the projects students build at every level.',
      ar: 'علوم STEM ليست دورة منفصلة، فالعلوم والتكنولوجيا والهندسة والرياضيات تجتمع في المشروعات التي يبنيها الطلاب في كل مستوى.',
    },
    learn: {
      en: [
        'Science: using sensors to measure light and distance',
        'Technology: choosing and using the right tools for a project',
        'Engineering: planning, building, testing and improving a design',
        'Math: using sequences, counters, variables and data',
      ],
      ar: [
        'العلوم: استخدام الحساسات لقياس الضوء والمسافة',
        'التكنولوجيا: اختيار الأدوات المناسبة للمشروع واستخدامها',
        'الهندسة: التخطيط والبناء والاختبار وتحسين التصميم',
        'الرياضيات: استخدام التسلسل والعدّادات والمتغيرات والبيانات',
      ],
    },
    projects: {
      en: [
        'A robot mission planned and tested in pairs',
        'A device that displays light or distance readings',
        'A smart home or classroom device',
        'A portfolio project that combines several skills',
      ],
      ar: [
        'مهمة روبوت يخطط لها طالبان ويختبرانها',
        'جهاز يعرض قراءات الضوء أو المسافة',
        'جهاز ذكي للمنزل أو الفصل',
        'مشروع لملف الأعمال يجمع عدة مهارات',
      ],
    },
    placements: [
      {
        track: 'starter',
        levels: [0, 1, 2],
        text: {
          en: 'Curiosity, planning and testing through play.',
          ar: 'الفضول والتخطيط والاختبار من خلال اللعب.',
        },
      },
      {
        track: 'builder',
        levels: [0, 1, 2],
        text: {
          en: 'Measuring, building and improving real devices.',
          ar: 'القياس والبناء وتحسين أجهزة فعلية.',
        },
      },
      {
        track: 'creator',
        levels: [0, 1, 2],
        text: {
          en: 'Combining skills in larger portfolio projects.',
          ar: 'الجمع بين المهارات في مشروعات أكبر لملف الأعمال.',
        },
      },
    ],
  },
];
