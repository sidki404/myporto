'use client';

import { Moon, Sun } from 'lucide-react';
import { usePreferences } from './Preferences';

const copy = {
  id: { links: [['Tentang', '#about'], ['Proyek', '#projects'], ['Kontak', '#contact']], contact: 'Hubungi', nav: 'Navigasi utama', light: 'Gunakan tema terang', dark: 'Gunakan tema gelap' },
  en: { links: [['About', '#about'], ['Projects', '#projects'], ['Contact', '#contact']], contact: 'Contact', nav: 'Main navigation', light: 'Use light theme', dark: 'Use dark theme' },
} as const;

export function Navbar() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const t = copy[locale];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-8" aria-label={t.nav}>
        <a href="#home" className="text-xl font-black tracking-tight text-slate-950">Sidki<span className="text-[#6D5DE6]">.</span></a>
        <div className="flex items-center gap-1 sm:gap-5">
          {t.links.map(([label, href]) => <a key={href} href={href} className="hidden text-sm font-semibold text-slate-600 transition hover:text-[#6D5DE6] md:block">{label}</a>)}
          <div className="flex rounded-full border border-slate-300 bg-slate-50 p-0.5 text-xs font-bold" aria-label="Language">
            {(['id', 'en'] as const).map((item) => <button key={item} onClick={() => setLocale(item)} aria-pressed={locale === item} className={`rounded-full px-2 py-1.5 uppercase ${locale === item ? 'bg-[#6D5DE6] text-white' : 'text-slate-600'}`}>{item}</button>)}
          </div>
          <button onClick={toggleTheme} className="grid h-8 w-8 place-items-center rounded-full border border-slate-300 bg-slate-50 text-slate-700" aria-label={theme === 'dark' ? t.light : t.dark}>{theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}</button>
          <a href="#contact" className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-[#6D5DE6] sm:block">{t.contact}</a>
        </div>
      </nav>
    </header>
  );
}
