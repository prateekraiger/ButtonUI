import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Star } from "lucide-react";
import { Logo } from "./Logo";

const GitHubButton: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children = "Star on GitHub", className = "" }) => {
  return (
    <a
      href="https://github.com/prateekraiger/ButtonUI"
      target="_blank"
      rel="noreferrer"
      className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2.5 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 ${className}`}
    >
      <div className="group-hover:animate-shimmer absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Github className="h-4 w-4 text-white transition-transform group-hover:scale-110" />
      <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
        {children}
      </span>
      <Star className="h-3.5 w-3.5 text-yellow-500/50 transition-colors group-hover:fill-yellow-400 group-hover:text-yellow-400" />
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 right-0 left-0 z-50 px-6 pt-6">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo + Brand + Navigation */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <Logo size={28} />
              <span className="text-lg font-bold tracking-tight text-white">
                ButtonUI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-2 md:flex">
              <Link
                to="/"
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  isActive("/")
                    ? "border-white/20 bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  isActive("/about")
                    ? "border-white/20 bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Right Side: GitHub Button */}
          <div className="hidden md:block">
            <GitHubButton>Star on GitHub</GitHubButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded-full border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="animate-in fade-in slide-in-from-top-5 mx-auto mt-3 max-w-5xl rounded-3xl border border-white/10 bg-[#0A0A0A]/90 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl duration-300 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                isActive("/")
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                isActive("/about")
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              About
            </Link>
            <div className="mt-2 border-t border-white/10 pt-2">
              <GitHubButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
