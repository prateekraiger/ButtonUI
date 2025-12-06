import React from "react";
import { ButtonItem } from "./types";

// =========================================================================
// 5. DESIGN AESTHETIC MUSEUM
// =========================================================================

const GlassButton = () =>
  React.createElement(
    "div",
    { className: "relative group" },
    React.createElement("div", {
      className:
        "absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500",
    }),
    React.createElement(
      "button",
      {
        className:
          "relative px-6 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white shadow-xl hover:scale-[1.02] transition-transform duration-300",
      },
      React.createElement(
        "span",
        { className: "font-medium tracking-wide text-white/90 text-sm" },
        "Frosted Glass"
      )
    )
  );

const BrutalistButton = () =>
  React.createElement(
    "button",
    {
      className:
        "bg-yellow-400 border-2 border-black text-black px-6 py-2 text-sm font-bold uppercase tracking-tight shadow-[4px_4px_0px_0px_#27272a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100",
    },
    "Hard Edge"
  );

const NeumorphButton = () =>
  React.createElement(
    "button",
    {
      className:
        "px-6 py-2.5 rounded-full bg-[#0a0a0f] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)] text-zinc-400 text-sm font-medium hover:text-cyan-400 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.8)] transition-all duration-300",
    },
    "Soft Clay"
  );

const RetroPixelButton = () =>
  React.createElement(
    "button",
    {
      className:
        "px-6 py-2 text-xs font-mono tracking-widest uppercase text-white border-none shadow-[-4px_0_0_0_white,4px_0_0_0_white,0_-4px_0_0_white,0_4px_0_0_white] hover:bg-white hover:text-black hover:shadow-[-4px_0_0_0_#a1a1aa,4px_0_0_0_#a1a1aa,0_-4px_0_0_0_#a1a1aa,0_4px_0_0_0_#a1a1aa] hover:scale-95 transition-transform",
    },
    "Start"
  );

const BauhausButton = () =>
  React.createElement(
    "button",
    {
      className:
        "relative w-32 h-12 bg-[#f4f4f5] overflow-hidden border-2 border-zinc-900 group",
    },
    React.createElement("div", {
      className:
        "absolute w-16 h-16 bg-blue-600 rounded-full mix-blend-multiply opacity-80 -left-2 top-0 transition-transform duration-500 group-hover:translate-x-4",
    }),
    React.createElement("div", {
      className:
        "absolute w-8 h-8 bg-red-600 right-2 top-2 transition-transform duration-500 group-hover:scale-150",
    }),
    React.createElement("div", {
      className:
        "absolute w-24 h-2 bg-yellow-500 bottom-2 transition-transform duration-500 group-hover:-translate-y-2",
    }),
    React.createElement(
      "span",
      { className: "relative z-10 font-bold text-zinc-900 tracking-tight" },
      "FORM"
    )
  );

const OrigamiButton = () =>
  React.createElement(
    "button",
    {
      className:
        "relative px-8 py-3 bg-zinc-200 text-zinc-900 font-bold text-xs tracking-wide shadow-xl",
      style: {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
      },
    },
    "UNFOLD",
    React.createElement("div", {
      className:
        "absolute bottom-0 right-0 w-[15%] h-[15%] bg-zinc-400 transition-all duration-300 group-hover:w-[25%] group-hover:h-[25%]",
      style: { clipPath: "polygon(0 0, 0 100%, 100% 0)" },
    })
  );

export const aestheticButtons: ButtonItem[] = [
  {
    id: "glass",
    name: "Glassmorphism",
    category: "aesthetic",
    component: GlassButton,
    code: `const GlassButton = () => (
  <div className="relative group">
    <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
    <button className="relative px-6 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <span className="font-medium tracking-wide text-white/90 text-sm">Frosted Glass</span>
    </button>
  </div>
);`,
  },
  {
    id: "brutalist",
    name: "Brutalist",
    category: "aesthetic",
    component: BrutalistButton,
    code: `const BrutalistButton = () => (
  <button className="bg-yellow-400 border-2 border-black text-black px-6 py-2 text-sm font-bold uppercase tracking-tight shadow-[4px_4px_0px_0px_#27272a] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100">
    Hard Edge
  </button>
);`,
  },
  {
    id: "neumorph",
    name: "Neumorphism",
    category: "aesthetic",
    component: NeumorphButton,
    code: `const NeumorphButton = () => (
  <button className="px-6 py-2.5 rounded-full bg-[#0a0a0f] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)] text-zinc-400 text-sm font-medium hover:text-cyan-400 hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.8)] transition-all duration-300">
    Soft Clay
  </button>
);`,
  },
  {
    id: "retro",
    name: "Retro Pixel",
    category: "aesthetic",
    component: RetroPixelButton,
    code: `const RetroPixelButton = () => (
  <button className="px-6 py-2 text-xs font-mono tracking-widest uppercase text-white border-none shadow-[-4px_0_0_0_white,4px_0_0_0_white,0_-4px_0_0_white,0_4px_0_0_white] hover:bg-white hover:text-black hover:shadow-[-4px_0_0_0_#a1a1aa,4px_0_0_0_#a1a1aa,0_-4px_0_0_0_#a1a1aa,0_4px_0_0_0_#a1a1aa] hover:scale-95 transition-transform">
    Start
  </button>
);`,
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    category: "aesthetic",
    component: BauhausButton,
    code: `const BauhausButton = () => (
  <button className="relative w-32 h-12 bg-[#f4f4f5] overflow-hidden border-2 border-zinc-900 group">
    <div className="absolute w-16 h-16 bg-blue-600 rounded-full mix-blend-multiply opacity-80 -left-2 top-0 transition-transform duration-500 group-hover:translate-x-4" />
    <div className="absolute w-8 h-8 bg-red-600 right-2 top-2 transition-transform duration-500 group-hover:scale-150" />
    <div className="absolute w-24 h-2 bg-yellow-500 bottom-2 transition-transform duration-500 group-hover:-translate-y-2" />
    <span className="relative z-10 font-bold text-zinc-900 tracking-tight">FORM</span>
  </button>
);`,
  },
  {
    id: "origami",
    name: "Origami",
    category: "aesthetic",
    component: OrigamiButton,
    code: `const OrigamiButton = () => (
  <button
    className="relative px-8 py-3 bg-zinc-200 text-zinc-900 font-bold text-xs tracking-wide shadow-xl"
    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)' }}
  >
    UNFOLD
    <div
      className="absolute bottom-0 right-0 w-[15%] h-[15%] bg-zinc-400 transition-all duration-300 group-hover:w-[25%] group-hover:h-[25%]"
      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}
    />
  </button>
);`,
  },
];
