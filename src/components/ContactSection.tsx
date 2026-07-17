'use client';

import Image from 'next/image';
import { Check, MapPin, Send } from 'lucide-react';
import { FormEvent } from 'react';
import { usePreferences } from './Preferences';

const phone = '6282124101632';
const benefits = { id: ['Konsultasi gratis tanpa komitmen','Respons cepat dalam 24 jam kerja','Dukungan penuh dari awal hingga selesai'], en: ['Free consultation with no commitment','Fast response within 24 business hours','Full support from start to finish'] };

export function ContactSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';
  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      id ? 'Halo Sidki, saya ingin mendiskusikan sebuah proyek.' : 'Hello Sidki, I would like to discuss a project.',
      '',
      `${id ? 'Nama' : 'Name'}: ${form.get('firstName')} ${form.get('lastName')}`,
      `Email: ${form.get('email')}`,
      `${id ? 'Proyek' : 'Project'}: ${form.get('message')}`,
    ].join('\n');

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contact" className="border-t border-indigo-100 bg-indigo-50 px-5 py-24 text-slate-950 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#6D5DE6]">{id ? 'Kontak' : 'Contact'}</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{id ? 'Mari Bekerja Sama' : `Let's Work Together`}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{id ? 'Punya proyek yang ingin diwujudkan? Saya siap membantu dari konsultasi awal hingga peluncuran.' : 'Have a project you want to bring to life? I am ready to help from initial consultation to launch.'}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl border border-indigo-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-[#6D5DE6]">{id ? 'Siap Membantu Anda' : 'Ready to Help You'}</p>
            <h3 className="mt-3 text-2xl font-black">{id ? 'Hubungi saya untuk konsultasi gratis.' : 'Contact me for a free consultation.'}</h3>
            <p className="mt-3 leading-7 text-slate-600">{id ? 'Saya akan merespons dalam 24 jam kerja.' : 'I will respond within 24 business hours.'}</p>
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
          </div>

          <form onSubmit={sendToWhatsApp} className="rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-black">{id ? 'Ceritakan proyek Anda' : 'Tell me about your project'}</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label><span className="mb-2 block text-sm font-bold">{id ? 'Nama Depan' : 'First Name'}</span><input name="firstName" required autoComplete="given-name" className="contact-input" /></label>
              <label><span className="mb-2 block text-sm font-bold">{id ? 'Nama Belakang' : 'Last Name'}</span><input name="lastName" required autoComplete="family-name" className="contact-input" /></label>
              <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">{id ? 'Alamat Email' : 'Email Address'}</span><input name="email" type="email" required autoComplete="email" className="contact-input" /></label>
              <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">{id ? 'Ceritakan proyek Anda' : 'Tell me about your project'}</span><textarea name="message" required rows={5} placeholder={id ? 'Ceritakan proyek Anda...' : 'Tell me about your project...'} className="contact-input resize-none" /></label>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6D5DE6] px-5 py-3.5 font-black text-white transition hover:bg-indigo-700">{id ? 'Kirim Pesan' : 'Send Message'} <Send size={18} /></button>
            <p className="mt-3 text-center text-xs text-slate-500">{id ? 'Pesan Anda akan dikirim melalui WhatsApp.' : 'Your message will be sent through WhatsApp.'}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
