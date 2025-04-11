
import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Kayıt Başarılı",
        description: "Hesabınız oluşturuldu!"
      });
      navigate('/home');
      return userCredential.user;
    } catch (error: any) {
      toast({
        title: "Kayıt Hatası",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Giriş Başarılı",
        description: "Hoş geldiniz!"
      });
      navigate('/home');
      return userCredential.user;
    } catch (error: any) {
      toast({
        title: "Giriş Hatası",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Çıkış Yapıldı",
        description: "Güvenli bir şekilde çıkış yaptınız."
      });
      navigate('/login');
    } catch (error: any) {
      toast({
        title: "Çıkış Hatası",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  return { user, loading, signUp, login, logout };
};
