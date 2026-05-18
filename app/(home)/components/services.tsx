"use client";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import {
  BadgeIndianRupee,
  CheckCircle2,
  Coffee,
  FileClock,
  Loader2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Wifi,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { useState, useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

type EnquiryData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const proofLines = [
  "Valid for GST, MCA & Banking",
  "Fastest Documentation",
  "Lowest Price Guaranteed",
  "Round the clock support",
  "Premium Business Address",
  "Instant registration help",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export default function ServicesSection() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<EnquiryData>({
    name: "",
    email: "",
    phone: "",
    message: "I am interested in your services.",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  const submitEnquiry = async () => {
    if (!data.name || !data.phone) {
      toast.error("Name and phone are required");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Enquiry sent successfully");
      setOpen(false);
      setData({ name: "", email: "", phone: "", message: "I am interested in your services." });
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const openEnquiry = (preset: string) => {
    setData((prev) => ({ ...prev, message: preset }));
    setOpen(true);
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
            <Zap className="h-3 w-3 fill-current" />
            Pricing Plans
          </motion.div>
          
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[1] tracking-tighter"
          >
            Premium Workspace <br />
            <span className="opacity-40">At Minimal Costs.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <PricingCard
            title="Virtual Office"
            subtitle="Pan India"
            price="999"
            isDarkTheme={isDark}
            index={2}
            isInView={isInView}
            onEnquiry={() => openEnquiry("Enquiry: Virtual Office Pan India")}
          />
          <PricingCard
            title="Coworking"
            subtitle="Space"
            price="5500"
            isDarkTheme={isDark}
            index={3}
            isInView={isInView}
            onEnquiry={() => openEnquiry("Enquiry: Coworking Space")}
          />
          <PricingCard
            title="Private Office"
            subtitle="Dedicated Space"
            price="15000"
            isDarkTheme={isDark}
            index={4}
            isInView={isInView}
            highlight
            onEnquiry={() => openEnquiry("Enquiry: Private Office")}
          />
          <PricingCard
            title="GST Reg."
            subtitle="Registration Services"
            price="999"
            isDarkTheme={isDark}
            index={5}
            isInView={isInView}
            onEnquiry={() => openEnquiry("Enquiry: GST Registration")}
          />
        </div>
      </div>

      <AnimatePresence>
        {open && (
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
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">Request Info</h3>
              <form onSubmit={(e) => { e.preventDefault(); submitEnquiry(); }} className="mt-8 space-y-4">
                <input
                  placeholder="Name"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={data.name}
                  onChange={e => setData({...data, name: e.target.value})}
                  required
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={data.phone}
                  onChange={e => setData({...data, phone: e.target.value})}
                  required
                />
                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-full py-4 text-xs font-bold uppercase tracking-widest ${
                      !isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
                    }`}
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Enquiry"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                        const text = `${data.message} Name: ${data.name}, Phone: ${data.phone}`;
                        window.open(`https://wa.me/+919990720722?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                    className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
                <button 
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full text-center text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 pt-2"
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

function PricingCard({ title, subtitle, price, isDarkTheme, index, isInView, highlight, onEnquiry }: any) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500 hover:shadow-2xl ${
        highlight 
        ? (isDarkTheme ? "border-indigo-500/30 bg-indigo-500/10" : "border-indigo-100 bg-indigo-50/50")
        : (isDarkTheme ? "border-white/5 bg-black/40" : "border-slate-100 bg-white/60 shadow-sm")
      }`}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between">
            <div>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">{subtitle}</span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mt-1 leading-tight">{title}</h3>
            </div>
            {highlight && <Star className="h-5 w-5 fill-indigo-500 text-indigo-500" />}
        </div>

        <div className="mt-8 flex items-end gap-1">
          <span className="font-display text-4xl font-bold tracking-tighter text-indigo-600">₹{price}</span>
          <span className="mb-1 font-mono text-[10px] uppercase tracking-widest opacity-40">/month</span>
        </div>

        <div className="mt-8 space-y-3">
          {proofLines.map((line) => (
            <div key={line} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500/60" />
              <span className="font-clean text-[13px] opacity-60 leading-tight">{line}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onEnquiry}
        className={`relative z-10 mt-10 flex w-full items-center justify-center gap-2 rounded-full py-4 text-[10px] font-bold uppercase tracking-widest transition-all ${
          highlight 
          ? "bg-indigo-600 text-white hover:bg-indigo-700" 
          : (isDarkTheme ? "bg-white text-slate-900 hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800")
        }`}
      >
        Select Plan <ArrowRight className="h-3.5 w-3.5" />
      </button>

      {/* Decorative gradient for highlighted card */}
      {highlight && (
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      )}
    </motion.div>
  );
}
