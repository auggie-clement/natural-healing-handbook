import React from 'react';
import { TopBanner } from '../components/presales/TopBanner';
import { StickyBadges } from '../components/presales/StickyBadges';
import { Container } from '../components/presales/ui/Container';
import { HeadingSection } from '../components/presales/sections/HeadingSection';
import { SummarySection } from '../components/presales/sections/SummarySection';
import { PrimaryTextSection } from '../components/presales/sections/PrimaryTextSection';
import { ListicleSection } from '../components/presales/sections/ListicleSection';
import { OfferSection } from '../components/presales/sections/OfferSection';
import { GuaranteeSection } from '../components/presales/sections/GuaranteeSection';
import { FinalCTASection } from '../components/presales/sections/FinalCTASection';
import { DisclaimersSection } from '../components/presales/sections/DisclaimersSection';

export default function PreSalesPage() {
  return (
    <div className="min-h-screen bg-surface-subtle font-inter selection:bg-brand-green/20 selection:text-brand-darkGreen">
      <TopBanner />
      <StickyBadges />

      <main className="pt-24 md:pt-28 pb-20">
        <Container size="narrow">
          <HeadingSection />
          <SummarySection />
          <PrimaryTextSection />
          <ListicleSection />
          <OfferSection />
          <GuaranteeSection />
          <FinalCTASection />
          <DisclaimersSection />
        </Container>
      </main>
    </div>
  );
}
