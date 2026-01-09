import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import type { Review, FaqItem } from '../types';

export const Testimonials: React.FC = () => {
    const reviews: Review[] = [
        { id: 1, name: "Clara D., 58", rating: 5, text: "Better sleep in 3 nights. Clearer thinking in a week. I'd tried everything for brain fog — but this was the first thing that actually helped. I can focus again.", title: "Better sleep in 3 nights", image: "https://picsum.photos/seed/u1/60/60" },
        { id: 2, name: "Jim R., 65", rating: 5, text: "My joint pain dropped 80% — and I didn't need a single pill. The recipe was so simple. I already had the ingredients. No more ibuprofen every morning.", title: "Joint pain dropped 80%", image: "https://picsum.photos/seed/u2/60/60" },
        { id: 3, name: "Vanessa M., 63", rating: 5, text: "This book gave me my energy back. I thought I was just 'getting older.' Turns out, my body just needed the right kind of support.", title: "Energy back", image: "https://picsum.photos/seed/u3/60/60" },
        { id: 4, name: "Eric W., 60", rating: 5, text: "Finally off my reflux meds — after 7 years. I used one recipe with lemon, ginger, and honey. It worked better than anything else I've tried.", title: "Off meds after 7 years", image: "https://picsum.photos/seed/u4/60/60" }
    ];

    return (
        <section id="reviews" className="section bg-brand-light/40">
            <div className="page-container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="section-heading mb-4">Real People. Real Relief.</h2>
                    <p className="section-lead">Stories from readers who wanted something practical, gentle, and easy to follow.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {reviews.map(review => (
                        <div key={review.id} className="card card-hover p-8 border-brand-border/50">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex text-brand-gold">
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <div className="pill text-[10px] py-1 px-2 h-auto">Verified</div>
                            </div>
                            
                            <h4 className="font-serif font-extrabold text-xl mb-3 text-brand-dark tracking-tight">"{review.title}"</h4>
                            <p className="text-brand-muted mb-8 text-base leading-relaxed">"{review.text}"</p>
                            
                            <div className="flex items-center gap-4 border-t border-brand-border/60 pt-6 mt-auto">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full grayscale opacity-80 border border-brand-border" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm text-brand-text">{review.name}</span>
                                    <span className="text-xs text-brand-primary font-bold">Verified Buyer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FaqItem[] = [
        { question: "What Makes The Natural Healing Handbook Different from Other Herbal Books?", answer: "Unlike encyclopedias that just list plants, this is a protocol-based guide. We organize everything by ailment (Sleep, Pain, Digestion) and give you exact recipes with precise dosages. No guesswork." },
        { question: "Do I Need Special Equipment to Prepare the Remedies?", answer: "No. If you have a spoon, a cup, and a pot, you're ready. 95% of the remedies use standard kitchen tools." },
        { question: "How Quickly Can I Expect to See Results from the Remedies?", answer: "Some remedies, like the digestive teas, work in minutes. Others, for chronic inflammation or joint pain, typically show significant improvement within 7-14 days of consistent use." },
        { question: "Is the Book Suitable for Beginners?", answer: "Absolutely. We avoid complex botany terms. Everything is written in plain English with clear, step-by-step instructions." },
        { question: "How Soon Will I Receive My Copy?", answer: "We ship orders within 24 hours from our US warehouse. You can expect your copy in 3-5 business days." },
        { question: "Is This Safe for People Over 60?", answer: "Yes, these remedies are gentle. However, we always recommend showing the recipes to your doctor if you are on specific prescription medications." }
    ];

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faq" className="section bg-white">
             <div className="page-container max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
                    <p className="section-lead mx-auto">Quick answers so you know exactly what you’re getting.</p>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="card overflow-hidden">
                            <button 
                                onClick={() => toggle(idx)}
                                className={`w-full text-left p-6 flex justify-between items-center transition-all ${openIndex === idx ? 'bg-brand-dark text-white' : 'bg-white text-brand-text hover:bg-brand-light/50'}`}
                            >
                                <span className="font-extrabold text-sm md:text-lg pr-8">{faq.question}</span>
                                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} className="text-brand-muted" />}
                            </button>
                            {openIndex === idx && (
                                <div className="p-6 bg-brand-cream text-brand-muted text-base leading-relaxed border-t border-brand-border">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};