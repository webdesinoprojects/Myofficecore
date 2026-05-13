"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ArrowDown, ArrowUp, Star } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

const Objective = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const toggleText = visible ? "Read Less" : "Read More";
  
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
      <div className="section-shell relative z-10 grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        
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
            Core Values
          </div>
          
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tighter">
            MyCoreOffice: <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Business Objective.</span>
          </h2>

          <div className={`mt-10 font-clean text-base leading-relaxed opacity-70 space-y-6 ${!isDark ? "text-slate-700" : "text-white/70"}`}>
            <p className="text-justify">
              Businesses today require flexible workspace solutions, and MyCoreOffice provides professionally managed meeting rooms and virtual offices across India. Our meeting rooms are located in prime business hubs, offering the perfect environment for client presentations, interviews, training sessions, and team meetings. Whether you are looking for a meeting room in Mumbai&apos;s Bandra Kurla Complex or a professional meeting space in Bangalore&apos;s Whitefield, MyCoreOffice offers modern facilities designed for productivity and convenience.
            </p>

            <p className="text-justify">
              Our virtual office services also help businesses establish a credible presence without the need for a physical office. With a prestigious business address, mail handling, and professional support services, companies can operate remotely while maintaining a strong local identity. A virtual office is an ideal solution for startups, remote teams, and businesses expanding into new markets.
            </p>

            <AnimatePresence initial={false}>
              {visible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden space-y-6"
                >
                  <p className="text-justify pt-6">
                    MyCoreOffice is dedicated to providing flexible and comfortable workspaces that support business growth. With an extensive network across major cities and business districts in India, we make it easy to find the right workspace solution for your needs. Explore our wide range of services, including office space for rent, serviced offices, coworking spaces, meeting rooms, and virtual offices. Partner with MyCoreOffice to create a professional, productive, and scalable work environment for your business.
                  </p>
                  <p className="text-justify">
                    MyCoreOffice offers serviced offices and coworking spaces designed to enhance productivity and collaboration. In Hyderabad, HITEC City and Gachibowli are prime locations for businesses in the IT sector. Our serviced offices in these areas provide a professional environment with all the amenities you need to succeed.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setVisible((value) => !value)}
            className={`mt-10 flex items-center gap-3 rounded-full px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${
                !isDark ? "bg-slate-900 text-white shadow-xl" : "bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
            }`}
          >
            {toggleText}
            {visible ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />}
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
          className="group relative h-[350px] w-full overflow-hidden rounded-[3rem] shadow-2xl md:h-[650px]"
        >
          <Image
            src="/office2.webp"
            alt="Business Objective"
            fill
            className="object-cover transition duration-1000 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Objective;
