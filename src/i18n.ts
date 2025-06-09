import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import plTranslations from './translations/pl.json';
import enTranslations from './translations/en.json';

const resources = {
  pl: {
    translation: plTranslations
  },
  en: {
    translation: enTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl', // default language
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
