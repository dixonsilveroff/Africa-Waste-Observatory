'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

const locales = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as 'en' | 'fr';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="rounded-moderate bg-surface-container-low px-3 py-1.5 text-xs font-medium text-on-surface border-0 focus:outline-none focus:border-l-2 focus:border-l-primary transition-all cursor-pointer"
      aria-label="Select language"
    >
      {locales.map(({ code, label }) => (
        <option key={code} value={code} className="bg-surface text-on-surface">
          {label}
        </option>
      ))}
    </select>
  );
}
