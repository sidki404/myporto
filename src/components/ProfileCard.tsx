'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import './ProfileCard.css';

const clamp = (v: number, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number) =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

type ProfileCardProps = {
  avatarUrl: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  onContactClick?: () => void;
};

export function ProfileCard({
  avatarUrl,
  miniAvatarUrl,
  name = 'Sidki',
  title = 'Full Stack Developer',
  handle = 'sidki',
  status = 'Online',
  contactText = 'Kontak',
  onContactClick,
}: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  const tiltEngine = useMemo(() => {
    const state = {
      rafId: null as number | null,
      running: false,
      lastTs: 0,
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      initialUntil: 0,
    };
    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties: Record<string, string> = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`,
      };
      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = (ts: number) => {
      if (!state.running) return;
      if (state.lastTs === 0) state.lastTs = ts;
      const dt = (ts - state.lastTs) / 1000;
      state.lastTs = ts;

      const tau = ts < state.initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);
      state.currentX += (state.targetX - state.currentX) * k;
      state.currentY += (state.targetY - state.currentY) * k;
      setVarsFromXY(state.currentX, state.currentY);

      const stillFar =
        Math.abs(state.targetX - state.currentX) > 0.05 || Math.abs(state.targetY - state.currentY) > 0.05;
      if (stillFar) {
        state.rafId = requestAnimationFrame(step);
      } else {
        state.running = false;
        state.lastTs = 0;
        if (state.rafId) {
          cancelAnimationFrame(state.rafId);
          state.rafId = null;
        }
      }
    };

    const start = () => {
      if (state.running) return;
      state.running = true;
      state.lastTs = 0;
      state.rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number) {
        state.currentX = x;
        state.currentY = y;
        setVarsFromXY(state.currentX, state.currentY);
      },
      setTarget(x: number, y: number) {
        state.targetX = x;
        state.targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs: number) {
        state.initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: state.currentX, y: state.currentY, tx: state.targetX, ty: state.targetY };
      },
      cancel() {
        if (state.rafId) cancelAnimationFrame(state.rafId);
        state.rafId = null;
        state.running = false;
        state.lastTs = 0;
      },
    };
  }, []);

  const getOffsets = (evt: PointerEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    const onPointerMove = (event: PointerEvent) => {
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    };

    const onPointerEnter = (event: PointerEvent) => {
      shell.classList.add('active', 'entering');
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => shell.classList.remove('entering'), 180);
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    };

    const onPointerLeave = () => {
      tiltEngine.toCenter();
      const checkSettle = () => {
        const { x, y, tx, ty } = tiltEngine.getCurrent();
        if (Math.hypot(tx - x, ty - y) < 0.6) {
          shell.classList.remove('active');
          leaveRafRef.current = null;
        } else {
          leaveRafRef.current = requestAnimationFrame(checkSettle);
        }
      };
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      leaveRafRef.current = requestAnimationFrame(checkSettle);
    };

    shell.addEventListener('pointerenter', onPointerEnter);
    shell.addEventListener('pointermove', onPointerMove);
    shell.addEventListener('pointerleave', onPointerLeave);

    tiltEngine.setImmediate((shell.clientWidth || 0) - 70, 60);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(1200);

    return () => {
      shell.removeEventListener('pointerenter', onPointerEnter);
      shell.removeEventListener('pointermove', onPointerMove);
      shell.removeEventListener('pointerleave', onPointerLeave);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [tiltEngine]);

  return (
    <div ref={wrapRef} className="pc-card-wrapper">
      <div className="pc-behind" />
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card">
          <div className="pc-inside">
            <div className="pc-shine" />
            <div className="pc-glare" />
            <div className="pc-content pc-avatar-content">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="avatar" src={avatarUrl} alt={`${name} avatar`} loading="lazy" />
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={miniAvatarUrl || avatarUrl} alt="" loading="lazy" />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button className="pc-contact-btn" onClick={handleContactClick} type="button" aria-label={`Contact ${name}`}>
                  {contactText}
                </button>
              </div>
            </div>
            <div className="pc-content">
              <div className="pc-details">
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
