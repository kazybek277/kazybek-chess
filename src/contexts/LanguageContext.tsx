
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.reviews': 'Отзывы',
    'nav.requirements': 'Что нужно для занятий',
    'nav.contacts': 'Контакты',
    'nav.language': 'ru',
    
    // Hero Section
    'hero.titleLine1': 'Обучение шахматам онлайн с',
    'hero.titleLine2': 'FM Умбетов Казыбек',
    'hero.subtitle': 'Персональные уроки шахмат по Google Meet и Microsoft Teams',
    'hero.description': 'FM Kazybek из Казахстана предлагает профессиональное обучение шахмат онлайн для детей и взрослых. Шахматные уроки онлайн с международным мастером FIDE.',
    'hero.cta': 'Записаться на урок',
    'hero.cta2': 'Узнать больше',
    
    // Contact Form
    'contact.title': 'Задать вопрос',
    'contact.name': 'Ваше имя',
    'contact.question': 'Ваш вопрос',
    'contact.telegram': 'Telegram или WhatsApp',
    'contact.send': 'Отправить',
    'contact.email': 'kazybekumbetov@gmail.com',
    
    // Reviews
    'reviews.title': 'Отзывы учеников',
    'reviews.subtitle': 'Мнения родителей и учеников о качестве обучения и результатах занятий',
    'reviews.all': 'Все тренеры',
    'reviews.kazybek': 'Казыбек',
    'reviews.amir': 'Амир',
    'reviews.tamerlan': 'Тамерлан',
    'reviews.stats.rating': 'Средняя оценка',
    'reviews.stats.total': 'Всего отзывов',
    'reviews.stats.recommend': 'Рекомендуют',
    'reviews.stats.active': 'Активных учеников',
    'reviews.showMore': 'Показать ещё',
    'reviews.remaining': 'осталось',
    'reviews.details': 'Подробнее',
    'reviews.verified': 'Все отзывы подтверждены',
    'reviews.viewOnProfi': 'Смотреть на Profi.ru',
    
    // Services
    'services.title': 'Услуги',
    'services.subtitle': 'Выберите формат обучения, который подходит именно вам. Все программы адаптируются под ваш уровень и цели.',
    'services.currency': 'Валюта',
    'services.bookLesson': 'Записаться',
    'services.individual': 'Индивидуальные занятия',
    'services.group': 'Групповые занятия',
    'services.pair': 'Занятия в паре',
    'services.plans': 'Тарифные планы',
    
    // Advantages
    'advantages.title': 'Преимущества обучения шахмат онлайн',
    'advantages.professional.title': 'Профессиональный подход к обучению шахматам',
    'advantages.professional.desc': 'С акцентом на развитие стратегического мышления',
    'advantages.individual.title': 'Индивидуальный подход',
    'advantages.individual.desc': 'Персональные программы обучения шахмат онлайн для каждого ученика',
    'advantages.experience.title': 'Опыт шахматного тренера FM',
    'advantages.experience.desc': 'Более 7 лет обучения детей и взрослых шахматам с подтвержденным титулом FIDE Master',
    'advantages.online.title': 'Уроки шахмат по Google Meet',
    'advantages.online.desc': 'Гибкое расписание и удобные платформы для шахматных уроков онлайн',
    
    // Stats
    'stats.students': 'учеников',
    'stats.tournaments': 'международных турниров',
    'stats.trainers': 'тренера',
    'stats.experience': 'лет игрового опыта',
    'stats.teaching': 'лет преподавания',
    
    // Trainers
    'trainers.title': 'О нашей команде тренеров',
    'trainers.subtitle': 'Профессиональная команда тренеров с международным опытом и проверенными результатами',
    'trainers.mainTrainer': 'Главный тренер',
    'trainers.achievements': 'Достижения',
    'trainers.specialization': 'Специализация',
    'trainers.platforms': 'Платформы',
    'trainers.bookLesson': 'Записаться на урок',
    'trainers.botTitle': 'Telegram Бот для практики',
    'trainers.botDescription': 'Используйте нашего бота для дополнительной практики и решения задач',
    'trainers.botButton': 'Открыть бота',
    'trainers.stats.students': 'обученных учеников (общая команда)',
    'trainers.stats.experience': 'лет совокупного тренерского опыта',
    'trainers.stats.tournaments': 'турниров с участием',
    'trainers.stats.rating': 'средний рейтинг по отзывам студентов',

    // Trainer details
    'trainers.kazybek.name': 'Умбетов Казыбек',
    'trainers.kazybek.title': 'Главный тренер, FIDE Master',
    'trainers.kazybek.description': 'Главный тренер золотого уровня с международным опытом. Специализируется на подготовке к турнирам, стратегическом обучении и расширении дебютного репертуара.',
    'trainers.kazybek.achievements.fide': 'FIDE Master по шахматам',
    'trainers.kazybek.achievements.top100': 'Входит в топ-100 шахматистов Казахстана',
    'trainers.kazybek.achievements.tournaments': 'Участник 50+ международных турниров',
    'trainers.kazybek.achievements.students': 'Обучил 450+ успешных учеников',
    'trainers.kazybek.achievements.rating': 'Рейтинг: 2700+ на Lichess, 2600+ на Chess.com',
    'trainers.kazybek.achievements.experience': '7+ лет профессионального преподавания',
    'trainers.kazybek.specialization.tournament': 'Турнирная подготовка',
    'trainers.kazybek.specialization.strategic': 'Стратегическое мышление',
    'trainers.kazybek.specialization.endgame': 'Эндшпильная техника',
    'trainers.kazybek.specialization.openings': 'Разработка дебютов',

    'trainers.amir.name': 'Сатыбалды Амир',
    'trainers.amir.title': 'Старший тренер, Кандидат в мастера спорта (КМС)',
    'trainers.amir.description': 'Международный соревновательный опыт и мощная методика подготовки спортсменов к разрядам и турнирам. Идеален для командных и групповых форматов.',
    'trainers.amir.achievements.asia': 'Чемпион Азии по блицу',
    'trainers.amir.achievements.champion': '4-кратный Чемпион Казахстана',
    'trainers.amir.achievements.city': 'Многократный чемпион города',
    'trainers.amir.achievements.world': 'Участник мировых командных турниров',
    'trainers.amir.achievements.experience': '15+ лет соревновательного опыта',
    'trainers.amir.achievements.teaching': '10 лет преподавания',
    'trainers.amir.achievements.students': 'Ученики — многократные чемпионы',
    'trainers.amir.specialization.group': 'Групповые и командные занятия',
    'trainers.amir.specialization.tactics': 'Тактика и блиц-комбинации',
    'trainers.amir.specialization.preparation': 'Подготовка до КМС и 4-го разряда',
    'trainers.amir.specialization.confidence': 'Развитие уверенности и мышления',

    'trainers.tamerlan.name': 'Хасенов Тамерлан',
    'trainers.tamerlan.title': 'Старший тренер, КМС',
    'trainers.tamerlan.description': 'Специалист серебряного уровня по работе с начинающими и юными шахматистами. Отличный выбор для тех, кто делает первые шаги или хочет стабильный рост.',
    'trainers.tamerlan.achievements.kms': 'КМС по шахматам',
    'trainers.tamerlan.achievements.prizewinner': 'Призёр Чемпионата Казахстана',
    'trainers.tamerlan.achievements.city': 'Многократный победитель городских турниров',
    'trainers.tamerlan.achievements.experience': '15+ лет соревновательного опыта',
    'trainers.tamerlan.achievements.teaching': '9 лет преподавания',
    'trainers.tamerlan.achievements.students': 'Ученики регулярно выполняют спортивные разряды',
    'trainers.tamerlan.specialization.children': 'Работа с детьми и новичками',
    'trainers.tamerlan.specialization.positional': 'Позиционная игра, миттельшпиль',
    'trainers.tamerlan.specialization.pair': 'Парные занятия',
    'trainers.tamerlan.specialization.analysis': 'Анализ партий',
    
    // Requirements
    'requirements.title': 'Что потребуется для шахматных занятий',
    'requirements.computer': 'Компьютер с микрофоном',
    'requirements.internet': 'Интернет, аккаунт Google или Microsoft',
    'requirements.platform': 'Google Meet или Microsoft Teams',
    'requirements.materials': 'Блокнот, ручка, доска (по желанию)',
    'requirements.student': 'Ученик любого возраста',
    
    // Contacts
    'contacts.title': 'Контакты',
    'contacts.subtitle': 'Свяжитесь со мной для записи на занятия или получения консультации. Отвечаю быстро!',
    'contacts.methods': 'Способы связи',
    'contacts.whatsapp': 'Быстрые сообщения',
    'contacts.telegram': 'Основной канал связи',
    'contacts.telegramChannel': 'Наш Telegram-канал',
    'contacts.channelDesc': 'Новости и обновления',
    'contacts.email': 'Подробные вопросы',
    'contacts.schedule': 'Время работы',
    'contacts.scheduleTime': 'Понедельник — Воскресенье',
    'contacts.format': 'Формат занятий',
    'contacts.formatDesc': 'Занятия проводятся только онлайн',
    'contacts.platforms': 'Через Google Meet или Microsoft Teams',
    'contacts.profiles': 'Мои профили на шахматных платформах',
    'contacts.lichess': 'Игровой профиль',
    'contacts.chesscom': 'Игровой профиль',
    
    // Footer
    'footer.rights': '© 2024 Umbetov Kazybek Chess. Все права защищены.',
    'footer.description': 'Профессиональное обучение шахматам онлайн с международным мастером FIDE',
    'footer.links': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.social': 'Социальные сети'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.reviews': 'Reviews',
    'nav.requirements': 'Requirements for Lessons',
    'nav.contacts': 'Contacts',
    'nav.language': 'en',
    
    // Hero Section
    'hero.titleLine1': 'Online Chess Training with',
    'hero.titleLine2': 'FM Umbetov Kazybek',
    'hero.subtitle': 'Personal chess lessons via Google Meet and Microsoft Teams',
    'hero.description': 'FM Kazybek from Kazakhstan offers professional online chess training for children and adults. Online chess lessons with FIDE Master.',
    'hero.cta': 'Book a Lesson',
    'hero.cta2': 'Learn More',
    
    // Contact Form
    'contact.title': 'Ask a Question',
    'contact.name': 'Your name',
    'contact.question': 'Your question',
    'contact.telegram': 'Telegram or WhatsApp',
    'contact.send': 'Send',
    'contact.email': 'kazybekumbetov@gmail.com',
    
    // Reviews
    'reviews.title': 'Student Reviews',
    'reviews.subtitle': 'Opinions of parents and students about the quality of education and learning outcomes',
    'reviews.all': 'All Trainers',
    'reviews.kazybek': 'Kazybek',
    'reviews.amir': 'Amir',
    'reviews.tamerlan': 'Tamerlan',
    'reviews.stats.rating': 'Average rating',
    'reviews.stats.total': 'Total reviews',
    'reviews.stats.recommend': 'Recommend',
    'reviews.stats.active': 'Active students',
    'reviews.showMore': 'Show More',
    'reviews.remaining': 'remaining',
    'reviews.details': 'Details',
    'reviews.verified': 'All reviews verified',
    'reviews.viewOnProfi': 'View on Profi.ru',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Choose the learning format that suits you best. All programs are adapted to your level and goals.',
    'services.currency': 'Currency',
    'services.bookLesson': 'Book Now',
    'services.individual': 'Individual Lessons',
    'services.group': 'Group Lessons',
    'services.pair': 'Pair Lessons',
    'services.plans': 'Pricing Plans',
    
    // Advantages
    'advantages.title': 'Benefits of Online Chess Learning',
    'advantages.professional.title': 'Professional Approach to Chess Training',
    'advantages.professional.desc': 'With focus on strategic thinking development',
    'advantages.individual.title': 'Individual Approach',
    'advantages.individual.desc': 'Personal online chess training programs for each student',
    'advantages.experience.title': 'FM Chess Trainer Experience',
    'advantages.experience.desc': 'More than 7 years of teaching children and adults chess with confirmed FIDE Master title',
    'advantages.online.title': 'Chess Lessons via Google Meet',
    'advantages.online.desc': 'Flexible schedule and convenient platforms for online chess lessons',
    
    // Stats
    'stats.students': 'students',
    'stats.tournaments': 'international tournaments',
    'stats.trainers': 'trainers',
    'stats.experience': 'years of playing experience',
    'stats.teaching': 'years of teaching',
    
    // Trainers
    'trainers.title': 'About Our Team of Trainers',
    'trainers.subtitle': 'Professional team of trainers with international experience and proven results',
    'trainers.mainTrainer': 'Head Trainer',
    'trainers.achievements': 'Achievements',
    'trainers.specialization': 'Specialization',
    'trainers.platforms': 'Platforms',
    'trainers.bookLesson': 'Book a Lesson',
    'trainers.botTitle': 'Telegram Bot for Practice',
    'trainers.botDescription': 'Use our bot for additional practice and solving puzzles',
    'trainers.botButton': 'Open Bot',
    'trainers.stats.students': 'trained students (total team)',
    'trainers.stats.experience': 'years of combined coaching experience',
    'trainers.stats.tournaments': 'tournaments participated',
    'trainers.stats.rating': 'average rating from student reviews',

    // Trainer details
    'trainers.kazybek.name': 'Umbetov Kazybek',
    'trainers.kazybek.title': 'Head Trainer, FIDE Master',
    'trainers.kazybek.description': 'Gold-level head trainer with international experience. Specializes in tournament preparation, strategic training and opening repertoire expansion.',
    'trainers.kazybek.achievements.fide': 'FIDE Master in chess',
    'trainers.kazybek.achievements.top100': 'Top-100 chess player in Kazakhstan',
    'trainers.kazybek.achievements.tournaments': 'Participant in 50+ international tournaments',
    'trainers.kazybek.achievements.students': 'Trained 450+ successful students',
    'trainers.kazybek.achievements.rating': 'Rating: 2700+ on Lichess, 2600+ on Chess.com',
    'trainers.kazybek.achievements.experience': '7+ years of professional teaching',
    'trainers.kazybek.specialization.tournament': 'Tournament preparation',
    'trainers.kazybek.specialization.strategic': 'Strategic thinking',
    'trainers.kazybek.specialization.endgame': 'Endgame technique',
    'trainers.kazybek.specialization.openings': 'Opening development',

    'trainers.amir.name': 'Satybaldy Amir',
    'trainers.amir.title': 'Senior Trainer, Candidate Master of Sports (CMS)',
    'trainers.amir.description': 'International competitive experience and powerful methodology for preparing athletes for ranks and tournaments. Ideal for team and group formats.',
    'trainers.amir.achievements.asia': 'Asian Blitz Champion',
    'trainers.amir.achievements.champion': '4-time Kazakhstan Champion',
    'trainers.amir.achievements.city': 'Multiple city champion',
    'trainers.amir.achievements.world': 'Participant in world team tournaments',
    'trainers.amir.achievements.experience': '15+ years of competitive experience',
    'trainers.amir.achievements.teaching': '10 years of teaching',
    'trainers.amir.achievements.students': 'Students - multiple champions',
    'trainers.amir.specialization.group': 'Group and team lessons',
    'trainers.amir.specialization.tactics': 'Tactics and blitz combinations',
    'trainers.amir.specialization.preparation': 'Preparation up to CMS and 4th rank',
    'trainers.amir.specialization.confidence': 'Confidence and thinking development',

    'trainers.tamerlan.name': 'Khasenov Tamerlan',
    'trainers.tamerlan.title': 'Senior Trainer, CMS',
    'trainers.tamerlan.description': 'Silver-level specialist working with beginners and young chess players. Excellent choice for those taking first steps or wanting steady growth.',
    'trainers.tamerlan.achievements.kms': 'CMS in chess',
    'trainers.tamerlan.achievements.prizewinner': 'Kazakhstan Championship prizewinner',
    'trainers.tamerlan.achievements.city': 'Multiple city tournament winner',
    'trainers.tamerlan.achievements.experience': '15+ years of competitive experience',
    'trainers.tamerlan.achievements.teaching': '9 years of teaching',
    'trainers.tamerlan.achievements.students': 'Students regularly achieve sports ranks',
    'trainers.tamerlan.specialization.children': 'Working with children and beginners',
    'trainers.tamerlan.specialization.positional': 'Positional play, middlegame',
    'trainers.tamerlan.specialization.pair': 'Pair lessons',
    'trainers.tamerlan.specialization.analysis': 'Game analysis',
    
    // Requirements
    'requirements.title': 'What You Need for Chess Lessons',
    'requirements.computer': 'Computer with microphone',
    'requirements.internet': 'Internet, Google or Microsoft account',
    'requirements.platform': 'Google Meet or Microsoft Teams',
    'requirements.materials': 'Notebook, pen, board (optional)',
    'requirements.student': 'Student of any age',
    
    // Contacts
    'contacts.title': 'Contacts',
    'contacts.subtitle': 'Contact me to book lessons or get consultation. I respond quickly!',
    'contacts.methods': 'Contact Methods',
    'contacts.whatsapp': 'Quick messages',
    'contacts.telegram': 'Main communication channel',
    'contacts.telegramChannel': 'Our Telegram Channel',
    'contacts.channelDesc': 'News and updates',
    'contacts.email': 'Detailed questions',
    'contacts.schedule': 'Working Hours',
    'contacts.scheduleTime': 'Monday — Sunday',
    'contacts.format': 'Lesson Format',
    'contacts.formatDesc': 'Lessons are conducted online only',
    'contacts.platforms': 'Via Google Meet or Microsoft Teams',
    'contacts.profiles': 'My Chess Platform Profiles',
    'contacts.lichess': 'Gaming profile',
    'contacts.chesscom': 'Gaming profile',
    
    // Footer
    'footer.rights': '© 2024 Umbetov Kazybek Chess. All rights reserved.',
    'footer.description': 'Professional online chess training with FIDE Master',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
