import { useLang } from '../i18n.jsx';
import { hero } from '../content.js';
import { Reveal, RevealLine, RevealInstant } from '../motion/Reveal.jsx';
import { CountUp } from '../motion/CountUp.jsx';
import { Magnetic } from '../motion/Magnetic.jsx';
import heroImage from '../assets/images/hero-warehouse.png';
import './Hero.css';

export function Hero() {
  const { t } = useLang();
  const titleLines = t(hero.title);

  return (
    // Everything in the hero animates on page load, not on scroll.
    <RevealInstant>
      <header id="top" className="hero">
        {/* ── Left: text ── */}
        <div className="hero__text">
          <Reveal className="hero__eyebrow">
            <span className="hero__tick" />
            <span>{t(hero.eyebrow)}</span>
          </Reveal>

          <h1 className="hero__title">
            {titleLines.map((line, i) => (
              <RevealLine key={i} delay={80 + i * 100} className={i === titleLines.length - 1 ? 'accent' : ''}>
                {line}
              </RevealLine>
            ))}
          </h1>

          <Reveal as="p" delay={420} className="hero__lead">
            {t(hero.lead)}
          </Reveal>

          <Reveal delay={520} className="hero__ctas">
            <Magnetic href="#products" className="btn btn--dark">
              <span>{t(hero.primaryCta)}</span>
              <span>→</span>
            </Magnetic>
            <Magnetic href="#about" className="btn btn--outline">
              {t(hero.secondaryCta)}
            </Magnetic>
          </Reveal>
        </div>

        {/* ── Right: photo with red slashes + spinning badge ── */}
        <div className="hero__visual">
          <Reveal type="slash" duration={1300} className="slash hero__slash hero__slash--wide" />
          <Reveal type="slash" delay={140} duration={1300} className="slash hero__slash hero__slash--thin" />
          <Reveal type="slash" delay={260} duration={1300} className="slash hero__slash hero__slash--back" />

          <Reveal type="photo" delay={200} duration={1500} className="photo hero__photo">
            <img data-parallax="0.08" src={heroImage} alt="Ateam warehouse" />
          </Reveal>

          <Reveal delay={900} className="hero__badge">
            <svg data-spin viewBox="0 0 150 150" width="150" height="150" className="hero__badge-ring">
              <defs>
                <path id="badge-circle" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
              </defs>
              <text>
                <textPath href="#badge-circle">{hero.badge.ring}</textPath>
              </text>
            </svg>
            <div className="hero__badge-center">
              <span className="hero__badge-small">{hero.badge.small}</span>
              <span className="hero__badge-year">{hero.badge.year}</span>
            </div>
          </Reveal>
        </div>

        {/* ── Bottom: stats ── */}
        <div className="hero__stats">
          {hero.stats.map((stat, i) => (
            <Reveal key={i} delay={600 + i * 100} className="hero__stat">
              <span className="hero__stat-value">
                {stat.prefix}
                <CountUp to={stat.value} />
                {stat.suffix}
              </span>
              <span className="hero__stat-label pre-line">{t(stat.label)}</span>
            </Reveal>
          ))}
        </div>
      </header>
    </RevealInstant>
  );
}
