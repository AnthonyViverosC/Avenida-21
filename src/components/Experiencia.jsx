const items = [
  {
    title: 'Carta Premium',
    text: 'Más de 12 categorías de bebidas, desde clásicos hasta mezclas de autor.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3h14l-7 9z" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Música & Rumba',
    text: 'La mejor noche de Pasto, con beats que te mantienen en pista hasta el cierre.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Ambiente Único',
    text: 'Luces, dorado y magenta. Una atmósfera pensada para perderte en la noche.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
];

export default function Experiencia() {
  return (
    <section className="section experiencia" id="nosotros">
      <div className="experiencia-bg" />
      <div className="container">
        <div className="section-title">
          <span className="kicker">— LA EXPERIENCIA —</span>
          <h2>Vive la Noche</h2>
          <div className="line"></div>
          <p>El spot nocturno que estabas buscando</p>
        </div>

        <div className="exp-grid">
          {items.map((it) => (
            <div className="exp-item" key={it.title}>
              <div className="exp-icon">{it.svg}</div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
