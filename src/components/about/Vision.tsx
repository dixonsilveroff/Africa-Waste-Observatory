import { useTranslations } from 'next-intl';

const items = ['item1', 'item2', 'item3', 'item4'] as const;

export default function Vision() {
  const t = useTranslations('about');

  return (
    <section className="bg-background py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold">{t('vision.title')}</h2>
        <p className="mb-6 text-text-muted leading-relaxed">
          {t('vision.intro')}
        </p>
        <ul className="mb-6 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start">
              <span className="mr-3 text-primary font-bold">&#10003;</span>
              <span className="text-text-muted">{t(`vision.${item}`)}</span>
            </li>
          ))}
        </ul>
        <p className="text-text-muted leading-relaxed">
          {t('vision.closing')}
        </p>
      </div>
    </section>
  );
}
