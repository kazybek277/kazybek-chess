
import React from 'react';
import { Monitor, Wifi, Video, BookOpen, Heart, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RequirementsPageContent = () => {
  const { t } = useLanguage();

  const requirements = [
    {
      icon: Monitor,
      title: 'Компьютер или устройство',
      titleEn: 'Computer or device',
      description: 'Компьютер, планшет или смартфон с камерой и микрофоном для видеосвязи',
      descriptionEn: 'Computer, tablet or smartphone with camera and microphone for video calls',
      color: 'text-blue-500'
    },
    {
      icon: Wifi,
      title: 'Стабильный интернет',
      titleEn: 'Stable internet',
      description: 'Хорошее соединение для комфортного проведения онлайн-уроков',
      descriptionEn: 'Good connection for comfortable online lessons',
      color: 'text-green-500'
    },
    {
      icon: Video,
      title: 'Google Meet / Microsoft Teams',
      titleEn: 'Google Meet / Microsoft Teams',
      description: 'Аккаунт Google или Microsoft для проведения видеоуроков',
      descriptionEn: 'Google or Microsoft account for video lessons',
      color: 'text-purple-500'
    },
    {
      icon: BookOpen,
      title: 'Тетрадь и ручка',
      titleEn: 'Notebook and pen',
      description: 'Для записи важных моментов и выполнения заданий (желательно)',
      descriptionEn: 'For taking notes and completing tasks (recommended)',
      color: 'text-orange-500'
    },
    {
      icon: Users,
      title: 'Шахматная платформа',
      titleEn: 'Chess platform',
      description: 'Аккаунт на Lichess.org или Chess.com для практических занятий',
      descriptionEn: 'Account on Lichess.org or Chess.com for practical lessons',
      color: 'text-red-500'
    },
    {
      icon: Heart,
      title: 'Желание развиваться',
      titleEn: 'Desire to improve',
      description: 'Мотивация и готовность учиться новому в мире шахмат',
      descriptionEn: 'Motivation and readiness to learn new things in the world of chess',
      color: 'text-pink-500'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Что потребуется для шахматных занятий онлайн
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Всё, что нужно для успешного обучения шахматам в онлайн-формате
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-muted/30 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${requirement.color} bg-current/10`}>
                  <IconComponent className={`w-6 h-6 ${requirement.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {requirement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {requirement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Начните уже сегодня!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Все наши программы адаптируются под ваш уровень подготовки - от полных новичков до опытных игроков. 
            Запишитесь на пробное занятие и убедитесь в эффективности нашей методики.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Записаться на пробный урок
            </button>
            <button
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=77759993644&text&type=phone_number&app_absent=0', '_blank')}
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Написать в WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPageContent;
