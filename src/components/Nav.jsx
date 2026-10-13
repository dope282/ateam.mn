import { useEffect, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { nav } from '../content.js';
import { Magnetic } from '../motion/Magnetic.jsx';
import logo from '../assets/images/logo.png';
import './Nav.css';

export function Nav() {
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  // Frosted background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__logo">
        <img src={logo} alt="ateam" />
      </a>

      <div className="nav__links">
        {nav.links.map((link) => (
          <a key={link.href} href={link.href}>
            {t(link.label)}
          </a>
        ))}
      </div>

      <div className="nav__actions">
        <button className="nav__lang" onClick={toggleLang} aria-label="Switch language">
          <span className={lang === 'mn' ? 'is-active' : ''}>MN</span>
          <span className="nav__lang-sep">/</span>
          <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
        </button>
        <Magnetic href="#contact" className="nav__cta">
          {t(nav.contact)}
        </Magnetic>
      </div>
    </nav>
  );
}
