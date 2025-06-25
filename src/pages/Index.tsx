
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Advantages from '@/components/Advantages';
import Requirements from '@/components/Requirements';
import TrainersSection from '@/components/TrainersSection';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Stats />
            <Advantages />
            <Requirements />
            <TrainersSection />
            <ServicesSection />
          </main>
          <ContactForm />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
