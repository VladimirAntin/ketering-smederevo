'use client';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import srCommon from '@i18n/locales/sr/common';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      sr: {common: srCommon},
    },
    lng: 'sr',
    fallbackLng: 'sr',
    supportedLngs: ['sr'],
    missingKeyNoValueFallbackToKey: true,
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {escapeValue: false},
  });

export default i18n;
