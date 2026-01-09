import React from 'react';
import { Target, Search, Layers, Briefcase, FileText } from 'lucide-react';

const ProposalView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-indigo-600 rounded-xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Proposta de Acompanhamento</h1>
        <div className="flex items-center space-x-2 text-indigo-100 text-sm font-medium uppercase tracking-wider">
          <span>MGTInc</span>
          <span>×</span>
          <span>André Delicoli</span>
        </div>
        <p className="mt-6 text-indigo-100 max-w-2xl leading-relaxed">
          O objetivo é tirar a operação do modo "apagando incêndio" e entrar no modo "crescimento controlado" em 2 meses, focando em tracking, esteira de produtos e novos canais de receita.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
              <Search size={20} />
            </div>
            <h3 className="font-bold text-slate-800">1. Diagnóstico & Tracking</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            O "gargalo principal". Implementação de Pixel + API de Conversões (CAPI) para parar de perder vendas no rastreamento.
          </p>
          <ul className="text-sm text-slate-500 space-y-1 ml-2">
            <li>• Validação de eventos</li>
            <li>• Painel simples de validação diária</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <Layers size={20} />
            </div>
            <h3 className="font-bold text-slate-800">2. Esteira de Produtos</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Aumentar LTV e Ticket Médio. Sair da dependência do produto único de R$ 50.
          </p>
          <ul className="text-sm text-slate-500 space-y-1 ml-2">
            <li>• Lead Magnet (Gratuito)</li>
            <li>• Produto de Ascensão (Pacote 3-4 meses)</li>
            <li>• Oferta Premium (Mid/High Ticket)</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <Briefcase size={20} />
            </div>
            <h3 className="font-bold text-slate-800">3. Canais de Receita B2B</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Parcerias estratégicas para monetizar a audiência além da venda direta.
          </p>
          <ul className="text-sm text-slate-500 space-y-1 ml-2">
            <li>• Parcerias com fornecedores (Comissão/Ads)</li>
            <li>• Estrutura de Afiliados organizada</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
              <Target size={20} />
            </div>
            <h3 className="font-bold text-slate-800">4. Execução Guiada</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Sem números mágicos. Processo que sustenta escala.
          </p>
          <ul className="text-sm text-slate-500 space-y-1 ml-2">
            <li>• Reuniões semanais de direção</li>
            <li>• Testes A/B de criativos e ofertas</li>
            <li>• Suporte técnico para tracking</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Investimento Total</h3>
        <div className="text-4xl font-bold text-white mb-2">R$ 4.200</div>
        <p className="text-slate-400 text-sm">Pagamento único para os 2 meses de acompanhamento.</p>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
          Aceitar Proposta & Iniciar
        </button>
      </div>
    </div>
  );
};

export default ProposalView;
