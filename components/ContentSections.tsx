import React from 'react';
import { CheckCircle2, AlertCircle, XCircle, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

interface ContentBlockProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  points?: { title: string; desc: string }[];
  ctaText?: string;
  children?: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, imageSrc, imageAlt, reversed = false, points, ctaText, children }) => {
  return (
    <div className="section bg-white odd:bg-brand-light/30 border-b border-brand-border/50 last:border-0">
      <div className="page-container">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
               {/* Offset Background Card */}
              <div className={`absolute top-6 ${reversed ? '-right-6' : '-left-6'} w-full h-full bg-brand-light rounded-[2.5rem] border border-brand-primary/10 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 -z-10`}></div>
              <img src={imageSrc} alt={imageAlt} className="relative z-10 rounded-[2.5rem] shadow-soft-lg w-full object-cover h-[450px] md:h-[550px] border border-brand-border/50" />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="section-heading">
              {title}
            </h2>
            
            {children && <div className="section-lead">{children}</div>}

            {points && (
              <ul className="space-y-6 mt-6">
                {points.map((pt, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 bg-brand-light rounded-full p-1 h-fit ring-1 ring-brand-primary/20">
                        <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg tracking-tight">{pt.title}</h4>
                      <p className="text-brand-muted text-base leading-relaxed mt-1">{pt.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {ctaText && (
              <div className="pt-6">
                <Button as="a" href="#offer" variant="primary" size="lg">
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WhatYouUnlock: React.FC = () => {
  const points = [
    { title: "Ancient Remedies, Modern Results", desc: "Learn how to combine everyday herbs like garlic, lemon, mint and more into precision formulas that help ease pain, calm inflammation, and restore energy." },
    { title: "Fix What's Really Wrong", desc: "Target the root causes of joint pain, fatigue, poor sleep, and blood sugar swings with step-by-step herbal recipes using ingredients already in your kitchen." },
    { title: "Build Daily Healing Habits That Stick", desc: "Create simple, calming rituals that fit into your day — and leave you sleeping better, digesting smoother, and waking up clear-headed." },
    { title: "Know What Supplements Work — and Which Are a Waste", desc: "Cut through the noise with expert-backed guidance on the few natural supplements that actually work." }
  ];

  return <ContentBlock title="What You'll Unlock Inside The Natural Healing Handbook" imageSrc="https://picsum.photos/seed/healingbookinside/600/700" imageAlt="Inside the book" points={points} ctaText="GET THE NATURAL HEALING HANDBOOK TODAY!" />;
};

export const ProblemSolution: React.FC = () => {
  const points = [
    { title: "Garlic's 15-Minute Power-Up", desc: "The one prep step that supercharges garlic's impact on blood pressure and heart health." },
    { title: "The Turmeric Trap", desc: "Why taking turmeric alone is almost useless — and the kitchen spice that multiplies its power by 2,000%." },
    { title: "The Backyard Painkiller", desc: "Ignored by most...yet this common weed can quiet joint pain faster than your go-to pills." },
    { title: "The Herbal Sleep Switch", desc: "The 2-herb combo that flips your nervous system from wired to restful — naturally." }
  ];

  return <ContentBlock title="You've Been Using These Herbs All Wrong..." imageSrc="https://picsum.photos/seed/herbs/600/600" imageAlt="Herbs on a table" reversed={true} points={points} />;
};

export const DiagnosisSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="page-container max-w-5xl">
        <h2 className="section-heading text-center mb-6">
          Your Body Is Whispering...Will You Listen Before It Starts Screaming?
        </h2>
        <p className="section-lead text-center mb-16 mx-auto">
          Everyday signs like fatigue or bloating might seem harmless — but they're often the first alarms your body sends before something bigger breaks down.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Green Card */}
          <div className="card p-8 md:p-10 border-brand-primary/20 bg-brand-light/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
            <div className="pill border-brand-primary/20 bg-brand-primary/10 text-brand-primary mb-8 w-full justify-center">
              Your Body's Early Warning Signs
            </div>
            <ul className="space-y-6">
              {[
                "You Wake Up Tired: Even after 8 hours. It's not laziness — it's adrenal fatigue.",
                "Your Gut Feels Off: Bloating or 'just not right' after meals.",
                "You Ache for No Reason: Joints, back, muscles — inflammation in disguise.",
                "Headaches Are Creeping In: Often a sign of toxicity or hormonal imbalance."
              ].map((txt, i) => (
                <li key={i} className="flex gap-4 text-brand-text items-start">
                  <div className="bg-white p-1 rounded-full h-fit shadow-sm text-brand-primary ring-1 ring-brand-border">
                     <AlertCircle size={20} />
                  </div>
                  <span className="leading-relaxed">{txt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red Card */}
          <div className="card p-8 md:p-10 border-orange-200 bg-orange-50/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
            <div className="pill border-orange-200 bg-orange-100/50 text-brand-accent mb-8 w-full justify-center">
              What Happens If You Wait Too Long...
            </div>
             <ul className="space-y-6">
              {[
                "Chronic Inflammation Sets In: Suddenly that 'nagging pain' becomes arthritis.",
                "Your Organs Struggle: Liver slows down, toxins build, energy drops.",
                "Immunity Breaks Down: You're catching everything...and it takes longer to bounce back.",
                "Nerve Symptoms Sneak Up: Tingling. Numbness. Sensitivity."
              ].map((txt, i) => (
                <li key={i} className="flex gap-4 text-brand-text items-start">
                   <div className="bg-white p-1 rounded-full h-fit shadow-sm text-brand-accent ring-1 ring-brand-border">
                      <XCircle size={20} />
                   </div>
                  <span className="leading-relaxed">{txt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 text-center">
            <div className="pill border-brand-primary/30 bg-white text-brand-primary text-sm font-bold mb-8 shadow-sm px-6 py-2">
                Good News: These Are Fixable
            </div>
            <p className="mb-8 font-medium text-brand-muted text-xl max-w-2xl mx-auto">The Natural Healing Handbook helps you decode these signals — and use natural tools to fix the root cause, fast.</p>
            <Button as="a" href="#offer" variant="primary" size="xl">
              GET THE NATURAL HEALING HANDBOOK TODAY!
            </Button>
        </div>
      </div>
    </section>
  );
};

export const IngredientsGrid: React.FC = () => {
    const ingredients = [
        { name: "Olive Oil", desc: "Balances blood sugar & reduces inflammation — especially powerful when combined with lemon and garlic.", icon: "🫒" },
        { name: "Garlic", desc: "Naturally supports healthy blood pressure — if you follow the 15-minute prep rule revealed inside.", icon: "🧄" },
        { name: "Blueberries", desc: "Tiny but mighty. Rich in anthocyanins that may improve insulin response & brain clarity.", icon: "🫐" },
        { name: "Ginger", desc: "Soothes digestion, relieves bloating in minutes, and helps calm inflammation when paired with lemon.", icon: "🫚" },
        { name: "Lemon", desc: "Combats fatigue & indigestion — especially when blended into one of our 'Spice Elixirs'.", icon: "🍋" },
        { name: "Dark Chocolate", desc: "A surprisingly potent inflammation-fighter — when sourced and dosed the right way.", icon: "🍫" },
    ];

    return (
        <section className="section bg-brand-cream relative">
            <div className="page-container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="section-heading mb-6">Everyday Ingredients. Extraordinary Healing.</h2>
                    <p className="section-lead mx-auto">The Natural Healing Handbook is packed with natural remedies for over 200 ailments—many using ingredients you might already have in your kitchen.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {ingredients.map((ing, i) => (
                        <div key={i} className="card card-hover p-8 border border-brand-border/60">
                            <div className="text-5xl mb-6 bg-brand-light w-20 h-20 flex items-center justify-center rounded-2xl border border-brand-primary/10 shadow-sm">{ing.icon}</div>
                            <h3 className="font-serif font-extrabold text-xl text-brand-dark mb-3 tracking-tight">{ing.name}</h3>
                            <p className="text-brand-muted leading-relaxed">{ing.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 text-xs text-brand-muted font-bold uppercase tracking-wider flex justify-center items-center gap-2">
                    <ShieldCheck className="text-brand-primary" size={18}/> 60-Day Money-Back Guarantee • Ships Worldwide
                </div>
            </div>
        </section>
    )
}
