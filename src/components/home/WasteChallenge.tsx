import { useTranslations } from 'next-intl';
import { TrendingDown, Scale, Recycle, BarChart3 } from 'lucide-react';

const items = [
  { key: 'coverage', Icon: TrendingDown },
  { key: 'enforcement', Icon: Scale },
  { key: 'recycling', Icon: Recycle },
  { key: 'data', Icon: BarChart3 },
] as const;

export default function WasteChallenge() {
  const t = useTranslations('home');

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t('challenge.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <div key={key} className="flex flex-col items-center text-center">
              <Icon size={32} className="mb-4 text-primary" />
              <p className="text-muted">{t(`challenge.${key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
