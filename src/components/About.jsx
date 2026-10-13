import { useLang } from '../i18n.jsx';
import { about } from '../content.js';
import { Reveal } from '../motion/Reveal.jsx';
import { SectionLabel } from './SectionLabel.jsx';
import teamImage from '../assets/images/team.png';
import './About.css';

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="about">
      <div className="about__intro">
        <SectionLabel number="01" text={about.label} className="about__label" />
        {/* Text fills from grey to black as you scroll (data-scrub) */}
        <p className="about__statement">
          <span data-scrub className="about__scrub">
            {t(about.statement)}
          </span>
        </p>
      </div>

      <div className="about__facts">
        {about.facts.map((fact, i) => (
          <Reveal key={i} delay={i * 120} className="about__fact">
            <span className="about__fact-title">{t(fact.title)}</span>
            <span className="about__fact-text">{t(fact.text)}</span>
          </Reveal>
        ))}
      </div>

      <figure className="about__figure">
        <Reveal type="wipe" duration={1600} className="photo about__photo">
          <img data-parallax="0.1" src={teamImage} alt="Ateam team" />
        </Reveal>
        <figcaption className="about__caption">
          <span>{t(about.caption)}</span>
          <span>{about.captionPlace}</span>
        </figcaption>
      </figure>
    </section>
  );
}
