import {createContext, useContext} from 'react';
import {AppContext} from '@core/context/models/appContext';

const context = createContext<AppContext>(null!);

export const AppContextProvider = context.Provider;
export function useAppContext() {
  return useContext(context);
}
