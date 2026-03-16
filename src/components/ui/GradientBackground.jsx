import React from 'react';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-600/20 blur-[100px]" />
      
      {/* Optional faint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

export default GradientBackground;
