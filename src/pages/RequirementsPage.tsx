
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
        <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-muted/30 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
          <Header />
          <main className="pt-16 relative">
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
