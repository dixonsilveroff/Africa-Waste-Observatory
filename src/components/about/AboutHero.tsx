import { useTranslations } from 'next-intl';

export default function AboutHero() {
  const t = useTranslations('about');

  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold">{t('hero.title')}</h1>
      </div>
    </section>
  );
}
