import { TrendingUp, Target, PieChart } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-black min-h-screen flex flex-col justify-center">
      <div className="w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white tracking-wider">
          NOSSOS PROJETOS
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
          Conheça as soluções que desenvolvemos para tornar a vida dos usuários mais simples e organizada
        </p>

        <div className="w-full">
          <div className="bg-black rounded-2xl p-8 md:p-12 border border-green-500/30 hover:border-green-500/50 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/icone-farol-capital.png"
                  alt="Farol Capital"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Farol Capital</h3>
                <p className="text-green-400 font-semibold">Controle Financeiro Pessoal</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Este é o Farol Capital, criado para ajudar você a organizar suas finanças de maneira 
              prática e inteligente. Com ele, você pode registrar seus gastos e ganhos, acompanhar 
              o fluxo do seu dinheiro e ter uma visão clara da sua situação financeira. Tudo em um 
              só lugar, fácil de usar e sempre acessível.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Além de registrar e acompanhar suas movimentações, o app oferece projeções futuras 
              com base nos seus hábitos financeiros. Assim, você consegue planejar melhor, definir 
              metas e tomar decisões mais seguras para alcançar seus objetivos. É como ter um 
              consultor financeiro no bolso, pronto para orientar você.
            </p>

            {/* Screenshots do app */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <Image
                  src="/images/tela-farol-capital-1.jpeg"
                  alt="Tela 1 - Farol Capital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <Image
                  src="/images/tela-farol-capital-2.jpeg"
                  alt="Tela 2 - Farol Capital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <Image
                  src="/images/tela-farol-capital-3.jpeg"
                  alt="Tela 3 - Farol Capital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <Image
                  src="/images/tela-farol-capital-4.jpeg"
                  alt="Tela 4 - Farol Capital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <Image
                  src="/images/tela-farol-capital-5.jpeg"
                  alt="Tela 5 - Farol Capital"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="font-bold text-white mb-2 text-lg tracking-wide">ACOMPANHAMENTO</h4>
                <p className="text-sm text-gray-400">
                  Registre e monitore todas suas movimentações financeiras
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                <PieChart className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="font-bold text-white mb-2 text-lg tracking-wide">VISUALIZAÇÕES</h4>
                <p className="text-sm text-gray-400">
                  Tenha uma visão clara da sua situação financeira
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
                <Target className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="font-bold text-white mb-2 text-lg tracking-wide">PROJEÇÕES</h4>
                <p className="text-sm text-gray-400">
                  Planeje o futuro com base nos seus hábitos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
