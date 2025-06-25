
import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  type: string;
  price: string;
  duration: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
}

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
