
import React, { useState } from 'react';
import { Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TrainerSelector from './TrainerSelector';
import TrainerInfo from './TrainerInfo';
import ServicesGrid from './ServicesGrid';

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const [selectedTrainer, setSelectedTrainer] = useState('kazybek');

  const trainers = [
    { id: 'kazybek', name: language === 'ru' ? 'Казыбек (FM)' : 'Kazybek (FM)' },
    { id: 'amir', name: language === 'ru' ? 'Амир (КМС)' : 'Amir (CMS)' },
    { id: 'tamerlan', name: language === 'ru' ? 'Тамерлан (КМС)' : 'Tamerlan (CMS)' }
  ];

  const services = {
    kazybek: {
      name: language === 'ru' ? 'Умбетов Казыбек' : 'Umbetov Kazybek',
      title: language === 'ru' ? 'Главный тренер, FIDE Мастер' : 'Head Trainer, FIDE Master',
      description: language === 'ru' ? 'Максимальный эффект и полное внимание тренера' : 'Maximum effect and full trainer attention',
      services: [
        {
          type: language === 'ru' ? 'Индивидуальные занятия' : 'Individual lessons',
          price: '10 000',
          duration: language === 'ru' ? '60 мин' : '60 min',
          features: language === 'ru' ? [
            'Персональный подход',
            'Гибкий график',
            'Домашние задания',
            'Анализ партий'
          ] : [
            'Personal approach',
            'Flexible schedule',
            'Homework assignments',
            'Game analysis'
          ],
          icon: Users,
          popular: true
        },
        {
          type: language === 'ru' ? 'Турнирная подготовка' : 'Tournament preparation',
          price: '15 000',
          duration: language === 'ru' ? '60 мин' : '60 min',
          features: language === 'ru' ? [
            'Доступны интенсивы',
            'Спарринги',
            'Разборы партий',
            'Совместный анализ'
          ] : [
            'Intensive courses available',
            'Sparring sessions',
            'Game reviews',
            'Joint analysis'
          ],
          icon: Clock
        }
      ]
    },
    amir: {
      name: language === 'ru' ? 'Сатыбалды Амир' : 'Satybaldy Amir',
      title: language === 'ru' ? 'Старший тренер, КМС' : 'Senior Trainer, CMS',
      description: language === 'ru' ? 'До 4 человек: командная динамика и турнирная практика' : 'Up to 4 people: team dynamics and tournament practice',
      services: [
        {
          type: language === 'ru' ? 'Индивидуальные занятия' : 'Individual lessons',
          price: '7 000',
          duration: language === 'ru' ? '60 мин' : '60 min',
          features: language === 'ru' ? [
            'Персональный подход',
            'Гибкий график',
            'Домашние задания',
            'Анализ партий'
          ] : [
            'Personal approach',
            'Flexible schedule',
            'Homework assignments',
            'Game analysis'
          ],
          icon: Users
        },
        {
          type: language === 'ru' ? 'Групповые занятия' : 'Group lessons',
          price: '5 000',
          duration: language === 'ru' ? '60 мин' : '60 min',
          features: language === 'ru' ? [
            'До 4 человек',
            'Командная работа',
            'Турниры в группе',
            'Совместный анализ'
          ] : [
            'Up to 4 people',
            'Team work',
            'Group tournaments',
            'Joint analysis'
          ],
          icon: Clock,
          popular: true
        }
      ]
    },
    tamerlan: {
      name: language === 'ru' ? 'Хасенов Тамерлан' : 'Khasenov Tamerlan',
      title: language === 'ru' ? 'Старший тренер, КМС' : 'Senior Trainer, CMS',
      description: language === 'ru' ? 'Идеальный баланс внимания и стоимости' : 'Perfect balance of attention and cost',
      services: [
        {
          type: language === 'ru' ? 'Индивидуальные занятия' : 'Individual lessons',
          price: '7 000',
          duration: language === 'ru' ? '60 мин' : '60 min',
          features: language === 'ru' ? [
            'Персональный подход',
            'Гибкий график',
            'Домашние задания',
            'Анализ партий'
          ] : [
            'Personal approach',
            'Flexible schedule',
            'Homework assignments',
            'Game analysis'
          ],
          icon: Users
        },
        {
          type: language === 'ru' ? 'Занятия в паре' : 'Pair lessons',
          price: '5 000',
          duration: language === 'ru' ? '60 мин' : '60 min',
          features: language === 'ru' ? [
            'Занятия для 2 человек',
            'Больше внимания каждому',
            'Парные упражнения',
            'Оптимальная цена'
          ] : [
            'Lessons for 2 people',
            'More attention to each',
            'Pair exercises',
            'Optimal price'
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
