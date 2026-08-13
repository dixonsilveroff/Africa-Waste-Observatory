import { useTranslations } from 'next-intl';
import { BarChart3, Target, FlaskConical, Sprout } from 'lucide-react';

const items = [
  { key: 'data', Icon: BarChart3 },
  { key: 'policy', Icon: Target },
  { key: 'innovation', Icon: FlaskConical },
  { key: 'capacity', Icon: Sprout },
] as const;

export default function CoreObjectives() {
  const t = useTranslations('home');

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {t('objectives.title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <div
              key={key}
              className="rounded-lg bg-background p-6 transition hover:shadow-lg"
            >
              <Icon size={32} className="mb-4 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">
                {t(`objectives.${key}.title`)}
              </h4>
              <p className="text-sm text-muted">
                {t(`objectives.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
