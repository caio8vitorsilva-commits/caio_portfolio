import { useEffect, useRef } from 'react';

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const points: { x: number; y: number }[] = [];
      const waveCount = 5;
      
      for (let w = 0; w < waveCount; w++) {
        const opacity = 0.15 - w * 0.025;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 1;

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = canvas.height * 0.5 + 
            Math.sin(x * 0.003 + time + w * 0.5) * 80 +
            Math.sin(x * 0.007 + time * 1.5 + w) * 40 +
            Math.sin(x * 0.001 + time * 0.5) * 60 +
            w * 30;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          if (w === 0 && x % 20 === 0) {
            points.push({ x, y });
          }
        }
        ctx.stroke();
      }

      // Draw dots
      points.forEach((point, i) => {
        const opacity = 0.3 + Math.sin(time + i * 0.1) * 0.2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 0.008;
      animationId = requestAnimationFrame(drawWave);
    };

    resize();
    drawWave();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
    />
  );
};

export default WaveBackground;
