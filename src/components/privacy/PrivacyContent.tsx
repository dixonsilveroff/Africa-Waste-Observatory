import { useTranslations } from 'next-intl';
import { Surface } from '@/components/ui/Surface';
import {
  ExternalLink,
  Shield,
  Database,
  Cookie,
  Activity,
  Layers,
  Clock,
  HeartHandshake,
  KeyRound,
  Share2,
  RefreshCw,
  Mail,
  MapPin,
  Building,
} from 'lucide-react';

export default function PrivacyContent() {
  const t = useTranslations('privacy');

  const analyticsItems = t.raw('collection.analytics.items') as string[];
  const localStorageItems = t.raw('collection.localStorage.items') as string[];
  const notCollectedItems = t.raw('collection.notCollected.items') as string[];
  const useItems = t.raw('use.items') as string[];
  const thirdPartyServices = t.raw('thirdParty.services') as Array<{
    name: string;
    purpose: string;
    url: string;
  }>;
  const rightItems = t.raw('rights.items') as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <div className="bg-surface py-16 px-6">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* 1. Introduction */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Shield className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('intro.title')}
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed text-base">
            {t('intro.p1')}
          </p>
          <p className="text-on-surface-variant leading-relaxed text-base">
            {t('intro.p2')}
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Database className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('collection.title')}
            </h2>
          </div>

          <div className="space-y-6 pl-0 sm:pl-10">
            {/* 2.1 Analytics Data */}
            <Surface tier="lowest" rounded="lg" className="p-6 sm:p-8 space-y-4 border border-outline-variant/20">
              <h3 className="font-display text-lg font-semibold text-on-surface">
                {t('collection.analytics.title')}
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {t('collection.analytics.desc')}
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-on-surface-variant list-disc pl-5">
                {analyticsItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-on-surface-variant/80 italic pt-2">
                {t('collection.analytics.footer')}
              </p>
            </Surface>

            {/* 2.2 Local Storage */}
            <Surface tier="lowest" rounded="lg" className="p-6 sm:p-8 space-y-4 border border-outline-variant/20">
              <h3 className="font-display text-lg font-semibold text-on-surface">
                {t('collection.localStorage.title')}
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {t('collection.localStorage.desc')}
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-on-surface-variant list-disc pl-5">
                {localStorageItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Surface>

            {/* 2.3 Information We Do Not Collect */}
            <Surface tier="lowest" rounded="lg" className="p-6 sm:p-8 space-y-4 border border-outline-variant/20">
              <h3 className="font-display text-lg font-semibold text-on-surface">
                {t('collection.notCollected.title')}
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {t('collection.notCollected.desc')}
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-on-surface-variant list-disc pl-5">
                {notCollectedItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Surface>
          </div>
        </section>

        {/* 3. Cookies */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Cookie className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('cookies.title')}
            </h2>
          </div>
          <div className="space-y-3 pl-0 sm:pl-10 text-on-surface-variant text-base leading-relaxed">
            <p>{t('cookies.p1')}</p>
            <p>{t('cookies.p2')}</p>
          </div>
        </section>

        {/* 4. How We Use Information */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Activity className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('use.title')}
            </h2>
          </div>
          <div className="space-y-4 pl-0 sm:pl-10 text-on-surface-variant text-base leading-relaxed">
            <p>{t('use.desc')}</p>
            <ul className="space-y-2 list-disc pl-5">
              {useItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="font-medium text-on-surface">{t('use.closing')}</p>
          </div>
        </section>

        {/* 5. Third-Party Services */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Layers className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('thirdParty.title')}
            </h2>
          </div>
          <div className="space-y-4 pl-0 sm:pl-10">
            <p className="text-on-surface-variant text-base leading-relaxed">
              {t('thirdParty.desc')}
            </p>
            <div className="overflow-x-auto rounded-xl border border-outline-variant/20">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-low text-xs font-semibold uppercase tracking-wider text-on-surface">
                  <tr>
                    <th scope="col" className="px-6 py-3.5">
                      {t('thirdParty.table.service')}
                    </th>
                    <th scope="col" className="px-6 py-3.5">
                      {t('thirdParty.table.purpose')}
                    </th>
                    <th scope="col" className="px-6 py-3.5">
                      {t('thirdParty.table.policy')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 bg-surface">
                  {thirdPartyServices.map((service, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-surface-container-lowest/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-on-surface whitespace-nowrap">
                        {service.name}
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">
                        {service.purpose}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                        >
                          <span>{t('thirdParty.table.viewPolicy')}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. Data Retention */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Clock className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('retention.title')}
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 text-on-surface-variant text-base leading-relaxed">
            <p>{t('retention.p')}</p>
          </div>
        </section>

        {/* 7. Children's Privacy */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <HeartHandshake className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('children.title')}
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 text-on-surface-variant text-base leading-relaxed">
            <p>{t('children.p')}</p>
          </div>
        </section>

        {/* 8. Your Rights */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <KeyRound className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('rights.title')}
            </h2>
          </div>
          <div className="space-y-4 pl-0 sm:pl-10">
            <p className="text-on-surface-variant text-base leading-relaxed">
              {t('rights.desc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rightItems.map((item, idx) => (
                <Surface
                  key={idx}
                  tier="lowest"
                  rounded="md"
                  className="p-5 border border-outline-variant/20 space-y-1"
                >
                  <h3 className="font-semibold text-sm sm:text-base text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </Surface>
              ))}
            </div>
          </div>
        </section>

        {/* 9. External Links */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Share2 className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('links.title')}
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 text-on-surface-variant text-base leading-relaxed">
            <p>{t('links.p')}</p>
          </div>
        </section>

        {/* 10. Changes to This Policy */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <RefreshCw className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('changes.title')}
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 text-on-surface-variant text-base leading-relaxed">
            <p>{t('changes.p')}</p>
          </div>
        </section>

        {/* 11. Contact Us */}
        <section className="space-y-4 pt-4 border-t border-outline-variant/20">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-primary/10 text-primary">
              <Mail className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-on-surface">
              {t('contact.title')}
            </h2>
          </div>
          <div className="space-y-4 pl-0 sm:pl-10">
            <p className="text-on-surface-variant text-base leading-relaxed">
              {t('contact.desc')}
            </p>
            <Surface
              tier="low"
              rounded="lg"
              className="p-6 sm:p-8 max-w-lg border border-outline-variant/20 space-y-3"
            >
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-bold text-on-surface">
                    {t('contact.org')}
                  </h3>
                  <div className="mt-1 flex items-start gap-1.5 text-sm text-on-surface-variant">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      {t('contact.line1')}
                      <br />
                      {t('contact.country')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-outline-variant/10 flex items-center gap-2 text-sm">
                <span className="text-on-surface-variant font-medium">
                  {t('contact.emailLabel')}
                </span>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-primary hover:underline font-semibold"
                >
                  {t('contact.email')}
                </a>
              </div>
            </Surface>
          </div>
        </section>
      </div>
    </div>
  );
}
