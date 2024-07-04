import {useAppInfo} from "@core/context/hooks/useAppInfo";

export interface IsPathOutsideAppFunction {
  (path: string): boolean;
}

export function useIsPathOutsideApp(): IsPathOutsideAppFunction {
  const currentAppInfo = useAppInfo();
  return (path: string): boolean => !path.startsWith(`${currentAppInfo.pathPrefix}/`);
}
