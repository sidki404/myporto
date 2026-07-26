'use client';

import Image from 'next/image';
import { Check, MapPin, Send } from 'lucide-react';
import { FormEvent } from 'react';
import { dictionary } from '@/i18n';
import { usePreferences } from './Preferences';
import { ScrollReveal } from './ScrollReveal';

const phone = '6282124101632';
export function ContactSection() {
  const { locale } = usePreferences();
  const t = dictionary[locale].contact;
  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      t.message,
      '',
      `${t.name}: ${form.get('firstName')} ${form.get('lastName')}`,
      `Email: ${form.get('email')}`,
      `${t.project}: ${form.get('message')}`,
    ].join('\n');

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-slate-200 bg-slate-50 px-5 py-24 text-slate-950 sm:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute -bottom-40 right-[-10%] h-96 w-[42rem] rounded-full bg-[#6D5DE6]/[0.08] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#6D5DE6]">{t.label}</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{t.intro}</p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <ScrollReveal className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm" delay={80}>
            <p className="text-sm font-bold uppercase tracking-wider text-[#6D5DE6]">{t.beforeLabel}</p>
            <h3 className="mt-3 text-2xl font-black">{t.beforeTitle}</h3>
            <p className="mt-3 leading-7 text-slate-600">{t.beforeText}</p>
            <ul className="mt-7 space-y-4">
              {t.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400"><Check size={14} /></span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
              <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold transition hover:text-indigo-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]"><Image src="/icons/whatsapp.svg" alt="" width={21} height={21} /></span>
                +62 821-2410-1632
              </a>
              <div className="flex items-center gap-3 text-sm font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400"><MapPin size={20} /></span>
                {t.location}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <form onSubmit={sendToWhatsApp} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-black">{t.formTitle}</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label><span className="mb-2 block text-sm font-bold">{t.firstName}</span><input name="firstName" required autoComplete="given-name" className="contact-input" /></label>
                <label><span className="mb-2 block text-sm font-bold">{t.lastName}</span><input name="lastName" required autoComplete="family-name" className="contact-input" /></label>
                <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">{t.email}</span><input name="email" type="email" required autoComplete="email" className="contact-input" /></label>
                <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">{t.idea}</span><textarea name="message" required rows={5} placeholder={t.placeholder} className="contact-input resize-none" /></label>
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6D5DE6] px-5 py-3.5 font-black text-white transition hover:bg-indigo-700">{t.submit} <Send size={18} /></button>
              <p className="mt-3 text-center text-xs text-slate-500">{t.note}</p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
