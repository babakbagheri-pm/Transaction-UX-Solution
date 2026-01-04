
import React from 'react';
import { Icons } from './Icons';
import { TransactionType, ValidationResult } from '../types';

interface EditorProps {
  template: string;
  setTemplate: (val: string) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  validationResult: ValidationResult | null;
  isValidating: boolean;
  selectedType: TransactionType;
  onSuggest: () => void;
  isSuggesting: boolean;
}

export const Editor: React.FC<EditorProps> = ({ 
  template, 
  setTemplate, 
  textareaRef, 
  validationResult, 
  isValidating, 
  selectedType,
  onSuggest,
  isSuggesting
}) => {
  return (
    <div className="flex-1 flex flex-col p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl shadow-xl bg-gradient-to-br ${selectedType.color} text-white`}>
            <Icons.Landmark size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-gold-100">{selectedType.label}</h2>
            <p className="text-xs text-slate-400">طراحی الگوی پیامک بانکی</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onSuggest}
            disabled={isSuggesting}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-bold text-gold-400 disabled:opacity-50"
          >
            {isSuggesting ? <Icons.Refresh className="animate-spin" size={14} /> : <Icons.Wand2 size={14} />}
            پیشنهاد هوش مصنوعی
          </button>
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-bold transition-all ${
            isValidating ? 'bg-white/5 border-white/10 text-slate-400' :
            validationResult?.valid ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 
            'bg-rose-500/10 border-rose-500/20 text-rose-400'
          }`}>
            {isValidating ? <Icons.Refresh size={12} className="animate-spin" /> : 
             validationResult?.valid ? <Icons.Check size={12} /> : <Icons.AlertCircle size={12} />}
            {isValidating ? 'درحال بررسی...' : validationResult?.valid ? 'آماده انتشار' : 'خطا در الگو'}
          </div>
        </div>
      </div>

      {/* Editor Surface */}
      <div className="flex-1 flex flex-col glass-panel rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
        <div className="flex gap-2 p-4 bg-navy-900/50 border-b border-white/5">
          {selectedType.templates.map((t, i) => (
            <button 
              key={i}
              onClick={() => setTemplate(t.content)}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-gold-500/40 text-[10px] font-bold text-slate-400 hover:text-gold-200 transition-all"
            >
              {t.title}
            </button>
          ))}
          <span className="mr-auto text-[10px] text-slate-500 self-center">الگوهای پیش‌فرض</span>
        </div>

        <div className="flex-1 relative">
           <textarea
            ref={textareaRef}
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="w-full h-full p-8 bg-transparent text-lg font-mono text-slate-100 placeholder:text-slate-700 resize-none outline-none leading-relaxed"
            placeholder="متن پیامک را اینجا بنویسید..."
            dir="auto"
          />
          {template === '' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 flex-col gap-4">
              <Icons.Smartphone size={64} className="text-slate-600" />
              <p className="text-sm font-bold">متغیرها را از سمت راست انتخاب کنید</p>
            </div>
          )}
        </div>

        <div className="px-6 py-3 bg-navy-950/50 border-t border-white/5 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="text-[10px] text-slate-500">کاراکتر: <span className="text-slate-200 font-bold">{template.length}</span></div>
            <div className="text-[10px] text-slate-500">متغیرها: <span className="text-slate-200 font-bold">{(template.match(/\{/g) || []).length}</span></div>
          </div>
          <div className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">UX Template v4.0</div>
        </div>
      </div>
    </div>
  );
};
