import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  }
};

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources
  });


export default i18n;