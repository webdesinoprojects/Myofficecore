"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Handshake,
  Loader2,
  Rocket,
  ShieldCheck,
  Zap,
  Star,
} from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

const benefits = [
  { name: "Same Day GSTIN", img: Zap, description: "Simplified registration on the same day. No inspector visits. No waiting." },
  { name: "MSME Focused", img: Rocket, description: "Specially for proprietors, freelancers, and startups with simple structures." },
  { name: "Virtual Ready", img: Building2, description: "GST ready documentation supporting fast registrations consistently." },
  { name: "Faster Onboarding", img: Handshake, description: "Supplier onboarding and registration move faster with our docs." },
];

const gstImages = [
  "/office1.webp",
  "/locations/1000350314.jpg",
  "/office4.webp",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export function GST() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const isDark = theme === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Enquiry sent successfully");
      setOpenForm(false);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative mx-auto mt-24 w-[calc(100%-40px)] overflow-hidden rounded-[3.5rem] py-24 transition-colors duration-1000 md:w-[calc(100%-80px)] ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <Toaster position="top-right" />

      <div className="section-shell relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}
          >
            <ShieldCheck className="h-3 w-3" />
            Compliance First
          </motion.div>
          
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter"
          >
            GST Registration <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Accelerated.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="font-clean mx-auto mt-8 max-w-xl text-lg opacity-60"
          >
            Go from weeks to days. Faster approvals, cleaner onboarding, and zero wait times for serious businesses.
          </motion.p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index + 2}
                className={`group relative overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500 hover:shadow-2xl ${
                  !isDark ? "border-slate-100 bg-white/60 shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
                }`}
              >
                <div className={`mb-6 grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                  !isDark ? "bg-indigo-50 text-indigo-600" : "bg-indigo-500/10 text-indigo-400"
                }`}>
                  <item.img className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">{item.name}</h3>
                <p className={`font-clean mt-3 text-sm leading-relaxed opacity-60 ${!isDark ? "text-slate-600" : "text-white/70"}`}>
                  {item.description}
                </p>
                {/* hover background glow */}
                <div className="absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={6}
            className={`relative flex flex-col justify-between overflow-hidden rounded-[3rem] p-10 shadow-2xl ${
              !isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
            }`}
          >
            {/* Themed Background Grid for Card */}
            <div className={`absolute inset-0 opacity-10 ${!isDark ? "bg-[radial-gradient(#ffffff20_1px,transparent_1px)]" : "bg-[radial-gradient(#00000010_1px,transparent_1px)]"} [background-size:24px_24px]`} />
            
            <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                  <Star className="h-3 w-3 fill-current" />
                  Same Day Delivery
                </div>
                <h1 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-tighter">
                  Ready on the <br /> Same Day
                </h1>
                <p className={`font-clean mt-6 text-base leading-relaxed ${!isDark ? "text-white/70" : "text-slate-600"}`}>
                  Get your GST Registration approved by the department on the same day. 
                  Skip the long waits and inspector visits.
                </p>
                
                <button
                  onClick={() => setOpenForm(true)}
                  className={`mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 font-mono text-[12px] font-bold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    !isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
                  }`}
                >
                  Start Registration <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Card Bento Grid of Images */}
              <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 h-64 w-full lg:w-72 shrink-0">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-indigo-500/10"
                >
                  <Image src={gstImages[0]} alt="Approval" fill className="object-cover" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-indigo-500/10"
                >
                  <Image src={gstImages[1]} alt="Documentation" fill className="object-cover" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-indigo-500/10"
                >
                  <Image src={gstImages[2]} alt="Business" fill className="object-cover" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className={`w-full max-w-md rounded-[2.5rem] p-10 ${
                isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
              }`}
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">Request Callback</h3>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  placeholder="Name"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  required
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  maxLength={10}
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={2}
                  className={`w-full resize-none rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-bold uppercase tracking-widest ${
                    !isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
                  }`}
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Submit Enquiry"}
                </button>
                <button 
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="w-full text-center text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100"
                >
                  Cancel
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
