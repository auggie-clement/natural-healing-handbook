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
                If you've ever felt overwhelmed by conflicting natural remedy advice—or scared of making the wrong call when someone you love isn't feeling well—you're not alone. Like thousands of health-conscious caregivers, I spent years collecting screenshots, bookmarking blogs, and still feeling unsure at 2 AM. Then I discovered a safety-first system that tells you what to try, what to avoid, and exactly when to get professional help. Keep reading for 10 reasons this old-meets-new guide is changing how families handle common health concerns in 2026.
            </p>
        </div>
      </div>
    </Card>
  );
};
