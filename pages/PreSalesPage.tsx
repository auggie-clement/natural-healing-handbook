import React from 'react';
import { Leaf } from 'lucide-react';
import { TopBanner } from '../components/presales/TopBanner';
import { StickyBadges } from '../components/presales/StickyBadges';
import { ArticleHeader } from '../components/presales/ArticleHeader';
import { SummaryBox } from '../components/presales/SummaryBox';
import { ArticleContent } from '../components/presales/ArticleContent';
import { Footer } from '../components/presales/Footer';
import { Container } from '../components/presales/ui/Container';

export default function PreSalesPage() {
  const authorData = {
    name: "Dr. Elara Vance",
    role: "Family Wellness Researcher"
  };

  return (
    <div className="min-h-screen bg-surface-subtle font-inter selection:bg-brand-green/20 selection:text-brand-darkGreen">
      <TopBanner />
      <StickyBadges />

      <header className="py-4 bg-white border-b border-slate-100 shadow-sm relative z-30 sticky top-[38px] md:top-[42px]">
        <Container>
            <div className="flex justify-center md:justify-start">
                <div className="flex items-center gap-2">
                    <Leaf className="text-brand-green w-6 h-6 md:w-8 md:h-8 fill-current" />
                    <div className="flex flex-col leading-none">
                        <span className="font-serif font-bold text-xl md:text-2xl text-ink tracking-tight">ancient</span>
                        <span className="font-serif text-sm md:text-base text-ink-light tracking-wide uppercase">remedies</span>
                    </div>
                </div>
            </div>
        </Container>
      </header>

      <main className="pt-8 md:pt-12 pb-20">
        <Container size="narrow">
            <ArticleHeader 
                author={authorData}
                updatedDate="January 2026"
            />
            <SummaryBox />
            <ArticleContent />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
