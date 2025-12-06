import React from 'react';
import { ButtonItem } from './types';

// =========================================================================
// 1. FLUID INTERFACE
// =========================================================================

const KineticButton = () => React.createElement('button', { className: "relative w-40 h-12 bg-transparent border-none overflow-hidden rounded-xl group cursor-pointer" },
  React.createElement('div', { className: "absolute inset-[-100%] w-[300%] h-[500%] bg-[conic-gradient(from_0deg,transparent_0%,#06b6d4_20%,transparent_40%)] animate-[spin_4s_linear_infinite]" }),
  React.createElement('span', { className: "absolute inset-[1px] bg-[#050505] rounded-[10px] flex items-center justify-center text-cyan-400 font-semibold tracking-wider z-10 text-xs" }, "KINETIC")
);

const NeonPulseButton = () => React.createElement('button', { className: "relative px-6 py-2 bg-transparent border border-cyan-500 text-cyan-500 font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_10px_rgba(6,182,212,0.2)] hover:text-shadow-[0_0_8px_rgba(6,182,212,0.8)]" }, "NEON PULSE");

const LiquidFillButton = () => React.createElement('button', { className: "relative px-6 py-3 rounded-lg border border-indigo-400 text-indigo-400 font-bold overflow-hidden group transition-colors duration-300 hover:text-white text-sm" },
  React.createElement('div', { className: "absolute top-[100%] left-0 w-full h-full bg-indigo-500 -z-10 transition-all duration-500 group-hover:top-0" },
    React.createElement('div', { className: "absolute -top-[150%] -left-[50%] w-[200%] h-[200%] rounded-[40%] bg-indigo-300/40 animate-[spin_4s_linear_infinite]" }),
    React.createElement('div', { className: "absolute -top-[155%] -left-[50%] w-[200%] h-[200%] rounded-[35%] bg-indigo-500 animate-[spin_6s_linear_infinite]" })
  ),
  React.createElement('span', { className: "relative z-10" }, "LIQUID FILL")
);

const JellyButton = () => React.createElement('button', { 
  className: "px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:animate-[jelly_0.6s_both] active:scale-95 transition-transform" 
}, "JELLY");

const MagneticOrbButton = () => React.createElement('button', { className: "relative w-40 h-14 bg-white/5 border border-white/10 rounded-full overflow-hidden backdrop-blur-md group" },
  React.createElement('div', { className: "absolute w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(249,115,22,0.6)_0%,transparent_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-out group-hover:scale-150 mix-blend-screen" }),
  React.createElement('span', { className: "relative z-10 text-white font-medium tracking-wide text-xs" }, "MAGNETIC")
);

const LavaLampButton = () => React.createElement('button', { className: "relative w-40 h-14 border-2 border-orange-500 rounded-full overflow-hidden bg-[#1a0500] text-orange-500 font-bold tracking-widest group" },
  React.createElement('div', { className: "absolute inset-0 goo-filter opacity-70" },
    React.createElement('div', { className: "absolute w-10 h-10 bg-orange-500 rounded-full left-4 -bottom-4 animate-[lavaFloat_6s_ease-in-out_infinite]" }),
    React.createElement('div', { className: "absolute w-12 h-12 bg-orange-500 rounded-full left-14 -bottom-8 animate-[lavaFloat_6s_ease-in-out_infinite_2s]" }),
    React.createElement('div', { className: "absolute w-8 h-8 bg-orange-500 rounded-full left-24 -bottom-4 animate-[lavaFloat_6s_ease-in-out_infinite_1s]" })
  ),
  React.createElement('span', { className: "relative z-10 group-hover:text-white transition-colors" }, "LAVA")
);

const MercuryPoolButton = () => React.createElement('button', { className: "relative w-40 h-14 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-lg overflow-hidden group goo-filter" },
  React.createElement('span', { className: "relative z-20 font-medium" }, "MERCURY"),
  React.createElement('div', { className: "absolute w-6 h-6 bg-white rounded-full blur-[4px] opacity-0 group-hover:opacity-70 group-hover:scale-[3] transition-all duration-500 top-[10%] left-[10%]" }),
  React.createElement('div', { className: "absolute w-6 h-6 bg-white rounded-full blur-[4px] opacity-0 group-hover:opacity-70 group-hover:scale-[3] transition-all duration-500 bottom-[10%] right-[10%] delay-100" })
);

