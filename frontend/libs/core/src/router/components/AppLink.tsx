import { Link, LinkProps, useNavigate } from 'react-router-dom';
import { ForwardedRef, forwardRef, MouseEvent } from 'react';
import { useIsPathOutsideApp } from '@core/router/hooks/useIsPathOutsideApp';
import { AppRoute } from '@core/router/models/route';

export interface AppLinkProps extends Omit<LinkProps, 'to'> {
  to: AppRoute;
}

export const AppLink = forwardRef(function AppLink(
  { to, reloadDocument, onClick, ...other }: AppLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  // TODO: Bude potreba stejne jako na Jendovi vlastni implementace? tj. const navigate = useJendaNavigate();
  const navigate = useNavigate();
  const isPathOutsideApp = useIsPathOutsideApp();
  reloadDocument = reloadDocument || isPathOutsideApp(to);

  function handleClick(event: MouseEvent<HTMLAnchorElement>): void {
    if (reloadDocument) {
      event.preventDefault();
      navigate(to.path, {
        relative: other.relative,
        replace: other.replace,
        state: other.state,
        preventScrollReset: other.preventScrollReset,
      });
    }
    onClick?.(event);
  }

  return <Link to={to.path} reloadDocument={reloadDocument} onClick={handleClick} {...other} ref={ref} />;
});
