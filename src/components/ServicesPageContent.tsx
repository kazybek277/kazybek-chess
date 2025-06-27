
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, X, Users, Clock, Target, ExternalLink, Star } from 'lucide-react';

const ServicesPageContent = () => {
  const { t } = useLanguage();
  const [selectedCurrency, setSelectedCurrency] = useState('RUB');

  const currencies = [
    { code: 'USD', symbol: '$', rate: 1 },
    { code: 'EUR', symbol: '€', rate: 0.9 },
    { code: 'KZT', symbol: '₸', rate: 500 },
    { code: 'RUB', symbol: '₽', rate: 80 }
  ];

  const convertPrice = (basePrice: number) => {
    const currency = currencies.find(c => c.code === selectedCurrency);
    return Math.round(basePrice * currency!.rate);
  };

  const getCurrencySymbol = () => {
    return currencies.find(c => c.code === selectedCurrency)?.symbol || '₽';
  };

  const serviceFeatures = [
    { key: 'intensive', ru: 'Интенсивные тренировки', en: 'Intensive training' },
    { key: 'consultation', ru: 'Консультация по интересующим темам', en: 'Consultation on topics of interest' },
    { key: 'reschedule', ru: 'Перенос занятий до 3 ч (в мес)', en: 'Reschedule up to 3h (per month)' },
    { key: 'cancel', ru: 'Отмена занятий до 3 ч (в мес)', en: 'Cancel up to 3h (per month)' },
    { key: 'analysis', ru: 'Анализ партий', en: 'Game analysis' },
    { key: 'openings', ru: 'Дебютный репертуар', en: 'Opening repertoire' },
    { key: 'studios', ru: 'Количество допустимых студий', en: 'Number of allowed studios' },
    { key: 'homework', ru: 'Домашнее задание + проверка (во время урока)', en: 'Homework + check (during lesson)' },
    { key: 'precheck', ru: 'Проверка домашнего задания до урока', en: 'Homework check before lesson' },
    { key: 'bot', ru: 'Бот для отработки вариантов', en: 'Bot for practicing variants' },
    { key: 'progress', ru: 'Отслеживание прогресса', en: 'Progress tracking' },
    { key: 'reminders', ru: 'Напоминание об уроке', en: 'Lesson reminders' },
    { key: 'parent', ru: 'Присутствие опекуна-родителя на уроке', en: 'Guardian-parent presence' },
    { key: 'selfdev', ru: 'Индивидуальный план саморазвития', en: 'Individual self-development plan' },
    { key: 'shortvideo', ru: 'Короткое видео до 1.5 мин', en: 'Short video up to 1.5 min' },
    { key: 'longvideo', ru: 'Длинное видео до 10 мин', en: 'Long video up to 10 min' },
    { key: 'guarantee', ru: 'Гарантия результата', en: 'Result guarantee' },
    { key: 'discount', ru: 'Скидка при всех посещениях', en: 'Attendance discount' },
    { key: 'effectiveness', ru: 'Результативность', en: 'Effectiveness' }
  ];

  const plans = [
    { key: 'self', ru: 'Для себя (1 раз/нед)', en: 'For self (1 time/week)' },
    { key: 'basic', ru: 'Базовый (2 раза/нед)', en: 'Basic (2 times/week)' },
    { key: 'extended', ru: 'Расширенный (3 раза/нед)', en: 'Extended (3 times/week)' },
    { key: 'intensive', ru: 'Интенсив (4-5 раз/нед)', en: 'Intensive (4-5 times/week)' },
    { key: 'extreme', ru: 'Экстремальный (6-7 раз/нед)', en: 'Extreme (6-7 times/week)' }
  ];

  // Updated plan features based on requirements
  const planFeatures = {
    intensive: ['✅', '✅', '✅', '✅', '✅'],
    consultation: ['✅', '✅', '✅', '✅', '✅'],
    reschedule: ['max 2', 'max 4', 'max 6', 'max 12', 'max 18'],
    cancel: ['❌', 'max 1', 'max 2', 'max 3', 'max 5'],
    analysis: ['✅', '✅', '✅', '✅', '✅'],
    openings: ['Базовый', 'Расширенный', 'Полный', 'Полный + доп', 'Полный + доп'],
    studios: ['3', '5', '7', '10', '10'],
    homework: ['✅', '✅', '✅', '✅', '✅'],
    precheck: ['❌', '❌', '✅', '✅', '✅'],
    bot: ['❌', '❌', '✅', '✅', '✅'],
    progress: ['❌', '❌', '✅', '✅', '✅'],
    reminders: ['❌', '❌', '❌', '✅', '✅'],
    parent: ['❌', '❌', '❌', '✅', '✅'],
    selfdev: ['❌', '❌', '✅', '✅', '✅'],
    shortvideo: ['❌', '❌', '❌', '✅', '✅'],
    longvideo: ['❌', '❌', '❌', '❌', '✅'],
    guarantee: ['❌', '❌', '❌', '✅', '✅'],
    discount: ['0%', '0%', '5%', '7.5%', '10%'],
    effectiveness: ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']
  };

  const trainers = [
    {
      id: 'kazybek',
      name: 'Казыбек',
      avatar: '👑',
      title: 'FM',
      role: 'Главный тренер',
      services: [
        {
          title: 'Индивидуальные занятия',
          description: 'Максимальный эффект и полное внимание тренера',
          details: 'Кому подойдёт: любой уровень, турнирные цели, персональный темп. Преимущества: индивидуальный план, гибкий график, разбор партий.',
          basePriceUSD: 37.5,
          duration: '60 мин',
          features: ['Персональный подход', 'Гибкий график', 'Домашние задания', 'Анализ партий'],
          icon: Users,
          popular: true
        },
        {
          title: 'Групповые занятия',
          description: 'До 10 человек: командная динамика и турнирная практика',
          details: 'Кому подойдёт: новички, школьники, любители общения. Преимущества: мини-турниры, совместный анализ, доступный формат.',
          basePriceUSD: 12.5,
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Турниры в группе', 'Совместный анализ'],
          icon: Target
        },
        {
          title: 'Занятия в паре',
          description: 'Идеально для родителей с детьми, друзей, братьев и сестёр',
          details: 'Кому подойдёт: стеснительные ученики, семейные пары. Преимущества: совместное обучение, комфорт, гибкий подход.',
          basePriceUSD: 25,
          duration: '60 мин',
          features: ['Занятия вдвоем', 'Для друзей/семьи', 'Совместное обучение', 'Гибкий график'],
          icon: Clock
        }
      ]
    },
    {
      id: 'amir',
      name: 'Амир',
      avatar: '🎯',
      title: 'КМС',
      role: 'Старший тренер',
      services: [
        {
          title: 'Индивидуальные занятия',
          description: 'Максимальный эффект и полное внимание тренера',
          details: 'Кому подойдёт: любой уровень, турнирные цели, персональный темп. Преимущества: индивидуальный план, гибкий график, разбор партий.',
          basePriceUSD: 22.5,
          duration: '60 мин',
          features: ['Персональный подход', 'Гибкий график', 'Домашние задания', 'Анализ партий'],
          icon: Users,
          popular: true
        },
        {
          title: 'Групповые занятия',
          description: 'До 10 человек: командная динамика и турнирная практика',
          details: 'Кому подойдёт: новички, школьники, любители общения. Преимущества: мини-турниры, совместный анализ, доступный формат.',
          basePriceUSD: 7.5,
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Турниры в группе', 'Совместный анализ'],
          icon: Target
        },
        {
          title: 'Занятия в паре',
          description: 'Идеально для родителей с детьми, друзей, братьев и сестёр',
          details: 'Кому подойдёт: стеснительные ученики, семейные пары. Преимущества: совместное обучение, комфорт, гибкий подход.',
          basePriceUSD: 11.25,
          duration: '60 мин',
          features: ['Занятия вдвоем', 'Для друзей/семьи', 'Совместное обучение', 'Гибкий график'],
          icon: Clock
        }
      ]
    },
    {
      id: 'tamerlan',
      name: 'Тамерлан',
      avatar: '⚡',
      title: 'КМС',
      role: 'Старший тренер',
      services: [
        {
          title: 'Индивидуальные занятия',
          description: 'Максимальный эффект и полное внимание тренера',
          details: 'Кому подойдёт: любой уровень, турнирные цели, персональный темп. Преимущества: индивидуальный план, гибкий график, разбор партий.',
          basePriceUSD: 18.75,
          duration: '60 мин',
          features: ['Персональный подход', 'Гибкий график', 'Домашние задания', 'Анализ партий'],
          icon: Users,
          popular: true
        },
        {
          title: 'Групповые занятия',
          description: 'До 10 человек: командная динамика и турнирная практика',
          details: 'Кому подойдёт: новички, школьники, любители общения. Преимущества: мини-турниры, совместный анализ, доступный формат.',
          basePriceUSD: 7.5,
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Турниры в группе', 'Совместный анализ'],
          icon: Target
        },
        {
          title: 'Занятия в паре',
          description: 'Идеально для родителей с детьми, друзей, братьев и сестёр',
          details: 'Кому подойдёт: стеснительные ученики, семейные пары. Преимущества: совместное обучение, комфорт, гибкий подход.',
          basePriceUSD: 11.25,
          duration: '60 мин',
          features: ['Занятия вдвоем', 'Для друзей/семьи', 'Совместное обучение', 'Гибкий график'],
          icon: Clock
        }
      ]
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 inline" />
    ));
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">{t('services.currency')}:</span>
            <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            variant="outline"
            onClick={() => window.open('https://t.me/Kazybek_Umbetov_Chess_Bot', '_blank')}
            className="flex items-center gap-2"
          >
            🤖 {t('nav.language') === 'ru' ? 'Telegram Бот' : 'Telegram Bot'}
          </Button>
        </div>

        <Tabs defaultValue="kazybek" className="w-full">
          {/* Enhanced Trainer Selector */}
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 h-auto p-2">
              {trainers.map((trainer) => (
                <TabsTrigger
                  key={trainer.id}
                  value={trainer.id}
                  className={`flex flex-col items-center p-4 space-y-2 transition-all duration-200 hover:scale-105 ${
                    trainer.id === 'kazybek' 
                      ? 'data-[state=active]:bg-gradient-to-br data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-600 data-[state=active]:text-black' 
                      : 'data-[state=active]:bg-gradient-to-br data-[state=active]:from-gray-300 data-[state=active]:to-gray-500 data-[state=active]:text-black'
                  }`}
                >
                  <div className="text-2xl">{trainer.avatar}</div>
                  <div className="text-center">
                    <div className="font-semibold">{trainer.name}</div>
                    <div className="text-xs opacity-70">{trainer.title}</div>
                    <div className="text-xs opacity-60">{trainer.role}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {trainers.map((trainer) => (
            <TabsContent key={trainer.id} value={trainer.id} className="space-y-8">
              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {trainer.services.map((service, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 relative">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {t('nav.language') === 'ru' ? 'Популярно' : 'Popular'}
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm font-medium mb-2">
                        {service.description}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mb-4">
                        {service.details}
                      </p>
                      <div className="text-3xl font-bold text-foreground">
                        {convertPrice(service.basePriceUSD)}{getCurrencySymbol()}
                      </div>
                      <CardDescription className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-sm">
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                        onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
                      >
                        {t('services.bookLesson')}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pricing Table */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-center mb-2">{t('services.plans')}</h3>
                <p className="text-center text-muted-foreground mb-6">
                  {t('nav.language') === 'ru' 
                    ? 'Чем больше занятий в неделю, тем больше возможностей для развития' 
                    : 'The more lessons per week, the more opportunities for development'
                  }
                </p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-[200px] font-bold">
                          {t('nav.language') === 'ru' ? 'Услуги / Количество занятий' : 'Services / Number of lessons'}
                        </TableHead>
                        {plans.map((plan) => (
                          <TableHead key={plan.key} className="text-center min-w-[120px] font-bold">
                            {t('nav.language') === 'ru' ? plan.ru : plan.en}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceFeatures.map((feature, index) => (
                        <TableRow key={feature.key} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                          <TableCell className="font-medium">
                            {t('nav.language') === 'ru' ? feature.ru : feature.en}
                          </TableCell>
                          {planFeatures[feature.key].map((value, cellIndex) => (
                            <TableCell key={cellIndex} className="text-center">
                              {value === '✅' ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : value === '❌' ? (
                                <X className="w-4 h-4 text-red-500 mx-auto" />
                              ) : feature.key === 'effectiveness' ? (
                                <div className="flex justify-center">
                                  {value.split('').map((star, starIndex) => (
                                    <Star key={starIndex} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                  ))}
                                </div>
                              ) : (
                                <span className="text-sm font-medium">{value}</span>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                {/* Legend */}
                <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{t('nav.language') === 'ru' ? 'Услуга включена' : 'Service included'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span>{t('nav.language') === 'ru' ? 'Услуга не включена' : 'Service not included'}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesPageContent;
