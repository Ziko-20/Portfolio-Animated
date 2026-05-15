export default function GradientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base */}
      <div className="absolute inset-0" style={{ backgroundColor: '#F4F4F5' }} />

      {/* Subtle blue orb top-left */}
      <div
        className="absolute -top-[15%] -left-[5%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'float-slow 14s ease-in-out infinite',
        }}
      />

      {/* Subtle purple orb top-right */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[45vw] h-[45vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'float-slow 18s ease-in-out infinite reverse',
        }}
      />

      {/* Very subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }}
      />
    </div>
  );
}
