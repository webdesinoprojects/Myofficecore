"use client";

import Image from "next/image";
import { ShieldCheck, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

const benefits = [
  { name: "Limited Liability Protection", img: "/documents/PANCARD.svg" },
  { name: "Separate Legal Identity", img: "/documents/CAMERA.svg" },
  { name: "Easy Fund Raising", img: "/documents/IDCARD.svg" },
  { name: "Higher Credibility", img: "/documents/dir-add.svg" },
  { name: "Perpetual Succession", img: "/documents/map.svg" },
  { name: "Better Business Opportunities", img: "/documents/notes.svg" },
];

export function PvtCompanyBenefits() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className={`relative mx-auto mt-24 w-[calc(100%-40px)] overflow-hidden rounded-[3.5rem] py-24 transition-colors duration-1000 md:w-[calc(100%-80px)] ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="section-shell relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Company structure
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter"
          >
            Benefits of Registering <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Pvt Company.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border p-8 text-center transition-all duration-500 hover:shadow-2xl ${
                !isDark ? "border-slate-100 bg-white shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
              }`}
            >
              <div className={`relative mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-3xl transition-all duration-500 group-hover:scale-110 ${
                !isDark ? "bg-slate-50" : "bg-white/5"
              }`}>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain drop-shadow-xl"
                />
                
                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-3xl bg-indigo-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-display text-lg font-bold uppercase tracking-tight leading-tight">
                {item.name}
              </h3>
              
              <div className={`mt-6 h-1 w-8 rounded-full transition-all duration-500 group-hover:w-16 ${
                  !isDark ? "bg-indigo-600" : "bg-indigo-400"
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />
    </section>
  );
}
