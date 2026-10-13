import { useEffect } from 'react';
import { useMotion } from './MotionContext.jsx';

/**
 * One animation loop for every scroll-driven effect on the page.
 * Mark elements in JSX with these attributes:
 *
 *   data-progress            red reading-progress bar (scaleX 0 → 1)
 *   data-parallax="0.08"     moves against the scroll; bigger = stronger
 *   data-scrub               text fills in as you scroll (sets CSS var --p)
 *   data-marquee="1"         endless horizontal ticker; value = speed, negative = reverse.
 *                            Its content must be two identical halves.
 *   data-spin                slowly rotates; spins faster while scrolling
 *
 * Marquees and spin get a speed boost from scroll velocity.
 * Uses the CSS `translate` / `rotate` properties so it never fights an element's own `transform`.
 */
export function useScrollEffects() {
  const { off, k } = useMotion();

  useEffect(() => {
    const all = (sel) => [...document.querySelectorAll(sel)];
    const bar = document.querySelector('[data-progress]');
    const parallax = all('[data-parallax]');
    const scrubs = all('[data-scrub]');
    const marquees = all('[data-marquee]').map((el) => ({ el, x: 0, speed: +el.dataset.marquee || 1 }));
    const spins = all('[data-spin]');

    if (!off) scrubs.forEach((s) => s.style.setProperty('--p', '0%'));

    let lastY = scrollY;
    let velocity = 0;
    let rotation = 0;
    let raf;

    const tick = () => {
      const y = scrollY;
      const vh = innerHeight;
      velocity += (y - lastY - velocity) * 0.12;
      lastY = y;

      if (bar) {
        const max = document.documentElement.scrollHeight - vh;
        bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }

      if (!off) {
        parallax.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const fromCenter = r.top + r.height / 2 - vh / 2;
          el.style.translate = `0 ${(-fromCenter * +el.dataset.parallax).toFixed(1)}px`;
        });

        scrubs.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (!r.height) return;
          const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.25)));
          el.style.setProperty('--p', `${(p * 100).toFixed(1)}%`);
        });

        const boost = 1 + Math.min(Math.abs(velocity) * 0.18, 8);
        marquees.forEach((m) => {
          const half = m.el.scrollWidth / 2;
          if (!half) return;
          m.x -= 0.7 * m.speed * boost * k;
          if (m.x <= -half) m.x += half;
          if (m.x > 0) m.x -= half;
          m.el.style.translate = `${m.x.toFixed(1)}px 0`;
        });

        rotation += (0.18 + Math.min(Math.abs(velocity) * 0.25, 6)) * k;
        spins.forEach((s) => (s.style.rotate = `${rotation}deg`));
      }

      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [off, k]);
}
