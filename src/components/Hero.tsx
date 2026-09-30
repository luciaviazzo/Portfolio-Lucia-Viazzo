import { links } from '../data/content';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section className="hero dark-zone" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="hero-title">{h.hi} <span className="accent">Lucia</span></h1>
          <p className="lead">{h.lead}</p>
          <p className="sub">{h.sub}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#proyectos">{h.viewProjects}</a>
            <a className="btn btn-secondary" href={links.cv} target="_blank" rel="noopener noreferrer">
              <Icon name="file" />{h.viewCv}<span className="sr-only">{h.newTab}</span>
            </a>
          </div>
          <ul className="social" aria-label={h.socialAria}>
            <li><a className="icon-btn" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a></li>
            <li><a className="icon-btn" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a></li>
            <li><a className="icon-btn" href={`mailto:${links.email}`} aria-label={h.emailAria}><Icon name="mail" /></a></li>
          </ul>
        </div>
        <div className="hero-photo">
          <img
            src="/assets/images/perfil.jpeg"
            alt={h.photoAlt}
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
