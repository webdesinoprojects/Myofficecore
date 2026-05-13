"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg transition-colors duration-500 ${
                isDark ? "border-white/10 bg-black shadow-indigo-500/10" : "border-slate-200 bg-white shadow-slate-900/10"
              }`}>
                <div className={`h-4 w-4 rounded-full border p-2 transition-colors duration-500 ${
                  isDark ? "border-indigo-400 bg-indigo-600" : "border-sky-300 bg-sky-700"
                }`} />
              </div>

              <h3 className={`hidden text-xl font-bold md:block md:pl-20 md:text-4xl font-display transition-colors duration-500 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className={`mb-4 block text-left text-2xl font-bold md:hidden font-display transition-colors duration-500 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {item.title}
              </h3>
              <div className={`rounded-[2.5rem] border p-6 transition-all duration-500 hover:shadow-2xl md:p-10 ${
                isDark ? "border-white/5 bg-black/40 shadow-xl" : "border-slate-100 bg-white/60 shadow-lg shadow-slate-900/5"
              }`}>
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Static timeline line */}
        <div
          style={{ height: height + "px" }}
          className={`absolute left-8 top-0 w-[2px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 ${
            isDark ? "bg-white/10" : "bg-slate-200"
          }`}
        >
          {/* Animated progress line */}
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className={`absolute inset-x-0 top-0 w-[2px] rounded-full ${
                isDark ? "bg-gradient-to-b from-indigo-400 via-indigo-600 to-purple-500" : "bg-gradient-to-b from-sky-300 via-sky-600 to-teal-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
