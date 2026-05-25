const social = [
  {
    label: 'Instagram',
    href:  '#',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href:  '#',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.01a8.16 8.16 0 004.77 1.52V7.09a4.85 4.85 0 01-1.84-.4z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href:  '#',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
];

const links = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#carta',     label: 'Carta' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#ubicacion', label: 'Ubicación' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top-line" />
      <div className="container footer-inner">
        <img className="footer-logo" src="/logos/logo-circular.jpg" alt="Avenida 21 Bar" />
        <p className="footer-name">AVENIDA 21 BAR</p>

        <div className="footer-links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>

        <div className="footer-social">
          {social.map(s => (
            <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener">
              {s.svg}
            </a>
          ))}
        </div>

        <p className="footer-copy">© 2026 Avenida 21 Bar · Todos los derechos reservados</p>
        <p className="footer-legal">Prohibida la venta de alcohol a menores de 18 años</p>
      </div>
    </footer>
  );
}
