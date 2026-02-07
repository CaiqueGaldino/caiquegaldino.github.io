'use client';

import ScrollFloat from './ui/ScrollFloat';

export default function WhatMovesMe() {
  return (
    <section id="what-moves" className="py-32 px-4 md:px-8 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl text-center">
        <ScrollFloat className="text-5xl md:text-7xl font-bold mb-20 text-white tracking-wider">
          O QUE ME MOVE
        </ScrollFloat>

        <div className="max-w-3xl mx-auto space-y-12">
          <ul className="space-y-6 text-left">
            <li className="flex items-start gap-4 text-xl md:text-2xl text-gray-300 leading-relaxed">
              <span className="text-red-500 mt-2">•</span>
              <span>Gostar de tecnologia</span>
            </li>
            <li className="flex items-start gap-4 text-xl md:text-2xl text-gray-300 leading-relaxed">
              <span className="text-red-500 mt-2">•</span>
              <span>Gostar de resolver problemas</span>
            </li>
            <li className="flex items-start gap-4 text-xl md:text-2xl text-gray-300 leading-relaxed">
              <span className="text-red-500 mt-2">•</span>
              <span>Gostar do processo mais do que do resultado final</span>
            </li>
          </ul>

          <div className="pt-12 border-t border-gray-800">
            <p className="text-2xl md:text-3xl text-gray-400 font-light italic">
              Criar é uma forma de entender o mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
