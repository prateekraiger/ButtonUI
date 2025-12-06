import React from "react";
import { ButtonItem } from "./types";

// =========================================================================
// 4. TYPOGRAPHY LAB
// =========================================================================

const WaveTextButton = () =>
  React.createElement(
    "button",
    {
      className:
        "relative px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors group",
    },
    React.createElement(
      "div",
      { className: "text-sm font-medium text-zinc-300 flex" },
      ["W", "a", "v", "e"].map((char, i) =>
        React.createElement(
          "span",
          {
            key: i,
            className: "group-hover:animate-[wave-y_0.6s_ease-in-out_infinite]",
            style: { animationDelay: `${i * 0.05}s` },
          },
          char
        )
      )
    )
  );

const ScrambleButton = () =>
  React.createElement(
    "button",
    {
      className:
        "relative w-32 h-10 bg-[#18181b] text-zinc-300 text-xs font-bold tracking-wider rounded border border-zinc-800 overflow-hidden group",
    },
    React.createElement(
      "span",
      {
        className:
          "absolute inset-0 flex items-center justify-center group-hover:hidden",
      },
      "ENCRYPT"
    ),
    React.createElement(
      "span",
      {
        className:
          "absolute inset-0 flex items-center justify-center text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-shake_0.3s_linear_infinite]",
      },
      "X9#@7!"
    )
  );

const TypewriterButton = () =>
  React.createElement(
    "button",
    {
      className:
        "w-32 h-10 flex items-center justify-center rounded bg-black border border-zinc-800 hover:border-zinc-500 transition-all group",
    },
    React.createElement(
      "div",
      {
        className:
          "text-xs font-mono text-zinc-400 overflow-hidden whitespace-nowrap border-r-2 border-transparent group-hover:border-zinc-400 group-hover:animate-[typing_1s_steps(10,end)_forwards,blink_0.75s_step-end_infinite] w-0 group-hover:w-full",
      },
      "print('hi')"
    )
  );

const RolodexButton = () =>
  React.createElement(
    "div",
    { className: "h-10 w-28 [perspective:1000px] group" },
    React.createElement(
      "div",
      {
        className:
          "relative w-full h-full text-xs font-medium text-zinc-300 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(-90deg)]",
      },
      React.createElement(
        "div",
        {
          className:
            "absolute inset-0 flex items-center justify-center bg-zinc-900 border border-zinc-700 rounded backface-hidden",
        },
        "MENU"
      ),
      React.createElement(
        "div",
        {
          className:
            "absolute inset-0 flex items-center justify-center bg-zinc-100 text-black border border-white rounded [transform:rotateX(90deg)_translateZ(10px)]",
        },
        "CLOSE"
      )
    )
  );

const GradientTextButton = () =>
  React.createElement(
    "button",
    { className: "px-6 py-2 rounded-lg bg-black border border-zinc-800 group" },
    React.createElement(
      "span",
      {
        className:
          "text-sm font-bold bg-[linear-gradient(to_right,#e4e4e7_0%,#6366f1_50%,#e4e4e7_100%)] bg-[length:200%_auto] bg-clip-text text-transparent transition-[background-position] duration-500 group-hover:[background-position:right_center]",
      },
      "Prismatic"
    )
  );

const SliceButton = () =>
  React.createElement(
    "button",
    {
      className:
        "relative w-32 h-10 flex items-center justify-center group overflow-hidden",
    },
    React.createElement(
      "div",
      {
        className:
          "absolute inset-0 flex items-center justify-center text-sm font-bold text-white transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-0.5",
        style: { clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 45%)" },
      },
      "SYSTEM"
    ),
    React.createElement(
      "div",
      {
        className:
          "absolute inset-0 flex items-center justify-center text-sm font-bold text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-0.5 group-hover:text-white",
        style: { clipPath: "polygon(0 45%, 100% 55%, 100% 100%, 0 100%)" },
      },
      "SYSTEM"
    )
  );

export const typographyButtons: ButtonItem[] = [
  {
    id: "wave",
    name: "Wave Text",
    category: "typography",
    component: WaveTextButton,
    code: `const WaveTextButton = () => (
  <button className="relative px-6 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors group">
    <div className="text-sm font-medium text-zinc-300 flex">
      {['W','a','v','e'].map((char, i) => <span key={i} className="group-hover:animate-[wave-y_0.6s_ease-in-out_infinite]" style={{ animationDelay: \`\${i * 0.05}s\` }} >{char}</span>)}
    </div>
  </button>
);`,
  },
  {
    id: "scramble",
    name: "Scramble",
    category: "typography",
    component: ScrambleButton,
    code: `const ScrambleButton = () => (
  <button className="relative w-32 h-10 bg-[#18181b] text-zinc-300 text-xs font-bold tracking-wider rounded border border-zinc-800 overflow-hidden group">
    <span className="absolute inset-0 flex items-center justify-center group-hover:hidden">ENCRYPT</span>
    <span className="absolute inset-0 flex items-center justify-center text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-shake_0.3s_linear_infinite]">X9#@7!</span>
  </button>
);`,
  },
  {
    id: "typewriter",
    name: "Typewriter",
    category: "typography",
    component: TypewriterButton,
    code: `const TypewriterButton = () => (
  <button className="w-32 h-10 flex items-center justify-center rounded bg-black border border-zinc-800 hover:border-zinc-500 transition-all group">
    <div className="text-xs font-mono text-zinc-400 overflow-hidden whitespace-nowrap border-r-2 border-transparent group-hover:border-zinc-400 group-hover:animate-[typing_1s_steps(10,end)_forwards,blink_0.75s_step-end_infinite] w-0 group-hover:w-full">
        print('hi')
    </div>
  </button>
);`,
  },
  {
    id: "rolodex",
    name: "Rolodex",
    category: "typography",
    component: RolodexButton,
    code: `const RolodexButton = () => (
  <div className="h-10 w-28 [perspective:1000px] group">
    <div className="relative w-full h-full text-xs font-medium text-zinc-300 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(-90deg)]">
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-zinc-700 rounded backface-hidden">MENU</div>
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-black border border-white rounded [transform:rotateX(90deg)_translateZ(10px)]">CLOSE</div>
    </div>
  </div>
);`,
  },
  {
    id: "gradient-text",
    name: "Gradient Text",
    category: "typography",
    component: GradientTextButton,
    code: `const GradientTextButton = () => (
  <button className="px-6 py-2 rounded-lg bg-black border border-zinc-800 group">
    <span className="text-sm font-bold bg-[linear-gradient(to_right,#e4e4e7_0%,#6366f1_50%,#e4e4e7_100%)] bg-[length:200%_auto] bg-clip-text text-transparent transition-[background-position] duration-500 group-hover:[background-position:right_center]">Prismatic</span>
  </button>
);`,
  },
  {
    id: "slice",
    name: "Slice",
    category: "typography",
    component: SliceButton,
    code: `const SliceButton = () => (
  <button className="relative w-32 h-10 flex items-center justify-center group overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-0.5" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 45%)' }}>SYSTEM</div>
    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-0.5 group-hover:text-white" style={{ clipPath: 'polygon(0 45%, 100% 55%, 100% 100%, 0 100%)' }}>SYSTEM</div>
  </button>
);`,
  },
];
