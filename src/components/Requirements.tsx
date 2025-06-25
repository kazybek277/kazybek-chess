
import React from 'react';
import { Monitor, Wifi, Download, User, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Requirements = () => {
  const { t } = useLanguage();

  const requirements = [
    {
      icon: Monitor,
      title: t('requirements.device'),
      description: t('requirements.device.desc'),
      status: 'required',
      color: 'text-red-500'
    },
    {
      icon: Wifi,
      title: t('requirements.internet'),
      description: t('requirements.internet.desc'),
      status: 'required',
      color: 'text-red-500'
    },
    {
      icon: Download,
      title: t('requirements.platform'),
      description: t('requirements.platform.desc'),
      status: 'required',
      color: 'text-blue-500'
    },
    {
      icon: User,
      title: t('requirements.age'),
      description: t('requirements.age.desc'),
      status: 'recommended',
      color: 'text-blue-500'
    },
    {
      icon: Heart,
      title: t('requirements.motivation'),
      description: t('requirements.motivation.desc'),
      status: 'important',
      color: 'text-green-500'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('requirements.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('requirements.format.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req, index) => {
            const IconComponent = req.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${req.color} bg-current/10`}>
                    <IconComponent className={`w-6 h-6 ${req.color}`} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {req.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {req.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
