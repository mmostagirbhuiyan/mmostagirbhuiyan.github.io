'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground max-w-2xl",
          align === 'center' && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
