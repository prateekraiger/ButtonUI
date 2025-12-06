import React from 'react';
import { ButtonItem } from './types';
import { Box, Folder } from 'lucide-react';

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

export const dButtons: ButtonItem[] = [
    { id: 'cube', name: 'Cube Flip', category: '3d', component: CubeFlipButton, code: `const CubeFlipButton = () => (
  <div className="h-12 w-40 [perspective:1000px] group">
    <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] cursor-pointer">
      <div className="absolute inset-0 bg-zinc-800 border border-zinc-700 flex items-center justify-center gap-2 rounded-lg [transform:translateZ(1.5rem)]">
        <span className="text-xs font-medium text-zinc-100">Hover Me</span>
      </div>
      <div className="absolute inset-0 bg-indigo-600 flex items-center justify-center gap-2 rounded-lg [transform:rotateX(-90deg)_translateZ(1.5rem)]">
        <span className="text-xs font-medium text-white tracking-wide">HELLO</span>
      </div>
    </div>
  </div>
);` },
    { id: 'isometric', name: 'Isometric', category: '3d', component: IsometricButton, code: `const IsometricButton = () => (
  <div className="h-14 w-full flex items-center justify-center [perspective:800px] group">
    <button className="bg-indigo-600 w-32 h-10 flex items-center justify-center text-white font-bold tracking-wider text-xs border border-indigo-400 shadow-[-5px_5px_0_#18181b,-10px_10px_0_#27272a] transition-all duration-300 [transform:rotateX(25deg)_rotateY(20deg)_rotateZ(-5deg)] group-hover:[transform:rotateX(0)_rotateY(0)_rotateZ(0)] group-hover:shadow-none">
      BLOCK
    </button>
  </div>
);` },
    { id: 'trapdoor', name: 'Trapdoor', category: '3d', component: TrapdoorButton, code: `const TrapdoorButton = () => (
  <div className="h-12 w-40 [perspective:1000px] group">
    <div className="relative w-full h-full cursor-pointer preserve-3d">
      <div className="absolute inset-0 bg-emerald-900/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
        <span className="text-[10px] font-bold tracking-widest text-emerald-500">GRANTED</span>
      </div>
      <div className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-between px-4 origin-top transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-x-[110deg] backface-hidden z-10">
        <span className="text-xs font-medium text-zinc-300">Access</span>
        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
      </div>
    </div>
  </div>
);` },
    { id: 'push3d', name: '3D Push', category: '3d', component: Push3DButton, code: `const Push3DButton = () => (
  <button className="group relative w-32" style={{ overflow: 'visible' }}>
    <div className="absolute inset-0 bg-violet-800 rounded-lg translate-y-1.5 group-active:translate-y-0 transition-transform" />
    <div className="relative bg-violet-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium -translate-y-1.5 group-active:translate-y-0 transition-transform duration-100 ease-out flex items-center justify-center gap-2 border-t border-white/20">
      PUSH
    </div>
  </button>
);` },
    { id: 'folder', name: 'Folder Open', category: '3d', component: FolderButton, code: `const FolderButton = () => (
  <div className="h-12 w-40 [perspective:1000px] group">
    <div className="relative w-full h-full cursor-pointer preserve-3d">
      <div className="absolute inset-0 bg-zinc-800 rounded-r-lg rounded-l-sm border border-zinc-700 flex items-center justify-end px-3">
        <span className="text-[10px] font-mono text-zinc-500">open()</span>
      </div>
      <div className="absolute top-0.5 bottom-0.5 left-0 w-[96%] bg-white rounded-r-md rounded-l-sm transition-transform duration-500 ease-out group-hover:translate-x-2 z-10 flex items-center pl-2">
        <div className="w-1/2 h-1 bg-zinc-200 rounded-full" />
      </div>
      <div className="absolute inset-0 bg-zinc-700 rounded-r-lg rounded-l-sm border border-zinc-600 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-y-[-140deg] z-20 flex items-center justify-center gap-2 preserve-3d">
        <div className="backface-hidden flex items-center gap-2">
          <span className="text-xs font-medium text-white">Files</span>
        </div>
      </div>
    </div>
  </div>
);` },
];
