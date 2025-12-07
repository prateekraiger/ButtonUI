import React, { useState } from "react";
import { ButtonItem } from "./types";

// =========================================================================
// 1. FLUID INTERFACE
// =========================================================================

export const fluidButtons: ButtonItem[] = [
  {
    id: "liquid-fill",
    name: "Liquid Fill",
    category: "fluid",
    component: () => (
      <button className="group relative overflow-hidden rounded-lg border-2 border-cyan-400 px-8 py-3 font-bold text-cyan-400 transition-colors duration-300 hover:border-cyan-400 hover:text-zinc-950">
        <span className="relative z-10">LIQUID FILL</span>
        <div className="absolute top-full left-0 h-full w-full bg-cyan-400 transition-all duration-500 ease-in-out group-hover:top-0">
          <div className="absolute -top-[150%] -left-1/2 h-[200%] w-[200%] animate-[wave_4s_infinite_linear] rounded-[40%] bg-cyan-200/40"></div>
          <div className="absolute -top-[155%] -left-1/2 h-[200%] w-[200%] animate-[wave_6s_infinite_linear] rounded-[35%] bg-cyan-400 opacity-80"></div>
        </div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-lg border-2 border-cyan-400 px-8 py-3 font-bold text-cyan-400 transition-colors duration-300 hover:border-cyan-400 hover:text-zinc-950 group">
  <span className="relative z-10">LIQUID FILL</span>
  <div className="absolute left-0 top-full h-full w-full bg-cyan-400 transition-all duration-500 ease-in-out group-hover:top-0">
    <div className="absolute -left-1/2 -top-[150%] h-[200%] w-[200%] animate-[wave_4s_infinite_linear] rounded-[40%] bg-cyan-200/40"></div>
    <div className="absolute -left-1/2 -top-[155%] h-[200%] w-[200%] animate-[wave_6s_infinite_linear] rounded-[35%] bg-cyan-400 opacity-80"></div>
  </div>
</button>

/* Add to tailwind.config.js or global css */
@keyframes wave {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
    `,
  },
  {
    id: "mercury-drop",
    name: "Mercury Drop",
    category: "fluid",
    component: () => (
      <button className="cubic-bezier(0.25,1,0.5,1) relative rounded-[50px] border-none bg-[radial-gradient(circle_at_50%_120%,#888,#ccc_10%,#eee_40%,#888_80%)] bg-[length:200%_200%] bg-[position:50%_100%] px-8 py-4 font-bold text-[#222] shadow-[inset_0_-5px_15px_rgba(0,0,0,0.4),inset_0_5px_15px_rgba(255,255,255,0.8),0_5px_15px_rgba(0,0,0,0.5)] transition-all duration-600 hover:-translate-y-1 hover:scale-105 hover:bg-[position:50%_0%] hover:shadow-[inset_0_-5px_25px_rgba(0,0,0,0.2),inset_0_5px_25px_rgba(255,255,255,0.9),0_10px_20px_rgba(0,0,0,0.6)]">
        MERCURY
      </button>
    ),
    code: `
<button className="relative rounded-[50px] border-none bg-[radial-gradient(circle_at_50%_120%,#888,#ccc_10%,#eee_40%,#888_80%)] bg-[length:200%_200%] bg-[position:50%_100%] px-8 py-4 font-bold text-[#222] shadow-[inset_0_-5px_15px_rgba(0,0,0,0.4),inset_0_5px_15px_rgba(255,255,255,0.8),0_5px_15px_rgba(0,0,0,0.5)] transition-all duration-600 cubic-bezier(0.25,1,0.5,1) hover:bg-[position:50%_0%] hover:-translate-y-1 hover:scale-105 hover:shadow-[inset_0_-5px_25px_rgba(0,0,0,0.2),inset_0_5px_25px_rgba(255,255,255,0.9),0_10px_20px_rgba(0,0,0,0.6)]">
  MERCURY
</button>
    `,
  },
  {
    id: "lava-lamp",
    name: "Lava Lamp",
    category: "fluid",
    component: () => (
      <button className="relative z-10 overflow-hidden rounded-[30px] border-2 border-[#ff5722] bg-[#1a0500] px-8 py-3 font-bold text-white transition-all duration-300 hover:text-[#ff5722]">
        <span className="relative z-10">LAVA LAMP</span>
        <div className="absolute inset-0 -z-10 opacity-70 filter-[url('#goo')]">
          <div className="absolute -bottom-10 left-5 h-10 w-10 animate-[lavaFloat_6s_ease-in-out_infinite] rounded-full bg-[#ff5722]"></div>
          <div className="absolute -bottom-[50px] left-20 h-[50px] w-[50px] animate-[lavaFloat_6s_ease-in-out_infinite_2s] rounded-full bg-[#ff5722]"></div>
          <div className="absolute -bottom-[30px] left-[140px] h-[30px] w-[30px] animate-[lavaFloat_6s_ease-in-out_infinite_1s] rounded-full bg-[#ff5722]"></div>
        </div>
        {/* SVG Filter for Gooey Effect - usually placed globally */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </button>
    ),
    code: `
<button className="relative z-10 overflow-hidden rounded-[30px] border-2 border-[#ff5722] bg-[#1a0500] px-8 py-3 font-bold text-white transition-all duration-300 hover:text-[#ff5722]">
  <span className="relative z-10">LAVA LAMP</span>
  <div className="absolute inset-0 -z-10 opacity-70 filter-[url('#goo')]">
    <div className="absolute -bottom-10 left-5 h-10 w-10 animate-[lavaFloat_6s_ease-in-out_infinite] rounded-full bg-[#ff5722]"></div>
    <div className="absolute -bottom-[50px] left-20 h-[50px] w-[50px] animate-[lavaFloat_6s_ease-in-out_infinite_2s] rounded-full bg-[#ff5722]"></div>
    <div className="absolute -bottom-[30px] left-[140px] h-[30px] w-[30px] animate-[lavaFloat_6s_ease-in-out_infinite_1s] rounded-full bg-[#ff5722]"></div>
  </div>
</button>

/* Add to global CSS or Tailwind config */
@keyframes lavaFloat {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-120px) scale(1.2); }
  100% { transform: translateY(0) scale(1); }
}
    `,
  },
  {
    id: "mercury-pool",
    name: "Mercury Pool",
    category: "fluid",
    component: () => (
      <button className="group relative flex items-center justify-center rounded-lg border border-[#444] bg-[#222] px-8 py-3 font-bold text-[#ccc]">
        <span className="relative z-10">MERCURY POOL</span>
        <div className="absolute top-[10%] left-[10%] h-5 w-5 scale-0 rounded-full bg-white opacity-0 blur-[4px] transition-all duration-400 group-hover:scale-[3] group-hover:opacity-70"></div>
        <div className="absolute right-[10%] bottom-[10%] h-5 w-5 scale-0 rounded-full bg-white opacity-0 blur-[4px] transition-all delay-100 duration-400 group-hover:scale-[3] group-hover:opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white opacity-0 blur-[4px] transition-all delay-200 duration-400 group-hover:scale-[3] group-hover:opacity-70"></div>
      </button>
    ),
    code: `
<button className="relative flex items-center justify-center rounded-lg border border-[#444] bg-[#222] px-8 py-3 font-bold text-[#ccc] group">
  <span className="relative z-10">MERCURY POOL</span>
  <div className="absolute left-[10%] top-[10%] h-5 w-5 scale-0 rounded-full bg-white opacity-0 blur-[4px] transition-all duration-400 group-hover:scale-[3] group-hover:opacity-70"></div>
  <div className="absolute bottom-[10%] right-[10%] h-5 w-5 scale-0 rounded-full bg-white opacity-0 blur-[4px] transition-all duration-400 delay-100 group-hover:scale-[3] group-hover:opacity-70"></div>
  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white opacity-0 blur-[4px] transition-all duration-400 delay-200 group-hover:scale-[3] group-hover:opacity-70"></div>
</button>
    `,
  },
  {
    id: "ripple-click",
    name: "Ripple Click",
    category: "fluid",
    component: () => {
      const [ripples, setRipples] = useState<
        { x: number; y: number; id: number }[]
      >([]);

      const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(
          () => setRipples((prev) => prev.filter((r) => r.id !== id)),
          600
        );
      };

      return (
        <button
          onClick={handleClick}
          className="relative overflow-hidden rounded-lg bg-[#111] px-8 py-3 font-bold text-white transition-colors hover:bg-[#222]"
        >
          RIPPLE CLICK
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="pointer-events-none absolute animate-[ripple-anim_0.6s_linear] rounded-full bg-white/30"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: "20px",
                height: "20px",
                transform: "translate(-50%, -50%) scale(0)",
              }}
            />
          ))}
        </button>
      );
    },
    code: `
const RippleButton = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg bg-[#111] px-8 py-3 font-bold text-white transition-colors hover:bg-[#222]"
    >
      RIPPLE CLICK
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute animate-[ripple-anim_0.6s_linear] rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%) scale(0)',
          }}
        />
      ))}
    </button>
  );
};

