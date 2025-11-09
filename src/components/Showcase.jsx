import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const data = [
  {
    title: 'NeuroWeave',
    tag: 'AI Story Engine',
    desc: 'Adaptive narrative system powered by LLMs + behavior graphs for responsive storytelling.',
    accent: '#8b5cf6',
  },
  {
    title: 'EchoGrid',
    tag: 'Procedural Sandbox',
    desc: 'Emergent physics, music, and agents. A playground for systemic surprises.',
    accent: '#22d3ee',
  },
  {
    title: 'SentinelOps',
    tag: 'Realtime ML',
    desc: 'Edge-friendly perception stacks orchestrated for interactive control spaces.',
    accent: '#34d399',
  },
];

const Showcase = () => {
  return (
    <section id="projects" className="relative w-full bg-[#070b16] py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
        >
          Project Showcase
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
