import React from 'react';
import { 
  TopBanner, 
  ShippingBanner, 
  Header, 
  Footer, 
  StickyFooter 
} from './components/Layout';
import { HeroSection, TrustBar } from './components/HeroSection';
import { 
  WhatYouUnlock, 
  ProblemSolution, 
  DiagnosisSection, 
  IngredientsGrid 
} from './components/ContentSections';
import { OfferCard, Guarantee } from './components/OfferSection';
import { Testimonials, FAQ } from './components/SocialProof';
import { Button } from './components/ui/Button';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-surface-subtle text-brand-text pb-24 md:pb-0 selection:bg-brand-green/20 selection:text-brand-darkGreen">
      <TopBanner />
      <ShippingBanner />
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        
        <div id="whats-inside">
          <WhatYouUnlock />
        </div>
        
        <ProblemSolution />
        
        <section className="section bg-brand-light/40 border-b border-brand-border/50">
          <div className="page-container flex flex-col items-center">
             <div className="text-center max-w-3xl space-y-4 mb-12">
               <h2 className="section-heading">Why Thousands Trust This Book Over Pills, Googling, or Guesswork</h2>
               <p className="section-lead mx-auto">A simple, organized playbook — with clear recipes — so you can stop trial-and-error.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: "Everything's Organized", desc: "No sifting through chapters. Flip right to digestion, sleep, or pain." },
                 { title: "Exact Herbs. Exact Dosages.", desc: "No guessing. You get the best combo for each condition." },
                 { title: "Zero Research Rabbit Holes", desc: "Stop bouncing between blogs. Everything is in one place, vetted." },
                 { title: "Natural, Not Naive", desc: "Real herbs with real scientific backing. No woo-woo." }
               ].map((item, i) => (
                 <div key={i} className="card card-hover p-8 text-center bg-white">
                    <h3 className="font-serif font-extrabold text-lg mb-3 text-brand-dark tracking-tight">{item.title}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        <DiagnosisSection />
        <IngredientsGrid />
        <Testimonials />
        <OfferCard />
        <Guarantee />
        <FAQ />

        <section className="section bg-brand-light text-center border-t border-brand-border relative overflow-hidden">
           {/* Decorative bg */}
           <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
              <div className="absolute right-0 top-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px]"></div>
           </div>
           
           <div className="page-container relative z-10 max-w-3xl">
              <h2 className="font-serif font-extrabold text-3xl md:text-5xl text-brand-dark mb-6 tracking-tight">
                Lasting Relief Starts Here — Naturally
              </h2>
              <p className="text-xl text-brand-muted mb-2">You don't need to "just live with it."</p>
              <p className="text-xl text-brand-muted mb-10">You need a plan that works with your body — not against it.</p>
              
              <div className="card p-10 max-w-lg mx-auto">
                <p className="mb-8 font-medium text-brand-text leading-relaxed">Join the more than 50,000 readers who are using time-tested natural remedies to reclaim their energy, clarity, and comfort.</p>
                <Button as="a" href="#offer" variant="primary" size="xl" fullWidth>GET THE NATURAL HEALING HANDBOOK</Button>
              </div>
           </div>
        </section>

      </main>

      <Footer />
      <StickyFooter />
    </div>
  );
}

export default App;
