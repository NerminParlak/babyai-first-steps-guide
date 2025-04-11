
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Send, MessageSquare, BabyIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const HomePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFeedback = () => {
    toast({
      title: "Teşekkürler!",
      description: "Geri bildiriminiz için teşekkür ederiz. En kısa sürede size dönüş yapacağız.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-baby-blue to-baby-purple bg-opacity-30">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-foreground">BabyAI</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/profile")}
          className="rounded-full bg-white baby-shadow"
        >
          <span className="sr-only">Profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-36 h-36 mb-8 bg-baby-yellow rounded-full flex items-center justify-center baby-shadow animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-foreground"
          >
            <path d="M14.5 11.5a3.5 3.5 1 1 0-7 0 3.5 3.5 0 0 1 7 0Z"></path>
            <path d="M20.5 16.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
            <path d="M3.5 16.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"></path>
            <path d="M9.5 15.5c.6.7 1.2 1 2 1s1.4-.3 2-1"></path>
            <path d="M12 8.5v-2"></path>
            <path d="M13.5 18.5l-3-1 3-1"></path>
            <path d="M10.5 17.5l3-1-3-1"></path>
          </svg>
        </div>
        
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center baby-shadow">
          <h2 className="text-2xl font-bold mb-4">
            AI destekli rehber çok yakında burada olacak!
          </h2>
          <p className="text-gray-600 mb-6">
            BabyAI'ın ilk versiyonu üzerinde çalışıyoruz. Çok yakında 0-3 yaş çocuğunuza ve size destek olmak için burada olacağız.
          </p>
          
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="w-3 h-3 bg-baby-green rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-baby-pink rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-baby-blue rounded-full animate-pulse delay-200"></div>
          </div>
          
          <Button
            onClick={handleFeedback}
            className="w-full py-6 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Geri Bildirim Gönder
          </Button>
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500">
        <p>© 2023 BabyAI - Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default HomePage;
