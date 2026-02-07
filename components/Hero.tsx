'use client';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
      
      {/* Conteúdo */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold mb-16 bg-linear-to-r from-red-400 via-red-600 to-red-400 bg-clip-text text-transparent tracking-wider">
          KURUPIRA LABS
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
            Ideias, tecnologia e vontade de entender como as coisas funcionam.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              A Kurupira Labs é um espaço pessoal de experimentação.
              Um lugar para desenvolver soluções, testar ideias e transformar curiosidade em projetos reais.
            </p>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-xl md:text-2xl text-gray-300 font-light italic">
                Nada nasce pronto. Tudo nasce em processo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
