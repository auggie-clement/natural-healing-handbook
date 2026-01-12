import React from 'react';
import { Eye } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

export const StickyBadges: React.FC = () => {
  return (
    <>
      {/* Top Floating Notification - Centered below banner */}
      <div className="fixed top-14 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <div className="bg-white/95 backdrop-blur border border-brand-blue/30 text-ink text-xs md:text-sm font-medium py-1.5 px-4 rounded-full shadow-lg flex items-center gap-2 animate-fade-in-down pointer-events-auto cursor-pointer hover:bg-blue-50 transition-colors ring-1 ring-black/5">
          <Eye className="w-4 h-4 text-brand-blue" />
          <span>🔴 <span className="font-bold text-brand-blue">87</span> people viewing this page right now</span>
        </div>
      </div>

      {/* Side Floating Badge - Left side */}
      <div className="fixed top-32 left-4 z-40 hidden xl:block animate-fade-in-down">
        <Card className="w-20 p-2 flex flex-col items-center justify-center text-center shadow-elevated border-brand-green/20 !rounded-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
          <Badge variant="brand" className="mb-1 text-[10px]">Stock</Badge>
          <span className="text-2xl font-black leading-none text-ink">46</span>
          <span className="text-[10px] font-medium text-ink-light">Left</span>
        </Card>
      </div>
    </>
  );
};