/* Add to global CSS */
@keyframes ripple-anim {
  to { transform: translate(-50%, -50%) scale(20); opacity: 0; }
}
    `,
  },
  {
    id: "glitch-liquid",
    name: "Glitch Liquid",
    category: "fluid",
    component: () => (
      <button className="group relative px-8 py-3 font-bold text-[#f43f5e]">
        <span className="relative z-10">GLITCH LIQUID</span>
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505] text-[#f43f5e] transition-all duration-100 [clip-path:polygon(0_0,100%_0,100%_0,0_0)] group-hover:animate-[glitch-anim_0.3s_infinite_linear] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          GLITCH LIQUID
        </div>
      </button>
    ),
    code: `
<button className="relative px-8 py-3 font-bold text-[#f43f5e] group">
  <span className="relative z-10">GLITCH LIQUID</span>
  <div className="absolute inset-0 flex items-center justify-center bg-[#050505] text-[#f43f5e] [clip-path:polygon(0_0,100%_0,100%_0,0_0)] transition-all duration-100 group-hover:animate-[glitch-anim_0.3s_infinite_linear] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
    GLITCH LIQUID
  </div>
</button>

/* Add to global CSS */
@keyframes glitch-anim {
  0% { clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%); transform: translate(-2px, 2px); }
  50% { clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%); transform: translate(2px, -2px); }
  100% { clip-path: polygon(0 30%, 100% 30%, 100% 70%, 0 70%); transform: translate(-2px, 0px); }
}
    `,
  },
];