export const fluidButtons: ButtonItem[] = [
    { id: 'kinetic', name: 'Kinetic Border', category: 'fluid', component: KineticButton, code: `const KineticButton = () => (\n  <button className=\"relative w-40 h-12 bg-transparent border-none overflow-hidden rounded-xl group cursor-pointer\">\n    <div className=\"absolute inset-[-100%] w-[300%] h-[500%] bg-[conic-gradient(from_0deg,transparent_0%,#06b6d4_20%,transparent_40%)] animate-[spin_4s_linear_infinite]\" />\n    <span className=\"absolute inset-[1px] bg-[#050505] rounded-[10px] flex items-center justify-center text-cyan-400 font-semibold tracking-wider z-10 text-xs\">KINETIC</span>\n  </button>\n);` },
    { id: 'neon', name: 'Neon Pulse', category: 'fluid', component: NeonPulseButton, code: `const NeonPulseButton = () => (\n  <button className=\"relative px-6 py-2 bg-transparent border border-cyan-500 text-cyan-500 font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_10px_rgba(6,182,212,0.2)] hover:text-shadow-[0_0_8px_rgba(6,182,212,0.8)]\">\n    NEON PULSE\n  </button>\n);` },
    { id: 'liquid', name: 'Liquid Fill', category: 'fluid', component: LiquidFillButton, code: `const LiquidFillButton = () => (\n  <button className=\"relative px-6 py-3 rounded-lg border border-indigo-400 text-indigo-400 font-bold overflow-hidden group transition-colors duration-300 hover:text-white text-sm\">\n    <div className=\"absolute top-[100%] left-0 w-full h-full bg-indigo-500 -z-10 transition-all duration-500 group-hover:top-0\">\n      <div className=\"absolute -top-[150%] -left-[50%] w-[200%] h-[200%] rounded-[40%] bg-indigo-300/40 animate-[spin_4s_linear_infinite]\" />\n      <div className=\"absolute -top-[155%] -left-[50%] w-[200%] h-[200%] rounded-[35%] bg-indigo-500 animate-[spin_6s_linear_infinite]\" />\n    </div>\n    <span className=\"relative z-10\">LIQUID FILL</span>\n  </button>\n);` },
    { id: 'jelly', name: 'Jelly Wobble', category: 'fluid', component: JellyButton, code: `const JellyButton = () => (\n  <button className=\"px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:animate-[jelly_0.6s_both] active:scale-95 transition-transform\">\n    JELLY\n  </button>\n);` },
    { id: 'magnetic', name: 'Magnetic Orb', category: 'fluid', component: MagneticOrbButton, code: `const MagneticOrbButton = () => (\n  <button className=\"relative w-40 h-14 bg-white/5 border border-white/10 rounded-full overflow-hidden backdrop-blur-md group\">\n    <div className=\"absolute w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(249,115,22,0.6)_0%,transparent_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-out group-hover:scale-150 mix-blend-screen\" />\n    <span className=\"relative z-10 text-white font-medium tracking-wide text-xs\">MAGNETIC</span>\n  </button>\n);` },
    { id: 'lava', name: 'Lava Lamp', category: 'fluid', component: LavaLampButton, code: `const LavaLampButton = () => (\n  <button className=\"relative w-40 h-14 border-2 border-orange-500 rounded-full overflow-hidden bg-[#1a0500] text-orange-500 font-bold tracking-widest group\">\n    <div className=\"absolute inset-0 goo-filter opacity-70\">\n      <div className=\"absolute w-10 h-10 bg-orange-500 rounded-full left-4 -bottom-4 animate-[lavaFloat_6s_ease-in-out_infinite]\" />\n      <div className=\"absolute w-12 h-12 bg-orange-500 rounded-full left-14 -bottom-8 animate-[lavaFloat_6s_ease-in-out_infinite_2s]\" />\n    </div>\n    <span className=\"relative z-10 group-hover:text-white transition-colors\">LAVA</span>\n  </button>\n);` },
    { id: 'mercury', name: 'Mercury Pool', category: 'fluid', component: MercuryPoolButton, code: `const MercuryPoolButton = () => (\n  <button className=\"relative w-40 h-14 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-lg overflow-hidden group goo-filter\">\n    <span className=\"relative z-20 font-medium\">MERCURY</span>\n    <div className=\"absolute w-6 h-6 bg-white rounded-full blur-[4px] opacity-0 group-hover:opacity-70 group-hover:scale-[3] transition-all duration-500 top-[10%] left-[10%]\" />\n    <div className=\"absolute w-6 h-6 bg-white rounded-full blur-[4px] opacity-0 group-hover:opacity-70 group-hover:scale-[3] transition-all duration-500 bottom-[10%] right-[10%] delay-100\" />\n  </button>\n);` },
];
