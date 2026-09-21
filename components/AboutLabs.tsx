'use client';

const steps = [
  { n: '01', title: 'Ideias',      body: 'Tudo começa com uma pergunta genuína ou uma dor que precisa ser resolvida.' },
  { n: '02', title: 'Protótipos', body: 'Transformamos perguntas em código. Rápido, imperfeito, funcional.' },
  { n: '03', title: 'Aprendizado', body: 'Cada projeto — lançado ou não — deixa uma lição. É o combustível do próximo.' },
];

const principles = [
  'Curiosidade antes de tudo',
  'Simplicidade acima de complexidade',
  'Aprender fazendo',
  'Evoluir um pouco todo dia',
];

export default function AboutLabs() {
  return (
    <section id="about-labs" className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] text-primary font-semibold mb-4">
          SOBRE
        </p>
        <div className="fire-line mb-16" />

        <p className="text-2xl md:text-4xl font-light text-foreground/90 leading-relaxed max-w-2xl mb-20">
          A Kurupira Labs surgiu do{' '}
          <em className="not-italic text-primary font-medium">interesse genuíno</em>{' '}
          por tecnologia. De desmontar, errar e tentar de novo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-20 border-y border-white/10">
          {steps.map(({ n, title, body }) => (
            <div
              key={n}
              className="bg-background p-10 md:p-12 hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-xs tracking-[0.15em] text-primary/50 block mb-5">
                {n}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
          {principles.map((p, i) => (
            <div
              key={i}
              className={`py-6 flex items-center gap-4 border-b border-white/5 ${
                i % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:border-l md:border-white/5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-70" />
              <span className="text-sm text-foreground/50">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
