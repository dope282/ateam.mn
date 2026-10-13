import { createContext, useContext, useLayoutEffect, useRef } from 'react';
import { useMotion, EASE_OUT } from './MotionContext.jsx';

/**
 * Scroll-in animations.
 *
 *   <Reveal type="up" delay={120}>…</Reveal>      fade + slide up
 *   <Reveal type="photo">…</Reveal>               diagonal clip reveal (uses the element's CSS clip-path as the end state)
 *   <Reveal type="wipe">…</Reveal>                left-to-right clip reveal
 *   <Reveal type="slash">…</Reveal>               slides in from the left
 *   <RevealLine delay={100}>Headline line</RevealLine>   text line rising out of a mask
 *
 * Inside <RevealInstant> (used by the hero) everything plays on page load
 * instead of waiting to scroll into view.
 */

const FROM = {
  up: { opacity: '0', transform: 'translateY(48px)' },
  line: { transform: 'translateY(108%)' },
  photo: { clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)' },
  wipe: { clipPath: 'inset(0 100% 0 0)' },
  slash: { transform: 'translateX(-260%)' },
};

// These types are hidden by their parent's overflow, so watch the parent instead.
const OBSERVE_PARENT = ['line', 'wipe', 'photo'];

const InstantContext = createContext(false);
export const RevealInstant = ({ children }) => (
  <InstantContext.Provider value={true}>{children}</InstantContext.Provider>
);

export function Reveal({ as: Tag = 'div', type = 'up', delay = 0, duration = 1100, children, ...rest }) {
  const ref = useRef(null);
  const { off, k } = useMotion();
  const instant = useContext(InstantContext);

  useLayoutEffect(() => {
    const el = ref.current;
    if (off || !el) return;

    // End state = whatever the CSS says; start state = FROM[type].
    const cs = getComputedStyle(el);
    const keys = Object.keys(FROM[type]);
    const to = Object.fromEntries(keys.map((key) => [key, cs[key]]));
    const from =
      type === 'slash'
        ? { transform: `translateX(-260%) ${to.transform === 'none' ? '' : to.transform}` }
        : FROM[type];

    Object.assign(el.style, from);
    const clearInline = () => keys.forEach((key) => (el.style[key] = ''));

    let fired = false;
    const play = () => {
      fired = true;
      clearInline();
      el.animate([from, to], { duration: duration * k, delay: delay * k, easing: EASE_OUT, fill: 'backwards' });
    };

    if (instant) {
      play();
      return;
    }

    const target = OBSERVE_PARENT.includes(type) ? el.parentElement : el;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.01 }
    );
    io.observe(target);
    return () => {
      io.disconnect();
      if (!fired) clearInline();
    };
  }, [off, k, instant, type, delay, duration]);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}

/** One headline line that slides up from behind a mask. */
export function RevealLine({ delay = 0, className = '', children }) {
  return (
    <span className="line-mask">
      <Reveal as="span" type="line" delay={delay} className={`line ${className}`}>
        {children}
      </Reveal>
    </span>
  );
}
