"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Loader2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

/* ── images ─────────────────────────────────────────────── */
const heroImages = [
  {
    src: "/1000350311.jpg",
    alt: "Corporate HQ",
    title: "Premium Address",
    desc: "Establish your brand in India's top business hubs.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    alt: "Modern Meeting Room",
    title: "Meeting Spaces",
    desc: "Fully equipped boardrooms for your big pitches.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    alt: "Minimal Workspace",
    title: "Flexible Desks",
    desc: "Agile environments for modern teams.",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    alt: "Lounge Area",
    title: "Global Network",
    desc: "Connect with our community across 50+ locations.",
    className: "md:col-span-1 md:row-span-1",
  },
];

/* ── stats ──────────────────────────────────────────────── */
const stats = [
  { end: 12, suffix: "+", label: "Years Experience" },
  { end: 86, suffix: "+", label: "Spaces Available" },
  { end: 12, suffix: "k+", label: "Satisfied Clients" },
];

/* ── animation helpers ──────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] as any },
  }),
};

const imgReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.1 },
  visible: (i: number) => ({
    clipPath: "inset(0% 0 0 0)",
    scale: 1,
    transition: {
      clipPath: { duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.19, 1, 0.22, 1] as any },
      scale: { duration: 2, delay: 0.4 + i * 0.1, ease: [0.19, 1, 0.22, 1] as any },
    },
  }),
};

/* ── counter ────────────────────────────────────────────── */
function Counter({
  end,
  suffix,
  active,
}: {
  end: number;
  suffix: string;
  active: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 4);
      setVal(Math.round(ease * end));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

/* ── bento card ─────────────────────────────────────────── */
function BentoCard({ img, idx, isInView }: { img: typeof heroImages[0], idx: number, isInView: boolean }) {
  return (
    <motion.div
      variants={imgReveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={idx}
      className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] ${img.className}`}
      style={{
        boxShadow: "0 10px 30px -10px var(--card-shadow)",
      }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        {/* glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* content */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
            {img.title}
          </p>
          <p className="font-clean mt-2 text-sm text-white leading-snug">
            {img.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── main component ─────────────────────────────────────── */
export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useInView(statsRef, { once: true, amount: 0.5 });

  /* ── form submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        let msg = "Failed";
        try {
          const data = await res.json();
          msg = data?.error || data?.message || msg;
          toast.error(msg);
        } catch {}
        throw new Error(msg);
      }

      await res.json();
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Enquiry sent successfully");
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
      setOpenForm(false);
    }
  };

  return (
    <main
      ref={ref}
      className="relative overflow-hidden"
    >
      <Toaster position="top-right" />

      {/* Hero Content */}
      <div className="section-shell relative z-10 pb-6 pt-4 md:pb-10 md:pt-6 lg:pt-8">
        {/* two-column layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          {/* ── LEFT: Text ── */}
          <div className="flex flex-col justify-center py-6 md:py-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--fg-muted)]">
                Live across 50+ Cities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
              className="font-display text-[clamp(2.8rem,6.5vw,5rem)] font-bold uppercase leading-[0.9] tracking-tighter"
              style={{ color: "var(--fg)" }}
            >
              Modern{" "}
              <br />
              Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--fg)] to-[var(--fg-subtle)]">
                Presence.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="font-clean mt-8 max-w-lg text-[16px] leading-relaxed md:text-lg opacity-80"
              style={{ color: "var(--fg)" }}
            >
              Elevate your business with premium virtual office solutions. 
              Get a professional address, GST registration, and more—all without the overhead.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={() => setOpenForm(true)}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--fg)] px-8 py-4 font-mono text-[13px] font-bold uppercase tracking-widest text-[var(--bg)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Enquiry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <Link
                href="#virtual-office"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-8 py-4 font-mono text-[13px] font-bold uppercase tracking-widest text-[var(--fg)] transition-all hover:bg-[var(--bg-elevated)]"
              >
                Explore Plans <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: Hero Grid (1 large + 2 small) ── */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* large image — spans 2 cols */}
              <motion.div
                variants={imgReveal}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0}
                className="col-span-2 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-2xl shadow-[var(--card-shadow)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden group">
                  <Image
                    src={heroImages[0].src}
                    alt={heroImages[0].alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* two smaller images */}
              {heroImages.slice(1, 3).map((img, idx) => (
                <motion.div
                  key={img.alt}
                  variants={imgReveal}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={idx + 1}
                  className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-xl shadow-[var(--card-shadow)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 27vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* decorative gradient blob */}
            <div className="absolute -z-10 -right-20 -top-20 h-[400px] w-[400px] bg-[var(--brand)] opacity-[0.05] blur-[120px] rounded-full" />
          </div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          ref={statsRef}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={5}
          className="mt-12 grid grid-cols-3 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/40 backdrop-blur-md"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center px-4 py-6 md:py-8"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              <span
                className="font-display text-2xl font-bold md:text-4xl"
                style={{ color: "var(--fg)" }}
              >
                <Counter
                  end={s.end}
                  suffix={s.suffix}
                  active={statsVisible}
                />
              </span>
              <span
                className="font-mono mt-1.5 text-[10px] font-medium uppercase tracking-[0.15em] md:text-xs"
                style={{ color: "var(--fg-muted)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ──────── Enquiry Form Modal ──────── */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.55)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              className="w-full max-w-md rounded-2xl p-7"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
              }}
            >
              <h2
                className="font-display text-xl font-bold"
                style={{ color: "var(--fg)" }}
              >
                Request a Callback
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {(
                  [
                    { type: "text", placeholder: "Name", key: "name" },
                    { type: "email", placeholder: "Email", key: "email" },
                    { type: "tel", placeholder: "Phone", key: "phone" },
                  ] as const
                ).map((input) => (
                  <input
                    key={input.key}
                    type={input.type}
                    placeholder={input.placeholder}
                    maxLength={input.type === "tel" ? 10 : undefined}
                    value={form[input.key]}
                    onChange={(e) =>
                      setForm({ ...form, [input.key]: e.target.value })
                    }
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2"
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      color: "var(--fg)",
                    }}
                  />
                ))}

                <textarea
                  rows={2}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-mono text-[13px] font-semibold uppercase tracking-wider transition-all disabled:cursor-not-allowed disabled:opacity-60"
                  style={{
                    background: "var(--hero-highlight)",
                    color: "var(--hero-highlight-text)",
                  }}
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {loading ? "Sending..." : "Submit"}
                </button>

                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="w-full rounded-full py-2.5 text-sm font-medium transition-all hover:opacity-70"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Cancel
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
