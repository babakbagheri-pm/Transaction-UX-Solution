
import React from 'react';

export const IconBase: React.FC<{ children: React.ReactNode; size?: number; className?: string }> = ({ children, size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

export const Icons = {
  Sparkles: (p: any) => <IconBase {...p}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 17v4"/><path d="M3 21h4"/></IconBase>,
  Save: (p: any) => <IconBase {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></IconBase>,
  Copy: (p: any) => <IconBase {...p}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></IconBase>,
  Search: (p: any) => <IconBase {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></IconBase>,
  Landmark: (p: any) => <IconBase {...p}><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></IconBase>,
  Smartphone: (p: any) => <IconBase {...p}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></IconBase>,
  AlertCircle: (p: any) => <IconBase {...p}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></IconBase>,
  Check: (p: any) => <IconBase {...p}><polyline points="20 6 9 17 4 12"/></IconBase>,
  Refresh: (p: any) => <IconBase {...p}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></IconBase>,
  ChevronLeft: (p: any) => <IconBase {...p}><path d="m15 18-6-6 6-6"/></IconBase>,
  Wand2: (p: any) => <IconBase {...p}><path d="m2 22 1-1a3 3 0 0 0 0-4.24l-1-1 2-2 1 1a3 3 0 0 0 4.24 0l1-1 2 2-1 1a3 3 0 0 0 0 4.24l1 1-2 2-1-1a3 3 0 0 0-4.24 0l-1 1-2-2Z"/><path d="m11 7 5-5"/><path d="m14 10 5-5"/><path d="m17 13 5-5"/></IconBase>
};
