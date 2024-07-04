import {BasePageLayout} from '@core/layout/components/BasePageLayout';
import {useTranslations} from '@core/i18n/i18n';

export function NotFoundPage() {
  const { t } = useTranslations('core');

  return <BasePageLayout>{t('page.notFoundPage.text')}</BasePageLayout>;
}
