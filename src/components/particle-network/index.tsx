import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  opacity: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial population - sparse cosmic dust
    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000); // Less dense
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        createParticle();
      }
    };

    const createParticle = (reset = false) => {
      const p: Particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5, // Small discrete stars
        vx: (Math.random() - 0.5) * 0.2, // Very slow movement
        vy: (Math.random() - 0.5) * 0.2,
        life: Math.random() * 100, // For twinkling phase
        maxLife: 100,
        opacity: Math.random() * 0.5 + 0.1,
      };
      if (reset) {
        particlesRef.current.push(p);
      } else {
        particlesRef.current.push(p);
      }
    };

    initParticles();

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Twinkle effect using sine wave based on frame/life
        p.life += 1;
        const twinkle = Math.abs(Math.sin(p.life * 0.02));
        const currentOpacity = p.opacity * twinkle;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Use theme glow color (Violet) but very faint
        ctx.fillStyle = `rgba(124, 58, 237, ${currentOpacity})`;
        ctx.fill();

        // Add a subtle white core for star effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
};

export default ParticleNetwork;
