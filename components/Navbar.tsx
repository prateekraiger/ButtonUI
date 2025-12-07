import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Star } from "lucide-react";
import { Logo } from "./Logo";

const GitHubButton: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children = "Star on GitHub",
  className = "",
}) => {
  return (
    <a
      href="https://github.com/prateekraiger/ButtonUI"
      target="_blank"
      rel="noreferrer"
      className={`group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />
      <Github className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
      <span className="text-zinc-200 font-medium text-sm group-hover:text-white transition-colors">
        {children}
      </span>
      <Star className="w-3.5 h-3.5 text-yellow-500/50 group-hover:text-yellow-400 transition-colors group-hover:fill-yellow-400" />
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo + Brand + Navigation */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Logo size={28} />
              <span className="text-lg font-bold tracking-tight text-white">
                ButtonUI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/"
                className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                  isActive("/")
                    ? "bg-white/10 border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all ${
                  isActive("/about")
                    ? "bg-white/10 border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20"
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
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 max-w-5xl mx-auto bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`text-sm font-medium px-4 py-2.5 rounded-full transition-all ${
                isActive("/")
                  ? "text-white bg-white/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`text-sm font-medium px-4 py-2.5 rounded-full transition-all ${
                isActive("/about")
                  ? "text-white bg-white/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>
            <div className="pt-2 border-t border-white/10 mt-2">
              <GitHubButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
