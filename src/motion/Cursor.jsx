import { useEffect, useRef } from 'react';
import { useMotion } from './MotionContext.jsx';

const HOT = 'a, button, input, textarea, .product-row';

/** Small white dot (mix-blend difference) that trails the mouse and grows over links. */
export function Cursor() {
  const ref = useRef(null);
  const { cursor } = useMotion();

  useEffect(() => {
    if (!cursor) return;
    const dot = ref.current;
    let x = innerWidth / 2, y = innerHeight / 2, s = 1;
    let tx = x, ty = y, ts = 1;
    let raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      ts = e.target.closest?.(HOT) ? 3.4 : 1;
    };
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      s += (ts - s) * 0.15;
      dot.style.transform = `translate3d(${x - 6}px,${y - 6}px,0) scale(${s.toFixed(3)})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    loop();
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [cursor]);

  return cursor ? <div ref={ref} className="cursor" aria-hidden="true" /> : null;
}
