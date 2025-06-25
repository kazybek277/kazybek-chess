
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-lg">♔</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">Umbetov</span>
                <span className="font-bold text-lg text-foreground">Kazybek</span>
                <span className="text-sm text-muted-foreground">Chess</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              FM Казыбек из Казахстана предлагает профессиональное обучение шахмат онлайн для детей и взрослых. 
              Шахматные уроки онлайн с международным мастером FIDE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              <div>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </a>
              </div>
              <div>
                <a href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Услуги
                </a>
              </div>
              <div>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Тренера
                </a>
              </div>
              <div>
                <a href="/requirements" className="text-muted-foreground hover:text-foreground transition-colors">
                  Занятия
                </a>
              </div>
              <div>
                <a href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                  Отзывы
                </a>
              </div>
              <div>
                <a href="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </a>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-muted-foreground">kazybek.chess@gmail.com</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">WhatsApp: +7 (775) 999-36-44</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Telegram: @ChessBeast_1</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Часы работы: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Umbetov Kazybek Chess. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
