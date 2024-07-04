import {BasePageLayout, useTranslations} from '@core';
import {AppMenu} from "@core/components/AppMenu";

export function IntroPage() {
  const { t } = useTranslations('shell');

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
