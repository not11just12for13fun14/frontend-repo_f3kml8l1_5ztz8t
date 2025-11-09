import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#050914] font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#050914] py-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Doni Wahyudi — Crafted with code, play, and story.
      </footer>
    </div>
  );
}

export default App;
