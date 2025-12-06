import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon, ArrowRight, UploadCloud, Bell, Fingerprint, Box, Sliders, Play, Copy, Check, Sparkles, Globe, Terminal, Activity, Power, Layers, ArrowUpRight, Folder, Gem, Hexagon } from 'lucide-react';

export interface ButtonItem {
  id: string;
  name: string;
  category: 'fluid' | '3d' | 'interaction' | 'typography' | 'aesthetic';
  component: React.FC<any>;
  code: string;
}

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

// =========================================================================
// 2. DEPTH & DIMENSION (3D)
// =========================================================================

const CubeFlipButton = () => React.createElement('div', { className: "h-12 w-40 [perspective:1000px] group" },
  React.createElement('div', { className: "relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] cursor-pointer" },
    React.createElement('div', { className: "absolute inset-0 bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-2 rounded-lg [transform:translateZ(1.5rem)]" },
      React.createElement('span', { className: "text-xs font-medium text-zinc-100" }, "Hover Me"),
      React.createElement(Box, { className: "w-3.5 h-3.5 text-zinc-400" })
    ),
    React.createElement('div', { className: "absolute inset-0 bg-indigo-600 flex items-center justify-center gap-2 rounded-lg [transform:rotateX(-90deg)_translateZ(1.5rem)]" },
      React.createElement('span', { className: "text-xs font-medium text-white tracking-wide" }, "HELLO")
    )
  )
);

const IsometricButton = () => React.createElement('div', { className: "h-14 w-full flex items-center justify-center [perspective:800px] group" },
  React.createElement('button', { className: "bg-indigo-600 w-32 h-10 flex items-center justify-center text-white font-bold tracking-wider text-xs border border-indigo-400 shadow-[-5px_5px_0_#18181b,-10px_10px_0_#27272a] transition-all duration-300 [transform:rotateX(25deg)_rotateY(20deg)_rotateZ(-5deg)] group-hover:[transform:rotateX(0)_rotateY(0)_rotateZ(0)] group-hover:shadow-none" },
    "BLOCK"
  )
);

const TrapdoorButton = () => React.createElement('div', { className: "h-12 w-40 [perspective:1000px] group" },
  React.createElement('div', { className: "relative w-full h-full cursor-pointer preserve-3d" },
    React.createElement('div', { className: "absolute inset-0 bg-emerald-900/20 border border-emerald-500/30 rounded-lg flex items-center justify-center" },
      React.createElement('span', { className: "text-[10px] font-bold tracking-widest text-emerald-500" }, "GRANTED")
    ),
    React.createElement('div', { className: "absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-between px-4 origin-top transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-x-[110deg] backface-hidden z-10" },
      React.createElement('span', { className: "text-xs font-medium text-zinc-300" }, "Access"),
      React.createElement('div', { className: "w-1.5 h-1.5 rounded-full bg-red-500" })
    )
  )
);

const Push3DButton = () => React.createElement('button', { className: "group relative w-32", style: { overflow: 'visible' } },
  React.createElement('div', { className: "absolute inset-0 bg-violet-800 rounded-lg translate-y-1.5 group-active:translate-y-0 transition-transform" }),
  React.createElement('div', { className: "relative bg-violet-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium -translate-y-1.5 group-active:translate-y-0 transition-transform duration-100 ease-out flex items-center justify-center gap-2 border-t border-white/20" },
    "PUSH"
  )
);

const FolderButton = () => React.createElement('div', { className: "h-12 w-40 [perspective:1000px] group" },
  React.createElement('div', { className: "relative w-full h-full cursor-pointer preserve-3d" },
    React.createElement('div', { className: "absolute inset-0 bg-zinc-800 rounded-r-lg rounded-l-sm border border-zinc-700 flex items-center justify-end px-3" },
      React.createElement('span', { className: "text-[10px] font-mono text-zinc-500" }, "open()")
    ),
    React.createElement('div', { className: "absolute top-0.5 bottom-0.5 left-0 w-[96%] bg-white rounded-r-md rounded-l-sm transition-transform duration-500 ease-out group-hover:translate-x-2 z-10 flex items-center pl-2" },
      React.createElement('div', { className: "w-1/2 h-1 bg-zinc-200 rounded-full" })
    ),
    React.createElement('div', { className: "absolute inset-0 bg-zinc-700 rounded-r-lg rounded-l-sm border border-zinc-600 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-y-[-140deg] z-20 flex items-center justify-center gap-2 preserve-3d" },
      React.createElement('div', { className: "backface-hidden flex items-center gap-2" },
        React.createElement(Folder, { className: "w-3.5 h-3.5 text-zinc-300" }),
        React.createElement('span', { className: "text-xs font-medium text-white" }, "Files")
      )
    )
  )
);

