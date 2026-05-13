"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero2() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className={`relative py-16 transition-colors duration-1000 ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="section-shell">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden rounded-[3.5rem] border shadow-2xl transition-all duration-500 ${
                isDark ? "border-white/5 bg-black/60 shadow-black/50" : "border-slate-100 bg-slate-900 shadow-slate-900/10"
            }`}
        >
          <Image
            src="/office4.webp"
            alt="Office Space"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 transition-transform duration-1000 group-hover:scale-105"
          />
          
          <div className="relative z-10 grid gap-10 p-10 md:grid-cols-[1fr_auto] md:items-center md:p-16">
            <div className="space-y-6">
                <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
                isDark ? "border-white/10 bg-white/5 text-indigo-300" : "border-white/20 bg-white/10 text-white/80"
                }`}>
                <Star className="h-3 w-3 fill-current" />
                Network Expansion
                </div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-bold uppercase leading-[0.95] tracking-tighter text-white">
                Know More About <br />
                <span className="text-indigo-400">Virtual Offices</span> in India.
              </h2>

              <p className="font-clean max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                Virtual Offices For GST & Company Registration,
                Coworking Spaces, Pan India Availability.
              </p>
            </div>

            <Link href="/Contact">
                <button className={`flex items-center gap-3 rounded-full px-10 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                    !isDark ? "bg-white text-slate-900 shadow-xl" : "bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
                }`}>
                    Request Callback
                    <ArrowRight className="h-4 w-4" />
                </button>
            </Link>
          </div>

          {/* Decorative gradients */}
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
