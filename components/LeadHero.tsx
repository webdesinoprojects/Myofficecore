"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Loader2 } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

type LeadHeroProps = {
  title: string;
  description: string;
  image: string;
  eyebrow: string;
};

export default function LeadHero({
  title,
  description,
  image,
  eyebrow,
}: LeadHeroProps) {
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    <main className="relative -mt-4 overflow-hidden px-3 pb-5 md:px-5">
      <Toaster position="top-right" />

      <div className="relative min-h-[66vh] overflow-hidden rounded-b-[1.75rem] rounded-t-[1.25rem] bg-slate-950">
        <Image
          src={image}
          alt="Office Space"
          fill
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,23,42,0.86)_0%,rgba(15,23,42,0.58)_55%,rgba(15,23,42,0.18)_100%)]" />
        <div className="soft-grid-bg absolute inset-0 opacity-15" />

        <div className="section-shell relative z-10 flex min-h-[66vh] items-center py-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-xl">
              {eyebrow}
            </div>
            <h1 className="font-display text-5xl font-bold leading-none md:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-white/80 md:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-col justify-start gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setOpenForm(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-50"
              >
                Send Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="#virtual-office"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                Explore
                <ArrowUpRight className="h-4 w-4" />
              </Link>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-2xl"
            >
              <h1 className="font-display text-xl font-bold text-gray-900">
                Request a Callback
              </h1>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-black">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
                  required
                />

                <textarea
                  rows={2}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {loading ? "Sending..." : "Submit"}
                </button>

                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="w-full rounded-full py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
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
