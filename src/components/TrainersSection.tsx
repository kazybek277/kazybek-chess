
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Trophy, Users, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrainersSection = () => {
  const { t } = useLanguage();

  const trainers = [
    {
      id: 'umbet',
      name: t('trainers.umbet.name'),
      title: t('trainers.umbet.title'),
      description: t('trainers.umbet.desc'),
      level: 'Золотой уровень',
      image: '/lovable-uploads/27d4b69c-78a0-4def-8a3d-c76fb8a9e0bd.png',
      achievements: [
        'FIDE Мастер по шахматам',
        'Top-100 сильнейших шахматистов Казахстана',
        'Участник 50+ международных турниров',
        'Опыт участия в 300+ турнирах',
        'Обучил 450+ успешных учеников',
        '7+ лет профессионального преподавания',
        'Высокие рейтинги на всех платформах'
      ],
      specializations: [
        'Онлайн обучение',
        'Профессиональная подготовка к турнирам',
        'Профессиональная упаковка дебютного репертуара',
        'Ведение групповых занятий'
      ],
      rating: {
        lichess: '2700+',
        chesscom: '2600+'
      }
    },
    {
      id: 'amir',
      name: t('trainers.amir.name'),
      title: t('trainers.amir.title'),
      description: t('trainers.amir.desc'),
      level: 'Серебряный уровень',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      achievements: [
        'КМС по шахматам',
        'Призёр чемпионата Республики Казахстан',
        'Многократный победитель городских турниров',
        '9 лет преподавательского опыта',
        '15+ лет соревновательного опыта',
        'Специалист по работе с начинающими'
      ]
    },
    {
      id: 'tamerlan',
      name: t('trainers.tamerlan.name'),
      title: t('trainers.tamerlan.title'),
      description: t('trainers.tamerlan.desc'),
      level: 'Серебряный уровень',
      image: '/lovable-uploads/7c292e74-5e52-490b-8a0d-7f74b2c38bca.png',
      achievements: [
        'КМС по шахматам',
        'Призёр чемпионата Республики Казахстан',
        'Многократный победитель городских турниров',
        '9 лет преподавательского опыта',
        '15+ лет соревновательного опыта',
        'Специалист по работе с начинающими'
      ]
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('trainers.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('trainers.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-muted/30 rounded-2xl p-8 border border-border`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/3">
                <div className="relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      trainer.level === 'Золотой уровень' 
                        ? 'bg-yellow-500 text-black' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {trainer.level}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/3 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-lg text-yellow-500 font-semibold mb-4">
                    {trainer.title}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {trainer.description}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                    Достижения
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {trainer.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specializations for Umbet */}
                {trainer.specializations && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Специализации
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rating for Umbet */}
                {trainer.rating && (
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-background rounded-lg p-3 border border-border">
                      <span className="text-sm font-medium text-muted-foreground">Lichess</span>
                      <span className="text-lg font-bold text-foreground">{trainer.rating.lichess}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-background rounded-lg p-3 border border-border">
                      <span className="text-sm font-medium text-muted-foreground">Chess.com</span>
                      <span className="text-lg font-bold text-foreground">{trainer.rating.chesscom}</span>
                    </div>
                  </div>
                )}

                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
                >
                  Связаться с главным тренером
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
