import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-on-surface text-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight text-surface">
              Africa Waste Observatory
            </h2>
            <p className="mt-4 text-sm text-surface/70 max-w-md leading-relaxed">
              Tracking, managing, and transforming waste across Africa through
              data-driven intelligence and collaborative research.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-surface/50">
              {t('footer.contact')}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-surface/80">
              <li>
                <a
                  href="mailto:hello@africawasteobservatory.org"
                  className="hover:text-surface transition-colors"
                >
                  hello@africawasteobservatory.org
                </a>
              </li>
              <li>
                The Africa Waste Observatory,
                <br />
                7 Paddock View, Dunstall Park, Wolverhampton WV60UU,
                <br />
                United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface/50">
          <span>&copy; {currentYear} Africa Waste Observatory. All rights reserved.</span>
          <span className="hover:text-surface/80 transition-colors cursor-pointer">{t('footer.privacy')}</span>
        </div>
      </div>
    </footer>
  );
}
