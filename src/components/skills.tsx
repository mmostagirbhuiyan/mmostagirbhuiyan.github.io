'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Shield,
  Users,
} from 'lucide-react';
import { SectionHeader } from './section-header';
import { skills } from '@/data/portfolio';

const categoryIcons: Record<string, typeof Brain> = {
  ai: Brain,
  cloud: Cloud,
  development: Code2,
  architecture: Cpu,
  security: Shield,
  leadership: Users,
};

const categoryColors: Record<string, string> = {
  ai: 'text-violet-500',
  cloud: 'text-blue-500',
  development: 'text-emerald-500',
  architecture: 'text-orange-500',
  security: 'text-red-500',
  leadership: 'text-pink-500',
};

export function Skills() {
  // Duplicate for seamless loop
  const marqueeItems = [...skills, ...skills];

  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Expertise"
          title="Skills & Expertise"
          subtitle="A decade of experience across cloud architecture, AI/ML, and engineering leadership."
          align="center"
        />
      </div>

      {/* Marquee */}
      <div className="marquee-container mb-12">
        <div className="marquee-track">
          {marqueeItems.map((skill, index) => {
            const Icon = categoryIcons[skill.category] || Code2;
            const color = categoryColors[skill.category] || 'text-gray-500';

            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 px-6 py-3 mx-2 rounded-full border border-border bg-card/50 backdrop-blur-sm shrink-0 hover:border-primary/30 transition-colors cursor-default"
              >
                <Icon className={`w-4 h-4 ${color} shrink-0`} />
                <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {Object.entries(categoryColors).map(([category, color]) => {
            const Icon = categoryIcons[category];
            const count = skills.filter(s => s.category === category).length;
            return (
              <div
                key={category}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm"
              >
                <Icon className={`w-3.5 h-3.5 ${color}`} />
                <span className="capitalize font-medium">{category}</span>
                <span className="text-muted-foreground text-xs">({count})</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
