import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0f1f] via-[#0b1120] to-[#050914] text-white">
      {/* Background softness */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_-10%,rgba(168,85,247,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_10%_110%,rgba(56,189,248,0.10),transparent)]" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:py-24 lg:grid-cols-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 space-y-6 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs font-medium tracking-wide text-fuchsia-100">
              Futuristic • Interactive • Cyber • Polished
            </span>
          </div>

          <h1 className="text-balance font-extrabold tracking-tight">
            <span className="block text-4xl leading-tight md:text-6xl">Doni Wahyudi</span>
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 via-sky-300 to-emerald-300 bg-clip-text text-2xl text-transparent md:text-4xl">
              AI Software Engineer & Game Developer
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-slate-300 md:text-lg">
            Building intelligent systems and playful worlds — with smooth motion, clean design, and immersive 3D moments.
          </p>

          <div className="mt-6 flex items-center gap-3">
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

        {/* Compact 3D Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto h-[300px] w-full max-w-[680px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_-20px_rgba(168,85,247,0.35)] backdrop-blur-md md:h-[380px]">
            {/* Subtle edge gradients that do not block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0a0f1f]/60 via-transparent to-[#0a0f1f]/40" />
            <Spline
              scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">Subtle 3D — lightweight and focused</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
