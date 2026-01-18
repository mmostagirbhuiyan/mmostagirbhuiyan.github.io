'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { SectionHeader } from './section-header';
import { siteConfig } from '@/data/portfolio';

export function GitHubContributions() {
  const algoraWidgetUrl = `https://algora.io/og/user/${siteConfig.github}`;
  const githubProfileUrl = `https://github.com/${siteConfig.github}`;

  return (
    <section id="contributions" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Open Source"
          subtitle="Actively contributing to the developer community. Top 1% TypeScript engineers globally."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Algora Widget - Dark container to match widget's dark theme */}
          <div className="w-full max-w-[95%] md:max-w-4xl lg:max-w-5xl rounded-2xl overflow-hidden bg-[#0d1117] border border-[#30363d] shadow-xl">
            <img
              src={algoraWidgetUrl}
              alt={`${siteConfig.name}'s GitHub contributions - Top 1% TypeScript engineers globally`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <motion.a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
