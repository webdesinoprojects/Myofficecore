"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { ArrowUpRight, Loader2, MapPin, Search, Star, X } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

type LocationItem = {
  id: number;
  keyword: string;
  title: string;
  city: string;
  image: string;
  description: string;
};

const locationsData: LocationItem[] = [
  {
    id: 1,
    keyword: "Virtual office address for gst registration",
    title: "GST Registration Address",
    city: "National / Multi-City",
    image: "/locations/gst-reg.jpg",
    description: "Affordable, law-compliant business addresses tailored for new GST registration and compliance across India.",
  },
  {
    id: 2,
    keyword: "Virtual office address for company registration",
    title: "Company Registration Address",
    city: "National / Multi-City",
    image: "/locations/private-limited-company-registration-service-delhi.webp",
    description: "Premium corporate business addresses perfect for official company incorporation, MCA filings, and business representation.",
  },
  {
    id: 3,
    keyword: "Virtual office address in Delhi",
    title: "Delhi Virtual Office",
    city: "Delhi",
    image: "/locations/delhi.jpg",
    description: "Establish your corporate presence in India's capital with a prestigious address, meeting room access, and mail management.",
  },
  {
    id: 4,
    keyword: "Virtual office address in Noida",
    title: "Noida Virtual Office",
    city: "Noida",
    image: "/locations/DI-Noida-Meeting-Place02.webp",
    description: "Position your business in Noida's high-tech commercial sector with premium IT parks and excellent connectivity.",
  },
  {
    id: 5,
    keyword: "Virtual office address in gurgaon",
    title: "Gurugram Virtual Office",
    city: "Gurugram",
    image: "/locations/gurgaon.jpg",
    description: "Operate out of Cyber City / Gurugram, India's leading corporate and financial tech hub with premium office addresses.",
  },
  {
    id: 6,
    keyword: "Virtual office address in banglore",
    title: "Bangalore Virtual Office",
    city: "Bangalore",
    image: "/locations/bangalore.jpg",
    description: "Join the Silicon Valley of India with premier virtual office spaces in major IT parks and prime tech avenues.",
  },
  {
    id: 7,
    keyword: "Virtual office address in Mumbai for gst registration",
    title: "Mumbai GST Address",
    city: "Mumbai",
    image: "/locations/mumbai-gst.jpg",
    description: "Premium commercial business address in India's financial capital, fully compliant for hassle-free GST registration.",
  },
  {
    id: 8,
    keyword: "Virtual office address in rohini",
    title: "Rohini Virtual Office",
    city: "Rohini",
    image: "/locations/crowne-plaza-rohini-7693479320-4x3.avif",
    description: "A professional business address in Rohini, North Delhi's key commercial center, with mail handling and legal support.",
  },
  {
    id: 9,
    keyword: "Virtual office address in pitampura",
    title: "Pitampura Virtual Office",
    city: "Pitampura",
    image: "/locations/pitampura.jpg",
    description: "Establish your office presence in Pitampura's premium commercial hub, close to Metro towers and major trading avenues.",
  },
  {
    id: 10,
    keyword: "Virtual office address in Hyderabad",
    title: "Hyderabad Virtual Office",
    city: "Hyderabad",
    image: "/locations/hyderabad.jpg",
    description: "Professional business address in HITEC City / Hyderabad, perfect for fast-growing IT startups and established firms.",
  },
  {
    id: 11,
    keyword: "Virtual office address in Ahmedabad",
    title: "Ahmedabad Virtual Office",
    city: "Ahmedabad",
    image: "/locations/ahmedabad.jpg",
    description: "Enhance your business reach in Ahmedabad with prestigious addresses in prime commercial developments.",
  },
  {
    id: 12,
    keyword: "Virtual office address in Chennai",
    title: "Chennai Virtual Office",
    city: "Chennai",
    image: "/locations/chennai.jpg",
    description: "Establish a southern headquarters with a premium commercial address in Chennai's primary corporate corridors.",
  },
  {
    id: 13,
    keyword: "Virtual office address in chandigarh",
    title: "Chandigarh Virtual Office",
    city: "Chandigarh",
    image: "/locations/chandigarh.jpg",
    description: "Premium address in Chandigarh, India's beautifully planned union territory, ensuring a clean business image.",
  },
  {
    id: 14,
    keyword: "Virtual office address in himachal",
    title: "Himachal Virtual Office",
    city: "Himachal",
    image: "/locations/himachal.jpg",
    description: "Compliant corporate address in Himachal Pradesh, ideal for local registrations, logistics nodes, and business compliance.",
  },
  {
    id: 15,
    keyword: "Virtual office address in jammu",
    title: "Jammu Virtual Office",
    city: "Jammu",
    image: "/locations/jammu.jpg",
    description: "Expand your presence in Jammu & Kashmir with an official local address for government tenders, GST, and MCA.",
  },
  {
    id: 16,
    keyword: "Virtual office address in Delhi for gst registration",
    title: "Delhi GST Address",
    city: "Delhi",
    image: "/locations/delhi-gst.jpg",
    description: "Fast-track your GST registration in Delhi with law-compliant paperwork, NOC, utility bills, and proof of ownership.",
  },
  {
    id: 17,
    keyword: "Virtual office address in kolkata",
    title: "Kolkata Virtual Office",
    city: "Kolkata",
    image: "/locations/kolkata.jpg",
    description: "Establish your business in the cultural and commercial gateway of East India with a premier address in Kolkata.",
  },
  {
    id: 18,
    keyword: "Virtual office address in Navi Mumbai",
    title: "Navi Mumbai Virtual Office",
    city: "Navi Mumbai",
    image: "/locations/Shifting-to-Navi-Mumbai.webp",
    description: "Get a modern office address in Navi Mumbai's rapidly expanding commercial and industrial hubs with full NOC.",
  },
  {
    id: 19,
    keyword: "Virtual office address in Ranchi",
    title: "Ranchi Virtual Office",
    city: "Ranchi",
    image: "/locations/ranchi-office.jpg",
    description: "Establish a local registration address in Ranchi, Jharkhand's major industrial and administrative center.",
  },
  {
    id: 20,
    keyword: "Virtual office address in goa",
    title: "Goa Virtual Office",
    city: "Goa",
    image: "/locations/goa-office.webp",
    description: "Work remotely with a creative and registered office presence in Goa, excellent for digital nomads and consultants.",
  },
];

