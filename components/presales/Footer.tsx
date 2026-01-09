import React from 'react';
import { Leaf } from 'lucide-react';
import { Container } from './ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkGreen text-white/80 py-12 text-center text-xs font-sans border-t border-white/10">
      <Container>
        
        {/* Logo in Footer */}
        <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Leaf className="text-white w-6 h-6 fill-current" />
                <div className="flex flex-col leading-none text-left">
                    <span className="font-serif font-bold text-lg tracking-tight text-white">ancient</span>
                    <span className="font-serif text-xs tracking-wide uppercase text-white/70">remedies</span>
                </div>
            </div>
        </div>

        {/* Links */}
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-white/40 max-w-lg mx-auto leading-relaxed">
            &copy; {new Date().getFullYear()} GreenHaven Press. &copy; {new Date().getFullYear()} Ancient Remedies. All Rights Reserved.
            <br/>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </Container>
    </footer>
  );
};