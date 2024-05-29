import { Resource } from 'i18next';

export interface I18nOptions {
  /** Used to add translations from individual projects */
  resources?: Resource;
  /** Default namespace for i18nInstance and useTranslation hook */
  defaultNS?: string;
}
