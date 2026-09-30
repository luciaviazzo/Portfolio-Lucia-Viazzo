import type { ReactNode } from 'react';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const paths = {
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5" {...stroke} />,
  github: (
    <path
      d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
      {...stroke}
    />
  ),
  linkedin: (
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      {...stroke}
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" {...stroke} />
      <path d="m3 7 9 6 9-6" {...stroke} />
    </>
  ),
  folder: (
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" {...stroke} />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" {...stroke} />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" {...stroke} />
    </>
  ),
  bike: (
    <>
      <circle cx="5.5" cy="17" r="3.5" {...stroke} />
      <circle cx="18.5" cy="17" r="3.5" {...stroke} />
      <path d="M12 17V9l-3-3h3M5.5 17 9 9h6l3.5 8" {...stroke} />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" {...stroke} />
      <path d="M14 3v5h5M9 13h6M9 17h6" {...stroke} />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" {...stroke} />
      <path d="M4 21a8 8 0 0 1 16 0" {...stroke} />
    </>
  ),
  arrow: <path d="m9 6 6 6-6 6" {...stroke} />,
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" {...stroke} />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" {...stroke} />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
