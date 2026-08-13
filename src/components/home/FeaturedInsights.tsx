import { useTranslations } from 'next-intl';

const items = ['plastic', 'investment', 'policy', 'composting'] as const;

export default function FeaturedInsights() {
  const t = useTranslations('home');

  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t('insights.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((key) => (
            <div
              key={key}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h4 className="mb-3 text-sm font-medium text-muted">
                {t(`insights.${key}.title`)}
              </h4>
              <p className="text-4xl font-bold text-primary">
                {t(`insights.${key}.stat`)}
              </p>
              <p className="mt-2 text-sm">
                {t(`insights.${key}.label`)}
              </p>
              <p className="mt-3 text-xs text-muted">
                {t(`insights.${key}.source`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
