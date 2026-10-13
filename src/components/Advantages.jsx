import { useLang } from '../i18n.jsx';
import { advantages } from '../content.js';
import { Reveal, RevealLine } from '../motion/Reveal.jsx';
import { SectionLabel } from './SectionLabel.jsx';
import './Advantages.css';

export function Advantages() {
  const { t } = useLang();

  return (
    <section id="advantages" className="advantages">
      <div className="section-head">
        <h2 className="h2">
          <RevealLine>{t(advantages.title)}</RevealLine>
        </h2>
        <SectionLabel number="02" text={advantages.label} />
      </div>

      <div className="advantages__grid">
        {advantages.items.map((item, i) => (
          <Reveal key={i} delay={(i % 3) * 80} className="advantage">
            <span className="advantage__num">/{String(i + 1).padStart(2, '0')}</span>
            <div className="advantage__body">
              <h3 className="advantage__title">{t(item.title)}</h3>
              <p className="advantage__text">{t(item.text)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
