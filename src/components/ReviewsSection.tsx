
import React, { useState } from 'react';
import { Star, User, MessageSquare, ThumbsUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ReviewsSection = () => {
  const { t } = useLanguage();
  const [selectedTrainer, setSelectedTrainer] = useState('kazybek');

  const trainers = [
    { id: 'kazybek', name: 'Казыбек (FM)', nameEn: 'Kazybek (FM)' },
    { id: 'amir', name: 'Амир (КМС)', nameEn: 'Amir (CMS)' },
    { id: 'tamerlan', name: 'Тамерлан (КМС)', nameEn: 'Tamerlan (CMS)' }
  ];

  const reviews = [
    {
      id: 1,
      trainer: 'kazybek',
      name: 'Гания',
      role: 'Родитель',
      roleEn: 'Parent',
      text: 'Репетитор нам очень нравится. Доброжелательный, хорошо общается с ребенком 7 лет, умеет заинтересовать, очень пунктуален.',
      textEn: 'We really like the tutor. Kind, communicates well with our 7-year-old child, knows how to engage, very punctual.',
      age: '7 лет',
      ageEn: '7 years old',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'март 2021 г.',
      dateEn: 'March 2021',
      rating: 5
    },
    {
      id: 2,
      trainer: 'kazybek',
      name: 'Шынар',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Провели пробный урок. Будем заниматься. Посмотрим на результаты.',
      textEn: 'Had a trial lesson. Will continue studying. Let\'s see the results.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Пробное занятие',
      typeEn: 'Trial lesson',
      date: 'май 2021 г.',
      dateEn: 'May 2021',
      rating: 5
    },
    {
      id: 3,
      trainer: 'kazybek',
      name: 'Акмарал',
      role: 'Родитель',
      roleEn: 'Parent',
      text: 'Очень хороший специалист! Пунктуальный, ответственный, на все вопросы спокойно отвечает. Рекомендую.',
      textEn: 'Very good specialist! Punctual, responsible, calmly answers all questions. I recommend.',
      age: 'Детские группы',
      ageEn: 'Children groups',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 4,
      trainer: 'kazybek',
      name: 'Максим',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Очень рекомендую! Уроки динамичные и интересные. Все доходчиво объясняет, тут же закрепляем на примерах. Потом разбор партии. Хочешь быть лучшим — тренируйся у лучших!',
      textEn: 'Highly recommend! Lessons are dynamic and interesting. Explains everything clearly, we immediately practice with examples. Then game analysis. Want to be the best — train with the best!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 5,
      trainer: 'kazybek',
      name: 'Мила',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Ответственный и грамотный преподаватель. Спокойная, доброжелательная атмосфера. После урока — домашние задания для закрепления материала.',
      textEn: 'Responsible and competent teacher. Calm, friendly atmosphere. After the lesson - homework to consolidate the material.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 6,
      trainer: 'kazybek',
      name: 'Аркадий',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Всегда на связи. Дает домашние задания по слабым местам, помогает решать задачи, использует Skype и WhatsApp. Рекомендую!',
      textEn: 'Always in touch. Gives homework on weak points, helps solve problems, uses Skype and WhatsApp. I recommend!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 7,
      trainer: 'kazybek',
      name: 'Svetlana',
      role: 'Мама ученика',
      roleEn: 'Student\'s mother',
      text: 'Сыну почти 7, занятия продолжаем в долгосрочном формате. Ернар — четкий, структурный, внимательный.',
      textEn: 'Son is almost 7, we continue lessons in long-term format. Ernar is clear, structured, attentive.',
      age: '7 лет',
      ageEn: '7 years old',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июнь 2021 г.',
      dateEn: 'June 2021',
      rating: 5
    },
    {
      id: 8,
      trainer: 'kazybek',
      name: 'Оксана',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Столько информации за один урок! Голова пухнет, но очень интересно. Посмотрим, как справимся с домашкой.',
      textEn: 'So much information in one lesson! Head is spinning, but very interesting. Let\'s see how we handle homework.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 9,
      trainer: 'kazybek',
      name: 'Анара',
      role: 'Мама ученицы',
      roleEn: 'Student\'s mother',
      text: 'Профессионал с видением развития ребенка. Моя дочь-подросток увлечена и мотивирована.',
      textEn: 'Professional with child development vision. My teenage daughter is engaged and motivated.',
      age: 'Подросток',
      ageEn: 'Teenager',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 10,
      trainer: 'kazybek',
      name: 'Тимофей',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Интенсивные, интересные занятия. Специалист инициативный, присылает домашние задания. Результат чувствуется уже после первого урока.',
      textEn: 'Intensive, interesting lessons. Specialist is proactive, sends homework. Results are felt after the first lesson.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 11,
      trainer: 'kazybek',
      name: 'Наталья',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Урок пролетает как 5 минут. Ответственный, умный, пунктуальный — даже при нулевом бэкграунде легко начать!',
      textEn: 'Lesson flies by like 5 minutes. Responsible, smart, punctual — even with zero background it\'s easy to start!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 12,
      trainer: 'kazybek',
      name: 'Дмитрий Гриненко',
      role: 'Родитель',
      roleEn: 'Parent',
      text: 'Благодарны за индивидуальный подход. Спасибо, Ернар Тореханович!',
      textEn: 'Grateful for the individual approach. Thank you, Yernar Torehanovich!',
      age: 'Детские группы',
      ageEn: 'Children groups',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 13,
      trainer: 'kazybek',
      name: 'Любовь',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Объясняет спокойно и понятно. Ведет запись урока — очень удобно для повторения. Уроки всегда вовремя.',
      textEn: 'Explains calmly and clearly. Records lessons — very convenient for repetition. Lessons are always on time.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 14,
      trainer: 'kazybek',
      name: 'Альмира',
      role: 'Мама ученика',
      roleEn: 'Student\'s mother',
      text: 'Сыну 7 лет. Учитель ему нравится. Немного быстро объясняет, но думаю, они найдут общий ритм.',
      textEn: 'Son is 7 years old. He likes the teacher. Explains a bit fast, but I think they\'ll find a common rhythm.',
      age: '7 лет',
      ageEn: '7 years old',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 15,
      trainer: 'kazybek',
      name: 'Лариса Джумагалиева',
      role: 'Мама ученицы',
      roleEn: 'Student\'s mother',
      text: 'Дочери очень нравится. Продолжаем занятия. Преподаватель доступно и терпеливо объясняет.',
      textEn: 'Daughter really likes it. Continuing lessons. Teacher explains accessibly and patiently.',
      age: 'Детские группы',
      ageEn: 'Children groups',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июль 2021 г.',
      dateEn: 'July 2021',
      rating: 5
    },
    {
      id: 16,
      trainer: 'kazybek',
      name: 'Ернар',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Уроки интенсивные и интересные, специалист инициативный, присылает домашние задания, на связи всегда.',
      textEn: 'Lessons are intensive and interesting, specialist is proactive, sends homework, always in touch.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'август 2021 г.',
      dateEn: 'August 2021',
      rating: 5
    },
    {
      id: 17,
      trainer: 'kazybek',
      name: 'Александр',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Прекрасный преподаватель! Прогресс очевиден. Помогает даже вне уроков — топ!',
      textEn: 'Excellent teacher! Progress is obvious. Helps even outside lessons — top!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'август 2021 г.',
      dateEn: 'August 2021',
      rating: 5
    },
    {
      id: 18,
      trainer: 'kazybek',
      name: 'Людмила',
      role: 'Мама ученицы',
      roleEn: 'Student\'s mother',
      text: 'Начала заниматься дочь. Первое впечатление — очень хорошее. Надеемся на долгое сотрудничество.',
      textEn: 'Daughter started studying. First impression is very good. Hope for long cooperation.',
      age: 'Детские группы',
      ageEn: 'Children groups',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'август 2021 г.',
      dateEn: 'August 2021',
      rating: 5
    },
    {
      id: 19,
      trainer: 'kazybek',
      name: 'Андрей',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Всё просто восхитительно!',
      textEn: 'Everything is simply delightful!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'август 2021 г.',
      dateEn: 'August 2021',
      rating: 5
    },
    {
      id: 20,
      trainer: 'kazybek',
      name: 'Назира',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Очень хороший и пунктуальный преподаватель, мотивирует развиваться в шахматах.',
      textEn: 'Very good and punctual teacher, motivates to develop in chess.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'август 2021 г.',
      dateEn: 'August 2021',
      rating: 5
    },
    {
      id: 21,
      trainer: 'kazybek',
      name: 'Рамир',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Отдельный подход к каждому, отличный и опытный специалист.',
      textEn: 'Individual approach to everyone, excellent and experienced specialist.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'сентябрь 2021 г.',
      dateEn: 'September 2021',
      rating: 5
    },
    {
      id: 22,
      trainer: 'kazybek',
      name: 'Лилия',
      role: 'Мама ученика',
      roleEn: 'Student\'s mother',
      text: 'Сыну очень понравился тренер. Объясняет приемы, дает задачи, всегда пунктуален и заинтересован.',
      textEn: 'Son really liked the trainer. Explains techniques, gives tasks, always punctual and interested.',
      age: 'Детские группы',
      ageEn: 'Children groups',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'сентябрь 2021 г.',
      dateEn: 'September 2021',
      rating: 5
    },
    {
      id: 23,
      trainer: 'kazybek',
      name: 'Ирина',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Я думал, что шахматы — это скучно. А теперь не могу оторваться! Спасибо, Ернар Тореханович!',
      textEn: 'I thought chess was boring. But now I can\'t tear myself away! Thank you, Yernar Torehanovich!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'сентябрь 2021 г.',
      dateEn: 'September 2021',
      rating: 5
    },
    {
      id: 24,
      trainer: 'kazybek',
      name: 'Наргиз',
      role: 'Мама ученика',
      roleEn: 'Student\'s mother',
      text: 'Ребенок начал с нуля и уже решает задачи. Очень понятно объясняет. Уроки проходят вовремя, интересно и результативно.',
      textEn: 'Child started from scratch and already solves problems. Explains very clearly. Lessons are on time, interesting and effective.',
      age: 'Детские группы',
      ageEn: 'Children groups',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'ноябрь 2021 г.',
      dateEn: 'November 2021',
      rating: 5
    },
    {
      id: 25,
      trainer: 'kazybek',
      name: 'Нуржан Рахметов',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Шахматы — новое хобби! Благодарю за поддержку.',
      textEn: 'Chess is a new hobby! Thank you for the support.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'декабрь 2021 г.',
      dateEn: 'December 2021',
      rating: 5
    },
    {
      id: 26,
      trainer: 'kazybek',
      name: 'Мерей',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Спасибо за занятия! С каждым уроком — всё увереннее в игре.',
      textEn: 'Thank you for the lessons! With each lesson — more confident in the game.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'ноябрь 2022 г.',
      dateEn: 'November 2022',
      rating: 5
    },
    {
      id: 27,
      trainer: 'kazybek',
      name: 'Андрей',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Отличный преподаватель по шахматам!',
      textEn: 'Excellent chess teacher!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'январь 2023 г.',
      dateEn: 'January 2023',
      rating: 5
    },
    {
      id: 28,
      trainer: 'kazybek',
      name: 'Влад',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Все объясняет понятно и доходчиво. Отличный специалист!',
      textEn: 'Explains everything clearly and comprehensibly. Excellent specialist!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'март 2023 г.',
      dateEn: 'March 2023',
      rating: 5
    },
    {
      id: 29,
      trainer: 'kazybek',
      name: 'Мария',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Очень спокойный преподаватель. Не страшно ошибаться или задавать вопросы. Уроки интересные, прогресс виден.',
      textEn: 'Very calm teacher. Not scary to make mistakes or ask questions. Lessons are interesting, progress is visible.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'май 2023 г.',
      dateEn: 'May 2023',
      rating: 5
    },
    {
      id: 30,
      trainer: 'kazybek',
      name: 'Артём',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Спасибо большое! Все доходчиво объясняет, приятно заниматься.',
      textEn: 'Thank you very much! Explains everything clearly, pleasant to study.',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'май 2023 г.',
      dateEn: 'May 2023',
      rating: 5
    },
    {
      id: 31,
      trainer: 'kazybek',
      name: 'Дмитрий',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Долго выбирал тренера — и не ошибся. Советую всем!',
      textEn: 'Chose a trainer for a long time — and made no mistake. I advise everyone!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'май 2023 г.',
      dateEn: 'May 2023',
      rating: 5
    },
    {
      id: 32,
      trainer: 'kazybek',
      name: 'Фёдор',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Уроки структурированные. После каждого — задания. Мозги не отдыхают! Рекомендую!',
      textEn: 'Lessons are structured. After each — assignments. Brain doesn\'t rest! I recommend!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'октябрь 2023 г.',
      dateEn: 'October 2023',
      rating: 5
    },
    {
      id: 33,
      trainer: 'kazybek',
      name: 'Алексей',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Занимаемся 6 месяцев — +300 рейтинга. Отличный темп!',
      textEn: 'Studying for 6 months — +300 rating. Excellent pace!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Турнирная подготовка',
      typeEn: 'Tournament preparation',
      date: 'октябрь 2023 г.',
      dateEn: 'October 2023',
      rating: 5
    },
    {
      id: 34,
      trainer: 'kazybek',
      name: 'Кирилл',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Занимаюсь каждый день. Прогресс чувствуется. Спасибо!',
      textEn: 'Study every day. Progress is felt. Thank you!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Онлайн занятия',
      typeEn: 'Online lessons',
      date: 'октябрь 2023 г.',
      dateEn: 'October 2023',
      rating: 5
    },
    {
      id: 35,
      trainer: 'kazybek',
      name: 'Максим',
      role: 'Ученик',
      roleEn: 'Student',
      text: 'Приятный в общении, заинтересован в результате, анализирует партии, помогает даже вне урока. Идеальный тренер!',
      textEn: 'Pleasant in communication, interested in results, analyzes games, helps even outside lessons. Perfect trainer!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'октябрь 2023 г.',
      dateEn: 'October 2023',
      rating: 5
    },
    {
      id: 36,
      trainer: 'kazybek',
      name: 'Полина',
      role: 'Ученица',
      roleEn: 'Student',
      text: 'Структурированный подход, индивидуальная методика, понятное объяснение на любом уровне. С удовольствием продолжаем занятия!',
      textEn: 'Structured approach, individual methodology, clear explanation at any level. We continue lessons with pleasure!',
      age: 'Взрослый',
      ageEn: 'Adult',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'июнь 2024 г.',
      dateEn: 'June 2024',
      rating: 5
    },
    {
      id: 37,
      trainer: 'kazybek',
      name: 'Марина',
      role: 'Мама ученика',
      roleEn: 'Student\'s mother',
      text: 'Ребенку 9 лет очень нравится. Много практики, насыщенные уроки. Рада, что нашли такого тренера!',
      textEn: '9-year-old child really likes it. Lots of practice, intensive lessons. Glad we found such a trainer!',
      age: '9 лет',
      ageEn: '9 years old',
      type: 'Детские группы',
      typeEn: 'Children groups',
      date: 'июль 2024 г.',
      dateEn: 'July 2024',
      rating: 5
    },
    {
      id: 38,
      trainer: 'kazybek',
      name: 'Анна Петрова',
      role: 'Мама ученика',
      roleEn: 'Student\'s mother',
      text: 'Казыбек — замечательный тренер! Мой сын Максим начал заниматься с нуля и уже через 3 месяца выиграл школьный турнир. Тренер умеет найти подход к ребенку и объяснить сложные вещи простым языком.',
      textEn: 'Kazybek is a wonderful trainer! My son Maxim started from scratch and already won a school tournament after 3 months. The trainer knows how to find an approach to the child and explain complex things in simple language.',
      age: '8 лет',
      ageEn: '8 years old',
      type: 'Индивидуальные занятия',
      typeEn: 'Individual lessons',
      date: 'январь 2024 г.',
      dateEn: 'January 2024',
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Star,
      value: '5.0',
      label: t ? t('reviews.stats.rating') : 'Рейтинг',
      color: 'text-yellow-500'
    },
    {
      icon: MessageSquare,
      value: '38',
      label: t ? t('reviews.stats.total') : 'Всего отзывов',
      color: 'text-blue-500'
    },
    {
      icon: ThumbsUp,
      value: '100%',
      label: t ? t('reviews.stats.recommend') : 'Рекомендуют',
      color: 'text-green-500'
    },
    {
      icon: User,
      value: '500+',
      label: t ? t('reviews.stats.active') : 'Активных учеников',
      color: 'text-purple-500'
    }
  ];

  const filteredReviews = reviews.filter(review => review.trainer === selectedTrainer);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Отзывы
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Реальные отзывы учеников и родителей о наших тренерах
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-muted/30 border border-border">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color} bg-current/10`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-muted/30 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded">
                    {review.type}
                  </span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profi.ru Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Больше отзывов на Profi.ru
          </h3>
          <p className="text-muted-foreground mb-6">
            Посмотрите дополнительные отзывы и рейтинги на профессиональной платформе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => window.open('https://profi.ru/profile/UmbetovKT3/', '_blank')}
            >
              Основной профиль на Profi.ru
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://profi.ru/profile/UmbetovKT2/', '_blank')}
            >
              Дополнительный профиль
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
