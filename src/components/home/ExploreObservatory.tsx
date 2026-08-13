import { useTranslations } from 'next-intl';
import { Globe, Recycle, Wrench, ClipboardList } from 'lucide-react';

const items = [
  { key: 'countries', Icon: Globe },
  { key: 'streams', Icon: Recycle },
  { key: 'tech', Icon: Wrench },
  { key: 'policies', Icon: ClipboardList },
] as const;

export default function ExploreObservatory() {
  const t = useTranslations('home');

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t('explore.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <div
              key={key}
              className="rounded-lg bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon size={32} className="mb-4 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">
                {t(`explore.${key}.title`)}
              </h4>
              <p className="text-sm text-muted">
                {t(`explore.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
