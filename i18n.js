import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from './assets/images/en.svg';
import De from './assets/images/de.svg';

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

export const languages = [
  {
    id: 'en',
    title: 'app.language.en',
    avatar: En
  },
  {
    id: 'de',
    title: 'app.language.de',
    avatar: De
  }
];

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources,
    nsSeparator: ':::',
    keySeparator: '::'
  });


export default i18n;