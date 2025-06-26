
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trophy, Users, Target, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const TrainersSection = () => {
  const { t } = useLanguage();

  const trainers = [
    {
      name: 'Умбетов Казыбек',
      title: 'Главный тренер, FIDE Мастер',
      description: 'Максимальный эффект и полное внимание тренера',
      image: '/lovable-uploads/27d4b69c-78a0-4def-8a3d-c76fb8a9e0bd.png',
      achievements: [
        'FIDE Master (FM)',
        'Рейтинг 2200+',
        '7+ лет тренерского опыта',
        '200+ успешных учеников'
      ],
      specialization: [
        'Турнирная подготовка',
        'Стратегическое планирование',
        'Эндшпильная техника',
        'Дебютная подготовка'
      ],
      profiles: [
        {
          platform: 'Lichess',
          url: 'https://lichess.org/@/Terminator_10000',
          icon: '♞'
        },
        {
          platform: 'Chess.com',
          url: 'https://www.chess.com/member/bale1290',
          icon: '♟'
        }
      ],
      icon: Trophy
    },
    {
      name: 'Сатыбалды Амир',
      title: 'Старший тренер, КМС',
      description: 'До 4 человек: командная динамика и турнирная практика',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      achievements: [
        'Кандидат в мастера спорта',
        'Рейтинг 2000+',
        '5+ лет тренерского опыта',
        '150+ успешных учеников'
      ],
      specialization: [
        'Групповые занятия',
        'Тактические комбинации',
        'Детское обучение',
        'Базовая стратегия'
      ],
      profiles: [
        {
          platform: 'Chess.com',
          url: 'https://www.chess.com/member/TTenthOcean',
          icon: '♟'
        }
      ],
      icon: Users
    },
    {
      name: 'Хасенов Тамерлан',
      title: 'Старший тренер, КМС',
      description: 'Идеальный баланс внимания и стоимости',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      achievements: [
        'Кандидат в мастера спорта',
        'Рейтинг 1950+',
        '4+ года тренерского опыта',
        '100+ успешных учеников'
      ],
      specialization: [
        'Парные занятия',
        'Позиционная игра',
        'Миттельшпиль',
        'Анализ партий'
      ],
      profiles: [
        {
          platform: 'Lichess',
          url: 'https://lichess.org/@/Tamerlan_269',
          icon: '♞'
        }
      ],
      icon: Target
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('trainers.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('trainers.subtitle')}
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <p className="text-sm text-muted-foreground">{t('trainers.stats.students')}</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={16} suffix="+" />
            </div>
            <p className="text-sm text-muted-foreground">{t('trainers.stats.experience')}</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={350} suffix="+" />
            </div>
            <p className="text-sm text-muted-foreground">{t('trainers.stats.tournaments')}</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={5.0} decimals={1} />
            </div>
            <p className="text-sm text-muted-foreground">{t('trainers.stats.rating')}</p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                    <trainer.icon className="w-12 h-12 text-yellow-500" />
                  </div>
                </div>
                <CardTitle className="text-xl">{trainer.name}</CardTitle>
                <CardDescription className="text-sm font-medium text-yellow-600">
                  {trainer.title}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  {trainer.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Достижения</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {trainer.achievements.map((achievement, achievementIndex) => (
                      <Badge
                        key={achievementIndex}
                        variant="outline"
                        className="justify-start text-xs"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specialization */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Специализация</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {trainer.specialization.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chess Platform Profiles */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Профили на платформах</h4>
                  <div className="space-y-2">
                    {trainer.profiles.map((profile, profileIndex) => (
                      <Button
                        key={profileIndex}
                        variant="outline"
                        size="sm"
                        className="w-full justify-between hover:bg-yellow-500/10 hover:border-yellow-500"
                        onClick={() => window.open(profile.url, '_blank')}
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-lg">{profile.icon}</span>
                          {profile.platform}
                        </div>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
                >
                  Записаться на урок
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
