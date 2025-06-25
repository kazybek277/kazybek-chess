
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import ServicesPageContent from '@/components/ServicesPageContent';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">
            <ServicesPageContent />
          </main>
          <ContactForm />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Services;
