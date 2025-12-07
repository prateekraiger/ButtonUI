import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { Logo } from "./Logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#050505] fixed w-full z-20 top-0 start-0 border-b border-white/5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo size={32} />
            <span className="self-center text-xl text-white font-semibold whitespace-nowrap">ButtonUI</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="https://github.com/prateekraiger"
              target="_blank"
              rel="noreferrer"
              className="text-black bg-white hover:bg-zinc-200 box-border border border-transparent focus:ring-4 focus:ring-white/20 shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none"
            >
              <Github className="w-4 h-4 inline-block mr-2" />
              GitHub
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-400 rounded-lg md:hidden hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/10"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
            </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/5 rounded-lg bg-white/5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#050505]">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-white/5 rounded-sm md:bg-transparent md:text-white md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-white rounded hover:bg-white/10 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;