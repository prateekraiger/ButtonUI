import React, { useState, useRef } from 'react';
import { ButtonItem } from './types';
import { Fingerprint, Sparkles, Copy, Check, Globe, Play } from 'lucide-react';

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

const TerminalButton = () => React.createElement('button', { className: "relative w-32 h-10 flex items-center justify-center bg-black border border-green-900/50 rounded overflow-hidden group hover:shadow-[0_0_15px_rgba(22,163,74,0.3)] transition-shadow cursor-pointer" },
    React.createElement('div', { className: "absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,255,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" }),
    React.createElement('span', { className: "text-green-500 font-mono text-xs z-10 flex items-center gap-1" },
        "> EXECUTE",
        React.createElement('span', { className: "w-1.5 h-3 bg-green-500 animate-[blink_1s_step-end_infinite]" })
    )
);

export const interactionButtons: ButtonItem[] = [
    { id: 'spotlight', name: 'Spotlight', category: 'interaction', component: SpotlightButton, code: `const SpotlightButton = () => {  const btnRef = useRef(null);\n  const handleMouseMove = (e) => {\n    if(!btnRef.current) return;\n    const rect = btnRef.current.getBoundingClientRect();\n    btnRef.current.style.setProperty('--x', `\\\`${e.clientX - rect.left}px\\\``);\n    btnRef.current.style.setProperty('--y', `\\\`${e.clientY - rect.top}px\\\``);\n  };\n\n  return (\n    <button \n      ref={btnRef}\n      onMouseMove={handleMouseMove}\n      className="relative px-8 py-3 bg-[#111] rounded-lg overflow-hidden border border-zinc-800 text-zinc-400 hover:text-white transition-colors group"\n    >\n      <div \n        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"\n        style={{ background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)' }}
      >
      <span className="relative z-10 text-sm">SPOTLIGHT</span>
    </button>
  );
}; },
    { id: 'biometric', name: 'Biometric', category: 'interaction', component: BiometricButton, code: `const BiometricButton = () => (\n  <button className="relative w-40 h-12 rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-colors duration-300 flex items-center justify-center">\n    <span className="text-xs font-medium text-zinc-500 relative z-10 transition-opacity duration-300 group-hover:opacity-0">TOUCH ID</span>\n    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">\n      <Fingerprint className="w-6 h-6 text-emerald-500/80" />\n    </div>\n    <div className="absolute inset-y-0 w-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8),0_0_3px_#fff] z-20 opacity-0 group-hover:opacity-100 animate-[scan_2s_ease-in-out_infinite]" />\n  </button>\n);` },
    { id: 'shimmer', name: 'Shimmer', category: 'interaction', component: ShimmerButton, code: `const ShimmerButton = () => (\n  <button className="relative px-6 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-white overflow-hidden group hover:border-zinc-700 transition-colors">\n    <span className="relative z-10">GENERATE</span>\n    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />\n  </button>\n);` },
    { id: 'emitter', name: 'Particle Emitter', category: 'interaction', component: ParticleEmitterButton, code: `const ParticleEmitterButton = () => {
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

  return (
    <button onClick={handleClick} className="relative px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2">
      Emit <Sparkles className="w-3 h-3 text-yellow-600" />
    </button>
  );
};` },
    { id: 'feedback', name: 'Feedback', category: 'interaction', component: FeedbackButton, code: `const FeedbackButton = () => {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-xs text-zinc-300 hover:bg-zinc-700 transition-all w-32 justify-center">
      {!copied ? <><Copy className="w-3 h-3" />Copy Code</> : <><Check className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400">Copied!</span></>}
    </button>
  );
};` },
    { id: 'orbit', name: 'Orbit', category: 'interaction', component: OrbitButton, code: `const OrbitButton = () => (\n  <button className="relative w-12 h-12 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center group">\n    <Globe className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />\n    <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity">\n      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-[orbit-spin_3s_linear_infinite]" />\n    </div>\n  </button>\n);` },
    { id: 'sonic', name: 'Sonic', category: 'interaction', component: SonicButton, code: `const SonicButton = () => (\n  <button className="h-10 px-4 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-1 group hover:border-rose-500/50 transition-colors">\n  <Play className="w-3 h-3 fill-zinc-300 text-zinc-300 mr-1" />\n  {[1,2,3,4].map(i => <div key={i} className={\`w-0.5 bg-rose-500 rounded-full h-2 group-hover:animate-[sound-bar_0.5s_ease-in-out_infinite]\`} style={{ animationDelay: ${i*0.1}s` }} />)}\n  </button>\n);` },
    { id: 'terminal', name: 'Terminal Execute', category: 'interaction', component: TerminalButton, code: `const TerminalButton = () => (\n  <button className="relative w-32 h-10 flex items-center justify-center bg-black border border-green-900/50 rounded overflow-hidden group hover:shadow-[0_0_15px_rgba(22,163,74,0.3)] transition-shadow cursor-pointer">\n    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,255,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" />\n    <span className="text-green-500 font-mono text-xs z-10 flex items-center gap-1">\n        > EXECUTE\n        <span className="w-1.5 h-3 bg-green-500 animate-[blink_1s_step-end_infinite]" /></span>\n  </button>\n);` },
];
