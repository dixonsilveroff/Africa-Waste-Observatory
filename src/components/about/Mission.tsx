import { useTranslations } from 'next-intl';
import { Surface } from '@/components/ui/Surface';
import { CheckCircle2 } from 'lucide-react';

const items = ['item1', 'item2', 'item3', 'item4'] as const;

export default function Mission() {
  const t = useTranslations('about');

  return (
    <section className="bg-surface-container-low py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <Surface
          tier="lowest"
          elevation="ambient"
          rounded="lg"
          className="p-10 sm:p-14"
        >
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Our Purpose
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-4">
              {t('mission.title')}
            </h2>
            <p className="text-base text-on-surface-variant font-normal leading-relaxed">
              {t('mission.intro')}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-4 rounded-moderate bg-surface-container-low/60 transition-colors hover:bg-surface-container-low"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <span className="text-sm sm:text-base text-on-surface font-normal leading-relaxed">
                  {t(`mission.${item}`)}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-on-surface-variant font-normal leading-relaxed italic">
            {t('mission.closing')}
          </p>
        </Surface>
      </div>
    </section>
  );
}
