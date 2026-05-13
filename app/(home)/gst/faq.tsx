"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do I need a GST Registration Consultant?",
    answer:
      "You can register yourself, but engaging a GST Registration Consultant in Noida ensures that it is being done correctly, saves your time, and avoids you investing in costly errors.",
  },
  {
    question: "How long does online GST registration take?",
    answer:
      "After all documents are prepared, it normally takes between 3–7 working days. A consultant can help speed up the process and prevent delays.",
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
  {
    question: "Will a GST audit consultant correct mistakes in my returns?",
    answer:
      "Yes! A GST Audit Consultant in Noida can actually review your returns correctly, gather any mistakes, and correct them so you won't be penalized or in violation of the law. It's having your work checked by someone who's specialized for your peace of mind.",
  },
  {
    question: "What is the cost of a GST Registration Consultant",
    answer:
      "It varies based on the services you need and the type of business you have. Professional consultants always maintain open, flat-rate fees for the registration, audit, and filing of the returns, so you will never be surprised.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-center text-sky-900 mb-12">
        Frequently Asked Questions
      </h1>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-black/10 rounded-xl overflow-hidden w-full bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-sky-900">
                  {faq.question}
                </span>

                <span
                >
                {openIndex!=null? <ChevronUp className="w-5 h-5 text-sky-900" />:<ChevronDown className="w-5 h-5 text-sky-900" />}
                </span>
              </button>


                {isOpen && (
                  <div
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-black/80 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
       
            </div>
          );
        })}
      </div>
    </section>
  );
}
