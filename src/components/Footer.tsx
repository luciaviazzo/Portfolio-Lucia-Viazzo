import { links } from '../data/content';
import { useI18n } from '../i18n';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="site-footer dark-zone" id="contacto">
      <div className="container">
        <div className="contact">
          <div>
            <h2>{t.footer.title}</h2>
            <p>{t.footer.text}</p>
          </div>
          <div className="btn-row">
            <a className="btn btn-primary" href={`mailto:${links.email}`}>{links.email}</a>
            <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn btn-secondary" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Lucia. {t.footer.made}</p>
      </div>
    </footer>
  );
}
