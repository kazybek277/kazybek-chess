
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
      title: 'Главный тренер, FIDE Master',
      description: 'Главный тренер золотого уровня с международным опытом. Специализируется на подготке к турнирам, стратегическом обучении и расширении дебютного репертуара.',
      image: '/lovable-uploads/27d4b69c-78a0-4def-8a3d-c76fb8a9e0bd.png',
      achievements: [
        'FIDE Master по шахматам',
        'Входит в топ-100 шахматистов Казахстана', 
        'Участник 50+ международных турниров',
        'Обучил 450+ успешных учеников',
        'Рейтинг: 2700+ на Lichess, 2600+ на Chess.com',
        '7+ лет профессионального преподавания'
      ],
      specialization: [
        'Турнирная подготовка',
        'Стратегическое мышление',
        'Эндшпильная техника',
        'Разработка дебютов'
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
      icon: Trophy,
      accentColor: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30'
    },
    {
      name: 'Сатыбалды Амир',
      title: 'Старший тренер, Кандидат в мастера спорта (КМС)',
      description: 'Международный соревновательный опыт и мощная методика подготовки спортсменов к разрядам и турнирам. Идеален для командных и групповых форматов.',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      achievements: [
        'Чемпион Азии по блицу',
        '4-кратный Чемпион Казахстана',
        'Многократный чемпион города',
        'Участник мировых командных турниров',
        '15+ лет соревновательного опыта',
        '10 лет преподавания',
        'Ученики — многократные чемпионы'
      ],
      specialization: [
        'Групповые и командные занятия',
        'Тактика и блиц-комбинации',
        'Подготовка до КМС и 4-го разряда',
        'Развитие уверенности и мышления'
      ],
      profiles: [
        {
          platform: 'Chess.com',
          url: 'https://www.chess.com/member/TTenthOcean',
          icon: '♟'
        }
      ],
      icon: Users,
      accentColor: 'from-blue-500/20 to-blue-600/20 border-blue-500/30'
    },
    {
      name: 'Хасенов Тамерлан',
      title: 'Старший тренер, КМС',
      description: 'Специалист серебряного уровня по работе с начинающими и юными шахматистами. Отличный выбор для тех, кто делает первые шаги или хочет стабильный рост.',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      achievements: [
        'КМС по шахматам',
        'Призёр Чемпионата Казахстана',
        'Многократный победитель городских турниров',
        '15+ лет соревновательного опыта',
        '9 лет преподавания',
        'Ученики регулярно выполняют спортивные разряды'
      ],
      specialization: [
        'Работа с детьми и новичками',
        'Позиционная игра, миттельшпиль',
        'Парные занятия',
        'Анализ партий'
      ],
      profiles: [
        {
          platform: 'Lichess',
          url: 'https://lichess.org/@/Tamerlan_269',
          icon: '♞'
        }
      ],
      icon: Target,
      accentColor: 'from-green-500/20 to-green-600/20 border-green-500/30'
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
              <AnimatedCounter end={5} />
            </div>
            <p className="text-sm text-muted-foreground">{t('trainers.stats.rating')}</p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card 
              key={index} 
              className={`group relative border-2 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer bg-gradient-to-br ${trainer.accentColor} backdrop-blur-sm overflow-hidden`}
            >
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <trainer.icon className="w-full h-full" />
              </div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-muted/50 to-muted/80 flex items-center justify-center border-4 border-white/20 shadow-lg">
                  <trainer.icon className="w-10 h-10 text-yellow-500" />
                </div>
                <CardTitle className="text-xl font-bold">{trainer.name}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary px-3 py-1 bg-background/80 rounded-full inline-block">
                  {trainer.title}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {trainer.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                {/* Achievements */}
                <div>
                  <h4 className="font-bold mb-3 text-foreground flex items-center">
                    🏅 <span className="ml-2">Достижения</span>
                  </h4>
                  <div className="space-y-2">
                    {trainer.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialization */}
                <div>
                  <h4 className="font-bold mb-3 text-foreground flex items-center">
                    🧠 <span className="ml-2">Специализация</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {trainer.specialization.map((spec, specIndex) => (
                      <Badge
                        key={specIndex}
                        variant="outline"
                        className="justify-start text-xs py-2 bg-background/50"
                      >
                        ✓ {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Chess Platform Profiles */}
                <div>
                  <h4 className="font-bold mb-3 text-foreground flex items-center">
                    🌐 <span className="ml-2">Платформы</span>
                  </h4>
                  <div className="space-y-2">
                    {trainer.profiles.map((profile, profileIndex) => (
                      <Button
                        key={profileIndex}
                        variant="outline"
                        size="sm"
                        className="w-full justify-between hover:bg-primary/10 hover:border-primary transition-all duration-200 bg-background/50"
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

                {/* Contact Button with enhanced visibility */}
                <div className="pt-4 border-t border-border/50">
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
                  >
                    🔗 Записаться на урок
                  </Button>
                </div>
              </CardContent>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
