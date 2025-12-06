import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github, Sparkles } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-white hover:text-zinc-300 transition-colors"
          >
            ButtonUI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://github.com/prateekraiger"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all font-medium text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/5 pt-4 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2"
              >
                Contact
              </Link>
              <a
                href="https://github.com/prateekraiger"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all font-medium text-sm w-full justify-center"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
