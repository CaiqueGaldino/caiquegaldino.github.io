export default function PoliticasPrivacidadeOasis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-gray-200 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-blue-900/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider text-center">
          POLÍTICA DE PRIVACIDADE
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-8 tracking-wide text-center">
          OASIS
        </h2>
        
        <p className="text-gray-400 mb-12 text-center">
          Última atualização: Abril de 2026
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          
          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              1. INTRODUÇÃO
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Bem-vindo ao Oasis - Controle de Água ("nós", "nosso" ou "aplicativo"). Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações quando você usa nosso aplicativo móvel. Ao usar o Oasis, você concorda com a coleta e uso de informações de acordo com esta política.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              2. INFORMAÇÕES QUE COLETAMOS
            </h3>
            
            <h4 className="text-2xl font-bold text-blue-400 mt-6 mb-3 tracking-wide">
              2.1 Informações Fornecidas por Você:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Meta diária de consumo de água</li>
              <li>Horários de acordar e dormir</li>
              <li>Registro de consumo de água (volume e horário)</li>
            </ul>

            <h4 className="text-2xl font-bold text-blue-400 mt-6 mb-3 tracking-wide">
              2.2 Informações Coletadas Automaticamente:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Dados de uso do aplicativo para fins de análise estrutural</li>
              <li>Informações técnicas do dispositivo (modelo, versão do sistema operacional)</li>
              <li>Dados anônimos de interação com anúncios (através do Google AdMob)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              3. COMO USAMOS SUAS INFORMAÇÕES
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Fornecer e manter a funcionalidade principal do aplicativo</li>
              <li>Personalizar sua experiência de uso</li>
              <li>Enviar notificações de lembrete sobre sua hidratação</li>
              <li>Gerar estatísticas e histórico de seu consumo</li>
              <li>Exibir anúncios relevantes</li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              4. ARMAZENAMENTO DE DADOS
            </h3>
            <div className="bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-100 font-semibold leading-relaxed">
                <strong className="text-blue-400">IMPORTANTE:</strong> Todos os seus dados pessoais (meta de água, histórico de consumo, horários) são armazenados LOCALMENTE em seu dispositivo. Nós NÃO enviamos, NÃO armazenamos e NÃO temos acesso a esses dados em nossos servidores. Seus dados permanecem exclusivamente no seu celular e são apagados definitivamente se você desinstalar o aplicativo.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              5. COMPARTILHAMENTO DE DADOS
            </h3>
            
            <div className="bg-red-950/30 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <p className="text-red-100 font-bold text-xl leading-relaxed">
                Nós NÃO vendemos, comercializamos ou transferimos suas informações pessoais para terceiros.
              </p>
            </div>

            <h4 className="text-2xl font-bold text-blue-400 mt-6 mb-3 tracking-wide">
              5.1 Google AdMob (Publicidade)
            </h4>
            <p className="text-gray-300 leading-relaxed">
              O aplicativo utiliza o Google AdMob para exibir anúncios. O AdMob coleta informações anônimas de ID de publicidade e interações com anúncios, conforme a Política de Privacidade do Google (<a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>). O AdMob pode coletar identificadores de dispositivo, informações de rede e interações com os anúncios.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              6. PERMISSÕES DO APLICATIVO
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              O Oasis solicita as seguintes permissões de sistema:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">NOTIFICAÇÕES:</strong> Para o envio de lembretes de hidratação baseados no seu horário.</li>
              <li><strong className="text-white">INTERNET E REDE:</strong> Estritamente para exibir e carregar anúncios.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              7. DADOS DE MENORES DE IDADE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Nosso aplicativo não é direcionado ao público infantil. Não coletamos intencionalmente informações de crianças menores de 13 anos.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              8. SEUS DIREITOS
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Você tem o pleno direito de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">Acessar seus dados</strong> (todos encontram-se disponíveis no seu dispositivo)</li>
              <li><strong className="text-white">Apagar seus dados</strong> (basta limpar os dados ou desinstalar o aplicativo)</li>
              <li><strong className="text-white">Desativar notificações</strong> (nas configurações do sistema do seu celular)</li>
              <li><strong className="text-white">Optar por não receber anúncios personalizados</strong> (através das configurações de ID do Google do seu celular)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              9. CONTATO
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato com o desenvolvedor:
            </p>
            <div className="bg-zinc-900 p-6 rounded-lg border border-blue-500/30">
              <p className="text-gray-300 mb-2"><strong className="text-white">Desenvolvedor:</strong> Kurupira Labs</p>
              <p className="text-gray-300 mb-2"><strong className="text-white">Email:</strong> <a href="mailto:cont.caique@gmail.com" className="text-blue-400 hover:text-blue-300">cont.caique@gmail.com</a></p>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              10. LEGISLAÇÃO APLICÁVEL
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Esta Política de Privacidade é elaborada em conformidade com as leis do Brasil, incluindo a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <div className="border-t border-gray-700 pt-8 mt-12 text-center">
            <p className="text-gray-400 mb-2">
              © 2026 Kurupira Labs - Oasis. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Este documento foi criado para garantir transparência e conformidade com as leis de proteção de dados.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
