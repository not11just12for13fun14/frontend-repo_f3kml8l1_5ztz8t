import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(59,130,246,0.15),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-sky-400" />
            <span className="text-xs font-medium tracking-wide text-sky-100">
              Tech • Portfolio • Interactive • Playful • Modern
            </span>
          </div>

          <h1 className="text-balance font-extrabold tracking-tight">
            <span className="block text-4xl leading-tight md:text-6xl">
              Doni Wahyudi
            </span>
            <span className="mt-2 block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-2xl text-transparent md:text-4xl">
              AI Software Engineer & Game Developer
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-slate-300 md:text-lg">
            Known for innovative storytelling that blends intelligent systems with playful, immersive worlds.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:scale-[1.02] hover:bg-sky-400 active:scale-[0.99]"
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
