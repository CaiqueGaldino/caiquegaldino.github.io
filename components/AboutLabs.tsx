'use client';

import ScrollFloat from './ui/ScrollFloat';

export default function AboutLabs() {
  return (
    <section id="about-labs" className="py-32 px-4 md:px-8 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl">
        <ScrollFloat className="text-5xl md:text-7xl font-bold text-center mb-20 text-white tracking-wider">
          SOBRE
        </ScrollFloat>

        <div className="max-w-3xl mx-auto space-y-16 text-center">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
            A Kurupira Labs surgiu do interesse genuíno por tecnologia.
            De desmontar, testar, errar e tentar de novo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-red-900/50 transition-all">
              <p className="text-xl text-gray-300">Ideias viram<br /><span className="text-2xl font-semibold text-white">protótipos</span></p>
            </div>
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-red-900/50 transition-all">
              <p className="text-xl text-gray-300">Protótipos viram<br /><span className="text-2xl font-semibold text-white">projetos</span></p>
            </div>
            <div className="p-8 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-red-900/50 transition-all">
              <p className="text-xl text-gray-300">Projetos viram<br /><span className="text-2xl font-semibold text-white">aprendizado</span></p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              Sem pressa. Sem fórmula.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
