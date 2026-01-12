import React from 'react';
import { Card } from './Card';

interface FeatureBlockProps {
  index: number;
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ index, title, children, imageSrc, imageAlt }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`py-12 md:py-16 ${isEven ? 'bg-brand-mint/50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-3xl' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className={`w-full shrink-0 order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <Card className="shadow-elevated rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-black/5">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </Card>
        </div>
        <div className={`w-full space-y-4 order-2 ${isEven ? 'md:order-1 md:pr-4' : 'md:order-2 md:pl-4'}`}>
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-white text-sm font-bold shrink-0 mt-1 shadow-sm ring-2 ring-green-100">
               {index}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink leading-tight">
               {title}
            </h3>
          </div>
          <div className="text-ink/80 leading-relaxed space-y-4 text-lg pl-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
