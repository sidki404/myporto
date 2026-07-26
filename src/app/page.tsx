import { AboutSection } from '@/components/AboutSection';
import { CertificateSection } from '@/components/CertificateSection';
import { ContactFooter } from '@/components/ContactFooter';
import { ContactSection } from '@/components/ContactSection';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PreferencesProvider } from '@/components/Preferences';

export default function Home() {
  return (
    <PreferencesProvider>
      <main className="min-h-screen overflow-hidden bg-white text-slate-950">
        <Navbar />
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CertificateSection />
        <ContactSection />
        <ContactFooter />
        <WhatsAppButton />
      </main>
    </PreferencesProvider>
  );
}
