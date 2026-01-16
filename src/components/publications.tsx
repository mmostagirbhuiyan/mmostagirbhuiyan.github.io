'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, Award, Lightbulb } from 'lucide-react';
import { SectionHeader } from './section-header';
import { publications, patents } from '@/data/portfolio';

export function Publications() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="publications" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Research & Innovation"
          subtitle="Contributing to the advancement of AI and cloud computing through academic research and patents."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Publications */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Publications</h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  variants={item}
                  className="glass-card rounded-2xl p-6 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors">
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

                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                      {pub.journal}
                    </span>
                    <span>{pub.authors}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Patents */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Patents</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {patents.map((patent) => (
                <div
                  key={patent.title}
                  className="glass-card rounded-2xl p-6 border-l-4 border-accent"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {patent.status}
                    </span>
                  </div>

                  <h4 className="font-semibold text-base mb-2">{patent.title}</h4>

                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium">Office:</span> {patent.office}
                    </p>
                    <p>
                      <span className="font-medium">Application:</span> {patent.number}
                    </p>
                    <p>
                      <span className="font-medium">Year:</span> {patent.year}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {patent.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Research Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 glass-card rounded-2xl p-6"
            >
              <h4 className="font-semibold mb-4">Research Profiles</h4>
              <div className="space-y-3">
                <a
                  href="https://www.researchgate.net/profile/M-Mostagir-Bhuiyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <FileText className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className="text-sm group-hover:text-primary transition-colors">
                    ResearchGate
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </a>

                <a
                  href="https://scholar.google.com/citations?user=RYJK2CcAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <FileText className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm group-hover:text-primary transition-colors">
                    Google Scholar
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
