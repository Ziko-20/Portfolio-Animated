import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    let lenis;

    async function initLenis() {
      const { default: Lenis } = await import('lenis');
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Make lenis globally accessible for anchor links
      window.__lenis = lenis;
    }

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
      window.__lenis = null;
    };
  }, []);
}
