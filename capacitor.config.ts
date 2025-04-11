
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8e91b6891b164391bbf83cc746b63de4',
  appName: 'babyai-first-steps-guide',
  webDir: 'dist',
  server: {
    url: 'https://8e91b689-1b16-4391-bbf8-3cc746b63de4.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'always',
  },
};

export default config;
