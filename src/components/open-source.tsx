'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { SectionHeader } from './section-header';
import { siteConfig } from '@/data/portfolio';

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Open Source"
          subtitle="Actively contributing to the developer community. Top 1% TypeScript engineers globally."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Algora Widget */}
          <div className="w-full max-w-2xl mb-8">
            <div className="glass-card rounded-2xl p-2 overflow-hidden">
              <img
                src={`https://api.algora.io/user/${siteConfig.github}/widget`}
                alt="GitHub Contributions"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* GitHub Profile Link */}
          <motion.a
            href={`https://github.com/${siteConfig.github}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
