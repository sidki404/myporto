'use client';

import { Star } from 'lucide-react';
import { dictionary } from '@/i18n';
import { usePreferences } from './Preferences';
import { ScrollReveal } from './ScrollReveal';
import { SpinText } from './SpinText';

export function TestimonialsSection() {
  const { locale } = usePreferences();
  const t = dictionary[locale].testimonials;

  return (
    <section className="bg-white px-5 py-24 sm:px-8" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-3xl">
          <p className="section-label">{t.label}</p>
          <h2 id="testimonials-title" className="section-title">{t.title}</h2>
          <p className="max-w-2xl text-lg text-slate-600">{t.intro}</p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <ScrollReveal key={item.name} delay={(index % 3) * 70}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-amber-400" aria-label={t.rating}>
                  {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} fill="currentColor" aria-hidden="true" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  <SpinText text={`"${item.quote}"`} />
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4">
                  <strong className="block text-sm text-slate-950">{item.name}</strong>
                  <span className="mt-1 block text-xs font-semibold text-[#6D5DE6]">{item.project}</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
