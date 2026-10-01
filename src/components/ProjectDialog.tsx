import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { projects, type Project } from '../data/content';
import { useI18n } from '../i18n';
import type { Dict } from '../i18n/es';
import { Icon } from './Icon';

const rowValues = [240, 198, 171, 133, 96];

function QueryPreview({ t }: { t: Dict }) {
  const d = t.modal.demoPreview;
  const max = rowValues[0];
  return (
    <div className="demo">
      <div className="demo-bar">
        <span className="demo-dots"><i /><i /><i /></span>
        <span className="demo-url">{d.url}</span>
      </div>
      <div className="demo-body">
        <p className="demo-question">{d.question}</p>
        <p className="demo-label">{d.sqlLabel}</p>
        <pre className="demo-sql">{d.sql}</pre>
        <ul className="demo-rows">
          {d.rows.map((name, i) => (
            <li key={name}>
              <span>{name}</span>
              <span className="demo-track"><span style={{ width: `${(rowValues[i] / max) * 100}%` }} /></span>
              <b>{rowValues[i]}</b>
            </li>
          ))}
        </ul>
        <p className="demo-input">{d.input}</p>
      </div>
    </div>
  );
}

function GenericPreview({ variant }: { variant: 'main' | 'list' | 'chart' }) {
  return (
    <div className="demo demo-generic" aria-hidden="true">
      <div className="demo-bar"><span className="demo-dots"><i /><i /><i /></span></div>
      <div className="demo-body">
        {variant === 'main' && (
          <>
            <b className="g1" /><b className="g2" /><b className="g3" /><b className="g2" />
            <span className="pills"><em /><em /></span>
          </>
        )}
        {variant === 'list' &&
          [90, 75, 85, 60].map((w, i) => (
            <div className="g-row" key={i}><span className="g-dot" /><b style={{ width: `${w}%` }} /></div>
          ))}
        {variant === 'chart' && (
          <div className="g-chart">
            {[45, 70, 55, 90, 65, 80].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
          </div>
        )}
      </div>
    </div>
  );
}

interface Slide {
  node: ReactNode;
  /** Ruta de la captura real; se usa además como fondo difuminado del marco. */
  photo?: string;
  label: string;
  illustrative: boolean;
}

function buildSlides(project: Project, t: Dict, lang: 'es' | 'en'): Slide[] {
  const c = t.modal.carousel;
  const illustrations: Slide[] = [
    {
      node: project.preview === 'query' ? <QueryPreview t={t} /> : <GenericPreview variant="main" />,
      label: c.slideMain,
      illustrative: true,
    },
    { node: <GenericPreview variant="list" />, label: c.slideList, illustrative: true },
    { node: <GenericPreview variant="chart" />, label: c.slideChart, illustrative: true },
  ];
  const photos: Slide[] = (project.images ?? []).map((img) => ({
    node: <img src={img.src} alt={img.alt[lang]} loading="lazy" decoding="async" />,
    label: img.alt[lang],
    photo: img.src,
    illustrative: false,
  }));
  // Con capturas reales no hacen falta las ilustraciones de relleno.
  return photos.length > 0 ? photos : illustrations;
}

function Carousel({ slides }: { slides: Slide[] }) {
  const { t } = useI18n();
  const c = t.modal.carousel;
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const last = slides.length - 1;

  const goTo = (i: number) => {
    if (i === current) return;
    setDir(i > current ? 1 : -1);
    setLeaving(current);
    setCurrent(i);
  };

  return (
    <div className="carousel" role="group" aria-roledescription={c.roleDescription} aria-label={c.label}>
      <div
        className="modal-preview"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); goTo(Math.min(current + 1, last)); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(Math.max(current - 1, 0)); }
        }}
      >
        {slides.map((s, i) => {
          const isActive = i === current;
          const isLeaving = i === leaving;
          return (
            <div
              className={[
                s.photo ? 'carousel-slide is-photo' : 'carousel-slide',
                isActive ? 'is-active' : '',
                isActive && leaving !== null ? 'is-enter' : '',
                isLeaving ? 'is-leaving' : '',
              ].filter(Boolean).join(' ')}
              style={{
                ...(s.photo ? { '--photo': `url(${s.photo})` } : {}),
                ...(isActive && leaving !== null ? { '--from': `${dir}` } : {}),
                ...(isLeaving ? { '--to': `${-dir}` } : {}),
              } as CSSProperties}
              key={i}
              role="group"
              aria-roledescription={c.slideRoleDescription}
              aria-label={c.slideLabel(i + 1, slides.length, s.label)}
              aria-hidden={i !== current}
              onAnimationEnd={isLeaving ? () => setLeaving(null) : undefined}
            >
              {s.node}
            </div>
          );
        })}
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button key={i} type="button" onClick={() => goTo(i)} aria-label={c.goTo(i + 1)} aria-current={i === current ? 'true' : undefined} />
        ))}
      </div>
      {slides[current]?.illustrative && <p className="modal-caption">{c.caption}</p>}
    </div>
  );
}

