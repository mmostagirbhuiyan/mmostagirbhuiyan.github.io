'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { SectionHeader } from './section-header';
import { education, certifications } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Credentials"
          title="Education & Certifications"
          subtitle="A foundation in both engineering excellence and business strategy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-primary/10">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-bold text-lg tracking-tight">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-6 bottom-6 w-px bg-border" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="glass-card rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h4 className="font-semibold tracking-tight">{edu.institution}</h4>
                      <span
                        className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          edu.status === 'Now Attending'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-accent/10">
                <Award className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-bold text-lg tracking-tight">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 shrink-0">
                    <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors truncate">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>

                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* AWS Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-accent" />
                <h4 className="font-semibold text-sm">5x AWS Certified</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Including both Professional-level certifications (Solutions Architect & DevOps Engineer)
                demonstrating deep expertise in AWS cloud architecture and operations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
