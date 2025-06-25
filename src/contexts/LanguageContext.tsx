
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
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Выберите формат обучения, который подходит именно вам',
    
    // Trainers
    'trainers.title': 'О нашей команде тренеров',
    'trainers.subtitle': 'Профессиональная команда тренеров с международным опытом и проверенными результатами',
    'trainers.umbet.name': 'Умбетов Казыбек',
    'trainers.umbet.title': 'Главный тренер, FIDE Мастер',
    'trainers.umbet.desc': 'Максимальный эффект и полное внимание тренера',
    'trainers.amir.name': 'Сатыбалды Амир',
    'trainers.amir.title': 'Старший тренер, КМС',
    'trainers.amir.desc': 'До 4 человек: командная динамика и турнирная практика',
    'trainers.tamerlan.name': 'Хасенов Тамерлан',
    'trainers.tamerlan.title': 'Старший тренер, КМС',
    'trainers.tamerlan.desc': 'Идеальный баланс внимания и стоимости'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.reviews': 'Reviews',
    'nav.requirements': 'Requirements',
    'nav.contacts': 'Contacts',
    
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
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Choose the learning format that suits you best',
    
    // Trainers
    'trainers.title': 'About Our Team of Trainers',
    'trainers.subtitle': 'Professional team of trainers with international experience and proven results',
    'trainers.umbet.name': 'Umbetov Kazybek',
    'trainers.umbet.title': 'Head Trainer, FIDE Master',
    'trainers.umbet.desc': 'Maximum effect and full trainer attention',
    'trainers.amir.name': 'Satybaldy Amir',
    'trainers.amir.title': 'Senior Trainer, CMS',
    'trainers.amir.desc': 'Up to 4 people: team dynamics and tournament practice',
    'trainers.tamerlan.name': 'Khasenov Tamerlan',
    'trainers.tamerlan.title': 'Senior Trainer, CMS',
    'trainers.tamerlan.desc': 'Perfect balance of attention and cost'
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
