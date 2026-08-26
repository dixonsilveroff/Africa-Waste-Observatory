import { useTranslations } from 'next-intl';
import { Surface } from '@/components/ui/Surface';

const items = ['item1', 'item2', 'item3', 'item4', 'item5'] as const;

export default function AboutObjectives() {
  const t = useTranslations('about');

  return (
    <section className="bg-surface-container-low py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Core Pillars
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('objectives.title')}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <Surface
              key={item}
              tier="lowest"
              elevation="ambient"
              rounded="lg"
              className="flex items-center gap-6 px-8 py-5 transition-all hover:shadow-ambient-lg hover:-translate-y-0.5"
            >
              <span className="font-display text-2xl font-bold text-primary/30 shrink-0 w-8">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm sm:text-base text-on-surface font-normal leading-relaxed">
                {t(`objectives.${item}`)}
              </p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
