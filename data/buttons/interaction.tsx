import React, { useState, useRef } from "react";
import { ButtonItem } from "./types";
import { Fingerprint, Sparkles, Copy, Check, Globe, Play } from "lucide-react";

// =========================================================================
// 3. INTERACTION LAB
// =========================================================================

export const interactionButtons: ButtonItem[] = [
  {
    id: "kinetic-border",
    name: "Kinetic Border",
    category: "interaction",
    component: () => (
      <button className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-transparent px-8 py-3 font-bold text-white">
        <span className="absolute inset-0 h-[500%] w-[200%] animate-[rotate_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#06b6d4_20%,transparent_40%)]"></span>
        <span className="absolute inset-[2px] flex items-center justify-center rounded-[10px] bg-zinc-950">
          KINETIC
        </span>
      </button>
    ),
    code: `
<button className="relative flex items-center justify-center overflow-hidden rounded-xl bg-transparent px-8 py-3 font-bold text-white group">
  <span className="absolute inset-0 h-[500%] w-[200%] animate-[rotate_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#06b6d4_20%,transparent_40%)]"></span>
  <span className="absolute inset-[2px] flex items-center justify-center rounded-[10px] bg-zinc-950">
    KINETIC
  </span>
</button>

/* Add to global CSS */
@keyframes rotate { 100% { transform: rotate(360deg); } }
    `,
  },
  {
    id: "neon-pulse",
    name: "Neon Pulse",
    category: "interaction",
    component: () => (
      <button className="rounded-xl border border-cyan-500 px-8 py-3 font-bold text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0)] transition-all duration-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_10px_rgba(6,182,212,0.2)] hover:[text-shadow:0_0_8px_rgba(6,182,212,0.8)]">
        NEON PULSE
      </button>
    ),
    code: `
<button className="rounded-xl border border-cyan-500 px-8 py-3 font-bold text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0)] transition-all duration-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_10px_rgba(6,182,212,0.2)] hover:[text-shadow:0_0_8px_rgba(6,182,212,0.8)]">
  NEON PULSE
</button>
    `,
  },
  {
    id: "ghost-fade",
    name: "Ghost Fade",
    category: "interaction",
    component: () => (
      <button className="rounded-xl border border-white bg-transparent px-8 py-3 font-bold text-white transition-all duration-300 hover:border-transparent hover:bg-white hover:text-black hover:shadow-[0_0_20px_white]">
        GHOST FADE
      </button>
    ),
    code: `
<button className="rounded-xl border border-white bg-transparent px-8 py-3 font-bold text-white transition-all duration-300 hover:border-transparent hover:bg-white hover:text-black hover:shadow-[0_0_20px_white]">
  GHOST FADE
</button>
    `,
  },
  {
    id: "holographic-sheen",
    name: "Holographic Sheen",
    category: "interaction",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl bg-white/5 px-8 py-3 font-bold text-white">
        <span className="relative z-10">HOLOGRAPHIC</span>
        <div className="absolute top-0 left-[-100%] h-full w-1/2 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-[150%] group-hover:duration-700"></div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl bg-white/5 px-8 py-3 font-bold text-white group">
  <span className="relative z-10">HOLOGRAPHIC</span>
  <div className="absolute left-[-100%] top-0 h-full w-1/2 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-[150%] group-hover:duration-700"></div>
</button>
    `,
  },
  {
    id: "elastic-slide",
    name: "Elastic Slide",
    category: "interaction",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl border border-orange-500 px-8 py-3 font-bold text-white transition-colors hover:text-black">
        <span className="relative z-10">ELASTIC SLIDE</span>
        <div className="cubic-bezier(0.68,-0.55,0.265,1.55) absolute top-0 left-0 -z-10 h-full w-full -translate-x-[101%] rounded-[10px] bg-orange-500 transition-transform duration-500 group-hover:translate-x-0"></div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl border border-orange-500 px-8 py-3 font-bold text-white transition-colors hover:text-black group">
  <span className="relative z-10">ELASTIC SLIDE</span>
  <div className="absolute left-0 top-0 -z-10 h-full w-full -translate-x-[101%] rounded-[10px] bg-orange-500 transition-transform duration-500 cubic-bezier(0.68,-0.55,0.265,1.55) group-hover:translate-x-0"></div>
</button>
    `,
  },
  {
    id: "magnetic-orb",
    name: "Magnetic Orb",
    category: "interaction",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl bg-white/5 px-8 py-3 font-bold text-white">
        <span className="relative z-10">MAGNETIC ORB</span>
        <div className="absolute top-1/2 left-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.6)_0%,transparent_70%)] mix-blend-screen transition-transform duration-500 ease-out group-hover:scale-150"></div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl bg-white/5 px-8 py-3 font-bold text-white group">
  <span className="relative z-10">MAGNETIC ORB</span>
  <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.6)_0%,transparent_70%)] transition-transform duration-500 ease-out mix-blend-screen group-hover:scale-150"></div>
