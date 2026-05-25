const rows = [
  {
    title: 'Dirección',
    main: 'Bulevar de la Avenida · Cra 32 N°19',
    sub:  'Antiguo Amorel de la Avenida · Pasto, Nariño',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Teléfono',
    link:  { href: 'tel:+573137877263', text: '313 787 7263' },
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Correo',
    link:  { href: 'mailto:lajaulashotss@gmail.com', text: 'lajaulashotss@gmail.com' },
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: 'Horario',
    main: 'Jueves a Domingo',
    sub:  'Desde las 7:00 PM',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Ubicacion() {
  return (
    <section className="section ubicacion" id="ubicacion">
      <div className="container">
        <div className="section-title">
          <span className="kicker">— DÓNDE ESTAMOS —</span>
          <h2>Encuéntranos</h2>
          <div className="line"></div>
          <p>En el corazón nocturno de Pasto</p>
        </div>

        <div className="ubicacion-grid">
          <div className="info-block">
            {rows.map((r) => (
              <div className="info-row" key={r.title}>
                <div className="ico">{r.svg}</div>
                <div>
                  <h4>{r.title}</h4>
                  {r.link
                    ? <a href={r.link.href}>{r.link.text}</a>
                    : <p>{r.main}<br /><span className="info-sub">{r.sub}</span></p>}
                </div>
              </div>
            ))}
          </div>

          <div className="map-wrap">
            <iframe
              src="https://maps.google.com/maps?q=Bulevar%20de%20la%20Avenida%20Pasto%20Nari%C3%B1o&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Avenida 21 Bar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
