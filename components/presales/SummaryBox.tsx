import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card } from './ui/Card';

export const SummaryBox: React.FC = () => {
  return (
    <Card className="bg-brand-mint/40 border-brand-green/20 p-6 md:p-8 mb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-green"></div>
      <div className="flex gap-4">
        <BookOpen className="w-6 h-6 text-brand-green shrink-0 mt-1" />
        <div className="space-y-2">
            <h3 className="font-bold text-brand-darkGreen text-sm uppercase tracking-wider">Quick Summary</h3>
            <p className="text-ink/80 text-base md:text-lg leading-relaxed">
                If you’ve ever wondered whether natural approaches could hold their own against modern medicine, you’re not alone. Like many people over 50, I was starting to wonder if there were time-tested ways to feel better in my own body. Then I found <strong>The Natural Healing Handbook</strong> by Shanon Greef. It reshaped how I view natural healing. Keep reading for 10 reasons this old-meets-new guide has thousands over 50 rethinking what’s possible in 2025.
            </p>
        </div>
      </div>
    </Card>
  );
};