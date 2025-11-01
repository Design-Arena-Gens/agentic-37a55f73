"use client";
import { useRef } from 'react';

export default function Carousel({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const scrollByAmount = (dir: number) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.9), behavior: 'smooth' });
  };

  return (
    <div className="card card-pad" role="region" aria-label={ariaLabel}>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div className="row">
          <button className="btn secondary" onClick={() => scrollByAmount(-1)} aria-label="Previous">
            ?
          </button>
          <button className="btn secondary" onClick={() => scrollByAmount(1)} aria-label="Next">
            ?
          </button>
        </div>
      </div>
      <div
        ref={stripRef}
        className="mt-2"
        style={{ display: 'grid', gridAutoFlow: 'column', gap: '16px', overflowX: 'auto', scrollSnapType: 'x mandatory' }}
      >
        {children}
      </div>
    </div>
  );
}