</button>
    `,
  },
  {
    id: "underline-flow",
    name: "Underline Flow",
    category: "interaction",
    component: () => (
      <button className="group rounded-xl border border-white/5 bg-transparent px-8 py-3 font-bold text-white">
        <span className="relative">
          UNDERLINE
          <span className="cubic-bezier(0.7,0,0.3,1) absolute bottom-[-5px] left-0 h-[2px] w-full origin-right scale-x-0 bg-emerald-500 transition-transform duration-400 group-hover:origin-left group-hover:scale-x-100"></span>
        </span>
      </button>
    ),
    code: `
<button className="rounded-xl border border-white/5 bg-transparent px-8 py-3 font-bold text-white group">
  <span className="relative">
    UNDERLINE
    <span className="absolute bottom-[-5px] left-0 h-[2px] w-full origin-right scale-x-0 bg-emerald-500 transition-transform duration-400 cubic-bezier(0.7,0,0.3,1) group-hover:origin-left group-hover:scale-x-100"></span>
  </span>
</button>
    `,
  },
  {
    id: "jelly-wobble",
    name: "Jelly Wobble",
    category: "interaction",
    component: () => (
      <button className="rounded-xl bg-yellow-400 px-8 py-3 font-bold text-zinc-950 hover:animate-[jelly_0.6s_both]">
        JELLY WOBBLE
      </button>
    ),
    code: `
<button className="rounded-xl bg-yellow-400 px-8 py-3 font-bold text-zinc-950 hover:animate-[jelly_0.6s_both]">
  JELLY WOBBLE
</button>

/* Add to global CSS */
@keyframes jelly {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1, 1); }
}
    `,
  },
  {
    id: "elastic-stretch",
    name: "Elastic Stretch",
    category: "interaction",
    component: () => (
      <button className="cubic-bezier(0.68,-0.6,0.32,1.6) rounded-[50px] bg-[#7c4dff] px-8 py-3 font-bold text-white transition-transform duration-600 hover:scale-x-135 hover:scale-y-90 active:scale-x-90 active:scale-y-110">
        ELASTIC
      </button>
    ),
    code: `
<button className="rounded-[50px] bg-[#7c4dff] px-8 py-3 font-bold text-white transition-transform duration-600 cubic-bezier(0.68,-0.6,0.32,1.6) hover:scale-x-135 hover:scale-y-90 active:scale-x-90 active:scale-y-110">
  ELASTIC
</button>
    `,
  },
  {
    id: "bubble-burst",
    name: "Bubble Burst",
    category: "interaction",
    component: () => {
      const [bubbles, setBubbles] = useState<
        { x: number; y: number; id: number }[]
      >([]);

      const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        // Create multiple particles
        const newBubbles = Array.from({ length: 6 }).map((_, i) => ({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          id: id + i,
        }));

        setBubbles((prev) => [...prev, ...newBubbles]);
        setTimeout(
          () => setBubbles((prev) => prev.filter((b) => b.id < id)),
          1000
        );
      };

      return (
        <button
          onClick={handleClick}
          className="relative overflow-visible rounded-[50px] border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition-transform active:scale-95"
        >
          BUBBLE BURST
          {bubbles.map((bubble) => (
            <span
              key={bubble.id}
              className="pointer-events-none absolute h-2 w-2 animate-[floatUp_1s_ease-out_forwards] rounded-full bg-white/80"
              style={{
                left: bubble.x,
                top: bubble.y,
              }}
            />
          ))}
        </button>
      );
    },
    code: `
const BubbleButton = () => {
  const [bubbles, setBubbles] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    // Create multiple particles
    const newBubbles = Array.from({ length: 6 }).map((_, i) => ({
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      id: id + i,
    }));

    setBubbles((prev) => [...prev, ...newBubbles]);
    setTimeout(() => setBubbles((prev) => prev.filter((b) => b.id < id)), 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-visible rounded-[50px] border-2 border-white bg-transparent px-8 py-3 font-bold text-white active:scale-95 transition-transform"
    >
      BUBBLE BURST
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="absolute h-2 w-2 animate-[floatUp_1s_ease-out_forwards] rounded-full bg-white/80 pointer-events-none"
          style={{
            left: bubble.x,
            top: bubble.y,
          }}
        />
      ))}
    </button>
  );
};

