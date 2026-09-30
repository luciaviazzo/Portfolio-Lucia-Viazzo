import { links } from '../data/content';
import { Icon } from './Icon';

export function Hero() {
  return (
    <section className="hero dark-zone" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Desarrolladora full stack</p>
          <h1 id="hero-title">Hola, soy <span className="accent">Lucia</span></h1>
          <p className="lead">Programadora y estudiante universitaria, buscando mi primer rol como desarrolladora full stack.</p>
          <p className="sub">Armo aplicaciones web completas: desde el backend y la base de datos hasta una interfaz que se entiende a la primera.</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
            <a className="btn btn-secondary" href={links.cv} target="_blank" rel="noopener noreferrer">
              <Icon name="file" />Ver CV<span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </div>
          <ul className="social" aria-label="Redes">
            <li><a className="icon-btn" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a></li>
            <li><a className="icon-btn" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a></li>
            <li><a className="icon-btn" href={`mailto:${links.email}`} aria-label="Enviar email"><Icon name="mail" /></a></li>
          </ul>
        </div>
        <div className="hero-photo">
          <img
            src="/assets/images/perfil.jpeg"
            alt="Retrato de Lucía Viazzo"
            width={320}
            height={320}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
