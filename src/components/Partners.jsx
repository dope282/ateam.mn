import { Fragment } from 'react';
import { useLang } from '../i18n.jsx';
import { partners } from '../content.js';
import { Reveal, RevealLine } from '../motion/Reveal.jsx';
import { SectionLabel } from './SectionLabel.jsx';
import './Partners.css';

export function Partners() {
  const { t } = useLang();
  const [line1, line2] = t(partners.title);

  // Rendered twice so the marquee loops seamlessly
  const names = (
    <span className="partners__marquee-group">
      {partners.items.map((p) => (
        <Fragment key={p.name}>
          <span className="partners__marquee-name">{p.name.toUpperCase()}</span>
          <span className="accent">/</span>
        </Fragment>
      ))}
    </span>
  );

  return (
    <section id="partners" className="partners">
      <div className="section-head partners__head">
        <h2 className="h2">
          <RevealLine>{line1}</RevealLine>
          <RevealLine delay={100} className="accent">{line2}</RevealLine>
        </h2>
        <SectionLabel number="05" text={partners.label} />
      </div>

      <div className="partners__marquee">
        <div data-marquee="0.8" className="partners__marquee-track">
          {names}
          {names}
        </div>
      </div>

      <div className="partners__grid-wrap">
        <div className="partners__grid">
          {partners.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 60} className="partner">
              <span className="partner__name">{p.name}</span>
              <span className="partner__field">{p.field}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
