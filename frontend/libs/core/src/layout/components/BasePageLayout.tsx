import { ReactNode } from 'react';

export interface BasePageLayoutProps {
  children?: ReactNode;
}

export function BasePageLayout({ children }: BasePageLayoutProps) {
  return <div>{children}</div>;
}
