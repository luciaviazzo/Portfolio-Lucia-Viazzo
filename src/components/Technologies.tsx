import type { CSSProperties } from 'react';
import { techGroups } from '../data/content';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

export function Technologies() {
  const { t } = useI18n();

  return (
    <section className="section light-zone" id="tecnologias" aria-labelledby="tech-title">
      <div className="container">
        <h2 className="section-title" id="tech-title"><Icon name="code" />{t.tech.title}</h2>
        <div className="tech-groups">
          {techGroups.map(({ id, accent, items }) => (
            <div className="tech-group" key={id} style={{ '--p': accent } as CSSProperties}>
              <h3 className="tech-group-label">{t.tech.groups[id]}</h3>
              <ul className="tech-list">
                {items.map(({ name, devicon, color, mono }) => (
                  <li key={name} style={color ? ({ '--brand': color } as CSSProperties) : undefined}>
                    {devicon ? (
                      <i className={`devicon-${devicon}${mono ? '' : ' colored'}`} aria-hidden="true" />
                    ) : (
                      <Icon name="chip" />
                    )}
                    {t.tech.names[name] ?? name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
