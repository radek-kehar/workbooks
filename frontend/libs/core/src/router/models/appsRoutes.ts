import { AbstractRoute } from '@core/router/models/route';
import { AppEnum } from '@core/context/models/appName';

export class ShellRoute extends AbstractRoute {
  static readonly INDEX = new ShellRoute('/');

  constructor(url: string) {
    super(AppEnum.SHELL, url);
  }
}
