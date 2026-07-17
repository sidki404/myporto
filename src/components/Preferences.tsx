'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { isLocale, type Locale } from '@/i18n';

type Theme = 'light' | 'dark';
type Preferences = { locale: Locale; theme: Theme; setLocale: (locale: Locale) => void; toggleTheme: () => void };

const Context = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('id');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const timer = window.setTimeout(() => setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light'));
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = localStorage.getItem('locale');
      if (!isLocale(stored)) return;
      setLocaleState(stored);
      document.documentElement.lang = stored;
    });
    return () => window.clearTimeout(timer);
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    document.documentElement.lang = next;
    localStorage.setItem('locale', next);
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  }

  return <Context value={{ locale, theme, setLocale, toggleTheme }}>{children}</Context>;
}

export function usePreferences() {
  const value = useContext(Context);
  if (!value) throw new Error('usePreferences must be used inside PreferencesProvider');
  return value;
}
