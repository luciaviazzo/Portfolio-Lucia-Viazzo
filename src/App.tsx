import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { useScrollReveal } from './hooks';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';

export function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}
