
import React from 'react';
import { MOCK_VARIABLES, CATEGORIES } from '../constants';
import { Icons } from './Icons';

interface SidebarProps {
  onInsert: (name: string) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onInsert, searchTerm, setSearchTerm }) => {
  const filteredVars = MOCK_VARIABLES.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    v.description.includes(searchTerm)
  );

  const grouped = filteredVars.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = [];
    acc[curr.category].push(curr);
    return acc;
  }, {} as Record<string, typeof MOCK_VARIABLES>);

  return (
    <aside className="w-80 border-l border-white/10 flex flex-col glass-panel overflow-hidden shrink-0 hidden lg:flex">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2 mb-4 text-gold-400">
          <Icons.Search size={18} />
          <h2 className="text-sm font-bold">بانک متغیرها</h2>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="جستجو..." 
            className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-gold-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-6">
        {Object.entries(grouped).map(([cat, vars]) => (
          <div key={cat}>
            <div className={`text-[10px] font-black px-2 py-0.5 rounded-md inline-block mb-3 ${CATEGORIES[cat as keyof typeof CATEGORIES]?.styles}`}>
              {CATEGORIES[cat as keyof typeof CATEGORIES]?.label}
            </div>
            <div className="space-y-2">
              {vars.map(v => (
                <button
                  key={v.name}
                  onClick={() => onInsert(v.name)}
                  className="w-full text-right p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold-500/30 transition-all group"
                >
                  <div className="flex justify-between items-center mb-1">
                    <code className="text-[10px] font-mono text-gold-400">{"{" + v.name + "}"}</code>
                    {v.alwaysAvailable && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>}
                  </div>
                  <p className="text-[10px] text-slate-400 group-hover:text-slate-200 transition-colors">{v.description}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
