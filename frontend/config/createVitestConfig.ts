// @ts-ignore
import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import {loadAppEnv} from './createViteConfig';
import tsconfigPaths from 'vite-tsconfig-paths';

export interface CreateVitestConfigInit {
  rootDir: string;
  version: string;
}

export function createVitestConfig({ rootDir, version }: CreateVitestConfigInit) {
  return defineConfig({
    test: {
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      env: {
        ...loadAppEnv('development'),
        VITE_APP_NAME: 'unknown',
        VITE_APP_VERSION: version,
        VITE_APP_DIST: 'unknown',
      },
    },
    plugins: [
      react({
        babel: {
          parserOpts: {
            plugins: ['decorators-legacy', 'classProperties'],
          },
        },
      }),
      tsconfigPaths(),
    ],
  });
}
