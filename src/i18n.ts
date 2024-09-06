import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import es from './locales/sp/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        es: {
            translation: es,
        },
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});
