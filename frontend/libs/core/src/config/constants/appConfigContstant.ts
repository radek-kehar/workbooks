import {AppConfigLoader} from '@core/config/services/appConfigLoader';
import {AppConfigViteLoader} from '@core/config/services/appConfigViteLoader';

const loader: AppConfigLoader = new AppConfigViteLoader();

export const APP_CONFIG = loader.loadConfig();
