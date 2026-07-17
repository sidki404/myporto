'use client';

import Image from 'next/image';
import { dictionary } from '@/i18n';
import { usePreferences } from './Preferences';

export function WhatsAppButton() {
  const { locale } = usePreferences();
  const t = dictionary[locale].whatsapp;

  return (
    <a
      href={`https://wa.me/6282124101632?text=${encodeURIComponent(t.text)}`}
      target="_blank"
      rel="noreferrer"
      aria-label={t.label}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition hover:-translate-y-1"
    >
      <Image src="/icons/whatsapp.svg" alt="" width={29} height={29} />
    </a>
  );
}
