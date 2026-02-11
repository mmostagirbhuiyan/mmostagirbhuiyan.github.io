'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, BookOpen } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const letterVariants = {
    hidden: { y: 80, opacity: 0, rotateX: 40 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: i * 0.04,
      },
    }),
  };

  const name = siteConfig.name;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Overline */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Building AI Infrastructure
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="text-display mb-8 overflow-visible" style={{ perspective: '600px' }}>
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block gradient-text pb-4"
                style={{ transformOrigin: 'bottom' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-6 max-w-3xl mx-auto tracking-tight"
          >
            {siteConfig.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            10+ years leading cloud, DevOps, and AI-driven distributed systems.
            Cornell MBA Candidate + Dartmouth MEng.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-20"
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </motion.a>

            <motion.a
              href={`https://github.com/${siteConfig.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card hover:border-primary/30 hover:bg-secondary transition-all duration-300 font-medium"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>

            <motion.a
              href={siteConfig.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card hover:border-primary/30 hover:bg-secondary transition-all duration-300 font-medium"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </motion.a>
          </motion.div>

          {/* Stats - Horizontal Strip */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 md:gap-16 flex-wrap"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '5', label: 'AWS Certifications' },
              { value: '4', label: 'Publications' },
              { value: '1', label: 'Patent Pending' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground tracking-wide uppercase font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 inset-x-0 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
