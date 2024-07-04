import {Link, LinkProps, useHref} from 'react-router-dom';
import {ForwardedRef, forwardRef, MouseEvent} from 'react';
import {useIsPathOutsideApp} from '@core/router/hooks/useIsPathOutsideApp';
import {useAppNavigate} from "@core/router/hooks/useAppNavigate";

export type AppLinkProps = LinkProps;

export const AppLink = forwardRef(function AppLink(
  { to, reloadDocument, onClick, ...other }: AppLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const navigate = useAppNavigate();
  const isPathOutsideApp = useIsPathOutsideApp();
  const href = useHref(to, { relative: other.relative });
  reloadDocument = reloadDocument || isPathOutsideApp(href);

  function handleClick(event: MouseEvent<HTMLAnchorElement>): void {
    if (reloadDocument) {
      event.preventDefault();
      navigate(to, {
        relative: other.relative,
        replace: other.replace,
        state: other.state,
        preventScrollReset: other.preventScrollReset,
      });
    }
    onClick?.(event);
  }

  return <Link to={to} reloadDocument={reloadDocument} onClick={handleClick} {...other} ref={ref} />;
});
