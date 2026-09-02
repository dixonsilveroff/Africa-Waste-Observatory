import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PrivacyHero from '@/components/privacy/PrivacyHero';
import PrivacyContent from '@/components/privacy/PrivacyContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
