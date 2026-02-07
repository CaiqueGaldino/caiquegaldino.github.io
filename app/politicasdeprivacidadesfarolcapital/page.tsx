export default function PoliticasPrivacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-gray-200 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-transparent to-green-900/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider text-center">
          POLÍTICA DE PRIVACIDADE
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-8 tracking-wide text-center">
          FAROL CAPITAL
        </h2>
        
        <p className="text-gray-400 mb-12 text-center">
          Última atualização: 03 de novembro de 2025
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="text-gray-300 leading-relaxed">
            A <span className="text-white font-semibold">Kurupira Labs</span>, desenvolvedora do aplicativo <span className="text-green-400 font-semibold">Farol Capital</span>, está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações ao utilizar nosso aplicativo de gestão financeira pessoal.
          </p>

          <div className="bg-green-950/30 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-green-100 font-semibold leading-relaxed">
              <strong className="text-green-400">RESUMO IMPORTANTE:</strong> O Farol Capital é um aplicativo de gestão financeira 100% offline. Todos os seus dados financeiros são armazenados exclusivamente no seu dispositivo e nunca são enviados para servidores externos.
            </p>
          </div>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              1. INFORMAÇÕES QUE COLETAMOS
            </h3>
            
            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              1.1 Dados Financeiros Locais
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              O aplicativo coleta e armazena localmente no seu dispositivo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Transações financeiras: descrição, valor, data, categoria, tipo (receita/despesa)</li>
              <li>Contas bancárias: nome, saldo inicial, instituição financeira</li>
              <li>Cartões de crédito: nome, limite, data de vencimento, bandeira</li>
              <li>Categorias personalizadas: nomes e ícones das categorias criadas por você</li>
              <li>Metas financeiras: objetivos, valores-alvo e prazos</li>
              <li>Orçamentos: limites de gastos por categoria</li>
            </ul>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              1.2 Dados de Uso do Aplicativo
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Não coletamos dados de uso, análise de comportamento ou telemetria do aplicativo.
            </p>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              1.3 Publicidade
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              O aplicativo utiliza o Google AdMob para exibir anúncios. O AdMob pode coletar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Identificador de publicidade (Advertising ID)</li>
              <li>Endereço IP</li>
              <li>Informações sobre o dispositivo (modelo, versão do sistema operacional)</li>
              <li>Dados de interação com anúncios</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Para mais informações sobre como o Google processa esses dados, consulte a Política de Privacidade do Google: <a href="https://policies.google.com/privacy" className="text-green-400 hover:text-green-300 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              2. COMO USAMOS SUAS INFORMAÇÕES
            </h3>
            
            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              2.1 Armazenamento Local
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Todos os dados financeiros inseridos no aplicativo são:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Armazenados exclusivamente no banco de dados local do seu dispositivo</li>
              <li>Processados localmente para gerar relatórios, gráficos e projeções</li>
              <li>Nunca enviados para servidores externos ou nuvem</li>
              <li>Acessíveis apenas por você através do aplicativo</li>
            </ul>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              2.2 Finalidade dos Dados
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Os dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Registrar suas transações financeiras</li>
              <li>Calcular saldos de contas e cartões</li>
              <li>Gerar relatórios e gráficos de receitas e despesas</li>
              <li>Criar projeções financeiras futuras</li>
              <li>Acompanhar metas e orçamentos</li>
              <li>Fornecer insights sobre seus hábitos financeiros</li>
            </ul>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              2.3 Anúncios Personalizados
            </h4>
            <p className="text-gray-300 leading-relaxed">
              O Google AdMob utiliza os dados coletados para exibir anúncios relevantes. Você pode optar por desabilitar anúncios personalizados nas configurações do seu dispositivo.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              3. COMPARTILHAMENTO DE DADOS
            </h3>
            
            <div className="bg-red-950/30 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <p className="text-red-100 font-bold text-xl leading-relaxed">
                NÃO COMPARTILHAMOS, VENDEMOS OU TRANSFERIMOS SEUS DADOS FINANCEIROS PARA TERCEIROS.
              </p>
            </div>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              3.1 Exceções de Compartilhamento
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Os únicos dados compartilhados são aqueles coletados pelo Google AdMob para fins de publicidade, conforme descrito na seção 1.3.
            </p>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              3.2 Requisitos Legais
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Como não temos acesso aos seus dados (eles ficam apenas no seu dispositivo), não podemos compartilhá-los mesmo em casos de requisição legal.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              4. SEGURANÇA DOS DADOS
            </h3>
            
            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              4.1 Proteção Local
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Implementamos medidas de segurança para proteger seus dados:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Armazenamento local criptografado: Os dados são armazenados em banco de dados SQLite no dispositivo</li>
              <li>Sem transmissão de dados: Nenhuma informação financeira é enviada pela internet</li>
              <li>Autenticação biométrica (opcional): Você pode habilitar bloqueio por impressão digital ou reconhecimento facial</li>
            </ul>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              4.2 Responsabilidade do Usuário
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              A segurança dos seus dados depende também de você:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Mantenha seu dispositivo protegido com senha/PIN</li>
              <li>Não compartilhe seu dispositivo desbloqueado com terceiros</li>
              <li>Faça backups regulares dos dados do aplicativo</li>
              <li>Mantenha o sistema operacional do dispositivo atualizado</li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              5. SEUS DIREITOS
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Você tem controle total sobre seus dados:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">Acesso:</strong> Visualize todos os seus dados a qualquer momento no aplicativo</li>
              <li><strong className="text-white">Edição:</strong> Modifique ou corrija qualquer informação armazenada</li>
              <li><strong className="text-white">Exclusão:</strong> Delete transações, contas, categorias ou todos os dados</li>
              <li><strong className="text-white">Exportação:</strong> Exporte seus dados em formato PDF ou CSV</li>
              <li><strong className="text-white">Portabilidade:</strong> Transfira seus dados para outro dispositivo através de backup</li>
            </ul>

            <h4 className="text-2xl font-bold text-green-400 mt-6 mb-3 tracking-wide">
              5.1 Como Exercer seus Direitos
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Todas as operações podem ser realizadas diretamente no aplicativo, na seção de Configurações. Não é necessário entrar em contato conosco para gerenciar seus dados.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              6. RETENÇÃO DE DADOS
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Seus dados permanecem armazenados no dispositivo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Pelo tempo que você desejar usar o aplicativo</li>
              <li>Até que você decida excluí-los manualmente</li>
              <li>Até que você desinstale o aplicativo (o que apaga todos os dados locais)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              7. PRIVACIDADE DE MENORES
            </h3>
            <p className="text-gray-300 leading-relaxed">
              O Farol Capital não é direcionado a menores de 13 anos. Não coletamos intencionalmente informações de crianças. Se você é pai/mãe ou responsável e descobre que seu filho forneceu dados ao aplicativo, entre em contato conosco para que possamos orientá-lo sobre a exclusão.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              8. COOKIES E TECNOLOGIAS SIMILARES
            </h3>
            <p className="text-gray-300 leading-relaxed">
              O aplicativo não utiliza cookies. O Google AdMob pode usar tecnologias similares para rastreamento de anúncios, conforme descrito em sua política de privacidade.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              9. TRANSFERÊNCIA INTERNACIONAL DE DADOS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Como todos os dados ficam armazenados localmente no seu dispositivo, não há transferência internacional de informações. Os dados do AdMob podem ser processados em servidores do Google em diferentes países, conforme sua política de privacidade.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              10. ALTERAÇÕES NESTA POLÍTICA
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas através de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Notificação dentro do aplicativo</li>
              <li>Atualização da data "Última atualização" no topo desta página</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              11. CONFORMIDADE COM LGPD
            </h3>
            <p className="text-gray-300 leading-relaxed">
              O Farol Capital está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Como não coletamos ou processamos dados pessoais fora do dispositivo do usuário, a maioria das obrigações da LGPD não se aplica. No entanto, respeitamos todos os princípios de privacidade e proteção de dados estabelecidos pela legislação brasileira.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              12. CONTATO
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Se você tiver dúvidas, preocupações ou solicitações sobre esta Política de Privacidade ou sobre o tratamento de seus dados, entre em contato conosco:
            </p>
            <div className="bg-zinc-900 p-6 rounded-lg border border-green-500/30">
              <p className="text-gray-300 mb-2"><strong className="text-white">Desenvolvedor:</strong> Kurupira Labs</p>
              <p className="text-gray-300 mb-2"><strong className="text-white">Aplicativo:</strong> Farol Capital</p>
              <p className="text-gray-300 mb-2"><strong className="text-white">E-mail:</strong> <a href="mailto:contato@kurupiralabs.com" className="text-green-400 hover:text-green-300">contato@kurupiralabs.com</a></p>
              <p className="text-gray-300"><strong className="text-white">Tempo de resposta:</strong> Até 5 dias úteis</p>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">
              13. CONSENTIMENTO
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ao utilizar o Farol Capital, você concorda com esta Política de Privacidade e com o processamento de seus dados conforme descrito aqui. Se você não concordar com algum aspecto desta política, por favor, não utilize o aplicativo.
            </p>
          </section>

          <div className="border-t border-gray-700 pt-8 mt-12 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Kurupira Labs - Farol Capital. Todos os direitos reservados.
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
