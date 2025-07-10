
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, X, Users, Clock, Target, ExternalLink, Star, Crown, Sparkles, TrendingUp } from 'lucide-react';

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
    { key: 'recording', ru: 'Запись урока', en: 'Lesson recording' },
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

  // Updated plan features with lesson recording for plans 4-5
  const planFeatures = {
    intensive: ['✅', '✅', '✅', '✅', '✅'],
    consultation: ['✅', '✅', '✅', '✅', '✅'],
    reschedule: ['max 2', 'max 4', 'max 6', 'max 12', 'max 18'],
    cancel: ['❌', 'max 1', 'max 2', 'max 3', 'max 5'],
    analysis: ['✅', '✅', '✅', '✅', '✅'],
    openings: ['Базовый', 'Расширенный', 'Полный', 'Полный + доп', 'Полный + доп'],
    studios: ['3', '5', '7', '10', '10'],
    homework: ['❌', '✅', '✅', '✅', '✅'],
    precheck: ['❌', '❌', '✅', '✅', '✅'],
    bot: ['❌', '❌', '✅', '✅', '✅'],
    progress: ['❌', '❌', '✅', '✅', '✅'],
    reminders: ['❌', '❌', '❌', '✅', '✅'],
    recording: ['❌', '❌', '❌', '✅', '✅'],
    parent: ['❌', '❌', '❌', '✅', '✅'],
    selfdev: ['❌', '❌', '❌', '✅', '✅'],
    shortvideo: ['❌', '❌', '❌', '✅', '✅'],
    longvideo: ['❌', '❌', '❌', '❌', '✅'],
    guarantee: ['❌', '❌', '❌', '✅', '✅'],
    discount: ['0%', '0%', '5%', '7.5%', '10%'],
    effectiveness: ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']
  };

  const trainers = [
    {
      id: 'kazybek',
      name: t('nav.language') === 'ru' ? 'Казыбек' : 'Kazybek',
      avatar: '👑',
      title: 'FM',
      role: t('nav.language') === 'ru' ? 'Главный тренер' : 'Head Trainer',
      services: [
        {
          title: t('services.individual'),
          description: t('nav.language') === 'ru' ? 'Максимальный эффект и полное внимание тренера' : 'Maximum effect and full trainer attention',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: любой уровень, турнирные цели, персональный темп. Преимущества: индивидуальный план, гибкий график, разбор партий.' : 'Suitable for: any level, tournament goals, personal pace. Advantages: individual plan, flexible schedule, game analysis.',
          basePriceUSD: 37.5,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '🎯 Персональный подход' : '🎯 Personal approach',
            t('nav.language') === 'ru' ? '⏰ Гибкий график' : '⏰ Flexible schedule',
            t('nav.language') === 'ru' ? '📚 Домашние задания' : '📚 Homework assignments',
            t('nav.language') === 'ru' ? '♟ Анализ партий' : '♟ Game analysis'
          ],
          icon: Crown,
          popular: true,
          gradient: 'from-yellow-400 to-yellow-600'
        },
        {
          title: t('services.group'),
          description: t('nav.language') === 'ru' ? 'До 10 человек: командная динамика и турнирная практика' : 'Up to 10 people: team dynamics and tournament practice',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: новички, школьники, любители общения. Преимущества: мини-турниры, совместный анализ, доступный формат.' : 'Suitable for: beginners, schoolchildren, communication lovers. Advantages: mini-tournaments, joint analysis, accessible format.',
          basePriceUSD: 12.5,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '👥 До 10 человек' : '👥 Up to 10 people',
            t('nav.language') === 'ru' ? '🤝 Командная работа' : '🤝 Teamwork',
            t('nav.language') === 'ru' ? '🏆 Турниры в группе' : '🏆 Group tournaments',
            t('nav.language') === 'ru' ? '🔍 Совместный анализ' : '🔍 Joint analysis'
          ],
          icon: Users,
          gradient: 'from-blue-400 to-blue-600'
        },
        {
          title: t('services.pair'),
          description: t('nav.language') === 'ru' ? 'Идеально для родителей с детьми, друзей, братьев и сестёр' : 'Perfect for parents with children, friends, siblings',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: стеснительные ученики, семейные пары. Преимущества: совместное обучение, комфорт, гибкий подход.' : 'Suitable for: shy students, family pairs. Advantages: joint learning, comfort, flexible approach.',
          basePriceUSD: 25,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '👫 Занятия вдвоем' : '👫 Lessons for two',
            t('nav.language') === 'ru' ? '👨‍👩‍👧‍👦 Для друзей/семьи' : '👨‍👩‍👧‍👦 For friends/family',
            t('nav.language') === 'ru' ? '🤗 Совместное обучение' : '🤗 Joint learning',
            t('nav.language') === 'ru' ? '⏰ Гибкий график' : '⏰ Flexible schedule'
          ],
          icon: Users,
          gradient: 'from-green-400 to-green-600'
        }
      ]
    },
    {
      id: 'amir',
      name: t('nav.language') === 'ru' ? 'Амир' : 'Amir',
      avatar: '🎯',
      title: t('nav.language') === 'ru' ? 'КМС' : 'CMS',
      role: t('nav.language') === 'ru' ? 'Старший тренер' : 'Senior Trainer',
      services: [
        {
          title: t('services.individual'),
          description: t('nav.language') === 'ru' ? 'Максимальный эффект и полное внимание тренера' : 'Maximum effect and full trainer attention',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: любой уровень, турнирные цели, персональный темп. Преимущества: индивидуальный план, гибкий график, разбор партий.' : 'Suitable for: any level, tournament goals, personal pace. Advantages: individual plan, flexible schedule, game analysis.',
          basePriceUSD: 20,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '🎯 Персональный подход' : '🎯 Personal approach',
            t('nav.language') === 'ru' ? '⏰ Гибкий график' : '⏰ Flexible schedule',
            t('nav.language') === 'ru' ? '📚 Домашние задания' : '📚 Homework assignments',
            t('nav.language') === 'ru' ? '♟ Анализ партий' : '♟ Game analysis'
          ],
          icon: Users,
          popular: true,
          gradient: 'from-purple-400 to-purple-600'
        },
        {
          title: t('services.group'),
          description: t('nav.language') === 'ru' ? 'До 10 человек: командная динамика и турнирная практика' : 'Up to 10 people: team dynamics and tournament practice',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: новички, школьники, любители общения. Преимущества: мини-турниры, совместный анализ, доступный формат.' : 'Suitable for: beginners, schoolchildren, communication lovers. Advantages: mini-tournaments, joint analysis, accessible format.',
          basePriceUSD: 7.5,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '👥 До 10 человек' : '👥 Up to 10 people',
            t('nav.language') === 'ru' ? '🤝 Командная работа' : '🤝 Teamwork',
            t('nav.language') === 'ru' ? '🏆 Турниры в группе' : '🏆 Group tournaments',
            t('nav.language') === 'ru' ? '🔍 Совместный анализ' : '🔍 Joint analysis'
          ],
          icon: Target,
          gradient: 'from-cyan-400 to-cyan-600'
        },
        {
          title: t('services.pair'),
          description: t('nav.language') === 'ru' ? 'Идеально для родителей с детьми, друзей, братьев и сестёр' : 'Perfect for parents with children, friends, siblings',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: стеснительные ученики, семейные пары. Преимущества: совместное обучение, комфорт, гибкий подход.' : 'Suitable for: shy students, family pairs. Advantages: joint learning, comfort, flexible approach.',
          basePriceUSD: 12.5,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '👫 Занятия вдвоем' : '👫 Lessons for two',
            t('nav.language') === 'ru' ? '👨‍👩‍👧‍👦 Для друзей/семьи' : '👨‍👩‍👧‍👦 For friends/family',
            t('nav.language') === 'ru' ? '🤗 Совместное обучение' : '🤗 Joint learning',
            t('nav.language') === 'ru' ? '⏰ Гибкий график' : '⏰ Flexible schedule'
          ],
          icon: Clock,
          gradient: 'from-orange-400 to-orange-600'
        }
      ]
    },
    {
      id: 'tamerlan',
      name: t('nav.language') === 'ru' ? 'Тамерлан' : 'Tamerlan',
      avatar: '⚡',
      title: t('nav.language') === 'ru' ? 'КМС' : 'CMS',
      role: t('nav.language') === 'ru' ? 'Старший тренер' : 'Senior Trainer',
      services: [
        {
          title: t('services.individual'),
          description: t('nav.language') === 'ru' ? 'Максимальный эффект и полное внимание тренера' : 'Maximum effect and full trainer attention',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: любой уровень, турнирные цели, персональный темп. Преимущества: индивидуальный план, гибкий график, разбор партий.' : 'Suitable for: any level, tournament goals, personal pace. Advantages: individual plan, flexible schedule, game analysis.',
          basePriceUSD: 17.5,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '🎯 Персональный подход' : '🎯 Personal approach',
            t('nav.language') === 'ru' ? '⏰ Гибкий график' : '⏰ Flexible schedule',
            t('nav.language') === 'ru' ? '📚 Домашние задания' : '📚 Homework assignments',
            t('nav.language') === 'ru' ? '♟ Анализ партий' : '♟ Game analysis'
          ],
          icon: Users,
          popular: true,
          gradient: 'from-red-400 to-red-600'
        },
        {
          title: t('services.group'),
          description: t('nav.language') === 'ru' ? 'До 10 человек: командная динамика и турнирная практика' : 'Up to 10 people: team dynamics and tournament practice',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: новички, школьники, любители общения. Преимущества: мини-турниры, совместный анализ, доступный формат.' : 'Suitable for: beginners, schoolchildren, communication lovers. Advantages: mini-tournaments, joint analysis, accessible format.',
          basePriceUSD: 6.25,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '👥 До 10 человек' : '👥 Up to 10 people',
            t('nav.language') === 'ru' ? '🤝 Командная работа' : '🤝 Teamwork',
            t('nav.language') === 'ru' ? '🏆 Турниры в группе' : '🏆 Group tournaments',
            t('nav.language') === 'ru' ? '🔍 Совместный анализ' : '🔍 Joint analysis'
          ],
          icon: Target,
          gradient: 'from-indigo-400 to-indigo-600'
        },
        {
          title: t('services.pair'),
          description: t('nav.language') === 'ru' ? 'Идеально для родителей с детьми, друзей, братьев и сестёр' : 'Perfect for parents with children, friends, siblings',
          details: t('nav.language') === 'ru' ? 'Кому подойдёт: стеснительные ученики, семейные пары. Преимущества: совместное обучение, комфорт, гибкий подход.' : 'Suitable for: shy students, family pairs. Advantages: joint learning, comfort, flexible approach.',
          basePriceUSD: 10,
          duration: '60 мин',
          features: [
            t('nav.language') === 'ru' ? '👫 Занятия вдвоем' : '👫 Lessons for two',
            t('nav.language') === 'ru' ? '👨‍👩‍👧‍👦 Для друзей/семьи' : '👨‍👩‍👧‍👦 For friends/family',
            t('nav.language') === 'ru' ? '🤗 Совместное обучение' : '🤗 Joint learning',
            t('nav.language') === 'ru' ? '⏰ Гибкий график' : '⏰ Flexible schedule'
          ],
          icon: Clock,
          gradient: 'from-pink-400 to-pink-600'
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
    <section className="py-16 bg-gradient-to-br from-background via-muted/10 to-background">
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
            <TabsList className="grid w-full max-w-md grid-cols-3 h-auto p-2 bg-gradient-to-r from-muted/50 to-muted/30 border border-border">
              {trainers.map((trainer) => (
                <TabsTrigger
                  key={trainer.id}
                  value={trainer.id}
                  className={`flex flex-col items-center p-4 space-y-2 transition-all duration-200 hover:scale-105 relative overflow-hidden border ${
                    trainer.id === 'kazybek' 
                      ? 'data-[state=active]:bg-gradient-to-br data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:border-yellow-300' 
                      : 'data-[state=active]:bg-gradient-to-br data-[state=active]:from-gray-300 data-[state=active]:to-gray-500 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:border-gray-400'
                  }`}
                >
                  {trainer.id === 'kazybek' && <Sparkles className="absolute top-1 right-1 w-3 h-3 text-yellow-300" />}
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
              {/* Enhanced Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {trainer.services.map((service, index) => (
                  <Card key={index} className="group border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                          ⭐ {t('nav.language') === 'ru' ? 'Популярно' : 'Popular'}
                        </span>
                      </div>
                    )}
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <CardHeader className="text-center relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium mb-2">
                        {service.description}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        {service.details}
                      </p>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {convertPrice(service.basePriceUSD)}{getCurrencySymbol()}
                      </div>
                      <CardDescription className="flex items-center justify-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-sm flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105`}
                        onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
                      >
                        🚀 {t('services.bookLesson')}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Enhanced Pricing Table */}
              <div className="bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl p-6 border-2 border-muted/30">
                <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {t('services.plans')}
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  {t('nav.language') === 'ru' 
                    ? 'Чем больше занятий в неделю, тем больше возможностей для развития' 
                    : 'The more lessons per week, the more opportunities for development'
                  }
                </p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-muted/60 to-muted/40 border-b border-border">
                        <TableHead className="w-[200px] font-bold text-foreground border-r border-border">
                          {t('nav.language') === 'ru' ? 'Услуги / Количество занятий' : 'Services / Number of lessons'}
                        </TableHead>
                        {plans.map((plan) => (
                          <TableHead key={plan.key} className="text-center min-w-[120px] font-bold text-foreground border-r border-border last:border-r-0">
                            {t('nav.language') === 'ru' ? plan.ru : plan.en}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceFeatures.map((feature, index) => (
                        <TableRow key={feature.key} className={`${index % 2 === 0 ? 'bg-muted/10' : 'bg-background/50'} hover:bg-muted/20 transition-colors border-b border-border`}>
                          <TableCell className="font-medium text-foreground border-r border-border">
                            {t('nav.language') === 'ru' ? feature.ru : feature.en}
                          </TableCell>
                          {planFeatures[feature.key].map((value, cellIndex) => (
                            <TableCell key={cellIndex} className="text-center border-r border-border last:border-r-0">
                              {value === '✅' ? (
                                <div className="flex justify-center">
                                  <Check className="w-5 h-5 text-green-500 drop-shadow-sm" />
                                </div>
                              ) : value === '❌' ? (
                                <div className="flex justify-center">
                                  <X className="w-5 h-5 text-red-500 drop-shadow-sm" />
                                </div>
                              ) : feature.key === 'effectiveness' ? (
                                <div className="flex justify-center gap-1">
                                  {value.split('').map((star, starIndex) => (
                                    <Star key={starIndex} className="w-4 h-4 text-yellow-500 fill-yellow-500 drop-shadow-sm" />
                                  ))}
                                </div>
                              ) : (
                                <span className="text-sm font-medium text-primary">{value}</span>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                {/* Enhanced Legend */}
                <div className="flex justify-center gap-8 mt-6 text-sm">
                  <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg border border-green-200 dark:border-green-800">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      {t('nav.language') === 'ru' ? 'Услуга включена' : 'Service included'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg border border-red-200 dark:border-red-800">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-red-700 dark:text-red-300 font-medium">
                      {t('nav.language') === 'ru' ? 'Услуга не включена' : 'Service not included'}
                    </span>
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
