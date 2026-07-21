'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index — each step delays entrance by 80ms, for grids of cards. */
  index?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Fades/slides content up once as it scrolls into view. Respects
 * prefers-reduced-motion (renders content in its final state immediately,
 * no motion) and only ever plays once per element.
 */
export function Reveal({ children, className, index = 0 }: RevealProps) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
}
