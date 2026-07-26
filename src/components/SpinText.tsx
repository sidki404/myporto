'use client';

import { useEffect, useRef, useState } from 'react';

type SpinTextProps = {
  text: string;
  className?: string;
  stagger?: number;
};

export function SpinText({ text, className = '', stagger = 25 }: SpinTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.3 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} style={{ perspective: '600px' }}>
      {text.split(' ').map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block motion-reduce:!translate-y-0 motion-reduce:!rotate-x-0 motion-reduce:!opacity-100 motion-reduce:!transition-none"
          style={{
            transform: visible ? 'rotateX(0deg) translateY(0)' : 'rotateX(-90deg) translateY(6px)',
            opacity: visible ? 1 : 0,
            transformOrigin: '50% 100%',
            transition: `transform .55s cubic-bezier(.22,1,.36,1) ${index * stagger}ms, opacity .4s ease ${index * stagger}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
