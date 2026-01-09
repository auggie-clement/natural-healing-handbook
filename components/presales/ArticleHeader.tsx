import React from 'react';
import { Author } from './types';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

interface ArticleHeaderProps {
  author: Author;
  updatedDate: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ author, updatedDate }) => {
  return (
    <Card className="p-8 md:p-12 mb-12 text-center bg-gradient-to-b from-white to-slate-50 border-slate-200">
      <Badge variant="accent" className="mb-6">Trending in Health</Badge>
      
      <h1 className="text-3xl md:text-5xl leading-tight font-serif font-bold text-ink mb-6 tracking-tight">
        I Tried <span className="text-brand-green underline decoration-brand-green/30 underline-offset-4">Herbal Remedies for 30 Days</span> — Here’s What Really Changed
      </h1>
      
      <p className="text-lg md:text-xl text-ink-light font-serif mb-8 max-w-3xl mx-auto leading-relaxed">
        Go beyond the supplement aisle. This $37 kitchen-counter handbook has sold thousands of copies to readers over 50 — and it’s packed with herbal combinations backed by modern studies.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 border-t border-slate-200 pt-8 mt-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-sm">
             <img src="https://randomuser.me/api/portraits/women/44.jpg" alt={author.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
             <div className="text-sm font-bold text-ink">{author.name}</div>
             <div className="text-xs text-ink-light">{author.role}</div>
          </div>
        </div>
        <div className="hidden md:block w-px h-8 bg-slate-200"></div>
        <div className="text-sm text-ink-light">
          Updated <span className="font-medium text-ink">{updatedDate}</span>
        </div>
      </div>
    </Card>
  );
};
