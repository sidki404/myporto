'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { dictionary } from '@/i18n';
import { DecryptedText } from './DecryptedText';
import Lanyard from './Lanyard';
import { usePreferences } from './Preferences';

export function Hero() {
  const { locale } = usePreferences();
  const t = dictionary[locale].hero;
  const [role, setRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setRole((x) => (x + 1) % t.roles.length), 2400);
    return () => clearInterval(timer);
  }, [t.roles.length]);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
      <div className="hero-grid absolute inset-0 z-0" />
      <div className="absolute inset-y-0 right-0 z-20 hidden h-screen w-[48rem] lg:block">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-5 font-mono text-sm font-bold uppercase tracking-[.2em] text-indigo-700">{t.hello}</p>
        <h1 className="mb-5 text-7xl font-black tracking-[-.07em] text-slate-950 sm:text-8xl md:text-9xl">
          <DecryptedText text="Sidki" sequential speed={85} encryptedClassName="text-indigo-500" />
        </h1>
        <div className="mb-7 flex min-h-12 items-center text-2xl font-bold text-slate-700 sm:text-4xl">
          <DecryptedText
            key={t.roles[role]}
            text={t.roles[role]}
            speed={45}
            maxIterations={12}
            encryptedClassName="text-indigo-500"
          />
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{t.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#6D5DE6] px-6 py-3.5 font-bold text-white">
            {t.projects}
            <ArrowDownRight size={18} />
          </a>
          <a href="#contact" className="secondary-button pointer-events-auto inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800">
            {t.contact}
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
