"use client";

import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

const points = [
  "Instant professional business address",
  "Networking opportunities and community events",
  "Special discounts on services from global partners",
  "Meeting and conference rooms available for bookings",
  "Professional receptionist to welcome visitors",
  "Round the clock customer support",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

const GetStarted = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  return (
    <section 
      ref={sectionRef}
      id="objective"
      className={`relative mx-auto mt-24 w-[calc(100%-40px)] overflow-hidden rounded-[3.5rem] py-24 transition-colors duration-1000 md:w-[calc(100%-80px)] ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="section-shell relative z-10">
        <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}>
              <Star className="h-3 w-3 fill-current" />
              Your Mission
            </div>
            
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tighter">
              Everything You Need <br />
              <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>To Get Started.</span>
            </h2>

            <div className="mt-10 space-y-6">
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight opacity-90">
                Everything is ready to use, adjustable, and taken care of for you, so you can focus on growing your business.
              </h3>
              <p className={`font-clean text-base leading-relaxed opacity-60 ${!isDark ? "text-slate-700" : "text-white/70"}`}>
                Everything is prepared and ready for you to start right away. Our services are designed to simplify your operations so you can dedicate your time and energy to expanding your business. Along with a professional address, our experienced team manages your mail and welcomes visitors at the front desk.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {points.map((item, index) => (
                  <motion.div 
                    key={item} 
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index + 1}
                    className={`flex items-start gap-3 rounded-[1.5rem] border p-4 transition-all duration-300 hover:scale-[1.02] ${
                      !isDark ? "border-slate-100 bg-white shadow-sm" : "border-white/5 bg-white/5"
                    }`}
                  >
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${!isDark ? "text-indigo-600" : "text-indigo-400"}`} />
                    <span className="text-[13px] font-bold leading-tight opacity-70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="group relative h-[300px] w-full overflow-hidden rounded-[3rem] shadow-2xl md:h-[600px]"
          >
            <Image
              src="/s5.jpg"
              alt="Business Objective"
              fill
              className="object-cover transition duration-1000 group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
