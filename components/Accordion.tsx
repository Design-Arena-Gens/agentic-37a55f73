"use client";

import { useId } from 'react';

type Item = { title: string; content: string };

type Props = { items: Item[] };

export default function Accordion({ items }: Props) {
  return (
    <div className="grid" role="list">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

function AccordionItem({ title, content }: Item) {
  const id = useId();
  return (
    <details className="card card-pad" role="listitem">
      <summary className="row" aria-controls={id}>
        <span className="section-sub" style={{ fontWeight: 600 }}>{title}</span>
      </summary>
      <div id={id} className="mt-2" aria-live="polite">
        <p className="muted">{content}</p>
      </div>
    </details>
  );
}
