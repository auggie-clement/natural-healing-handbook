import React from 'react';
import { FINAL_PAGE_COPY } from '../finalPageCopy';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

function renderOfferItem(line: string) {
  // In the source template, the left side (label) of each item is bold.
  const dash = ' — ';
  const dashIndex = line.indexOf(dash);

  if (dashIndex < 0) {
    return <p key={line}>{line}</p>;
  }

  const left = line.slice(0, dashIndex).trimEnd();
  const right = line.slice(dashIndex + dash.length).trimStart();

  return (
    <p key={line}>
      <strong className="font-bold text-ink">{left}</strong> — {right}
    </p>
  );
}

export const OfferSection: React.FC = () => {
  const { heading, items, priceLine, savingsLine, shippingLine, ctaText, ctaSubtext } = FINAL_PAGE_COPY.offer;

  // Template palette (from the provided DOCX)
  const templatePriceGreen = '#228B22';
  const templateStrikeGrey = '#999999';
  const templateSavingsOrange = '#D35400';
  const templateMutedGrey = '#666666';

  // priceLine is "${149}   $37 TODAY ONLY" in the copy; render it with template styles.
  const priceMatch = priceLine.match(/^(\$\d+)\s+(\$\d+\s+TODAY\s+ONLY)$/i);
  const strikePrice = priceMatch?.[1] ?? '$149';
  const todayPrice = priceMatch?.[2] ?? '$37 TODAY ONLY';

  return (
    <div id="offer" className="scroll-mt-20 mb-16">
      <Card className="shadow-2xl ring-1 ring-slate-900/5 bg-white">
        <div className="p-6 md:p-10 lg:p-12 space-y-6">
          <h3 className="text-2xl font-serif font-bold text-ink">{heading}</h3>

          <div className="space-y-2 text-ink/80 text-lg leading-relaxed">
            {items.map((line) => renderOfferItem(line))}
          </div>

          {/* CTA block (centered), matching the template alignment + colors */}
          <div className="pt-6 border-t border-slate-100 text-center">
            <div className="flex items-end justify-center gap-3 mb-3">
              <span
                className="text-xl md:text-2xl line-through decoration-2"
                style={{ color: templateStrikeGrey, textDecorationColor: templateStrikeGrey }}
              >
                {strikePrice}
              </span>
              <span
                className="text-3xl md:text-4xl font-black tracking-tight"
                style={{ color: templatePriceGreen }}
              >
                {todayPrice}
              </span>
            </div>

            <p className="text-sm md:text-base font-medium mb-2" style={{ color: templateSavingsOrange }}>
              {savingsLine}
            </p>
            <p className="text-sm mb-6" style={{ color: templateMutedGrey }}>
              {shippingLine}
            </p>

            <div className="space-y-3">
              <Button variant="primary" size="xl" fullWidth href="/">
                {ctaText}
              </Button>
              <p className="text-xs" style={{ color: templateMutedGrey }}>
                {ctaSubtext}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
