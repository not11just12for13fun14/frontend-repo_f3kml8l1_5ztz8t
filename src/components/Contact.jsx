import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      setStatus('Sending...');
      // No backend required yet; simulate send
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I\'ll get back to you soon.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
        >
          Let’s build something remarkable
        </motion.h2>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input name="name" required placeholder="Your name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-400" />
            <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-400" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-400" />
          <textarea name="message" required rows={5} placeholder="Tell me about your idea…" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-400" />

          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">Or email: <a className="text-sky-300 hover:underline" href="mailto:hello@doni.dev">hello@doni.dev</a></div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:scale-[1.02] hover:bg-sky-400 active:scale-[0.99]">
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>

          {status && (
            <div className="text-sm text-emerald-300">{status}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
