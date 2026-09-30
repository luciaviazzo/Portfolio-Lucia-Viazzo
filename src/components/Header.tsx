import { useEffect, useRef, useState } from 'react';
import { links, navIds } from '../data/content';
import { useActiveSection } from '../hooks';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

export function Header() {
  const { t, toggle } = useI18n();
  const active = useActiveSection(navIds);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const firstOpen = useRef(true);

  // Al abrir el menú el foco pasa al primer enlace; al cerrarlo vuelve al botón.
  useEffect(() => {
    if (firstOpen.current) { firstOpen.current = false; return; }
    if (open) navRef.current?.querySelector('a')?.focus();
  }, [open]);

  // Cierra el menú con Esc, al hacer clic fuera o al pasar a pantalla ancha.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 761px)');
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    mq.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={t.header.homeAria}>
          <span className="brand-mark"><Icon name="code" /></span>
          <span className="brand-name">Lucia</span>
        </a>

        <nav ref={navRef} className={open ? 'nav is-open' : 'nav'} id="menu-principal" aria-label={t.header.navAria}>
          <ul>
            {navIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
                  {t.header.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn header-gh lang-btn"
            type="button"
            onClick={toggle}
            lang={t.header.switchLangCode}
            aria-label={t.header.switchLangAria}
          >
            {t.header.switchLangShort}
          </button>
          <a
            className="icon-btn header-gh"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.githubAria}
          >
            <Icon name="github" />
          </a>
          <button
            ref={burgerRef}
            className="icon-btn header-gh burger"
            type="button"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger-lines" aria-hidden="true"><i /><i /><i /></span>
          </button>
        </div>
      </div>
    </header>
  );
}
