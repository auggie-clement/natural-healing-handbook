import React, { useEffect, useMemo, useState } from "react";
import { Truck, ShieldCheck, Menu, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../utils/cn";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-brand-darkGreen/95 backdrop-blur-sm text-white py-2.5 text-center text-xs sm:text-sm font-medium px-4 tracking-wide border-b border-brand-green/30 shadow-sm">
      🎉 LIMITED-TIME SPECIAL — TODAY ONLY: GET UP TO 50% OFF + 2 FREE GIFTS!
    </div>
  );
};

export const ShippingBanner: React.FC = () => {
  return (
    <div className="bg-white text-ink text-xs sm:text-sm py-2 text-center font-semibold px-4 shadow-sm relative z-50 border-b border-brand-border">
      <span className="font-extrabold" style={{ color: '#228B22' }}>$37 Today</span>
      <span className="text-ink-light"> (Bundle Value $105)</span>
      <span className="text-ink-light"> • Over 50,000 Copies Sold • Ships in 3-5 Days</span>
    </div>
  );
};

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = useMemo(
    () => [
      { label: "What’s inside", href: "#whats-inside" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
    ],
    []
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-brand-border/50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-white/80 backdrop-blur-md py-3"
      )}
    >
      <div className="page-container flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-brand-light border border-brand-primary/10 flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="font-serif font-extrabold text-brand-dark text-xl group-hover:text-brand-primary transition-colors">
              A
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-serif font-extrabold text-brand-dark text-lg tracking-tight">
              Ancient <span className="text-brand-primary">Remedies</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-brand-muted">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-dark hover:bg-brand-light/50 px-3 py-1.5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-brand-muted">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-brand-primary" />
              Verified Secure
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck size={16} className="text-brand-primary" />
              Free Shipping
            </span>
          </div>

          <Button
            as="a"
            href="#offer"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get the handbook <ArrowRight size={16} />
          </Button>

          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-border bg-white hover:bg-brand-light transition"
            aria-label="Open menu"
          >
            <Menu className="text-brand-muted" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export const StickyFooter: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full z-50 border-t border-brand-border bg-white/95 backdrop-blur-xl shadow-soft transition-all duration-500 ease-in-out transform",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-full pointer-events-none"
      )}
    >
      <div className="page-container py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="hidden sm:flex flex-col">
          <span className="font-serif font-extrabold text-brand-dark">
            The Natural Healing Handbook
          </span>
          <span className="text-xs text-brand-muted font-bold inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            In Stock & Ready to Ship
          </span>
        </div>

        <div className="w-full sm:w-auto flex items-center gap-4">
          <div className="hidden sm:block text-right leading-tight">
            <span className="block text-xs text-brand-muted line-through">
              $105.00
            </span>
            <span className="block font-extrabold text-xl" style={{ color: '#228B22' }}>
              $37.00
            </span>
          </div>

          <Button
            as="a"
            href="#offer"
            size="md"
            fullWidth
            className="sm:w-auto shadow-lg shadow-brand-primary/20"
          >
            Get The Book Now <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-border mt-12">
      <div className="page-container py-12 md:py-16">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-2xl bg-brand-light border border-brand-primary/10 flex items-center justify-center">
            <span className="font-serif font-extrabold text-brand-primary text-xl">
              A
            </span>
          </div>
          <span className="font-serif font-extrabold text-brand-dark text-xl">
            Ancient <span className="text-brand-primary">Remedies</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-brand-muted mb-10">
          <a href="#" className="hover:text-brand-dark transition">
            Home
          </a>
          <a href="#" className="hover:text-brand-dark transition">
            Refund Policy
          </a>
          <a href="#" className="hover:text-brand-dark transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-brand-dark transition">
            Contact Us
          </a>
        </div>

        <div className="divider-fade mb-8"></div>

        <p className="text-xs text-brand-muted/70 max-w-3xl mx-auto leading-relaxed text-center">
          Disclaimer: These statements have not been evaluated by the Food and
          Drug Administration. This book is not intended to diagnose, treat,
          cure, or prevent any disease. The information provided is for
          educational purposes only.
        </p>

        <p className="text-xs text-brand-muted/50 text-center mt-6">
          © {new Date().getFullYear()} Ancient Remedies Press. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
