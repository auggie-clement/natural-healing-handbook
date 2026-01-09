import React from 'react';
import { Star, CheckCircle, ShieldCheck, Truck, Leaf } from 'lucide-react';
import { Button } from './ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-cream bg-hero-mesh">
      <div className="page-container py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Product image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/40 blur-3xl rounded-full -z-10"></div>

            <div className="absolute top-6 left-6 pill z-20 shadow-md bg-white text-brand-dark font-bold border-brand-primary/20">
              <ShieldCheck size={14} className="text-brand-primary" />
              #1 Bestseller
            </div>

            <div className="relative rounded-[2.5rem] shadow-soft-lg border-8 border-white bg-white rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/healingbook1/600/800" 
                alt="Natural Healing Handbook Cover" 
                className="w-full h-auto rounded-[2rem]"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Social Proof */}
            <div className="pill w-fit border-brand-dark/10 bg-white/60">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/48/48`} className="w-9 h-9 rounded-full border-2 border-white ring-1 ring-brand-border" alt="User" />
                ))}
              </div>
              <div className="flex flex-col pl-1">
                <div className="flex text-brand-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-extrabold text-brand-muted tracking-widest uppercase">
                  Trusted by 50,000+
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif font-extrabold tracking-tight text-brand-dark text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                The $37 Handbook Helping People Over 50 Sleep Better, Hurt Less, and Feel Like Themselves Again
              </h1>
              
              <p className="section-lead">
                Discover 100+ Proven, Precision Herbal Recipes Using Ingredients You Already Have — Like Garlic, Ginger, Lemon & More — Backed by Science, Loved by 50,000+, and Delivered Straight to Your Door.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="card p-6 sm:p-8 border-brand-primary/10 bg-white/80 backdrop-blur-sm">
                <ul className="space-y-4">
                {[
                    "Real Relief for Real Problems: Pain, Fatigue, Blood Sugar, Brain Fog & More",
                    "Step-by-Step Healing Recipes Using Kitchen Staples You Already Have",
                    "90+ Spiral-Bound Pages of Proven Herbal Combinations That Actually Work",
                    "Includes 2 FREE Bonuses + 60-Day Money-Back Guarantee"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-brand-primary flex-shrink-0 mt-0.5" size={20} fill="#dcfce7" />
                    <span className="font-medium text-brand-text leading-relaxed">{item}</span>
                    </li>
                ))}
                </ul>
            </div>

            {/* CTA */}
            <div className="space-y-4 pt-2">
              <Button as="a" href="#offer" variant="primary" size="xl" fullWidth className="shadow-soft-lg text-lg sm:text-xl">
                YES — UNLOCK MY REMEDIES NOW!
              </Button>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-xs font-bold text-brand-muted uppercase tracking-wide">
                <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-primary"/> 60-Day Guarantee</span>
                <span className="flex items-center gap-1.5"><Leaf size={16} className="text-brand-primary"/> 100% Natural</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="page-container">
        <div className="divider-fade"></div>
      </div>
    </section>
  );
};

export const TrustBar: React.FC = () => {
  const items = [
    { icon: <ShieldCheck size={28} />, title: "Try It for 60 Days, Risk-Free", desc: "If you don't feel better, return it. No questions asked." },
    { icon: <Truck size={28} />, title: "Printed in the USA & Delivered Fast", desc: "So you can start feeling better and sleeping deeper, sooner." },
    { icon: <Leaf size={28} />, title: "100+ Proven Remedies", desc: "Used by 50,000+ people over 50 to relieve pain and boost energy." },
  ];

  return (
    <section className="bg-white/50 backdrop-blur">
      <div className="page-container section py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="card card-hover p-8 text-center bg-white">
              <div className="mb-5 p-4 bg-brand-light rounded-2xl text-brand-primary inline-flex ring-1 ring-brand-primary/10">
                {item.icon}
              </div>
              <h3 className="font-serif font-extrabold text-brand-dark text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="page-container">
        <div className="divider-fade"></div>
      </div>
    </section>
  );
};
