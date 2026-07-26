'use client';

import Image from 'next/image';
import { Check, MapPin, Send } from 'lucide-react';
import { FormEvent } from 'react';
import { usePreferences } from './Preferences';
import { ScrollReveal } from './ScrollReveal';

const phone = '6282124101632';
const benefits = { id: ['Kita sepakati kebutuhan utamanya lebih dulu','Estimasi dibahas sebelum pengerjaan dimulai','Perkembangan proyek bisa dicek bertahap'], en: ['We agree on the main requirements first','We discuss the estimate before work begins','You can review progress at each stage'] };

export function ContactSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';
  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      id ? 'Halo Sidki, saya punya proyek yang ingin didiskusikan.' : 'Hello Sidki, I have a project I would like to discuss.',
      '',
      `${id ? 'Nama' : 'Name'}: ${form.get('firstName')} ${form.get('lastName')}`,
      `Email: ${form.get('email')}`,
      `${id ? 'Proyek' : 'Project'}: ${form.get('message')}`,
    ].join('\n');

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-indigo-100 bg-indigo-50 px-5 py-24 text-slate-950 [content-visibility:auto] [contain-intrinsic-size:auto_800px] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#6D5DE6]">{id ? 'Kontak' : 'Contact'}</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{id ? 'Punya proyek untuk dibahas?' : 'Have a project in mind?'}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{id ? 'Kirim gambaran singkat tentang kebutuhan dan target waktunya. Saya akan membalas lewat WhatsApp.' : 'Send a short description of what you need and your target timeline. I will reply on WhatsApp.'}</p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <ScrollReveal className="rounded-3xl border border-indigo-200 bg-white p-7 shadow-sm" delay={80}>
            <p className="text-sm font-bold uppercase tracking-wider text-[#6D5DE6]">{id ? 'Cara memulai' : 'Getting started'}</p>
            <h3 className="mt-3 text-2xl font-black">{id ? 'Cukup kirim gambaran singkat.' : 'A short message is enough.'}</h3>
            <p className="mt-3 leading-7 text-slate-600">{id ? 'Jelaskan masalah yang ingin diselesaikan dan sertakan referensi jika ada. Detail teknisnya bisa kita bahas setelah itu.' : 'Describe the problem you want to solve and include a reference if you have one. We can discuss the technical details afterward.'}</p>
            <ul className="mt-7 space-y-4">
              {benefits[locale].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400"><Check size={14} /></span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-t border-indigo-100 pt-6">
              <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold transition hover:text-indigo-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]"><Image src="/icons/whatsapp.svg" alt="" width={21} height={21} /></span>
                +62 821-2410-1632
              </a>
              <div className="flex items-center gap-3 text-sm font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400"><MapPin size={20} /></span>
                {id ? 'Jawa Barat, Indonesia' : 'West Java, Indonesia'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <form onSubmit={sendToWhatsApp} className="rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-black">{id ? 'Tulis kebutuhan Anda' : 'Tell me what you need'}</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label><span className="mb-2 block text-sm font-bold">{id ? 'Nama Depan' : 'First Name'}</span><input name="firstName" required autoComplete="given-name" className="contact-input" /></label>
                <label><span className="mb-2 block text-sm font-bold">{id ? 'Nama Belakang' : 'Last Name'}</span><input name="lastName" required autoComplete="family-name" className="contact-input" /></label>
                <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">{id ? 'Alamat Email' : 'Email Address'}</span><input name="email" type="email" required autoComplete="email" className="contact-input" /></label>
                <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">{id ? 'Apa yang ingin dibuat?' : 'What would you like to build?'}</span><textarea name="message" required rows={5} placeholder={id ? 'Tulis kebutuhan, fitur utama, dan target waktunya.' : 'Add the main requirements, features, and target timeline.'} className="contact-input resize-none" /></label>
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6D5DE6] px-5 py-3.5 font-black text-white transition hover:bg-indigo-700">{id ? 'Kirim Pesan' : 'Send Message'} <Send size={18} /></button>
              <p className="mt-3 text-center text-xs text-slate-500">{id ? 'Pesan Anda akan dikirim melalui WhatsApp.' : 'Your message will be sent through WhatsApp.'}</p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