interface Props {
  index: number | null;
  onChange: (index: number | null) => void;
}

export function ProjectDialog({ index, onChange }: Props) {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const project = index === null ? null : projects[index];

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Al cambiar de proyecto, volver al inicio del contenido.
  useEffect(() => {
    ref.current?.scrollTo({ top: 0 });
  }, [index]);

  const total = projects.length;
  const prev = index === null ? null : projects[(index - 1 + total) % total];
  const next = index === null ? null : projects[(index + 1) % total];
  const m = t.modal;

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      style={project ? ({ '--p': project.accent } as CSSProperties) : undefined}
      onClose={() => onChange(null)}
      onClick={(e) => e.target === ref.current && onChange(null)}
    >
      {project && index !== null && prev && next && (
        <div className="modal-panel">
          <p className="sr-only" role="status">{m.status(index + 1, total, t.projects.items[project.id].title)}</p>
          <div className="modal-head">
            <div className="modal-head-main">
              <p>{t.projects.items[project.id].kind}{project.year && <span className="modal-year">{project.year}</span>}</p>
              <span className="status" data-status={project.status}>
                <span className="sr-only">{t.projects.statusLabel}: </span>{t.projects.status[project.status]}
              </span>
            </div>
            <div className="modal-tools">
              <button className="modal-btn modal-close" type="button" onClick={() => onChange(null)} aria-label={m.close}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>

          <div className="modal-content">
            <div className="modal-visual">
              <Carousel key={`${index}-${lang}`} slides={buildSlides(project, t, lang)} />
            </div>

            <div className="modal-info">
              <h2 id="modal-title">{t.projects.items[project.id].title}</h2>
              {t.projects.items[project.id].keywords && (
                <p className="modal-keywords">{t.projects.items[project.id].keywords?.join(' · ')}</p>
              )}
              <h3>{m.aboutTitle}</h3>
              <p className="modal-about">{t.projects.items[project.id].about}</p>
              <h3>{m.featuresTitle}</h3>
              <ul className="modal-features">
                {t.projects.items[project.id].features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <h3 className="modal-tech-title">{m.techTitle}</h3>
              <ul className="chips">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              {(project.demo ?? project.repo) && (
                <div className="modal-actions">
                  {project.demo && <a className="more more-primary" href={project.demo} target="_blank" rel="noopener noreferrer">{m.demo}</a>}
                  {project.repo && <a className={`more${!project.demo ? ' more-primary' : ''}`} href={project.repo} target="_blank" rel="noopener noreferrer">{m.github}</a>}
                </div>
              )}
            </div>
          </div>
          <nav className="modal-nav" aria-label={m.otherProjects}>
            <button type="button" onClick={() => onChange((index - 1 + total) % total)}>
              <span className="chev flip"><Icon name="arrow" /></span>
              <span><small>{m.previous}</small>{t.projects.items[prev.id].title}</span>
            </button>
            <button type="button" className="next" onClick={() => onChange((index + 1) % total)}>
              <span><small>{m.next}</small>{t.projects.items[next.id].title}</span>
              <span className="chev"><Icon name="arrow" /></span>
            </button>
          </nav>
        </div>
      )}
    </dialog>
  );
}
