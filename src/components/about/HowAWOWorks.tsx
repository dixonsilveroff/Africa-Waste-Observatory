import { useTranslations } from 'next-intl';
import { Database, GitMerge, BarChart3, Share2 } from 'lucide-react';
import { Surface } from '@/components/ui/Surface';

const cards = [
  { key: 'data', Icon: Database },
  { key: 'harmonization', Icon: GitMerge },
  { key: 'analysis', Icon: BarChart3 },
  { key: 'knowledge', Icon: Share2 },
] as const;

export default function HowAWOWorks() {
  const t = useTranslations('about');

  return (
    <section className="bg-surface py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Operational Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            {t('how.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ key, Icon }) => (
            <Surface
              key={key}
              tier="low"
              elevation="ambient"
              rounded="lg"
              className="p-8 sm:p-10 transition-all hover:shadow-ambient-lg hover:-translate-y-1 group"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-moderate bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-3">
                {t(`how.${key}.title`)}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-on-surface-variant font-normal">
                {t(`how.${key}.desc`)}
              </p>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
