import { useLang } from '../i18n.jsx';
import { oyuTolgoi } from '../content.js';
import { Reveal, RevealLine } from '../motion/Reveal.jsx';
import { CountUp } from '../motion/CountUp.jsx';
import { SectionLabel } from './SectionLabel.jsx';
import siteImage from '../assets/images/oyu-tolgoi.png';
import './OyuTolgoi.css';

export function OyuTolgoi() {
  const { t } = useLang();

  return (
    <section id="oyutolgoi" className="ot">
      <div data-parallax="-0.12" className="slash ot__slash" />

      <div className="ot__left">
        <SectionLabel number="04" text={oyuTolgoi.label} className="ot__label" />
        <div className="ot__big">
          <span className="line-mask ot__top-mask">
            <Reveal as="span" type="line" className="line ot__top">TOP</Reveal>
          </span>
          <RevealLine delay={120} className="accent">
            <CountUp to={20} />
          </RevealLine>
        </div>
        <Reveal as="p" delay={200} className="ot__headline">
          {t(oyuTolgoi.headline)}
        </Reveal>
      </div>

      <div className="ot__right">
        <Reveal type="wipe" duration={1400} className="ot__photo">
          <img src={siteImage} alt="Oyu Tolgoi site" />
        </Reveal>
        <Reveal as="p" className="ot__body">
          {t(oyuTolgoi.body)}
        </Reveal>
        <div className="ot__facts">
          <Reveal className="ot__fact">
            <span className="ot__fact-value">
              ~<CountUp to={8} /> км
            </span>
            <span className="ot__fact-label">{t(oyuTolgoi.distanceLabel)}</span>
          </Reveal>
          <Reveal delay={120} className="ot__fact">
            <span className="ot__fact-value">{t(oyuTolgoi.region)}</span>
            <span className="ot__fact-label">{t(oyuTolgoi.regionLabel)}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
