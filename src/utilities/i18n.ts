import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { en } from 'src/assets/locales/en';
import { vi } from 'src/assets/locales/vi';

// Lấy/lưu ngôn ngữ từ AsyncStorage
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: (lang: string) => void) => {
    const savedLang = await AsyncStorage.getItem('appLanguage');
    if (savedLang) {
      callback(savedLang || 'en');
    } else {
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: (lang: string) => {
    AsyncStorage.setItem('appLanguage', lang);
  },
};

i18n
  .use(languageDetector as any) // cast vì không đúng type hoàn toàn
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    interpolation: {
      escapeValue: false, // không cần escape trong React
    },
    react: {
      useSuspense: false, // tránh lỗi khi chưa load xong
    },
  })
  .then(() => console.log('i18n initialized!'))
  .catch(err => console.error('i18n error:', err));

export default i18n;
