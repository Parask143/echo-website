import { useRef, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const inZone =
      Math.abs(dx) < rect.width / 2 + padding &&
      Math.abs(dy) < rect.height / 2 + padding;

    if (inZone) {
      if (!active.current) {
        active.current = true;
        el.style.transition = activeTransition;
      }
      el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      el.style.willChange = 'transform';
    } else if (active.current) {
      active.current = false;
      el.style.transition = inactiveTransition;
      el.style.transform = 'translate3d(0, 0, 0)';
    }
  }, [padding, strength, activeTransition, inactiveTransition]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    active.current = false;
    el.style.transition = inactiveTransition;
    el.style.transform = 'translate3d(0, 0, 0)';
  }, [inactiveTransition]);

  const attach = useCallback((node: HTMLDivElement | null) => {
    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (node) {
      window.addEventListener('mousemove', handleMouseMove);
      node.addEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={attach} className={className}>
      {children}
    </div>
  );
}
