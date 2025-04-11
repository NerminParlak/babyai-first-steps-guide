
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase yapılandırma bilgileri
// Bu bilgiler Firebase konsolundan alınmalıdır
const firebaseConfig = {
  apiKey: "AIzaSyAq1bOJJFT5loIH0P6nqOsIgxJvG8aFkwI",
  authDomain: "babyai-demo.firebaseapp.com",
  projectId: "babyai-demo",
  storageBucket: "babyai-demo.appspot.com",
  messagingSenderId: "469396964380",
  appId: "1:469396964380:web:2b50c48bab797fcea9e061"
};

// Firebase uygulamasının başlatılması
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
