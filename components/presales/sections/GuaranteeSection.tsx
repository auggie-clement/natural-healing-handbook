import React from 'react';
import { FINAL_PAGE_COPY } from '../finalPageCopy';
import { Card } from '../ui/Card';

export const GuaranteeSection: React.FC = () => {
  const { heading, paragraphs } = FINAL_PAGE_COPY.guarantee;

  return (
    <Card className="bg-slate-50 border-slate-200 p-8 md:p-12 overflow-hidden relative mb-16">
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink text-center md:text-left">
          {heading}
        </h3>

        <div className="space-y-4 text-ink/80 text-lg leading-relaxed">
          {paragraphs.map((p) => {
            if (p === 'Full refund. No questions. No hassle.') {
              return (
                <p key={p} className="font-bold text-ink">
                  {p}
                </p>
              );
            }

            if (p.startsWith("This isn't just a guarantee")) {
              return (
                <p key={p} className="italic text-ink-light">
                  {p}
                </p>
              );
            }

            return <p key={p}>{p}</p>;
          })}
        </div>
      </div>
    </Card>
  );
};
