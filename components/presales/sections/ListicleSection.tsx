import React from 'react';
import { FINAL_PAGE_COPY } from '../finalPageCopy';
import { FeatureBlock } from '../ui/FeatureBlock';
import { Card } from '../ui/Card';

const REASON_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1532339968504-f149d6915159?q=80&w=2000&auto=format&fit=crop',
    alt: 'Herbs on table'
  },
  {
    src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1979&auto=format&fit=crop',
    alt: 'Doctor writing notes'
  },
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000&auto=format&fit=crop',
    alt: 'Senior couple cooking'
  },
  {
    src: 'https://images.unsplash.com/photo-1598511726623-d233140d343f?q=80&w=1974&auto=format&fit=crop',
    alt: 'Woman in garden'
  },
  {
    src: 'https://images.unsplash.com/photo-1556910638-6f77cc6778f6?q=80&w=2000&auto=format&fit=crop',
    alt: 'Recipe book open'
  },
  {
    src: 'https://images.unsplash.com/photo-1615485925694-a03522f701c0?q=80&w=1974&auto=format&fit=crop',
    alt: 'Turmeric ginger lemon'
  },
  {
    src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2000&auto=format&fit=crop',
    alt: 'Handbook open pages'
  },
  {
    src: 'https://images.unsplash.com/photo-1599598425947-d35270c3259e?q=80&w=2000&auto=format&fit=crop',
    alt: 'Holding plant with soil'
  },
  {
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop',
    alt: 'Vintage first aid'
  },
  {
    src: 'https://images.unsplash.com/photo-1570701564993-e00652af8aa7?q=80&w=1974&auto=format&fit=crop',
    alt: 'Happy senior couple'
  }
] as const;

const stripReasonPrefix = (title: string) => title.replace(/^REASON\s*#?\d+\s*:\s*/i, '');

const shouldItalicizeParagraph = (paragraph: string) => {
  const t = paragraph.trim();
  if (t.startsWith('⭐⭐⭐⭐⭐')) return false;

  // In the template/doc, certain quote-style lines are italic.
  if (t.startsWith("'") || t.startsWith('"') || t.startsWith('“')) return true;

  // One non-quote emphasis line in the reasons is italicized in the source doc.
  if (t.startsWith('Large, clear print.')) return true;

  return false;
};

export const ListicleSection: React.FC = () => {
  return (
    <div className="space-y-10 mb-16">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink text-center leading-tight">
        {FINAL_PAGE_COPY.listicleHeading}
      </h2>

      <div>
        {FINAL_PAGE_COPY.reasons.map((reason, idx) => {
          const image = REASON_IMAGES[idx];
          const cleanTitle = stripReasonPrefix(reason.title);

          return (
            <FeatureBlock
              key={`${idx}-${reason.title}`}
              index={idx + 1}
              title={cleanTitle}
              imageSrc={image.src}
              imageAlt={image.alt}
            >
              {reason.paragraphs.map((p, pIdx) => {
                const isTestimonial = p.trim().startsWith('⭐⭐⭐⭐⭐');

                if (isTestimonial) {
                  return (
                    <Card
                      key={`${idx}-${pIdx}`}
                      variant="flat"
                      className="p-4 text-ink-light italic text-base"
                    >
                      {p}
                    </Card>
                  );
                }

                if (shouldItalicizeParagraph(p)) {
                  return (
                    <p key={`${idx}-${pIdx}`} className="italic">
                      {p}
                    </p>
                  );
                }

                return <p key={`${idx}-${pIdx}`}>{p}</p>;
              })}
            </FeatureBlock>
          );
        })}
      </div>
    </div>
  );
};
