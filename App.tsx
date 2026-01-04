
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';
import { PhonePreview } from './components/PhonePreview';
import { Icons } from './components/Icons';
import { TRANSACTION_TYPES, MOCK_VARIABLES } from './constants';
import { ValidationResult } from './types';
import { suggestTemplate } from './services/geminiService';

const App: React.FC = () => {
  const [selectedTypeId, setSelectedTypeId] = useState(TRANSACTION_TYPES[0].value);
  const [template, setTemplate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedType = TRANSACTION_TYPES.find(t => t.value === selectedTypeId)!;

  // Validation & Preview Logic
  useEffect(() => {
    const validate = async () => {
      setIsValidating(true);
      await new Promise(r => setTimeout(r, 400));
      
      if (!template.trim()) {
        setValidation({ valid: true, errors: [], sampleOutput: null });
        setIsValidating(false);
        return;
      }

      let sampleOutput = template;
      const errors: string[] = [];

      MOCK_VARIABLES.forEach(v => {
        const placeholder = `{${v.name}}`;
        sampleOutput = sampleOutput.split(placeholder).join(v.sampleValue);
      });

      // Simple bracket check
      if ((template.match(/\{/g) || []).length !== (template.match(/\}/g) || []).length) {
        errors.push('عدم تقارن در باز و بسته شدن متغیرها');
      }

      setValidation({
        valid: errors.length === 0,
        errors,
        sampleOutput: errors.length === 0 ? sampleOutput : null
      });
      setIsValidating(false);
    };

    const debounce = setTimeout(validate, 500);
    return () => clearTimeout(debounce);
  }, [template, selectedTypeId]);

  const insertVariable = useCallback((varName: string) => {
    const placeholder = `{${varName}}`;
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const nextText = template.substring(0, start) + placeholder + template.substring(end);
      setTemplate(nextText);
      
      // Reset focus and position
      setTimeout(() => {
        textareaRef.current?.focus();
        textareaRef.current?.setSelectionRange(start + placeholder.length, start + placeholder.length);
      }, 0);
    } else {
      setTemplate(prev => prev + placeholder);
    }
  }, [template]);

  const handleAISuggest = async () => {
    setIsSuggesting(true);
    const suggestion = await suggestTemplate(selectedType.label);
    setTemplate(suggestion);
    setIsSuggesting(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden text-slate-200">
      {/* Navbar */}
      <header className="h-16 border-b border-white/10 bg-navy-950/80 backdrop-blur-xl flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gold-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Icons.Landmark size={20} />
          </div>
          <h1 className="text-lg font-black tracking-tight text-white">
            <span className="text-gold-500">Transaction</span> UX Solution
          </h1>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-black font-bold text-xs transition-all shadow-lg active:scale-95">
            <Icons.Save size={16} />
            ذخیره تغییرات
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          
          {/* Tabs */}
          <div className="p-4 border-b border-white/5 flex gap-2 overflow-x-auto bg-navy-900/40">
            {TRANSACTION_TYPES.map(type => (
              <button
                key={type.value}
                onClick={() => {
                  setSelectedTypeId(type.value);
                  setTemplate('');
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all whitespace-nowrap text-xs font-bold ${
                  selectedTypeId === type.value 
                  ? 'bg-gold-500/10 border-gold-500/50 text-gold-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]' 
                  : 'bg-white/5 border-white/5 text-slate-500 hover:border-white/20'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex-1 flex overflow-hidden">
            <Editor 
              template={template}
              setTemplate={setTemplate}
              textareaRef={textareaRef}
              validationResult={validation}
              isValidating={isValidating}
              selectedType={selectedType}
              onSuggest={handleAISuggest}
              isSuggesting={isSuggesting}
            />
            
            <PhonePreview 
              output={validation?.sampleOutput || null}
              loading={isValidating}
              typeConfig={selectedType}
            />
          </div>
        </main>

        {/* Sidebar */}
        <Sidebar 
          onInsert={insertVariable}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default App;
