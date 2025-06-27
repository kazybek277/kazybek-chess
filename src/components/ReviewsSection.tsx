
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Star, ExternalLink, Users, MessageCircle, Award, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const ReviewsSection = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

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

  const getTrainerReviews = (trainerId: string) => {
    if (trainerId === 'all') return reviews;
    return reviews.filter(review => review.trainer === trainerId);
  };

  const getTrainerStats = (trainerId: string) => {
    const trainerReviews = getTrainerReviews(trainerId);
    const avgRating = trainerReviews.reduce((sum, review) => sum + review.rating, 0) / trainerReviews.length;
    const recommendPercent = Math.round((trainerReviews.filter(r => r.rating >= 4).length / trainerReviews.length) * 100);
    
    return {
      totalReviews: trainerReviews.length,
      avgRating: avgRating.toFixed(1),
      recommendPercent,
      activeStudents: trainerId === 'kazybek' ? 150 : 0
    };
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('reviews.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="kazybek" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-1">
              <TabsTrigger value="kazybek">{t('reviews.kazybek')}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="kazybek" className="space-y-8">
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-yellow-500 mb-2">5.0</div>
                <p className="text-sm text-muted-foreground">{t('reviews.stats.rating')}</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  <AnimatedCounter end={38} />
                </div>
                <p className="text-sm text-muted-foreground">{t('reviews.stats.total')}</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-sm text-muted-foreground">{t('reviews.stats.recommend')}</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  <AnimatedCounter end={150} />
                </div>
                <p className="text-sm text-muted-foreground">{t('reviews.stats.active')}</p>
              </div>
            </div>

            {/* Verification notice for Kazybek */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-4 text-center">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-green-800 dark:text-green-200 font-medium">
                  {t('reviews.verified')}
                </span>
              </div>
              <div className="flex justify-center gap-4 mt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://profi.ru/profile/UmbetovKT3/', '_blank')}
                  className="text-green-700 border-green-300 hover:bg-green-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Profi.ru #1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://profi.ru/profile/UmbetovKT2/', '_blank')}
                  className="text-green-700 border-green-300 hover:bg-green-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Profi.ru #2
                </Button>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedReviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group border-2 hover:border-yellow-500/50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription className="text-sm">{review.role}</CardDescription>
                      </div>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {review.age}
                      </Badge>
                      <span>•</span>
                      <span>{review.type}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open('https://profi.ru/profile/UmbetovKT3/', '_blank')}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t('reviews.viewOnProfi')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Show More Button */}
            {!showAll && reviews.length > 6 && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(true)}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  {t('reviews.showMore')} ({reviews.length - 6} {t('reviews.remaining')})
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ReviewsSection;
