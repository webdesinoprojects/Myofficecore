"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ── images ─────────────────────────────────────────────── */
const aboutImages = [
  {
    src: "/1000350311.jpg",
    alt: "Executive Boardroom",
    title: "Strategic Spaces",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/office2.webp",
    alt: "Open Workspace",
    title: "Collaboration Hubs",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/office3.webp",
    alt: "Modern Desk",
    title: "Focused Work",
    className: "md:col-span-1 md:row-span-1",
  },
];

/* ── animation helpers ──────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] as any },
  }),
};

const imgReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.05 },
  visible: (i: number) => ({
    clipPath: "inset(0% 0 0 0)",
    scale: 1,
    transition: {
      clipPath: { duration: 1.1, delay: 0.3 + i * 0.1, ease: [0.19, 1, 0.22, 1] as any },
      scale: { duration: 1.8, delay: 0.3 + i * 0.1, ease: [0.19, 1, 0.22, 1] as any },
    },
  }),
};

export default function AboutPage() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <main
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-32"
      id="about"
    >
      <section className="section-shell relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

        {/* ── LEFT: Aceternity Style Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 h-[500px] md:h-[600px]">
          {aboutImages.map((img, idx) => (
            <motion.div
              key={img.alt}
              variants={imgReveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={idx}
              className={`group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-surface)] ${img.className} shadow-2xl shadow-[var(--card-shadow)]`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* label */}
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-1.5 shadow-sm"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--fg-muted)]">
              Since 2012
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight"
            style={{ color: "var(--fg)" }}
          >
            Empowering <br />
            Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--fg)] to-[var(--fg-subtle)]">
              Growth.
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="mt-10 space-y-6"
          >
            <p className="font-clean text-[16px] leading-relaxed text-[var(--fg)] opacity-80 md:text-lg">
              We are committed to making professional office solutions accessible to businesses of every size.
              establish a credible presence without unnecessary complexity or cost.
            </p>

            <p className="font-clean text-[16px] leading-relaxed text-[var(--fg-muted)]">
              With a strong network of prime locations across India, we deliver reliable, law compliant office solutions backed by transparent pricing and efficient documentation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            className="mt-12"
          >
            <Link
              href="/About-Us"
              className="group inline-flex items-center gap-3 font-mono text-[13px] font-bold uppercase tracking-widest text-[var(--fg)] hover:opacity-70 transition-opacity"
            >
              Learn More About Us
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </motion.div>

          {/* decorative blob */}
          <div className="absolute -z-10 -left-24 -bottom-24 h-[350px] w-[350px] bg-[var(--brand)] opacity-[0.04] blur-[100px] rounded-full" />
        </div>

      </section>
    </main>
  );
}
