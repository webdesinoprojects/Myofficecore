"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Star
} from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { motion, useInView } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
};

export default function ContactUs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const interests = [
    "GST Compliance",
    "Business Compliance",
    "Mailing Address",
    "Desk Address for Registration",
    "Bank Account Registration",
    "Ecommerce Registration",
    "Transferring Address",
    "Need Help / Clarification",
    "Virtual office address",
    "Virtual office address for GST registration",
    "Virtual office address for company registration",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterest = (value: string) => {
    setFormData({ ...formData, queryType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        queryType: "",
        message: "",
      });
    } catch {
      setStatus("Submission failed. Try again.");
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className={`relative mx-auto mt-24 w-full max-w-[95%] overflow-hidden rounded-[2.5rem] py-16 transition-colors duration-1000 md:max-w-[calc(100%-80px)] md:rounded-[3.5rem] md:py-24 ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <div className="section-shell relative z-10 grid gap-6 md:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        
        {/* Contact Info Side */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-10 rounded-[2rem] bg-slate-950 p-6 shadow-2xl shadow-slate-900/40 md:rounded-[2.5rem] md:p-10 text-white"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-300">
              <Star className="h-3 w-3 fill-current" />
              Get in Touch
            </div>
            <h1 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tighter uppercase">
              Let&apos;s talk <br />
              on something <span className="text-indigo-400">great</span> <br />
              together.
            </h1>
          </div>

          <div className="space-y-3 md:space-y-4">
            <Link href="tel:+919990720722" className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 md:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors md:h-12 md:w-12">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">Call Us</span>
                <span className="font-display text-base font-bold md:text-lg">+91 99907 20722</span>
              </div>
            </Link>
            
            <Link href="mailto:info@mycoreoffice.com" className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 md:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors md:h-12 md:w-12">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">Email Us</span>
                <span className="font-display text-base font-bold md:text-lg break-all">info@mycoreoffice.com</span>
              </div>
            </Link>
          </div>

          <div className="flex gap-4">
            <SocialIcon><Facebook className="h-4 w-4" /></SocialIcon>
            <SocialIcon><Twitter className="h-4 w-4" /></SocialIcon>
            <SocialIcon><Instagram className="h-4 w-4" /></SocialIcon>
            <SocialIcon><Linkedin className="h-4 w-4" /></SocialIcon>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          onSubmit={handleSubmit}
          className={`relative overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 md:rounded-[2.5rem] md:p-10 ${
            !isDark ? "border-slate-100 bg-white shadow-xl" : "border-white/5 bg-black/40 shadow-2xl shadow-black/50"
          }`}
        >
          <div className="relative z-10 flex flex-col gap-6 md:gap-8">
            <div>
                <p className={`font-display text-lg font-bold uppercase tracking-tight md:text-xl ${!isDark ? "text-slate-900" : "text-white"}`}>
                    I&apos;m interested in:
                </p>
                <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
                    {interests.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => handleInterest(item)}
                        className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 md:px-5 md:py-2.5 md:text-[11px] ${
                        formData.queryType === item
                            ? (isDark ? "bg-white text-slate-900 border-white" : "bg-slate-900 text-white border-slate-900")
                            : (isDark ? "border-white/10 bg-white/5 text-white/60 hover:border-indigo-400 hover:text-indigo-300" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-indigo-600 hover:text-indigo-600")
                        }`}
                    >
                        {item}
                    </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={`rounded-xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 md:rounded-2xl ${
                  isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
                }`}
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile"
                required
                className={`rounded-xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 md:rounded-2xl ${
                  isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
                }`}
              />
            </div>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={`rounded-xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 md:rounded-2xl ${
                isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
              }`}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Locations / Message"
              rows={4}
              className={`resize-none rounded-xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 md:rounded-2xl ${
                isDark ? "border-white/10 bg-white/5 placeholder:text-white/20" : "border-slate-100 bg-slate-50 placeholder:text-slate-400"
              }`}
            />

            <button 
                type="submit" 
                className={`flex items-center justify-center gap-3 rounded-full py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 md:py-5 md:text-[11px] ${
                    !isDark ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" : "bg-white text-slate-900"
                }`}
            >
              SEND MESSAGE
              <ArrowRight className="h-4 w-4" />
            </button>

            {status && <p className="text-center font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-500">{status}</p>}
          </div>

          {/* Decorative background element */}
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />
        </motion.form>
      </div>
    </section>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-white/60 transition-all hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-400 md:h-12 md:w-12">
      {children}
    </div>
  );
}
