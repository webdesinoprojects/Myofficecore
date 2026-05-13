"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

type Review = {
  text: string;
  name: string;
  designation: string;
};

export const reviews: Review[] = [
  {
    text: "The dashboard layout is incredibly clean and easy to navigate. Even team members who aren't tech-savvy were able to adapt quickly. It has significantly improved collaboration across our departments.",
    name: "Aditi Mehta",
    designation: "Product Manager",
  },
  {
    text: "What impressed me most is the reliability of the platform. It handles complex workflows effortlessly and keeps everything organized. Our daily processes are now much faster and more structured.",
    name: "Rahul Khanna",
    designation: "Technical Lead",
  },
  {
    text: "The integration capabilities are fantastic. We connected our existing tools in minutes and started seeing value almost immediately. It's rare to find a solution that fits so seamlessly into our ecosystem.",
    name: "Neha Bansal",
    designation: "Business Analyst",
  },
  {
    text: "From performance tracking to automated insights, this platform covers everything we need. It helps us stay focused on key metrics and continuously improve our results.",
    name: "Arjun Malhotra",
    designation: "Growth Manager",
  },
  {
    text: "Our team communication and task management improved dramatically after adopting this system. Everything is centralized, transparent, and easy to track.",
    name: "Karan Patel",
    designation: "Team Lead",
  },
  {
    text: "The learning curve was minimal and the benefits were immediate. Within days we could see better organization, faster reporting, and improved team coordination.",
    name: "Ritika Desai",
    designation: "Operations Manager",
  },
];

export default function Reviews() {
  const { theme } = useTheme();
  const [page, setPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = page * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

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
            <Star className="h-3.5 w-3.5" />
            Client voices
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter"
          >
            Hear from <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Our Clients.</span>
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 md:grid-cols-3"
          >
            {currentReviews.map((review, idx) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500 hover:shadow-2xl ${
                  !isDark ? "border-slate-100 bg-white shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
                }`}
              >
                <div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-500 ${
                  !isDark ? "bg-indigo-50 text-indigo-600" : "bg-indigo-500/10 text-indigo-400"
                }`}>
                  <Quote className="h-6 w-6" />
                </div>
                
                <p className={`mb-10 font-clean text-base leading-relaxed opacity-70 ${isDark ? "text-white" : "text-slate-700"}`}>
                  {review.text.length > 200 ? review.text.slice(0, 200) + "..." : review.text}
                </p>
                
                <div>
                  <p className="font-display text-base font-bold tracking-tight uppercase">{review.name}</p>
                  <p className={`font-mono text-[10px] font-bold uppercase tracking-widest opacity-40 ${isDark ? "text-white" : "text-slate-500"}`}>
                    {review.designation}
                  </p>
                </div>

                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show review page ${idx + 1}`}
              onClick={() => setPage(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                page === idx 
                  ? "w-12 " + (!isDark ? "bg-slate-900" : "bg-white")
                  : "w-2.5 " + (!isDark ? "bg-slate-200 hover:bg-slate-300" : "bg-white/10 hover:bg-white/20")
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
