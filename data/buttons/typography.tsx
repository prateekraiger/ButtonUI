import React, { useState, useEffect } from "react";
import { ButtonItem } from "./types";

// =========================================================================
// 4. TYPOGRAPHY LAB
// =========================================================================

export const typographyButtons: ButtonItem[] = [
  {
    id: "wave-text",
    name: "Wave Text",
    category: "typography",
    component: () => (
      <button className="group relative rounded-full border border-zinc-800 bg-zinc-900 px-6 py-2 transition-colors hover:border-zinc-600">
        <div className="flex text-sm font-medium text-zinc-300">
          {["W", "a", "v", "e"].map((char, i) => (
            <span
              key={i}
              className="group-hover:animate-[wave-y_0.6s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      </button>
    ),
    code: `
<button className="relative px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors group">
  <div className="text-sm font-medium text-zinc-300 flex">
    {["W", "a", "v", "e"].map((char, i) => (
      <span
        key={i}
        className="group-hover:animate-[wave-y_0.6s_ease-in-out_infinite]"
        style={{ animationDelay: \`\${i * 0.05}s\` }}
      >
        {char}
      </span>
    ))}
  </div>
</button>

/* Add to global CSS */
@keyframes wave-y {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
    `,
  },
  {
    id: "typewriter",
    name: "Typewriter",
    category: "typography",
    component: () => (
      <button className="group flex h-10 w-32 items-center justify-center rounded border border-zinc-800 bg-black transition-all hover:border-zinc-500">
        <div className="w-0 overflow-hidden border-r-2 border-transparent font-mono text-xs whitespace-nowrap text-zinc-400 group-hover:w-full group-hover:animate-[typing_1s_steps(10,end)_forwards,blink_0.75s_step-end_infinite] group-hover:border-zinc-400">
          print('hi')
        </div>
      </button>
    ),
    code: `
<button className="w-32 h-10 flex items-center justify-center rounded bg-black border border-zinc-800 hover:border-zinc-500 transition-all group">
  <div className="text-xs font-mono text-zinc-400 overflow-hidden whitespace-nowrap border-r-2 border-transparent group-hover:border-zinc-400 group-hover:animate-[typing_1s_steps(10,end)_forwards,blink_0.75s_step-end_infinite] w-0 group-hover:w-full">
    print('hi')
  </div>
</button>

/* Add to global CSS */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: #a1a1aa }
}
    `,
  },
  {
    id: "scramble",
    name: "Scramble",
    category: "typography",
    component: () => (
      <button className="group relative h-10 w-32 overflow-hidden rounded border border-zinc-800 bg-[#18181b] text-xs font-bold tracking-wider text-zinc-300">
        <span className="absolute inset-0 flex items-center justify-center group-hover:hidden">
          ENCRYPT
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-emerald-500 opacity-0 group-hover:animate-[glitch-shake_0.3s_linear_infinite] group-hover:opacity-100">
          X9#@7!
        </span>
      </button>
    ),
    code: `
<button className="relative w-32 h-10 bg-[#18181b] text-zinc-300 text-xs font-bold tracking-wider rounded border border-zinc-800 overflow-hidden group">
  <span className="absolute inset-0 flex items-center justify-center group-hover:hidden">
    ENCRYPT
  </span>
  <span className="absolute inset-0 flex items-center justify-center text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-shake_0.3s_linear_infinite]">
    X9#@7!
  </span>
</button>

/* Add to global CSS */
@keyframes glitch-shake {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}
    `,
  },
  {
    id: "split-reveal",
    name: "Split Reveal",
    category: "typography",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
          REVEAL
        </span>
        <span className="absolute inset-0 flex translate-y-full items-center justify-center text-emerald-400 transition-transform duration-300 group-hover:translate-y-0">
          REVEAL
        </span>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white group">
  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
    REVEAL
  </span>
  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-emerald-400">
    REVEAL
  </span>
</button>
    `,
  },
  {
    id: "gradient-text",
    name: "Gradient Text",
    category: "typography",
    component: () => (
      <button className="group rounded-xl bg-zinc-900 px-8 py-3 font-bold">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-500 group-hover:bg-[position:100%_center]">
          GRADIENT
        </span>
      </button>
    ),
    code: `
<button className="rounded-xl bg-zinc-900 px-8 py-3 font-bold group">
  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] transition-all duration-500 group-hover:bg-[position:100%_center]">
    GRADIENT
  </span>
</button>
    `,
  },
  {
    id: "neon-sign",
    name: "Neon Sign",
    category: "typography",
    component: () => (
      <button className="rounded-xl bg-[#050505] px-8 py-3 font-bold text-[#fee] transition-all duration-300 [text-shadow:0_0_10px_#f0f,0_0_20px_#f0f,0_0_40px_#f0f] hover:text-white hover:[text-shadow:0_0_10px_#fff,0_0_20px_#fff,0_0_40px_#fff,0_0_80px_#fff]">
        NEON
      </button>
    ),
    code: `
<button className="rounded-xl bg-[#050505] px-8 py-3 font-bold text-[#fee] [text-shadow:0_0_10px_#f0f,0_0_20px_#f0f,0_0_40px_#f0f] transition-all duration-300 hover:text-white hover:[text-shadow:0_0_10px_#fff,0_0_20px_#fff,0_0_40px_#fff,0_0_80px_#fff]">
  NEON
</button>
    `,
  },
  {
    id: "strikethrough",
    name: "Strikethrough",
    category: "typography",
    component: () => (
      <button className="group relative px-8 py-3 font-bold text-zinc-400 transition-colors hover:text-white">
        STRIKE
        <span className="absolute top-1/2 left-0 h-[2px] w-0 -translate-y-1/2 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
      </button>
    ),
    code: `
<button className="group relative px-8 py-3 font-bold text-zinc-400 transition-colors hover:text-white">
  STRIKE
  <span className="absolute left-0 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
</button>
    `,
  },
  {
    id: "outline-fill",
    name: "Outline Fill",
    category: "typography",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl border border-white px-8 py-3 font-bold text-white transition-colors hover:text-black">
        <span className="relative z-10">FILL</span>
        <div className="absolute inset-0 -translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0"></div>
      </button>
    ),
    code: `
<button className="group relative overflow-hidden rounded-xl border border-white px-8 py-3 font-bold text-white transition-colors hover:text-black">
  <span className="relative z-10">FILL</span>
  <div className="absolute inset-0 -translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0"></div>
</button>
    `,
  },
  {
    id: "glitch-text",
    name: "Glitch Text",
    category: "typography",
    component: () => (
      <button className="group relative border border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-bold tracking-widest text-red-500 uppercase transition-colors hover:bg-red-500/20">
        <span className="block group-hover:animate-[glitch-shake_0.3s_cubic-bezier(.25,.46,.45,.94)_both_infinite]">
          Delete
        </span>
      </button>
    ),
    code: `
<button className="relative px-6 py-2.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-500/20 transition-colors group">
  <span className="block group-hover:animate-[glitch-shake_0.3s_cubic-bezier(.25,.46,.45,.94)_both_infinite]">
    Delete
  </span>
</button>

/* Add to global CSS */
@keyframes glitch-shake {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}
    `,
  },
  {
    id: "letter-swing",
    name: "Letter Swing",
    category: "typography",
    component: () => (
      <button className="group relative text-zinc-300 transition-colors hover:text-white">
        <div className="flex cursor-default gap-[2px] text-xl font-light tracking-widest">
          {["H", "a", "n", "g"].map((char, i) => (
            <span
              key={i}
              className="inline-block origin-top group-hover:animate-[swing_1s_ease-in-out_forwards]"
              style={{ animationDelay: `${i % 2 === 0 ? 0.05 : 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="absolute -top-4 left-0 flex w-full justify-between opacity-0 transition-opacity group-hover:opacity-20">
          <div className="mx-auto h-4 w-[1px] bg-white"></div>
        </div>
      </button>
    ),
    code: `
<button className="relative text-zinc-300 hover:text-white transition-colors group">
  <div className="text-xl font-light tracking-widest flex gap-[2px] cursor-default">
    {["H", "a", "n", "g"].map((char, i) => (
      <span
        key={i}
        className="inline-block origin-top group-hover:animate-[swing_1s_ease-in-out_forwards]"
        style={{ animationDelay: \`\${i % 2 === 0 ? 0.05 : 0.1}s\` }}
      >
        {char}
      </span>
    ))}
  </div>
  <div className="absolute -top-4 left-0 w-full flex justify-between opacity-0 group-hover:opacity-20 transition-opacity">
    <div className="w-[1px] h-4 bg-white mx-auto"></div>
  </div>
</button>

/* Add to global CSS */
@keyframes swing {
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}
    `,
  },
  {
    id: "rolodex",
    name: "Rolodex",
    category: "typography",
    component: () => (
      <div className="perspective-1000 group">
        <button className="relative h-10 w-32">
          <div className="cubic-bezier(0.175,0.885,0.32,1.275) preserve-3d h-full w-full rounded border border-zinc-700 bg-zinc-900 text-sm font-medium text-zinc-300 shadow-lg transition-transform duration-500 group-hover:[transform:rotateX(-90deg)]">
            <div className="absolute inset-0 flex [transform:translateZ(12px)] items-center justify-center backface-hidden">
              Menu
            </div>
            <div className="absolute inset-0 flex [transform:rotateX(90deg)_translateZ(12px)] items-center justify-center rounded border border-white bg-white text-black backface-hidden">
              Close
            </div>
          </div>
        </button>
      </div>
    ),
    code: `
<div className="perspective-1000 group">
  <button className="h-10 w-32 relative">
    <div className="w-full h-full text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-700 rounded shadow-lg transition-transform duration-500 cubic-bezier(0.175,0.885,0.32,1.275) preserve-3d group-hover:[transform:rotateX(-90deg)]">
      <div className="absolute inset-0 flex items-center justify-center backface-hidden [transform:translateZ(12px)]">
        Menu
      </div>
      <div className="absolute inset-0 flex items-center justify-center backface-hidden bg-white text-black border border-white rounded [transform:rotateX(90deg)_translateZ(12px)]">
        Close
      </div>
    </div>
  </button>
</div>
    `,
  },
];
