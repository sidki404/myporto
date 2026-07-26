'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { SKILLS } from '@/data/portfolio';
import { ScrollReveal } from './ScrollReveal';

const stats = [
  { value: '3+', label: 'Years Exp', id: 'Tahun Pengalaman' },
  { value: '10+', label: 'Projects', id: 'Proyek' },
  { value: '99%', label: 'Client Satisfaction', id: 'Kepuasan Klien' },
];

export function AboutSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';
  return (
    <section id="about" className="scroll-mt-20 border-y border-slate-200 bg-white px-5 py-24 [content-visibility:auto] [contain-intrinsic-size:auto_900px] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <ScrollReveal>
            <p className="section-label">{id ? 'Tentang' : 'About'}</p>
            <h2 className="section-title">{id ? 'Saya mengerjakan aplikasi web, API, dan server' : 'I work on web applications, APIs, and servers'}</h2>
            <p className="mb-7 text-xl font-semibold leading-8 text-slate-800">{id ? 'Laravel, Go, dan MySQL adalah teknologi yang paling sering saya pakai.' : 'Laravel, Go, and MySQL are the tools I use most often.'}</p>
            <div className="space-y-5 leading-7 text-slate-600">
              <p>{id ? 'Saya tinggal di Jawa Barat. Biasanya saya mengerjakan dashboard, integrasi API, autentikasi, pengelolaan data, dan fitur untuk kebutuhan operasional.' : 'I live in West Java. I usually work on dashboards, API integrations, authentication, data management, and internal tools.'}</p>
              <p>{id ? 'Di MotionGen dan MotionAPI, saya menangani halaman publik sekaligus backend yang memproses request, status, dan akses pengguna.' : 'For MotionGen and MotionAPI, I handle both the public pages and the backend that processes requests, statuses, and user access.'}</p>
              <p>{id ? 'Saya juga pernah membuat script dan mengelola server SA-MP. Pengalaman itu membuat saya terbiasa mengurus performa dan konfigurasi saat server ramai.' : 'I have also written scripts and managed SA-MP servers. That experience taught me to pay attention to performance and configuration when a server gets busy.'}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="grid grid-cols-3 gap-3 self-start" delay={100}>
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm">
                <strong className="block text-3xl font-black text-[#6D5DE6] sm:text-4xl">{stat.value}</strong>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-slate-500 sm:text-sm">{id ? stat.id : stat.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20" delay={80}>
          <p className="section-label">{id ? 'Keahlian' : 'Expertise'}</p>
          <h2 className="section-title">{id ? 'Teknologi yang saya pakai' : 'Tools I work with'}</h2>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Image src={skill.icon} alt="" width={26} height={26} />
                </span>
                <span className="text-sm font-bold text-slate-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
