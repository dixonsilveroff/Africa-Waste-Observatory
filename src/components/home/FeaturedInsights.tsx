import { useTranslations } from 'next-intl';
import { DataPod } from '@/components/ui/DataPod';

const items = ['plastic', 'investment', 'policy', 'composting'] as const;

export default function FeaturedInsights() {
  const t = useTranslations('home');

  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Verified Intelligence
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('insights.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((key) => (
            <DataPod
              key={key}
              trend="positive"
              label={t(`insights.${key}.label`)}
              stat={t(`insights.${key}.stat`)}
              sublabel={t(`insights.${key}.title`)}
              className="bg-surface-container-lowest shadow-ambient hover:shadow-ambient-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
