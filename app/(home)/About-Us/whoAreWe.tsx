"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Target, Users, Award, ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

const images = [
  "/office4.webp",
  "/office2.webp",
  "/office3.webp",
  "/HP_1.webp"
];

export default function WhoAreWe() {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isDark = theme === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative py-16 lg:py-24 transition-colors duration-1000 ${
        isDark ? "text-white" : "text-slate-900"
      }`} 
      id="home"
    >
      <div className="section-shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Image Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className={`relative h-[450px] md:h-[550px] lg:h-[650px] rounded-[3.5rem] overflow-hidden border shadow-2xl transition-all duration-500 ${
              isDark ? "border-white/5 bg-black/40 shadow-black/50" : "border-slate-100 bg-white shadow-slate-900/10"
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[index]}
                    fill
                    alt={`MyCoreOffice Workplace ${index + 1}`}
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevImage}
                      className="p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex gap-2 px-4">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="font-mono text-[10px] font-bold tracking-widest text-white/60">
                    {index + 1} <span className="mx-1">/</span> {images.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -left-12 -top-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl opacity-50" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
                !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
              }`}>
                <Star className="h-3 w-3 fill-current" />
                About Us
              </div>
              <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter">
                Who Are <br />
                <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>We?</span>
              </h1>
            </div>

            <div className={`font-clean text-lg leading-relaxed opacity-70 space-y-6 text-justify ${!isDark ? "text-slate-700" : "text-white"}`}>
              <p>
                MyCoreOffice provides professional office spaces for Company registration at prime locations across PAN India at affordable prices. Whether you need a registered address, a collaborative workspace, or a professional setup for expansion, we strive to be a dependable partner in your business journey.
              </p>
              <p>
                We collectively provide aspiring innovators with the tools to set up new ventures and create sustainable businesses that generate revenue and drive social transformation.
              </p>
            </div>

            {/* Vision Section */}
            <div className={`p-8 rounded-[2.5rem] border transition-all duration-500 ${
              isDark ? "border-indigo-500/20 bg-indigo-500/5 shadow-2xl shadow-indigo-500/5" : "border-indigo-100 bg-indigo-50/50 shadow-xl shadow-indigo-500/5"
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
                }`}>
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">Our Vision</h2>
              </div>

              <p className={`font-clean text-base leading-relaxed opacity-80 ${isDark ? "text-white" : "text-slate-700"}`}>
                We aim to serve as a vibrant and sustainable resource catalyst to support
                and nurture creativity, innovation, and entrepreneurship.
                Our goal is to become a center of excellence that fosters synergy between
                academia and industry, providing one of the most enabling ecosystems in the country.
              </p>
            </div>

            {/* Key Features Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`flex items-center gap-4 p-6 rounded-3xl border transition-all duration-500 ${
                isDark ? "border-white/5 bg-white/5" : "border-slate-100 bg-white shadow-sm"
              }`}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-tight">Expert Network</h3>
                  <p className="font-clean text-xs opacity-50">Industry domain experts nationwide</p>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-6 rounded-3xl border transition-all duration-500 ${
                isDark ? "border-white/5 bg-white/5" : "border-slate-100 bg-white shadow-sm"
              }`}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-tight">Support</h3>
                  <p className="font-clean text-xs opacity-50">From ideation to marketplace</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
