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
  ai: 'from-violet-500 to-purple-600',
  cloud: 'from-blue-500 to-cyan-600',
  development: 'from-green-500 to-emerald-600',
  architecture: 'from-orange-500 to-amber-600',
  security: 'from-red-500 to-rose-600',
  leadership: 'from-pink-500 to-fuchsia-600',
};

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="A decade of experience across cloud architecture, AI/ML, and engineering leadership."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => {
            const Icon = categoryIcons[skill.category] || Code2;
            const gradient = categoryColors[skill.category] || 'from-gray-500 to-slate-600';

            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 400 },
                }}
                className="group glass-card rounded-2xl p-5 cursor-default"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill Categories Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {Object.entries(categoryColors).map(([category, gradient]) => {
            const Icon = categoryIcons[category];
            return (
              <div
                key={category}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className={`p-1.5 rounded-md bg-gradient-to-br ${gradient}`}>
                  <Icon className="w-3 h-3 text-white" />
                </div>
                <span className="capitalize">{category}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
