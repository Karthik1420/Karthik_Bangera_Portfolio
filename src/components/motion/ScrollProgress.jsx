// src/components/motion/ScrollProgress.jsx
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: '100%',
        zIndex: 1000,
        transformOrigin: 'left',
        transform: `scaleX(${progress})`,
        background: 'linear-gradient(90deg, #5B6EF5, #9B7BFF, #4FD1E8)',
        pointerEvents: 'none',
      }}
    />
  );
}
