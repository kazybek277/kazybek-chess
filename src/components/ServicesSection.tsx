
import React, { useState } from 'react';
import { Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TrainerSelector from './TrainerSelector';
import TrainerInfo from './TrainerInfo';
import ServicesGrid from './ServicesGrid';

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

        <TrainerSelector
          trainers={trainers}
          selectedTrainer={selectedTrainer}
          onTrainerSelect={setSelectedTrainer}
        />

        <TrainerInfo
          name={currentTrainer.name}
          title={currentTrainer.title}
          description={currentTrainer.description}
        />

        <ServicesGrid services={currentTrainer.services} />
      </div>
    </section>
  );
};

export default ServicesSection;
