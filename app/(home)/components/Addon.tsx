"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, FileText, Frame, Sparkles } from "lucide-react";

export default function AddOnServices() {
  const services = [
    {
      id: 1,
      title: "Permanent Sticker Signage",
      desc: "Improve your business presence with a permanent sticker signage displayed within the premises, helping visitors easily recognize your brand.",
      note: "Basic Plan",
      price: "Rs. 499/ month",
      icon: BadgeCheck,
    },
    {
      id: 2,
      title: "Business Application Support",
      desc: "Get professional assistance for GST consultation or simplify your company registration process with support from experienced CA partners.",
      price: "Rs. 3500/ month",
      note: "Recommended Option",
      icon: FileText,
    },
    {
      id: 3,
      title: "Premium Framed Signage",
      desc: "Highlight your brand with an elegant framed signage displayed prominently at your virtual office or coworking location.",
      price: "Rs. 5000/ month",
      note: "Premium Plan",
      icon: Frame,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="soft-grid-bg absolute inset-0 opacity-20" />
      <div className="section-shell relative">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold">
              <Sparkles className="h-4 w-4" />
              Additional Business Solutions
            </div>

            <h2 className="font-display text-4xl font-bold md:text-6xl">
              Business Add-On Services
            </h2>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-6 leading-8 text-white/75">
            Our team understands that every company operates differently.
            For this reason we offer several optional services that can help
            support your operations and make managing your business easier.
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.62, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white p-6 text-slate-950 shadow-xl shadow-black/15"
            >
              <div className="mb-8 flex items-center justify-between">
                <service.icon className="h-12 w-12 rounded-lg bg-sky-50 p-3 text-sky-800" />
                <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-950 font-display text-lg font-bold text-white">
                  {service.id}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-justify leading-7 text-gray-600">
                {service.desc}
              </p>

              {service.note && (
                <p className="mt-4 text-sm font-bold text-sky-700">
                  ({service.note})
                </p>
              )}

              <p className="mt-6 text-sm text-gray-500">Starts from</p>

              <p className="flex items-center gap-2 font-display text-xl font-bold text-slate-950">
                {service.price}
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
