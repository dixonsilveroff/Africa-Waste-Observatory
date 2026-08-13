import { useTranslations } from 'next-intl';
import { Globe, TrendingUp, Target, ClipboardList } from 'lucide-react';

const items = [
  { key: 'item1', Icon: Globe },
  { key: 'item2', Icon: TrendingUp },
  { key: 'item3', Icon: Target },
  { key: 'item4', Icon: ClipboardList },
] as const;

export default function WhatWeDeliver() {
  const t = useTranslations('home');

  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t('deliver.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <div key={key} className="flex flex-col items-center text-center">
              <Icon size={32} className="mb-4 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">
                {t(`deliver.${key}.title`)}
              </h4>
              <p className="text-sm text-muted">
                {t(`deliver.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
