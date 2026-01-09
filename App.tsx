import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  CalendarDays, 
  Menu,
  X,
  ChevronRight,
  Presentation,
  MessageSquare
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import ProposalView from './components/ProposalView';
import Timeline from './components/Timeline';
import AiConsultant from './components/AiConsultant';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.PROPOSAL:
        return <ProposalView />;
      case AppView.TIMELINE:
        return <Timeline />;
      case AppView.AI_CONSULTANT:
        return <AiConsultant />;
      default:
        return <Dashboard />;
    }
  };

  const navItems = [
    { id: AppView.DASHBOARD, label: 'Resumo / Metas', icon: LayoutDashboard },
    { id: AppView.PROPOSAL, label: 'Detalhes da Proposta', icon: FileText },
    { id: AppView.TIMELINE, label: 'Cronograma', icon: CalendarDays },
    { id: AppView.AI_CONSULTANT, label: 'Consultor IA', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white fixed h-full z-20">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center space-x-2 mb-2 text-indigo-400">
             <Presentation size={20} />
             <span className="text-xs font-bold uppercase tracking-wider">Apresentação</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">Proposta Comercial</h1>
          <p className="text-xs text-slate-400 mt-1">MGTInc x André Delicoli</p>
          
          <div className="mt-4 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded text-center">
            <span className="text-[10px] font-semibold text-indigo-300 uppercase tracking-widest">Documento Interativo</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && <ChevronRight size={16} className="ml-auto opacity-70" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center space-x-3 bg-slate-800 p-3 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">AD</div>
            <div>
              <p className="text-sm font-medium">André Delicoli</p>
              <p className="text-xs text-slate-400">Consultor</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-slate-900 text-white z-30 px-4 py-3 flex justify-between items-center shadow-md">
        <div>
           <h1 className="font-bold text-sm">Proposta Comercial</h1>
           <p className="text-[10px] text-slate-400">MGTInc x André Delicoli</p>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/95 z-20 pt-16 px-4 md:hidden">
           <nav className="space-y-4 mt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl border ${
                    currentView === item.id
                      ? 'bg-indigo-600 border-indigo-500 text-white'
                      : 'border-slate-700 text-slate-300'
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-lg font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-12 pt-20 md:pt-12 overflow-y-auto h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb-ish Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-indigo-600 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                Apresentação da Proposta
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {navItems.find(i => i.id === currentView)?.label}
            </h2>
            <p className="text-slate-500 mt-1">
              {currentView === AppView.DASHBOARD ? 'Resumo visual das metas e investimentos.' : 
               currentView === AppView.AI_CONSULTANT ? 'Tire suas dúvidas diretamente com a IA.' :
               'Detalhes do planejamento estratégico.'}
            </p>
          </div>
          
          {/* View Container */}
          <div className="min-h-[500px]">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;