import { useTranslations } from 'next-intl';

const items = ['item1', 'item2', 'item3', 'item4', 'item5'] as const;

export default function AboutObjectives() {
  const t = useTranslations('about');

  return (
    <section className="bg-background py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold">{t('objectives.title')}</h2>
        <ol className="space-y-4 list-none">
          {items.map((item, index) => (
            <li key={item} className="flex items-start">
              <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                {index + 1}
              </span>
              <span className="text-text-muted pt-1">
                {t(`objectives.${item}`)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
