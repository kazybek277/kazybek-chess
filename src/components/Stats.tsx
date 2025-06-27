
import React from 'react';
import { Users, Trophy, GraduationCap, Clock, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedCounter from './AnimatedCounter';

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: 450,
      suffix: '+',
      label: t('stats.students'),
      color: 'text-blue-500'
    },
    {
      icon: Trophy,
      value: 50,
      suffix: '+',
      label: t('stats.tournaments'),
      color: 'text-yellow-500'
    },
    {
      icon: GraduationCap,
      value: 3,
      suffix: '',
      label: t('stats.trainers'),
      color: 'text-green-500'
    },
    {
      icon: Clock,
      value: 15,
      suffix: '+',
      label: t('stats.experience'),
      color: 'text-purple-500'
    },
    {
      icon: BookOpen,
      value: 10,
      suffix: '+',
      label: t('stats.teaching'),
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="fancy-border inline-block p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши достижения в цифрах
            </h2>
            <p className="text-lg text-muted-foreground">
              Результаты, которыми мы гордимся
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 shadow-lg border-2 border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 fancy-border backdrop-blur-sm"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${stat.color} bg-current/20 border-2 border-current/30`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
