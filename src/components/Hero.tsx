
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play, Star, Trophy, Users, Target } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '500+', label: t('hero.stats.students') },
    { icon: Trophy, value: '16+', label: t('hero.stats.experience') },
    { icon: Target, value: '350+', label: t('hero.stats.tournaments') },
    { icon: Star, value: '5.0', label: t('hero.stats.rating') }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/80 to-muted/30 px-4 sm:px-6 lg:px-8 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl mb-6 fancy-border">
              <img 
                src="/lovable-uploads/7224ef05-a125-4e64-8c6e-2feb7b4ad392.png" 
                alt="Kazybek Chess" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500/30 rounded-full text-yellow-600 text-sm font-medium backdrop-blur-sm shadow-lg fancy-border">
              <Trophy className="w-5 h-5 mr-2" />
              {t('hero.badge')}
            </div>
            
            <div className="fancy-border p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                  Обучение шахматам онлайн с
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  FM Умбетов Казыбек
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Профессиональное обучение шахматам от FIDE Master с 7-летним опытом преподавания. 
                Индивидуальный подход к каждому ученику — от новичков до кандидатов в мастера.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 fancy-border shadow-lg"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-xl group-hover:from-yellow-500/40 group-hover:to-yellow-600/40 transition-all duration-300 border border-yellow-500/20">
                    <stat.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 border-2 border-yellow-400/30"
              onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
            >
              Записаться на урок
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-foreground font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2" />
              Смотреть услуги
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/20 backdrop-blur-sm fancy-border">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="font-medium">38+ отзывов на Profi.ru</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span className="font-medium">Гарантия результата</span>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span className="font-medium">Поддержка 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
