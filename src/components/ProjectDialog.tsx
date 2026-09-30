import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { projects, type Project } from '../data/content';
import { Icon } from './Icon';

const sqlRows = [
  { name: 'Remera lisa', value: 240 },
  { name: 'Taza', value: 198 },
  { name: 'Mochila', value: 171 },
  { name: 'Botella', value: 133 },
  { name: 'Gorra', value: 96 },
];

function QueryPreview() {
  const max = sqlRows[0].value;
  return (
    <div className="demo">
      <div className="demo-bar">
        <span className="demo-dots"><i /><i /><i /></span>
        <span className="demo-url">consultas.app</span>
      </div>
      <div className="demo-body">
        <p className="demo-question">¿Cuáles fueron los 5 productos más vendidos en agosto?</p>
        <p className="demo-label">SQL generado</p>
        <pre className="demo-sql">{`SELECT p.nombre, SUM(v.cantidad) AS total
FROM ventas v JOIN productos p ON p.id = v.producto_id
WHERE v.fecha BETWEEN '2026-08-01' AND '2026-08-31'
GROUP BY p.nombre ORDER BY total DESC LIMIT 5;`}</pre>
        <ul className="demo-rows">
          {sqlRows.map(({ name, value }) => (
            <li key={name}>
              <span>{name}</span>
              <span className="demo-track"><span style={{ width: `${(value / max) * 100}%` }} /></span>
              <b>{value}</b>
            </li>
          ))}
        </ul>
        <p className="demo-input">Preguntá algo sobre tus datos…</p>
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
  label: string;
  illustrative: boolean;
}

function buildSlides(project: Project): Slide[] {
  const illustrations: Slide[] = [
    {
      node: project.preview === 'query' ? <QueryPreview /> : <GenericPreview variant="main" />,
      label: 'Pantalla principal',
      illustrative: true,
    },
    { node: <GenericPreview variant="list" />, label: 'Listado', illustrative: true },
    { node: <GenericPreview variant="chart" />, label: 'Gráficos', illustrative: true },
  ];
  const photos: Slide[] = (project.images ?? []).map((img) => ({
    node: <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />,
    label: img.alt,
    illustrative: false,
  }));
  return [...photos, ...illustrations];
}

function Carousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const last = slides.length - 1;

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className="carousel" role="group" aria-roledescription="carrusel" aria-label="Imágenes del proyecto">
      <div
        className="modal-preview"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); goTo(Math.min(current + 1, last)); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(Math.max(current - 1, 0)); }
        }}
      >
        <div
          className="carousel-track"
          ref={track}
          tabIndex={0}
          onScroll={(e) => {
            const el = e.currentTarget;
            setCurrent(Math.round(el.scrollLeft / el.clientWidth));
          }}
        >
          {slides.map((s, i) => (
            <div
              className="carousel-slide"
              key={i}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${slides.length}: ${s.label}`}
            >
              {s.node}
            </div>
          ))}
        </div>
        <button className="car-btn prev" type="button" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Imagen anterior">
          <span className="flip"><Icon name="arrow" /></span>
        </button>
        <button className="car-btn next" type="button" onClick={() => goTo(current + 1)} disabled={current === last} aria-label="Imagen siguiente">
          <Icon name="arrow" />
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button key={i} type="button" onClick={() => goTo(i)} aria-label={`Ir a la imagen ${i + 1}`} aria-current={i === current ? 'true' : undefined} />
        ))}
      </div>
      {slides[current]?.illustrative && <p className="modal-caption">Vista ilustrativa con datos de ejemplo</p>}
    </div>
  );
}

interface Props {
  index: number | null;
  onChange: (index: number | null) => void;
}

export function ProjectDialog({ index, onChange }: Props) {
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
          <p className="sr-only" role="status">{`Proyecto ${index + 1} de ${total}: ${project.title}`}</p>
          <div className="modal-head">
            <p>{project.kind}</p>
            <div className="modal-tools">
              <button className="modal-btn modal-close" type="button" onClick={() => onChange(null)} aria-label="Cerrar">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>

          <div className="modal-content">
            <div className="modal-visual">
              <Carousel key={index} slides={buildSlides(project)} />
            </div>

            <div className="modal-info">
              <h2 id="modal-title">{project.title}</h2>
              <h3>De qué se trata</h3>
              <p className="modal-about">{project.about}</p>
              <h3>Lo que hace</h3>
              <ul className="modal-features">
                {project.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <h3 className="modal-tech-title">Tecnologías</h3>
              <ul className="chips">
                {project.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="modal-actions">
                <a className="more more-primary" href={project.demo ?? project.repo} target="_blank" rel="noopener noreferrer">Ver demo</a>
                <a className="more" href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <nav className="modal-nav" aria-label="Otros proyectos">
            <button type="button" onClick={() => onChange((index - 1 + total) % total)}>
              <span className="chev flip"><Icon name="arrow" /></span>
              <span><small>Anterior</small>{prev.title}</span>
            </button>
            <button type="button" className="next" onClick={() => onChange((index + 1) % total)}>
              <span><small>Siguiente</small>{next.title}</span>
              <span className="chev"><Icon name="arrow" /></span>
            </button>
          </nav>
        </div>
      )}
    </dialog>
  );
}
