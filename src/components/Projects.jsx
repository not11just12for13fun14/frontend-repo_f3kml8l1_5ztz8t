import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'NeuroWeave',
    tag: 'AI Story Engine',
    desc: 'A real-time narrative engine that adapts to player intent using LLM-driven plot sculpting and behavior trees.',
    color: 'from-sky-500/20 to-cyan-500/10',
  },
  {
    title: 'EchoGrid',
    tag: 'Procedural Sandbox',
    desc: 'A systemic playground where physics, music, and agents co-create emergent patterns and playful surprises.',
    color: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    title: 'SentinelOps',
    tag: 'Applied ML',
    desc: 'Edge-friendly models orchestrated for realtime perception, analytics, and control in interactive spaces.',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-sky-400" />
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Selected Projects</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-5`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative z-10">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">{p.tag}</div>
                <h3 className="mt-2 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
