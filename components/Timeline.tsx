import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { CheckCircle2, Circle } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">Cronograma de 8 Semanas</h2>
        <p className="text-slate-500 mt-1">Do diagnóstico à escala controlada.</p>
      </div>
      <div className="p-6">
        <div className="relative">
          {/* Vertical line connecting items */}
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block"></div>

          <div className="space-y-8">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-start group">
                {/* Mobile Line */}
                <div className="absolute left-3.5 top-8 bottom-[-2rem] w-0.5 bg-slate-200 md:hidden last:hidden"></div>

                <div className="flex items-center md:block mb-4 md:mb-0 z-10">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${index === 0 ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-300'}
                    md:mr-8 md:ml-4 shadow-sm transition-colors duration-300
                  `}>
                    {index === 0 ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                  </div>
                </div>

                <div className="ml-10 md:ml-0 flex-1 bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-200 rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full w-fit mt-2 sm:mt-0">
                      {item.week}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Foco Principal</span>
                    <p className="text-sm font-medium text-slate-700">{item.focus}</p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Entregáveis</span>
                    <ul className="mt-2 space-y-2">
                      {item.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
