
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trophy, Users, Target, Crown, BookOpen, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const TrainersSection = () => {
  const { t } = useLanguage();

  const trainers = [
    {
      name: '♛ Умбетов Казыбек',
      title: 'Главный тренер, FIDE Master',
      description: 'Главный тренер академии и единственный наставник золотого уровня с международным рейтингом и глубокой турнирной историей. С 7-летним профессиональным опытом преподавания и более 40 международными турнирами за плечами, Казыбек готовит не просто шахматистов — а чемпионов. Он обучает на русском, английском и казахском языках, адаптируя стиль преподавания под каждого ученика, от начинающих до кандидатов в мастера и международных звёзд.',
      image: '/lovable-uploads/27d4b69c-78a0-4def-8a3d-c76fb8a9e0bd.png',
      isMain: true,
      achievements: [
        '🏆 FIDE Master по шахматам',
        '🥇 Чемпион Казахстана 2015 года',
        '🌍 Участник 40+ крупных международных турниров',
        '♔ Играл против нынешнего чемпиона мира Гукеша (2018)',
        '🏅 Входит в топ-100 шахматистов Казахстана',
        '💻 Онлайн-рейтинг: 2700+ Lichess, 2600+ Chess.com',
        '👨‍🎓 Подготовил 450+ учеников, включая призёров чемпионатов мира, Азии и Казахстана',
        '📚 Автор собственных методик турнирной подготовки и психологической устойчивости'
      ],
      specialization: [
        '🎯 Турнирная подготовка под ключ (от дебютов до эндшпиля)',
        '🔍 Глубокое позиционное и стратегическое обучение',
        '♟ Индивидуальный анализ партий и построение репертуара',
        '⏳ Тренировка игры в цейтноте, быстрой оценки позиций',
        '🧠 Развитие мышления чемпиона и психологической выносливости'
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
      name: '🧠 Амир Хасенов',
      title: 'Старший тренер, Кандидат в мастера спорта (КМС)',
      description: 'Тренер с международным шахматным и академическим бэкграундом. Выпускник британских учебных заведений и призёр многих турниров, Амир успешно сочетает европейскую школу мышления с казахстанской системой подготовки. Идеален для тех, кто хочет уверенно расти в группе или командной среде.',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      isMain: false,
      achievements: [
        '🏆 Ученики — чемпионы Казахстана и призёры международных турниров',
        '🎓 Oxford International School (UK)',
        '🎓 Aston University (UK)',
        '🌐 Владеет английским, русским и казахским языками',
        '📚 Системный подход и упор на развитие уверенности и тактического чутья'
      ],
      specialization: [
        '👥 Групповые и командные занятия (идеально для 2–4 человек)',
        '⚡ Блиц, комбинации, тактика',
        '🎯 Подготовка до КМС, I–IV разрядов',
        '💬 Лёгкое объяснение сложных идей на доступном языке',
        '🛡 Развитие уверенности, дисциплины и самостоятельного мышления'
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
      name: '🧠 Тамерлан Хасенов',
      title: 'Серебряный тренер, Кандидат в мастера спорта',
      description: 'Спокойный, терпеливый и системный наставник, который помогает ученикам открыть свой стиль игры и уверенно прогрессировать. Тамерлан — идеальный выбор для начинающих, младших школьников и всех, кто хочет научиться мыслить глубоко, но без стресса.',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      isMain: false,
      achievements: [
        '🏆 Призёр городских и республиканских турниров',
        '🕹 15+ лет игровой практики и более 9 лет преподавания',
        '🎯 Специализация — в развитии дебютного понимания и работе над типичными ошибками'
      ],
      specialization: [
        '👦 Занятия с детьми и начинающими',
        '⏳ Обучение с нуля: от фигур до комбинаций',
        '🔍 Разбор типичных ошибок и психологическая поддержка',
        '♟ Медленный темп + закрепление материала',
        '🧩 Построение фундаментального мышления'
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
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium backdrop-blur-sm mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Наша команда
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('trainers.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('trainers.subtitle')}
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.students')}</p>
          </div>
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={16} suffix="+" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.experience')}</p>
          </div>
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={350} suffix="+" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.tournaments')}</p>
          </div>
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={5} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">{t('trainers.stats.rating')}</p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {trainers.map((trainer, index) => (
            <Card 
              key={index} 
              className={`group relative border-2 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer ${trainer.accentColor} backdrop-blur-sm overflow-hidden`}
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
                <div className={`w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center border-4 shadow-lg ${trainer.isMain ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 border-yellow-300' : trainer.name.includes('Амир') ? 'bg-gradient-to-br from-blue-400 to-blue-600 border-blue-300' : 'bg-gradient-to-br from-green-400 to-green-600 border-green-300'}`}>
                  <trainer.icon className={`w-8 md:w-10 h-8 md:h-10 ${trainer.isMain ? 'text-black' : 'text-white'}`} />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold">{trainer.name}</CardTitle>
                <CardDescription className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full inline-block ${trainer.isMain ? 'text-yellow-600 bg-yellow-100/80' : trainer.name.includes('Амир') ? 'text-blue-600 bg-blue-100/80' : 'text-green-600 bg-green-100/80'}`}>
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
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${trainer.isMain ? 'bg-yellow-500' : trainer.name.includes('Амир') ? 'bg-blue-500' : 'bg-green-500'}`} />
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
                        : trainer.name.includes('Амир')
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
              <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${trainer.isMain ? 'from-yellow-500/5 to-transparent' : trainer.name.includes('Амир') ? 'from-blue-500/5 to-transparent' : 'from-green-500/5 to-transparent'}`} />
            </Card>
          ))}
        </div>

        {/* Telegram Bot Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
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

        {/* Telegram Channel Section */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200/50 p-4 md:p-6">
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
