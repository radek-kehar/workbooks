// @ts-ignore
import {createViteConfig} from '../../config/createViteConfig';
import {version} from './package.json';
import {resolve} from 'path';

export default ({ mode }) =>
  createViteConfig({
    mode: mode,
    app: 'shell',
    base: '',
    host: '127.0.0.1',
    port: 5173,
    rootDir: resolve(__dirname),
    version: version,
  });
