import {AppMenu, BasePageLayout, useTranslations} from '@core';

export function IntroPage() {
  const { t } = useTranslations('profile');

  return (
      <BasePageLayout>
        <div>
          {t('app.title')}
        </div>
        <div>
          <AppMenu/>
        </div>
      </BasePageLayout>
  );
}

