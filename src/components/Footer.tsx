
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
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2fe25c83-27c2-4e60-bc6f-6bfa52075a6e.png" 
                  alt="Kazybek Chess" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">Umbetov</span>
                <span className="font-bold text-lg text-foreground">Kazybek</span>
                <span className="text-sm text-muted-foreground">Chess</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.links')}</h3>
            <div className="space-y-2">
              <div>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.about')}
                </a>
              </div>
              <div>
                <a href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.services')}
                </a>
              </div>
              <div>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.language') === 'ru' ? 'Тренера' : 'Trainers'}
                </a>
              </div>
              <div>
                <a href="/requirements" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.requirements')}
                </a>
              </div>
              <div>
                <a href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.reviews')}
                </a>
              </div>
              <div>
                <a href="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.contacts')}
                </a>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.contact')}</h3>
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
                <p className="text-muted-foreground">
                  {t('nav.language') === 'ru' ? 'Часы работы: 24/7' : 'Working hours: 24/7'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
