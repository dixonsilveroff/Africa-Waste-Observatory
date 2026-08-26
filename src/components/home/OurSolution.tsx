import { useTranslations } from 'next-intl';
import { Surface } from '@/components/ui/Surface';

const items = ['item1', 'item2', 'item3', 'item4'] as const;

export default function OurSolution() {
  const t = useTranslations('home');

  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            A Continental Response
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('solution.title')}
          </h2>
          <p className="mt-4 text-base text-on-surface-variant">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((key, index) => (
            <Surface
              key={key}
              tier="lowest"
              elevation="ambient"
              rounded="lg"
              className="flex flex-col p-8 transition-all hover:shadow-ambient-lg"
            >
              <span className="font-display text-4xl font-bold text-primary/25 mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed text-on-surface font-normal">
                {t(`solution.${key}`)}
              </p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
