
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
    
    // Hero Section
    'hero.title': 'Обучение шахмат онлайн с FM Казыбек',
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
    
    // Reviews
    'reviews.title': 'Отзывы учеников',
    'reviews.subtitle': 'Мнения родителей и учеников о качестве обучения и результатах занятий',
    'reviews.stats.rating': 'Средняя оценка',
    'reviews.stats.total': 'Всего отзывов',
    'reviews.stats.recommend': 'Рекомендуют',
    'reviews.stats.active': 'Активных учеников',
    'reviews.showMore': 'Показать ещё',
    'reviews.details': 'Подробнее',
    
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
    'trainers.stats.students': 'обученных учеников (общая команда)',
    'trainers.stats.experience': 'лет совокупного тренерского опыта',
    'trainers.stats.tournaments': 'турниров с участием',
    'trainers.stats.rating': 'средний рейтинг по отзывам студентов',
    
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
    'nav.requirements': 'Requirements',
    'nav.contacts': 'Contacts',
    
    // Hero Section
    'hero.title': 'Online Chess Training with FM Kazybek',
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
    
    // Reviews
    'reviews.title': 'Student Reviews',
    'reviews.subtitle': 'Opinions of parents and students about the quality of education and learning outcomes',
    'reviews.stats.rating': 'Average rating',
    'reviews.stats.total': 'Total reviews',
    'reviews.stats.recommend': 'Recommend',
    'reviews.stats.active': 'Active students',
    'reviews.showMore': 'Show More',
    'reviews.details': 'Details',
    
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
    'trainers.stats.students': 'trained students (total team)',
    'trainers.stats.experience': 'years of combined coaching experience',
    'trainers.stats.tournaments': 'tournaments participated',
    'trainers.stats.rating': 'average rating from student reviews',
    
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
