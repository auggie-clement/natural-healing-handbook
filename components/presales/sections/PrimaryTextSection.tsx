import React from 'react';
import { FINAL_PAGE_COPY } from '../finalPageCopy';

const isLayerLine = (line: string) => /^Layer\s+\d+\s+—\s+/.test(line);

function renderParagraph(line: string, key: string | number) {
  // Heading (black)
  if (line === "The Real Problem Isn't 'Natural vs. Conventional'") {
    return (
      <h2
        key={key}
        className="text-3xl md:text-4xl font-serif font-bold text-ink leading-tight pt-2"
      >
        {line}
      </h2>
    );
  }

  // Accent heading (blue in the template)
  if (line === 'Introducing: The 3-Layer Safety-First System') {
    return (
      <h3
        key={key}
        className="text-2xl md:text-3xl font-serif font-bold text-[#1e3a5f] leading-tight pt-2"
      >
        {line}
      </h3>
    );
  }

  // Bold emphasis (template)
  if (line === 'You need a system.') {
    return (
      <p key={key} className="font-bold text-ink">
        {line}
      </p>
    );
  }

  // Inline bold emphasis (template)
  if (line.startsWith("And here's what I learned:")) {
    const prefix = "And here's what I learned: ";
    const emphasized = line.slice(prefix.length);

    return (
      <p key={key}>
        <span>{prefix}</span>
        <strong className="font-bold text-ink">{emphasized}</strong>
      </p>
    );
  }

  return <p key={key}>{line}</p>;
}

function renderLayerList(items: string[], key: string | number) {
  return (
    <ul
      key={key}
      className="list-disc list-outside pl-10 md:pl-12 space-y-3 marker:text-ink"
    >
      {items.map((item) => {
        // Bold the label through the first colon, like the template.
        const colonIndex = item.indexOf(':');
        const label = colonIndex >= 0 ? item.slice(0, colonIndex + 1) : item;
        const rest = colonIndex >= 0 ? item.slice(colonIndex + 1) : '';

        return (
          <li key={item} className="text-ink/80 pl-2">
            <strong className="font-bold text-ink">{label}</strong>
            {rest}
          </li>
        );
      })}
    </ul>
  );
}

export const PrimaryTextSection: React.FC = () => {
  const paragraphs = FINAL_PAGE_COPY.primaryText;

  // Build blocks so we can render the Layer 1/2/3 lines as a proper bullet list.
  const blocks: React.ReactNode[] = [];
  for (let i = 0; i < paragraphs.length; i += 1) {
    const line = paragraphs[i];

    if (isLayerLine(line)) {
      const items: string[] = [line];

      // Collect consecutive Layer lines.
      let j = i + 1;
      while (j < paragraphs.length && isLayerLine(paragraphs[j])) {
        items.push(paragraphs[j]);
        j += 1;
      }

      blocks.push(renderLayerList(items, `layers-${i}`));
      i = j - 1;
      continue;
    }

    blocks.push(renderParagraph(line, i));
  }

  return (
    <div className="space-y-12 mb-16">
      {/* Product image placeholder (as provided in the final copy) */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-card">
        <p className="text-ink-light text-base md:text-lg leading-relaxed italic">
          {FINAL_PAGE_COPY.productImagePlaceholder}
        </p>
      </div>

      {/* Main narrative + mechanism */}
      <div className="space-y-6 text-lg leading-relaxed text-ink/80">
        {blocks}
      </div>
    </div>
  );
};
