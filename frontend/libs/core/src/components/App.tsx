import {I18nextProvider} from 'react-i18next';
import {AppInfo} from '@core/context/models/appName';
import {AppContextProvider} from '@core/context/utils/appContext';
import {ToastProvider} from '@core/components/ToastProvider';
import {i18nInstance} from '@core/i18n/i18n';
import {Outlet} from 'react-router';

export interface AppProps {
  appInfo: AppInfo;
}

export function App({ appInfo }: AppProps) {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <AppContextProvider value={{ appInfo: appInfo }}>
        <ToastProvider />
        <Outlet />
      </AppContextProvider>
    </I18nextProvider>
  );
}
