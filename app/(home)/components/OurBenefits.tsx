"use client";

import Image from "next/image";
import { Sparkles, Star } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

const benefits = [
  { name: "End to End Online User Friendly Process for Agreement", img: "/userfriendly.svg" },
  { name: "Lowest Prices Guaranteed. No Hidden Charges Ever", img: "/lowprices.svg" },
  { name: "Duly Vetted Documents For Successful Registrations At The Address", img: "/documents.svg" },
  { name: "Quickest Virtual-Office Address", img: "/approval.svg" },
  { name: "GST Registration on Same Day", img: "/gst.svg" },
  { name: "Best After Sales Service", img: "/service.svg" },
  { name: "Premium Meeting Rooms", img: "/meeting.svg" },
  { name: "Professional Addresses. Quick documentation.", img: "/professional.svg" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export function OurBenefits() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  return (
    <section 
      ref={sectionRef}
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
            <Sparkles className="h-3.5 w-3.5" />
            Why MyCoreOffice
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter"
          >
            Why <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Choose Us?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={index}
              className={`group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border p-8 text-center transition-all duration-500 hover:shadow-2xl ${
                !isDark ? "border-slate-100 bg-white shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
              }`}
            >
              <div className={`relative mx-auto mb-8 h-28 w-28 rounded-3xl p-4 transition-colors duration-500 ${
                !isDark ? "bg-indigo-50" : "bg-indigo-500/10"
              }`}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain p-4 transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-display text-[15px] font-bold leading-tight tracking-tight uppercase">
                {item.name}
              </h3>

              {/* Decorative hover element */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
