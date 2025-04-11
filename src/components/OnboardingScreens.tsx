
import React from "react";
import { Heart, Shield, MessageSquareText, UserCheck } from "lucide-react";

export const OnboardingScreen1 = () => {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <Heart size={80} className="text-baby-pink stroke-1" />
      </div>
      <h1 className="text-3xl font-bold mb-4">BabyAI'a Hoş Geldiniz</h1>
      <p className="text-lg text-gray-700 mb-6">
        0-3 yaş arası çocuğunuzun sağlığı için yapay zeka destekli rehberiniz
      </p>
      <div className="w-full max-w-xs h-auto aspect-square mx-auto bg-baby-blue rounded-full flex items-center justify-center">
        <img 
          src="/placeholder.svg" 
          alt="Baby Icon" 
          className="w-3/4 h-3/4 object-cover"
        />
      </div>
    </div>
  );
};

export const OnboardingScreen2 = () => {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <Shield size={80} className="text-baby-blue stroke-1" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Temel Özellikler</h1>
      <p className="text-lg text-gray-700 mb-6">
        AI desteği ile acil durumlarda rehberlik ve güvenilir kaynaklar
      </p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-xs mx-auto">
        <div className="bg-white p-4 rounded-xl baby-shadow">
          <div className="bg-baby-yellow rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <MessageSquareText size={24} className="text-primary-foreground" />
          </div>
          <p className="text-sm font-medium">AI Destekli Rehberlik</p>
        </div>
        <div className="bg-white p-4 rounded-xl baby-shadow">
          <div className="bg-baby-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <Shield size={24} className="text-primary-foreground" />
          </div>
          <p className="text-sm font-medium">Güvenilir Bilgi</p>
        </div>
      </div>
    </div>
  );
};

export const OnboardingScreen3 = () => {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <MessageSquareText size={80} className="text-baby-purple stroke-1" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Kullanım Kolaylığı</h1>
      <p className="text-lg text-gray-700 mb-6">
        Sorunuzu sorun, hızlı ve güvenilir öneriler alın
      </p>
      <div className="w-full max-w-xs mx-auto">
        <div className="bg-white p-4 rounded-xl baby-shadow mb-4">
          <p className="text-gray-700 text-left text-sm p-2">
            "Bebeğimin ateşi var, ne yapmalıyım?"
          </p>
        </div>
        <div className="bg-baby-blue p-4 rounded-xl baby-shadow">
          <p className="text-primary-foreground text-left text-sm p-2">
            "Öncelikle bebeğinizin ateşini ölçün. 38°C üzerindeyse..."
          </p>
        </div>
      </div>
    </div>
  );
};

export const OnboardingScreen4 = () => {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <UserCheck size={80} className="text-baby-orange stroke-1" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Hesabınızı Oluşturun</h1>
      <p className="text-lg text-gray-700 mb-6">
        Kişiselleştirilmiş deneyim için şimdi hesap oluşturun
      </p>
      <div className="w-full max-w-xs h-auto mx-auto">
        <div className="bg-white p-6 rounded-xl baby-shadow">
          <p className="text-gray-700 mb-4">
            Google, Apple veya e-posta ile hesabınızı oluşturarak güvenilir bebek sağlığı rehberinize hemen ulaşın.
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-baby-pink rounded-full flex items-center justify-center">
              <UserCheck size={32} className="text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
