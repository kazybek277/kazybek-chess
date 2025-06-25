
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import RequirementsPageContent from '@/components/RequirementsPageContent';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const RequirementsPage = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">
            <RequirementsPageContent />
          </main>
          <ContactForm />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default RequirementsPage;
