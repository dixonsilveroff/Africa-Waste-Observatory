import { useTranslations } from 'next-intl';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyHero() {
  const t = useTranslations('privacy');

  return (
    <section className="bg-surface-container-low py-20 px-6 border-b border-outline-variant/10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
          <ShieldCheck className="w-4 h-4" />
          <span>{t('hero.tag')}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-on-surface leading-tight">
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant/70">
          {t('hero.effectiveDate')}
        </p>
      </div>
    </section>
  );
}
