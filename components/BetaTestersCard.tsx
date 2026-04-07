'use client';

import { Users, Mail } from 'lucide-react';

export default function BetaTestersCard() {
  const email = "cont.caique@gmail.com";

  return (
    <div className="container mx-auto px-6 py-6 max-w-3xl mb-12">
      <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
        {/* Subtle glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full"></div>
        
        <Users className="text-indigo-400 mb-6 relative z-10" size={32} />
        
        <h3 className="text-2xl font-bold text-[#f5f5f5] mb-4 relative z-10">
          Apoio Mútuo entre Desenvolvedores
        </h3>
        
        <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8 max-w-lg relative z-10">
          Sabemos o quão difícil é conseguir os 20 testadores exigidos pelo Google Play. Criei um grupo no Google (Google Groups) para desenvolvedores se ajudarem testando os apps uns dos outros. Junte-se a nós para dar e receber apoio na comunidade!
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex items-center gap-4 relative z-10 w-full sm:w-auto">
          <Mail className="text-indigo-400" size={20} />
          <div className="text-left">
            <p className="text-xs text-white/50 mb-0.5">Para participar, envie um e-mail para:</p>
            <p className="text-[#f5f5f5] font-semibold tracking-wide text-sm md:text-base">
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
