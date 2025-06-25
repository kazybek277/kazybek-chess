
import React from 'react';
import { Brain, User, Trophy, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Advantages = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Brain,
      title: 'Профессиональный подход к обучению шахматам',
      titleEn: 'Professional approach to chess education',
      description: 'С акцентом на развитие стратегического мышления',
      descriptionEn: 'With emphasis on strategic thinking development',
      color: 'text-blue-500'
    },
    {
      icon: User,
      title: 'Индивидуальный подход',
      titleEn: 'Individual approach',
      description: 'Персональные программы обучения шахмат онлайн для каждого ученика',
      descriptionEn: 'Personal online chess training programs for each student',
      color: 'text-green-500'
    },
    {
      icon: Trophy,
      title: 'Опыт шахматного тренера FM',
      titleEn: 'Experience of FM chess trainer',
      description: 'Более 7 лет обучения детей и взрослых шахматам с подтвержденным титулом FIDE Master',
      descriptionEn: 'More than 7 years of teaching children and adults chess with confirmed FIDE Master title',
      color: 'text-yellow-500'
    },
    {
      icon: Video,
      title: 'Уроки шахмат по Google Meet',
      titleEn: 'Chess lessons via Google Meet',
      description: 'Гибкое расписание и удобные платформы для шахматных уроков онлайн',
      descriptionEn: 'Flexible schedule and convenient platforms for online chess lessons',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🧠 Преимущества обучения шахмат онлайн
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Профессиональное обучение с индивидуальным подходом и проверенными результатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${advantage.color} bg-current/10`}>
                  <IconComponent className={`w-6 h-6 ${advantage.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
