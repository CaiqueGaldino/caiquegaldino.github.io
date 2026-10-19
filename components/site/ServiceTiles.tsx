'use client';

import { services } from './data';

export default function ServiceTiles() {
  return (
    <section className="tiles" id="servicos">
      <div className="section-head eyebrow">
        <h2 className="tiles__label">O que fazemos</h2>
        <a href="#projetos" className="tiles__link" data-cursor="Ver">
          Ver todos os projetos →
        </a>
      </div>

      <div className="tiles__grid">
        {services.map((item) => (
          <a
            key={item.n}
            href={item.href}
            className="tiles__tile"
            data-cursor="Abrir"
          >
            <div className="tiles__fill" />
            <div className="tiles__content">
              <div className="tiles__header">
                <span>{item.n}</span>
                <span className="tiles__arrow" aria-hidden="true">
                  →
                </span>
              </div>
              <div className="tiles__title">
                <span>{item.title}</span>
              </div>
              <p className="tiles__description">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
