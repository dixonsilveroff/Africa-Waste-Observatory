import { useTranslations } from 'next-intl';

const items = ['item1', 'item2', 'item3', 'item4'] as const;

export default function OurSolution() {
  const t = useTranslations('home');

  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold">
          {t('solution.title')}
        </h2>
        <p className="mb-12 text-center text-muted">
          {t('solution.subtitle')}
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((key, index) => (
            <div key={key} className="flex flex-col">
              <span className="text-4xl font-bold text-primary/20">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-muted">{t(`solution.${key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
