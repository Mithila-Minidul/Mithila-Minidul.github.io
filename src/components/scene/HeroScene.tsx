import { useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { CanvasTexture, SRGBColorSpace } from 'three';
import { Environment, Lightformer } from '@react-three/drei';
import GlassShapes from './GlassShapes';

// paints the same pastel glows as the page background, so glass never samples "nothing"
function Backdrop() {
  const scene = useThree((s) => s.scene);
  useEffect(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#f5f5f7';
    ctx.fillRect(0, 0, 512, 512);
    const glow = (x: number, y: number, rx: number, ry: number, hex: string) => {
      ctx.save();
      ctx.translate(x * 512, y * 512);
      ctx.scale(rx * 512, ry * 512);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      g.addColorStop(0, hex);
      g.addColorStop(0.7, hex + '00');
      ctx.fillStyle = g;
      ctx.fillRect(-4, -4, 8, 8);
      ctx.restore();
    };
    glow(0.85, 0.08, 0.6, 0.5, '#ffd9c9');
    glow(0.1, 0.3, 0.55, 0.55, '#d9e2ff');
    glow(0.7, 0.95, 0.5, 0.5, '#cdf2e4');
    const texture = new CanvasTexture(c);
    texture.colorSpace = SRGBColorSpace;
    scene.background = texture;
    return () => {
      scene.background = null;
      texture.dispose();
    };
  }, [scene]);
  return null;
}

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    // stop rendering when the hero is scrolled out of view
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
      {!reduceMotion && (
        <Canvas
          flat
          dpr={[1, 1.5]}
          frameloop={visible ? 'always' : 'never'}
          camera={{ position: [0, 0, 7], fov: 35 }}
        >
          <Backdrop />
          {/* built-in studio lights, no files downloaded */}
          <Environment resolution={256}>
            <Lightformer form="rect" intensity={3} position={[0, 5, -5]} scale={[10, 4, 1]} />
            <Lightformer form="ring" intensity={2} position={[-5, 1, 2]} scale={4} />
            <Lightformer form="rect" intensity={1.5} position={[5, -2, 3]} scale={[6, 6, 1]} color="#ffd9c9" />
          </Environment>
          <GlassShapes />
        </Canvas>
      )}
    </div>
  );
}