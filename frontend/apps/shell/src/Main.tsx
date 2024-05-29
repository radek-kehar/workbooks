import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CS_CORE_TRANSLATIONS, initApp } from '@core';
import { Router } from '@/Router';
import { CS_SHELL_TRANSLATIONS } from '@/locales';
import { APP_INFO } from '@/appName';

initApp(APP_INFO, {
  i18nOptions: { resources: { cs: { ...CS_CORE_TRANSLATIONS, ...CS_SHELL_TRANSLATIONS } }, defaultNS: 'shell' },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
