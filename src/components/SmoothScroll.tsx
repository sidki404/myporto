'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

const NAVBAR_OFFSET = -80;

export function SmoothScroll() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute('href') ?? '');
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: NAVBAR_OFFSET, duration: 1.1 });
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
