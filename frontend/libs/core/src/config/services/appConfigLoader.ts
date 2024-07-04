import {AppConfig} from '@core/config/models/appConfig';

export abstract class AppConfigLoader {
  public abstract loadConfig(): AppConfig;
}
