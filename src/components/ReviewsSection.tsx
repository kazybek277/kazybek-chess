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
      name: 'Анна Петрова',
      role: 'Мама ученика',
      text: 'Отличный тренер! Сын начал заниматься с нуля, за 3 месяца научился играть очень хорошо. Казыбек умеет заинтересовать ребенка.',
      age: '8 лет',
      type: 'Индивидуальные занятия',
      date: '2024-01-15',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Дмитрий Иванов',
      role: 'Ученик',
      text: 'Занимаюсь уже полгода. Мой рейтинг вырос с 1200 до 1800. Казыбек очень терпеливый и профессиональный.',
      age: '25 лет',
      type: 'Индивидуальные занятия',
      date: '2024-02-10',
      rating: 5
    },
    {
      trainer: 'kazybek',
      name: 'Мария Сидорова',
      role: 'Мама ученика',
      text: 'Дочка в восторге от занятий! Казыбек находит подход к каждому ребенку. Рекомендую всем!',
      age: '10 лет',
      type: 'Групповые занятия',
      date: '2024-02-20',
      rating: 5
    },
    {
      trainer: 'amir',
      name: 'Алексей Козлов',
      role: 'Ученик',
      text: 'Амир отличный тренер для групповых занятий. Много практики, интересные турниры внутри группы.',
      age: '16 лет',
      type: 'Групповые занятия',
      date: '2024-03-01',
      rating: 5
    },
    {
      trainer: 'tamerlan',
      name: 'Елена Волкова',
      role: 'Мама ученика',
      text: 'Тамерлан прекрасно работает с детьми. Сын стал более усидчивым и логично мыслящим.',
      age: '7 лет',
      type: 'Индивидуальные занятия',
      date: '2024-03-05',
      rating: 4
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
      activeStudents: trainerId === 'kazybek' ? 150 : trainerId === 'amir' ? 80 : 60
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

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">{t('reviews.all')}</TabsTrigger>
              <TabsTrigger value="kazybek">{t('reviews.kazybek')}</TabsTrigger>
              <TabsTrigger value="amir">{t('reviews.amir')}</TabsTrigger>
              <TabsTrigger value="tamerlan">{t('reviews.tamerlan')}</TabsTrigger>
            </TabsList>
          </div>

          {['all', 'kazybek', 'amir', 'tamerlan'].map((trainerId) => {
            const stats = getTrainerStats(trainerId);
            const trainerReviews = getTrainerReviews(trainerId);
            
            return (
              <TabsContent key={trainerId} value={trainerId} className="space-y-8">
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">{stats.avgRating}</div>
                    <p className="text-sm text-muted-foreground">{t('reviews.stats.rating')}</p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">
                      <AnimatedCounter end={stats.totalReviews} />
                    </div>
                    <p className="text-sm text-muted-foreground">{t('reviews.stats.total')}</p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">
                      <AnimatedCounter end={stats.recommendPercent} suffix="%" />
                    </div>
                    <p className="text-sm text-muted-foreground">{t('reviews.stats.recommend')}</p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">
                      <AnimatedCounter end={stats.activeStudents} />
                    </div>
                    <p className="text-sm text-muted-foreground">{t('reviews.stats.active')}</p>
                  </div>
                </div>

                {/* Verification notice for Kazybek */}
                {trainerId === 'kazybek' && (
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
                )}

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trainerReviews.map((review, index) => (
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
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ReviewsSection;
