"use client";

import { Timeline } from "@/components/timeline";
import { useTheme } from "@/lib/ThemeContext";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Process() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isDark = theme === "dark";

  const data = [
    {
      title: "STAGE-1",
      content: (
        <div className="space-y-6">
          <p className={`text-sm md:text-base opacity-70 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
            Start your company registration journey with MyCoreOffice by filling
            out the initial registration form. This helps collect basic
            information about your business and founders.
          </p>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
              Information required
            </h4>
            <ul className={`list-disc pl-5 space-y-2 text-sm md:text-base opacity-80 ${isDark ? "text-white" : "text-black"}`}>
              <li>Proposed company name</li>
              <li>Founder / director details</li>
              <li>Contact information</li>
              <li>Business activity / industry</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>What happens next</h4>
            <p className={`text-sm md:text-base opacity-80 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
              Once the form is submitted, your details are reviewed and you are
              guided to the next step of providing required documents for
              verification.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "STAGE-2",
      content: (
        <div className="space-y-6">
          <p className={`text-sm md:text-base opacity-70 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
            After completing the form, you will need to submit the necessary
            documents required for company registration.
          </p>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
              Documents usually required
            </h4>
            <ul className={`list-disc pl-5 space-y-2 text-sm md:text-base opacity-80 ${isDark ? "text-white" : "text-black"}`}>
              <li>Identity proof of directors (PAN / Aadhaar)</li>
              <li>Address proof of directors</li>
              <li>Registered office address proof</li>
              <li>Passport size photographs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>Verification</h4>
            <p className={`text-sm md:text-base opacity-80 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
              The submitted documents are reviewed and verified to ensure they
              meet regulatory requirements for company registration.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "STAGE-3",
      content: (
        <div className="space-y-6">
          <p className={`text-sm md:text-base opacity-70 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
            Once documents are verified, you proceed to complete the payment for
            the company registration process.
          </p>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>Fees may include</h4>
            <ul className={`list-disc pl-5 space-y-2 text-sm md:text-base opacity-80 ${isDark ? "text-white" : "text-black"}`}>
              <li>Government registration fees</li>
              <li>Processing and filing charges</li>
              <li>Digital signature and compliance fees</li>
              <li>Documentation and administrative costs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>Confirmation</h4>
            <p className={`text-sm md:text-base opacity-80 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
              After payment is completed, your application is officially
              processed for company registration.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "STAGE-4",
      content: (
        <div className="space-y-6">
          <p className={`text-sm md:text-base opacity-70 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
            Your company registration is completed and official documents are
            issued confirming the formation of your company.
          </p>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
              What you will receive
            </h4>
            <ul className={`list-disc pl-5 space-y-2 text-sm md:text-base opacity-80 ${isDark ? "text-white" : "text-black"}`}>
              <li>Certificate of Incorporation</li>
              <li>Company Identification Number (CIN)</li>
              <li>Official registration confirmation</li>
              <li>Basic company incorporation documents</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-display text-sm font-bold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>You&apos;re ready</h4>
            <p className={`text-sm md:text-base opacity-80 leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
              Once registration is complete, your company is legally recognized
              and ready to begin operations.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div ref={sectionRef} className="w-full py-16">
      <div className="section-shell text-center mb-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
              !isDark ? "border-slate-200 bg-white/50 text-indigo-600" : "border-white/10 bg-black/20 text-indigo-300"
            }`}
          >
            <Star className="h-3 w-3 fill-current" />
            Step-by-Step
          </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Registration <span className={!isDark ? "text-indigo-600" : "text-indigo-400"}>Process.</span>
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`mt-6 font-clean max-w-xl mx-auto text-base opacity-60 ${isDark ? "text-white" : "text-slate-900"}`}
        >
          A simple step-by-step guide to registering your company with MyCoreOffice.
        </motion.p>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}
