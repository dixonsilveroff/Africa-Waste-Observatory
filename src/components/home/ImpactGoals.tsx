import { useTranslations } from 'next-intl';
import { Building2, HeartPulse, Recycle, Leaf, RefreshCw } from 'lucide-react';
import { Surface } from '@/components/ui/Surface';

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
    <section className="bg-surface py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Long-term Vision
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('impact.title')}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map(({ key, Icon }) => (
            <Surface
              key={key}
              tier="low"
              elevation="none"
              rounded="lg"
              className="flex items-center gap-6 px-8 py-6 transition-all hover:bg-surface-container hover:shadow-ambient"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-moderate bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">
                {t(`impact.${key}`)}
              </h3>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
