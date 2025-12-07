import React from "react";
import { Link } from "react-router-dom";
import { Home, MoveLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] text-white selection:bg-pink-500/30">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-[pulse-ring_10s_infinite] rounded-full bg-zinc-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-[pulse-ring_8s_infinite_reverse] rounded-full bg-zinc-800/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-white/5"></div>
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-white/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Style-consistent 404 Text */}
        <h1 className="relative text-[150px] leading-none font-bold tracking-tighter select-none md:text-[200px]">
          <span className="absolute inset-0 animate-[glitch-anim_2s_infinite] text-zinc-800">
            404
          </span>
          <span className="absolute inset-0 animate-[glitch-anim_3s_infinite_reverse] text-zinc-700/50">
            404
          </span>
          <span className="relative z-10 bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Subtitle with Neon Effect */}
        <h2 className="mt-8 text-2xl font-light tracking-wide text-zinc-100 md:text-3xl">
          COMPONENT MISSING
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
          The page you are looking for does not exist.
        </p>

        {/* Actions */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="group relative overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 px-8 py-3 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800"
          >
            <div className="absolute inset-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="flex items-center gap-2 font-medium text-zinc-200 group-hover:text-white">
              <Home className="h-4 w-4" />
              Return Home
            </span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-3 font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-10 left-0 flex w-full justify-center opacity-30">
        <div className="h-1 w-24 animate-[sound-bar_2s_infinite] rounded-full bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default NotFound;
