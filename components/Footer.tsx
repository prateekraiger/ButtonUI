import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Logo size={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                ButtonUI
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              A curated museum of high-performance, interaction-heavy buttons.
              Crafted for the modern web with Tailwind CSS. Open source and free
              to use.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/prateekraiger"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-zinc-400 text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-zinc-400 text-sm hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/prateekraiger"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 text-sm hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm flex items-center gap-2">
            © {currentYear} ButtonUI. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> by{" "}
            <a
              href="https://github.com/prateekraiger"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              @prateekraiger
            </a>
          </p>
          <div className="flex items-center gap-6 text-zinc-600 text-sm">
            <span className="hover:text-zinc-400 transition-colors cursor-default">
              Open Source
            </span>
            <span className="hover:text-zinc-400 transition-colors cursor-default">
              MIT License
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
