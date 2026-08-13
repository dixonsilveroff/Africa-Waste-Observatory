'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('common');

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#1E293B] hover:text-[#047E37] transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-lg border-t">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
            <Link
              href="/about"
              onClick={closeMenu}
              className={cn(
                'text-sm font-medium py-2 transition-colors',
                pathname === '/about'
                  ? 'text-[#047E37]'
                  : 'text-[#1E293B] hover:text-[#047E37]'
              )}
            >
              {t('nav.about')}
            </Link>
            <div className="pt-2 border-t">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
