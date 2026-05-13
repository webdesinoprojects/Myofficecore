"use client";

import { ArrowUpRight, BadgeIndianRupee, Building2, MapPin, Star } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";
import Image from "next/image";

const wideImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
];

const features = [
  {
    title: "Virtual Offices",
    desc: "Premium presence in Delhi, Noida and Gurugram.",
    price: 899,
    icon: Building2,
    className: "md:col-span-2",
    hasMiniBento: true,
  },
  {
    title: "Registered Addresses",
    desc: "Official business registration.",
    price: 900,
    icon: MapPin,
    className: "md:col-span-1",
  },
  {
    title: "Mumbai Hub",
    desc: "India's financial capital.",
    price: 999,
    icon: BadgeIndianRupee,
    className: "md:col-span-1",
  },
  {
    title: "Bangalore Network",
    desc: "Connect with the tech ecosystem.",
    price: 999,
    icon: Building2,
    className: "md:col-span-2",
    hasMiniBento: true,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

const Features = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const isDark = theme === "dark";

  return (
    <section 
      ref={sectionRef}
      className={`relative mx-auto mt-16 w-[calc(100%-40px)] overflow-hidden rounded-[3rem] py-20 transition-colors duration-1000 md:w-[calc(100%-80px)] ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="section-shell relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="max-w-3xl"
          >
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}>
              <Star className="h-2.5 w-2.5 fill-current" />
              Features & Benefits
            </div>
            <h2 className="font-display text-[clamp(1.5rem,4vw,2.8rem)] font-bold uppercase leading-[1.1] tracking-tighter">
              All Office locations come with great facilities and support teams, <span className="opacity-40">ensuring happiness.</span>
            </h2>
          </motion.div>
          <div className={`hidden h-px flex-1 md:block mb-3 ${!isDark ? "bg-slate-200" : "bg-white/10"}`} />
        </div>

        {/* Horizontal Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index + 1}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 hover:shadow-2xl ${item.className} ${
                !isDark 
                ? "border-slate-100 bg-white/60 shadow-sm" 
                : "border-white/5 bg-black/40 shadow-xl"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-4">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110 ${
                    !isDark ? "bg-indigo-50 text-indigo-600" : "bg-indigo-500/10 text-indigo-400"
                  }`}>
                    <item.icon className="h-5 w-5" />
                  </span>
                </div>
                <ArrowUpRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  !isDark ? "text-slate-300" : "text-white/20"
                }`} />
              </div>

              <div className="flex flex-1 items-center justify-between gap-6">
                <div className="flex-1 mt-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className={`font-clean mt-2 text-[13px] leading-relaxed opacity-60 ${!isDark ? "text-slate-600" : "text-white/70"}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Mini Bento for Wide Cards */}
                {item.hasMiniBento && (
                  <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-1.5 h-24 w-32 shrink-0">
                    <div className="relative col-span-1 row-span-2 overflow-hidden rounded-xl bg-slate-100">
                      <Image src={wideImages[0]} alt="Office" fill className="object-cover" />
                    </div>
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl bg-slate-100">
                      <Image src={wideImages[1]} alt="Workspace" fill className="object-cover" />
                    </div>
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl bg-slate-100">
                      <Image src={wideImages[2]} alt="Meeting" fill className="object-cover" />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-end justify-between border-t border-current/5 pt-4">
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] uppercase tracking-widest opacity-40">Starting From</span>
                  <span className="font-display text-xl font-bold tracking-tighter">₹{item.price}</span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-30">/mo</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
