'use client';

import { Users, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function BetaTestersCard() {
  const email = "cont.caique@gmail.com";

  return (
    <div className="container mx-auto px-6 py-6 max-w-4xl mb-20">
      <Card className="bg-white/[0.02] border-white/10 relative overflow-hidden text-center shadow-2xl rounded-[2rem]">
        {/* Subtle glow effect */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        
        <CardContent className="p-10 md:p-14 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 relative z-10">
            <Users className="text-primary" size={28} />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 relative z-10 tracking-tight">
            Apoio Mútuo entre Desenvolvedores
          </h3>
          
          <p className="text-sm md:text-base text-foreground/50 leading-relaxed mb-10 max-w-2xl relative z-10">
            Sabemos o quão difícil é conseguir os 20 testadores exigidos pelo Google Play. Criei um grupo no Google (Google Groups) para desenvolvedores se ajudarem testando os apps uns dos outros. Junte-se a nós para dar e receber apoio na comunidade!
          </p>

          <div className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 relative z-10 w-full sm:w-auto backdrop-blur-sm">
            <Mail className="text-primary/80" size={20} />
            <div className="text-left">
              <p className="text-xs text-foreground/40 mb-1 uppercase tracking-wider font-medium">Para participar, envie um e-mail para:</p>
              <p className="text-foreground font-semibold tracking-wide text-sm md:text-base">
                {email}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
