import React from "react";
import { ButtonItem } from "./types";

// =========================================================================
// 5. DESIGN AESTHETIC MUSEUM
// =========================================================================

export const aestheticButtons: ButtonItem[] = [
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    category: "aesthetic",
    component: () => (
      <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-bold text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] transition-all duration-300 hover:bg-white/20">
        GLASS
      </button>
    ),
    code: `
<button className="rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-bold text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] transition-all duration-300 hover:bg-white/20">
  GLASS
</button>
    `,
  },
  {
    id: "neumorphism",
    name: "Neumorphism",
    category: "aesthetic",
    component: () => (
      <button className="rounded-xl bg-[#e0e0e0] px-8 py-3 font-bold text-[#555] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-300 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95">
        NEUMORPH
      </button>
    ),
    code: `
<button className="rounded-xl bg-[#e0e0e0] px-8 py-3 font-bold text-[#555] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-300 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:scale-95">
  NEUMORPH
</button>
    `,
  },
  {
    id: "brutalist",
    name: "Brutalist",
    category: "aesthetic",
    component: () => (
      <button className="border-4 border-black bg-yellow-400 px-8 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
        BRUTALIST
      </button>
    ),
    code: `
<button className="border-4 border-black bg-yellow-400 px-8 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
  BRUTALIST
</button>
    `,
  },
  {
    id: "retro-pixel",
    name: "Retro Pixel",
    category: "aesthetic",
    component: () => (
      <button className="border-4 border-white bg-blue-600 px-6 py-2 font-mono font-bold text-white shadow-[4px_0_0_0_white,-4px_0_0_0_white,0_-4px_0_0_white,0_4px_0_0_white] hover:bg-blue-500 active:translate-y-1">
        PIXEL
      </button>
    ),
    code: `
<button className="border-4 border-white bg-blue-600 px-6 py-2 font-mono font-bold text-white shadow-[4px_0_0_0_white,-4px_0_0_0_white,0_-4px_0_0_white,0_4px_0_0_white] hover:bg-blue-500 active:translate-y-1">
  PIXEL
</button>
    `,
  },
  {
    id: "gradient-mesh",
    name: "Gradient Mesh",
    category: "aesthetic",
    component: () => (
      <button className="rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
        MESH
      </button>
    ),
    code: `
<button className="rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
  MESH
</button>
    `,
  },
  {
    id: "outline-draw",
    name: "Outline Draw",
    category: "aesthetic",
    component: () => (
      <button className="relative px-8 py-3 font-bold text-white group">
        <span className="absolute inset-0 border-2 border-white transition-all duration-500 [clip-path:polygon(0_0,0_0,0_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"></span>
        <span className="absolute inset-0 border-2 border-white opacity-20"></span>
        DRAW
      </button>
    ),
    code: `
<button className="relative px-8 py-3 font-bold text-white group">
  <span className="absolute inset-0 border-2 border-white transition-all duration-500 [clip-path:polygon(0_0,0_0,0_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"></span>
  <span className="absolute inset-0 border-2 border-white opacity-20"></span>
  DRAW
</button>
    `,
  },
  {
    id: "minimal-elegant",
    name: "Minimal Elegant",
    category: "aesthetic",
    component: () => (
      <button className="rounded-full border border-zinc-700 bg-zinc-900 px-8 py-3 font-light tracking-[4px] text-zinc-400 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:tracking-[6px]">
        MINIMAL
      </button>
    ),
    code: `
<button className="rounded-full border border-zinc-700 bg-zinc-900 px-8 py-3 font-light tracking-[4px] text-zinc-400 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:tracking-[6px]">
  MINIMAL
</button>
    `,
  },
  {
    id: "chrome-metal",
    name: "Chrome Metal",
    category: "aesthetic",
    component: () => (
      <button className="rounded-xl bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-300 px-8 py-3 font-bold text-zinc-800 shadow-[0_2px_5px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform active:scale-95 active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.3)]">
        CHROME
      </button>
    ),
    code: `
<button className="rounded-xl bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-300 px-8 py-3 font-bold text-zinc-800 shadow-[0_2px_5px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform active:scale-95 active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.3)]">
  CHROME
</button>
    `,
  },
  {
    id: "glitch-cyberpunk",
    name: "Glitch Cyberpunk",
    category: "aesthetic",
    component: () => (
      <button className="relative border border-yellow-400 bg-zinc-900 px-8 py-3 font-bold text-yellow-400 shadow-[4px_4px_0_rgba(250,204,21,0.5)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-yellow-400 hover:text-black">
        CYBERPUNK
      </button>
    ),
    code: `
<button className="relative border border-yellow-400 bg-zinc-900 px-8 py-3 font-bold text-yellow-400 shadow-[4px_4px_0_rgba(250,204,21,0.5)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-yellow-400 hover:text-black">
  CYBERPUNK
</button>
    `,
  }
];
