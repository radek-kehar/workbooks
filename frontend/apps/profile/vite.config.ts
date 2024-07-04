// @ts-ignore
import {createViteConfig} from '../../config/createViteConfig';
import {version} from './package.json';
import {resolve} from 'path';

export default ({ mode }) =>
  createViteConfig({
    mode: mode,
    app: 'profile',
    base: '/profile',
    host: '127.0.0.1',
    port: 5174,
    rootDir: resolve(__dirname),
    version: version,
  });
