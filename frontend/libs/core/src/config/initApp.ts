import { AppInfo } from '@core/context/models/appName';
import { I18nOptions } from '@core/i18n/models/i18nOptions';
import { initI18n } from '@core/i18n/i18n';

export interface InitAppOptions {
  i18nOptions?: I18nOptions;
}

export function initApp(appInfo: AppInfo, options?: InitAppOptions): void {
  initI18n(options?.i18nOptions);
}
