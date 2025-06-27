
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
            <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl mb-6">
              <img 
                src="/lovable-uploads/7224ef05-a125-4e64-8c6e-2feb7b4ad392.png" 
                alt="Kazybek Chess" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium backdrop-blur-sm">
              <Trophy className="w-4 h-4 mr-2" />
              {t('hero.badge')}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                {t('hero.title.line1')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {t('hero.title.line2')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl group-hover:from-yellow-500/30 group-hover:to-yellow-600/30 transition-all duration-300">
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
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
            >
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-foreground font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2" />
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="font-medium">{t('hero.trust.reviews')}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span className="font-medium">{t('hero.trust.guarantee')}</span>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span className="font-medium">{t('hero.trust.support')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
