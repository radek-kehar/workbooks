import {useTranslations} from "@core/i18n/i18n";
import {AppLink} from "@core/router/components/AppLink";
import {ProfileRoute, ShellRoute} from "@core/router/models/appsRoutes";

export function AppMenu() {
    const { t } = useTranslations('core');

    return (
        <div>
            <AppLink to={ShellRoute.INDEX}>{t('menu.shell')}</AppLink>
            <AppLink to={ProfileRoute.INDEX}>{t('menu.profile')}</AppLink>
        </div>
    );
}
