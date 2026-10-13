import { useRef } from 'react';
import { useMotion } from './MotionContext.jsx';

/**
 * A link/button that leans toward the mouse.
 *   <Magnetic href="#contact" className="btn btn--red">…</Magnetic>
 *   <Magnetic as="button" type="submit">…</Magnetic>
 * The CSS class should include `translate` in its transition (see .btn).
 */
export function Magnetic({ as: Tag = 'a', children, ...rest }) {
  const ref = useRef(null);
  const { off } = useMotion();

  const onMouseMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.22;
    const dy = (e.clientY - r.top - r.height / 2) * 0.35;
    el.style.translate = `${dx}px ${dy}px`;
  };
  const onMouseLeave = () => (ref.current.style.translate = '');

  const handlers = off ? {} : { onMouseMove, onMouseLeave };
  return (
    <Tag ref={ref} {...rest} {...handlers}>
      {children}
    </Tag>
  );
}
