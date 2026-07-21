'use client';

import { useEffect, useState } from 'react';

/**
 * framer-motion's own useReducedMotion() queries the media feature in
 * boolean context ("(prefers-reduced-motion)" with no value), which at
 * least some Chromium builds resolve differently to the explicit
 * "(prefers-reduced-motion: reduce)" form — it can silently report false
 * even when reduce is set. This queries the explicit form directly.
 */
export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}
