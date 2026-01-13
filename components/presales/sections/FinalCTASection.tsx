import React from 'react';
import { FINAL_PAGE_COPY } from '../finalPageCopy';
import { Button } from '../ui/Button';

export const FinalCTASection: React.FC = () => {
  const { paragraphs, ctaText, ctaSubtext } = FINAL_PAGE_COPY.finalCta;

  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-16">
      {/* In the template, these paragraphs are left-aligned, while the button/subtext are centered. */}
      <div className="space-y-2 text-ink/80 text-lg leading-relaxed text-left">
        {paragraphs.map((p) => {
          const isEmphasis = p.startsWith('Get your Eastern Apothecary Handbook today');

          return (
            <p key={p} className={isEmphasis ? 'font-bold text-ink' : undefined}>
              {p}
            </p>
          );
        })}
      </div>

      <div className="space-y-3 text-center">
        <Button variant="primary" size="lg" className="w-full md:w-auto" href="#offer">
          {ctaText}
        </Button>
        <p className="text-xs" style={{ color: '#666666' }}>
          {ctaSubtext}
        </p>
      </div>
    </div>
  );
};
