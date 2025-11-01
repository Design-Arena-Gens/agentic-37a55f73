"use client";
import { useState } from 'react';

export default function Toggle({ options, onChange }: { options: string[]; onChange?: (val: string) => void }) {
  const [active, setActive] = useState(options[0]);
  const handle = (val: string) => {
    setActive(val);
    onChange?.(val);
  };
  return (
    <div className="toggle" role="tablist" aria-label="Billing interval">
      {options.map(opt => (
        <button
          key={opt}
          role="tab"
          aria-selected={active === opt}
          className={active === opt ? 'active' : ''}
          onClick={() => handle(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
