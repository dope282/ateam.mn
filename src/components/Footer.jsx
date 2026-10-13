import { useLang } from '../i18n.jsx';
import { footer } from '../content.js';
import logo from '../assets/images/logo.png';
import './Footer.css';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src={logo} alt="ateam" className="footer__logo" />
          <span className="footer__tagline">{t(footer.tagline)}</span>
        </div>
        <a href="#top" className="footer__back">
          <span>{t(footer.backToTop)}</span>
          <span>↑</span>
        </a>
      </div>
      <div className="footer__bottom">
        <span>{footer.copyright}</span>
        <span>{footer.place}</span>
      </div>
    </footer>
  );
}
