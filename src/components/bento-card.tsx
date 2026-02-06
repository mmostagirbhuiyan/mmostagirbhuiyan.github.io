'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  delay?: number;
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
}: BentoCardProps) {
  const colSpanClasses = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-2 lg:col-span-3',
    4: 'col-span-2 lg:col-span-4',
  };

  const rowSpanClasses = {
    1: 'row-span-1',
    2: 'row-span-1 md:row-span-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
      className={cn(
        'glass-card rounded-2xl p-4 sm:p-6 overflow-hidden',
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
