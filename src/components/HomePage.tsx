
import React from "react";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-baby-blue/10 pb-20">
      <header className="px-4 py-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-baby-blue">BabyAI</h1>
        <p className="text-sm text-gray-500">0-3 Yaş Rehberi</p>
      </header>

      <main className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-center">AI Destekli Rehber</h2>
          <div className="flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="AI Asistan" 
              className="w-32 h-32 object-contain mb-4"
            />
          </div>
          <p className="text-gray-600 text-center mb-4">
            AI destekli rehber yakında burada olacak!
          </p>
          <Button className="w-full bg-baby-pink hover:bg-baby-pink/90">
            Beta Kaydı Ol
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-3">Gelişmelerden Haberdar Olun</h2>
          <p className="text-gray-600 mb-4">
            E-posta adresinizi bırakarak yeni özellikleri ilk siz öğrenin.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="flex-grow px-3 py-2 border rounded-md" 
            />
            <Button className="bg-baby-green hover:bg-baby-green/90">
              Gönder
            </Button>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-3">Geri Bildirim</h2>
          <p className="text-gray-600 mb-4">
            Uygulamamızı iyileştirmemize yardımcı olun.
          </p>
          <Button variant="outline" className="w-full">
            Geri Bildirim Gönder
          </Button>
        </div>
      </main>

      <MobileNavbar />
    </div>
  );
};

export default HomePage;
