'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const certificateUrl = 'https://learn.wpucourse.id/certificate/MHCT38Y7';

export function CertificateSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';
  return (
    <section className="border-t border-indigo-100 bg-indigo-50/50 px-5 py-24 [content-visibility:auto] [contain-intrinsic-size:auto_700px] sm:px-8" aria-labelledby="certificate-title">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label">{id ? 'Sertifikasi' : 'Certification'}</p>
        </ScrollReveal>
        <div className="grid items-center gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <ScrollReveal>
            <h2 id="certificate-title" className="section-title">{id ? 'Sertifikat Laravel saya' : 'My Laravel certificate'}</h2>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-[#6D5DE6]"
            >
              {id ? 'Lihat sertifikat' : 'View certificate'} <ExternalLink size={17} />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={id ? 'Buka dan verifikasi sertifikat Laravel Sidki' : 'Open and verify Sidki’s Laravel certificate'}
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src="/wpucourse-certificate-MHCT38Y7.png"
                alt={id ? 'Sertifikat Laravel Sidki dari WPU Course' : 'Sidki’s Laravel certificate from WPU Course'}
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
