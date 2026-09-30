import { useState, type CSSProperties } from 'react';
import { projects, type Project } from '../data/content';
import { Icon } from './Icon';
import { ProjectDialog } from './ProjectDialog';

interface CardProps extends Project {
  onOpen: () => void;
}

function ProjectCard({ title, description, tags, accent, wide, onOpen }: CardProps) {
  return (
    <li className={wide ? 'project wide' : 'project'} style={{ '--p': accent } as CSSProperties}>
      <button className="project-link" type="button" onClick={onOpen} aria-haspopup="dialog">
        <div className="preview" aria-hidden="true">
          <div className="mock">
            <i className="dots" /><b className="l1" /><b className="l2" /><b className="l3" />
            <span className="pills"><em /><em /></span>
          </div>
        </div>
        <div className="project-body">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul className="tags">{tags.slice(0, 4).map((t) => <li key={t}>{t}</li>)}</ul>
          <span className="more">Ver proyecto<Icon name="arrow" /></span>
        </div>
      </button>
    </li>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section light-zone" id="proyectos" aria-labelledby="proyectos-title">
      <div className="container">
        <h2 className="section-title" id="proyectos-title"><Icon name="folder" />Proyectos</h2>
        <ul className="projects">
          {projects.map((p, i) => <ProjectCard key={p.title} {...p} onOpen={() => setSelected(i)} />)}
        </ul>
      </div>
      <ProjectDialog index={selected} onChange={setSelected} />
    </section>
  );
}
