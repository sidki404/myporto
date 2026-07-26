'use client';

import { useEffect, useRef } from 'react';

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

export function CountUp({ value, duration = 1400, className = '' }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        element.textContent = `${target}${suffix}`;
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(eased * target)}${suffix}`;
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, suffix, duration]);

  return (
    <strong ref={ref} className={className}>
      0{suffix}
    </strong>
  );
}
