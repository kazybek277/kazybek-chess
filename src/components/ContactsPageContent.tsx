
import React from 'react';
import { Phone, MessageCircle, Send, Mail, Clock, Monitor, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactsPageContent = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-background/80 to-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="fancy-border inline-block p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Контакты
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь со мной для записи на занятия или получения консультации. Отвечаю быстро!
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="fancy-border inline-block p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 shadow-xl">
              <h2 className="text-2xl font-bold text-foreground">
                📞 Способы связи
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 text-center fancy-border">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-3">Быстрые сообщения</p>
              <p className="text-foreground font-medium mb-4">📱 +7 (775) 999-36-44</p>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=77759993644&text&type=phone_number&app_absent=0', '_blank')}
              >
                🔗 Написать в WhatsApp
              </Button>
            </div>

            {/* Telegram */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 text-center fancy-border">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                <Send className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telegram</h3>
              <p className="text-muted-foreground text-sm mb-3">Основной канал связи</p>
              <p className="text-foreground font-medium mb-4">🔗 @ChessBeast_1</p>
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => window.open('https://t.me/ChessBeast_1', '_blank')}
              >
                Написать в Telegram
              </Button>
            </div>

            {/* Telegram Channel */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 text-center fancy-border">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                <Send className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Наш Telegram-канал</h3>
              <p className="text-muted-foreground text-sm mb-3">Новости и обновления</p>
              <p className="text-foreground font-medium mb-4">🔗 @kazybek_chess</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://t.me/kazybek_chess', '_blank')}
              >
                Подписаться
              </Button>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 text-center fancy-border">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                <Mail className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-3">Подробные вопросы</p>
              <p className="text-foreground font-medium mb-4">📧 kazybek.chess@gmail.com</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('mailto:kazybek.chess@gmail.com', '_blank')}
              >
                Написать email
              </Button>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 fancy-border">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-yellow-500 mr-3" />
              <h3 className="text-xl font-semibold text-foreground">🕒 Время работы</h3>
            </div>
            <div className="space-y-2">
              <p className="text-foreground font-medium">Понедельник — Воскресенье</p>
              <p className="text-foreground font-bold text-lg">24/7</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 fancy-border">
            <div className="flex items-center mb-4">
              <Monitor className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-foreground">💻 Формат занятий</h3>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Занятия проводятся только онлайн</p>
              <p className="text-foreground font-medium">🟢 Через Google Meet или Microsoft Teams</p>
            </div>
          </div>
        </div>

        {/* Chess Profiles */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-2 border-yellow-500/20 rounded-xl p-8 mb-8 fancy-border backdrop-blur-sm">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-yellow-500 mr-3" />
            <h3 className="text-2xl font-semibold text-foreground">♟ Мои профили на шахматных платформах</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-background/50 rounded-lg border border-border backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-foreground mb-2">Lichess</h4>
              <p className="text-muted-foreground mb-3">Игровой профиль</p>
              <Button
                variant="outline"
                onClick={() => window.open('https://lichess.org/@/Terminator_10000', '_blank')}
              >
                🔗 Terminator_10000
              </Button>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg border border-border backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-foreground mb-2">Chess.com</h4>
              <p className="text-muted-foreground mb-3">Игровой профиль</p>
              <Button
                variant="outline"
                onClick={() => window.open('https://www.chess.com/member/bale1290', '_blank')}
              >
                🔗 bale1290
              </Button>
            </div>
          </div>
        </div>

        {/* Lichess Community Section - NEW */}
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-2 border-purple-500/20 rounded-xl p-8 fancy-border backdrop-blur-sm">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-2xl font-semibold text-foreground">♟ Наше сообщество Lichess</h3>
          </div>
          <div className="text-center">
            <div className="p-6 bg-background/50 rounded-lg border border-border backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-foreground mb-2">Kazybek's Students</h4>
              <p className="text-muted-foreground mb-4">Присоединяйтесь к нашему сообществу учеников на Lichess</p>
              <Button
                className="bg-purple-500 hover:bg-purple-600 text-white"
                onClick={() => window.open('https://lichess.org/team/kazybeks-students', '_blank')}
              >
                🔗 Присоединиться к команде
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPageContent;