// =========================================================================
// 3. INTERACTION LAB
// =========================================================================

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if(!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  return React.createElement('button', {
    ref: btnRef,
    onMouseMove: handleMouseMove,
    className: "relative px-8 py-3 bg-[#111] rounded-lg overflow-hidden border border-zinc-800 text-zinc-400 hover:text-white transition-colors group"
  },
    React.createElement('div', {
      className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
      style: { background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)' }
    }),
    React.createElement('span', { className: "relative z-10 text-sm" }, "SPOTLIGHT")
  );
};

const BiometricButton = () => React.createElement('button', { className: "relative w-40 h-12 rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-colors duration-300 flex items-center justify-center" },
  React.createElement('span', { className: "text-xs font-medium text-zinc-500 relative z-10 transition-opacity duration-300 group-hover:opacity-0" }, "TOUCH ID"),
  React.createElement('div', { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" },
    React.createElement(Fingerprint, { className: "w-6 h-6 text-emerald-500/80" })
  ),
  React.createElement('div', {
    className: "absolute inset-y-0 w-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8),0_0_3px_#fff] z-20 opacity-0 group-hover:opacity-100 animate-[scan_2s_ease-in-out_infinite]"
  })
);

const ShimmerButton = () => React.createElement('button', { className: "relative px-6 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-white overflow-hidden group hover:border-zinc-700 transition-colors" },
  React.createElement('span', { className: "relative z-10" }, "GENERATE"),
  React.createElement('div', { className: "absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" })
);

const ParticleEmitterButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    for(let i=0; i<10; i++) {
        const p = document.createElement('div');
        p.className = 'fixed w-1.5 h-1.5 rounded-full bg-yellow-400 pointer-events-none z-50';
        p.style.left = rect.left + rect.width/2 + 'px';
        p.style.top = rect.top + rect.height/2 + 'px';
        document.body.appendChild(p);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 50 + 20;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        p.animate([
            { transform: 'translate(0,0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], { duration: 600, easing: 'ease-out' }).onfinish = () => p.remove();
    }
  };

  return React.createElement('button', { 
    onClick: handleClick,
    className: "relative px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2" 
  },
    "Emit",
    React.createElement(Sparkles, { className: "w-3 h-3 text-yellow-600 fill-yellow-500 animate-pulse" })
  );
};

const FeedbackButton = () => {
    const [copied, setCopied] = useState(false);
    return React.createElement('button', {
        onClick: () => { setCopied(true); setTimeout(() => setCopied(false), 2000); },
        className: "flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-xs text-zinc-300 hover:bg-zinc-700 transition-all w-32 justify-center"
    },
        !copied ? React.createElement(React.Fragment, null, React.createElement(Copy, { className: "w-3 h-3" }), "Copy Code") :
        React.createElement(React.Fragment, null, React.createElement(Check, { className: "w-3 h-3 text-emerald-400" }), React.createElement("span", { className: "text-emerald-400" }, "Copied!"))
    );
};

const OrbitButton = () => React.createElement('button', { className: "relative w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center group" },
    React.createElement(Globe, { className: "w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" }),
    React.createElement('div', { className: "absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" },
        React.createElement('div', { className: "absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-[orbit-spin_3s_linear_infinite]" })
    )
);

const SonicButton = () => React.createElement('button', { className: "h-10 px-4 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-1 group hover:border-rose-500/50 transition-colors" },
  React.createElement(Play, { className: "w-3 h-3 fill-zinc-300 text-zinc-300 mr-1" }),
  [1,2,3,4].map(i => React.createElement('div', { key: i, className: `w-0.5 bg-rose-500 rounded-full h-2 group-hover:animate-[sound-bar_0.5s_ease-in-out_infinite]`, style: { animationDelay: `${i*0.1}s` } }))
);

const TerminalButton = () => React.createElement('div', { className: "relative w-32 h-10 flex items-center justify-center bg-black border border-green-900/50 rounded overflow-hidden group hover:shadow-[0_0_15px_rgba(22,163,74,0.3)] transition-shadow cursor-pointer" },
    React.createElement('div', { className: "absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,255,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" }),
    React.createElement('span', { className: "text-green-500 font-mono text-xs z-10 flex items-center gap-1" },
        "> EXECUTE",
        React.createElement('span', { className: "w-1.5 h-3 bg-green-500 animate-[blink_1s_step-end_infinite]" })
    )
);

// =========================================================================
// 4. TYPOGRAPHY LAB
// =========================================================================

const WaveTextButton = () => React.createElement('button', { className: "relative px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors group" },
  React.createElement('div', { className: "text-sm font-medium text-zinc-300 flex" },
    ['W','a','v','e'].map((char, i) => React.createElement('span', { key: i, className: "group-hover:animate-[wave-y_0.6s_ease-in-out_infinite]", style: { animationDelay: `${i*0.05}s` } }, char))
  )
);

const ScrambleButton = () => React.createElement('button', { className: "relative w-32 h-10 bg-[#18181b] text-zinc-300 text-xs font-bold tracking-wider rounded border border-zinc-800 overflow-hidden group" },
  React.createElement('span', { className: "absolute inset-0 flex items-center justify-center group-hover:hidden" }, "ENCRYPT"),
  React.createElement('span', { className: "absolute inset-0 flex items-center justify-center text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-shake_0.3s_linear_infinite]" }, "X9#@7!")
);

const TypewriterButton = () => React.createElement('button', { className: "w-32 h-10 flex items-center justify-center rounded bg-black border border-zinc-800 hover:border-zinc-500 transition-all group" },
    React.createElement('div', { className: "text-xs font-mono text-zinc-400 overflow-hidden whitespace-nowrap border-r-2 border-transparent group-hover:border-zinc-400 group-hover:animate-[typing_1s_steps(10,end)_forwards,blink_0.75s_step-end_infinite] w-0 group-hover:w-full" },
        "print('hi')"
    )
);

const RolodexButton = () => React.createElement('div', { className: "h-10 w-28 [perspective:1000px] group" },
    React.createElement('div', { className: "relative w-full h-full text-xs font-medium text-zinc-300 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(-90deg)]" },
        React.createElement('div', { className: "absolute inset-0 flex items-center justify-center bg-zinc-900 border border-zinc-700 rounded backface-hidden" }, "MENU"),
        React.createElement('div', { className: "absolute inset-0 flex items-center justify-center bg-zinc-100 text-black border border-white rounded [transform:rotateX(90deg)_translateZ(10px)]" }, "CLOSE")
    )
);

const GradientTextButton = () => React.createElement('button', { className: "px-6 py-2 rounded-lg bg-black border border-zinc-800 group" },
    React.createElement('span', { className: "text-sm font-bold bg-[linear-gradient(to_right,#e4e4e7_0%,#6366f1_50%,#e4e4e7_100%)] bg-[length:200%_auto] bg-clip-text text-transparent transition-[background-position] duration-500 group-hover:[background-position:right_center]" }, "Prismatic")
);

const SliceButton = () => React.createElement('button', { className: "relative w-32 h-10 flex items-center justify-center group overflow-hidden" },
    React.createElement('div', { className: "absolute inset-0 flex items-center justify-center text-sm font-bold text-white transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-0.5", style: { clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 45%)' } }, "SYSTEM"),
    React.createElement('div', { className: "absolute inset-0 flex items-center justify-center text-sm font-bold text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-0.5 group-hover:text-white", style: { clipPath: 'polygon(0 45%, 100% 55%, 100% 100%, 0 100%)' } }, "SYSTEM")
);

// =========================================================================
// 5. DESIGN AESTHETIC MUSEUM
// =========================================================================

const GlassButton = () => React.createElement('div', { className: "relative group" },
  React.createElement('div', { className: "absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" }),
  React.createElement('button', { className: "relative px-6 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white shadow-xl hover:scale-[1.02] transition-transform duration-300" },
    React.createElement('span', { className: "font-medium tracking-wide text-white/90 text-sm" }, "Frosted Glass")
  )
);

const BrutalistButton = () => React.createElement('button', { className: "bg-yellow-400 border-2 border-black text-black px-6 py-2 text-sm font-bold uppercase tracking-tight shadow-[4px_4px_0px_0px_#27272a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100" }, "Hard Edge");

const NeumorphButton = () => React.createElement('button', { className: "px-6 py-2.5 rounded-full bg-[#0a0a0f] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)] text-zinc-400 text-sm font-medium hover:text-cyan-400 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.8)] transition-all duration-300" }, "Soft Clay");

const RetroPixelButton = () => React.createElement('button', { className: "px-6 py-2 text-xs font-mono tracking-widest uppercase text-white border-none shadow-[-4px_0_0_0_white,4px_0_0_0_white,0_-4px_0_0_white,0_4px_0_0_white] hover:bg-white hover:text-black hover:shadow-[-4px_0_0_0_#a1a1aa,4px_0_0_0_#a1a1aa,0_-4px_0_0_0_#a1a1aa,0_4px_0_0_0_#a1a1aa] hover:scale-95 transition-transform" }, "Start");

const BauhausButton = () => React.createElement('button', { className: "relative w-32 h-12 bg-[#f4f4f5] overflow-hidden border-2 border-zinc-900 group" },
    React.createElement('div', { className: "absolute w-16 h-16 bg-blue-600 rounded-full mix-blend-multiply opacity-80 -left-2 top-0 transition-transform duration-500 group-hover:translate-x-4" }),
    React.createElement('div', { className: "absolute w-8 h-8 bg-red-600 right-2 top-2 transition-transform duration-500 group-hover:scale-150" }),
    React.createElement('div', { className: "absolute w-24 h-2 bg-yellow-500 bottom-2 transition-transform duration-500 group-hover:-translate-y-2" }),
    React.createElement('span', { className: "relative z-10 font-bold text-zinc-900 tracking-tight" }, "FORM")
);

const OrigamiButton = () => React.createElement('button', { 
    className: "relative px-8 py-3 bg-zinc-200 text-zinc-900 font-bold text-xs tracking-wide shadow-xl",
    style: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)' }
}, 
    "UNFOLD",
    React.createElement('div', { 
        className: "absolute bottom-0 right-0 w-[15%] h-[15%] bg-zinc-400 transition-all duration-300 group-hover:w-[25%] group-hover:h-[25%]",
        style: { clipPath: 'polygon(0 0, 0 100%, 100% 0)' }
    })
);

// ------------------------------------------
// COLLECTION EXPORT
// ------------------------------------------

export const buttonCollection: ButtonItem[] = [
  // FLUID
  { id: 'kinetic', name: 'Kinetic Border', category: 'fluid', component: KineticButton, code: `const KineticButton = () => (\n  <button className="relative w-40 h-12 bg-transparent border-none overflow-hidden rounded-xl group cursor-pointer">\n    <div className="absolute inset-[-100%] w-[300%] h-[500%] bg-[conic-gradient(from_0deg,transparent_0%,#06b6d4_20%,transparent_40%)] animate-[spin_4s_linear_infinite]" />\n    <span className="absolute inset-[1px] bg-[#050505] rounded-[10px] flex items-center justify-center text-cyan-400 font-semibold tracking-wider z-10 text-xs">KINETIC</span>\n  </button>\n);` },
  { id: 'neon', name: 'Neon Pulse', category: 'fluid', component: NeonPulseButton, code: `const NeonPulseButton = () => (\n  <button className="relative px-6 py-2 bg-transparent border border-cyan-500 text-cyan-500 font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_10px_rgba(6,182,212,0.2)] hover:text-shadow-[0_0_8px_rgba(6,182,212,0.8)]">\n    NEON PULSE\n  </button>\n);` },
  { id: 'liquid', name: 'Liquid Fill', category: 'fluid', component: LiquidFillButton, code: `const LiquidFillButton = () => (\n  <button className="relative px-6 py-3 rounded-lg border border-indigo-400 text-indigo-400 font-bold overflow-hidden group transition-colors duration-300 hover:text-white text-sm">\n    <div className="absolute top-[100%] left-0 w-full h-full bg-indigo-500 -z-10 transition-all duration-500 group-hover:top-0">\n      <div className="absolute -top-[150%] -left-[50%] w-[200%] h-[200%] rounded-[40%] bg-indigo-300/40 animate-[spin_4s_linear_infinite]" />\n      <div className="absolute -top-[155%] -left-[50%] w-[200%] h-[200%] rounded-[35%] bg-indigo-500 animate-[spin_6s_linear_infinite]" />\n    </div>\n    <span className="relative z-10">LIQUID FILL</span>\n  </button>\n);` },
  { id: 'jelly', name: 'Jelly Wobble', category: 'fluid', component: JellyButton, code: `const JellyButton = () => (\n  <button className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:animate-[jelly_0.6s_both] active:scale-95 transition-transform">\n    JELLY\n  </button>\n);` },
  { id: 'magnetic', name: 'Magnetic Orb', category: 'fluid', component: MagneticOrbButton, code: `const MagneticOrbButton = () => (\n  <button className="relative w-40 h-14 bg-white/5 border border-white/10 rounded-full overflow-hidden backdrop-blur-md group">\n    <div className="absolute w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(249,115,22,0.6)_0%,transparent_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-out group-hover:scale-150 mix-blend-screen" />\n    <span className="relative z-10 text-white font-medium tracking-wide text-xs">MAGNETIC</span>\n  </button>\n);` },
  { id: 'lava', name: 'Lava Lamp', category: 'fluid', component: LavaLampButton, code: `const LavaLampButton = () => (\n  <button className="relative w-40 h-14 border-2 border-orange-500 rounded-full overflow-hidden bg-[#1a0500] text-orange-500 font-bold tracking-widest group">\n    <div className="absolute inset-0 goo-filter opacity-70">\n      <div className="absolute w-10 h-10 bg-orange-500 rounded-full left-4 -bottom-4 animate-[lavaFloat_6s_ease-in-out_infinite]" />\n      <div className="absolute w-12 h-12 bg-orange-500 rounded-full left-14 -bottom-8 animate-[lavaFloat_6s_ease-in-out_infinite_2s]" />\n    </div>\n    <span className="relative z-10 group-hover:text-white transition-colors">LAVA</span>\n  </button>\n);` },
  { id: 'mercury', name: 'Mercury Pool', category: 'fluid', component: MercuryPoolButton, code: `const MercuryPoolButton = () => (\n  <button className="relative w-40 h-14 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-lg overflow-hidden group goo-filter">\n    <span className="relative z-20 font-medium">MERCURY</span>\n    <div className="absolute w-6 h-6 bg-white rounded-full blur-[4px] opacity-0 group-hover:opacity-70 group-hover:scale-[3] transition-all duration-500 top-[10%] left-[10%]" />\n    <div className="absolute w-6 h-6 bg-white rounded-full blur-[4px] opacity-0 group-hover:opacity-70 group-hover:scale-[3] transition-all duration-500 bottom-[10%] right-[10%] delay-100" />\n  </button>\n);` },

  // 3D
  { id: 'cube', name: 'Cube Flip', category: '3d', component: CubeFlipButton, code: `const CubeFlipButton = () => (\n  <div className="h-12 w-40 [perspective:1000px] group">\n    <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] cursor-pointer">\n      <div className="absolute inset-0 bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-2 rounded-lg [transform:translateZ(1.5rem)]">\n        <span className="text-xs font-medium text-zinc-100">Hover Me</span>\n      </div>\n      <div className="absolute inset-0 bg-indigo-600 flex items-center justify-center gap-2 rounded-lg [transform:rotateX(-90deg)_translateZ(1.5rem)]">\n        <span className="text-xs font-medium text-white tracking-wide">HELLO</span>\n      </div>\n    </div>\n  </div>\n);` },
  { id: 'isometric', name: 'Isometric', category: '3d', component: IsometricButton, code: `const IsometricButton = () => (\n  <div className="h-14 w-full flex items-center justify-center [perspective:800px] group">\n    <button className="bg-indigo-600 w-32 h-10 flex items-center justify-center text-white font-bold tracking-wider text-xs border border-indigo-400 shadow-[-5px_5px_0_#18181b,-10px_10px_0_#27272a] transition-all duration-300 [transform:rotateX(25deg)_rotateY(20deg)_rotateZ(-5deg)] group-hover:[transform:rotateX(0)_rotateY(0)_rotateZ(0)] group-hover:shadow-none">\n      BLOCK\n    </button>\n  </div>\n);` },
  { id: 'trapdoor', name: 'Trapdoor', category: '3d', component: TrapdoorButton, code: `const TrapdoorButton = () => (\n  <div className="h-12 w-40 [perspective:1000px] group">\n    <div className="relative w-full h-full cursor-pointer preserve-3d">\n      <div className="absolute inset-0 bg-emerald-900/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">\n        <span className="text-[10px] font-bold tracking-widest text-emerald-500">GRANTED</span>\n      </div>\n      <div className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-between px-4 origin-top transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-x-[110deg] backface-hidden z-10">\n        <span className="text-xs font-medium text-zinc-300">Access</span>\n        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />\n      </div>\n    </div>\n  </div>\n);` },
  { id: 'push3d', name: '3D Push', category: '3d', component: Push3DButton, code: `const Push3DButton = () => (\n  <button className="group relative w-32" style={{ overflow: 'visible' }}>\n    <div className="absolute inset-0 bg-violet-800 rounded-lg translate-y-1.5 group-active:translate-y-0 transition-transform" />\n    <div className="relative bg-violet-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium -translate-y-1.5 group-active:translate-y-0 transition-transform duration-100 ease-out flex items-center justify-center gap-2 border-t border-white/20">\n      PUSH\n    </div>\n  </button>\n);` },
  { id: 'folder', name: 'Folder Open', category: '3d', component: FolderButton, code: `const FolderButton = () => (\n  <div className="h-12 w-40 [perspective:1000px] group">\n    <div className="relative w-full h-full cursor-pointer preserve-3d">\n      <div className="absolute inset-0 bg-zinc-800 rounded-r-lg rounded-l-sm border border-zinc-700 flex items-center justify-end px-3">\n        <span className="text-[10px] font-mono text-zinc-500">open()</span>\n      </div>\n      <div className="absolute top-0.5 bottom-0.5 left-0 w-[96%] bg-white rounded-r-md rounded-l-sm transition-transform duration-500 ease-out group-hover:translate-x-2 z-10 flex items-center pl-2">\n        <div className="w-1/2 h-1 bg-zinc-200 rounded-full" />\n      </div>\n      <div className="absolute inset-0 bg-zinc-700 rounded-r-lg rounded-l-sm border border-zinc-600 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-y-[-140deg] z-20 flex items-center justify-center gap-2 preserve-3d">\n        <div className="backface-hidden flex items-center gap-2">\n          <span className="text-xs font-medium text-white">Files</span>\n        </div>\n      </div>\n    </div>\n  </div>\n);` },

  // INTERACTION
  { id: 'spotlight', name: 'Spotlight', category: 'interaction', component: SpotlightButton, code: `const SpotlightButton = () => {\n  const btnRef = useRef(null);\n  const handleMouseMove = (e) => {\n    if(!btnRef.current) return;\n    const rect = btnRef.current.getBoundingClientRect();\n    btnRef.current.style.setProperty('--x', \`\${e.clientX - rect.left}px\`);\n    btnRef.current.style.setProperty('--y', \`\${e.clientY - rect.top}px\`);\n  };\n\n  return (\n    <button \n      ref={btnRef}\n      onMouseMove={handleMouseMove}\n      className="relative px-8 py-3 bg-[#111] rounded-lg overflow-hidden border border-zinc-800 text-zinc-400 hover:text-white transition-colors group"\n    >\n      <div \n        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"\n        style={{ background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)' }}\n      />\n      <span className="relative z-10 text-sm">SPOTLIGHT</span>\n    </button>\n  );\n};` },
  { id: 'biometric', name: 'Biometric', category: 'interaction', component: BiometricButton, code: `const BiometricButton = () => (\n  <button className="relative w-40 h-12 rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-colors duration-300 flex items-center justify-center">\n    <span className="text-xs font-medium text-zinc-500 relative z-10 transition-opacity duration-300 group-hover:opacity-0">TOUCH ID</span>\n    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">\n      <Fingerprint className="w-6 h-6 text-emerald-500/80" />\n    </div>\n    <div className="absolute inset-y-0 w-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8),0_0_3px_#fff] z-20 opacity-0 group-hover:opacity-100 animate-[scan_2s_ease-in-out_infinite]" />\n  </button>\n);` },
  { id: 'shimmer', name: 'Shimmer', category: 'interaction', component: ShimmerButton, code: `const ShimmerButton = () => (\n  <button className="relative px-6 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-white overflow-hidden group hover:border-zinc-700 transition-colors">\n    <span className="relative z-10">GENERATE</span>\n    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />\n  </button>\n);` },
  { id: 'emitter', name: 'Particle Emitter', category: 'interaction', component: ParticleEmitterButton, code: `const ParticleEmitterButton = () => {\n  const handleClick = (e) => {\n    // Implementation logic in component for particle creation\n    // ...\n  };\n  return (\n    <button onClick={handleClick} className="relative px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2">\n      Emit <Sparkles className="w-3 h-3 text-yellow-600" />\n    </button>\n  );\n};` },
  { id: 'feedback', name: 'Feedback', category: 'interaction', component: FeedbackButton, code: `const FeedbackButton = () => {\n  const [copied, setCopied] = useState(false);\n  return (\n    <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-xs text-zinc-300 hover:bg-zinc-700 transition-all w-32 justify-center">\n      {!copied ? <>Copy Code</> : <span className="text-emerald-400">Copied!</span>}\n    </button>\n  );\n};` },
  { id: 'orbit', name: 'Orbit', category: 'interaction', component: OrbitButton, code: `const OrbitButton = () => (\n  <button className="relative w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center group">\n    <Globe className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />\n    <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity">\n      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-[orbit-spin_3s_linear_infinite]" />\n    </div>\n  </button>\n);` },
  { id: 'sonic', name: 'Sonic', category: 'interaction', component: SonicButton, code: `const SonicButton = () => (\n  <button className="h-10 px-4 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-1 group hover:border-rose-500/50 transition-colors">\n    <Play className="w-3 h-3 fill-zinc-300 text-zinc-300 mr-1" />\n    {[1,2,3,4].map(i => <div key={i} className={\`w-0.5 bg-rose-500 rounded-full h-2 group-hover:animate-[sound-bar_0.5s_ease-in-out_infinite]\`} style={{ animationDelay: \`\${i*0.1}s\` }} />)}\n  </button>\n);` },
  { id: 'terminal', name: 'Terminal Execute', category: 'interaction', component: TerminalButton, code: `const TerminalButton = () => (\n  <div className="relative w-32 h-10 flex items-center justify-center bg-black border border-green-900/50 rounded overflow-hidden group hover:shadow-[0_0_15px_rgba(22,163,74,0.3)] transition-shadow cursor-pointer">\n    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,255,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" />\n    <span className="text-green-500 font-mono text-xs z-10 flex items-center gap-1">> EXECUTE<span className="w-1.5 h-3 bg-green-500 animate-[blink_1s_step-end_infinite]" /></span>\n  </div>\n);` },

  // TYPOGRAPHY
  { id: 'wave', name: 'Wave Text', category: 'typography', component: WaveTextButton, code: `const WaveTextButton = () => (\n  <button className="relative px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors group">\n    <div className="text-sm font-medium text-zinc-300 flex">\n      {['W','a','v','e'].map((char, i) => <span key={i} className="group-hover:animate-[wave-y_0.6s_ease-in-out_infinite]" style={{ animationDelay: \`\${i*0.05}s\` }}>{char}</span>)}\n    </div>\n  </button>\n);` },
  { id: 'scramble', name: 'Scramble', category: 'typography', component: ScrambleButton, code: `const ScrambleButton = () => (\n  <button className="relative w-32 h-10 bg-[#18181b] text-zinc-300 text-xs font-bold tracking-wider rounded border border-zinc-800 overflow-hidden group">\n    <span className="absolute inset-0 flex items-center justify-center group-hover:hidden">ENCRYPT</span>\n    <span className="absolute inset-0 flex items-center justify-center text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-shake_0.3s_linear_infinite]">X9#@7!</span>\n  </button>\n);` },
  { id: 'typewriter', name: 'Typewriter', category: 'typography', component: TypewriterButton, code: `const TypewriterButton = () => (\n  <button className="w-32 h-10 flex items-center justify-center rounded bg-black border border-zinc-800 hover:border-zinc-500 transition-all group">\n    <div className="text-xs font-mono text-zinc-400 overflow-hidden whitespace-nowrap border-r-2 border-transparent group-hover:border-zinc-400 group-hover:animate-[typing_1s_steps(10,end)_forwards,blink_0.75s_step-end_infinite] w-0 group-hover:w-full">\n      print('hi')\n    </div>\n  </button>\n);` },
  { id: 'rolodex', name: 'Rolodex Flip', category: 'typography', component: RolodexButton, code: `const RolodexButton = () => (\n  <div className="h-10 w-28 [perspective:1000px] group">\n    <div className="relative w-full h-full text-xs font-medium text-zinc-300 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(-90deg)]">\n      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-zinc-700 rounded backface-hidden">MENU</div>\n      <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-black border border-white rounded [transform:rotateX(90deg)_translateZ(10px)]">CLOSE</div>\n    </div>\n  </div>\n);` },
  { id: 'gradient-text', name: 'Gradient Text', category: 'typography', component: GradientTextButton, code: `const GradientTextButton = () => (\n  <button className="px-6 py-2 rounded-lg bg-black border border-zinc-800 group">\n    <span className="text-sm font-bold bg-[linear-gradient(to_right,#e4e4e7_0%,#6366f1_50%,#e4e4e7_100%)] bg-[length:200%_auto] bg-clip-text text-transparent transition-[background-position] duration-500 group-hover:[background-position:right_center]">Prismatic</span>\n  </button>\n);` },
  { id: 'slice', name: 'Slice', category: 'typography', component: SliceButton, code: `const SliceButton = () => (\n  <button className="relative w-32 h-10 flex items-center justify-center group overflow-hidden">\n    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-0.5" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 45%)' }}>SYSTEM</div>\n    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-0.5 group-hover:text-white" style={{ clipPath: 'polygon(0 45%, 100% 55%, 100% 100%, 0 100%)' }}>SYSTEM</div>\n  </button>\n);` },

  // AESTHETIC
  { id: 'glass', name: 'Glassmorphism', category: 'aesthetic', component: GlassButton, code: `const GlassButton = () => (\n  <div className="relative group">\n    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />\n    <button className="relative px-6 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white shadow-xl hover:scale-[1.02] transition-transform duration-300">\n      <span className="font-medium tracking-wide text-white/90 text-sm">Frosted Glass</span>\n    </button>\n  </div>\n);` },
  { id: 'brutalist', name: 'Brutalist', category: 'aesthetic', component: BrutalistButton, code: `const BrutalistButton = () => (\n  <button className="bg-yellow-400 border-2 border-black text-black px-6 py-2 text-sm font-bold uppercase tracking-tight shadow-[4px_4px_0px_0px_#27272a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100">\n    Hard Edge\n  </button>\n);` },
  { id: 'neumorph', name: 'Neumorphism', category: 'aesthetic', component: NeumorphButton, code: `const NeumorphButton = () => (\n  <button className="px-6 py-2.5 rounded-full bg-[#0a0a0f] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)] text-zinc-400 text-sm font-medium hover:text-cyan-400 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.8)] transition-all duration-300">\n    Soft Clay\n  </button>\n);` },
  { id: 'retro', name: 'Retro Pixel', category: 'aesthetic', component: RetroPixelButton, code: `const RetroPixelButton = () => (\n  <button className="px-6 py-2 text-xs font-mono tracking-widest uppercase text-white border-none shadow-[-4px_0_0_0_white,4px_0_0_0_white,0_-4px_0_0_white,0_4px_0_0_white] hover:bg-white hover:text-black hover:shadow-[-4px_0_0_0_#a1a1aa,4px_0_0_0_#a1a1aa,0_-4px_0_0_0_#a1a1aa,0_4px_0_0_0_#a1a1aa] hover:scale-95 transition-transform">\n    Start\n  </button>\n);` },
  { id: 'bauhaus', name: 'Bauhaus', category: 'aesthetic', component: BauhausButton, code: `const BauhausButton = () => (\n  <button className="relative w-32 h-12 bg-[#f4f4f5] overflow-hidden border-2 border-zinc-900 group">\n    <div className="absolute w-16 h-16 bg-blue-600 rounded-full mix-blend-multiply opacity-80 -left-2 top-0 transition-transform duration-500 group-hover:translate-x-4" />\n    <div className="absolute w-8 h-8 bg-red-600 right-2 top-2 transition-transform duration-500 group-hover:scale-150" />\n    <div className="absolute w-24 h-2 bg-yellow-500 bottom-2 transition-transform duration-500 group-hover:-translate-y-2" />\n    <span className="relative z-10 font-bold text-zinc-900 tracking-tight">FORM</span>\n  </button>\n);` },
  { id: 'origami', name: 'Origami', category: 'aesthetic', component: OrigamiButton, code: `const OrigamiButton = () => (\n  <button \n    className="relative px-8 py-3 bg-zinc-200 text-zinc-900 font-bold text-xs tracking-wide shadow-xl"\n    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)' }}\n  > \n    UNFOLD\n    <div \n      className="absolute bottom-0 right-0 w-[15%] h-[15%] bg-zinc-400 transition-all duration-300 group-hover:w-[25%] group-hover:h-[25%]"\n      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}\n    />\n  </button>\n);` },
];