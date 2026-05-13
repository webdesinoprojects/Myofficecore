"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is a virtual office?",
    answer:
      "A virtual office is a service that allows you to use a professional business address without physically operating from that location. It enables businesses to register for services such as Company Registration and GST Registration using the virtual office address. This helps business owners save significantly on costs while maintaining a credible professional presence.",
  },
  {
    question: "What are the benefits of using a virtual office?",
    answer:
      "A virtual office provides your business with a prime location address at a cost-effective price. It eliminates expenses related to office rent, security deposits, maintenance, and utilities that are typically associated with a traditional office setup.",
  },
  {
    question: "Can I take GST Registration on a virtual office address?",
    answer:
      "Yes, GST registration can be obtained using a virtual office address. Many businesses that operate across multiple states use virtual office addresses to obtain GST registrations in different states across India.",
  },
  {
    question: "What documents will be provided for GST Registration?",
    answer:
      "All necessary documents required for GST registration are provided, including a No Objection Certificate (NOC) from the landlord, a valid rent agreement, and the latest electricity or utility bill of the premises.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-shell py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <div className="eyebrow-pill mx-auto mb-4">
          <HelpCircle className="h-4 w-4" />
          FAQ
        </div>
        <h1 className="section-title text-4xl md:text-5xl">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
      </div>

      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-bold text-slate-950 md:text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-sky-800 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm leading-7 text-slate-600 md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
