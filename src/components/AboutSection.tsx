'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { SKILLS } from '@/data/portfolio';
import { dictionary } from '@/i18n';
import { CountUp } from './CountUp';
import { ProfileCard } from './ProfileCard';
import { ScrollReveal } from './ScrollReveal';

const statValues = ['3+', '10+', '99%'];

export function AboutSection() {
  const { locale } = usePreferences();
  const t = dictionary[locale].about;
  return (
    <section id="about" className="scroll-mt-20 border-y border-slate-200 bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <ScrollReveal className="hidden lg:block [&>div]:h-full">
            <ProfileCard
              avatarUrl="/profil.jpg"
              name="Sidki"
              title="Full Stack Developer"
              handle="sidki"
              status="Online"
              contactText={t.label === 'Tentang' ? 'Kontak' : 'Contact'}
              onContactClick={() => document.querySelector('#contact')?.scrollIntoView()}
            />
          </ScrollReveal>
          <div className="flex flex-col gap-10">
            <ScrollReveal delay={80}>
              <p className="section-label">{t.label}</p>
              <h2 className="section-title">{t.title}</h2>
              <p className="mb-7 text-xl font-semibold leading-8 text-slate-800">{t.lead}</p>
              <div className="space-y-5 leading-7 text-slate-600">
                {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </ScrollReveal>
            <ScrollReveal className="grid grid-cols-3 gap-3" delay={160}>
              {statValues.map((value, index) => (
                <div key={value} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm">
                  <CountUp value={value} className="block text-3xl font-black text-[#6D5DE6] sm:text-4xl" />
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-slate-500 sm:text-sm">{t.stats[index]}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal className="mt-20" delay={80}>
          <p className="section-label">{t.toolsLabel}</p>
          <h2 className="section-title">{t.toolsTitle}</h2>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SKILLS.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 50}>
                <div className="group flex h-full items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-indigo-300 hover:bg-white hover:shadow-lg">
                  <Image src={skill.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0 object-contain transition group-hover:scale-110" />
                  <span className="text-sm font-bold text-slate-800">{skill.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
