import { useTranslations } from 'next-intl';
import { Surface } from '@/components/ui/Surface';

export default function WhyWeExist() {
  const t = useTranslations('about');

  return (
    <section className="bg-surface py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <Surface
          tier="low"
          elevation="ambient"
          rounded="lg"
          className="p-10 sm:p-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Context & Urgency
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-6">
            {t('why.title')}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant font-normal leading-relaxed max-w-3xl mx-auto">
            {t('why.text')}
          </p>
        </Surface>
      </div>
    </section>
  );
}
