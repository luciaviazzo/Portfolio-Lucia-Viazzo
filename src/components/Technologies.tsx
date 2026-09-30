import type { CSSProperties } from 'react';
import { techGroups } from '../data/content';
import { Icon } from './Icon';

export function Technologies() {
  return (
    <section className="section light-zone" id="tecnologias" aria-labelledby="tech-title">
      <div className="container">
        <h2 className="section-title" id="tech-title"><Icon name="code" />Tecnologías</h2>
        <div className="tech-grid">
          {techGroups.map(({ title, accent, items }) => (
            <article className="tech-card" key={title} style={{ '--p': accent } as CSSProperties}>
              <h3>{title}</h3>
              <ul className="tech-list">
                {items.map(({ name, devicon, color, mono }) => (
                  <li key={name} style={color ? ({ '--brand': color } as CSSProperties) : undefined}>
                    {devicon ? (
                      <i className={`devicon-${devicon}${mono ? '' : ' colored'}`} aria-hidden="true" />
                    ) : (
                      <Icon name="chip" />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
