import { useState, type CSSProperties } from 'react';
import { projects, type Project } from '../data/content';
import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { ProjectDialog } from './ProjectDialog';

function ProjectCard({ id, status, tags, accent, wide, cover, year, onOpen }: Project & { onOpen: () => void }) {
  const { t } = useI18n();
  const text = t.projects.items[id];

  return (
    <li className={wide ? 'project wide' : 'project'} style={{ '--p': accent } as CSSProperties}>
      <button className="project-link" type="button" onClick={onOpen} aria-haspopup="dialog">
        <span className="status" data-status={status}>{t.projects.status[status]}</span>
        <div className="preview" aria-hidden="true">
          {cover
            ? <img className="preview-cover" src={cover} alt="" />
            : <div className="mock"><i className="dots" /><b className="l1" /><b className="l2" /><b className="l3" /><span className="pills"><em /><em /></span></div>
          }
        </div>
        <div className="project-body">
          <h3>{text.title}</h3>
          <p>{text.description}</p>
          <ul className="tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <span className="more">{t.projects.viewProject}<Icon name="arrow" /></span>
        </div>
      </button>
    </li>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section light-zone" id="proyectos" aria-labelledby="proyectos-title">
      <div className="container">
        <h2 className="section-title" id="proyectos-title"><Icon name="folder" />{t.projects.title}</h2>
        <ul className="projects">
          {projects.map((p, i) => <ProjectCard key={p.id} {...p} onOpen={() => setSelected(i)} />)}
        </ul>
      </div>
      <ProjectDialog index={selected} onChange={setSelected} />
    </section>
  );
}
