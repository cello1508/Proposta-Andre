import { TimelineWeek } from './types';

export const PROPOSAL_TEXT = `
PROPOSTA DE ACOMPANHAMENTO 2 MESES
MGTInc x André Delicoli

Objetivo:
Você vai sair do modo “apagando incêndio” e entrar no modo “crescimento controlado”.
Em 2 meses, você vai:
1. Arrumar o tracking para escalar tráfego com número real.
2. Organizar a esteira de produtos para aumentar ticket médio e lucro.
3. Abrir canais de receita além do produto de R$ 50: pacotes, parcerias B2B e afiliados dentro da plataforma.

Cenário Atual:
Produto B2C para noivas com pagamento único (R$ 50–60), MVP rodando, crescendo com orgânico e ads.
Grupo de WhatsApp com ~302 noivas.
Meta: lucro operacional de R$ 15–20k/mês.
Gargalo: tracking falhando.

Escopo:
A) Arrumar tracking para escalar ads (Pixel, CAPI, Painel de validação).
B) Montar esteira de produtos (Lead Magnet, Ajuste Low Ticket, Produto Ascensão 3-4 meses, Oferta Premium).
C) Abrir 2 canais de receita paralelos (Parcerias B2B, Afiliados).
D) Execução guiada por teste.

Cronograma (8 semanas):
Semana 1: Diagnóstico rápido do funil + correção do tracking.
Semana 2: Tracking validado + plano de métricas + ajustes de conversão no funil.
Semanas 3 e 4: Esteira de produtos: pacote 3–4 meses + melhoria do low ticket + onboarding.
Semanas 5 e 6: Parcerias B2B: fornecedores e cerimonialistas. Criar proposta e rodar primeiras conversas.
Semanas 7 e 8: Otimização de oferta e tráfego + rotina de crescimento + plano de próximos 90 dias.

Investimento: R$ 4.200, pagamento único.
`;

export const TIMELINE_DATA: TimelineWeek[] = [
  {
    week: "Semana 1",
    title: "Diagnóstico & Tracking",
    focus: "Correção Imediata",
    deliverables: ["Diagnóstico do Funil", "Correção do Pixel", "Configuração Inicial CAPI"]
  },
  {
    week: "Semana 2",
    title: "Validação de Dados",
    focus: "Confiabilidade",
    deliverables: ["Tracking Validado", "Painel de Métricas Simples", "Ajustes de Conversão"]
  },
  {
    week: "Semana 3-4",
    title: "Esteira de Produtos",
    focus: "LTV & Ticket Médio",
    deliverables: ["Pacote Ascensão (3-4 meses)", "Melhoria Oferta Low Ticket", "Novo Onboarding"]
  },
  {
    week: "Semana 5-6",
    title: "Canais B2B",
    focus: "Novas Receitas",
    deliverables: ["Modelo Proposta Fornecedores", "Regras para Afiliados", "Primeiras Conversas B2B"]
  },
  {
    week: "Semana 7-8",
    title: "Otimização & Futuro",
    focus: "Escala",
    deliverables: ["Otimização de Tráfego", "Rotina de Crescimento", "Plano 90 Dias"]
  }
];

export const INITIAL_REVENUE_DATA = [
  { name: 'Mês 1', value: 5000, projected: 7500 },
  { name: 'Mês 2', value: 7000, projected: 12000 },
  { name: 'Mês 3', value: 8500, projected: 18000 },
  { name: 'Mês 4', value: 10000, projected: 22000 },
];

export const REVENUE_MIX_DATA = [
  { name: 'Produto B2C (Low)', value: 60 },
  { name: 'Pacote Ascensão', value: 25 },
  { name: 'Parcerias B2B', value: 10 },
  { name: 'Afiliados', value: 5 },
];
