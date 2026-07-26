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
        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 120}>
            <article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-slate-100 px-4">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 truncate rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">{new URL(project.url).hostname}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
                <Image src={project.image} alt={`${t.screenshot} ${project.title}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-indigo-700">{project.type}</p>
                <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{t.descriptions[index]}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>)}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-slate-950 transition hover:text-[#6D5DE6]">
                  {t.open} <ExternalLink size={17} />
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
