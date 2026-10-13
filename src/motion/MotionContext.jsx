import { createContext, useContext, useMemo } from 'react';
import { MOTION, CUSTOM_CURSOR } from '../config.js';

const MotionContext = createContext({ off: true, k: 1, cursor: false });

/** Reads config.js + the OS "reduce motion" setting once, and shares it. */
export function MotionProvider({ children }) {
  const value = useMemo(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const off = MOTION === 'off' || reduced;
    return {
      off,
      k: MOTION === 'calm' ? 0.6 : 1, // multiplies every duration/delay
      cursor: CUSTOM_CURSOR && !off && !window.matchMedia('(pointer: coarse)').matches,
    };
  }, []);
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export const useMotion = () => useContext(MotionContext);

export const EASE_OUT = 'cubic-bezier(.16,1,.3,1)';
