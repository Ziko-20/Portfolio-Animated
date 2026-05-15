import { useEffect, useRef } from 'react';

export function useMousePosition() {
  const position = useRef({ x: 0, y: 0 });
  const listeners = useRef([]);

  useEffect(() => {
    const update = (e) => {
      position.current = { x: e.clientX, y: e.clientY };
      listeners.current.forEach((cb) => cb(position.current));
    };
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  const subscribe = (cb) => {
    listeners.current.push(cb);
    return () => {
      listeners.current = listeners.current.filter((l) => l !== cb);
    };
  };

  return { position, subscribe };
}
