"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Loader2, MessageCircle } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const heroImage = {
  src: "/1000350308.jpg",
  alt: "Business professional working on a laptop",
};

const stats = [
  { end: 12, suffix: "+", label: "Years Experience" },
  { end: 86, suffix: "+", label: "Spaces Available" },
  { end: 12, suffix: "k+", label: "Satisfied Clients" },
];

const motionEase: [number, number, number, number] = [0.215, 0.61, 0.355, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: motionEase },
  }),
};

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

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      }
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
        } catch { }

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
    <main ref={ref} className="relative overflow-hidden">
      <Toaster position="top-right" />

      <section className="relative isolate min-h-screen overflow-visible bg-slate-950">
        <div className="absolute inset-x-0 -top-40 bottom-0 z-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-right -scale-x-100"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_38%,rgba(255,255,255,0.42)_68%,rgba(255,255,255,0.08)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,23,42,0.22)_0%,rgba(15,23,42,0)_46%)]" />
        </div>

        <div className="section-shell relative z-10 flex min-h-screen items-center py-24 pt-40 md:pt-44">
          <div className="max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">
                Live across 50+ Cities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
              className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold uppercase leading-[0.9] text-slate-950"
            >
              Modern <br />
              Business <br />
              Presence.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="font-clean mt-8 max-w-2xl text-base font-semibold leading-relaxed text-slate-900 md:text-lg"
            >
              Elevate your business with premium virtual office solutions. Get a
              professional address, GST registration, and more-all without the
              overhead.
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
                className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-lg bg-slate-950 px-8 py-4 font-mono text-[13px] font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </button>

              <Link
                href="#virtual-office"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-black/10 bg-white/70 px-8 py-4 font-mono text-[13px] font-bold uppercase tracking-widest text-slate-950 shadow-sm backdrop-blur-md transition-all hover:bg-white"
              >
                Explore Plans <ArrowUpRight className="h-4 w-4" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  window.open("https://wa.me/+919990720722?text=Hello,%20I'm%20interested%20in%20your%20services.", "_blank");
                }}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-6 py-4 font-mono text-[13px] font-bold uppercase tracking-widest text-emerald-600 shadow-sm backdrop-blur-md transition-all hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </button>
            </motion.div>

            <motion.div
              ref={statsRef}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={4}
              className="mt-12 grid max-w-3xl grid-cols-3 overflow-hidden rounded-xl border border-black/10 bg-white/60 shadow-sm backdrop-blur-md"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex min-h-24 flex-col items-center justify-center px-3 py-5 text-center"
                  style={{
                    borderRight:
                      i < stats.length - 1 ? "1px solid rgba(15,23,42,0.12)" : "none",
                  }}
                >
                  <span className="font-display text-2xl font-bold text-slate-950 md:text-4xl">
                    <Counter end={s.end} suffix={s.suffix} active={statsVisible} />
                  </span>
                  <span className="font-mono mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 md:text-xs">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
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
