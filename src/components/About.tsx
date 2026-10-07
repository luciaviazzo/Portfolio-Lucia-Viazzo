import { useEffect, useRef, useState } from 'react';
import { factIcons } from '../data/content';
import { Rich, useI18n } from '../i18n';
import { Icon } from './Icon';

function FactDialog({ index, onClose }: { index: number | null; onClose: () => void }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const fact = index === null ? null : t.about.facts[index];

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="modal fact-modal"
      aria-labelledby="fact-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {fact && index !== null && (
        <div className="modal-panel">
          <div className="modal-head">
            <p>{t.about.title}</p>
            <div className="modal-tools">
              <button className="modal-btn" type="button" onClick={onClose} aria-label={t.modal.close}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
          <div className="fact-body">
            <span className="fact-icon fact-icon-lg"><Icon name={factIcons[index]} /></span>
            <h2 id="fact-title">{fact.title}</h2>
            <p className="modal-about">{fact.more}</p>
            <ul className="modal-features">
              {fact.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      )}
    </dialog>
  );
}

export function About() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="band">
      <section className="container" id="sobre-mi" aria-labelledby="about-title">
        <div className="about dark-zone">
          <div className="about-text">
            <h2 id="about-title"><Icon name="user" />{t.about.title}</h2>
            <p><Rich text={t.about.p1} /></p>
            <p><Rich text={t.about.p2} /></p>
          </div>
          <ul className="facts">
            {t.about.facts.map(({ title, text }, i) => (
              <li key={i}>
                <button className="fact-btn" type="button" onClick={() => setSelected(i)} aria-haspopup="dialog">
                  <span className="fact-icon"><Icon name={factIcons[i]} /></span>
                  <span className="fact-text"><span className="fact-title">{title}</span><span className="fact-desc">{text}</span></span>
                  <span className="fact-more"><Icon name="arrow" /></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <FactDialog index={selected} onClose={() => setSelected(null)} />
      </section>
    </div>
  );
}
