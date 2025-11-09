import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, tag, desc, accent = '#22d3ee', link }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [0, 1], [12, -12]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(x, [0, 1], [-12, 12]), { stiffness: 150, damping: 20 });
  const glow = useTransform(x, [0, 1], ['rgba(168,85,247,0.2)', 'rgba(34,211,238,0.25)']);

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
    >
      <motion.div
        aria-hidden
        style={{
          background: glow,
          filter: 'blur(24px)',
          transform: 'translateZ(-40px)',
        }}
        className="pointer-events-none absolute -inset-6 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">{tag}</div>
        <div className="mt-1 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 transition hover:bg-white/10"
            >
              Demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
        <p className="mt-2 text-sm text-slate-300">{desc}</p>
      </div>

      {/* 3D preview panel */}
      <motion.div
        style={{ transformStyle: 'preserve-3d' }}
        className="relative mt-5 h-40 w-full rounded-xl border border-white/10 bg-slate-900/60"
      >
        <motion.div
          style={{
            translateZ: 35,
          }}
          className="absolute inset-0 overflow-hidden rounded-xl"
        >
          {/* Futuristic grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_35%),linear-gradient(to_bottom_right,rgba(15,23,42,0.6),rgba(2,6,23,0.6))]" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Floating chips */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-4 top-4 h-6 w-10 rounded-md"
            style={{ background: accent, filter: 'brightness(1.2)', opacity: 0.9 }}
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute right-6 bottom-6 h-8 w-8 rotate-45 rounded-md"
            style={{ background: accent, boxShadow: '0 0 20px 4px rgba(34,211,238,0.35)' }}
          />
        </motion.div>

        {/* neon border glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-xl"
          style={{ boxShadow: `0 0 0 1px ${accent}40, 0 0 40px ${accent}30 inset` }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
