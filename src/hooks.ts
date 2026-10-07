import { useEffect, useLayoutEffect, useState } from 'react';

/** Devuelve el id de la sección que está en el centro del viewport. */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const REVEAL = '.section-title, .project, .about, .tech-card, .contact';

/** Anima con fade-up los bloques de la página cuando entran en pantalla. */
export function useScrollReveal(): void {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const els = [...document.querySelectorAll<HTMLElement>(REVEAL)];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).dataset.reveal = 'in';
          observer.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    els.forEach((el) => {
      // Escalonado entre hermanos: cada tarjeta entra un poco después de la anterior.
      const index = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
      el.style.setProperty('--d', `${Math.min(index, 5) * 90}ms`);
      el.dataset.reveal = 'pending';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
