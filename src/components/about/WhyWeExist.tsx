import { useTranslations } from 'next-intl';

export default function WhyWeExist() {
  const t = useTranslations('about');

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold">{t('why.title')}</h2>
        <p className="text-text-muted leading-relaxed">{t('why.text')}</p>
      </div>
    </section>
  );
}
