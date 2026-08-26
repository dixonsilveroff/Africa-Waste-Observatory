import { useTranslations } from 'next-intl';
import { Globe, TrendingUp, Target, ClipboardList } from 'lucide-react';
import { Surface } from '@/components/ui/Surface';

const items = [
  { key: 'item1', Icon: Globe },
  { key: 'item2', Icon: TrendingUp },
  { key: 'item3', Icon: Target },
  { key: 'item4', Icon: ClipboardList },
] as const;

export default function WhatWeDeliver() {
  const t = useTranslations('home');

  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Impact & Outputs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('deliver.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <Surface
              key={key}
              tier="lowest"
              elevation="ambient"
              rounded="lg"
              className="flex flex-col p-8 transition-all hover:shadow-ambient-lg"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-moderate bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">
                {t(`deliver.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant font-normal">
                {t(`deliver.${key}.desc`)}
              </p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
