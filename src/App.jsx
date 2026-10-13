import { useScrollEffects } from './motion/useScrollEffects.js';
import { Cursor } from './motion/Cursor.jsx';
import { Nav } from './components/Nav.jsx';
import { Hero } from './components/Hero.jsx';
import { Ribbons } from './components/Ribbons.jsx';
import { About } from './components/About.jsx';
import { Advantages } from './components/Advantages.jsx';
import { Products } from './components/Products.jsx';
import { OyuTolgoi } from './components/OyuTolgoi.jsx';
import { Partners } from './components/Partners.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

// Page order — хэсгүүдийн дараалал. Хэсэг нэмэх/хасах бол энд засна.
export function App() {
  useScrollEffects();

  return (
    <>
      <div data-progress className="progress" />
      <Nav />
      <Hero />
      <Ribbons />
      <About />
      <Advantages />
      <Products />
      <OyuTolgoi />
      <Partners />
      <Contact />
      <Footer />
      <Cursor />
    </>
  );
}
