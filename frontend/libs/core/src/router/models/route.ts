import { AppInfo } from '@core/context/models/appName';
import { To } from 'react-router-dom';

export abstract class AbstractRoute {
  readonly appInfo: AppInfo;
  readonly path: string;
  constructor(appInfo: AppInfo, path: string) {
    this.appInfo = appInfo;
    this.path = appInfo.pathPrefix + path;
  }

  isApp(appInfo: AppInfo): boolean {
    return this.appInfo === appInfo;
  }

  createRoute<T extends object>(params?: T): AppRoute {
    let temp;
    if (params == null) {
      temp = this.path as string;
    } else {
      temp = Object.entries(params).reduce((path, [param, value]) => {
        return path.replace(`:${param}`, value);
      }, this.path) as string;
    }
    return new AppRoute(this, temp);
  }
}

export class AppRoute {
  private readonly route: AbstractRoute;
  readonly path: To;
  constructor(route: AbstractRoute, path: To) {
    this.route = route;
    this.path = path;
  }

  isApp(appInfo: AppInfo): boolean {
    return this.route.isApp(appInfo);
  }
}
