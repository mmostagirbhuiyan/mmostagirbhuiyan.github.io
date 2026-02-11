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

const categoryTitles: Record<string, string> = {
  leadership: 'Leadership & Strategy',
  cloud: 'Cloud & Infrastructure',
  architecture: 'Architecture & Design',
  ai: 'AI & Machine Learning',
  security: 'Security & Compliance',
  development: 'Development & Engineering',
};

const categoryOrder = ['leadership', 'cloud', 'architecture', 'ai', 'security', 'development'];

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
      <div className="marquee-container mb-16">
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

      {/* Professional Skill Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryOrder.map((category, index) => {
            const Icon = categoryIcons[category];
            const color = categoryColors[category];
            const categorySkills = skills.filter(s => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-secondary/50 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{categoryTitles[category]}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-2">
                  {categorySkills.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className={`mt-1.5 w-1 h-1 rounded-full ${color} bg-current shrink-0`}></span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
