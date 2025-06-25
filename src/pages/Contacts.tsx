
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import ContactsPageContent from '@/components/ContactsPageContent';
import Footer from '@/components/Footer';

const Contacts = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">
            <ContactsPageContent />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Contacts;
