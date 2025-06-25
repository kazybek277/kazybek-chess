
import React, { useState } from 'react';
import { Star, User, MessageSquare, ThumbsUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ReviewsSection = () => {
  const { t } = useLanguage();
  const [selectedTrainer, setSelectedTrainer] = useState('kazybek');

  const trainers = [
    { id: 'kazybek', name: 'Казыбек (FM)', nameEn: 'Kazybek (FM)' },
    { id: 'amir', name: 'Амир (КМС)', nameEn: 'Amir (CMS)' },
    { id: 'tamerlan', name: 'Тамерлан (КМС)', nameEn: 'Tamerlan (CMS)' }
  ];

  const reviews = [
    {
      id: 1,
      trainer: 'kazybek',
      name: 'Гания',
      role: 'Родитель',
      roleEn: 'Parent',
      text: 'Репетитор нам очень нравится. Доброжелательный, хорошо общается с ребенком 7 лет, умеет заинтересовать, очень пунктуален.',
      textEn: 'We really like the tutor. Kind, communicates well with our 7-year-old child, knows how to engage, very punctual.',
      age: '7 лет',
      ageEn: '7 years old',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'март 2021 г.',
      dateEn: 'March 2021',
      rating: 5
    },
    {
      id: 2,
      trainer: 'kazybek',
      name: 'Шынар',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Провели пробный урок. Будем заниматься. Посмотрим на результаты.',
      textEn: 'Had a trial lesson. Will continue studying. Let\'s see the results.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Пробное занятие',
      typeEn: 'Trial lesson',
      date: 'май 2021 г.',
      dateEn: 'May 2021',
      rating: 5
    },
    {
      id: 3,
      trainer: 'kazybek',
      name: 'Акмарал',
      role: 'Родитель',
      roleEn: 'Parent',
      text: 'Очень хороший специалист! Пунктуальный, ответственный, на все вопросы спокойно отвечает. Рекомендую.',
      textEn: 'Very good specialist! Punctual, responsible, calmly answers all questions. I recommend.',
      age: 'Детские группы',
      ageEn: 'Children groups',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 4,
      trainer: 'kazybek',
      name: 'Максим',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Очень рекомендую! Уроки динамичные и интересные. Все доходчиво объясняет, тут же закрепляем на примерах. Потом разбор партии. Хочешь быть лучшим — тренируйся у лучших!',
      textEn: 'Highly recommend! Lessons are dynamic and interesting. Explains everything clearly, we immediately practice with examples. Then game analysis. Want to be the best — train with the best!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 5,
      trainer: 'kazybek',
      name: 'Мила',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Ответственный и грамотный преподаватель. Спокойная, доброжелательная атмосфера. После урока — домашние задания для закрепления материала.',
      textEn: 'Responsible and competent teacher. Calm, friendly atmosphere. After the lesson - homework to consolidate the material.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 6,
      trainer: 'kazybek',
      name: 'Аркадий',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Всегда на связи. Дает домашние задания по слабым местам, помогает решать задачи, использует Skype и WhatsApp. Рекомендую!',
      textEn: 'Always in touch. Gives homework on weak points, helps solve problems, uses Skype and WhatsApp. I recommend!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 7,
      trainer: 'kazybek',
      name: 'Svetlana',
      role: 'Мама ученика',
      roleEn: 'Student\'s mother',
      text: 'Сыну почти 7, занятия продолжаем в долгосрочном формате. Ернар — четкий, структурный, внимательный.',
      textEn: 'Son is almost 7, we continue lessons in long-term format. Ernar is clear, structured, attentive.',
      age: '7 лет',
      ageEn: '7 years old',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    // ... добавляем остальные отзывы аналогично
  ];

  const stats = [
    {
      icon: Star,
      value: '5.0',
      label: t('reviews.stats.rating'),
      color: 'text-yellow-500'
    },
    {
      icon: MessageSquare,
      value: '38',
      label: t('reviews.stats.total'),
      color: 'text-blue-500'
    },
    {
      icon: ThumbsUp,
      value: '100%',
      label: t('reviews.stats.recommend'),
      color: 'text-green-500'
    },
    {
      icon: User,
      value: '45+',
      label: t('reviews.stats.active'),
      color: 'text-purple-500'
    }
  ];

  const filteredReviews = reviews.filter(review => review.trainer === selectedTrainer);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('reviews.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-muted/30 border border-border">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color} bg-current/10`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trainer Selection */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-background rounded-lg p-1 border border-border">
            {trainers.map((trainer) => (
              <button
                key={trainer.id}
                onClick={() => setSelectedTrainer(trainer.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTrainer === trainer.id
                    ? 'bg-yellow-500 text-black'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {trainer.name}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-muted/30 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded">
                    {review.type}
                  </span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profi.ru Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Больше отзывов на Profi.ru
          </h3>
          <p className="text-muted-foreground mb-6">
            Посмотрите дополнительные отзывы и рейтинги на профессиональной платформе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => window.open('https://profi.ru/profile/UmbetovKT3/', '_blank')}
            >
              Основной профиль на Profi.ru
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://profi.ru/profile/UmbetovKT2/', '_blank')}
            >
              Дополнительный профиль
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
