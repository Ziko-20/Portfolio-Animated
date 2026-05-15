import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.random() * 15 + 5;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(() => {
          // Animate out
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              setVisible(false);
              onComplete?.();
            },
          });
        }, 400);
      }
      setProgress(Math.min(Math.floor(count), 100));
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Initials */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-display font-black text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
              border: '1px solid rgba(59,130,246,0.4)',
              boxShadow: '0 0 40px rgba(59,130,246,0.3), inset 0 0 40px rgba(59,130,246,0.05)',
            }}
          >
            ZL
          </div>
          {/* Spinning ring */}
          <div
            className="absolute inset-[-8px] rounded-[20px] border-t-2 border-r-2 border-blue-500 border-b-transparent border-l-transparent animate-spin-slow"
          />
        </motion.div>

        {/* Progress */}
        <div className="flex flex-col items-center gap-4 w-64">
          <div className="w-full h-[1px] bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #3b82f6, #a855f7)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
          <motion.span
            className="font-mono text-xs text-zinc-500 tracking-widest"
          >
            {String(progress).padStart(3, '0')}%
          </motion.span>
        </div>
      </div>
    </div>
  );
}
