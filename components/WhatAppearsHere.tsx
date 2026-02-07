'use client';

import ScrollFloat from './ui/ScrollFloat';

export default function WhatAppearsHere() {
  return (
    <section id="what-appears" className="py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollFloat className="text-5xl md:text-7xl font-bold mb-20 text-white tracking-wider">
          O QUE APARECE AQUI
        </ScrollFloat>

        <div className="max-w-3xl mx-auto space-y-16">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
            Soluções digitais, experimentos e ideias em diferentes estágios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-l-2 border-gray-700">
              <p className="text-lg text-gray-400">Algumas nascem para crescer</p>
            </div>
            <div className="p-6 border-l-2 border-gray-700">
              <p className="text-lg text-gray-400">Outras só para responder uma pergunta</p>
            </div>
            <div className="p-6 border-l-2 border-gray-700">
              <p className="text-lg text-gray-300 font-medium">Todas fazem parte do caminho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
