import React from 'react';
import { motion } from 'framer-motion';

const glow = {
  initial: { opacity: 0, y: 20 },
  animate: (i = 0) => ({
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 6 + i,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const FloatingDecor = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Neon orbs */}
      <motion.div
        custom={0}
        variants={glow}
        initial="initial"
        animate="animate"
        className="absolute left-[5%] top-[20%] h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,#22d3ee_0%,transparent_60%)] blur-2xl"
      />
      <motion.div
        custom={1}
        variants={glow}
        initial="initial"
        animate="animate"
        className="absolute right-[10%] top-[35%] h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,#a78bfa_0%,transparent_60%)] blur-2xl"
      />
      <motion.div
        custom={2}
        variants={glow}
        initial="initial"
        animate="animate"
        className="absolute bottom-[10%] left-[20%] h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,#34d399_0%,transparent_60%)] blur-2xl"
      />

      {/* Wireframe ring */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[15%] top-[15%] h-56 w-56 rounded-full border border-white/10 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.05)]"
        style={{
          background:
            'repeating-conic-gradient(from 0deg, rgba(168,85,247,0.15) 0deg 10deg, transparent 10deg 20deg)',
        }}
      />
    </div>
  );
};

export default FloatingDecor;
