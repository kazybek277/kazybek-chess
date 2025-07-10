
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import TrainersSection from '@/components/TrainersSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Send, Bot } from 'lucide-react';

const About = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-muted/30 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
          <Header />
          <main className="pt-16 relative">
            {/* Links Section */}
            <section className="py-8 bg-muted/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Присоединяйтесь к нам
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      onClick={() => window.open('https://t.me/kazybek_chess', '_blank')}
                      className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Telegram канал
                    </Button>
                    <Button
                      onClick={() => window.open('https://t.me/Kazybek_Umbetov_Chess_Bot', '_blank')}
                      className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2"
                    >
                      <Bot className="w-4 h-4" />
                      Telegram бот
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
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
