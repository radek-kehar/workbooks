import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { APP_INFO } from '@/appName';
import { getAppRoutes, App, ShellRoute } from '@core';

// Pages
import IntroPage from '@/pages';

const router = createBrowserRouter([
  {
    element: <App appInfo={APP_INFO} />,
    children: [{ path: ShellRoute.INDEX.path, element: <IntroPage /> }, ...getAppRoutes()],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
