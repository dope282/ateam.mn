import { useLang } from '../i18n.jsx';
import { products } from '../content.js';
import { Reveal, RevealLine } from '../motion/Reveal.jsx';
import { SectionLabel } from './SectionLabel.jsx';
import productsImage from '../assets/images/products-handoff.png';
import './Products.css';

export function Products() {
  const { t } = useLang();
  const [line1, line2] = t(products.title);

  return (
    <section id="products" className="products">
      {/* Left column sticks while the list scrolls */}
      <div className="products__aside">
        <div className="products__heading">
          <SectionLabel number="03" text={products.label} />
          <h2 className="h2">
            <RevealLine>{line1}</RevealLine>
            <RevealLine delay={100} className="accent">{line2}</RevealLine>
          </h2>
        </div>
        <Reveal type="photo" duration={1400} className="photo products__photo">
          <img data-parallax="0.06" src={productsImage} alt="Ateam warehouse handoff" />
        </Reveal>
      </div>

      <div className="products__list">
        {products.items.map((item, i) => (
          <a key={i} href="#contact" className="product-row">
            <span className="product-row__sweep" />
            <span className="product-row__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="product-row__body">
              <span className="product-row__name">{t(item.name)}</span>
              <span className="product-row__brands">{item.brands}</span>
            </span>
            <span className="product-row__arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
