
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.reviews': 'Отзывы',
    'nav.requirements': 'Что нужно',
    'nav.contacts': 'Контакты',
    
    // Hero section
    'hero.title': 'Обучение шахмат онлайн с FM Казыбек',
    'hero.subtitle': 'Персональные уроки шахмат по Google Meet и Microsoft Teams. FM Kazybek из Казахстана предлагает профессиональное обучение шахмат онлайн для детей и взрослых.',
    'hero.cta': 'Записаться на урок',
    
    // Stats
    'stats.students': 'учеников',
    'stats.tournaments': 'турниров',
    'stats.trainers': 'тренера',
    'stats.experience': 'лет опыта',
    'stats.teaching': 'лет преподавания',
    
    // Advantages
    'advantages.title': 'Наши преимущества',
    'advantages.individual': 'Индивидуальный подход',
    'advantages.growth': 'Подготовка к турнирам',
    'advantages.thinking': 'Стратегическое мышление',
    'advantages.tournaments': 'Опытные тренеры',
    
    // Requirements
    'requirements.title': 'Что нужно для занятий',
    'requirements.format': 'Формат занятий',
    'requirements.format.desc': 'Все занятия проводятся только онлайн — через Google Meet или Microsoft Teams',
    'requirements.device': 'Устройство',
    'requirements.device.desc': 'Компьютер, планшет или смартфон с камерой и микрофоном',
    'requirements.internet': 'Интернет',
    'requirements.internet.desc': 'Стабильное соединение для комфортного видеообщения',
    'requirements.platform': 'Шахматная платформа',
    'requirements.platform.desc': 'Аккаунт на Lichess или Chess.com',
    'requirements.age': 'Возраст',
    'requirements.age.desc': 'Программы адаптированы для любого возраста',
    'requirements.motivation': 'Мотивация',
    'requirements.motivation.desc': 'Желание учиться и развиваться',
    
    // Trainers
    'trainers.title': 'Наша команда тренеров',
    'trainers.subtitle': 'Профессиональные тренеры с международным опытом и проверенными результатами обучения',
    'trainers.umbet.name': 'Умбетов Казыбек',
    'trainers.umbet.title': 'Главный тренер, FIDE Мастер',
    'trainers.umbet.desc': 'Главный тренер золотого уровня с международным опытом. Специализация — профессиональная подготовка к турнирам, развитие дебютного репертуара, работа с учениками высокого уровня.',
    'trainers.amir.name': 'Сатыбалды Амир',
    'trainers.amir.title': 'Старший тренер, КМС',
    'trainers.amir.desc': 'Специалист по блицу, рапиду и классике. Подготавливает учеников с нуля до КМС. Его ученики — многократные чемпионы. Учит уверенно думать, считать, побеждать.',
    'trainers.tamerlan.name': 'Хасенов Тамерлан',
    'trainers.tamerlan.title': 'Старший тренер, КМС',
    'trainers.tamerlan.desc': 'Серебряный тренер, идеально подходит для начинающих. Спокойная методика, чёткая программа, регулярное выполнение спортивных разрядов.',
    
    // Services
    'services.title': 'Услуги',
    'services.subtitle': 'Выберите формат обучения, который подходит именно вам. Все программы адаптируются под ваш уровень и цели.',
    'services.individual': 'Индивидуальные занятия',
    'services.group': 'Групповые занятия',
    'services.tournament': 'Турнирная подготовка',
    'services.price': '₸ / 60 мин',
    'services.signup': 'Записаться',
    
    // Reviews
    'reviews.title': 'Отзывы учеников',
    'reviews.subtitle': 'Мнения родителей и учеников о качестве обучения и результатах занятий',
    'reviews.stats.rating': 'Средняя оценка',
    'reviews.stats.total': 'Всего отзывов',
    'reviews.stats.recommend': 'Рекомендуют',
    'reviews.stats.active': 'Активных учеников',
    
    // Contact form
    'contact.title': 'Задать вопрос',
    'contact.name': 'Имя',
    'contact.question': 'Вопрос',
    'contact.telegram': 'Telegram',
    'contact.send': 'Отправить',
    
    // Footer
    'footer.links': 'Быстрые ссылки',
    'footer.contacts': 'Контакты',
    'footer.email': 'kazybek.chess@gmail.com',
    'footer.whatsapp': 'WhatsApp: +7 (775) 999-36-44',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.reviews': 'Reviews',
    'nav.requirements': 'Requirements',
    'nav.contacts': 'Contacts',
    
    // Hero section
    'hero.title': 'Online Chess Training with FM Kazybek',
    'hero.subtitle': 'Personal chess lessons via Google Meet and Microsoft Teams. FM Kazybek from Kazakhstan offers professional online chess training for children and adults.',
    'hero.cta': 'Book a lesson',
    
    // Stats
    'stats.students': 'students',
    'stats.tournaments': 'tournaments',
    'stats.trainers': 'trainers',
    'stats.experience': 'years of experience',
    'stats.teaching': 'years of teaching',
    
    // Advantages
    'advantages.title': 'Our advantages',
    'advantages.individual': 'Individual approach',
    'advantages.growth': 'Tournament preparation',
    'advantages.thinking': 'Strategic thinking',
    'advantages.tournaments': 'Experienced trainers',
    
    // Requirements
    'requirements.title': 'What you need to start',
    'requirements.format': 'Lesson format',
    'requirements.format.desc': 'All lessons are conducted online only — via Google Meet or Microsoft Teams',
    'requirements.device': 'Device',
    'requirements.device.desc': 'Computer, tablet or smartphone with camera and microphone',
    'requirements.internet': 'Internet',
    'requirements.internet.desc': 'Stable connection for comfortable video communication',
    'requirements.platform': 'Chess platform',
    'requirements.platform.desc': 'Account on Lichess or Chess.com',
    'requirements.age': 'Age',
    'requirements.age.desc': 'Programs adapted for any age',
    'requirements.motivation': 'Motivation',
    'requirements.motivation.desc': 'Desire to learn and develop',
    
    // Trainers
    'trainers.title': 'Our team of trainers',
    'trainers.subtitle': 'Professional trainers with international experience and proven teaching results',
    'trainers.umbet.name': 'Umbetov Kazybek',
    'trainers.umbet.title': 'Head trainer, FIDE Master',
    'trainers.umbet.desc': 'Gold level head trainer with international experience. Specialization — professional tournament preparation, opening repertoire development, working with high-level students.',
    'trainers.amir.name': 'Satybaldy Amir',
    'trainers.amir.title': 'Senior trainer, CMS',
    'trainers.amir.desc': 'Specialist in blitz, rapid and classical chess. Prepares students from beginner to CMS level. His students are multiple champions. Teaches confident thinking, calculation, and winning.',
    'trainers.tamerlan.name': 'Khasenov Tamerlan',
    'trainers.tamerlan.title': 'Senior trainer, CMS',
    'trainers.tamerlan.desc': 'Silver trainer, perfect for beginners. Calm methodology, clear program, regular sports grade achievements.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Choose the learning format that suits you best. All programs are adapted to your level and goals.',
    'services.individual': 'Individual lessons',
    'services.group': 'Group lessons',
    'services.tournament': 'Tournament preparation',
    'services.price': '₸ / 60 min',
    'services.signup': 'Sign up',
    
    // Reviews
    'reviews.title': 'Student Reviews',
    'reviews.subtitle': 'Opinions of parents and students about the quality of education and lesson results',
    'reviews.stats.rating': 'Average rating',
    'reviews.stats.total': 'Total reviews',
    'reviews.stats.recommend': 'Recommend',
    'reviews.stats.active': 'Active students',
    
    // Contact form
    'contact.title': 'Ask a question',
    'contact.name': 'Name',
    'contact.question': 'Question',
    'contact.telegram': 'Telegram',
    'contact.send': 'Send',
    
    // Footer
    'footer.links': 'Quick links',
    'footer.contacts': 'Contacts',
    'footer.email': 'kazybek.chess@gmail.com',
    'footer.whatsapp': 'WhatsApp: +7 (775) 999-36-44',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
