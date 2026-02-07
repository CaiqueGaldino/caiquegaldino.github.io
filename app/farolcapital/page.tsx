import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assetPrefix';

export default function FarolCapital() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-gray-200 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-transparent to-green-900/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
              <Image
                src={getAssetPath('/images/icone-farol-capital.png')}
                alt="Farol Capital"
                width={140}
                height={140}
                className="rounded-3xl relative z-10 shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Farol Capital
          </h1>
          <p className="text-2xl md:text-3xl text-green-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Clareza financeira para quem quer ir mais longe
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.kurupiralabs.farol_capital&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-full font-bold text-xl transition-all shadow-2xl shadow-green-500/30 hover:scale-105"
          >
            Baixar na Google Play
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Problem & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-5xl mb-6">🌊</div>
            <h2 className="text-3xl font-bold text-white mb-6">O problema</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>A maioria das pessoas controla o dinheiro olhando apenas para o agora. Anota gastos, confere o saldo e segue em frente — sem saber o que vem depois.</p>
              <div className="pt-4 border-t border-zinc-800">
                <p className="font-bold text-white text-xl">O resultado?</p>
                <p className="text-red-400 font-semibold">Insegurança, decisões no escuro e a sensação constante de que o dinheiro nunca sobra.</p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="text-5xl mb-6">💡</div>
            <h2 className="text-3xl font-bold text-white mb-6">Nossa visão</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>Acreditamos que cuidar das finanças não é apenas registrar números. É entender decisões, antecipar cenários e enxergar o futuro com clareza.</p>
              <div className="pt-4">
                <p className="text-green-400 font-bold text-xl">Quem vê o que vem pela frente, decide melhor hoje.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Product Section */}
        <div className="mb-20 bg-gradient-to-br from-green-950/30 via-zinc-950 to-zinc-950 rounded-3xl p-12 border border-green-500/30 shadow-2xl">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🧭</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">O que é o Farol Capital</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              O Farol Capital é um aplicativo de controle financeiro pessoal focado em <span className="text-green-400 font-bold">projeção</span>.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              Ele mostra como suas receitas e despesas atuais impactam seu saldo futuro, ajudando você a tomar decisões com mais consciência e menos ansiedade.
            </p>
          </div>

          {/* How it Works - Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-4">📝</div>
              <p className="text-white font-semibold text-lg">Registre suas receitas e despesas</p>
            </div>
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <p className="text-white font-semibold text-lg">Visualize seu saldo atual e futuro</p>
            </div>
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-4">💡</div>
              <p className="text-white font-semibold text-lg">Entenda o impacto real de cada decisão</p>
            </div>
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <p className="text-white font-semibold text-lg">Planeje com base no futuro</p>
            </div>
          </div>
        </div>

        {/* Differential Section - Spotlight */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-3xl p-12 border border-green-500/40 shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-6">🚦</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Nosso diferencial</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-2xl text-gray-300 leading-relaxed">
                  Aqui, o controle financeiro não é reativo.
                </p>
                <p className="text-3xl font-bold text-green-400">
                  Ele é preventivo.
                </p>
                <div className="pt-8 border-t border-zinc-800 mt-8">
                  <p className="text-2xl font-bold text-white leading-relaxed">
                    O Farol Capital não mostra apenas onde você esteve.
                  </p>
                  <p className="text-3xl font-bold text-green-400 mt-4">
                    Ele mostra para onde você está indo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800">
            <div className="text-5xl mb-6">🌱</div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossa promessa</h3>
            <div className="space-y-3 text-gray-400 leading-relaxed">
              <p>Não prometemos riqueza instantânea.</p>
              <p className="text-green-400 font-semibold text-lg">Clareza, direção e consciência financeira.</p>
              <div className="mt-6 space-y-2 text-white font-medium">
                <p>✓ Menos improviso</p>
                <p>✓ Mais previsibilidade</p>
                <p>✓ Mais tranquilidade</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800">
            <div className="text-5xl mb-6">🔐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Transparência</h3>
            <div className="space-y-3 text-gray-400 leading-relaxed">
              <p>✓ Sem termos complicados</p>
              <p>✓ Sem gráficos confusos</p>
              <p>✓ Sem pressão para investir</p>
              <p className="text-green-400 font-semibold text-lg mt-6">
                Apenas informação clara para decisões melhores.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Para quem é</h3>
            <div className="space-y-3 text-gray-400 leading-relaxed">
              <p>✓ Organizar a vida financeira</p>
              <p>✓ Parar de viver no improviso</p>
              <p>✓ Saber se pode gastar</p>
              <p>✓ Planejar o futuro com segurança</p>
            </div>
          </div>
        </div>

        {/* Why Farol - Full Width Card */}
        <div className="mb-20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-3xl p-12 border border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🌟</div>
            <h2 className="text-4xl font-bold text-white mb-8">Por que "Farol"</h2>
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
              <p>Porque um farol não empurra o navio.</p>
              <p className="text-3xl font-bold text-green-400">Ele ilumina o caminho.</p>
              <div className="pt-8 border-t border-zinc-800 mt-8 space-y-4">
                <p className="text-2xl text-white">O Farol Capital existe para isso:</p>
                <p className="text-gray-400">mostrar onde você está</p>
                <p className="text-green-400 font-semibold text-2xl">e ajudar a enxergar para onde ir.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-500/20 blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-green-950/50 via-zinc-950 to-zinc-950 border border-green-500/50 rounded-3xl p-16 text-center shadow-2xl">
            <div className="text-6xl mb-6">🧭</div>
            <h2 className="text-5xl font-bold text-white mb-6">Farol Capital</h2>
            <p className="text-2xl text-green-400 mb-10">Iluminando decisões financeiras</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.kurupiralabs.farol_capital&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-full font-bold text-xl transition-all shadow-2xl shadow-green-500/30 hover:scale-105"
            >
              Baixar Agora
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center mb-12">
          <Link
            href="/politicasdeprivacidadesfarolcapital"
            className="group bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all text-center max-w-md w-full"
          >
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Política de Privacidade</h3>
            <p className="text-gray-400">Saiba como protegemos seus dados</p>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-zinc-900">
          <p className="text-gray-500">Desenvolvido por <span className="text-green-400 font-semibold">Kurupira Labs</span></p>
          <p className="text-gray-600 mt-2 text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
