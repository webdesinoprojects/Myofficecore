"use client";

import Image from "next/image";
import { CheckCircle2, Star, Sparkles } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export default function VirtualOfficeBenefits() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  const benefits = [
    {
      text: "You receive a premium business address that can be used for company or GST registration.",
      className: "md:col-span-2",
    },
    {
      text: "All required documentation is provided for registrations including NOC, electricity bill, rent agreement, and signage proof.",
      className: "md:col-span-1",
    },
    {
      text: "A virtual office gives you a prestigious office address without paying large deposits, rent, or maintenance costs.",
      className: "md:col-span-1",
    },
    {
      text: "Additional facilities such as meeting rooms, reception support, mail management, and workstations are available when needed.",
      className: "md:col-span-2",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className={`relative mx-auto mt-24 w-[calc(100%-40px)] overflow-hidden rounded-[3.5rem] py-24 transition-colors duration-1000 md:w-[calc(100%-80px)] ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="section-shell relative z-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] items-center">
          
          {/* Left: Sticky Image Area */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="relative"
          >
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}>
              <Sparkles className="h-3 w-3" />
              Strategic Advantages
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tighter mb-8">
              Benefits of <br />
              <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Virtual Office.</span>
            </h2>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src="/desk-address.avif"
                alt="Virtual Office"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: Bento Grid of Benefits */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 h-fit">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index + 1}
                className={`group relative flex flex-col justify-center overflow-hidden rounded-[2.2rem] border p-8 transition-all duration-500 hover:shadow-xl ${item.className} ${
                  !isDark ? "border-slate-100 bg-white/60 shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                    !isDark ? "bg-indigo-50 text-indigo-600" : "bg-indigo-500/10 text-indigo-400"
                  }`}>
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className={`font-clean text-[15px] leading-relaxed opacity-70 ${!isDark ? "text-slate-700" : "text-white/80"}`}>
                    {item.text}
                  </p>
                </div>
                
                {/* Decorative hover element */}
                <div className="absolute -right-4 -bottom-4 -z-10 h-16 w-16 rounded-full bg-indigo-500/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
