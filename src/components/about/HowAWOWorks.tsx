import { useTranslations } from 'next-intl';
import { Database, GitMerge, BarChart3, Share2 } from 'lucide-react';

const cards = [
  { key: 'data', Icon: Database },
  { key: 'harmonization', Icon: GitMerge },
  { key: 'analysis', Icon: BarChart3 },
  { key: 'knowledge', Icon: Share2 },
] as const;

export default function HowAWOWorks() {
  const t = useTranslations('about');

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-bold">
          {t('how.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ key, Icon }) => (
            <div
              key={key}
              className="rounded-lg bg-background p-8 hover:shadow-ambient transition-shadow duration-200"
            >
              <Icon size={32} className="mb-4 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">
                {t(`how.${key}.title`)}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {t(`how.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
