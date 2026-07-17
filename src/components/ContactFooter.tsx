'use client';

import { dictionary } from '@/i18n';
import { usePreferences } from './Preferences';

export function ContactFooter() {
  const { locale } = usePreferences();
  const t = dictionary[locale];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 py-7">
        <p className="text-sm text-slate-400">© 2026 Sidki</p>
        <nav className="ml-auto flex flex-wrap justify-end gap-x-6 gap-y-2" aria-label={t.footer.nav}>
          {t.nav.links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-slate-400 hover:text-indigo-400">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
