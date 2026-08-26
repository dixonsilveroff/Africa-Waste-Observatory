import { useTranslations } from 'next-intl';

export default function AboutHero() {
  const t = useTranslations('about');

  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
          Institutional Mandate
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface leading-tight">
          {t('hero.title')}
        </h1>
      </div>
    </section>
  );
}
