import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { useScrollReveal } from './hooks';
import { useI18n } from './i18n';

export function App() {
  const { t } = useI18n();
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
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