/* Add to global CSS */
@keyframes floatUp {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-80px) scale(0); opacity: 0; }
}
    `,
  },
  {
    id: "spotlight",
    name: "Spotlight",
    category: "interaction",
    component: () => {
      const btnRef = useRef<HTMLButtonElement>(null);

      const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (btnRef.current) {
          const rect = btnRef.current.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          btnRef.current.style.setProperty("--x", `${x}%`);
          btnRef.current.style.setProperty("--y", `${y}%`);
        }
      };

      return (
        <button
          ref={btnRef}
          onMouseMove={handleMouseMove}
          className="group relative overflow-hidden rounded-xl bg-[#111] px-8 py-3 font-bold text-[#555] transition-colors duration-300 hover:text-white"
        >
          <span className="relative z-10">SPOTLIGHT</span>
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15) 0%, transparent 50%)",
            }}
          ></div>
        </button>
      );
    },
    code: `
const SpotlightButton = () => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      btnRef.current.style.setProperty('--x', \`\${x}%\`);
      btnRef.current.style.setProperty('--y', \`\${y}%\`);
    }
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl bg-[#111] px-8 py-3 font-bold text-[#555] transition-colors duration-300 hover:text-white group"
    >
      <span className="relative z-10">SPOTLIGHT</span>
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15) 0%, transparent 50%)'
        }}
      ></div>
    </button>
  );
};
    `,
  },
  {
    id: "scanner",
    name: "Scanner",
    category: "interaction",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl border border-green-500/30 bg-transparent px-8 py-3 font-bold text-green-500/80">
        <span className="relative z-10">SCANNER</span>
        <div className="absolute top-0 -left-1/2 h-full w-full -skew-x-[20deg] animate-[scan_2s_infinite_ease-in-out] bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl border border-green-500/30 bg-transparent px-8 py-3 font-bold text-green-500/80 group">
  <span className="relative z-10">SCANNER</span>
  <div className="absolute -left-1/2 top-0 h-full w-full -skew-x-[20deg] bg-gradient-to-r from-transparent via-green-500/40 to-transparent animate-[scan_2s_infinite_ease-in-out]"></div>
</button>

/* Add to global CSS */
@keyframes scan {
  0% { left: -100%; }
  100% { left: 200%; }
}
    `,
  },
  {
    id: "pulse-ring",
    name: "Pulse Ring",
    category: "interaction",
    component: () => (
      <button className="group relative rounded-xl bg-emerald-500 px-8 py-3 font-bold text-white hover:animate-[pulse-ring_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
        PULSE RING
      </button>
    ),
    code: `
<button className="relative rounded-xl bg-emerald-500 px-8 py-3 font-bold text-white group hover:animate-[pulse-ring_1.5s_cubic-bezier(0,0,0.2,1)_infinite]">
  PULSE RING
</button>

/* Add to global CSS */
@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(2); opacity: 0; }
}
    `,
  },
  {
    id: "shimmer",
    name: "Shimmer",
    category: "interaction",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl bg-zinc-800 px-8 py-3 font-bold text-white">
        <span className="relative z-10">SHIMMER</span>
        <div className="absolute inset-0 -translate-x-[150%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1s_infinite]"></div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl bg-zinc-800 px-8 py-3 font-bold text-white group">
  <span className="relative z-10">SHIMMER</span>
  <div className="absolute inset-0 -translate-x-[150%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1s_infinite]"></div>
</button>

/* Add to global CSS */
@keyframes shimmer {
  0% { transform: translateX(-150%) skewX(-15deg); }
  100% { transform: translateX(150%) skewX(-15deg); }
}
    `,
  },
  {
    id: "sonic-bars",
    name: "Sonic Bars",
    category: "interaction",
    component: () => (
      <button className="group flex items-center gap-1 rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white">
        <span>SONIC</span>
        <div className="flex h-3 items-end gap-[2px]">
          <div className="h-1 w-[3px] bg-emerald-400 group-hover:animate-[sound-bar_0.5s_infinite]"></div>
          <div className="h-1 w-[3px] bg-emerald-400 group-hover:animate-[sound-bar_0.5s_infinite_0.1s]"></div>
          <div className="h-1 w-[3px] bg-emerald-400 group-hover:animate-[sound-bar_0.5s_infinite_0.2s]"></div>
        </div>
      </button>
    ),
    code: `
<button className="flex items-center gap-1 rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white group">
  <span>SONIC</span>
  <div className="flex items-end gap-[2px] h-3">
    <div className="w-[3px] bg-emerald-400 h-1 group-hover:animate-[sound-bar_0.5s_infinite]"></div>
    <div className="w-[3px] bg-emerald-400 h-1 group-hover:animate-[sound-bar_0.5s_infinite_0.1s]"></div>
    <div className="w-[3px] bg-emerald-400 h-1 group-hover:animate-[sound-bar_0.5s_infinite_0.2s]"></div>
  </div>
</button>

/* Add to global CSS */
@keyframes sound-bar {
  0%, 100% { height: 4px; }
  50% { height: 12px; }
}
    `,
  },
  {
    id: "rainbow-border",
    name: "Rainbow Border",
    category: "interaction",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl bg-zinc-900 px-[2px] py-[2px]">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff4545,#00ff99,#006aff,#ff0095,#ff4545)] group-hover:animate-[border-rotate_4s_linear_infinite]"></div>
        <div className="relative flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-900 px-8 py-3 font-bold text-white">
          RAINBOW
        </div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl bg-zinc-900 px-[2px] py-[2px] group">
  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff4545,#00ff99,#006aff,#ff0095,#ff4545)] group-hover:animate-[border-rotate_4s_linear_infinite]"></div>
  <div className="relative flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-900 px-8 py-3 font-bold text-white">
    RAINBOW
  </div>
</button>

/* Add to global CSS */
@keyframes border-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
    `,
  },
  {
    id: "orbit",
    name: "Orbit",
    category: "interaction",
    component: () => (
      <button className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900">
        <div className="absolute h-2 w-2 rounded-full bg-blue-500 group-hover:animate-[orbit-spin_2s_linear_infinite]"></div>
        <span className="relative z-10 text-xs font-bold text-white">
          ORBIT
        </span>
      </button>
    ),
    code: `
<button className="relative flex items-center justify-center rounded-full bg-zinc-900 h-14 w-14 group">
  <div className="absolute h-2 w-2 rounded-full bg-blue-500 group-hover:animate-[orbit-spin_2s_linear_infinite]"></div>
  <span className="relative z-10 font-bold text-white text-xs">ORBIT</span>
</button>

/* Add to global CSS */
@keyframes orbit-spin {
  0% { transform: rotate(0deg) translateX(18px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(18px) rotate(-360deg); }
}
    `,
  },
  {
    id: "icon-morph",
    name: "Icon Morph",
    category: "interaction",
    component: () => (
      <button className="group flex items-center gap-3 rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white">
        <span>MORPH</span>
        <div className="cubic-bezier(0.34,1.56,0.64,1) relative h-3 w-3 [transform:rotate(45deg)] border-t-2 border-r-2 border-white transition-all duration-400 group-hover:h-[14px] group-hover:w-2 group-hover:[transform:rotate(45deg)_translateY(-2px)] group-hover:border-t-0 group-hover:border-r-2 group-hover:border-b-2 group-hover:border-green-400"></div>
      </button>
    ),
    code: `
<button className="flex items-center gap-3 rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white group">
  <span>MORPH</span>
  <div className="relative h-3 w-3 border-r-2 border-t-2 border-white transition-all duration-400 cubic-bezier(0.34,1.56,0.64,1) [transform:rotate(45deg)] group-hover:h-[14px] group-hover:w-2 group-hover:border-b-2 group-hover:border-r-2 group-hover:border-t-0 group-hover:border-green-400 group-hover:[transform:rotate(45deg)_translateY(-2px)]"></div>
</button>
    `,
  },
  {
    id: "blur-focus",
    name: "Blur Focus",
    category: "interaction",
    component: () => (
      <button className="group rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white">
        <span className="group-hover:blur-0 block opacity-40 blur-[6px] transition-all duration-400 group-hover:tracking-wider group-hover:opacity-100">
          FOCUS
        </span>
      </button>
    ),
    code: `
<button className="rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white group">
  <span className="block opacity-40 blur-[6px] transition-all duration-400 group-hover:blur-0 group-hover:opacity-100 group-hover:tracking-wider">
    FOCUS
  </span>
</button>
    `,
  },
  {
    id: "slide-stack",
    name: "Slide Stack",
    category: "interaction",
    component: () => (
      <button className="group overflow-hidden rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white">
        <div className="h-[1.2em] overflow-hidden leading-[1.2em]">
          <div className="cubic-bezier(0.5,0,0,1) transition-transform duration-400 group-hover:-translate-y-1/2">
            <div className="flex items-center justify-center">HOVER</div>
            <div className="flex items-center justify-center text-emerald-400">
              CLICK
            </div>
          </div>
        </div>
      </button>
    ),
    code: `
<button className="rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white group overflow-hidden">
  <div className="h-[1.2em] overflow-hidden leading-[1.2em]">
    <div className="transition-transform duration-400 cubic-bezier(0.5,0,0,1) group-hover:-translate-y-1/2">
      <div className="flex items-center justify-center">HOVER</div>
      <div className="flex items-center justify-center text-emerald-400">CLICK</div>
    </div>
  </div>
</button>
    `,
  },
  {
    id: "elastic-text",
    name: "Elastic Text",
    category: "interaction",
    component: () => (
      <button className="group rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white">
        <span className="cubic-bezier(0.68,-0.55,0.265,1.55) inline-block transition-transform duration-400 group-hover:scale-x-90 group-hover:scale-y-150 group-hover:tracking-[2px]">
          STRETCH
        </span>
      </button>
    ),
    code: `
<button className="rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white group">
  <span className="inline-block transition-transform duration-400 cubic-bezier(0.68,-0.55,0.265,1.55) group-hover:scale-x-90 group-hover:scale-y-150 group-hover:tracking-[2px]">
    STRETCH
  </span>
</button>
    `,
  },
  {
    id: "marquee",
    name: "Marquee",
    category: "interaction",
    component: () => (
      <button className="group w-32 overflow-hidden rounded-xl bg-zinc-900 py-3 font-bold text-white">
        <div className="flex whitespace-nowrap group-hover:animate-[marquee_2s_linear_infinite]">
          <span className="mx-4">MARQUEE SCROLL</span>
          <span className="mx-4">MARQUEE SCROLL</span>
        </div>
      </button>
    ),
    code: `
<button className="w-32 overflow-hidden rounded-xl bg-zinc-900 py-3 font-bold text-white group">
  <div className="flex whitespace-nowrap group-hover:animate-[marquee_2s_linear_infinite]">
    <span className="mx-4">MARQUEE SCROLL</span>
    <span className="mx-4">MARQUEE SCROLL</span>
  </div>
</button>

/* Add to global CSS */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
    `,
  },
  {
    id: "sliced-glitch",
    name: "Sliced Glitch",
    category: "interaction",
    component: () => (
      <button className="group relative overflow-hidden rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white">
        <div className="relative">
          <span className="block transition-transform duration-200 [clip-path:polygon(0_0,100%_0,100%_55%,0_45%)] group-hover:-translate-x-1 group-hover:-translate-y-[2px]">
            SLICED
          </span>
          <span className="absolute inset-0 block text-zinc-500 transition-transform duration-200 [clip-path:polygon(0_45%,100%_55%,100%_100%,0_100%)] group-hover:translate-x-1 group-hover:translate-y-[2px] group-hover:text-white">
            SLICED
          </span>
        </div>
      </button>
    ),
    code: `
<button className="relative overflow-hidden rounded-xl bg-zinc-900 px-8 py-3 font-bold text-white group">
  <div className="relative">
    <span className="block transition-transform duration-200 [clip-path:polygon(0_0,100%_0,100%_55%,0_45%)] group-hover:-translate-x-1 group-hover:-translate-y-[2px]">
      SLICED
    </span>
    <span className="absolute inset-0 block text-zinc-500 transition-transform duration-200 [clip-path:polygon(0_45%,100%_55%,100%_100%,0_100%)] group-hover:translate-x-1 group-hover:translate-y-[2px] group-hover:text-white">
      SLICED
    </span>
  </div>
</button>
    `,
  },
  {
    id: "bell-wiggle",
    name: "Bell Wiggle",
    category: "interaction",
    component: () => (
      <button className="hover:bg-zinc-750 preserve-3d group relative flex h-12 w-full items-center justify-center gap-2 overflow-visible rounded-lg border border-zinc-700 bg-zinc-800 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-500">
        <div className="origin-top group-hover:animate-[wiggle_0.5s_ease-in-out_infinite]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-colors group-hover:text-white"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </div>
        <span className="transition-colors group-hover:text-white">Alerts</span>
        <div className="preserve-3d absolute -top-2 -right-2 z-20 h-6 w-6 transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:translateZ(40px)_scale(1.2)]">
          <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-[#0a0a0f] bg-red-500 text-[10px] font-bold text-white shadow-lg">
            3
            <div className="absolute inset-0 -z-10 hidden animate-[pulse-ring-b4_1.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-red-500 group-hover:block"></div>
          </div>
        </div>
      </button>
    ),
    code: `
<button className="relative w-full h-12 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-zinc-750 preserve-3d group hover:border-zinc-500 overflow-visible">
  <div className="group-hover:animate-[wiggle_0.5s_ease-in-out_infinite] origin-top">
    <Bell className="w-4 h-4 group-hover:text-white transition-colors" />
  </div>
  <span className="group-hover:text-white transition-colors">Alerts</span>
  <div className="absolute -top-2 -right-2 w-6 h-6 z-20 preserve-3d transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:translateZ(40px)_scale(1.2)]">
    <div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#0a0a0f] shadow-lg relative">
      3
      <div className="absolute inset-0 rounded-full bg-red-500 -z-10 animate-[pulse-ring-b4_1.5s_cubic-bezier(0,0,0.2,1)_infinite] hidden group-hover:block"></div>
    </div>
  </div>
</button>

/* Add to global CSS */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  75% { transform: rotate(15deg); }
}
@keyframes pulse-ring-b4 {
  0% { transform: scale(0.8); opacity: 0.8; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  100% { transform: scale(2.5); opacity: 0; box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
}
    `,
  },
  {
    id: "gooey",
    name: "Gooey",
    category: "interaction",
    component: () => (
      <div className="flex h-14 w-full items-center justify-center">
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ filter: "url('#goo')" }}
        >
          <button className="peer relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-none bg-pink-600 text-white transition-transform hover:scale-90 active:scale-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
          <div className="absolute top-1/2 left-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600 transition-transform duration-500 ease-out peer-hover:translate-x-[40px]"></div>
          <div className="absolute top-1/2 left-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600 transition-transform duration-500 ease-out peer-hover:-translate-x-[40px]"></div>
        </div>
      </div>
    ),
    code: `
<div className="h-14 w-full flex items-center justify-center">
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
  <div className="relative w-full flex justify-center items-center h-full" style={{ filter: "url('#goo')" }}>
    <button className="relative w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-90 transition-transform active:scale-75 peer z-10 border-none">
      <Plus className="w-5 h-5" />
    </button>
    <div className="absolute w-10 h-10 bg-pink-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-hover:translate-x-[40px] transition-transform duration-500 ease-out -z-10"></div>
    <div className="absolute w-10 h-10 bg-pink-600 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-hover:-translate-x-[40px] transition-transform duration-500 ease-out -z-10"></div>
  </div>
</div>
    `,
  },
  {
    id: "beam-scan",
    name: "Beam Scan",
    category: "interaction",
    component: () => (
      <button className="group relative flex h-10 w-40 items-center justify-center overflow-hidden rounded border border-zinc-800 bg-zinc-950 transition-colors duration-500 hover:border-cyan-500/50">
        <span className="z-10 flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors group-hover:text-cyan-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-cyan-500"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          </svg>
          Authenticate
        </span>
        <div className="absolute inset-0 h-full w-[50%] -skew-x-12 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 blur-sm group-hover:animate-[scan-line-b4_1.5s_ease-in-out_infinite]"></div>
      </button>
    ),
    code: `
<button className="relative w-40 h-10 rounded bg-zinc-950 border border-zinc-800 group hover:border-cyan-500/50 transition-colors duration-500 flex items-center justify-center overflow-hidden">
  <span className="text-xs text-zinc-400 font-medium z-10 flex gap-2 items-center group-hover:text-cyan-100 transition-colors">
    <ScanFace className="w-4 h-4 text-cyan-500" />
    Authenticate
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-[50%] h-full -skew-x-12 opacity-0 group-hover:animate-[scan-line-b4_1.5s_ease-in-out_infinite] blur-sm"></div>
</button>

/* Add to global CSS */
@keyframes scan-line-b4 {
  0% { left: -100%; opacity: 0; }
  50% { opacity: 1; }
  100% { left: 200%; opacity: 0; }
}
    `,
  },
];
