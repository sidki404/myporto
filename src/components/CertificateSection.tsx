'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { ExternalLink } from 'lucide-react';
import { dictionary } from '@/i18n';
import { ScrollReveal } from './ScrollReveal';

const certificateUrl = 'https://learn.wpucourse.id/certificate/MHCT38Y7';

export function CertificateSection() {
  const { locale } = usePreferences();
  const t = dictionary[locale].certificate;
  return (
    <section className="border-t border-slate-200 bg-white px-5 py-24 sm:px-8" aria-labelledby="certificate-title">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label">{t.label}</p>
        </ScrollReveal>
        <div className="grid items-center gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <ScrollReveal>
            <h2 id="certificate-title" className="section-title">{t.title}</h2>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-[#6D5DE6]"
            >
              {t.view} <ExternalLink size={17} />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t.aria}
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src="/wpucourse-certificate-MHCT38Y7.png"
                alt={t.alt}
                width={913}
                height={639}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="h-auto w-full rounded-2xl transition duration-500 group-hover:scale-[1.01]"
              />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
