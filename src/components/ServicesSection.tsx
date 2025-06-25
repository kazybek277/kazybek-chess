
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  const [selectedTrainer, setSelectedTrainer] = useState('kazybek');

  const trainers = [
    { id: 'kazybek', name: 'Казыбек (FM)' },
    { id: 'amir', name: 'Амир (КМС)' },
    { id: 'tamerlan', name: 'Тамерлан (КМС)' }
  ];

  const services = {
    kazybek: {
      name: 'Умбетов Казыбек',
      title: 'Главный тренер, FIDE Мастер',
      description: 'Максимальный эффект и полное внимание тренера',
      services: [
        {
          type: 'Индивидуальные занятия',
          price: '10 000',
          duration: '60 мин',
          features: [
            'Персональный подход',
            'Гибкий график',
            'Домашние задания',
            'Анализ партий'
          ],
          icon: Users,
          popular: true
        },
        {
          type: 'Турнирная подготовка',
          price: '15 000',
          duration: '60 мин',
          features: [
            'Доступны интенсивы',
            'Спарринги',
            'Разборы партий',
            'Совместный анализ'
          ],
          icon: Clock
        }
      ]
    },
    amir: {
      name: 'Сатыбалды Амир',
      title: 'Старший тренер, КМС',
      description: 'До 4 человек: командная динамика и турнирная практика',
      services: [
        {
          type: 'Индивидуальные занятия',
          price: '7 000',
          duration: '60 мин',
          features: [
            'Персональный подход',
            'Гибкий график',
            'Домашние задания',
            'Анализ партий'
          ],
          icon: Users
        },
        {
          type: 'Групповые занятия',
          price: '5 000',
          duration: '60 мин',
          features: [
            'До 4 человек',
            'Командная работа',
            'Турниры в группе',
            'Совместный анализ'
          ],
          icon: Clock,
          popular: true
        }
      ]
    },
    tamerlan: {
      name: 'Хасенов Тамерлан',
      title: 'Старший тренер, КМС',
      description: 'Идеальный баланс внимания и стоимости',
      services: [
        {
          type: 'Индивидуальные занятия',
          price: '7 000',
          duration: '60 мин',
          features: [
            'Персональный подход',
            'Гибкий график',
            'Домашние задания',
            'Анализ партий'
          ],
          icon: Users
        },
        {
          type: 'Занятия в паре',
          price: '5 000',
          duration: '60 мин',
          features: [
            'Занятия для 2 человек',
            'Больше внимания каждому',
            'Парные упражнения',
            'Оптимальная цена'
          ],
          icon: Clock,
          popular: true
        }
      ]
    }
  };

  const currentTrainer = services[selectedTrainer];

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
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

        {/* Trainer Info */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {currentTrainer.name}
          </h3>
          <p className="text-yellow-500 font-semibold mb-2">
            {currentTrainer.title}
          </p>
          <p className="text-muted-foreground">
            {currentTrainer.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {currentTrainer.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  service.popular
                    ? 'border-yellow-500 bg-yellow-500/5'
                    : 'border-border bg-background'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Популярно
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {service.type}
                  </h4>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {service.price} ₸
                  </div>
                  <div className="text-muted-foreground text-sm flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>

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
                  {t('services.signup')}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
