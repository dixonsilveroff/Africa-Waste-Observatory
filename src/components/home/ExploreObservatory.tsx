import { useTranslations } from 'next-intl';
import { Globe, Recycle, Wrench, ClipboardList } from 'lucide-react';
import { Surface } from '@/components/ui/Surface';

const items = [
  { key: 'countries', Icon: Globe },
  { key: 'streams', Icon: Recycle },
  { key: 'tech', Icon: Wrench },
  { key: 'policies', Icon: ClipboardList },
] as const;

export default function ExploreObservatory() {
  const t = useTranslations('home');

  return (
    <section className="bg-surface py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Core Intelligence
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('explore.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <Surface
              key={key}
              tier="low"
              elevation="ambient"
              rounded="lg"
              className="p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-lg group cursor-pointer"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-moderate bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">
                {t(`explore.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant font-normal">
                {t(`explore.${key}.desc`)}
              </p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
