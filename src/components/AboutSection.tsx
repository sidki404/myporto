'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { SKILLS } from '@/data/portfolio';

const stats = [
  { value: '3+', label: 'Years Exp', id: 'Tahun Pengalaman' },
  { value: '10+', label: 'Projects', id: 'Proyek' },
  { value: '99%', label: 'Client Satisfaction', id: 'Kepuasan Klien' },
];

export function AboutSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';
  return (
    <section id="about" className="border-y border-slate-200 bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="section-label">{id ? 'Tentang' : 'About'}</p>
            <h2 className="section-title">{id ? 'Sekilas tentang saya' : 'A bit about me'}</h2>
            <p className="mb-7 text-xl font-semibold leading-8 text-slate-800">{id ? 'Developer yang bersemangat menciptakan solusi digital berdampak.' : 'A passionate developer with a focus on creating impactful digital solutions.'}</p>
            <div className="space-y-5 leading-7 text-slate-600">
              <p>{id ? 'Saya berasal dari Jawa Barat, Indonesia. Saya berpengalaman dalam pengembangan full stack, baik frontend maupun backend.' : 'I am from West Java, Indonesia. I have experience in full stack development, focusing on both frontend and backend systems.'}</p>
              <p>{id ? 'Saya menggunakan HTML, CSS, dan JavaScript untuk membangun antarmuka responsif, serta mengembangkan logika server dan integrasi basis data.' : 'I work with HTML, CSS, and JavaScript to build responsive user interfaces, and I also explore backend development, server-side logic, and database integration.'}</p>
              <p>{id ? 'Saya berpengalaman mengembangkan dan mengelola server SA-MP, termasuk scripting, desain sistem, dan optimasi. Saya terus belajar dan terbuka untuk kolaborasi maupun proyek lepas.' : 'I have experience in developing and managing SA-MP servers, including scripting, system design, and server optimization. I am continuously improving my skills and open to collaboration and freelance opportunities.'}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 self-start">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm">
                <strong className="block text-3xl font-black text-[#6D5DE6] sm:text-4xl">{stat.value}</strong>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-slate-500 sm:text-sm">{id ? stat.id : stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="section-label">{id ? 'Keahlian' : 'Expertise'}</p>
          <h2 className="section-title">{id ? 'Keahlian & Teknologi' : 'Skills & Technologies'}</h2>
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
        </div>
      </div>
    </section>
  );
}
