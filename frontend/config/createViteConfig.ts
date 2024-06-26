import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';
// @ts-ignore
import {createViteProxy} from './createViteProxy';
import tsconfigPaths from 'vite-tsconfig-paths';

export const ROOT_URL = 'workbooks/';

// todo: provazat s frontend/libs/core/src/context/models/appName.ts?
export type APPS_TYPE = 'shell';

export interface CreateViteConfigInit {
  mode: string;
  app: APPS_TYPE;
  base: string;
  host: string;
  port: number;
  rootDir: string;
  version: string;
}

export function loadAppEnv(mode: string): Record<string, string> {
  const appsFolder = resolve(process.cwd(), '../');
  const appFolder = process.cwd();
  // If you are trying to access env vars outside your app source code (such as inside vite.config.js), then you have to use loadEnv()
  const appsEnv = loadEnv(mode, appsFolder, ['VITE', 'NODE']);
  const appEnv = loadEnv(mode, appFolder, ['VITE', 'NODE']);
  return Object.assign(appEnv, appsEnv);
}

export function createViteConfig({ mode, app, base, host, port, rootDir, version }: CreateViteConfigInit) {
  const dist = `${mode}-${app}-${version}`;
  process.env = Object.assign(process.env, loadAppEnv(mode));
  process.env['VITE_APP_NAME'] = app;
  process.env['VITE_APP_VERSION'] = version;
  process.env['VITE_APP_DIST'] = dist;
  process.env['VITE_APP_ROOT_URL'] = ROOT_URL;

  return defineConfig({
    base: `/${ROOT_URL}${base}`,
    server: {
      host: host,
      port: port,
      proxy: createViteProxy({app}),
    },
    plugins: [
      react(),
      tsconfigPaths(),
    ],
  });
}
