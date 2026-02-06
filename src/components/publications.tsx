'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, Award, Lightbulb } from 'lucide-react';
import { SectionHeader } from './section-header';
import { publications, patents } from '@/data/portfolio';

export function Publications() {
  return (
    <section id="publications" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Research"
          title="Research & Innovation"
          subtitle="Contributing to the advancement of AI and cloud computing through academic research and patents."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Publications */}
          <div className="lg:col-span-2 space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                    {pub.title}
                  </h4>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="View publication"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="tag-pill text-xs">
                    {pub.journal}
                  </span>
                  <span className="text-xs text-muted-foreground">{pub.authors}</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {pub.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Patents & Research Profiles */}
          <div className="space-y-6">
            {/* Patent */}
            {patents.map((patent) => (
              <motion.div
                key={patent.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 border-l-4 border-l-accent"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="tag-pill text-xs bg-accent/10 text-accent border-accent/20">
                    {patent.status}
                  </span>
                </div>

                <h4 className="font-semibold text-sm mb-3">{patent.title}</h4>

                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <p><span className="font-medium text-foreground/80">Office:</span> {patent.office}</p>
                  <p><span className="font-medium text-foreground/80">Application:</span> {patent.number}</p>
                  <p><span className="font-medium text-foreground/80">Year:</span> {patent.year}</p>
                </div>

                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {patent.description}
                </p>
              </motion.div>
            ))}

            {/* Research Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 className="font-semibold text-sm mb-4">Research Profiles</h4>
              <div className="space-y-2">
                <a
                  href="https://www.researchgate.net/profile/M-Mostagir-Bhuiyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-cyan-500/10">
                    <FileText className="w-3.5 h-3.5 text-cyan-500" />
                  </div>
                  <span className="text-sm group-hover:text-primary transition-colors flex-1">
                    ResearchGate
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://scholar.google.com/citations?user=RYJK2CcAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10">
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className="text-sm group-hover:text-primary transition-colors flex-1">
                    Google Scholar
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
