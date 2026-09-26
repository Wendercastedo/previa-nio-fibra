import { useEffect, useRef } from 'react';

/**
 * Animated fiber-optic background: flowing light beams, particles, and
 * network nodes rendered on a single canvas. Pure green/white palette.
 */
export default function FiberBackground({
  variant = 'hero',
  className = '',
}: {
  variant?: 'hero' | 'cta' | 'subtle';
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const cv: HTMLCanvasElement = canvas;
    const cx2d: CanvasRenderingContext2D = ctx;

    const beams: { points: { x: number; y: number }[]; speed: number; offset: number; width: number; alpha: number }[] = [];
    const particles: { x: number; y: number; vx: number; vy: number; r: number; life: number; maxLife: number }[] = [];
    const nodes: { x: number; y: number; r: number; pulse: number }[] = [];

    const isDark = variant === 'cta' || variant === 'hero';

    function init() {
      w = cv.offsetWidth;
      h = cv.offsetHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cx2d.scale(dpr, dpr);

      // Create beams
      beams.length = 0;
      const beamCount = variant === 'subtle' ? 3 : 6;
      for (let i = 0; i < beamCount; i++) {
        const startX = -0.1 * w;
        const startY = (i / beamCount) * h + Math.random() * 60;
        const pts: { x: number; y: number }[] = [];
        let px = startX;
        let py = startY;
        const segments = 5 + Math.floor(Math.random() * 3);
        for (let s = 0; s <= segments; s++) {
          px = startX + ((s / segments) * 1.2 * w);
          py = startY + Math.sin(s * 1.2 + i) * (h * 0.18) + (Math.random() - 0.5) * 40;
          pts.push({ x: px, y: py });
        }
        beams.push({
          points: pts,
          speed: 0.3 + Math.random() * 0.5,
          offset: Math.random() * 1000,
          width: 1 + Math.random() * 1.5,
          alpha: 0.15 + Math.random() * 0.25,
        });
      }

      // Create nodes at beam endpoints/midpoints
      nodes.length = 0;
      beams.forEach((b) => {
        b.points.forEach((p, idx) => {
          if (idx % 2 === 0) {
            nodes.push({ x: p.x, y: p.y, r: 2 + Math.random() * 2, pulse: Math.random() * Math.PI * 2 });
          }
        });
      });

      // Create particles
      particles.length = 0;
      const pCount = variant === 'subtle' ? 20 : 50;
      for (let i = 0; i < pCount; i++) {
        spawnParticle();
      }
    }

    function spawnParticle() {
      const beam = beams[Math.floor(Math.random() * beams.length)];
      if (!beam || beam.points.length < 2) return;
      const segIdx = Math.floor(Math.random() * (beam.points.length - 1));
      const p1 = beam.points[segIdx];
      const p2 = beam.points[segIdx + 1];
      const t = Math.random();
      particles.push({
        x: p1.x + (p2.x - p1.x) * t,
        y: p1.y + (p2.y - p1.y) * t,
        vx: (p2.x - p1.x) * 0.003,
        vy: (p2.y - p1.y) * 0.003,
        r: 1 + Math.random() * 2,
        life: 0,
        maxLife: 80 + Math.random() * 80,
      });
    }

    let time = 0;

    function draw() {
      cx2d.clearRect(0, 0, w, h);
      time += 0.016;

      // Draw beams (flowing curves)
      beams.forEach((beam) => {
        cx2d.beginPath();
        const pts = beam.points;
        cx2d.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
          const cpx = (pts[i].x + pts[i + 1].x) / 2;
          const cpy = (pts[i].y + pts[i + 1].y) / 2;
          cx2d.quadraticCurveTo(pts[i].x, pts[i].y, cpx, cpy);
        }
        cx2d.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);

        // Glow layer
        cx2d.strokeStyle = isDark
          ? `rgba(74, 222, 128, ${beam.alpha})`
          : `rgba(22, 163, 74, ${beam.alpha * 0.5})`;
        cx2d.lineWidth = beam.width * 4;
        cx2d.lineCap = 'round';
        cx2d.stroke();

        // Core line
        cx2d.strokeStyle = isDark
          ? `rgba(187, 247, 208, ${beam.alpha * 1.5})`
          : `rgba(34, 197, 94, ${beam.alpha})`;
        cx2d.lineWidth = beam.width;
        cx2d.stroke();
      });

      // Draw nodes with pulse
      nodes.forEach((node) => {
        const pulseScale = 1 + Math.sin(time * 2 + node.pulse) * 0.3;
        const baseAlpha = isDark ? 0.6 : 0.35;
        // Outer glow
        const grad = cx2d.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 6 * pulseScale);
        grad.addColorStop(0, isDark ? `rgba(74,222,128,${baseAlpha})` : `rgba(22,163,74,${baseAlpha})`);
        grad.addColorStop(1, 'rgba(22,163,74,0)');
        cx2d.fillStyle = grad;
        cx2d.beginPath();
        cx2d.arc(node.x, node.y, node.r * 6 * pulseScale, 0, Math.PI * 2);
        cx2d.fill();
        // Core
        cx2d.fillStyle = isDark ? '#bbf7d0' : '#16a34a';
        cx2d.beginPath();
        cx2d.arc(node.x, node.y, node.r * pulseScale, 0, Math.PI * 2);
        cx2d.fill();
      });

      // Draw and update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const lifeRatio = p.life / p.maxLife;
        const alpha = Math.sin(lifeRatio * Math.PI) * (isDark ? 0.9 : 0.5);

        cx2d.fillStyle = isDark
          ? `rgba(187, 247, 208, ${alpha})`
          : `rgba(34, 197, 94, ${alpha})`;
        cx2d.beginPath();
        cx2d.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx2d.fill();

        // Glow
        cx2d.fillStyle = isDark
          ? `rgba(74, 222, 128, ${alpha * 0.3})`
          : `rgba(74, 222, 128, ${alpha * 0.2})`;
        cx2d.beginPath();
        cx2d.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        cx2d.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          spawnParticle();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    init();
    draw();

    const onResize = () => {
      cancelAnimationFrame(raf);
      cx2d.setTransform(1, 0, 0, 1, 0, 0);
      init();
      draw();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
