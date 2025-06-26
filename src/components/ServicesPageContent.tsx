
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, X, Users, Clock, Target, ExternalLink } from 'lucide-react';

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
    { key: 'consultation', ru: 'Консультация', en: 'Consultation' },
    { key: 'reschedule', ru: 'Перенос занятий до 3 ч (в мес)', en: 'Reschedule up to 3h (per month)' },
    { key: 'cancel', ru: 'Отмена занятий до 3 ч (в мес)', en: 'Cancel up to 3h (per month)' },
    { key: 'analysis', ru: 'Анализ партий', en: 'Game analysis' },
    { key: 'openings', ru: 'Дебютный репертуар', en: 'Opening repertoire' },
    { key: 'studios', ru: 'Студии (ограничение)', en: 'Studios (limit)' },
    { key: 'homework', ru: 'Домашнее задание', en: 'Homework' },
    { key: 'precheck', ru: 'Проверка до урока', en: 'Pre-lesson check' },
    { key: 'bot', ru: 'Бот для отработки', en: 'Practice bot' },
    { key: 'progress', ru: 'Отслеживание прогресса', en: 'Progress tracking' },
    { key: 'reminders', ru: 'Напоминание', en: 'Reminders' },
    { key: 'parent', ru: 'Присутствие родителя', en: 'Parent presence' },
    { key: 'selfdev', ru: 'План саморазвития', en: 'Self-development plan' },
    { key: 'shortvideo', ru: 'Короткое видео до 1.5 мин', en: 'Short video up to 1.5 min' },
    { key: 'longvideo', ru: 'Длинное видео до 10 мин', en: 'Long video up to 10 min' },
    { key: 'guarantee', ru: 'Гарантия результата', en: 'Result guarantee' },
    { key: 'discount', ru: 'Скидка при всех посещениях', en: 'Attendance discount' }
  ];

  const plans = [
    { key: 'self', ru: 'Для себя', en: 'For self' },
    { key: 'basic', ru: 'Базовый (1/нед)', en: 'Basic (1/week)' },
    { key: 'extended', ru: 'Расширенный (2/нед)', en: 'Extended (2/week)' },
    { key: 'intensive', ru: 'Интенсив (3/нед)', en: 'Intensive (3/week)' },
    { key: 'extreme', ru: 'Экстремальный (4-5/нед)', en: 'Extreme (4-5/week)' },
    { key: 'intensive+', ru: 'Интенсив+ (6-7/нед)', en: 'Intensive+ (6-7/week)' }
  ];

  // Corrected plan features based on the original table
  const planFeatures = {
    consultation: ['✅', '✅', '✅', '✅', '✅', '✅'],
    reschedule: ['✗', 'max 2', 'max 4', 'max 6', 'max 12', 'max 18'],
    cancel: ['✗', 'max 1', 'max 2', 'max 3', 'max 5', '✅'],
    analysis: ['✅', '✅', '✅', '✅', '✅', '✅'],
    openings: ['✗', 'Базовый', 'Расширенный', 'Полный', 'Полный + доп', 'Полный + доп'],
    studios: ['3', '5', '7', '10', '10', '10'],
    homework: ['✅', '✅', '✅', '✅', '✅', '✅'],
    precheck: ['✗', '✅', '✅', '✅', '✅', '✅'],
    bot: ['✗', '✗', '✅', '✅', '✅', '✅'],
    progress: ['✗', '✅', '✅', '✅', '✅', '✅'],
    reminders: ['✗', '✅', '✅', '✅', '✅', '✅'],
    parent: ['✅', '✅', '✅', '✅', '✅', '✅'],
    selfdev: ['✗', '✅', '✅', '✅', '✅', '✅'],
    shortvideo: ['✗', '✗', '✅', '✅', '✅', '✅'],
    longvideo: ['✗', '✗', '✗', '✅', '✅', '✅'],
    guarantee: ['✗', '✗', '✗', '✅', '✅', '✅'],
    discount: ['0%', '0%', '5%', '7.5%', '10%', '10%']
  };

  const trainers = [
    {
      id: 'kazybek',
      name: 'Казыбек',
      avatar: '👑',
      title: 'FM',
      services: [
        {
          title: t('services.individual'),
          basePriceUSD: 37.5,
          duration: '60 мин',
          features: ['Индивидуальный план', 'Гибкий график', 'Домашние задания'],
          icon: Users
        },
        {
          title: t('services.group'),
          basePriceUSD: 12.5,
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Мини-турниры'],
          icon: Target
        },
        {
          title: t('services.pair'),
          basePriceUSD: 25,
          duration: '60 мин',
          features: ['Для друзей/семьи', 'Совместное обучение'],
          icon: Clock
        }
      ]
    },
    {
      id: 'amir',
      name: 'Амир',
      avatar: '🎯',
      title: 'КМС',
      services: [
        {
          title: t('services.individual'),
          basePriceUSD: 18.75,
          duration: '60 мин',
          features: ['Индивидуальный план', 'Гибкий график', 'Домашние задания'],
          icon: Users
        },
        {
          title: t('services.group'),
          basePriceUSD: 7.5,
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Мини-турниры'],
          icon: Target
        },
        {
          title: t('services.pair'),
          basePriceUSD: 11.25,
          duration: '60 мин',
          features: ['Для друзей/семьи', 'Совместное обучение'],
          icon: Clock
        }
      ]
    },
    {
      id: 'tamerlan',
      name: 'Тамерлан',
      avatar: '⚡',
      title: 'КМС',
      services: [
        {
          title: t('services.individual'),
          basePriceUSD: 18.75,
          duration: '60 мин',
          features: ['Индивидуальный план', 'Гибкий график', 'Домашние задания'],
          icon: Users
        },
        {
          title: t('services.group'),
          basePriceUSD: 7.5,
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Мини-турниры'],
          icon: Target
        },
        {
          title: t('services.pair'),
          basePriceUSD: 11.25,
          duration: '60 мин',
          features: ['Для друзей/семьи', 'Совместное обучение'],
          icon: Clock
        }
      ]
    }
  ];

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
        </div>

        <Tabs defaultValue="kazybek" className="w-full">
          {/* Enhanced Trainer Selector */}
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 h-auto p-2">
              {trainers.map((trainer) => (
                <TabsTrigger
                  key={trainer.id}
                  value={trainer.id}
                  className="flex flex-col items-center p-4 space-y-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-black hover:scale-105 transition-all duration-200"
                >
                  <div className="text-2xl">{trainer.avatar}</div>
                  <div className="text-center">
                    <div className="font-semibold">{trainer.name}</div>
                    <div className="text-xs opacity-70">{trainer.title}</div>
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
                  <Card key={index} className="border-2 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
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
                          <div key={featureIndex} className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
                <h3 className="text-2xl font-bold text-center mb-6">{t('services.plans')}</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-[200px] font-bold">Услуга</TableHead>
                        {plans.map((plan) => (
                          <TableHead key={plan.key} className="text-center min-w-[120px] font-bold">
                            {plan.ru}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceFeatures.map((feature, index) => (
                        <TableRow key={feature.key} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                          <TableCell className="font-medium">{feature.ru}</TableCell>
                          {planFeatures[feature.key].map((value, cellIndex) => (
                            <TableCell key={cellIndex} className="text-center">
                              {value === '✅' ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : value === '✗' ? (
                                <X className="w-4 h-4 text-red-500 mx-auto" />
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
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-8 text-muted-foreground">
          <p>1$ = 0.9 € = 500 ₸ = 80 ₽</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPageContent;
