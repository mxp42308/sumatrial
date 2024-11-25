import React from 'react';

export const GlowingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0014] via-[#120029] to-[#1A0033]" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-20 mix-blend-overlay" />
    </div>
  );
};