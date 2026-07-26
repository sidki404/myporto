'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type DecryptedTextProps = {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  characters?: string;
  className?: string;
  encryptedClassName?: string;
};

export function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  encryptedClassName = '',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);

  const availableChars = useMemo(() => characters.split(''), [characters]);

  const shuffleText = useCallback((revealed: Set<number>) => {
    return text.split('').map((char, index) => {
      if (char === ' ' || revealed.has(index)) return char;
      return availableChars[Math.floor(Math.random() * availableChars.length)];
    }).join('');
  }, [availableChars, text]);

  const nextIndex = useCallback((revealed: Set<number>) => {
    if (revealDirection === 'end') return text.length - 1 - revealed.size;
    if (revealDirection === 'center') {
      const middle = Math.floor(text.length / 2);
      const offset = Math.floor(revealed.size / 2);
      return revealed.size % 2 === 0 ? middle + offset : middle - offset - 1;
    }
    return revealed.size;
  }, [revealDirection, text.length]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealedIndices(new Set());
        setIsAnimating(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!isAnimating) return;

    let iteration = 0;
    const interval = window.setInterval(() => {
      setRevealedIndices((current) => {
        if (sequential && current.size < text.length) {
          const updated = new Set(current);
          updated.add(nextIndex(current));
          setDisplayText(shuffleText(updated));
          return updated;
        }

        iteration += 1;
        if (!sequential && iteration < maxIterations) {
          setDisplayText(shuffleText(current));
          return current;
        }

        window.clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        return new Set(Array.from({ length: text.length }, (_, index) => index));
      });
    }, speed);

    return () => window.clearInterval(interval);
  }, [isAnimating, maxIterations, nextIndex, sequential, shuffleText, speed, text]);

  return (
    <span ref={containerRef} className="inline-block whitespace-pre-wrap">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => (
          <span
            key={index}
            className={!isAnimating || revealedIndices.has(index) ? className : encryptedClassName}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}
