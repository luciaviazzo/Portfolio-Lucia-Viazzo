import { facts } from '../data/content';
import { Icon } from './Icon';

export function About() {
  return (
    <div className="band">
      <section className="container" id="sobre-mi" aria-labelledby="about-title">
        <div className="about dark-zone">
          <div className="about-text">
            <h2 id="about-title">Sobre mí</h2>
            <p>Soy programadora y estudio en la universidad. Estoy construyendo mi portfolio para conseguir mi primer trabajo como <strong>desarrolladora full stack junior</strong>, y me gusta probar tecnologías distintas: desde interfaces con <strong>React</strong> hasta APIs con <strong>NestJS</strong> o <strong>Spring Boot</strong>.</p>
            <p>Trabajé en una empresa de <strong>bike tours en Buenos Aires</strong>, así que conozco el turismo desde adentro. Es un rubro que me interesa y en el que me gustaría <strong>emprender</strong>.</p>
          </div>
          <ul className="facts">
            {facts.map(({ icon, title, text }) => (
              <li key={title}>
                <span className="fact-icon"><Icon name={icon} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
