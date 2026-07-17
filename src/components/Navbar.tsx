'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { dictionary } from '@/i18n';
import { usePreferences } from './Preferences';

export function Navbar() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const [open, setOpen] = useState(false);
  const t = dictionary[locale].nav;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-8" aria-label={t.label}>
        <a href="#home" onClick={() => setOpen(false)} className="text-xl font-black tracking-tight text-slate-950">Sidki<span className="text-[#6D5DE6]">.</span></a>
        <div className="flex items-center gap-1 sm:gap-5">
          {t.links.map(([label, href]) => <a key={href} href={href} className="hidden text-sm font-semibold text-slate-600 transition hover:text-[#6D5DE6] md:block">{label}</a>)}
          <div className="flex rounded-full border border-slate-300 bg-slate-50 p-0.5 text-xs font-bold" aria-label="Language">
            {(['id', 'en'] as const).map((item) => <button key={item} onClick={() => setLocale(item)} aria-pressed={locale === item} className={`rounded-full px-2 py-1.5 uppercase ${locale === item ? 'bg-[#6D5DE6] text-white' : 'text-slate-600'}`}>{item}</button>)}
          </div>
          <button onClick={toggleTheme} className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 bg-slate-50 text-slate-700" aria-label={theme === 'dark' ? t.light : t.dark}>{theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}</button>
          <a href="#contact" className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-[#6D5DE6] md:block">{t.contact}</a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 bg-slate-50 text-slate-700 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t.toggle}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {t.links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-[#6D5DE6]">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#6D5DE6]">
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
