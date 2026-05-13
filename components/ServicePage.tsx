"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Coffee,
  CheckCircle2,
  FileText,
  Globe2,
  Handshake,
  Headphones,
  LineChart,
  Monitor,
  Presentation,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
  Star
} from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

const iconMap = {
  Briefcase,
  Coffee,
  FileText,
  Globe2,
  Handshake,
  Headphones,
  LineChart,
  Monitor,
  Presentation,
  ShieldCheck,
  Users,
  Wifi,
};

type ServiceFeature = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageCredit: {
    name: string;
    href: string;
  };
  sections: {
    heading: string;
    body: string;
  }[];
  features: ServiceFeature[];
  bulletsTitle: string;
  bullets: string[];
  ctaTitle: string;
  ctaText: string;
};

export default function ServicePage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imageCredit,
  sections,
  features,
  bulletsTitle,
  bullets,
  ctaTitle,
  ctaText,
}: ServicePageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className={`relative transition-colors duration-1000 ${isDark ? "text-white" : "text-slate-900"}`}>
      
      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-5">
        <div className={`relative min-h-[75vh] overflow-hidden rounded-[3.5rem] border shadow-2xl transition-all duration-700 ${
            isDark ? "border-white/5 bg-black/60 shadow-black/50" : "border-slate-100 bg-slate-900 shadow-slate-900/20"
        }`}>
          <Image
            src={image}
            alt={imageAlt}
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
                {eyebrow}
              </div>
              <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tighter">
                {title}
              </h1>
              <p className="mt-8 max-w-2xl font-clean text-lg leading-relaxed text-white/70">
                {intro}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/Contact">
                    <button className={`flex items-center justify-center gap-3 rounded-full px-10 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                        !isDark ? "bg-white text-slate-900 shadow-xl" : "bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
                    }`}>
                        Send Enquiry
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </Link>
                <Link href="/#virtual-office">
                    <button className={`flex items-center justify-center gap-3 rounded-full border px-10 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl transition-all hover:scale-105 active:scale-95 ${
                        isDark ? "border-white/10 bg-white/5 text-white" : "border-white/20 bg-white/10 text-white"
                    }`}>
                        Explore
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="relative py-24">
        <div className="section-shell relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-32 h-fit"
          >
            <div className={`relative h-[550px] overflow-hidden rounded-[3rem] border transition-all duration-500 shadow-2xl ${
                isDark ? "border-white/5 shadow-black/50" : "border-slate-100 shadow-slate-900/10"
            }`}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover transition duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <Link
              href={imageCredit.href}
              target="_blank"
              className="mt-6 inline-flex font-mono text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
            >
              Photo by {imageCredit.name} on Unsplash
            </Link>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.article
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group rounded-[2.5rem] border p-8 md:p-12 transition-all duration-500 ${
                  !isDark ? "border-slate-100 bg-white shadow-sm hover:shadow-xl" : "border-white/5 bg-black/40 hover:border-indigo-500/20 shadow-2xl shadow-black/20"
                }`}
              >
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold uppercase leading-tight tracking-tighter">
                  {section.heading}
                </h2>
                <div className={`mt-8 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24 ${
                    !isDark ? "bg-indigo-600" : "bg-indigo-400"
                }`} />
                <p className={`mt-10 font-clean text-lg leading-relaxed opacity-70 text-justify ${isDark ? "text-white" : "text-slate-700"}`}>
                  {section.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Bullets Section */}
      <section className={`py-32 transition-colors duration-1000 ${
          isDark ? "bg-black/20" : "bg-indigo-50/50"
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
              {bulletsTitle}
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter">
              Built around real <br />
              <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>business needs.</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
                <div className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg ${
                    isDark ? "bg-indigo-500/20 text-indigo-300" : "bg-indigo-50 text-indigo-600"
                }`}>
                    <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="font-display text-sm font-bold uppercase tracking-tight opacity-80">{item}</span>
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
              isDark ? "border border-white/5 bg-indigo-500/10" : "bg-slate-900 text-white shadow-2xl"
            }`}
          >
            <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1fr_auto]">
              <div className="space-y-8">
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tighter">
                    {ctaTitle}
                </h2>
                <p className={`font-clean max-w-2xl text-lg leading-relaxed opacity-60 ${isDark ? "text-white" : "text-white/80"}`}>
                  {ctaText}
                </p>
              </div>
              <Link href="/Contact">
                <button className={`flex items-center gap-3 rounded-full px-12 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                    isDark ? "bg-white text-slate-900" : "bg-white text-slate-900"
                }`}>
                    Get Started Today
                    <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  feature,
  index,
  isDark
}: {
  feature: ServiceFeature;
  index: number;
  isDark: boolean;
}) {
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group rounded-[2.5rem] border p-10 transition-all duration-500 hover:scale-[1.02] ${
        isDark 
          ? "border-white/5 bg-white/5 hover:border-indigo-500/40 hover:bg-white/10" 
          : "border-slate-100 bg-white shadow-sm hover:shadow-2xl"
      }`}
    >
      <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500 ${
          isDark ? "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white" : "bg-indigo-50 text-indigo-600 group-hover:bg-slate-900 group-hover:text-white"
      }`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
      <p className={`mt-5 font-clean text-sm leading-relaxed opacity-60 ${isDark ? "text-white" : "text-slate-700"}`}>
        {feature.description}
      </p>
    </motion.div>
  );
}
