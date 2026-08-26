import { useTranslations } from 'next-intl';
import { TrendingDown, Scale, Recycle, BarChart3 } from 'lucide-react';
import { Surface } from '@/components/ui/Surface';

const items = [
  { key: 'coverage', Icon: TrendingDown },
  { key: 'enforcement', Icon: Scale },
  { key: 'recycling', Icon: Recycle },
  { key: 'data', Icon: BarChart3 },
] as const;

export default function WasteChallenge() {
  const t = useTranslations('home');

  return (
    <section className="bg-surface py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Critical Landscape
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('challenge.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <Surface
              key={key}
              tier="low"
              elevation="ambient"
              rounded="lg"
              className="flex flex-col p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-moderate bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant font-normal">
                {t(`challenge.${key}`)}
              </p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
