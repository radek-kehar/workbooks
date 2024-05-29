import { NotFoundPage } from '@core/pages/NotFoundPage';
import { RouteObject } from 'react-router';

export function getAppRoutes(): RouteObject[] {
  return [
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];
}
