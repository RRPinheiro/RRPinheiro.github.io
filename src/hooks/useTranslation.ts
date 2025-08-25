import { useState, useEffect } from 'react';
import { translations, type Language, defaultLanguage } from '../translations';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Try to get language from localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      if (saved && saved in translations) {
        return saved;
      }
      
      // Fallback to browser language detection
      const browserLang = navigator.language.split('-')[0] as Language;
      if (browserLang in translations) {
        return browserLang;
      }
    }
    
    return defaultLanguage;
  });

  // Save language preference to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (path: string): any => {
    const keys = path.split('.');
    let value: any = translations[currentLanguage];
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // Fallback to English if translation is missing
        let fallback: any = translations[defaultLanguage];
        for (const fallbackKey of keys) {
          if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
            fallback = fallback[fallbackKey];
          } else {
            return `Missing translation: ${path}`;
          }
        }
        return fallback;
      }
    }
    
    return value;
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    translations: translations[currentLanguage],
  };
};
