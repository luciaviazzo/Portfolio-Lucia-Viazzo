import { links } from '../data/content';

export function Footer() {
  return (
    <footer className="site-footer dark-zone" id="contacto">
      <div className="container">
        <div className="contact">
          <div>
            <h2>¿Hablamos?</h2>
            <p>Estoy abierta a oportunidades como desarrolladora full stack junior y a proyectos desafiantes. Escribime y charlamos.</p>
          </div>
          <div className="btn-row">
            <a className="btn btn-primary" href={`mailto:${links.email}`}>{links.email}</a>
            <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn btn-secondary" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Lucia. Hecho con cariño y mucho café.</p>
      </div>
    </footer>
  );
}
