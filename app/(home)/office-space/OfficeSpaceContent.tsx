"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Presentation,
  Users,
  Wifi,
  Star,
  Layout,
  Zap
} from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

const bentoImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", // Main Office
  "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",  // Meeting
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",  // Cabin
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",  // Lounge
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",  // Team
];

const features = [
  {
    title: "Executive Meeting Rooms",
    description: "Professional environments designed for high-stakes discussions and team reviews.",
    icon: Presentation,
  },
  {
    title: "Dedicated Cabins",
    description: "Private, secure office suites tailored for leadership and focused work.",
    icon: Layout,
  },
  {
    title: "Shared Office Access",
    description: "Flexible arrangements that provide a professional base within a managed ecosystem.",
    icon: Layout,
  },
  {
    title: "Enterprise Grade WiFi",
    description: "Fiber-optic connectivity with backup systems to ensure zero downtime for your operations.",
    icon: Wifi,
  },
  {
    title: "Workspace Logistics",
    description: "Our on-site team handles all utilities, maintenance, and visitor management.",
    icon: Users,
  },
  {
    title: "Ergonomic Setup",
    description: "Fully furnished spaces with health-conscious furniture for all-day productivity.",
    icon: Monitor,
  },
];

const bullets = [
  "High-End Meeting Rooms",
  "Scalable Conference Areas",
  "Premium Shared Spaces",
  "Designer Ergonomic Furniture",
  "Dedicated On-Site Support",
  "Gigabit Fiber WiFi",
  "Secure Private Cabins",
  "All Utilities Included",
  "24/7 Security & Access",
  "Mail & Courier Handling",
  "Modern Pantry Access",
  "Power Backup Systems",
];

export default function OfficeSpaceContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <main className={`relative transition-colors duration-1000 ${isDark ? "text-white" : "text-slate-900"}`}>
      
      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-5">
        <div className={`relative min-h-[75vh] overflow-hidden rounded-[3.5rem] border shadow-2xl transition-all duration-700 ${
            isDark ? "border-white/5 bg-black/60 shadow-black/50" : "border-slate-100 bg-slate-900 shadow-slate-900/20"
        }`}>
          <Image
            src={bentoImages[0]}
            alt="Premium Office Space"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 transition-transform duration-1000 hover:scale-105"
          />
          
          <div className="section-shell relative z-10 flex min-h-[75vh] items-center py-24 text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
                isDark ? "border-white/10 bg-white/5 text-indigo-300" : "border-white/20 bg-white/10 text-white/90"
              }`}>
                <Star className="h-3 w-3 fill-current" />
                Managed Solutions
              </div>
              <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tighter">
                Premium <br />
                <span className="text-indigo-400">Office Space.</span>
              </h1>
              <p className="mt-8 max-w-2xl font-clean text-lg leading-relaxed text-white/70">
                Establish your headquarters in a workspace designed for excellence. 
                Our fully-managed offices provide everything from designer furniture to enterprise-grade connectivity.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/Contact">
                    <button className={`flex items-center justify-center gap-3 rounded-full px-10 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                        !isDark ? "bg-white text-slate-900 shadow-xl" : "bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
                    }`}>
                        Request a Tour
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
      </section>

      {/* Content & Bento Grid Section */}
      <section className="relative py-24">
        <div className="section-shell relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="font-display text-[clamp(1.5rem,3.5vw,3rem)] font-bold uppercase leading-tight tracking-tighter">
                A home for your <br />
                <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Business Growth.</span>
              </h2>
              <p className={`font-clean text-lg leading-relaxed opacity-70 text-justify ${isDark ? "text-white" : "text-slate-700"}`}>
                As we navigate the modern work landscape, we are committed to ensuring that your workplace experience remains exceptional. 
                Our goal is to provide you a more secure, distraction-free environment while we attend to every logistical detail.
              </p>
              <p className={`font-clean text-lg leading-relaxed opacity-70 text-justify ${isDark ? "text-white" : "text-slate-700"}`}>
                Whether you're a solo founder or an established enterprise, our IT-enabled environments scale effortlessly with your headcount. 
                Experience a workspace that evolves as fast as you do, with zero overhead barriers.
              </p>
            </div>

            <div className={`p-8 rounded-[2.5rem] border transition-all duration-500 ${
              isDark ? "border-indigo-500/20 bg-indigo-500/5" : "border-indigo-100 bg-indigo-50/50"
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
                }`}>
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">Rapid Deployment</h3>
              </div>
              <p className={`font-clean text-base leading-relaxed opacity-80 ${isDark ? "text-white" : "text-slate-700"}`}>
                Move in and start working today. Our plug-and-play spaces are fully outfitted with all necessary utilities, 
                support staff, and infrastructure to ensure your productivity never misses a beat.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Bento Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 grid-rows-3 gap-4 h-[600px] md:h-[700px]"
          >
            <div className="relative col-span-2 row-span-1 overflow-hidden rounded-[2.5rem] border border-current/5 shadow-xl">
              <Image src={bentoImages[0]} alt="Office" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-[2rem] border border-current/5 shadow-xl">
              <Image src={bentoImages[1]} alt="Meeting" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-[2rem] border border-current/5 shadow-xl">
              <Image src={bentoImages[2]} alt="Cabin" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-[2rem] border border-current/5 shadow-xl">
              <Image src={bentoImages[3]} alt="Lounge" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-32 transition-colors duration-1000 ${
          isDark ? "bg-black/20" : "bg-indigo-50/30"
      }`}>
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}>
              <Star className="h-3.5 w-3.5 fill-current" />
              Standard Inclusion
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter">
              The space your <br />
              <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>people deserve.</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group rounded-[2.5rem] border p-10 transition-all duration-500 hover:scale-[1.02] ${
                    isDark ? "border-white/5 bg-white/5 hover:border-indigo-500/40" : "border-slate-100 bg-white shadow-sm hover:shadow-2xl"
                }`}
              >
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500 ${
                    isDark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                }`}>
                    <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
                <p className={`mt-5 font-clean text-sm leading-relaxed opacity-60 ${isDark ? "text-white" : "text-slate-700"}`}>
                    {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {bullets.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex items-start gap-4 rounded-2xl border p-5 transition-all duration-500 ${
                  isDark ? "border-white/5 bg-white/5 hover:bg-white/10" : "border-slate-100 bg-white hover:shadow-lg"
                }`}
              >
                <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
                <span className="font-display text-xs font-bold uppercase tracking-tight opacity-80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden rounded-[3.5rem] p-12 md:p-24 transition-all duration-700 ${
              isDark ? "border border-white/5 bg-indigo-500/10 shadow-black/50" : "bg-slate-900 text-white shadow-2xl"
            }`}
          >
            <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-8">
                <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter">
                    Power your best work <br />
                    <span className="text-indigo-400">with MyCoreOffice.</span>
                </h2>
                <p className={`font-clean max-w-2xl text-lg leading-relaxed opacity-60 ${isDark ? "text-white" : "text-white/80"}`}>
                  Tell us your preferred city and team size, and we'll help you secure a workspace 
                  setup that powers your productivity without the unnecessary complexity.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/Contact">
                    <button className={`flex items-center justify-center gap-3 rounded-full px-12 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                        isDark ? "bg-white text-slate-900" : "bg-white text-slate-900 shadow-xl"
                    }`}>
                        Secure Your Space
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </Link>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                                <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="user" width={40} height={40} />
                            </div>
                        ))}
                    </div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-60 text-white">Join 500+ Businesses</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-24 -top-24 h-[400px] w-[400px] bg-white/5 blur-3xl" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
