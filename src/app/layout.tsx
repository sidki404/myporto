import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AgentationDevTools } from '@/components/AgentationDevTools';
import { SmoothScroll } from '@/components/SmoothScroll';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sidki | Full Stack Developer',
  description: 'Full Stack Developer from West Java who builds web applications, APIs, and backend systems.',
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body suppressHydrationWarning>
        <SmoothScroll />
        {children}
        <AgentationDevTools />
      </body>
    </html>
  );
}
