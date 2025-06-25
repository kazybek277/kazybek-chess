
import React, { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import ReviewsSection from '@/components/ReviewsSection';

const Reviews = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">
            <ReviewsSection />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Reviews;
