import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold">Africa Waste Observatory</h2>
            <p className="mt-3 text-sm text-gray-300 max-w-md">
              Tracking, managing, and transforming waste across Africa through
              data-driven intelligence and collaborative research.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              {t('footer.contact')}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:info@africawasteobservatory.org"
                  className="hover:text-white transition-colors"
                >
                  info@africawasteobservatory.org
                </a>
              </li>
              <li>Alex Ekwueme Federal University, Ndufu-Alike, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>&copy; {currentYear} Africa Waste Observatory. All rights reserved.</span>
          <span>{t('footer.privacy')}</span>
        </div>
      </div>
    </footer>
  );
}
