import { useEffect, useState } from 'react';
import { WA_URL } from '../data/categorias.js';

const links = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#carta',     label: 'Carta' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#ubicacion', label: 'Ubicación' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#inicio" className="nav-logo" onClick={close}>
          <img src="/logos/logo-circular.jpg" alt="Avenida 21 Bar" />
          <span>Avenida 21</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
          ))}
          <li>
            <a className="btn-reservar-nav" href={WA_URL} target="_blank" rel="noopener" onClick={close}>
              Reservar
            </a>
          </li>
        </ul>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
