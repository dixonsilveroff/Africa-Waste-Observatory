import { useTranslations } from 'next-intl';
import { Building2, HeartPulse, Recycle, Leaf, RefreshCw } from 'lucide-react';

const items = [
  { key: 'cities', Icon: Building2 },
  { key: 'health', Icon: HeartPulse },
  { key: 'recycling', Icon: Recycle },
  { key: 'pollution', Icon: Leaf },
  { key: 'circular', Icon: RefreshCw },
] as const;

export default function ImpactGoals() {
  const t = useTranslations('home');

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t('impact.title')}
        </h2>
        <div className="flex flex-col gap-4">
          {items.map(({ key, Icon }) => (
            <div key={key} className="flex items-center gap-4">
              <Icon size={28} className="shrink-0 text-primary" />
              <h4 className="text-lg font-medium">{t(`impact.${key}`)}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
