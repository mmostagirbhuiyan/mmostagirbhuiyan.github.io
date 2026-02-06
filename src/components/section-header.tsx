'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  label?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
  className,
  label,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs font-mono tracking-widest uppercase text-primary mb-4">
          {label}
        </span>
      )}
      <h2 className="text-display-sm">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed",
          align === 'center' && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
