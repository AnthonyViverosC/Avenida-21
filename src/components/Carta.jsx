import { useEffect, useRef, useState } from 'react';
import { categorias } from '../data/categorias.js';

export default function Carta() {
  const gridRef = useRef(null);
  const [selected, setSelected] = useState(null);

  // Aparición staggered al hacer scroll
  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.carta-card');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const i = Array.from(cards).indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('in-view'), (i % 4) * 90);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  // ESC para cerrar modal + bloqueo de scroll body
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  // Tilt 3D sutil
  const onMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-10px)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = ''; };

  return (
    <section className="section carta" id="carta">
      <div className="container">
        <div className="section-title">
          <span className="kicker">— LA CARTA —</span>
          <h2>Nuestra Selección</h2>
          <div className="line"></div>
          <p>Toca cualquier categoría para ver los productos y precios</p>
        </div>

        <div className="carta-grid" ref={gridRef}>
          {categorias.map((c, i) => (
            <article
              key={c.nombre}
              className="carta-card"
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              onClick={() => setSelected(c)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(c); } }}
            >
              <div className="card-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="icon">{c.icon}</div>
              <h3>{c.nombre}</h3>
              <p>{c.desc}</p>
              <span className="card-count">{c.productos.length} {c.productos.length === 1 ? 'opción' : 'opciones'}</span>
              <span className="card-shine" />
            </article>
          ))}
        </div>
      </div>

      {/* MODAL DE PRODUCTOS */}
      {selected && (
        <div className="menu-modal" onClick={() => setSelected(null)} role="dialog" aria-modal="true">
          <div className="menu-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="menu-close" onClick={() => setSelected(null)} aria-label="Cerrar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <header className="menu-header">
              <div className="menu-icon">{selected.icon}</div>
              <div>
                <span className="kicker">— Categoría —</span>
                <h3>{selected.nombre}</h3>
                <p>{selected.desc}</p>
              </div>
            </header>

            <ul className="menu-list">
              {selected.productos.map((p, idx) => (
                <li key={p.nombre + idx} style={{ '--d': `${idx * 35}ms` }}>
                  <span className="menu-dot">·</span>
                  <span className="menu-name">{p.nombre}</span>
                  <span className="menu-leader" />
                  <span className="menu-price">{typeof p.precio === 'string' && p.precio.startsWith('$') ? p.precio : `$ ${p.precio}`}</span>
                </li>
              ))}
            </ul>

            <footer className="menu-footer">
              <p>Precios en pesos colombianos · Sujetos a cambio sin previo aviso</p>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}
