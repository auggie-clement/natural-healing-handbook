import React from 'react';
import { Gift } from 'lucide-react';
import { Container } from './ui/Container';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-brand-darkGreen/95 backdrop-blur-sm text-white py-2.5 sticky top-0 z-50 border-b border-brand-green/30 shadow-sm">
      <Container>
        <div className="flex items-center justify-center gap-3 text-center text-xs md:text-sm font-medium tracking-wide">
          <Gift className="w-4 h-4 text-brand-mint/80 hidden sm:block" />
          <span className="flex items-center gap-2">
             <span className="bg-brand-red px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">Sale</span>
             <span>Early Christmas Sale: <span className="font-bold text-white">80% OFF</span> + 2 Free Gifts.</span>
             <span className="opacity-80 hidden sm:inline">Limited Stocks Available.</span>
          </span>
        </div>
      </Container>
    </div>
  );
};