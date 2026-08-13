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
      className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-[#1E293B] focus:border-[#047E37] focus:outline-none focus:ring-1 focus:ring-[#047E37]"
      aria-label="Select language"
    >
      {locales.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
