
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trophy, Users, Target } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const TrainersSection = () => {
  const { t } = useLanguage();

  const trainers = [
    {
      name: t('trainers.kazybek.name'),
      title: t('trainers.kazybek.title'),
      description: t('trainers.kazybek.description'),
      image: '/lovable-uploads/27d4b69c-78a0-4def-8a3d-c76fb8a9e0bd.png',
      isMain: true,
      achievements: [
        t('trainers.kazybek.achievements.fide'),
        t('trainers.kazybek.achievements.top100'),
        t('trainers.kazybek.achievements.tournaments'),
        t('trainers.kazybek.achievements.students'),
        t('trainers.kazybek.achievements.rating'),
        t('trainers.kazybek.achievements.experience')
      ],
      specialization: [
        t('trainers.kazybek.specialization.tournament'),
        t('trainers.kazybek.specialization.strategic'),
        t('trainers.kazybek.specialization.endgame'),
        t('trainers.kazybek.specialization.openings')
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
      accentColor: 'from-yellow-400/30 to-yellow-600/30 border-yellow-500/50 bg-gradient-to-br from-yellow-50/10 to-yellow-100/20'
    },
    {
      name: t('trainers.amir.name'),
      title: t('trainers.amir.title'),
      description: t('trainers.amir.description'),
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      isMain: false,
      achievements: [
        t('trainers.amir.achievements.asia'),
        t('trainers.amir.achievements.champion'),
        t('trainers.amir.achievements.city'),
        t('trainers.amir.achievements.world'),
        t('trainers.amir.achievements.experience'),
        t('trainers.amir.achievements.teaching'),
        t('trainers.amir.achievements.students'),
        // New achievements
        t('trainers.amir.achievements.education'),
        t('trainers.amir.achievements.student_success'),
        t('trainers.amir.achievements.languages'),
        t('trainers.amir.achievements.approach')
      ],
      education: [
        t('trainers.amir.education.oxford'),
        t('trainers.amir.education.aston')
      ],
      specialization: [
        t('trainers.amir.specialization.group'),
        t('trainers.amir.specialization.tactics'),
        t('trainers.amir.specialization.preparation'),
        t('trainers.amir.specialization.confidence')
      ],
      profiles: [
        {
          platform: 'Chess.com',
          url: 'https://www.chess.com/member/TTenthOcean',
          icon: '♟'
        }
      ],
      icon: Users,
      accentColor: 'from-gray-300/30 to-gray-500/30 border-gray-400/50 bg-gradient-to-br from-gray-50/10 to-gray-100/20'
    },
    {
      name: t('trainers.tamerlan.name'),
      title: t('trainers.tamerlan.title'),
      description: t('trainers.tamerlan.description'),
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      isMain: false,
      achievements: [
        t('trainers.tamerlan.achievements.kms'),
        t('trainers.tamerlan.achievements.prizewinner'),
        t('trainers.tamerlan.achievements.city'),
        t('trainers.tamerlan.achievements.experience'),
        t('trainers.tamerlan.achievements.teaching'),
        t('trainers.tamerlan.achievements.students')
      ],
      specialization: [
        t('trainers.tamerlan.specialization.children'),
        t('trainers.tamerlan.specialization.positional'),
        t('trainers.tamerlan.specialization.pair'),
        t('trainers.tamerlan.specialization.analysis')
      ],
      profiles: [
        {
          platform: 'Lichess',
          url: 'https://lichess.org/@/Tamerlan_269',
          icon: '♞'
        }
      ],
      icon: Target,
      accentColor: 'from-gray-300/30 to-gray-500/30 border-gray-400/50 bg-gradient-to-br from-gray-50/10 to-gray-100/20'
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
              className={`group relative border-2 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer ${trainer.accentColor} backdrop-blur-sm overflow-hidden`}
            >
              {/* Main trainer badge */}
              {trainer.isMain && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-yellow-500 text-black font-bold">
                    {t('trainers.mainTrainer')}
                  </Badge>
                </div>
              )}

              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <trainer.icon className="w-full h-full" />
              </div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-muted/50 to-muted/80 flex items-center justify-center border-4 border-white/20 shadow-lg">
                  <trainer.icon className={`w-10 h-10 ${trainer.isMain ? 'text-yellow-500' : 'text-gray-500'}`} />
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
                    🏅 <span className="ml-2">{t('trainers.achievements')}</span>
                  </h4>
                  <div className="space-y-2">
                    {trainer.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${trainer.isMain ? 'bg-yellow-500' : 'bg-gray-500'}`} />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education section for Amir */}
                {trainer.education && (
                  <div>
                    <h4 className="font-bold mb-3 text-foreground flex items-center">
                      🎓 <span className="ml-2">{t('nav.language') === 'ru' ? 'Образование' : 'Education'}</span>
                    </h4>
                    <div className="space-y-2">
                      {trainer.education.map((edu, eduIndex) => (
                        <div key={eduIndex} className="flex items-start text-sm">
                          <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 bg-blue-500" />
                          <span className="text-muted-foreground leading-relaxed">{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specialization */}
                <div>
                  <h4 className="font-bold mb-3 text-foreground flex items-center">
                    🧠 <span className="ml-2">{t('trainers.specialization')}</span>
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
                    🌐 <span className="ml-2">{t('trainers.platforms')}</span>
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
                    className={`w-full font-bold py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 ${
                      trainer.isMain 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                        : 'bg-gray-500 hover:bg-gray-600 text-white'
                    }`}
                    onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
                  >
                    🔗 {t('trainers.bookLesson')}
                  </Button>
                </div>
              </CardContent>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Telegram Bot Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">{t('trainers.botTitle')}</h3>
            <p className="text-muted-foreground mb-6">{t('trainers.botDescription')}</p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              onClick={() => window.open('https://t.me/Kazybek_Umbetov_Chess_Bot', '_blank')}
            >
              🤖 {t('trainers.botButton')}
            </Button>
          </div>
        </div>

        {/* Telegram Channel Section */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">
              📢 {t('nav.language') === 'ru' ? 'Подписывайтесь на наш Telegram-канал!' : 'Subscribe to our Telegram channel!'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('nav.language') === 'ru' 
                ? 'Будьте в курсе новостей и обновлений' 
                : 'Stay updated with news and updates'
              }
            </p>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={() => window.open('https://t.me/kazybek_chess', '_blank')}
            >
              📱 {t('nav.language') === 'ru' ? 'Подписаться' : 'Subscribe'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
