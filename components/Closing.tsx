'use client';

export default function Closing() {
  return (
    <section id="closing" className="py-32 px-4 md:px-8 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-4xl text-center space-y-20">
        <p className="text-3xl md:text-4xl text-gray-300 leading-relaxed font-light">
          A Kurupira Labs não é sobre chegar rápido.
          <br />
          É sobre ir com intenção.
        </p>

        <div className="pt-12 border-t border-gray-800">
          <h2 className="text-6xl md:text-8xl font-bold bg-linear-to-r from-red-400 via-red-600 to-red-400 bg-clip-text text-transparent mb-8">
            Kurupira Labs
          </h2>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-400 font-light">Criar por curiosidade</p>
            <p className="text-xl md:text-2xl text-gray-400 font-light">Construir por prazer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
