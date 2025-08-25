import { en } from './en';
import { pt } from './pt';

export const translations = {
  en,
  pt,
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof en;

export const defaultLanguage: Language = 'en';
export const availableLanguages: Language[] = ['en', 'pt'];

export const languageNames = {
  en: 'English',
  pt: 'Português',
};
