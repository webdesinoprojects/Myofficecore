"use client";

import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { Loader2, ShieldCheck, FileClock, BadgeIndianRupee, MapPin, Wifi, Coffee, MessageCircle, Star, X } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

type EnquiryData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<EnquiryData>({
    name: "",
    email: "",
    phone: "",
    message: "I am interested in your office space services.",
  });

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

      if (!res.ok) {
        let msg = "Failed";
        try {
          const data = await res.json();
          msg = data?.error || data?.message || msg;
          toast.error(msg);
        } catch { }
        throw new Error(msg);
      }

      toast.success("Enquiry sent successfully");
      setOpen(false);
      setLoading(false);
      setData({
        name: "",
        email: "",
        phone: "",
        message: "I am interested in your office space services.",
      });

    } catch {
      toast.error("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  const openEnquiry = (preset: string) => {
    setData((prev) => ({
      ...prev,
      message: preset,
    }));
    setOpen(true);
  };

  const sendWhatsapp = () => {
    const text = `Hey I am ${data.name}, I want to enquire abt office space.`;
    window.open(
      `https://wa.me/+919990720722?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className={`transition-colors duration-1000 ${isDark ? "text-white" : "text-slate-900"}`}>
      <Toaster position="top-right" />

      <div className="section-shell space-y-32 py-20">
        {/* PRODUCT 1 */}
        <ProductBlock
          title="Flexible Approach"
          id="gst"
          description="Whatever the future brings, we’re able to handle that too. So when you need to scale up, cross borders or make the move to hybrid working we're here to support you every step of the way."
          question="If your needs change, we’re flexible"
          image="/HP_1.webp"
          icons={[
            { icon: FileClock, text: "Fastest Documentation" },
            { icon: BadgeIndianRupee, text: "Lowest Price Guaranteed" },
            { icon: ShieldCheck, text: "100% Law Compliant" },
            { icon: MapPin, text: "Professional Address" },
          ]}
          onEnquiry={() => openEnquiry("I want to enquire about Virtual Offices")}
        />

        {/* PRODUCT 2 */}
        <ProductBlock
          reverse
          title="COMPANY REGISTRATION"
          id="virtualoffice"
          price="Starting from Just Rs. 899/- Per Month"
          description="We provide professional office spaces for Company registration at prime location across pan India at affordable prices."
          question="Do you need office space for Company registration?"
          image="/office4.webp"
          icons={[
            { icon: FileClock, text: "Fastest Documentation" },
            { icon: BadgeIndianRupee, text: "Lowest Price Guaranteed" },
            { icon: ShieldCheck, text: "100% Law Compliant" },
            { icon: MapPin, text: "Professional Address" },
          ]}
          onEnquiry={() => openEnquiry("I want to enquire about Office for Company Registration.")}
        />

        {/* PRODUCT 3 */}
        <ProductBlock
          title="Co-working Spaces"
          id="coworking"
          description="We provide professional co-working spaces for your business at prime location across pan India at affordable prices."
          question="Do you need co-working space for your business?"
          image="/office2.webp"
          icons={[
            { icon: Wifi, text: "High Speed Internet" },
            { icon: BadgeIndianRupee, text: "Lowest Price Guaranteed" },
            { icon: Coffee, text: "Complimentary Tea/Coffee" },
            { icon: MapPin, text: "Professional Address" },
          ]}
          onEnquiry={() => openEnquiry("I want to enquire about Co-working Spaces.")}
        />
      </div>

      {/* ENQUIRY MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`relative w-full max-w-lg rounded-[2.5rem] border p-10 shadow-2xl transition-colors duration-500 ${
                isDark ? "border-white/10 bg-slate-900" : "border-slate-100 bg-white"
              }`}
            >
              <button 
                onClick={() => setOpen(false)}
                className="absolute right-8 top-8 p-2 text-gray-400 hover:text-indigo-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-8">Send <span className="text-indigo-500">Enquiry.</span></h2>

              <div className="space-y-4">
                <input
                  placeholder="Your Name"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 ${
                    isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
                  }`}
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <input
                  placeholder="Email Address"
                  type="email"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 ${
                    isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
                  }`}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <input
                  placeholder="Phone Number"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 ${
                    isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
                  }`}
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
                <textarea
                  placeholder="Your Message"
                  className={`w-full resize-none rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 ${
                    isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
                  }`}
                  rows={3}
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  disabled={loading}
                  className={`flex-1 flex items-center justify-center gap-3 rounded-full py-4 font-mono text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 ${
                    !isDark ? "bg-slate-900 text-white shadow-xl" : "bg-white text-slate-900 shadow-2xl"
                  }`}
                  onClick={submitEnquiry}
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  Submit Request
                </button>

                <button
                  className="flex-1 flex items-center justify-center gap-3 rounded-full bg-emerald-500 py-4 font-mono text-[11px] font-bold uppercase tracking-widest text-white shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 hover:bg-emerald-600"
                  onClick={sendWhatsapp}
                >
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* PRODUCT BLOCK */
type ProductBlockProps = {
  title: string;
  description: string;
  question: string;
  image: string;
  id: string;
  icons: { icon: LucideIcon; text: string }[];
  reverse?: boolean;
  onEnquiry: () => void;
  price?: string;
};

function ProductBlock({
  title,
  description,
  question,
  image,
  id,
  icons,
  reverse,
  onEnquiry,
  price,
}: ProductBlockProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid items-center gap-16 md:grid-cols-2 ${reverse ? "md:flex-row-reverse" : ""}`}
      id={id}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
          !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
        }`}>
          <Star className="h-3.5 w-3.5" />
          {title}
        </div>
        
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tighter mb-8">
            {question}
        </h2>
        
        <p className={`font-clean text-lg leading-relaxed opacity-70 mb-10 text-justify ${isDark ? "text-white" : "text-slate-700"}`}>
            {description}
        </p>

        <div className="grid grid-cols-2 gap-6 mb-12">
          {icons.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-500 ${
                  isDark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"
              }`}>
                <item.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-sm font-bold uppercase tracking-tight opacity-80">{item.text}</span>
            </div>
          ))}
        </div>

        {price && (
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-8">{price}</p>
        )}

        <button
          onClick={onEnquiry}
          className={`flex items-center gap-3 rounded-full px-10 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
            !isDark ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" : "bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
          }`}
        >
          Send Enquiry
        </button>
      </div>

      <div className={`relative h-[400px] w-full overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-500 ${
        reverse ? "md:order-1" : ""
      } ${isDark ? "shadow-black/50" : "shadow-slate-900/10"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
