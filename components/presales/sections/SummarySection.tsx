import React from 'react';
import { Card } from '../ui/Card';
import { FINAL_PAGE_COPY } from '../finalPageCopy';

export const SummarySection: React.FC = () => {
  const summary = FINAL_PAGE_COPY.summary;
  const prefix = 'Summary:';

  const hasPrefix = summary.startsWith(prefix);
  const rest = hasPrefix ? summary.slice(prefix.length).trimStart() : summary;

  return (
    <Card className="bg-brand-mint/40 border-brand-green/20 p-6 md:p-8 mb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-green" />
      <p className="text-ink/80 text-base md:text-lg leading-relaxed">
        {hasPrefix ? (
          <>
            <strong className="font-bold text-ink">{prefix}</strong> {rest}
          </>
        ) : (
          summary
        )}
      </p>
    </Card>
  );
};
