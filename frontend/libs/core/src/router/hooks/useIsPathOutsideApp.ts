import { useAppInfo } from '@core/context/hooks/useAppInfo';
import { AppRoute } from '@core/router/models/route';

export interface IsPathOutsideAppFunction {
  (route: AppRoute): boolean;
}

export function useIsPathOutsideApp(): IsPathOutsideAppFunction {
  const currentApp = useAppInfo();
  return (route: AppRoute): boolean => !route.isApp(currentApp);
}
