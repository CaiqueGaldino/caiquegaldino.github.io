'use client';

import ScrollFloat from './ui/ScrollFloat';
import { Lightbulb, Target, Minimize2, BookOpen, TrendingUp } from 'lucide-react';

const principles = [
  {
    icon: Lightbulb,
    text: 'Curiosidade primeiro'
  },
  {
    icon: Target,
    text: 'Problemas reais como ponto de partida'
  },
  {
    icon: Minimize2,
    text: 'Simplicidade acima de tudo'
  },
  {
    icon: BookOpen,
    text: 'Aprender fazendo'
  },
  {
    icon: TrendingUp,
    text: 'Evoluir um pouco todo dia'
  }
];

export default function HowICreate() {
  return (
    <section id="how-i-create" className="py-32 px-4 md:px-8 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-6xl">
        <ScrollFloat className="text-5xl md:text-7xl font-bold text-center mb-20 text-white tracking-wider">
          COMO EU CRIO
        </ScrollFloat>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-10 hover:border-red-900/50 transition-all hover:scale-[1.02] hover:bg-black/40"
              >
                <Icon className="w-12 h-12 text-gray-400 mb-6 mx-auto group-hover:text-red-500 transition-colors" strokeWidth={1.5} />
                <p className="text-lg text-gray-300 text-center">
                  {principle.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Nem tudo vira produto. Mas tudo ensina alguma coisa.
          </p>
        </div>
      </div>
    </section>
  );
}
