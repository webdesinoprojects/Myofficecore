"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Star,
  MapPin
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { ReactNode } from "react";
import { useTheme } from "@/lib/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer 
      className={`relative mt-24 overflow-hidden border-t transition-colors duration-1000 ${
        isDark ? "border-white/5 text-white" : "border-slate-100 text-slate-900"
      }`} 
      id="contact"
    >
      <div className="section-shell relative py-24">
        
        {/* Top Branding Section */}
        <div className={`mb-16 grid gap-8 rounded-[3rem] border p-10 md:grid-cols-[1.2fr_0.8fr] md:p-12 shadow-2xl ${
          isDark ? "border-white/5 bg-black/40 shadow-black/50" : "border-slate-100 bg-white shadow-slate-900/5"
        }`}>
          <div>
            <h1 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-tighter uppercase leading-[0.95]">
              MyCoreOffice<span className="text-indigo-500">.</span>
            </h1>
            <p className={`mt-6 max-w-2xl font-clean text-sm leading-relaxed opacity-60`}>
              Empowering Innovation, Nurturing Startups. MyCoreOffice is a premium virtual office provider
              fostering entrepreneurial excellence across India.
            </p>
          </div>
          <div className={`flex flex-col justify-center rounded-3xl border p-8 transition-colors duration-500 ${
            isDark ? "border-white/5 bg-white/5" : "border-indigo-50 bg-indigo-50/50"
          }`}>
            <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-2">
                <Star className="h-3 w-3 fill-current" />
                Working Hours
            </div>
            <p className="font-display text-lg font-bold">Monday – Friday</p>
            <p className="font-mono text-sm opacity-60">9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-8">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] opacity-40">
              For Entrepreneurs
            </h4>
            <nav className="flex flex-col gap-4">
              <FooterLink href="/#virtual-office">Virtual Offices</FooterLink>
              <FooterLink href="/#virtual-office">Co-Working Spaces</FooterLink>
              <FooterLink href="/#virtual-office">Meeting Rooms</FooterLink>
              <FooterLink href="/#objective">Business Objective</FooterLink>
            </nav>
          </div>

          <div className="space-y-8">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] opacity-40">
              Community
            </h4>
            <nav className="flex flex-col gap-4">
              <FooterLink href="/About-Us">About Company</FooterLink>
              <FooterLink href="/gst">GST Services</FooterLink>
              <FooterLink href="/company-registration">Registration</FooterLink>
              <FooterLink href="/coworking-space">Spaces</FooterLink>
              <FooterLink href="/business-services">Services</FooterLink>
            </nav>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] opacity-40">
              Get in Touch
            </h4>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className={`rounded-3xl border p-6 transition-all duration-500 ${
                isDark ? "border-white/5 bg-white/5" : "border-slate-100 bg-slate-50"
              }`}>
                <MapPin className="mb-4 h-5 w-5 text-indigo-500" />
                <p className="mb-2 font-display text-sm font-bold uppercase tracking-tight">Delhi HQ</p>
                <p className="font-clean text-[13px] leading-relaxed opacity-60">
                  Aggarwal City Square, Sector-3, Rohini, New Delhi – 110085
                </p>
              </div>

              <div className="grid gap-4">
                <div className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-500 ${
                  isDark ? "border-white/5 bg-white/5" : "border-slate-100 bg-slate-50"
                }`}>
                  <Phone className="h-4 w-4 text-indigo-500" />
                  <Link href="tel:+919990720722" className="font-mono text-xs font-bold tracking-tight hover:text-indigo-500">
                    +91 99907 20722
                  </Link>
                </div>

                <div className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-500 ${
                  isDark ? "border-white/5 bg-white/5" : "border-slate-100 bg-slate-50"
                }`}>
                  <Mail className="h-4 w-4 text-indigo-500" />
                  <Link href="mailto:info@mycoreoffice.com" className="font-mono text-xs font-bold tracking-tight hover:text-indigo-500">
                    info@mycoreoffice.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6">
                <div className="flex gap-3">
                    <SocialLink href="https://facebook.com" label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
                    <SocialLink href="https://twitter.com" label="Twitter"><Twitter className="h-4 w-4" /></SocialLink>
                    <SocialLink href="/" label="Linkedin"><Linkedin className="h-4 w-4" /></SocialLink>
                    <SocialLink href="/" label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
                </div>
                <Link
                    href="https://wa.me/919990720722"
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-emerald-600"
                >
                    <FaWhatsapp size={16} />
                    WhatsApp
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative border-t transition-colors duration-500 ${isDark ? "border-white/5" : "border-slate-100"}`}>
        <div className="section-shell flex flex-col items-center justify-between gap-6 py-10 font-mono text-[10px] font-bold uppercase tracking-widest opacity-40 md:flex-row">
          <div>
            © {new Date().getFullYear()} MyCoreOffice | All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/privacy-policy" className="hover:text-indigo-500">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-indigo-500">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-indigo-500">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      href={href}
      className={`group flex items-center justify-between font-display text-sm font-bold tracking-tight transition-all duration-300 ${
        isDark ? "text-white/60 hover:text-white" : "text-slate-600 hover:text-slate-900"
      }`}
    >
      {children}
      <ArrowUpRight className="h-3 w-3 translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
    </Link>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className={`grid h-11 w-11 place-items-center rounded-2xl border transition-all duration-300 hover:scale-110 active:scale-95 ${
        isDark 
          ? "border-white/5 bg-white/5 text-white/60 hover:border-indigo-500/50 hover:text-indigo-400" 
          : "border-slate-100 bg-slate-50 text-slate-500 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
      }`}
    >
      {children}
    </Link>
  );
}
