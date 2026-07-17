'use client';

import { useCallback, useEffect, useRef } from 'react';

export function DotGrid() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -1000, y: -1000 });

  const draw = useCallback(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.scale(dpr, dpr);

    const dark = document.documentElement.classList.contains('dark');
    const baseOpacity = dark ? 0.34 : 0.22;
    const cell = 30;
    for (let y = cell / 2; y < height; y += cell) {
      for (let x = cell / 2; x < width; x += cell) {
        const distance = Math.hypot(x - pointer.current.x, y - pointer.current.y);
        const strength = Math.max(0, 1 - distance / 170);
        context.beginPath();
        context.arc(x, y, 1.5 + strength * 3.5, 0, Math.PI * 2);
        context.fillStyle = `rgba(109,93,230,${strength ? baseOpacity + strength * (1 - baseOpacity) : baseOpacity})`;
        context.fill();
      }
    }
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointer.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      draw();
    };
    const onLeave = () => { pointer.current = { x: -1000, y: -1000 }; draw(); };
    const observer = new ResizeObserver(draw);
    observer.observe(wrap);
    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);
    draw();
    return () => {
      observer.disconnect();
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, [draw]);

  return <div ref={wrapRef} className="absolute inset-0" aria-hidden="true"><canvas ref={canvasRef} className="h-full w-full" /></div>;
}
