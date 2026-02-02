import Link from 'next/link';

export default function AppAdsTxt() {
  const adsContent = `# app-ads.txt for Farol Capital
# Generated for Google AdMob integration
# Last updated: February 2, 2026

google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0

# Replace pub-0000000000000000 with your actual AdMob Publisher ID
# You can find your Publisher ID in your AdMob account settings`;

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider text-center">
          APP-ADS.TXT
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-8 tracking-wide text-center">
          FAROL CAPITAL
        </h2>
        
        <div className="bg-zinc-900 rounded-lg p-6 border border-green-500/30 mb-8">
          <p className="text-gray-300 mb-4">
            Este arquivo é necessário para verificar a autenticidade dos anúncios exibidos no aplicativo Farol Capital.
          </p>
          <p className="text-gray-400 text-sm">
            Para usar este arquivo, copie o conteúdo abaixo e faça o upload para o domínio raiz do seu site ou configure-o conforme as instruções do Google AdMob.
          </p>
        </div>

        <div className="bg-black rounded-lg p-6 border border-green-500/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white tracking-wide">CONTEÚDO DO ARQUIVO</h3>
            <Link
              href="/app-ads.txt"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold text-sm transition-colors"
            >
              BAIXAR
            </Link>
          </div>
          <pre className="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
            {adsContent}
          </pre>
        </div>

        <div className="mt-8 bg-yellow-950/30 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <h4 className="text-yellow-400 font-bold mb-2 tracking-wide">⚠️ IMPORTANTE</h4>
          <p className="text-yellow-100 text-sm leading-relaxed">
            Substitua <code className="bg-black px-2 py-1 rounded">pub-0000000000000000</code> pelo seu ID de Editor (Publisher ID) real do Google AdMob. Você pode encontrar este ID nas configurações da sua conta AdMob.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors tracking-wide"
          >
            VOLTAR PARA HOME
          </a>
        </div>
      </div>
    </div>
  );
}
