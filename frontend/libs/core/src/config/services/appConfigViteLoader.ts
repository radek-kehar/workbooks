/// <reference types="vite/client" />

import { AppConfigLoader } from '@core/config/services/appConfigLoader';
import { AppConfig } from '@core/config/models/appConfig';

export class AppConfigViteLoader extends AppConfigLoader {
  loadConfig(): AppConfig {
    return {
      app: {
        name: this.string(import.meta.env.VITE_APP_NAME),
        version: this.string(import.meta.env.VITE_APP_VERSION),
      },
      toggles: {
        //
      },
    };
  }

  private string(value: any): string;
  private string(value: any, defaultValue: string): string;
  private string(value: any, defaultValue: null): string | null;
  private string(value: any, defaultValue?: string | null): string | null {
    if (value == null) {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw new Error('Config value must be defined');
    }
    if (typeof value !== 'string') {
      throw new Error('String config value must be string');
    }
    return value;
  }
  private number(value: any): number;
  private number(value: any, defaultValue: number): number;
  private number(value: any, defaultValue: null): number | null;
  private number(value: any, defaultValue?: number | null): number | null {
    if (value == null) {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw new Error('Config value must be defined');
    }
    const numberValue = parseFloat(value);
    if (!Number.isFinite(numberValue)) {
      throw new Error('Number config value must be valid number');
    }
    return numberValue;
  }
  private boolean(value: any): boolean;
  private boolean(value: any, defaultValue: boolean): boolean;
  private boolean(value: any, defaultValue: null): boolean | null;
  private boolean(value: any, defaultValue?: boolean | null): boolean | null {
    if (value == null) {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw new Error('Config value must be defined');
    }
    if (!['true', 'false'].includes(value)) {
      throw new Error('Boolean config value must be "true" of "false"');
    }
    return value === 'true';
  }
}
