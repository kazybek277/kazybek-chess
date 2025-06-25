
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import TrainersSection from '@/components/TrainersSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">
            <TrainersSection />
          </main>
          <ContactForm />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default About;
