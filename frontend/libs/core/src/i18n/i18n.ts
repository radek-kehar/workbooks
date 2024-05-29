import i18next, { TOptions as I18nTOptions } from 'i18next';
import { I18nOptions } from '@core/i18n/models/i18nOptions';
import { FormatUtils } from '@core/utils/formatUtils';
import { useState } from 'react';
import { initReactI18next } from 'react-i18next';

const SUPPORTED_LANGUAGES = ['cs', 'en'];

const LANGUAGE = SUPPORTED_LANGUAGES[0];

export const i18nInstance = i18next;

i18nInstance.use(initReactI18next).init({
  supportedLngs: SUPPORTED_LANGUAGES,
  lng: LANGUAGE,
  defaultNS: 'common',
  fallbackNS: 'common',
  fallbackLng: 'cs',
  interpolation: {
    escapeValue: false,
    format: (value, format) => {
      if (format === 'formatDate') {
        return FormatUtils.formatDate(value);
      }
      return value;
    },
  },
});

export function initI18n(options?: I18nOptions) {
  if (options?.resources) {
    for (const supportedlanguage of SUPPORTED_LANGUAGES) {
      if (options.resources[supportedlanguage]) {
        for (const namespace in options.resources[supportedlanguage]) {
          if (i18nInstance.hasResourceBundle(supportedlanguage, namespace)) {
            i18nInstance.addResources(supportedlanguage, namespace, options.resources[supportedlanguage][namespace]);
            continue;
          }
          i18nInstance.addResourceBundle(supportedlanguage, namespace, options.resources[supportedlanguage][namespace]);
        }
      }
    }
  }
  if (options?.defaultNS) {
    i18nInstance.setDefaultNamespace(options.defaultNS);
  }
}

export function useTranslations(ns: string) {
  const [namespace] = useState(ns);

  const t = (key: string | string[], options: I18nTOptions = {}): string => {
    if (options.ns == null) {
      options.ns = namespace;
    }
    return i18nInstance.t(key, options).toString();
  };

  return { t };
}
