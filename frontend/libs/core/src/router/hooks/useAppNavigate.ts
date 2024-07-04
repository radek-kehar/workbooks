import {useNavigate} from 'react-router-dom';
import {To} from '@remix-run/router';
import {NavigateOptions} from 'react-router/dist/lib/context';
import {NavigateFunction} from 'react-router/dist/lib/hooks';
import {useIsPathOutsideApp} from './useIsPathOutsideApp';

export type AppNavigateFunction = NavigateFunction;

export function useAppNavigate(): AppNavigateFunction {
    const reactRouterNavigate = useNavigate();
    const isPathOutsideApp = useIsPathOutsideApp();
    return (to: To | number, options?: NavigateOptions): void => {
        if (typeof to === 'number') {
            reactRouterNavigate(to);
            return;
        }
        const path = typeof to === 'string' ? to : `${to.pathname ?? ''}${to.search ?? ''}${to.hash ?? ''}`;
        if (!isPathOutsideApp(path)) {
            reactRouterNavigate(to, options);
            return;
        }
        // TODO: add support for options.relative, if needed
        if (options?.replace) {
            window.location.replace(path);
        } else {
            window.location.assign(path);
        }
    };
}
