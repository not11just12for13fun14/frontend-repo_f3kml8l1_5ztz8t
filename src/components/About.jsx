import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Gamepad2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
        >
          About
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-sky-300">
              <Brain className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">AI Engineering</span>
            </div>
            <p className="text-slate-300">
              I design and deploy intelligent systems that turn complex problems into elegant, adaptive experiences. My work blends research-driven ML with real-time interactivity and robust engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
              <Gamepad2 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Game Development</span>
            </div>
            <p className="text-slate-300">
              From prototypes to polished experiences, I craft playful worlds where systems thinking, narrative, and feel come together—often powered by procedural generation and AI-driven storytelling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
