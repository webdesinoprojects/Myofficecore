"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

export default function Helpdesk() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className={`relative mx-auto mt-24 mb-24 w-[calc(100%-40px)] overflow-hidden rounded-[3.5rem] py-24 transition-colors duration-1000 md:w-[calc(100%-80px)] ${
        isDark ? "bg-indigo-500/10" : "bg-indigo-50/50"
      }`}
    >
      <div className="section-shell relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}
          >
            <Star className="h-3.5 w-3.5 fill-current" />
            Support Center
          </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Ready to Transform <br />
          <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Your Idea?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-10 font-clean text-lg leading-relaxed opacity-60 max-w-2xl mx-auto ${
            isDark ? "text-white" : "text-slate-700"
          }`}
        >
          Contact and leverage our comprehensive support services to turn your 
          innovative ideas into successful businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <Link href="/Contact">
            <button className={`inline-flex items-center gap-3 rounded-full px-12 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                !isDark ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" : "bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
            }`}>
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
    </section>
  );
}
