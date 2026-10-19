'use client';

import { steps, principles } from './data';

export default function Process() {
  return (
    <section className="process" id="processo">
      <div className="section-head eyebrow">
        <h2>Como criamos</h2>
        <span>Filosofia & Método</span>
      </div>

      <div className="process__list">
        {steps.map((step) => (
          <div key={step.n} className="process__item">
            <span className="process__num">{step.n}</span>
            <div className="process__title">{step.title}</div>
            <p className="process__desc">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="process__principles">
        {principles.map((p, i) => (
          <span key={i} className="chip">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
