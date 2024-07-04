// @ts-ignore
import {createVitestConfig} from '../../config/createVitestConfig';
import {version} from './package.json';
import {resolve} from 'path';

export default () =>
  createVitestConfig({
    rootDir: resolve(__dirname),
    version: version,
  });
