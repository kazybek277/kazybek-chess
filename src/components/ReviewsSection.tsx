
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Award, Shield } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const ReviewsSection = () => {
  const { t } = useLanguage();
  const [selectedTrainer, setSelectedTrainer] = useState('all');
  const [visibleReviews, setVisibleReviews] = useState(6);

  const reviews = [
    {
      trainer: 'kazybek',
      name: 'Гания',
      role: 'Родитель',
      text: 'Репетитор нам очень нравится. Доброжелательный, хорошо общается с ребенком 7 лет, умеет заинтересовать, очень пунктуален.',
      age: '7 лет',
      type: 'Индивидуальные занятия',
      date: 'март 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Шынар',
      role: 'Ученица',
      text: 'Провели пробный урок. Будем заниматься. Посмотрим на результаты.',
      age: 'Взрослый',
      type: 'Пробное занятие',
      date: 'май 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Акмарал',
      role: 'Родитель',
      text: 'Очень хороший специалист! Пунктуальный, ответственный, на все вопросы спокойно отвечает. Рекомендую.',
      age: 'Детские группы',
      type: 'Онлайн занятия',
      date: 'июнь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Максим',
      role: 'Ученик',
      text: 'Очень рекомендую! Уроки динамичные и интересные. Все доходчиво объясняет, тут же закрепляем на примерах. Потом разбор партии. Хочешь быть лучшим — тренируйся у лучших!',
      age: 'Взрослый',
      type: 'Индивидуальные занятия',
      date: 'июнь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Мила',
      role: 'Ученица',
      text: 'Ответственный и грамотный преподаватель. Спокойная, доброжелательная атмосфера. После урока — домашние задания для закрепления материала.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'июнь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Аркадий',
      role: 'Ученик',
      text: 'Всегда на связи. Дает домашние задания по слабым местам, помогает решать задачи, использует Skype и WhatsApp. Рекомендую!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'июнь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Svetlana',
      role: 'Мама ученика',
      text: 'Сыну почти 7, занятия продолжаем в долгосрочном формате. Ернар — четкий, структурный, внимательный.',
      age: '7 лет',
      type: 'Индивидуальные занятия',
      date: 'июнь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Оксана',
      role: 'Ученица',
      text: 'Столько информации за один урок! Голова пухнет, но очень интересно. Посмотрим, как справимся с домашкой.',
      age: 'Взрослый',
      type: 'Индивидуальные занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Анара',
      role: 'Мама ученицы',
      text: 'Профессионал с видением развития ребенка. Моя дочь-подросток увлечена и мотивирована.',
      age: 'Подросток',
      type: 'Индивидуальные занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Тимофей',
      role: 'Ученик',
      text: 'Интенсивные, интересные занятия. Специалист инициативный, присылает домашние задания. Результат чувствуется уже после первого урока.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Наталья',
      role: 'Ученица',
      text: 'Урок пролетает как 5 минут. Ответственный, умный, пунктуальный — даже при нулевом бэкграунде легко начать!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Дмитрий Гриненко',
      role: 'Родитель',
      text: 'Благодарны за индивидуальный подход. Спасибо, Ернар Тореханович!',
      age: 'Детские группы',
      type: 'Индивидуальные занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Любовь',
      role: 'Ученица',
      text: 'Объясняет спокойно и понятно. Ведет запись урока — очень удобно для повторения. Уроки всегда вовремя.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Альмира',
      role: 'Мама ученика',
      text: 'Сыну 7 лет. Учитель ему нравится. Немного быстро объясняет, но думаю, они найдут общий ритм.',
      age: '7 лет',
      type: 'Индивидуальные занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Лариса Джумагалиева',
      role: 'Мама ученицы',
      text: 'Дочери очень нравится. Продолжаем занятия. Преподаватель доступно и терпеливо объясняет.',
      age: 'Детские группы',
      type: 'Индивидуальные занятия',
      date: 'июль 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Ернар',
      role: 'Ученик',
      text: 'Уроки интенсивные и интересные, специалист инициативный, присылает домашние задания, на связи всегда.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'август 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Александр',
      role: 'Ученик',
      text: 'Прекрасный преподаватель! Прогресс очевиден. Помогает даже вне уроков — топ!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'август 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Людмила',
      role: 'Мама ученицы',
      text: 'Начала заниматься дочь. Первое впечатление — очень хорошее. Надеемся на долгое сотрудничество.',
      age: 'Детские группы',
      type: 'Индивидуальные занятия',
      date: 'август 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Андрей',
      role: 'Ученик',
      text: 'Всё просто восхитительно!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'август 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Назира',
      role: 'Ученица',
      text: 'Очень хороший и пунктуальный преподаватель, мотивирует развиваться в шахматах.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'август 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Рамир',
      role: 'Ученик',
      text: 'Отдельный подход к каждому, отличный и опытный специалист.',
      age: 'Взрослый',
      type: 'Индивидуальные занятия',
      date: 'сентябрь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Лилия',
      role: 'Мама ученика',
      text: 'Сыну очень понравился тренер. Объясняет приемы, дает задачи, всегда пунктуален и заинтересован.',
      age: 'Детские группы',
      type: 'Индивидуальные занятия',
      date: 'сентябрь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Ирина',
      role: 'Ученица',
      text: 'Я думал, что шахматы — это скучно. А теперь не могу оторваться! Спасибо, Ернар Тореханович!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'сентябрь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Наргиз',
      role: 'Мама ученика',
      text: 'Ребенок начал с нуля и уже решает задачи. Очень понятно объясняет. Уроки проходят вовремя, интересно и результативно.',
      age: 'Детские группы',
      type: 'Индивидуальные занятия',
      date: 'ноябрь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Нуржан Рахметов',
      role: 'Ученик',
      text: 'Шахматы — новое хобби! Благодарю за поддержку.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'декабрь 2021 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Мерей',
      role: 'Ученица',
      text: 'Спасибо за занятия! С каждым уроком — всё увереннее в игре.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'ноябрь 2022 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Андрей',
      role: 'Ученик',
      text: 'Отличный преподаватель по шахматам!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'январь 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Влад',
      role: 'Ученик',
      text: 'Все объясняет понятно и доходчиво. Отличный специалист!',
      age: 'Взрослый',
      type: 'Индивидуальные занятия',
      date: 'март 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Мария',
      role: 'Ученица',
      text: 'Очень спокойный преподаватель. Не страшно ошибаться или задавать вопросы. Уроки интересные, прогресс виден.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'май 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Артём',
      role: 'Ученик',
      text: 'Спасибо большое! Все доходчиво объясняет, приятно заниматься.',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'май 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Дмитрий',
      role: 'Ученик',
      text: 'Долго выбирал тренера — и не ошибся. Советую всем!',
      age: 'Взрослый',
      type: 'Индивидуальные занятия',
      date: 'май 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Фёдор',
      role: 'Ученик',
      text: 'Уроки структурированные. После каждого — задания. Мозги не отдыхают! Рекомендую!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'октябрь 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Алексей',
      role: 'Ученик',
      text: 'Занимаемся 6 месяцев — +300 рейтинга. Отличный темп!',
      age: 'Взрослый',
      type: 'Турнирная подготовка',
      date: 'октябрь 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Кирилл',
      role: 'Ученик',
      text: 'Занимаюсь каждый день. Прогресс чувствуется. Спасибо!',
      age: 'Взрослый',
      type: 'Онлайн занятия',
      date: 'октябрь 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Максим',
      role: 'Ученик',
      text: 'Приятный в общении, заинтересован в результате, анализирует партии, помогает даже вне урока. Идеальный тренер!',
      age: 'Взрослый',
      type: 'Индивидуальные занятия',
      date: 'октябрь 2023 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Полина',
      role: 'Ученица',
      text: 'Структурированный подход, индивидуальная методика, понятное объяснение на любом уровне. С удовольствием продолжаем занятия!',
      age: 'Взрослый',
      type: 'Индивидуальные занятия',
      date: 'июнь 2024 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Марина',
      role: 'Мама ученика',
      text: 'Ребенку 9 лет очень нравится. Много практики, насыщенные уроки. Рада, что нашли такого тренера!',
      age: '9 лет',
      type: 'Детские группы',
      date: 'июль 2024 г.',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Анна Петрова',
      role: 'Мама ученика',
      text: 'Казыбек — замечательный тренер! Мой сын Максим начал заниматься с нуля и уже через 3 месяца выиграл школьный турнир. Тренер умеет найти подход к ребенку и объяснить сложные вещи простым языком.',
      age: '8 лет',
      type: 'Индивидуальные занятия',
      date: 'январь 2024 г.',
      rating: 5
    }
  ];

  const trainers = [
    { id: 'all', name: t('reviews.all'), count: reviews.length },
    { id: 'kazybek', name: t('reviews.kazybek'), count: reviews.filter(r => r.trainer === 'kazybek').length },
    { id: 'amir', name: t('reviews.amir'), count: reviews.filter(r => r.trainer === 'amir').length },
    { id: 'tamerlan', name: t('reviews.tamerlan'), count: reviews.filter(r => r.trainer === 'tamerlan').length }
  ];

  const filteredReviews = selectedTrainer === 'all' 
    ? reviews 
    : reviews.filter(review => review.trainer === selectedTrainer);

  const displayedReviews = filteredReviews.slice(0, visibleReviews);

  const getTrainerStats = () => {
    const trainerReviews = selectedTrainer === 'all' ? reviews : reviews.filter(r => r.trainer === selectedTrainer);
    return {
      total: trainerReviews.length,
      rating: 5.0,
      recommend: 100,
      active: selectedTrainer === 'all' ? 45 : selectedTrainer === 'kazybek' ? 35 : 10
    };
  };

  const stats = getTrainerStats();

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('reviews.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Trainer Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {trainers.map((trainer) => (
            <Button
              key={trainer.id}
              variant={selectedTrainer === trainer.id ? "default" : "outline"}
              onClick={() => {
                setSelectedTrainer(trainer.id);
                setVisibleReviews(6);
              }}
              className={`${selectedTrainer === trainer.id ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : ''}`}
            >
              {trainer.name} ({trainer.count})
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              {stats.rating}
            </div>
            <p className="text-sm text-muted-foreground">{t('reviews.stats.rating')}</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={stats.total} />
            </div>
            <p className="text-sm text-muted-foreground">{t('reviews.stats.total')}</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={stats.recommend} suffix="%" />
            </div>
            <p className="text-sm text-muted-foreground">{t('reviews.stats.recommend')}</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              <AnimatedCounter end={stats.active} />
            </div>
            <p className="text-sm text-muted-foreground">{t('reviews.stats.active')}</p>
          </div>
        </div>

        {/* Verification for Kazybek */}
        {selectedTrainer === 'kazybek' && (
          <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800 dark:text-green-200">
                  {t('reviews.verified')}
                </span>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://profi.ru/profile/UmbetovKT3/', '_blank')}
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Profi.ru (1)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://profi.ru/profile/UmbetovKT2/', '_blank')}
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Profi.ru (2)
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedReviews.map((review, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-card border-2 hover:border-yellow-500/30"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-bold text-foreground">
                    {review.author}
                  </CardTitle>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {review.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {review.format}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    {review.date}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  "{review.text}"
                </p>
                
                {/* Profi.ru link */}
                <div className="pt-2 border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    onClick={() => window.open('https://profi.ru/profile/UmbetovKT3/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('reviews.viewOnProfi')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {visibleReviews < filteredReviews.length && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setVisibleReviews(prev => prev + 6)}
              className="px-8 py-3"
            >
              {t('reviews.showMore')} ({filteredReviews.length - visibleReviews} {t('reviews.remaining')})
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
