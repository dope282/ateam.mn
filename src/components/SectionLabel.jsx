import { useLang } from '../i18n.jsx';
import { Reveal } from '../motion/Reveal.jsx';

/** "01  Бидний тухай" — numbered mono label at the top of each section. */
export function SectionLabel({ number, text, className = '' }) {
  const { t } = useLang();
  return (
    <Reveal as="span" className={`label ${className}`}>
      <span>{number}</span>
      <span className="label__text">{t(text)}</span>
    </Reveal>
  );
}
