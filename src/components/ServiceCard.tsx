
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  service: {
    type: string;
    price: string;
    duration: string;
    features: string[];
    icon: React.ComponentType<{ className?: string }>;
    popular?: boolean;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { t } = useLanguage();
  const IconComponent = service.icon;

  return (
    <div
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
};

export default ServiceCard;
