
import React from 'react';
import { Target, TrendingUp, Brain, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Advantages = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Target,
      title: t('advantages.individual'),
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      title: t('advantages.growth'),
      color: 'text-green-500'
    },
    {
      icon: Brain,
      title: t('advantages.thinking'),
      color: 'text-purple-500'
    },
    {
      icon: Trophy,
      title: t('advantages.tournaments'),
      color: 'text-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('advantages.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${advantage.color} bg-current/10`}>
                  <IconComponent className={`w-8 h-8 ${advantage.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {advantage.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
