import { BasePageLayout, useTranslations } from '@core';

export function IntroPage() {
  const { t } = useTranslations('shell');

  return <BasePageLayout>{t('app.title')}</BasePageLayout>;
}
