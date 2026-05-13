"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { ArrowUpRight, Loader2, MapPin, MessageCircle, Star } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

type Product = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const Products: Product[] = [
  { id: 1, name: "Delhi", image: "/locations/delhi.jpg", link: "delhi" },
  { id: 2, name: "Noida", image: "/locations/noida.jpg", link: "noida" },
  { id: 3, name: "Mumbai", image: "/locations/mumbai.jpg", link: "mumbai" },
  { id: 4, name: "Gurugram", image: "/locations/gurugram.jpg", link: "gurugram" },
  { id: 5, name: "Tamil Nadu", image: "/locations/tamilnadu.jpg", link: "tamilnadu" },
  { id: 6, name: "Punjab", image: "/locations/punjab.jpg", link: "punjab" },
  { id: 8, name: "Gujarat", image: "/locations/gujarat.jpg", link: "gujarat" },
  { id: 9, name: "Kerala", image: "/locations/kerela.png", link: "kerela" },
  { id: 7, name: "Bangalore", image: "/locations/banglore.jpg", link: "banglore" },
  { id: 10, name: "Telangana", image: "/locations/Hyd.png", link: "telangana" },
];

export default function ProductsPage({ limit }: { limit: number }) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  const openEnquiry = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };

  const sendToWhatsApp = () => {
    const url = `https://wa.me/+919990720722?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  const sendToDatabase = async () => {
    if (!name || !email || !phone || !message) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Enquiry sent successfully");
      setOpen(false);
      setName(""); setEmail(""); setPhone("");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const limitedProducts = showAll ? Products : Products.slice(0, limit);
  const toggleText = showAll ? "See Less" : "See More Areas";

  return (
    <section 
      ref={sectionRef}
      id="virtual-office"
      className={`relative mx-auto mt-24 w-[calc(100%-40px)] overflow-hidden rounded-[3.5rem] py-24 transition-colors duration-1000 md:w-[calc(100%-80px)] ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      <Toaster position="top-right" />
      <div className="section-shell relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}
          >
            <Star className="h-3 w-3 fill-current" />
            Nationwide Presence
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter"
          >
            Virtual Office <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Across India.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {limitedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl ${
                !isDark ? "border-slate-100 bg-white/60 shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
              }`}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <button
                  onClick={() => openEnquiry(`I want to enquire about Virtual Office in ${product.name}`)}
                  className="absolute bottom-6 left-6 right-6 hidden items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-950 opacity-0 shadow-2xl transition-all duration-500 hover:scale-105 group-hover:opacity-100 md:flex"
                >
                  Send Enquiry <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              <div className="p-7">
                <div className={`mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
                  !isDark ? "text-indigo-600" : "text-indigo-400"
                }`}>
                  <MapPin className="h-3 w-3" />
                  {product.name}
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight">Office in {product.name}</h3>
                <p className={`font-clean mt-3 text-sm leading-relaxed opacity-60 ${!isDark ? "text-slate-600" : "text-white/70"}`}>
                  Premium virtual office with excellent connectivity and modern amenities.
                </p>

                <button
                  onClick={() => openEnquiry(`I want to enquire about Virtual Office in ${product.name}`)}
                  className={`mt-6 w-full rounded-full py-4 text-[10px] font-bold uppercase tracking-widest transition-all md:hidden ${
                    !isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
                  }`}
                >
                  Send Enquiry
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className={`rounded-full px-10 py-4 font-mono text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${
                !isDark ? "bg-slate-900 text-white shadow-xl" : "bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
            }`}
          >
            {toggleText}
          </button>
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
              <form onSubmit={(e) => { e.preventDefault(); sendToDatabase(); }} className="mt-8 space-y-4">
                <input
                  placeholder="Name"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className={`w-full resize-none rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 ${
                    isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
                  }`}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
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
                    onClick={sendToWhatsApp}
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
