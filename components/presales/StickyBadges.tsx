import React from 'react';
import { FINAL_PAGE_COPY } from './finalPageCopy';

export const StickyBadges: React.FC = () => {
  return (
    <>
      {/* Floating notification - Centered below the top banner */}
      <div className="fixed top-14 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <div className="bg-white/95 backdrop-blur border border-brand-blue/30 text-ink text-xs md:text-sm font-medium py-1.5 px-4 rounded-full shadow-lg animate-fade-in-down pointer-events-auto">
          <span>{FINAL_PAGE_COPY.viewerText}</span>
        </div>
      </div>
    </>
  );
};
