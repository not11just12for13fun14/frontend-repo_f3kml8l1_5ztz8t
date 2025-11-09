import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import FloatingDecor from './FloatingDecor';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0b1120] to-[#050914] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060a16]/70 via-transparent to-[#060a16]/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(168,85,247,0.18),transparent)]" />
      <FloatingDecor />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs font-medium tracking-wide text-fuchsia-100">
              Futuristic • Interactive • Cyber • Polished
            </span>
          </div>

          <h1 className="text-balance font-extrabold tracking-tight">
            <span className="block text-4xl leading-tight md:text-6xl">
              Doni Wahyudi
            </span>
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 via-sky-300 to-emerald-300 bg-clip-text text-2xl text-transparent md:text-4xl">
              AI Software Engineer & Game Developer
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-slate-300 md:text-lg">
            Building intelligent systems and playful worlds — with smooth motion, clean design, and immersive 3D moments.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:scale-[1.02] hover:bg-fuchsia-400 active:scale-[0.99]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
