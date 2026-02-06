'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { SectionHeader } from './section-header';
import { BentoCard } from './bento-card';
import { siteConfig } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="About Me"
          subtitle="Director-level engineering leader focused on platform architecture, AI infrastructure, and building high-performing teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Profile Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <motion.div
                className="relative shrink-0"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-border">
                  <Image
                    src={siteConfig.avatar}
                    alt={siteConfig.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 p-1.5 bg-primary rounded-lg">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1 tracking-tight">{siteConfig.name}</h3>
                <p className="text-primary font-medium mb-4 text-sm">{siteConfig.title}</p>
                <p className="text-muted-foreground leading-relaxed">
                  I lead cloud, DevOps, and platform teams to deliver reliable, secure, and
                  cost-efficient systems at scale. Deep expertise in Kubernetes, MLOps, and
                  distributed systems. Now applying that to build AI-native products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-sm">Location</span>
            </div>
            <p className="text-muted-foreground">United States</p>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-accent/10">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                <span className="font-medium text-sm">Building</span>
              </div>
              <p className="text-muted-foreground">AI Infrastructure</p>
              <p className="text-xs text-muted-foreground/70 mt-1 font-mono">Stealth Mode</p>
            </div>
          </motion.div>

          {/* Education Quick View */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-12 glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-sm">Education</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { school: 'Cornell', degree: 'MBA', status: 'Current' },
                { school: 'Dartmouth', degree: 'MEng', status: 'Graduated' },
                { school: 'Penn State', degree: 'BSc', status: 'Graduated' },
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors"
                >
                  <p className="font-semibold tracking-tight">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
