import React from 'react';
import { Card } from '../ui/Card';
import { FINAL_PAGE_COPY } from '../finalPageCopy';

export const HeadingSection: React.FC = () => {
  const { brand, titleLine1, titleLine2, subtitle, byline } = FINAL_PAGE_COPY.heading;

  // Template palette (from the provided DOCX):
  // - Brand: #1E3A5F
  // - Primary headline: #D35400
  // - CTA green: #228B22 (handled in OfferSection)
  const templateBrandBlue = '#1E3A5F';
  const templateHeadlineOrange = '#D35400';
  const templateMutedGrey = '#666666';

  const [bylineLeft, bylineRight] = byline.split(/\s{2,}/);

  return (
    <Card className="p-8 md:p-12 mb-12 text-center bg-gradient-to-b from-white to-slate-50 border-slate-200">
      <div className="mb-6 text-sm md:text-base font-serif font-bold tracking-tight" style={{ color: templateBrandBlue }}>
        {brand}
      </div>

      <h1 className="text-3xl md:text-5xl leading-tight font-serif font-bold text-ink mb-6 tracking-tight">
        <span style={{ color: templateHeadlineOrange }}>{titleLine1}</span>
        <br />
        <span>{titleLine2}</span>
      </h1>

      <p className="text-lg md:text-xl text-ink font-serif italic mb-8 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>

      <p className="text-sm whitespace-pre-wrap">
        <span className="text-ink/80">{bylineLeft}</span>
        {bylineRight ? (
          <span style={{ color: templateMutedGrey }}>{'    '}{bylineRight}</span>
        ) : null}
      </p>
    </Card>
  );
};
