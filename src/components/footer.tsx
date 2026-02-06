'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="font-medium text-foreground">{siteConfig.name}</span>
          </div>

          <div className="text-xs text-muted-foreground font-mono tracking-wide">
            Next.js + Tailwind + Framer Motion
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
