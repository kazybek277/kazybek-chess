
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trophy, Users, Target, Crown, BookOpen, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const TrainersSection = () => {
  const { t } = useLanguage();

  const trophyImages = [
    '/lovable-uploads/1e9ce55b-f7e1-4c12-803f-ae1ac6fb4b4e.png',
    '/lovable-uploads/83a3c8e8-0ec0-42f7-b82e-caf8ad92396b.png',
    '/lovable-uploads/2f660698-7297-4b74-837c-eab331bfaa90.png',
    '/lovable-uploads/0db739a4-0cba-4384-af27-ef673467514b.png',
    '/lovable-uploads/c21b98f0-16ab-439a-8d9b-d9839940bb3b.png',
    '/lovable-uploads/910efa9d-1959-4d06-b112-0b366e537098.png',
    '/lovable-uploads/2cb8d5d9-1dc9-4116-9e6d-d82dd80d1111.png',
    '/lovable-uploads/3cc7401c-ac5c-4d84-8d29-36fe24b678bd.png',
    '/lovable-uploads/d73a7086-9fd5-4b21-96a8-44449c7875d6.png'
  ];

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
      icon: Crown,
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
        t('trainers.amir.achievements.students')
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
      icon: BookOpen,
      accentColor: 'from-blue-400/30 to-blue-600/30 border-blue-500/50 bg-gradient-to-br from-blue-50/10 to-blue-100/20'
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
      icon: Zap,
      accentColor: 'from-green-400/30 to-green-600/30 border-green-500/50 bg-gradient-to-br from-green-50/10 to-green-100/20'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-background/80 to-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - CENTERED */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium backdrop-blur-sm mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            {t('nav.language') === 'ru' ? 'Наша команда' : 'Our Team'}
          </div>
          <div className="fancy-border inline-block p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-xl max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('trainers.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('trainers.subtitle')}
            </p>
          </div>
        </div>

        {/* Team Stats - CENTERED */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 fancy-border">
              <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.students')}</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 fancy-border">
              <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
                <AnimatedCounter end={16} suffix="+" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.experience')}</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 fancy-border">
              <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
                <AnimatedCounter end={350} suffix="+" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.tournaments')}</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 fancy-border">
              <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
                <AnimatedCounter end={5} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.rating')}</p>
            </div>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {trainers.map((trainer, index) => (
            <Card 
              key={index} 
              className={`group relative border-2 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer ${trainer.accentColor} backdrop-blur-sm overflow-hidden fancy-border`}
            >
              {/* Main trainer badge */}
              {trainer.isMain && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-yellow-500 text-black font-bold animate-pulse text-xs">
                    👑 {t('trainers.mainTrainer')}
                  </Badge>
                </div>
              )}

              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 opacity-10">
                <trainer.icon className="w-full h-full" />
              </div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center border-4 shadow-lg ${trainer.isMain ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 border-yellow-300' : trainer.name.includes('Амир') || trainer.name.includes('Amir') ? 'bg-gradient-to-br from-blue-400 to-blue-600 border-blue-300' : 'bg-gradient-to-br from-green-400 to-green-600 border-green-300'}`}>
                  <trainer.icon className={`w-8 md:w-10 h-8 md:h-10 ${trainer.isMain ? 'text-black' : 'text-white'}`} />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold">{trainer.name}</CardTitle>
                <CardDescription className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full inline-block ${trainer.isMain ? 'text-yellow-600 bg-yellow-100/80' : trainer.name.includes('Амир') || trainer.name.includes('Amir') ? 'text-blue-600 bg-blue-100/80' : 'text-green-600 bg-green-100/80'}`}>
                  {trainer.title}
                </CardDescription>
                <p className="text-xs md:text-sm text-muted-foreground mt-3 leading-relaxed">
                  {trainer.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4 md:space-y-6 relative z-10">
                {/* Achievements */}
                <div>
                  <h4 className="font-bold mb-3 text-foreground flex items-center text-sm md:text-base">
                    🏅 <span className="ml-2">{t('trainers.achievements')}</span>
                  </h4>
                  <div className="space-y-2">
                    {trainer.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start text-xs md:text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${trainer.isMain ? 'bg-yellow-500' : trainer.name.includes('Амир') || trainer.name.includes('Amir') ? 'bg-blue-500' : 'bg-green-500'}`} />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialization */}
                <div>
                  <h4 className="font-bold mb-3 text-foreground flex items-center text-sm md:text-base">
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
                  <h4 className="font-bold mb-3 text-foreground flex items-center text-sm md:text-base">
                    🌐 <span className="ml-2">{t('trainers.platforms')}</span>
                  </h4>
                  <div className="space-y-2">
                    {trainer.profiles.map((profile, profileIndex) => (
                      <Button
                        key={profileIndex}
                        variant="outline"
                        size="sm"
                        className="w-full justify-between hover:bg-primary/10 hover:border-primary transition-all duration-200 bg-background/50 text-xs md:text-sm"
                        onClick={() => window.open(profile.url, '_blank')}
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-base md:text-lg">{profile.icon}</span>
                          {profile.platform}
                        </div>
                        <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <div className="pt-4 border-t border-border/50">
                  <Button
                    className={`w-full font-bold py-3 text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 ${
                      trainer.isMain 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                        : trainer.name.includes('Амир') || trainer.name.includes('Amir')
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                    onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
                  >
                    🔗 {t('trainers.bookLesson')}
                  </Button>
                </div>
              </CardContent>

              {/* Enhanced hover overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${trainer.isMain ? 'from-yellow-500/5 to-transparent' : trainer.name.includes('Амир') || trainer.name.includes('Amir') ? 'from-blue-500/5 to-transparent' : 'from-green-500/5 to-transparent'}`} />
            </Card>
          ))}
        </div>

        {/* Achievement Gallery Section - CENTERED */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium backdrop-blur-sm mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              {t('nav.language') === 'ru' ? 'Галерея достижений' : 'Achievement Gallery'}
            </div>
            <div className="fancy-border inline-block p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {t('nav.language') === 'ru' ? 'Кубки и награды Казыбека' : 'Kazybek\'s Cups and Awards'}
              </h2>
              <p className="text-muted-foreground">
                {t('nav.language') === 'ru' ? 'Коллекция наград и трофеев, завоёванных на международных турнирах' : 'Collection of awards and trophies won at international tournaments'}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="fancy-border p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-xl max-w-5xl">
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {trophyImages.map((trophy, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:border-yellow-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={trophy} 
                        alt={`Trophy ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Telegram Bot Section - CENTERED */}
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 fancy-border text-center max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{t('trainers.botTitle')}</h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">{t('trainers.botDescription')}</p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              onClick={() => window.open('https://t.me/Kazybek_Umbetov_Chess_Bot', '_blank')}
            >
              🤖 {t('trainers.botButton')}
            </Button>
          </div>
        </div>

        {/* Telegram Channel Section - CENTERED */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200/50 p-4 md:p-6 fancy-border text-center max-w-2xl">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              📢 {t('nav.language') === 'ru' ? 'Подписывайтесь на наш Telegram-канал!' : 'Subscribe to our Telegram channel!'}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
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
