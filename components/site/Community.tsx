'use client';

import { useState } from 'react';
import { EMAIL, betaTestersInfo } from './data';

export default function Community() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="community" id="comunidade">
      <div className="section-head eyebrow">
        <h2>(Comunidade Dev)</h2>
        <span>Apoio Mútuo</span>
      </div>

      <div className="community__box">
        <div>
          <span className="eyebrow eyebrow--accent">{betaTestersInfo.badge}</span>
          <h3 className="community__title">
            Apoio Mútuo
            <em>entre Desenvolvedores</em>
          </h3>
        </div>

        <div>
          <p className="community__text">
            {betaTestersInfo.description}
          </p>

          <div className="community__actions">
            <button
              type="button"
              onClick={copyEmail}
              className="pill pill--fill"
              data-cursor="Copiar"
            >
              {copied ? '✓ E-mail copiado!' : 'Copiar e-mail'}
            </button>

            <a
              href={`mailto:${EMAIL}?subject=Quero participar do grupo de testadores Google Play`}
              className="pill"
              data-cursor="Enviar"
            >
              Enviar e-mail para participar →
            </a>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <div className={`toast ${copied ? 'is-show' : ''}`} role="status">
        E-mail {EMAIL} copiado para a área de transferência!
      </div>
    </section>
  );
}
