import { useEffect, useRef } from 'react';

export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, particles = [], rafId = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    const make = () => {
      particles = [];
      const count = window.innerWidth < 720 ? 28 : 55;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 2 + 0.6,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35 - 0.04,
          color: Math.random() > 0.5 ? [201, 146, 42] : [224, 64, 160],
          alpha: Math.random() * 0.55 + 0.3,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };
    const tick = (t) => {
      ctx.clearRect(0, 0, W, H);

      // Líneas de conexión entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201,146,42,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Partículas
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        p.pulse += 0.04;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const radius = p.r + Math.sin(p.pulse) * 0.4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color.join(',')},${p.alpha})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `rgba(${p.color.join(',')},0.7)`;
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(tick);
    };

    const onResize = () => { resize(); make(); };
    window.addEventListener('resize', onResize);
    resize(); make(); rafId = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
