import React from 'react';
import { FINAL_PAGE_COPY } from '../finalPageCopy';

export const DisclaimersSection: React.FC = () => {
  const { specialOffer, medicalDisclaimer } = FINAL_PAGE_COPY.disclaimers;

  return (
    <div className="text-xs text-ink-lighter space-y-4 pt-12 border-t border-slate-100">
      <p className="italic">{specialOffer}</p>
      <p className="italic">{medicalDisclaimer}</p>
    </div>
  );
};
