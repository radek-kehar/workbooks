import { AppInfo } from '@core/context/models/appName';
import { useAppContext } from '@core/context/utils/appContext';

export function useAppInfo(): AppInfo {
  const context = useAppContext();
  return context.appInfo;
}
