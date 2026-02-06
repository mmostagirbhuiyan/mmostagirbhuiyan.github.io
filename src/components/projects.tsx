'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './section-header';
import { projects, siteConfig } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Work"
          title="Featured Projects"
          subtitle="A selection of projects showcasing my expertise in AI, distributed systems, and cloud architecture."
        />

        {/* Featured Projects - Staggered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {projects.featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card rounded-2xl p-6 sm:p-8 group ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest uppercase text-primary mb-6"
          >
            Live Projects
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.live.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 sm:p-8 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={`https://github.com/${siteConfig.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/30 hover:bg-secondary font-medium transition-all duration-300"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
