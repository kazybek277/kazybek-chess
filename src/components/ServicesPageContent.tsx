
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Users, Clock, Target } from 'lucide-react';

const ServicesPageContent = () => {
  const { t } = useLanguage();

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
      services: [
        {
          title: 'Индивидуальные занятия',
          price: '3000₽',
          duration: '60 мин',
          features: ['Индивидуальный план', 'Гибкий график', 'Домашние задания'],
          icon: Users
        },
        {
          title: 'Групповые занятия',
          price: '1000₽',
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Мини-турниры'],
          icon: Target
        },
        {
          title: 'Занятия в паре',
          price: '2000₽',
          duration: '60 мин',
          features: ['Для друзей/семьи', 'Совместное обучение'],
          icon: Clock
        }
      ]
    },
    {
      id: 'amir',
      name: 'Амир',
      services: [
        {
          title: 'Индивидуальные занятия',
          price: '1500₽',
          duration: '60 мин',
          features: ['Индивидуальный план', 'Гибкий график', 'Домашние задания'],
          icon: Users
        },
        {
          title: 'Групповые занятия',
          price: '600₽',
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Мини-турниры'],
          icon: Target
        },
        {
          title: 'Занятия в паре',
          price: '900₽',
          duration: '60 мин',
          features: ['Для друзей/семьи', 'Совместное обучение'],
          icon: Clock
        }
      ]
    },
    {
      id: 'tamerlan',
      name: 'Тамерлан',
      services: [
        {
          title: 'Индивидуальные занятия',
          price: '1500₽',
          duration: '60 мин',
          features: ['Индивидуальный план', 'Гибкий график', 'Домашние задания'],
          icon: Users
        },
        {
          title: 'Групповые занятия',
          price: '600₽',
          duration: '60 мин',
          features: ['До 10 человек', 'Командная работа', 'Мини-турниры'],
          icon: Target
        },
        {
          title: 'Занятия в паре',
          price: '900₽',
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
            Услуги
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Выберите формат обучения, который подходит именно вам. Все программы адаптируются под ваш уровень и цели.
          </p>
        </div>

        <Tabs defaultValue="kazybek" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="kazybek">Казыбек</TabsTrigger>
            <TabsTrigger value="amir">Амир</TabsTrigger>
            <TabsTrigger value="tamerlan">Тамерлан</TabsTrigger>
          </TabsList>

          {trainers.map((trainer) => (
            <TabsContent key={trainer.id} value={trainer.id} className="space-y-8">
              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {trainer.services.map((service, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="text-3xl font-bold text-foreground">
                        {service.price}
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
                        Записаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pricing Table */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-center mb-6">Тарифные планы</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Услуга</TableHead>
                        {plans.map((plan) => (
                          <TableHead key={plan.key} className="text-center min-w-[120px]">
                            {plan.ru}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceFeatures.map((feature) => (
                        <TableRow key={feature.key}>
                          <TableCell className="font-medium">{feature.ru}</TableCell>
                          {planFeatures[feature.key].map((value, index) => (
                            <TableCell key={index} className="text-center">
                              {value === '✅' ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : value === '✗' ? (
                                <X className="w-4 h-4 text-red-500 mx-auto" />
                              ) : (
                                <span className="text-sm">{value}</span>
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
