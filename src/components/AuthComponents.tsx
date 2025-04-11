import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Apple, Mail, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const SocialAuthButtons = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Bilgi",
      description: `${provider} ile giriş şu anda mevcut değil. MVP-0 versiyonunda bu özellik eklenmeyecektir.`,
    });
    // In real implementation, this would connect to Firebase Authentication
    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <div className="space-y-4">
      <Button 
        variant="outline" 
        className="w-full py-6 flex items-center justify-center gap-2 hover:bg-gray-50"
        onClick={() => handleSocialLogin("Google")}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Google ile Devam Et
      </Button>
      
      <Button 
        variant="outline" 
        className="w-full py-6 flex items-center justify-center gap-2 hover:bg-gray-50"
        onClick={() => handleSocialLogin("Apple")}
      >
        <Apple className="w-5 h-5" />
        Apple ile Devam Et
      </Button>
      
      <div className="relative flex items-center justify-center my-6">
        <div className="border-t border-gray-300 w-full"></div>
        <span className="bg-white px-3 text-gray-500 text-sm absolute">veya</span>
      </div>
    </div>
  );
};

export const EmailLoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      // Başarılı giriş useAuth içinde yapılıyor
    } catch (error) {
      // Hata işleme useAuth içinde yapılıyor
      console.error("Giriş hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">E-posta</Label>
        <Input
          id="email"
          type="email"
          placeholder="ad@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Şifre</Label>
          <Button 
            variant="link" 
            className="text-sm font-normal p-0 h-auto"
            onClick={() => navigate("/forgot-password")}
            type="button"
          >
            Şifremi Unuttum
          </Button>
        </div>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full py-6 mt-6" 
        disabled={isLoading}
      >
        {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
      </Button>
      
      <div className="text-center mt-4">
        <span className="text-gray-600 text-sm">
          Hesabınız yok mu?{" "}
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm font-semibold"
            onClick={() => navigate("/register")}
          >
            Kayıt Ol
          </Button>
        </span>
      </div>
    </form>
  );
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signUp(email, password);
      // Başarılı kayıt useAuth içinde yapılıyor
    } catch (error) {
      // Hata işleme useAuth içinde yapılıyor
      console.error("Kayıt hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">E-posta</Label>
        <Input
          id="email"
          type="email"
          placeholder="ad@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Şifre</Label>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
        />
      </div>
      
      <div className="flex items-start mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-primary border-gray-300 rounded"
            required
          />
        </div>
        <div className="ml-2">
          <Label 
            htmlFor="terms" 
            className="text-xs font-normal text-gray-600"
          >
            <span>Gizlilik Politikası ve Kullanım Şartlarını okudum ve kabul ediyorum.</span>
          </Label>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full py-6 mt-4" 
        disabled={isLoading}
      >
        {isLoading ? "Kaydediliyor..." : "Kayıt Ol"}
      </Button>
      
      <div className="text-center mt-4">
        <span className="text-gray-600 text-sm">
          Zaten hesabınız var mı?{" "}
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm font-semibold"
            onClick={() => navigate("/login")}
          >
            Giriş Yap
          </Button>
        </span>
      </div>
    </form>
  );
};

export const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await resetPassword(email);
      // Başarılı şifre sıfırlama useAuth içinde yapılıyor
    } catch (error) {
      // Hata işleme useAuth içinde yapılıyor
      console.error("Şifre sıfırlama hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {sent ? (
        <div className="text-center p-4 space-y-4">
          <div className="mx-auto w-16 h-16 bg-baby-green rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="font-medium text-lg">E-posta Gönderildi</h3>
          <p className="text-gray-600 text-sm">
            {email} adresinize şifre sıfırlama bağlantısı gönderdik. Lütfen e-postanızı kontrol edin.
          </p>
          <Button
            type="button"
            variant="outline"
            className="w-full mt-4"
            onClick={() => navigate("/login")}
          >
            Giriş Sayfasına Dön
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 p-4 bg-baby-yellow bg-opacity-30 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <p className="text-sm text-amber-800">
              Şifrenizi sıfırlamak için e-posta adresinizi girin.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              type="email"
              placeholder="ad@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-6"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full py-6 mt-6" 
            disabled={isLoading}
          >
            {isLoading ? "Gönderiliyor..." : "Şifre Sıfırlama Bağlantısı Gönder"}
          </Button>
        </>
      )}
    </form>
  );
};
