import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-slate-100">
        <a href="#home" className="text-sm font-bold tracking-wide">
          Doni Wahyudi
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a className="text-slate-300 transition hover:text-white" href="#about">About</a>
          <a className="text-slate-300 transition hover:text-white" href="#projects">Projects</a>
          <a className="text-slate-300 transition hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/20">
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
