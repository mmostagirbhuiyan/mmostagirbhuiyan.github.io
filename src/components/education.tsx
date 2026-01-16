'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { SectionHeader } from './section-header';
import { education, certifications } from '@/data/portfolio';

export function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education & Certifications"
          subtitle="A foundation in both engineering excellence and business strategy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  variants={item}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="glass-card rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-semibold text-lg">{edu.institution}</h4>
                      <span
                        className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Now Attending'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-green-500/10 text-green-500'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-2xl p-5 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors truncate">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>

                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* AWS Badge Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 glass-card rounded-2xl p-6"
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                5x AWS Certified
              </h4>
              <p className="text-sm text-muted-foreground">
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