export default function LocationsClient() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationItem | null>(null);

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [isPending, startTransition] = useTransition();

  const filteredLocations = locationsData.filter((loc) => {
    const s = search.toLowerCase();
    return (
      loc.keyword.toLowerCase().includes(s) ||
      loc.title.toLowerCase().includes(s) ||
      loc.city.toLowerCase().includes(s) ||
      loc.description.toLowerCase().includes(s)
    );
  });

  const openEnquiry = (loc: LocationItem) => {
    setSelectedLocation(loc);
    setMessage(`Hello, I'm interested in: "${loc.keyword}". Please send pricing and document requirements.`);
    setOpen(true);
  };

  const sendToWhatsApp = () => {
    if (!selectedLocation) return;
    const url = `https://wa.me/+919990720722?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  const sendToDatabase = async (e: React.FormEvent) => {
    e.preventDefault();
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
      toast.success("Enquiry sent successfully! We will contact you shortly.");
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`relative min-height-screen py-24 px-4 transition-colors duration-1000 ${isDark ? "bg-[#050505]" : "bg-[#f8fbff]"}`}>
      <Toaster position="top-right" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}
          >
            <Star className="h-3 w-3 fill-current" />
            PAN India Coverage
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight tracking-tighter"
          >
            Explore Virtual Office <br />
            <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Locations Across India</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`mt-4 mx-auto max-w-xl text-sm leading-relaxed opacity-70 ${!isDark ? "text-slate-600" : "text-slate-300"}`}
          >
            Find prestigious, legal, and premium business addresses in over 20+ prominent business cities and compliance hubs across the country.
          </motion.p>
        </div>

        {/* Real-time Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl mb-16 relative"
        >
          <div className={`relative flex items-center rounded-3xl border shadow-lg backdrop-blur-md overflow-hidden ${
            isDark ? "border-white/10 bg-black/40 shadow-black/40" : "border-slate-200 bg-white/60 shadow-indigo-100/50"
          }`}>
            <Search className={`absolute left-5 h-5 w-5 ${isDark ? "text-white/40" : "text-slate-400"}`} />
            <input
              type="text"
              placeholder="Search by city, keyword, registration type..."
              className={`w-full py-5 pl-14 pr-6 text-sm font-semibold outline-none transition-all ${
                isDark ? "bg-transparent text-white placeholder-white/40" : "bg-transparent text-slate-800 placeholder-slate-400"
              }`}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className={`absolute right-5 p-1 rounded-full hover:bg-[var(--bg-elevated)] transition ${
                  isDark ? "text-white/60" : "text-slate-600"
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Locations Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredLocations.map((loc) => (
              <motion.div
                layout
                key={loc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-500 hover:shadow-2xl flex flex-col justify-between ${
                  !isDark ? "border-slate-100 bg-white/60 shadow-sm" : "border-white/5 bg-black/40 shadow-xl"
                }`}
              >
                <div>
                  <div className="relative h-48 overflow-hidden rounded-t-[2rem]">
                    <Image
                      src={loc.image}
                      alt={loc.title}
                      fill
                      className="object-cover transition duration-1000 group-hover:scale-110"
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <button
                      onClick={() => openEnquiry(loc)}
                      className="absolute bottom-4 left-4 right-4 hidden items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-950 opacity-0 shadow-2xl transition-all duration-500 hover:scale-105 group-hover:opacity-100 md:flex"
                    >
                      Enquire Now <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className={`mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
                      !isDark ? "text-indigo-600" : "text-indigo-400"
                    }`}>
                      <MapPin className="h-3.5 w-3.5" />
                      {loc.city}
                    </div>
                    <h3 className="font-display text-lg font-bold tracking-tight mb-2 line-clamp-2">
                      {loc.title}
                    </h3>
                    <p className={`font-clean text-xs leading-relaxed opacity-75 line-clamp-3 ${!isDark ? "text-slate-600" : "text-white/70"}`}>
                      {loc.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openEnquiry(loc)}
                    className={`w-full rounded-2xl py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                      !isDark ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    Get Address
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredLocations.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center py-20 px-4 rounded-[2.5rem] border ${
              isDark ? "border-white/5 bg-black/20" : "border-slate-100 bg-white/40"
            }`}
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-bold">No locations found</h3>
            <p className={`mt-2 text-sm opacity-60 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              We couldn't find any location matching "{search}". <br />Try searching for another city or keyword.
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-6 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {open && selectedLocation && (
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
              className={`w-full max-w-md rounded-[2.5rem] p-8 border shadow-2xl relative ${
                isDark ? "bg-slate-900 border-white/10 text-white" : "bg-white border-slate-100 text-slate-900"
              }`}
            >
              <button
                onClick={() => setOpen(false)}
                className={`absolute top-6 right-6 p-2 rounded-full transition ${
                  isDark ? "text-white/60 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2 pr-6">
                Enquire Address
              </h3>
              <p className={`text-xs opacity-60 mb-6 ${isDark ? "text-white/70" : "text-slate-500"}`}>
                For: <span className="font-semibold">{selectedLocation.title}</span>
              </p>

              <form onSubmit={sendToDatabase} className="space-y-4">
                <input
                  placeholder="Name"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500 ${
                    isDark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-900"
                  }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500 ${
                    isDark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-900"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  className={`w-full rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500 ${
                    isDark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-900"
                  }`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className={`w-full resize-none rounded-2xl border p-4 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500 ${
                    isDark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-slate-50 text-slate-900"
                  }`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white py-4 text-[10px] font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Send Request"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={sendToWhatsApp}
                    className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 px-5 py-4 transition-all"
                    title="Send WhatsApp Message"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.472.945c-5.437 0-9.862 4.371-9.866 9.802-.001 1.762.48 3.479 1.39 5.016L1.93 21.17l5.525-1.428z" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
