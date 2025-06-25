
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
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color} bg-current/10`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
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
