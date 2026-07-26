'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';
import { dictionary } from '@/i18n';
import { ScrollReveal } from './ScrollReveal';

export function ProjectsSection() {
  const { locale } = usePreferences();
  const t = dictionary[locale].projects;
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden border-y border-slate-200 bg-slate-50 px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-[#6D5DE6]/[0.07] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="max-w-3xl">
          <p className="section-label">{t.label}</p>
          <h2 className="section-title mb-0">{t.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{t.intro}</p>
        </ScrollReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-10 items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 truncate rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-500 shadow-sm">{new URL(project.url).hostname}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
                <Image src={project.image} alt={`${t.screenshot} ${project.title}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-indigo-700">{project.type}</p>
                <h3 className="text-xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t.descriptions[index]}</p>
                <div className="mt-3 flex-1 border-l-2 border-indigo-300 pl-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-indigo-700">{t.goalLabel}</p>
                  <p className="mt-1 text-[13px] leading-5 text-slate-600">{t.goals[index]}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">{item}</span>)}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-[#6D5DE6]">
                  {t.open} <ExternalLink size={15} />
                </a>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
