import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {APP_INFO} from '@/appName';
import {App, getAppRoutes, ProfileRoute} from '@core';

// Pages
import IntroPage from '@/pages';

const router = createBrowserRouter([
  {
    element: <App appInfo={APP_INFO} />,
    children: [{ path: ProfileRoute.INDEX, element: <IntroPage /> }, ...getAppRoutes()],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
