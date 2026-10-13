import { useEffect, useRef, useState } from 'react';
import { useMotion } from './MotionContext.jsx';

/** Number that counts from 0 up to `to` when it scrolls into view. */
export function CountUp({ to }) {
  const ref = useRef(null);
  const { off, k } = useMotion();
  const [value, setValue] = useState(off ? to : 0);

  useEffect(() => {
    if (off) return;
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const duration = 1700 * k;
      const start = performance.now() + 200;
      const step = (now) => {
        const p = Math.min(1, Math.max(0, (now - start) / duration));
        setValue(Math.round(to * (1 - Math.pow(1 - p, 4)))); // ease-out quart
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [off, k, to]);

  return <span ref={ref}>{value}</span>;
}
