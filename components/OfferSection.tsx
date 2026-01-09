import React from 'react';
import { Check, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const Guarantee: React.FC = () => {
    return (
        <section className="section bg-white border-y border-brand-border">
            <div className="page-container max-w-4xl">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-shrink-0 bg-brand-light p-8 rounded-full border border-brand-border shadow-soft">
                        <img src="https://picsum.photos/seed/seal/180/180" alt="60 Day Guarantee Seal" className="w-32 h-32 object-contain rounded-full mix-blend-multiply" />
                    </div>
                    <div className="text-center md:text-left space-y-5">
                        <h3 className="font-serif font-extrabold text-3xl text-brand-dark tracking-tight">60-Day Money-Back Guarantee — No Questions Asked</h3>
                        <p className="section-lead text-base">We believe in these remedies — and we believe in your right to try them risk-free.</p>
                        <p className="text-brand-muted leading-relaxed">If you don't feel a noticeable difference in your energy, sleep, digestion, or pain relief — just send the book back within 60 days and we'll refund every penny.</p>
                        <div className="pill bg-brand-light text-brand-primary border-brand-primary/20">
                            No hoops. No hassle. Just healing that works.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const OfferCard: React.FC = () => {
  return (
    <section id="offer" className="section bg-brand-light/30">
      <div className="page-container">
        <div className="text-center mb-12">
            <h2 className="section-heading mb-4">
            Ready to Finally Feel Like Yourself Again?
            </h2>
            <p className="section-lead mx-auto">One clear plan. Organized by symptom. Built for real life.</p>
        </div>

        <div className="max-w-4xl mx-auto card overflow-hidden">
          
          {/* Limited Time Banner */}
          <div className="bg-brand-dark text-white text-center py-3 text-sm font-extrabold tracking-widest uppercase">
            Limited Time Offer
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
            
            {/* Left Column */}
            <div>
                <div className="flex justify-center lg:justify-start mb-8">
                    <div className="relative group">
                    <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full group-hover:bg-brand-primary/30 transition-all"></div>
                    <img src="https://picsum.photos/seed/bundle/300/250" alt="Book Bundle" className="relative rounded-2xl shadow-lg border border-white transform group-hover:-translate-y-1 transition-transform duration-500" />
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={18} className="text-brand-primary" />
                    <h3 className="font-serif font-extrabold text-2xl text-brand-dark">Natural Healing Handbook Bundle</h3>
                </div>
                <p className="text-brand-muted text-base mb-8 leading-relaxed">The Complete Guide to Safe, Natural Blood Sugar Support—Backed by Tradition and Science.</p>

                <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-brand-border pb-3">
                        <span className="text-sm font-bold text-brand-text">The Natural Healing Handbook</span>
                        <span className="text-sm font-bold text-brand-muted/50 line-through">$60 Value</span>
                    </div>
                    <div className="text-xs text-brand-muted pl-4 font-medium flex items-center gap-1">
                        <Check className="inline-block w-3 h-3 text-brand-primary" /> 200+ targeted herbal recipes
                    </div>
                    
                    <div className="flex justify-between items-baseline border-b border-brand-border pb-3 pt-2">
                        <span className="text-sm font-bold text-brand-text">BONUS #1: Backyard Medicine Garden</span>
                        <span className="text-sm font-bold text-brand-muted/50 line-through">$25 Value</span>
                    </div>
                    
                    <div className="flex justify-between items-baseline border-b border-brand-border pb-3 pt-2">
                        <span className="text-sm font-bold text-brand-text">BONUS #2: Herbal SOS Quick Start Guide</span>
                        <span className="text-sm font-bold text-brand-muted/50 line-through">$20 Value</span>
                    </div>

                    <div className="flex justify-between items-baseline pt-2 text-brand-muted text-xs font-semibold">
                        <span className="flex items-center"><ShieldCheck size={14} className="mr-1 text-brand-primary"/> 60-Day Money-Back Guarantee</span>
                        <span>No questions asked.</span>
                    </div>
                </div>
            </div>

            {/* Right Column (Pricing) */}
            <div className="bg-brand-cream p-6 rounded-3xl text-center border border-brand-border shadow-soft h-full flex flex-col justify-center">
                <div className="mb-6">
                    <p className="text-xs font-extrabold tracking-widest text-brand-muted uppercase mb-2">Today's Price</p>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-5xl font-extrabold text-brand-dark tracking-tight">$37</span>
                        <div className="flex flex-col items-start text-xs text-brand-muted">
                            <span className="line-through decoration-brand-accent decoration-2 text-base">$105</span>
                            <span className="text-brand-accent font-bold">(Save $68)</span>
                        </div>
                    </div>
                </div>
                
                <div className="pill bg-green-100 text-green-700 border-green-200 mb-6 mx-auto">
                    High Demand: Few Left
                </div>

                <Button as="a" href="#offer" variant="primary" size="xl" fullWidth className="shadow-lg mb-4 text-lg">
                    SEND ME MY COPY
                </Button>
                
                <div className="flex justify-center items-center gap-2 opacity-70">
                    <CreditCard size={16} />
                    <span className="text-xs font-mono text-brand-muted">Secure Payment</span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
