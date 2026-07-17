'use client';
import Image from 'next/image';
import { usePreferences } from './Preferences';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';
import { DotGrid } from './DotGrid';

export function ProjectsSection() {
  const { locale } = usePreferences();
  const id = locale === 'id';
  const englishDescriptions = ['AI-powered image and video creation platform with a public showcase, service plans, protected studio, and affiliate program.', 'Unified API for AI image and video generation workflows, with Bearer authentication, generation status, and API key and usage management.'];
  return (
    <section id="projects" className="relative overflow-hidden border-y border-indigo-100 bg-[#f4f2ff] px-5 py-24 sm:px-8">
      <DotGrid />
      <div className="relative mx-auto max-w-6xl">
        <p className="section-label">{id ? 'Portofolio' : 'Showcase'}</p>
        <div className="max-w-3xl">
          <h2 className="section-title mb-0">{id ? 'Proyek pilihan' : 'Selected projects'}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{id ? 'Beberapa proyek yang pernah saya kerjakan, mulai dari platform web hingga layanan API.' : 'A selection of projects I have worked on, from web platforms to API services.'}</p>
        </div>
        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-slate-100 px-4">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 truncate rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">{new URL(project.url).hostname}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
                <Image src={project.image} alt={`${id ? 'Tangkapan layar halaman' : 'Page screenshot'} ${project.title}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-indigo-700">{project.type}</p>
                <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{id ? project.description : englishDescriptions[index]}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>)}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-slate-950 transition hover:text-[#6D5DE6]">
                  {id ? 'Lihat Langsung' : 'Live Preview'} <ExternalLink size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
