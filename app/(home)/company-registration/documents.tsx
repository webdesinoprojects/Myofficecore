"use client";

import Image from "next/image";
import { FileCheck2, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

const documents = [
  { name: "PAN Card of Directors", img: "/documents/PANCARD.svg" },
  { name: "Passport Size Photograph", img: "/documents/CAMERA.svg" },
  { name: "Identity Proof", img: "/documents/IDCARD.svg" },
  { name: "Director's Address Proof", img: "/documents/dir-add.svg" },
  { name: "Business Address Proof", img: "/documents/map.svg" },
  { name: "Digital Signature Certificate", img: "/documents/notes.svg" },
];

export function DocumentsRequired() {
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
            <FileCheck2 className="h-3.5 w-3.5" />
            Registration Checklist
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.95] tracking-tighter"
          >
            Documents Required <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>For Registration.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border p-8 text-center transition-all duration-500 hover:shadow-2xl ${
                !isDark ? "border-slate-100 bg-white shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
              }`}
            >
              <div className={`mx-auto mb-8 grid h-28 w-28 place-items-center rounded-[2rem] transition-colors duration-500 ${
                !isDark ? "bg-indigo-50" : "bg-indigo-500/10"
              }`}>
                <Image
                  src={doc.img}
                  alt={doc.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`mx-auto mb-6 h-px w-12 transition-colors duration-500 ${
                !isDark ? "bg-slate-200" : "bg-white/10"
              }`} />
              <h3 className="font-display text-base font-bold tracking-tight uppercase leading-tight">
                {doc.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
