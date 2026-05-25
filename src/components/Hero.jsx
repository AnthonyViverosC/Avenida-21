import { useEffect, useRef } from 'react';
import Particles from './Particles.jsx';
import { WA_URL } from '../data/categorias.js';

export default function Hero() {
  const innerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    let frame = 0;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width  - 0.5) * -22;
      targetY = ((e.clientY - r.top)  / r.height - 0.5) * -22;
    };
    const onLeave = () => { targetX = 0; targetY = 0; };
    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      inner.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };
    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="hero" id="inicio" ref={sectionRef}>
      <Particles />
      <div className="hero-glow" />
      <div className="hero-vignette" />

      <div className="container hero-inner" ref={innerRef}>
        <img
          className="hero-logo"
          src="/logos/logo-banner.jpg"
          alt="Avenida 21 Bar · Vive la noche"
          loading="eager"
        />
        <p className="hero-sub">CÓCTELES · SHOTS · RUMBA</p>
        <h1 className="hero-tagline">Vive la noche</h1>
        <p className="hero-location">Bulevar de la Avenida · Pasto, Nariño</p>

        <div className="hero-buttons">
          <a href="#carta" className="btn btn-outline">
            <span>Ver Carta</span>
          </a>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn btn-fill">
            <span>Reservar por WhatsApp</span>
          </a>
        </div>
      </div>

      <a href="#carta" className="scroll-indicator" aria-label="Bajar">
        <span>SCROLL</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
