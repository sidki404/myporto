'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { ExternalLink } from 'lucide-react';

const certificateUrl = 'https://learn.wpucourse.id/certificate/MHCT38Y7';

export function CertificateSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';
  return (
    <section className="border-t border-indigo-100 bg-indigo-50/50 px-5 py-24 sm:px-8" aria-labelledby="certificate-title">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">{id ? 'Sertifikasi' : 'Certification'}</p>
        <div className="grid items-center gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 id="certificate-title" className="section-title">{id ? 'Sertifikasi Laravel' : 'Laravel certification'}</h2>
            <p className="max-w-lg text-lg leading-8 text-slate-600">
              {id ? 'Sertifikat kelulusan kursus Laravel dari WPU Course yang diterbitkan untuk Sidki.' : 'Certificate of completion for the Laravel course from WPU Course, issued to Sidki.'}
            </p>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-[#6D5DE6]"
            >
              {id ? 'Verifikasi sertifikat' : 'Verify certificate'} <ExternalLink size={17} />
            </a>
          </div>

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
        </div>
      </div>
    </section>
  );
}
