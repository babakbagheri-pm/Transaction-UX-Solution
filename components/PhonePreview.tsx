
import React from 'react';
import { Icons } from './Icons';
import { TransactionType } from '../types';

interface PhonePreviewProps {
  output: string | null;
  loading: boolean;
  typeConfig: TransactionType;
}

export const PhonePreview: React.FC<PhonePreviewProps> = ({ output, loading, typeConfig }) => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-b from-navy-950 to-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative w-[300px] h-[620px] rounded-[55px] iphone-frame bg-black animate-float z-10 flex items-center justify-center p-[8px]">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-40 border border-white/10 flex items-center justify-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse"></div>
          <div className="w-10 h-1 bg-white/10 rounded-full"></div>
        </div>

        {/* Screen */}
        <div className="w-full h-full rounded-[47px] overflow-hidden relative bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/10/300/620)' }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          
          {/* Status Bar */}
          <div className="absolute top-4 w-full px-8 flex justify-between text-white text-[10px] font-bold z-30">
            <span>{time}</span>
            <div className="flex gap-1 items-center opacity-80">
              <div className="w-3 h-2 border border-white rounded-[2px] relative">
                <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="mt-20 px-4 space-y-3 relative z-30">
            <div className={`p-4 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-500 transform ${loading ? 'scale-95 opacity-50 blur-sm' : 'scale-100 opacity-100'}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br ${typeConfig.color} text-white`}>
                   <Icons.Landmark size={16} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-white/90 uppercase tracking-tighter">Mobile Banking</h4>
                  <span className="text-[8px] text-white/50">هم‌اکنون</span>
                </div>
              </div>
              <div className="px-1">
                {output ? (
                  <p className="text-[12px] leading-relaxed text-right font-medium text-white/90 drop-shadow">
                    {output}
                  </p>
                ) : (
                  <div className="space-y-2 opacity-20">
                    <div className="h-2 bg-white rounded-full w-full"></div>
                    <div className="h-2 bg-white rounded-full w-2/3"></div>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex gap-2">
                <div className="flex-1 py-1.5 rounded-lg bg-white/5 text-[9px] font-bold text-center text-white/60">بستن</div>
                <div className="flex-1 py-1.5 rounded-lg bg-white/20 text-[9px] font-bold text-center text-white">جزئیات</div>
              </div>
            </div>
          </div>

          {/* Home Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full z-30"></div>
        </div>
      </div>
    </div>
  );
};
