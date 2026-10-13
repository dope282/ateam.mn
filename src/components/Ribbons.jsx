import { Fragment } from 'react';
import { useLang } from '../i18n.jsx';
import { ribbons } from '../content.js';
import './Ribbons.css';

/** Items separated by a divider, rendered twice so the marquee can loop seamlessly. */
function Loop({ items, divider, dividerClass, groupClass }) {
  const group = (
    <span className={groupClass}>
      {items.map((item, i) => (
        <Fragment key={i}>
          <span>{item}</span>
          <span className={dividerClass}>{divider}</span>
        </Fragment>
      ))}
    </span>
  );
  return (
    <>
      {group}
      {group}
    </>
  );
}

/** Two crossed, tilted tickers under the hero: brands (dark) and categories (red). */
export function Ribbons() {
  const { t } = useLang();
  const brands = [...ribbons.brands, ...ribbons.brands];

  return (
    <section className="ribbons" aria-hidden="true">
      <div className="ribbon ribbon--dark">
        <div data-marquee="-0.7" className="ribbon__track ribbon__track--mono">
          <Loop items={brands} divider="✕" groupClass="ribbon__group ribbon__group--mono" />
        </div>
      </div>
      <div className="ribbon ribbon--red">
        <div data-marquee="1" className="ribbon__track ribbon__track--display">
          <Loop items={t(ribbons.categories)} divider="/" dividerClass="ribbon__divider" groupClass="ribbon__group ribbon__group--display" />
        </div>
      </div>
    </section>
  );
}
