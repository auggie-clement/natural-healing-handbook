import React from 'react';
import { Container } from './ui/Container';
import { FINAL_PAGE_COPY } from './finalPageCopy';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-brand-darkGreen/95 backdrop-blur-sm text-white py-2.5 sticky top-0 z-50 border-b border-brand-green/30 shadow-sm">
      <Container>
        <div className="flex items-center justify-center text-center text-xs md:text-sm font-medium tracking-wide">
          <span>{FINAL_PAGE_COPY.topBannerText}</span>
        </div>
      </Container>
    </div>
  );
};
