import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { BASE_LOCALE } from 'utils/consts';
import ru from '__locales/ru.json';
import en from '__locales/en.json';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

// TODO: check whether it works for non-existent translations
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: BASE_LOCALE,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
